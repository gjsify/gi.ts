import { ClosureType, GenericType, Generic, TypeIdentifier, GenerifiedType, GenerifiedTypeIdentifier, ThisType } from "../gir";
import { GirClass, GirBaseClass, resolveTypeIdentifier } from "../gir/class";
import { GirCallback, GirFunctionParameter, GirFunction, GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import { GenericNameGenerator } from "../gir/generics";
import { GirNSRegistry } from "../gir/registry";
import { GirVisitor } from "../visitor";

export class GenericVisitor extends GirVisitor {
    registry: GirNSRegistry;

    constructor(registry: GirNSRegistry) {
        super();

        this.registry = registry;
    }

    visitCallback = (node: GirCallback) => {
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

            return generified;
        }

        return node;
    }

    visitClass = (_node: GirClass) => {
        const node = _node.copy();

        const { namespace } = _node;

        const resolvedParent = node.parent ? resolveTypeIdentifier(namespace, node.parent) : null;
        const resolvedInterfaces = node.interfaces
            .map(i => resolveTypeIdentifier(namespace, i))
            .filter((c): c is GirBaseClass => c != null);

        let derivatives = node.generics.filter(generic => generic.parent != null);

        node.interfaces = node.interfaces.map(iface => {
            const generic = derivatives.find(d => d.parent?.is(iface.namespace, iface.name));

            if (generic) {
                return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [
                    generic.type
                ]);
            }

            const resolved = resolvedInterfaces.find(i => i.getType().equals(iface));

            if (resolved) {
                if (resolved.generics.length === 1) {
                    return new GenerifiedTypeIdentifier(iface.name, iface.namespace, [
                        node.getType()
                    ]);
                }
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

            const resolved = resolvedParent;

            if (resolved?.generics.length === 1) {
                node.parent = new GenerifiedTypeIdentifier(resolved.name, resolved.namespace.name, [
                    node.getType()
                ]);
            }
        }

        return node;
    }

    visitParameter = (node: GirFunctionParameter) => {
        const member = node.parent;


        const unwrapped = node.type.unwrap();
        // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.

        if (unwrapped instanceof ClosureType) {
            const internal = unwrapped.type.unwrap();

            if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
                if (member instanceof GirFunction && member.parameters.length >= 2) {
                    const generified = node.copy({
                        type: node.type.rewrap(new GenerifiedTypeIdentifier(internal.name, internal.namespace, [
                            member.parameters[0].type
                        ]))
                    });

                    return generified;
                } else if (member instanceof GirStaticClassFunction) {
                    const generified = node.copy({
                        type: node.type.rewrap(new GenerifiedTypeIdentifier(internal.name, internal.namespace, [
                            member.parent.getType()
                        ]))
                    });

                    return generified;
                } else if (member instanceof GirClassFunction) {
                    const generified = node.copy({
                        type: node.type.rewrap(new GenerifiedTypeIdentifier(internal.name, internal.namespace, [ThisType]))
                    });

                    return generified;
                }
            }
        }

        return node;
    }

    visitFunction = (node: GirFunction) => {
        const unwrapped = node.return_type.unwrap();
        const shouldGenerify = unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object");

        if (shouldGenerify) {
            const genericReturnType = new GenericType("T");

            const copied = node.copy({
                return_type: genericReturnType
            });

            copied.generics.push(new Generic(genericReturnType, unwrapped));

            return copied;
        }

        return node;
    }

    private generifyStandaloneClassFunction = (node: GirClassFunction) => {
        const unwrapped = node.return_type.unwrap();
        const shouldGenerify = unwrapped instanceof TypeIdentifier && unwrapped.is("GObject", "Object");

        if (shouldGenerify) {
            const genericReturnType = new GenericType("T");

            const copied = node.copy({
                returnType: genericReturnType
            });

            copied.generics.push(new Generic(genericReturnType, unwrapped));

            return copied;
        }

        return node;
    }

    visitStaticClassFunction = (node: GirStaticClassFunction) => {
        return this.generifyStandaloneClassFunction(node);
    }

    visitClassFunction = (node: GirClassFunction) => {
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

        return this.generifyStandaloneClassFunction(node);
    }

    visitVirtualClassFunction = (node: GirVirtualClassFunction) => {
        return this.visitClassFunction(node);
    }
}