import * as React from 'react';
import * as fs from 'fs';

import {
  ErrorJson,
  Alias,
  Callback,
  Class,
  Const,
  Constructor,
  Enum,
  Function,
  Interface,
  Record
} from './types/nodes.js';

import FunctionNode from './nodes/Function.js';
import ClassNode from './nodes/Class.js';
import EnumNode from './nodes/Enum.js';
import AliasNode from './nodes/Alias.js';
import ConstantNode from './nodes/Constant.js';
import NamespaceNode from './nodes/Namespace.js';
import CallbackNode from './nodes/Callback.js';
import InterfaceNode from './nodes/Interface.js';

import EnumMemberComponent from './components/EnumMember.js';
import ConstructorComponent from './components/Constructor.js';

import type { Json, NamespaceJson, ImportsJson, EnumMemberJson } from '@gi.ts/lib/generators/json.js';

import {
  JsonGenerator,
  FormatGenerator,
  GirEnumMember,
  GirEnum,
  GirCallback,
  GirAlias,
  GirClass,
  GirClassFunction,
  GirConst,
  GirConstructor,
  GirError,
  GirField,
  GirFunction,
  GirFunctionParameter,
  GirInterface,
  GirNamespace,
  GirProperty,
  GirRecord,
  GirSignal,
  GirSignalType,
  GirStaticClassFunction,
  GirVirtualClassFunction,
  GenerationOptions,
  GirDirectAllocationConstructor,
} from '@gi.ts/lib';
import { basename, dirname, join } from 'path';
import { renderElement } from './renderer.cjs';
import { promisify as $ } from 'util';
import { Link, LinkContext, NamedNode, NamespaceContext, PathFormat } from './path.js';

const writeFile = $(fs.writeFile);
const mkdir = $(fs.mkdir);

async function renderRoute(dirPath: string, path: string, elem: React.ReactElement, verbose = false) {
  if (verbose) {
    console.log(`Rendering... ${path}`);
  }

  const output = renderElement(elem);
  const joined = join(dirPath, `${path}.html`);

  await writeFile(joined, output);
}

type HtmlRenderer<Children = undefined> = React.FC<Children extends undefined ? {} : { children: Children }>;

interface RenderNode<T extends Json> {
  json: T;
  node: HtmlRenderer;
}

interface RenderedNamespace {
  kind: string;
  version: string;
  name: string;
  imports: ImportsJson;
  alias: RenderNode<Alias>[];
  enums: RenderNode<Enum>[];
  functions: RenderNode<Function>[];
  callbacks: RenderNode<Callback>[];
  constants: RenderNode<Const>[];
  records: RenderNode<Record>[];
  interfaces: RenderNode<Interface>[];
  classes: RenderNode<Class>[];
}

export class JsonToHtmlGenerator {
  options: GenerationOptions;

  constructor(options: GenerationOptions) {
    this.options = options;
  }

  generateCallback(json: Callback): HtmlRenderer {
    return () => <CallbackNode node={json} />;
  }

  generateAlias(json: Alias): HtmlRenderer {
    return () => <AliasNode node={json} />;
  }

  generateConstructor(json: Constructor): HtmlRenderer {
    return () => <ConstructorComponent node={json} />;
  }

  generateConstructorFunction(_node: GirConstructor): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateRecord(json: Record): HtmlRenderer {
    return () => <ClassNode node={json} />;
  }

  generateInterface(json: Interface): HtmlRenderer {
    return () => <InterfaceNode node={json} />;
  }

  generateEnumMember(json: EnumMemberJson): HtmlRenderer {
    return () => <EnumMemberComponent node={json} />;
  }

  generateError(json: ErrorJson): HtmlRenderer {
    // TODO: Handle errors specifically.
    return () => <ClassNode node={(json as unknown) as Class} />;
  }

  generateEnum(json: Enum): HtmlRenderer {
    return () => {
      return (
        <EnumNode node={json}>
          {json.members?.map((member, i) => {
            const Member = this.generateEnumMember(member);

            return <Member key={i} />;
          })}
        </EnumNode>
      );
    };
  }

  generateConst(json: Const): HtmlRenderer {
    return () => <ConstantNode node={json} />;
  }

  generateClass(json: Class): HtmlRenderer {
    return () => <ClassNode node={json} />;
  }

  generateParameter(_node: GirFunctionParameter): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateProperty(_node: GirProperty, _construct?: boolean): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateField(_node: GirField): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateSignal(_node: GirSignal, _type?: GirSignalType): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateDirectAllocationConstructor(_node: GirDirectAllocationConstructor): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateFunction(json: Function): HtmlRenderer {
    return () => <FunctionNode node={json} />;
  }

  generateClassFunction(_node: GirClassFunction): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateStaticClassFunction(_node: GirStaticClassFunction): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  generateVirtualClassFunction(_node: GirVirtualClassFunction): HtmlRenderer {
    throw new Error('Method not implemented.');
  }

  async generateNamespace(json: NamespaceJson): Promise<RenderedNamespace> {
    const { kind, name, version, imports } = json;

    function shouldGenerate(json: { private?: boolean }) {
      return !json.private;
    }

    const interfaces = json.interfaces.filter(shouldGenerate).map(i => ({
      node: this.generateInterface(i),
      json: i
    }));
    const classes = json.classes.filter(shouldGenerate).map(c => ({
      node: this.generateClass(c),
      json: c
    }));
    const records = json.records.filter(shouldGenerate).map(r => ({
      node: this.generateRecord(r),
      json: r
    }));
    const constants = json.constants.filter(shouldGenerate).map(c => ({
      node: this.generateConst(c),
      json: c
    }));
    const callbacks = json.callbacks.filter(shouldGenerate).map(f => ({
      node: this.generateCallback(f),
      json: f
    }));
    const functions = json.functions.map(f => ({
      node: this.generateFunction(f),
      json: f
    }));
    const enums = json.enums.filter(shouldGenerate).map(e => ({
      node: this.generateEnum(e),
      json: e
    }));
    const alias = json.alias.filter(shouldGenerate).map(a => ({
      node: this.generateAlias(a),
      json: a
    }));

    return {
      kind,
      name,
      imports,
      version,
      interfaces,
      classes,
      callbacks,
      records,
      constants,
      functions,
      enums,
      alias
    };
  }
}

export class HtmlGenerator extends FormatGenerator<[Json, HtmlRenderer]> {
  private _jsonGenerator: JsonGenerator;
  private _jsonToHtmlGenerator: JsonToHtmlGenerator;

  constructor(namespace: GirNamespace, options: GenerationOptions) {
    super(namespace, options);

    this._jsonGenerator = new JsonGenerator(namespace, options);
    this._jsonToHtmlGenerator = new JsonToHtmlGenerator(options);
  }

  generateCallback(node: GirCallback): [Callback, HtmlRenderer] {
    const json = this._jsonGenerator.generateCallback(node);

    return [json, this._jsonToHtmlGenerator.generateCallback(json)];
  }

  generateAlias(node: GirAlias): [Alias, HtmlRenderer] {
    const json = this._jsonGenerator.generateAlias(node);

    return [json, this._jsonToHtmlGenerator.generateAlias(json)];
  }

  generateConstructor(node: GirConstructor): [Constructor, HtmlRenderer] {
    const json = this._jsonGenerator.generateConstructor(node);

    return [json, this._jsonToHtmlGenerator.generateConstructor(json)];
  }

  generateConstructorFunction(_node: GirConstructor): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateRecord(node: GirRecord): [Record, HtmlRenderer] {
    const json = this._jsonGenerator.generateRecord(node);

    return [json, this._jsonToHtmlGenerator.generateRecord(json)];
  }

  generateInterface(node: GirInterface): [Interface, HtmlRenderer] {
    const json = this._jsonGenerator.generateInterface(node);

    return [json, this._jsonToHtmlGenerator.generateInterface(json)];
  }

  generateError(node: GirError): [ErrorJson, HtmlRenderer] {
    const json = this._jsonGenerator.generateError(node);

    return [json, this._jsonToHtmlGenerator.generateError(json)];
  }

  generateEnum(node: GirEnum): [Enum | Record, HtmlRenderer] {
    const json = this._jsonGenerator.generateEnum(node);

    return [json, this._jsonToHtmlGenerator.generateEnum(json)];
  }

  generateConst(node: GirConst): [Const, HtmlRenderer] {
    const json = this._jsonGenerator.generateConst(node);

    return [json, this._jsonToHtmlGenerator.generateConst(json)];
  }

  generateClass(node: GirClass): [Class, HtmlRenderer] {
    const json = this._jsonGenerator.generateClass(node);

    return [json, this._jsonToHtmlGenerator.generateClass(json)];
  }

  generateFunction(node: GirFunction): [Function, HtmlRenderer] {
    const json = this._jsonGenerator.generateFunction(node);

    return [json, this._jsonToHtmlGenerator.generateFunction(json)];
  }

  generateEnumMember(node: GirEnumMember): [Json, HtmlRenderer] {
    const json = this._jsonGenerator.generateEnumMember(node);

    return [json, this._jsonToHtmlGenerator.generateEnumMember(json)];
  }

  private _paths = new Map();
  private _nm?: string;

  get slug(): string {
    if (!this._nm) this._nm = `${this.namespace.name.toLowerCase()}-${this.namespace.version}`;

    return this._nm;
  }

  private _makePath(node: NamedNode) {
    const nm = this.slug;
    const path = `/${nm}/${node.name}`;

    this._paths.set(node.name, path);

    return path;
  }

  async generateNamespace(node: GirNamespace): Promise<[NamespaceJson, HtmlRenderer]> {
    const json = await this._jsonGenerator.generateNamespace(node);

    return [json, _ => <NamespaceNode node={json}></NamespaceNode>];
  }

  async stringifyNamespace(node: GirNamespace) {
    const { namespace, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${namespace.name}...`);
    }

    if (!options.outputPath) {
      throw new Error(`@gi.ts/generator-html requires an output path.`);
    }

    const [json, NamespaceRenderer] = await this.generateNamespace(node);
    const {
      name,
      version,
      imports,
      classes,
      interfaces,
      records,
      constants,
      functions,
      enums,
      alias
    } = await this._jsonToHtmlGenerator.generateNamespace(json);

    const outputPath = options.outputPath;
    this._nm = basename(outputPath);

    const meta = {
      namespace: name,
      version,
      imports
    };

    const getNamespaceVersion = (name: string) => {
      const imported = this.namespace.getInstalledImport(name);

      return imported?.version ?? null;
    };

    const getPath = (node: NamedNode) => {
      return this._makePath(node);
    };

    try {
      await mkdir(outputPath, { recursive: true });
    } catch {}

    const verbose = options.verbose;

    if (verbose) {
      console.debug(`Printing ${namespace.name}...`);
    }

    function wrapRenderer<T extends NamedNode>(renderNode: RenderNode<T>): Promise<void> {
      const { node: HtmlRenderer, json } = renderNode;

      if (verbose) {
        console.log(`Rendering ${namespace.name}.${node.name} for version ${namespace.version}`);
      }

      return renderRoute(
        dirname(outputPath),
        getPath(json),
        <NamespaceContext.Provider
          value={{
            getPath,
            getNamespaceVersion,
            meta,
            pathFormat: PathFormat.SLUG_MAJOR
          }}
        >
          <HtmlRenderer />
        </NamespaceContext.Provider>,
        verbose
      );
    }

    function wrapRenderers<T extends NamedNode>(renderers: RenderNode<T>[]): Promise<void>[] {
      return renderers.map(renderer => wrapRenderer(renderer));
    }

    await Promise.all(
      wrapRenderers([
        ...classes,
        ...interfaces,
        ...records,
        ...constants,
        ...functions,
        ...enums,
        ...alias
      ] as RenderNode<NamedNode>[])
    );

    if (verbose) {
      console.log(`Rendering index.html for ${namespace.name} ${namespace.version}`);
    }

    return renderElement(
      <NamespaceContext.Provider
        value={{
          getNamespaceVersion,
          getPath,
          meta,
          pathFormat: PathFormat.SLUG_MAJOR
        }}
      >
        <LinkContext.Provider value={Link}>
          <NamespaceRenderer />
        </LinkContext.Provider>
      </NamespaceContext.Provider>
    );
  }

  // The JSON renderer already builds these nodes.

  generateClassFunction(_node: GirClassFunction): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateStaticClassFunction(_node: GirStaticClassFunction): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateVirtualClassFunction(_node: GirVirtualClassFunction): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateParameter(_node: GirFunctionParameter): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateProperty(_node: GirProperty, _construct?: boolean): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateField(_node: GirField): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }

  generateSignal(_node: GirSignal, _type?: GirSignalType): [Json, HtmlRenderer] {
    throw new Error('Method not implemented.');
  }
}
