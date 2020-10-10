import { ClosureType, GenericType, Generic, TypeExpression, TypeIdentifier, GenerifiedType, GenerifiedTypeIdentifier } from "../gir";
import { GirAlias } from "../gir/alias";
import { GirRecord, GirInterface, GirClass, GirBaseClass, resolveTypeIdentifier } from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnumMember, GirError, GirEnum } from "../gir/enum";
import { GirCallback, GirConstructor, GirFunctionParameter, GirFunction, GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import { GenericNameGenerator } from "../gir/generics";
import { GirProperty, GirField } from "../gir/property";
import { GirNSRegistry } from "../gir/registry";
import { GirSignal, GirSignalType } from "../gir/signal";
import { GirVisitor } from "../visitor";

export class GenericVisitor extends GirVisitor {
    registry: GirNSRegistry;

    constructor(registry: GirNSRegistry) {
        super();

        this.registry = registry;
    }

    visitType(node: TypeExpression) {
        return node;
    }

    visitCallback(node: GirCallback) {
        const shouldGenerify = node.parameters.some(p => {
            const type = p.type.unwrap();
            return type instanceof TypeIdentifier && type.is("GObject", "Object");
        });

        if (shouldGenerify) {
            const generateName = GenericNameGenerator.new();

            let generics = [] as Generic[];

            const GenerifiedParameters = node.parameters.map(p => {
                const type = p.type.unwrap();

                if (type instanceof TypeIdentifier && type.is("GObject", "Object")) {
                    const Identifier = generateName();
                    const generic = new GenericType(Identifier);
                    generics.push(new Generic(generic, type));

                    return p.copy({
                        type: p.type.rewrap(generic)
                    });
                }

                return p;
            });

            const generified = node.copy({
                parameters: GenerifiedParameters
            });

            generified.generics = generics;

            console.log("with generics", JSON.stringify(generics))

            return generified;
        }

        return node;
    }

    visitAlias(node: GirAlias) {
        return node;
    }

    visitConstructor(node: GirConstructor) {
        return node;
    }

    visitConstructorFunction(node: GirConstructor) {
        return node;
    }

    visitRecord(node: GirRecord) {
        return node;
    }

    visitInterface(node: GirInterface) {
        return node;
    }

    visitEnumMember(node: GirEnumMember) {
        return node;
    }

    visitError(node: GirError) {
        return node;
    }

    visitEnum(node: GirEnum) {
        return node;
    }

    visitConst(node: GirConst) {
        return node;
    }

    visitClass(_node: GirClass) {
        const node = _node.copy();

        const { namespace } = _node;

        const resolvedParent = node.parent ? resolveTypeIdentifier(namespace, node.parent) : null;
        const resolvedInterfaces = node.interfaces
            .map(i => resolveTypeIdentifier(namespace, i))
            .filter((c): c is GirBaseClass => c != null);

        [...(resolvedParent ? [resolvedParent] : []), ...resolvedInterfaces, node as GirBaseClass]
            .map(g => {
                return [g, g.generics] as const
            })
            .forEach(([g, generics]) => {
                generics.forEach(generic => {
                    const defaultType = generic.defaultType;

                    if (!defaultType || node.generics.every(g => !g.defaultType?.equals(defaultType))) {
                        node.addGeneric({
                            deriveFrom: g.getType(),
                            ...(defaultType ? { default: defaultType } : {})
                        })
                    }
                });
            })

        let derivatives = node.generics.filter(generic => generic.parent != null);

        node.interfaces = node.interfaces.map(iface => {
            const generic = derivatives.find(d => d.parent?.is(iface.namespace, iface.name));

            if (generic) {
                return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [
                    generic.type
                ]);
            }

            return iface;
        });

        if (node.parent) {
            const parentType = node.parent;

            const generic = derivatives.find(d => d.parent?.is(parentType.namespace, parentType.name));

            if (generic) {
                node.parent = new GenerifiedTypeIdentifier(parentType.name, parentType.namespace, [
                    generic.type
                ]);
            }
        }

        return node;
    }

    visitParameter(node: GirFunctionParameter) {
        const member = node.parent;

        if (member instanceof GirClassFunction && !(member instanceof GirStaticClassFunction)) {
            const unwrapped = node.type.unwrap();

            // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.

            if (unwrapped instanceof ClosureType) {
                const internal = unwrapped.type.unwrap();

                if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
                    const generified = node.copy({
                        type: node.type.rewrap(new GenerifiedType(internal, new GenericType("this")))
                    });
                    return generified;
                }
            }
        }

        return node;
    }

    visitProperty(node: GirProperty) {
        return node;
    }

    visitField(node: GirField) {
        return node;
    }

    visitSignal(node: GirSignal, type?: GirSignalType) {
        return node;
    }

    visitFunction(node: GirFunction) {
        return node;
    }

    visitClassFunction(node: GirClassFunction) {
        if (node.parent instanceof GirBaseClass) {
            const clazz = node.parent;

            if (clazz.generics.length > 0) {
                let returnType = node.return_type;

                for (const generic of clazz.generics) {
                    if (generic.defaultType?.equals(node.return_type.unwrap())) {
                        returnType = node.return_type.rewrap(generic.type);
                        break;
                    }
                }

                return node.copy({
                    parameters: node.parameters.map(p => {
                        for (const generic of clazz.generics) {
                            if (generic.defaultType?.equals(p.type.unwrap())) {

                                return p.copy({
                                    type: p.type.rewrap(generic.type)
                                });
                            }
                        }

                        return p;
                    }),
                    outputParameters: node.output_parameters.map(p => {
                        for (const generic of clazz.generics) {
                            if (generic.defaultType?.equals(p.type.unwrap())) {
                                return p.copy({
                                    type: p.type.rewrap(generic.type)
                                });
                            }
                        }

                        return p;
                    }),
                    returnType
                });
            }
        }
        return node;
    }

    visitStaticClassFunction(node: GirStaticClassFunction) {
        return node;
    }

    visitVirtualClassFunction(node: GirVirtualClassFunction) {
        return node;
    }
}