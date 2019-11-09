
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as JavaScriptCore from "javascriptcore";
import * as Soup from "soup";
import * as WebKit2WebExtension from "webkit2webextension";
/**
 * webkit2webextension.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type WebExtensionInitializeFunction = (extension: WebExtension) => void;
export type WebExtensionInitializeWithUserDataFunction = (extension: WebExtension, user_data: GLib.Variant) => void;
export const DOM_CSS_RULE_CHARSET_RULE: number;
export const DOM_CSS_RULE_FONT_FACE_RULE: number;
export const DOM_CSS_RULE_IMPORT_RULE: number;
export const DOM_CSS_RULE_MEDIA_RULE: number;
export const DOM_CSS_RULE_PAGE_RULE: number;
export const DOM_CSS_RULE_STYLE_RULE: number;
export const DOM_CSS_RULE_UNKNOWN_RULE: number;
export const DOM_CSS_VALUE_CSS_CUSTOM: number;
export const DOM_CSS_VALUE_CSS_INHERIT: number;
export const DOM_CSS_VALUE_CSS_PRIMITIVE_VALUE: number;
export const DOM_CSS_VALUE_CSS_VALUE_LIST: number;
export const DOM_ELEMENT_ALLOW_KEYBOARD_INPUT: number;
export const DOM_EVENT_AT_TARGET: number;
export const DOM_EVENT_BLUR: number;
export const DOM_EVENT_BUBBLING_PHASE: number;
export const DOM_EVENT_CAPTURING_PHASE: number;
export const DOM_EVENT_CHANGE: number;
export const DOM_EVENT_CLICK: number;
export const DOM_EVENT_DBLCLICK: number;
export const DOM_EVENT_DRAGDROP: number;
export const DOM_EVENT_FOCUS: number;
export const DOM_EVENT_KEYDOWN: number;
export const DOM_EVENT_KEYPRESS: number;
export const DOM_EVENT_KEYUP: number;
export const DOM_EVENT_MOUSEDOWN: number;
export const DOM_EVENT_MOUSEDRAG: number;
export const DOM_EVENT_MOUSEMOVE: number;
export const DOM_EVENT_MOUSEOUT: number;
export const DOM_EVENT_MOUSEOVER: number;
export const DOM_EVENT_MOUSEUP: number;
export const DOM_EVENT_NONE: number;
export const DOM_EVENT_SELECT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_LEFT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_NUMPAD: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_RIGHT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_STANDARD: number;
export const DOM_NODE_ATTRIBUTE_NODE: number;
export const DOM_NODE_CDATA_SECTION_NODE: number;
export const DOM_NODE_COMMENT_NODE: number;
export const DOM_NODE_DOCUMENT_FRAGMENT_NODE: number;
export const DOM_NODE_DOCUMENT_NODE: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINED_BY: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINS: number;
export const DOM_NODE_DOCUMENT_POSITION_DISCONNECTED: number;
export const DOM_NODE_DOCUMENT_POSITION_FOLLOWING: number;
export const DOM_NODE_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
export const DOM_NODE_DOCUMENT_POSITION_PRECEDING: number;
export const DOM_NODE_DOCUMENT_TYPE_NODE: number;
export const DOM_NODE_ELEMENT_NODE: number;
export const DOM_NODE_ENTITY_NODE: number;
export const DOM_NODE_ENTITY_REFERENCE_NODE: number;
export const DOM_NODE_FILTER_ACCEPT: number;
export const DOM_NODE_FILTER_REJECT: number;
export const DOM_NODE_FILTER_SHOW_ALL: number;
export const DOM_NODE_FILTER_SHOW_ATTRIBUTE: number;
export const DOM_NODE_FILTER_SHOW_CDATA_SECTION: number;
export const DOM_NODE_FILTER_SHOW_COMMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_FRAGMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_TYPE: number;
export const DOM_NODE_FILTER_SHOW_ELEMENT: number;
export const DOM_NODE_FILTER_SHOW_ENTITY: number;
export const DOM_NODE_FILTER_SHOW_ENTITY_REFERENCE: number;
export const DOM_NODE_FILTER_SHOW_NOTATION: number;
export const DOM_NODE_FILTER_SHOW_PROCESSING_INSTRUCTION: number;
export const DOM_NODE_FILTER_SHOW_TEXT: number;
export const DOM_NODE_FILTER_SKIP: number;
export const DOM_NODE_PROCESSING_INSTRUCTION_NODE: number;
export const DOM_NODE_TEXT_NODE: number;
export const DOM_RANGE_END_TO_END: number;
export const DOM_RANGE_END_TO_START: number;
export const DOM_RANGE_NODE_AFTER: number;
export const DOM_RANGE_NODE_BEFORE: number;
export const DOM_RANGE_NODE_BEFORE_AND_AFTER: number;
export const DOM_RANGE_NODE_INSIDE: number;
export const DOM_RANGE_START_TO_END: number;
export const DOM_RANGE_START_TO_START: number;
export const DOM_XPATH_RESULT_ANY_TYPE: number;
export const DOM_XPATH_RESULT_ANY_UNORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_BOOLEAN_TYPE: number;
export const DOM_XPATH_RESULT_FIRST_ORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_NUMBER_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_SNAPSHOT_TYPE: number;
export const DOM_XPATH_RESULT_STRING_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_SNAPSHOT_TYPE: number;
export enum ConsoleMessageLevel {
    INFO = 0,
    LOG = 1,
    WARNING = 2,
    ERROR = 3,
    DEBUG = 4,
}
export enum ConsoleMessageSource {
    JAVASCRIPT = 0,
    NETWORK = 1,
    CONSOLE_API = 2,
    SECURITY = 3,
    OTHER = 4,
}
export enum ContextMenuAction {
    NO_ACTION = 0,
    OPEN_LINK = 1,
    OPEN_LINK_IN_NEW_WINDOW = 2,
    DOWNLOAD_LINK_TO_DISK = 3,
    COPY_LINK_TO_CLIPBOARD = 4,
    OPEN_IMAGE_IN_NEW_WINDOW = 5,
    DOWNLOAD_IMAGE_TO_DISK = 6,
    COPY_IMAGE_TO_CLIPBOARD = 7,
    COPY_IMAGE_URL_TO_CLIPBOARD = 8,
    OPEN_FRAME_IN_NEW_WINDOW = 9,
    GO_BACK = 10,
    GO_FORWARD = 11,
    STOP = 12,
    RELOAD = 13,
    COPY = 14,
    CUT = 15,
    PASTE = 16,
    DELETE = 17,
    SELECT_ALL = 18,
    INPUT_METHODS = 19,
    UNICODE = 20,
    SPELLING_GUESS = 21,
    NO_GUESSES_FOUND = 22,
    IGNORE_SPELLING = 23,
    LEARN_SPELLING = 24,
    IGNORE_GRAMMAR = 25,
    FONT_MENU = 26,
    BOLD = 27,
    ITALIC = 28,
    UNDERLINE = 29,
    OUTLINE = 30,
    INSPECT_ELEMENT = 31,
    OPEN_VIDEO_IN_NEW_WINDOW = 32,
    OPEN_AUDIO_IN_NEW_WINDOW = 33,
    COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
    COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
    TOGGLE_MEDIA_CONTROLS = 36,
    TOGGLE_MEDIA_LOOP = 37,
    ENTER_VIDEO_FULLSCREEN = 38,
    MEDIA_PLAY = 39,
    MEDIA_PAUSE = 40,
    MEDIA_MUTE = 41,
    DOWNLOAD_VIDEO_TO_DISK = 42,
    DOWNLOAD_AUDIO_TO_DISK = 43,
    INSERT_EMOJI = 44,
    CUSTOM = 10000,
}
export enum FormSubmissionStep {
    SEND_DOM_EVENT = 0,
    COMPLETE = 1,
}
export enum HitTestResultContext {
    DOCUMENT = 2,
    LINK = 4,
    IMAGE = 8,
    MEDIA = 16,
    EDITABLE = 32,
    SCROLLBAR = 64,
    SELECTION = 128,
}
export class ContextMenu extends GObject.Object {
    constructor(config?: properties);
    static new_with_items(items: GLib.List): ContextMenu;
    append(item: ContextMenuItem): void;
    first(): ContextMenuItem;
    get_item_at_position(position: number): ContextMenuItem;
    get_items(): GLib.List;
    get_n_items(): number;
    get_user_data(): GLib.Variant;
    insert(item: ContextMenuItem, position: number): void;
    last(): ContextMenuItem;
    move_item(item: ContextMenuItem, position: number): void;
    prepend(item: ContextMenuItem): void;
    remove(item: ContextMenuItem): void;
    remove_all(): void;
    set_user_data(user_data: GLib.Variant): void;
}
export class ContextMenuItem extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    static new_from_gaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem;
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;
    static new_separator(): ContextMenuItem;
    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;
    get_action(): Gtk.Action;
    get_gaction(): Gio.Action;
    get_stock_action(): ContextMenuAction;
    get_submenu(): ContextMenu;
    is_separator(): boolean;
    set_submenu(submenu: ContextMenu | null): void;
}
export class DOMAttr  {
    constructor(config?: properties);
    readonly local_name: string;
    readonly name: string;
    readonly namespace_uri: string;
    readonly owner_element: DOMElement;
    readonly prefix: string;
    readonly specified: boolean;
    value: string;
    get_local_name(): string;
    get_name(): string;
    get_namespace_uri(): string;
    get_owner_element(): DOMElement;
    get_prefix(): string;
    get_specified(): boolean;
    get_value(): string;
    set_value(value: string): void;
}
export class DOMBlob  {
    constructor(config?: properties);
    readonly size: number;
    get_size(): number;
}
export class DOMCDATASection  {
    constructor(config?: properties);
}
export class DOMCSSRule  {
    constructor(config?: properties);
    css_text: string;
    readonly parent_rule: DOMCSSRule;
    readonly parent_style_sheet: DOMCSSStyleSheet;
    readonly type: number;
    get_css_text(): string;
    get_parent_rule(): DOMCSSRule;
    get_parent_style_sheet(): DOMCSSStyleSheet;
    get_rule_type(): number;
    set_css_text(value: string): void;
}
export class DOMCSSRuleList  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMCSSRule;
}
export class DOMCSSStyleDeclaration  {
    constructor(config?: properties);
    css_text: string;
    readonly length: number;
    readonly parent_rule: DOMCSSRule;
    get_css_text(): string;
    get_length(): number;
    get_parent_rule(): DOMCSSRule;
    get_property_priority(propertyName: string): string;
    get_property_shorthand(propertyName: string): string;
    get_property_value(propertyName: string): string;
    is_property_implicit(propertyName: string): boolean;
    item(index: number): string;
    remove_property(propertyName: string): string;
    set_css_text(value: string): void;
    set_property(propertyName: string, value: string, priority: string): void;
}
export class DOMCSSStyleSheet  {
    constructor(config?: properties);
    readonly css_rules: DOMCSSRuleList;
    readonly owner_rule: DOMCSSRule;
    readonly rules: DOMCSSRuleList;
    add_rule(selector: string, style: string, index: number): number;
    delete_rule(index: number): void;
    get_css_rules(): DOMCSSRuleList;
    get_owner_rule(): DOMCSSRule;
    get_rules(): DOMCSSRuleList;
    insert_rule(rule: string, index: number): number;
    remove_rule(index: number): void;
}
export class DOMCSSValue  {
    constructor(config?: properties);
    css_text: string;
    readonly css_value_type: number;
    get_css_text(): string;
    get_css_value_type(): number;
    set_css_text(value: string): void;
}
export class DOMCharacterData  {
    constructor(config?: properties);
    data: string;
    readonly length: number;
    append_data(data: string): void;
    delete_data(offset: number, length: number): void;
    get_data(): string;
    get_length(): number;
    insert_data(offset: number, data: string): void;
    replace_data(offset: number, length: number, data: string): void;
    set_data(value: string): void;
    substring_data(offset: number, length: number): string;
}
export class DOMClientRect  {
    constructor(config?: properties);
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    get_bottom(): number;
    get_height(): number;
    get_left(): number;
    get_right(): number;
    get_top(): number;
    get_width(): number;
}
export class DOMClientRectList  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMClientRect;
}
export class DOMComment  {
    constructor(config?: properties);
}
export class DOMDOMImplementation  {
    constructor(config?: properties);
    create_css_style_sheet(title: string, media: string): DOMCSSStyleSheet;
    create_document(namespaceURI: string | null, qualifiedName: string, doctype: DOMDocumentType | null): DOMDocument;
    create_document_type(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;
    create_html_document(title: string): DOMHTMLDocument;
    has_feature(feature: string, version: string): boolean;
}
export class DOMDOMSelection  {
    constructor(config?: properties);
    readonly anchor_node: DOMNode;
    readonly anchor_offset: number;
    readonly base_node: DOMNode;
    readonly base_offset: number;
    readonly extent_node: DOMNode;
    readonly extent_offset: number;
    readonly focus_node: DOMNode;
    readonly focus_offset: number;
    readonly is_collapsed: boolean;
    readonly range_count: number;
    readonly type: string;
    add_range(range: DOMRange): void;
    collapse(node: DOMNode, offset: number): void;
    collapse_to_end(): void;
    collapse_to_start(): void;
    contains_node(node: DOMNode, allowPartial: boolean): boolean;
    delete_from_document(): void;
    empty(): void;
    extend(node: DOMNode, offset: number): void;
    get_anchor_node(): DOMNode;
    get_anchor_offset(): number;
    get_base_node(): DOMNode;
    get_base_offset(): number;
    get_extent_node(): DOMNode;
    get_extent_offset(): number;
    get_focus_node(): DOMNode;
    get_focus_offset(): number;
    get_is_collapsed(): boolean;
    get_range_at(index: number): DOMRange;
    get_range_count(): number;
    get_selection_type(): string;
    modify(alter: string, direction: string, granularity: string): void;
    remove_all_ranges(): void;
    select_all_children(node: DOMNode): void;
    set_base_and_extent(baseNode: DOMNode, baseOffset: number, extentNode: DOMNode, extentOffset: number): void;
    set_position(node: DOMNode, offset: number): void;
}
export class DOMDOMTokenList  {
    constructor(config?: properties);
    readonly length: number;
    value: string;
    contains(token: string): boolean;
    get_length(): number;
    get_value(): string;
    item(index: number): string;
    replace(token: string, newToken: string): void;
    set_value(value: string): void;
    toggle(token: string, force: boolean): boolean;
}
export class DOMDOMWindow  {
    constructor(config?: properties);
    readonly closed: boolean;
    default_status: string;
    readonly device_pixel_ratio: number;
    readonly document: DOMDocument;
    readonly frame_element: DOMElement;
    readonly frames: DOMDOMWindow;
    readonly inner_height: number;
    readonly inner_width: number;
    readonly length: number;
    name: string;
    readonly offscreen_buffering: boolean;
    readonly opener: DOMDOMWindow;
    readonly orientation: number;
    readonly outer_height: number;
    readonly outer_width: number;
    readonly page_x_offset: number;
    readonly page_y_offset: number;
    readonly screen_left: number;
    readonly screen_top: number;
    readonly screen_x: number;
    readonly screen_y: number;
    readonly scroll_x: number;
    readonly scroll_y: number;
    readonly self: DOMDOMWindow;
    status: string;
    readonly top: DOMDOMWindow;
    readonly window: DOMDOMWindow;
    alert(message: string): void;
    blur(): void;
    capture_events(): void;
    close(): void;
    confirm(message: string): boolean;
    find(string: string, caseSensitive: boolean, backwards: boolean, wrap: boolean, wholeWord: boolean, searchInFrames: boolean, showDialog: boolean): boolean;
    focus(): void;
    get_closed(): boolean;
    get_computed_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
    get_default_status(): string;
    get_device_pixel_ratio(): number;
    get_document(): DOMDocument;
    get_frame_element(): DOMElement;
    get_frames(): DOMDOMWindow;
    get_inner_height(): number;
    get_inner_width(): number;
    get_length(): number;
    get_name(): string;
    get_offscreen_buffering(): boolean;
    get_opener(): DOMDOMWindow;
    get_orientation(): number;
    get_outer_height(): number;
    get_outer_width(): number;
    get_page_x_offset(): number;
    get_page_y_offset(): number;
    get_parent(): DOMDOMWindow;
    get_screen_left(): number;
    get_screen_top(): number;
    get_screen_x(): number;
    get_screen_y(): number;
    get_scroll_x(): number;
    get_scroll_y(): number;
    get_selection(): DOMDOMSelection;
    get_self(): DOMDOMWindow;
    get_status(): string;
    get_top(): DOMDOMWindow;
    get_window(): DOMDOMWindow;
    move_by(x: number, y: number): void;
    move_to(x: number, y: number): void;
    print(): void;
    prompt(message: string, defaultValue: string): string;
    release_events(): void;
    resize_by(x: number, y: number): void;
    resize_to(width: number, height: number): void;
    scroll_by(x: number, y: number): void;
    scroll_to(x: number, y: number): void;
    set_default_status(value: string): void;
    set_name(value: string): void;
    set_status(value: string): void;
    stop(): void;
    webkit_message_handlers_post_message(handler: string, message: string): boolean;
}
export class DOMDocument  {
    constructor(config?: properties);
    readonly active_element: DOMElement;
    readonly anchors: DOMHTMLCollection;
    readonly applets: DOMHTMLCollection;
    readonly body: DOMHTMLElement;
    readonly character_set: string;
    charset: string;
    readonly child_element_count: number;
    readonly children: DOMHTMLCollection;
    readonly compat_mode: string;
    readonly content_type: string;
    cookie: string;
    readonly current_script: DOMHTMLScriptElement;
    readonly default_view: DOMDOMWindow;
    design_mode: string;
    dir: string;
    readonly doctype: DOMDocumentType;
    readonly document_element: DOMElement;
    document_uri: string;
    readonly domain: string;
    readonly embeds: DOMHTMLCollection;
    readonly first_element_child: DOMElement;
    readonly forms: DOMHTMLCollection;
    readonly head: DOMHTMLHeadElement;
    readonly hidden: boolean;
    readonly images: DOMHTMLCollection;
    readonly implementation: DOMDOMImplementation;
    readonly input_encoding: string;
    readonly last_element_child: DOMElement;
    readonly last_modified: string;
    readonly links: DOMHTMLCollection;
    readonly origin: string;
    readonly plugins: DOMHTMLCollection;
    readonly pointer_lock_element: DOMElement;
    readonly preferred_stylesheet_set: string;
    readonly ready_state: string;
    readonly referrer: string;
    readonly scripts: DOMHTMLCollection;
    readonly scrolling_element: DOMElement;
    selected_stylesheet_set: string;
    readonly style_sheets: DOMStyleSheetList;
    title: string;
    readonly url: string;
    readonly visibility_state: string;
    readonly webkit_current_full_screen_element: DOMElement;
    readonly webkit_full_screen_keyboard_input_allowed: boolean;
    readonly webkit_fullscreen_element: DOMElement;
    readonly webkit_fullscreen_enabled: boolean;
    readonly webkit_is_full_screen: boolean;
    readonly xml_encoding: string;
    xml_standalone: boolean;
    xml_version: string;
    adopt_node(source: DOMNode): DOMNode;
    caret_range_from_point(x: number, y: number): DOMRange;
    create_attribute(name: string): DOMAttr;
    create_attribute_ns(namespaceURI: string | null, qualifiedName: string): DOMAttr;
    create_cdata_section(data: string): DOMCDATASection;
    create_comment(data: string): DOMComment;
    create_css_style_declaration(): DOMCSSStyleDeclaration;
    create_document_fragment(): DOMDocumentFragment;
    create_element(tagName: string): DOMElement;
    create_element_ns(namespaceURI: string | null, qualifiedName: string): DOMElement;
    create_entity_reference(name: string | null): DOMEntityReference;
    create_event(eventType: string): DOMEvent;
    create_expression(expression: string, resolver: DOMXPathNSResolver): DOMXPathExpression;
    create_node_iterator(root: DOMNode, whatToShow: number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMNodeIterator;
    create_ns_resolver(nodeResolver: DOMNode): DOMXPathNSResolver;
    create_processing_instruction(target: string, data: string): DOMProcessingInstruction;
    create_range(): DOMRange;
    create_text_node(data: string): DOMText;
    create_tree_walker(root: DOMNode, whatToShow: number, filter: DOMNodeFilter | null, expandEntityReferences: boolean): DOMTreeWalker;
    element_from_point(x: number, y: number): DOMElement;
    evaluate(expression: string, contextNode: DOMNode, resolver: DOMXPathNSResolver | null, type: number, inResult: DOMXPathResult | null): DOMXPathResult;
    exec_command(command: string, userInterface: boolean, value: string): boolean;
    exit_pointer_lock(): void;
    get_active_element(): DOMElement;
    get_anchors(): DOMHTMLCollection;
    get_applets(): DOMHTMLCollection;
    get_body(): DOMHTMLElement;
    get_character_set(): string;
    get_charset(): string;
    get_child_element_count(): number;
    get_children(): DOMHTMLCollection;
    get_compat_mode(): string;
    get_content_type(): string;
    get_cookie(): string;
    get_current_script(): DOMHTMLScriptElement;
    get_default_charset(): string;
    get_default_view(): DOMDOMWindow;
    get_design_mode(): string;
    get_dir(): string;
    get_doctype(): DOMDocumentType;
    get_document_element(): DOMElement;
    get_document_uri(): string;
    get_domain(): string;
    get_element_by_id(elementId: string): DOMElement;
    get_elements_by_class_name(class_name: string): DOMNodeList;
    get_elements_by_class_name_as_html_collection(classNames: string): DOMHTMLCollection;
    get_elements_by_name(elementName: string): DOMNodeList;
    get_elements_by_tag_name(tag_name: string): DOMNodeList;
    get_elements_by_tag_name_as_html_collection(tagname: string): DOMHTMLCollection;
    get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
    get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
    get_embeds(): DOMHTMLCollection;
    get_first_element_child(): DOMElement;
    get_forms(): DOMHTMLCollection;
    get_head(): DOMHTMLHeadElement;
    get_hidden(): boolean;
    get_images(): DOMHTMLCollection;
    get_implementation(): DOMDOMImplementation;
    get_input_encoding(): string;
    get_last_element_child(): DOMElement;
    get_last_modified(): string;
    get_links(): DOMHTMLCollection;
    get_origin(): string;
    get_override_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
    get_plugins(): DOMHTMLCollection;
    get_pointer_lock_element(): DOMElement;
    get_preferred_stylesheet_set(): string;
    get_ready_state(): string;
    get_referrer(): string;
    get_scripts(): DOMHTMLCollection;
    get_scrolling_element(): DOMElement;
    get_selected_stylesheet_set(): string;
    get_style_sheets(): DOMStyleSheetList;
    get_title(): string;
    get_url(): string;
    get_visibility_state(): string;
    get_webkit_current_fullscreen_element(): DOMElement;
    get_webkit_fullscreen_element(): DOMElement;
    get_webkit_fullscreen_enabled(): boolean;
    get_webkit_fullscreen_keyboard_input_allowed(): boolean;
    get_webkit_is_fullscreen(): boolean;
    get_xml_encoding(): string;
    get_xml_standalone(): boolean;
    get_xml_version(): string;
    has_focus(): boolean;
    import_node(importedNode: DOMNode, deep: boolean): DOMNode;
    query_command_enabled(command: string): boolean;
    query_command_indeterm(command: string): boolean;
    query_command_state(command: string): boolean;
    query_command_supported(command: string): boolean;
    query_command_value(command: string): string;
    query_selector(selectors: string): DOMElement;
    query_selector_all(selectors: string): DOMNodeList;
    set_body(value: DOMHTMLElement): void;
    set_charset(value: string): void;
    set_cookie(value: string): void;
    set_design_mode(value: string): void;
    set_dir(value: string): void;
    set_document_uri(value: string): void;
    set_selected_stylesheet_set(value: string): void;
    set_title(value: string): void;
    set_xml_standalone(value: boolean): void;
    set_xml_version(value: string): void;
    webkit_cancel_fullscreen(): void;
    webkit_exit_fullscreen(): void;
}
export class DOMDocumentFragment  {
    constructor(config?: properties);
    readonly child_element_count: number;
    readonly children: DOMHTMLCollection;
    readonly first_element_child: DOMElement;
    readonly last_element_child: DOMElement;
    get_child_element_count(): number;
    get_children(): DOMHTMLCollection;
    get_element_by_id(elementId: string): DOMElement;
    get_first_element_child(): DOMElement;
    get_last_element_child(): DOMElement;
    query_selector(selectors: string): DOMElement;
    query_selector_all(selectors: string): DOMNodeList;
}
export class DOMDocumentType  {
    constructor(config?: properties);
    readonly entities: DOMNamedNodeMap;
    readonly internal_subset: string;
    readonly name: string;
    readonly notations: DOMNamedNodeMap;
    readonly public_id: string;
    readonly system_id: string;
    get_entities(): DOMNamedNodeMap;
    get_internal_subset(): string;
    get_name(): string;
    get_notations(): DOMNamedNodeMap;
    get_public_id(): string;
    get_system_id(): string;
}
export class DOMElement  {
    constructor(config?: properties);
    readonly attributes: DOMNamedNodeMap;
    readonly child_element_count: number;
    readonly children: DOMHTMLCollection;
    readonly class_list: DOMDOMTokenList;
    class_name: string;
    readonly client_height: number;
    readonly client_left: number;
    readonly client_top: number;
    readonly client_width: number;
    readonly first_element_child: DOMElement;
    id: string;
    inner_html: string;
    readonly last_element_child: DOMElement;
    readonly local_name: string;
    readonly namespace_uri: string;
    readonly next_element_sibling: DOMElement;
    readonly offset_height: number;
    readonly offset_left: number;
    readonly offset_parent: DOMElement;
    readonly offset_top: number;
    readonly offset_width: number;
    outer_html: string;
    readonly prefix: string;
    readonly previous_element_sibling: DOMElement;
    readonly scroll_height: number;
    scroll_left: number;
    scroll_top: number;
    readonly scroll_width: number;
    readonly style: DOMCSSStyleDeclaration;
    readonly tag_name: string;
    readonly webkit_region_overset: string;
    blur(): void;
    closest(selectors: string): DOMElement;
    focus(): void;
    get_attribute(name: string): string;
    get_attribute_node(name: string): DOMAttr;
    get_attribute_node_ns(namespaceURI: string, localName: string): DOMAttr;
    get_attribute_ns(namespaceURI: string, localName: string): string;
    get_attributes(): DOMNamedNodeMap;
    get_bounding_client_rect(): DOMClientRect;
    get_child_element_count(): number;
    get_children(): DOMHTMLCollection;
    get_class_list(): DOMDOMTokenList;
    get_class_name(): string;
    get_client_height(): number;
    get_client_left(): number;
    get_client_rects(): DOMClientRectList;
    get_client_top(): number;
    get_client_width(): number;
    get_elements_by_class_name(class_name: string): DOMNodeList;
    get_elements_by_class_name_as_html_collection(name: string): DOMHTMLCollection;
    get_elements_by_tag_name(tag_name: string): DOMNodeList;
    get_elements_by_tag_name_as_html_collection(name: string): DOMHTMLCollection;
    get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
    get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
    get_first_element_child(): DOMElement;
    get_id(): string;
    get_inner_html(): string;
    get_last_element_child(): DOMElement;
    get_local_name(): string;
    get_namespace_uri(): string;
    get_next_element_sibling(): DOMElement;
    get_offset_height(): number;
    get_offset_left(): number;
    get_offset_parent(): DOMElement;
    get_offset_top(): number;
    get_offset_width(): number;
    get_outer_html(): string;
    get_prefix(): string;
    get_previous_element_sibling(): DOMElement;
    get_scroll_height(): number;
    get_scroll_left(): number;
    get_scroll_top(): number;
    get_scroll_width(): number;
    get_style(): DOMCSSStyleDeclaration;
    get_tag_name(): string;
    get_webkit_region_overset(): string;
    has_attribute(name: string): boolean;
    has_attribute_ns(namespaceURI: string, localName: string): boolean;
    has_attributes(): boolean;
    html_input_element_get_auto_filled(): boolean;
    html_input_element_is_user_edited(): boolean;
    html_input_element_set_auto_filled(auto_filled: boolean): void;
    html_input_element_set_editing_value(value: string): void;
    insert_adjacent_element(where: string, element: DOMElement): DOMElement;
    insert_adjacent_html(where: string, html: string): void;
    insert_adjacent_text(where: string, text: string): void;
    matches(selectors: string): boolean;
    query_selector(selectors: string): DOMElement;
    query_selector_all(selectors: string): DOMNodeList;
    remove(): void;
    remove_attribute(name: string): void;
    remove_attribute_node(oldAttr: DOMAttr): DOMAttr;
    remove_attribute_ns(namespaceURI: string, localName: string): void;
    request_pointer_lock(): void;
    scroll_by_lines(lines: number): void;
    scroll_by_pages(pages: number): void;
    scroll_into_view(alignWithTop: boolean): void;
    scroll_into_view_if_needed(centerIfNeeded: boolean): void;
    set_attribute(name: string, value: string): void;
    set_attribute_node(newAttr: DOMAttr): DOMAttr;
    set_attribute_node_ns(newAttr: DOMAttr): DOMAttr;
    set_attribute_ns(namespaceURI: string | null, qualifiedName: string, value: string): void;
    set_class_name(value: string): void;
    set_id(value: string): void;
    set_inner_html(value: string): void;
    set_outer_html(value: string): void;
    set_scroll_left(value: number): void;
    set_scroll_top(value: number): void;
    webkit_matches_selector(selectors: string): boolean;
    webkit_request_fullscreen(): void;
}
export class DOMEntityReference  {
    constructor(config?: properties);
}
export class DOMEvent  {
    constructor(config?: properties);
    readonly bubbles: boolean;
    cancel_bubble: boolean;
    readonly cancelable: boolean;
    readonly current_target: DOMEventTarget;
    readonly event_phase: number;
    return_value: boolean;
    readonly src_element: DOMEventTarget;
    readonly target: DOMEventTarget;
    readonly time_stamp: number;
    readonly type: string;
    get_bubbles(): boolean;
    get_cancel_bubble(): boolean;
    get_cancelable(): boolean;
    get_current_target(): DOMEventTarget;
    get_event_phase(): number;
    get_event_type(): string;
    get_return_value(): boolean;
    get_src_element(): DOMEventTarget;
    get_target(): DOMEventTarget;
    get_time_stamp(): number;
    init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
    prevent_default(): void;
    set_cancel_bubble(value: boolean): void;
    set_return_value(value: boolean): void;
    stop_propagation(): void;
}
export class DOMFile  {
    constructor(config?: properties);
    readonly name: string;
    get_name(): string;
}
export class DOMFileList  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMFile;
}
export class DOMHTMLAnchorElement  {
    constructor(config?: properties);
    charset: string;
    coords: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    hreflang: string;
    name: string;
    pathname: string;
    port: string;
    protocol: string;
    rel: string;
    rev: string;
    search: string;
    shape: string;
    target: string;
    text: string;
    type: string;
    get_charset(): string;
    get_coords(): string;
    get_hash(): string;
    get_host(): string;
    get_hostname(): string;
    get_href(): string;
    get_hreflang(): string;
    get_name(): string;
    get_pathname(): string;
    get_port(): string;
    get_protocol(): string;
    get_rel(): string;
    get_rev(): string;
    get_search(): string;
    get_shape(): string;
    get_target(): string;
    get_text(): string;
    get_type_attr(): string;
    set_charset(value: string): void;
    set_coords(value: string): void;
    set_hash(value: string): void;
    set_host(value: string): void;
    set_hostname(value: string): void;
    set_href(value: string): void;
    set_hreflang(value: string): void;
    set_name(value: string): void;
    set_pathname(value: string): void;
    set_port(value: string): void;
    set_protocol(value: string): void;
    set_rel(value: string): void;
    set_rev(value: string): void;
    set_search(value: string): void;
    set_shape(value: string): void;
    set_target(value: string): void;
    set_text(value: string): void;
    set_type_attr(value: string): void;
}
export class DOMHTMLAppletElement  {
    constructor(config?: properties);
    align: string;
    alt: string;
    archive: string;
    code: string;
    code_base: string;
    height: string;
    hspace: number;
    name: string;
    object: string;
    vspace: number;
    width: string;
    get_align(): string;
    get_alt(): string;
    get_archive(): string;
    get_code(): string;
    get_code_base(): string;
    get_height(): string;
    get_hspace(): number;
    get_name(): string;
    get_object(): string;
    get_vspace(): number;
    get_width(): string;
    set_align(value: string): void;
    set_alt(value: string): void;
    set_archive(value: string): void;
    set_code(value: string): void;
    set_code_base(value: string): void;
    set_height(value: string): void;
    set_hspace(value: number): void;
    set_name(value: string): void;
    set_object(value: string): void;
    set_vspace(value: number): void;
    set_width(value: string): void;
}
export class DOMHTMLAreaElement  {
    constructor(config?: properties);
    alt: string;
    coords: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    no_href: boolean;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    shape: string;
    target: string;
    get_alt(): string;
    get_coords(): string;
    get_hash(): string;
    get_host(): string;
    get_hostname(): string;
    get_href(): string;
    get_no_href(): boolean;
    get_pathname(): string;
    get_port(): string;
    get_protocol(): string;
    get_search(): string;
    get_shape(): string;
    get_target(): string;
    set_alt(value: string): void;
    set_coords(value: string): void;
    set_hash(value: string): void;
    set_host(value: string): void;
    set_hostname(value: string): void;
    set_href(value: string): void;
    set_no_href(value: boolean): void;
    set_pathname(value: string): void;
    set_port(value: string): void;
    set_protocol(value: string): void;
    set_search(value: string): void;
    set_shape(value: string): void;
    set_target(value: string): void;
}
export class DOMHTMLBRElement  {
    constructor(config?: properties);
    clear: string;
    get_clear(): string;
    set_clear(value: string): void;
}
export class DOMHTMLBaseElement  {
    constructor(config?: properties);
    href: string;
    target: string;
    get_href(): string;
    get_target(): string;
    set_href(value: string): void;
    set_target(value: string): void;
}
export class DOMHTMLBaseFontElement  {
    constructor(config?: properties);
    get_color(): string;
    get_face(): string;
    get_size(): number;
    set_color(value: string): void;
    set_face(value: string): void;
    set_size(value: number): void;
}
export class DOMHTMLBodyElement  {
    constructor(config?: properties);
    a_link: string;
    background: string;
    bg_color: string;
    link: string;
    text: string;
    v_link: string;
    get_a_link(): string;
    get_background(): string;
    get_bg_color(): string;
    get_link(): string;
    get_text(): string;
    get_v_link(): string;
    set_a_link(value: string): void;
    set_background(value: string): void;
    set_bg_color(value: string): void;
    set_link(value: string): void;
    set_text(value: string): void;
    set_v_link(value: string): void;
}
export class DOMHTMLButtonElement  {
    constructor(config?: properties);
    autofocus: boolean;
    disabled: boolean;
    readonly form: DOMHTMLFormElement;
    name: string;
    type: string;
    value: string;
    readonly will_validate: boolean;
    get_autofocus(): boolean;
    get_button_type(): string;
    get_disabled(): boolean;
    get_form(): DOMHTMLFormElement;
    get_name(): string;
    get_value(): string;
    get_will_validate(): boolean;
    set_autofocus(value: boolean): void;
    set_button_type(value: string): void;
    set_disabled(value: boolean): void;
    set_name(value: string): void;
    set_value(value: string): void;
}
export class DOMHTMLCanvasElement  {
    constructor(config?: properties);
    height: number;
    width: number;
    get_height(): number;
    get_width(): number;
    set_height(value: number): void;
    set_width(value: number): void;
}
export class DOMHTMLCollection  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMNode;
    named_item(name: string): DOMNode;
}
export class DOMHTMLDListElement  {
    constructor(config?: properties);
    compact: boolean;
    get_compact(): boolean;
    set_compact(value: boolean): void;
}
export class DOMHTMLDirectoryElement  {
    constructor(config?: properties);
    compact: boolean;
    get_compact(): boolean;
    set_compact(value: boolean): void;
}
export class DOMHTMLDivElement  {
    constructor(config?: properties);
    align: string;
    get_align(): string;
    set_align(value: string): void;
}
export class DOMHTMLDocument  {
    constructor(config?: properties);
    alink_color: string;
    bg_color: string;
    dir: string;
    fg_color: string;
    readonly height: number;
    link_color: string;
    vlink_color: string;
    readonly width: number;
    capture_events(): void;
    clear(): void;
    close(): void;
    get_alink_color(): string;
    get_bg_color(): string;
    get_compat_mode(): string;
    get_design_mode(): string;
    get_dir(): string;
    get_embeds(): DOMHTMLCollection;
    get_fg_color(): string;
    get_height(): number;
    get_link_color(): string;
    get_plugins(): DOMHTMLCollection;
    get_scripts(): DOMHTMLCollection;
    get_vlink_color(): string;
    get_width(): number;
    release_events(): void;
    set_alink_color(value: string): void;
    set_bg_color(value: string): void;
    set_design_mode(value: string): void;
    set_dir(value: string): void;
    set_fg_color(value: string): void;
    set_link_color(value: string): void;
    set_vlink_color(value: string): void;
}
export class DOMHTMLElement  {
    constructor(config?: properties);
    access_key: string;
    content_editable: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    inner_text: string;
    readonly is_content_editable: boolean;
    lang: string;
    outer_text: string;
    spellcheck: boolean;
    tab_index: number;
    title: string;
    translate: boolean;
    webkitdropzone: string;
    click(): void;
    get_access_key(): string;
    get_children(): DOMHTMLCollection;
    get_content_editable(): string;
    get_dir(): string;
    get_draggable(): boolean;
    get_hidden(): boolean;
    get_inner_html(): string;
    get_inner_text(): string;
    get_is_content_editable(): boolean;
    get_lang(): string;
    get_outer_html(): string;
    get_outer_text(): string;
    get_spellcheck(): boolean;
    get_tab_index(): number;
    get_title(): string;
    get_translate(): boolean;
    get_webkitdropzone(): string;
    set_access_key(value: string): void;
    set_content_editable(value: string): void;
    set_dir(value: string): void;
    set_draggable(value: boolean): void;
    set_hidden(value: boolean): void;
    set_inner_html(contents: string): void;
    set_inner_text(value: string): void;
    set_lang(value: string): void;
    set_outer_html(contents: string): void;
    set_outer_text(value: string): void;
    set_spellcheck(value: boolean): void;
    set_tab_index(value: number): void;
    set_title(value: string): void;
    set_translate(value: boolean): void;
    set_webkitdropzone(value: string): void;
}
export class DOMHTMLEmbedElement  {
    constructor(config?: properties);
    align: string;
    height: number;
    name: string;
    src: string;
    type: string;
    width: number;
    get_align(): string;
    get_height(): number;
    get_name(): string;
    get_src(): string;
    get_type_attr(): string;
    get_width(): number;
    set_align(value: string): void;
    set_height(value: number): void;
    set_name(value: string): void;
    set_src(value: string): void;
    set_type_attr(value: string): void;
    set_width(value: number): void;
}
export class DOMHTMLFieldSetElement  {
    constructor(config?: properties);
    readonly form: DOMHTMLFormElement;
    get_form(): DOMHTMLFormElement;
}
export class DOMHTMLFontElement  {
    constructor(config?: properties);
    color: string;
    face: string;
    size: string;
    get_color(): string;
    get_face(): string;
    get_size(): string;
    set_color(value: string): void;
    set_face(value: string): void;
    set_size(value: string): void;
}
export class DOMHTMLFormElement  {
    constructor(config?: properties);
    accept_charset: string;
    action: string;
    readonly elements: DOMHTMLCollection;
    encoding: string;
    enctype: string;
    readonly length: number;
    method: string;
    name: string;
    target: string;
    get_accept_charset(): string;
    get_action(): string;
    get_elements(): DOMHTMLCollection;
    get_encoding(): string;
    get_enctype(): string;
    get_length(): number;
    get_method(): string;
    get_name(): string;
    get_target(): string;
    reset(): void;
    set_accept_charset(value: string): void;
    set_action(value: string): void;
    set_encoding(value: string): void;
    set_enctype(value: string): void;
    set_method(value: string): void;
    set_name(value: string): void;
    set_target(value: string): void;
    submit(): void;
}
export class DOMHTMLFrameElement  {
    constructor(config?: properties);
    readonly content_document: DOMDocument;
    readonly content_window: DOMDOMWindow;
    frame_border: string;
    readonly height: number;
    long_desc: string;
    margin_height: string;
    margin_width: string;
    name: string;
    no_resize: boolean;
    scrolling: string;
    src: string;
    readonly width: number;
    get_content_document(): DOMDocument;
    get_content_window(): DOMDOMWindow;
    get_frame_border(): string;
    get_height(): number;
    get_long_desc(): string;
    get_margin_height(): string;
    get_margin_width(): string;
    get_name(): string;
    get_no_resize(): boolean;
    get_scrolling(): string;
    get_src(): string;
    get_width(): number;
    set_frame_border(value: string): void;
    set_long_desc(value: string): void;
    set_margin_height(value: string): void;
    set_margin_width(value: string): void;
    set_name(value: string): void;
    set_no_resize(value: boolean): void;
    set_scrolling(value: string): void;
    set_src(value: string): void;
}
export class DOMHTMLFrameSetElement  {
    constructor(config?: properties);
    cols: string;
    rows: string;
    get_cols(): string;
    get_rows(): string;
    set_cols(value: string): void;
    set_rows(value: string): void;
}
export class DOMHTMLHRElement  {
    constructor(config?: properties);
    align: string;
    no_shade: boolean;
    size: string;
    width: string;
    get_align(): string;
    get_no_shade(): boolean;
    get_size(): string;
    get_width(): string;
    set_align(value: string): void;
    set_no_shade(value: boolean): void;
    set_size(value: string): void;
    set_width(value: string): void;
}
export class DOMHTMLHeadElement  {
    constructor(config?: properties);
    profile: string;
    get_profile(): string;
    set_profile(value: string): void;
}
export class DOMHTMLHeadingElement  {
    constructor(config?: properties);
    align: string;
    get_align(): string;
    set_align(value: string): void;
}
export class DOMHTMLHtmlElement  {
    constructor(config?: properties);
    version: string;
    get_version(): string;
    set_version(value: string): void;
}
export class DOMHTMLIFrameElement  {
    constructor(config?: properties);
    align: string;
    readonly content_document: DOMDocument;
    readonly content_window: DOMDOMWindow;
    frame_border: string;
    height: string;
    long_desc: string;
    margin_height: string;
    margin_width: string;
    name: string;
    scrolling: string;
    src: string;
    width: string;
    get_align(): string;
    get_content_document(): DOMDocument;
    get_content_window(): DOMDOMWindow;
    get_frame_border(): string;
    get_height(): string;
    get_long_desc(): string;
    get_margin_height(): string;
    get_margin_width(): string;
    get_name(): string;
    get_scrolling(): string;
    get_src(): string;
    get_width(): string;
    set_align(value: string): void;
    set_frame_border(value: string): void;
    set_height(value: string): void;
    set_long_desc(value: string): void;
    set_margin_height(value: string): void;
    set_margin_width(value: string): void;
    set_name(value: string): void;
    set_scrolling(value: string): void;
    set_src(value: string): void;
    set_width(value: string): void;
}
export class DOMHTMLImageElement  {
    constructor(config?: properties);
    align: string;
    alt: string;
    border: string;
    readonly complete: boolean;
    height: number;
    hspace: number;
    is_map: boolean;
    long_desc: string;
    lowsrc: string;
    name: string;
    readonly natural_height: number;
    readonly natural_width: number;
    src: string;
    use_map: string;
    vspace: number;
    width: number;
    readonly x: number;
    readonly y: number;
    get_align(): string;
    get_alt(): string;
    get_border(): string;
    get_complete(): boolean;
    get_height(): number;
    get_hspace(): number;
    get_is_map(): boolean;
    get_long_desc(): string;
    get_lowsrc(): string;
    get_name(): string;
    get_natural_height(): number;
    get_natural_width(): number;
    get_src(): string;
    get_use_map(): string;
    get_vspace(): number;
    get_width(): number;
    get_x(): number;
    get_y(): number;
    set_align(value: string): void;
    set_alt(value: string): void;
    set_border(value: string): void;
    set_height(value: number): void;
    set_hspace(value: number): void;
    set_is_map(value: boolean): void;
    set_long_desc(value: string): void;
    set_lowsrc(value: string): void;
    set_name(value: string): void;
    set_src(value: string): void;
    set_use_map(value: string): void;
    set_vspace(value: number): void;
    set_width(value: number): void;
}
export class DOMHTMLInputElement  {
    constructor(config?: properties);
    accept: string;
    align: string;
    alt: string;
    autofocus: boolean;
    capture: string;
    checked: boolean;
    default_checked: boolean;
    default_value: string;
    disabled: boolean;
    readonly files: DOMFileList;
    readonly form: DOMHTMLFormElement;
    height: number;
    indeterminate: boolean;
    max_length: number;
    multiple: boolean;
    name: string;
    read_only: boolean;
    size: number;
    src: string;
    type: string;
    use_map: string;
    value: string;
    width: number;
    readonly will_validate: boolean;
    get_accept(): string;
    get_align(): string;
    get_alt(): string;
    get_auto_filled(): boolean;
    get_autofocus(): boolean;
    get_capture(): boolean;
    get_capture_type(): string;
    get_checked(): boolean;
    get_default_checked(): boolean;
    get_default_value(): string;
    get_disabled(): boolean;
    get_files(): DOMFileList;
    get_form(): DOMHTMLFormElement;
    get_height(): number;
    get_indeterminate(): boolean;
    get_input_type(): string;
    get_max_length(): number;
    get_multiple(): boolean;
    get_name(): string;
    get_read_only(): boolean;
    get_size(): number;
    get_src(): string;
    get_use_map(): string;
    get_value(): string;
    get_width(): number;
    get_will_validate(): boolean;
    is_edited(): boolean;
    select(): void;
    set_accept(value: string): void;
    set_align(value: string): void;
    set_alt(value: string): void;
    set_auto_filled(value: boolean): void;
    set_autofocus(value: boolean): void;
    set_capture_type(value: string): void;
    set_checked(value: boolean): void;
    set_default_checked(value: boolean): void;
    set_default_value(value: string): void;
    set_disabled(value: boolean): void;
    set_editing_value(value: string): void;
    set_files(value: DOMFileList): void;
    set_height(value: number): void;
    set_indeterminate(value: boolean): void;
    set_input_type(value: string): void;
    set_max_length(value: number): void;
    set_multiple(value: boolean): void;
    set_name(value: string): void;
    set_read_only(value: boolean): void;
    set_size(value: number): void;
    set_src(value: string): void;
    set_use_map(value: string): void;
    set_value(value: string): void;
    set_width(value: number): void;
}
export class DOMHTMLLIElement  {
    constructor(config?: properties);
    type: string;
    value: number;
    get_type_attr(): string;
    get_value(): number;
    set_type_attr(value: string): void;
    set_value(value: number): void;
}
export class DOMHTMLLabelElement  {
    constructor(config?: properties);
    readonly form: DOMHTMLFormElement;
    html_for: string;
    get_form(): DOMHTMLFormElement;
    get_html_for(): string;
    set_html_for(value: string): void;
}
export class DOMHTMLLegendElement  {
    constructor(config?: properties);
    align: string;
    readonly form: DOMHTMLFormElement;
    get_align(): string;
    get_form(): DOMHTMLFormElement;
    set_align(value: string): void;
}
export class DOMHTMLLinkElement  {
    constructor(config?: properties);
    charset: string;
    disabled: boolean;
    href: string;
    hreflang: string;
    media: string;
    rel: string;
    rev: string;
    readonly sheet: DOMStyleSheet;
    readonly sizes: DOMDOMTokenList;
    target: string;
    type: string;
    get_charset(): string;
    get_disabled(): boolean;
    get_href(): string;
    get_hreflang(): string;
    get_media(): string;
    get_rel(): string;
    get_rev(): string;
    get_sheet(): DOMStyleSheet;
    get_sizes(): DOMDOMTokenList;
    get_target(): string;
    get_type_attr(): string;
    set_charset(value: string): void;
    set_disabled(value: boolean): void;
    set_href(value: string): void;
    set_hreflang(value: string): void;
    set_media(value: string): void;
    set_rel(value: string): void;
    set_rev(value: string): void;
    set_sizes(value: string): void;
    set_target(value: string): void;
    set_type_attr(value: string): void;
}
export class DOMHTMLMapElement  {
    constructor(config?: properties);
    readonly areas: DOMHTMLCollection;
    name: string;
    get_areas(): DOMHTMLCollection;
    get_name(): string;
    set_name(value: string): void;
}
export class DOMHTMLMarqueeElement  {
    constructor(config?: properties);
    start(): void;
    stop(): void;
}
export class DOMHTMLMenuElement  {
    constructor(config?: properties);
    compact: boolean;
    get_compact(): boolean;
    set_compact(value: boolean): void;
}
export class DOMHTMLMetaElement  {
    constructor(config?: properties);
    content: string;
    http_equiv: string;
    name: string;
    scheme: string;
    get_content(): string;
    get_http_equiv(): string;
    get_name(): string;
    get_scheme(): string;
    set_content(value: string): void;
    set_http_equiv(value: string): void;
    set_name(value: string): void;
    set_scheme(value: string): void;
}
export class DOMHTMLModElement  {
    constructor(config?: properties);
    cite: string;
    date_time: string;
    get_cite(): string;
    get_date_time(): string;
    set_cite(value: string): void;
    set_date_time(value: string): void;
}
export class DOMHTMLOListElement  {
    constructor(config?: properties);
    compact: boolean;
    start: number;
    type: string;
    get_compact(): boolean;
    get_start(): number;
    get_type_attr(): string;
    set_compact(value: boolean): void;
    set_start(value: number): void;
    set_type_attr(value: string): void;
}
export class DOMHTMLObjectElement  {
    constructor(config?: properties);
    align: string;
    archive: string;
    border: string;
    code: string;
    code_base: string;
    code_type: string;
    readonly content_document: DOMDocument;
    data: string;
    declare: boolean;
    readonly form: DOMHTMLFormElement;
    height: string;
    hspace: number;
    name: string;
    standby: string;
    type: string;
    use_map: string;
    vspace: number;
    width: string;
    get_align(): string;
    get_archive(): string;
    get_border(): string;
    get_code(): string;
    get_code_base(): string;
    get_code_type(): string;
    get_content_document(): DOMDocument;
    get_data(): string;
    get_declare(): boolean;
    get_form(): DOMHTMLFormElement;
    get_height(): string;
    get_hspace(): number;
    get_name(): string;
    get_standby(): string;
    get_type_attr(): string;
    get_use_map(): string;
    get_vspace(): number;
    get_width(): string;
    set_align(value: string): void;
    set_archive(value: string): void;
    set_border(value: string): void;
    set_code(value: string): void;
    set_code_base(value: string): void;
    set_code_type(value: string): void;
    set_data(value: string): void;
    set_declare(value: boolean): void;
    set_height(value: string): void;
    set_hspace(value: number): void;
    set_name(value: string): void;
    set_standby(value: string): void;
    set_type_attr(value: string): void;
    set_use_map(value: string): void;
    set_vspace(value: number): void;
    set_width(value: string): void;
}
export class DOMHTMLOptGroupElement  {
    constructor(config?: properties);
    disabled: boolean;
    label: string;
    get_disabled(): boolean;
    get_label(): string;
    set_disabled(value: boolean): void;
    set_label(value: string): void;
}
export class DOMHTMLOptionElement  {
    constructor(config?: properties);
    default_selected: boolean;
    disabled: boolean;
    readonly form: DOMHTMLFormElement;
    readonly index: number;
    label: string;
    selected: boolean;
    readonly text: string;
    value: string;
    get_default_selected(): boolean;
    get_disabled(): boolean;
    get_form(): DOMHTMLFormElement;
    get_index(): number;
    get_label(): string;
    get_selected(): boolean;
    get_text(): string;
    get_value(): string;
    set_default_selected(value: boolean): void;
    set_disabled(value: boolean): void;
    set_label(value: string): void;
    set_selected(value: boolean): void;
    set_value(value: string): void;
}
export class DOMHTMLOptionsCollection  {
    constructor(config?: properties);
    readonly length: number;
    selected_index: number;
    get_length(): number;
    get_selected_index(): number;
    named_item(name: string): DOMNode;
    set_selected_index(value: number): void;
}
export class DOMHTMLParagraphElement  {
    constructor(config?: properties);
    align: string;
    get_align(): string;
    set_align(value: string): void;
}
export class DOMHTMLParamElement  {
    constructor(config?: properties);
    name: string;
    type: string;
    value: string;
    value_type: string;
    get_name(): string;
    get_type_attr(): string;
    get_value(): string;
    get_value_type(): string;
    set_name(value: string): void;
    set_type_attr(value: string): void;
    set_value(value: string): void;
    set_value_type(value: string): void;
}
export class DOMHTMLPreElement  {
    constructor(config?: properties);
    width: number;
    wrap: boolean;
    get_width(): number;
    get_wrap(): boolean;
    set_width(value: number): void;
    set_wrap(value: boolean): void;
}
export class DOMHTMLQuoteElement  {
    constructor(config?: properties);
    cite: string;
    get_cite(): string;
    set_cite(value: string): void;
}
export class DOMHTMLScriptElement  {
    constructor(config?: properties);
    charset: string;
    defer: boolean;
    event: string;
    html_for: string;
    src: string;
    text: string;
    type: string;
    get_charset(): string;
    get_defer(): boolean;
    get_event(): string;
    get_html_for(): string;
    get_src(): string;
    get_text(): string;
    get_type_attr(): string;
    set_charset(value: string): void;
    set_defer(value: boolean): void;
    set_event(value: string): void;
    set_html_for(value: string): void;
    set_src(value: string): void;
    set_text(value: string): void;
    set_type_attr(value: string): void;
}
export class DOMHTMLSelectElement  {
    constructor(config?: properties);
    autofocus: boolean;
    disabled: boolean;
    readonly form: DOMHTMLFormElement;
    length: number;
    multiple: boolean;
    name: string;
    readonly options: DOMHTMLOptionsCollection;
    selected_index: number;
    size: number;
    readonly type: string;
    value: string;
    readonly will_validate: boolean;
    add(element: DOMHTMLElement, before: DOMHTMLElement): void;
    get_autofocus(): boolean;
    get_disabled(): boolean;
    get_form(): DOMHTMLFormElement;
    get_length(): number;
    get_multiple(): boolean;
    get_name(): string;
    get_options(): DOMHTMLOptionsCollection;
    get_select_type(): string;
    get_selected_index(): number;
    get_size(): number;
    get_value(): string;
    get_will_validate(): boolean;
    item(index: number): DOMNode;
    named_item(name: string): DOMNode;
    remove(index: number): void;
    set_autofocus(value: boolean): void;
    set_disabled(value: boolean): void;
    set_length(value: number): void;
    set_multiple(value: boolean): void;
    set_name(value: string): void;
    set_selected_index(value: number): void;
    set_size(value: number): void;
    set_value(value: string): void;
}
export class DOMHTMLStyleElement  {
    constructor(config?: properties);
    disabled: boolean;
    media: string;
    readonly sheet: DOMStyleSheet;
    type: string;
    get_disabled(): boolean;
    get_media(): string;
    get_sheet(): DOMStyleSheet;
    get_type_attr(): string;
    set_disabled(value: boolean): void;
    set_media(value: string): void;
    set_type_attr(value: string): void;
}
export class DOMHTMLTableCaptionElement  {
    constructor(config?: properties);
    align: string;
    get_align(): string;
    set_align(value: string): void;
}
export class DOMHTMLTableCellElement  {
    constructor(config?: properties);
    abbr: string;
    align: string;
    axis: string;
    bg_color: string;
    readonly cell_index: number;
    ch: string;
    ch_off: string;
    col_span: number;
    headers: string;
    height: string;
    no_wrap: boolean;
    row_span: number;
    scope: string;
    v_align: string;
    width: string;
    get_abbr(): string;
    get_align(): string;
    get_axis(): string;
    get_bg_color(): string;
    get_cell_index(): number;
    get_ch(): string;
    get_ch_off(): string;
    get_col_span(): number;
    get_headers(): string;
    get_height(): string;
    get_no_wrap(): boolean;
    get_row_span(): number;
    get_scope(): string;
    get_v_align(): string;
    get_width(): string;
    set_abbr(value: string): void;
    set_align(value: string): void;
    set_axis(value: string): void;
    set_bg_color(value: string): void;
    set_ch(value: string): void;
    set_ch_off(value: string): void;
    set_col_span(value: number): void;
    set_headers(value: string): void;
    set_height(value: string): void;
    set_no_wrap(value: boolean): void;
    set_row_span(value: number): void;
    set_scope(value: string): void;
    set_v_align(value: string): void;
    set_width(value: string): void;
}
export class DOMHTMLTableColElement  {
    constructor(config?: properties);
    align: string;
    ch: string;
    ch_off: string;
    span: number;
    v_align: string;
    width: string;
    get_align(): string;
    get_ch(): string;
    get_ch_off(): string;
    get_span(): number;
    get_v_align(): string;
    get_width(): string;
    set_align(value: string): void;
    set_ch(value: string): void;
    set_ch_off(value: string): void;
    set_span(value: number): void;
    set_v_align(value: string): void;
    set_width(value: string): void;
}
export class DOMHTMLTableElement  {
    constructor(config?: properties);
    align: string;
    bg_color: string;
    border: string;
    readonly caption: DOMHTMLTableCaptionElement;
    cell_padding: string;
    cell_spacing: string;
    readonly rows: DOMHTMLCollection;
    rules: string;
    summary: string;
    readonly t_bodies: DOMHTMLCollection;
    readonly t_foot: DOMHTMLTableSectionElement;
    readonly t_head: DOMHTMLTableSectionElement;
    width: string;
    create_caption(): DOMHTMLElement;
    create_t_foot(): DOMHTMLElement;
    create_t_head(): DOMHTMLElement;
    delete_caption(): void;
    delete_row(index: number): void;
    delete_t_foot(): void;
    delete_t_head(): void;
    get_align(): string;
    get_bg_color(): string;
    get_border(): string;
    get_caption(): DOMHTMLTableCaptionElement;
    get_cell_padding(): string;
    get_cell_spacing(): string;
    get_rows(): DOMHTMLCollection;
    get_rules(): string;
    get_summary(): string;
    get_t_bodies(): DOMHTMLCollection;
    get_t_foot(): DOMHTMLTableSectionElement;
    get_t_head(): DOMHTMLTableSectionElement;
    get_width(): string;
    insert_row(index: number): DOMHTMLElement;
    set_align(value: string): void;
    set_bg_color(value: string): void;
    set_border(value: string): void;
    set_caption(value: DOMHTMLTableCaptionElement): void;
    set_cell_padding(value: string): void;
    set_cell_spacing(value: string): void;
    set_rules(value: string): void;
    set_summary(value: string): void;
    set_t_foot(value: DOMHTMLTableSectionElement): void;
    set_t_head(value: DOMHTMLTableSectionElement): void;
    set_width(value: string): void;
}
export class DOMHTMLTableRowElement  {
    constructor(config?: properties);
    align: string;
    bg_color: string;
    readonly cells: DOMHTMLCollection;
    ch: string;
    ch_off: string;
    readonly row_index: number;
    readonly section_row_index: number;
    v_align: string;
    delete_cell(index: number): void;
    get_align(): string;
    get_bg_color(): string;
    get_cells(): DOMHTMLCollection;
    get_ch(): string;
    get_ch_off(): string;
    get_row_index(): number;
    get_section_row_index(): number;
    get_v_align(): string;
    insert_cell(index: number): DOMHTMLElement;
    set_align(value: string): void;
    set_bg_color(value: string): void;
    set_ch(value: string): void;
    set_ch_off(value: string): void;
    set_v_align(value: string): void;
}
export class DOMHTMLTableSectionElement  {
    constructor(config?: properties);
    align: string;
    ch: string;
    ch_off: string;
    readonly rows: DOMHTMLCollection;
    v_align: string;
    delete_row(index: number): void;
    get_align(): string;
    get_ch(): string;
    get_ch_off(): string;
    get_rows(): DOMHTMLCollection;
    get_v_align(): string;
    insert_row(index: number): DOMHTMLElement;
    set_align(value: string): void;
    set_ch(value: string): void;
    set_ch_off(value: string): void;
    set_v_align(value: string): void;
}
export class DOMHTMLTextAreaElement  {
    constructor(config?: properties);
    autofocus: boolean;
    cols: number;
    default_value: string;
    disabled: boolean;
    readonly form: DOMHTMLFormElement;
    name: string;
    read_only: boolean;
    rows: number;
    selection_end: number;
    selection_start: number;
    readonly type: string;
    value: string;
    readonly will_validate: boolean;
    get_area_type(): string;
    get_autofocus(): boolean;
    get_cols(): number;
    get_default_value(): string;
    get_disabled(): boolean;
    get_form(): DOMHTMLFormElement;
    get_name(): string;
    get_read_only(): boolean;
    get_rows(): number;
    get_selection_end(): number;
    get_selection_start(): number;
    get_value(): string;
    get_will_validate(): boolean;
    is_edited(): boolean;
    select(): void;
    set_autofocus(value: boolean): void;
    set_cols(value: number): void;
    set_default_value(value: string): void;
    set_disabled(value: boolean): void;
    set_name(value: string): void;
    set_read_only(value: boolean): void;
    set_rows(value: number): void;
    set_selection_end(value: number): void;
    set_selection_range(start: number, end: number, direction: string): void;
    set_selection_start(value: number): void;
    set_value(value: string): void;
}
export class DOMHTMLTitleElement  {
    constructor(config?: properties);
    text: string;
    get_text(): string;
    set_text(value: string): void;
}
export class DOMHTMLUListElement  {
    constructor(config?: properties);
    compact: boolean;
    type: string;
    get_compact(): boolean;
    get_type_attr(): string;
    set_compact(value: boolean): void;
    set_type_attr(value: string): void;
}
export class DOMKeyboardEvent  {
    constructor(config?: properties);
    readonly alt_graph_key: boolean;
    readonly alt_key: boolean;
    readonly ctrl_key: boolean;
    readonly key_identifier: string;
    readonly key_location: number;
    readonly meta_key: boolean;
    readonly shift_key: boolean;
    get_alt_graph_key(): boolean;
    get_alt_key(): boolean;
    get_ctrl_key(): boolean;
    get_key_identifier(): string;
    get_key_location(): number;
    get_meta_key(): boolean;
    get_modifier_state(keyIdentifierArg: string): boolean;
    get_shift_key(): boolean;
    init_keyboard_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): void;
}
export class DOMMediaList  {
    constructor(config?: properties);
    readonly length: number;
    media_text: string;
    append_medium(newMedium: string): void;
    delete_medium(oldMedium: string): void;
    get_length(): number;
    get_media_text(): string;
    item(index: number): string;
    set_media_text(value: string): void;
}
export class DOMMouseEvent  {
    constructor(config?: properties);
    readonly alt_key: boolean;
    readonly button: number;
    readonly client_x: number;
    readonly client_y: number;
    readonly ctrl_key: boolean;
    readonly from_element: DOMNode;
    readonly meta_key: boolean;
    readonly offset_x: number;
    readonly offset_y: number;
    readonly related_target: DOMEventTarget;
    readonly screen_x: number;
    readonly screen_y: number;
    readonly shift_key: boolean;
    readonly to_element: DOMNode;
    readonly x: number;
    readonly y: number;
    get_alt_key(): boolean;
    get_button(): number;
    get_client_x(): number;
    get_client_y(): number;
    get_ctrl_key(): boolean;
    get_from_element(): DOMNode;
    get_meta_key(): boolean;
    get_offset_x(): number;
    get_offset_y(): number;
    get_related_target(): DOMEventTarget;
    get_screen_x(): number;
    get_screen_y(): number;
    get_shift_key(): boolean;
    get_to_element(): DOMNode;
    get_x(): number;
    get_y(): number;
    init_mouse_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: DOMEventTarget): void;
}
export class DOMNamedNodeMap  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    get_named_item(name: string): DOMNode;
    get_named_item_ns(namespaceURI: string, localName: string): DOMNode;
    item(index: number): DOMNode;
    remove_named_item(name: string): DOMNode;
    remove_named_item_ns(namespaceURI: string, localName: string): DOMNode;
    set_named_item(node: DOMNode): DOMNode;
    set_named_item_ns(node: DOMNode): DOMNode;
}
export class DOMNode  {
    constructor(config?: properties);
    readonly base_uri: string;
    readonly child_nodes: DOMNodeList;
    readonly first_child: DOMNode;
    readonly last_child: DOMNode;
    readonly next_sibling: DOMNode;
    readonly node_name: string;
    readonly node_type: number;
    node_value: string;
    readonly owner_document: DOMDocument;
    readonly parent_element: DOMElement;
    readonly parent_node: DOMNode;
    readonly previous_sibling: DOMNode;
    text_content: string;
    append_child(newChild: DOMNode): DOMNode;
    clone_node(deep: boolean): DOMNode;
    clone_node_with_error(deep: boolean): DOMNode;
    compare_document_position(other: DOMNode): number;
    contains(other: DOMNode): boolean;
    get_base_uri(): string;
    get_child_nodes(): DOMNodeList;
    get_first_child(): DOMNode;
    get_last_child(): DOMNode;
    get_local_name(): string;
    get_namespace_uri(): string;
    get_next_sibling(): DOMNode;
    get_node_name(): string;
    get_node_type(): number;
    get_node_value(): string;
    get_owner_document(): DOMDocument;
    get_parent_element(): DOMElement;
    get_parent_node(): DOMNode;
    get_prefix(): string;
    get_previous_sibling(): DOMNode;
    get_text_content(): string;
    has_child_nodes(): boolean;
    insert_before(newChild: DOMNode, refChild: DOMNode | null): DOMNode;
    is_default_namespace(namespaceURI: string): boolean;
    is_equal_node(other: DOMNode): boolean;
    is_same_node(other: DOMNode): boolean;
    is_supported(feature: string, version: string): boolean;
    lookup_namespace_uri(prefix: string): string;
    lookup_prefix(namespaceURI: string): string;
    normalize(): void;
    remove_child(oldChild: DOMNode): DOMNode;
    replace_child(newChild: DOMNode, oldChild: DOMNode): DOMNode;
    set_node_value(value: string): void;
    set_prefix(value: string): void;
    set_text_content(value: string): void;
    static for_js_value(value: JavaScriptCore.Value): DOMNode;
}
export class DOMNodeIterator  {
    constructor(config?: properties);
    readonly filter: DOMNodeFilter;
    readonly pointer_before_reference_node: boolean;
    readonly reference_node: DOMNode;
    readonly root: DOMNode;
    readonly what_to_show: number;
    detach(): void;
    get_expand_entity_references(): boolean;
    get_filter(): DOMNodeFilter;
    get_pointer_before_reference_node(): boolean;
    get_reference_node(): DOMNode;
    get_root(): DOMNode;
    get_what_to_show(): number;
    next_node(): DOMNode;
    previous_node(): DOMNode;
}
export class DOMNodeList  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMNode;
}
export class DOMObject  {
    constructor(config?: properties);
    core_object: object;
    readonly parentInstance: GObject.Object;
    readonly coreObject: object;
}
export class DOMProcessingInstruction  {
    constructor(config?: properties);
    readonly sheet: DOMStyleSheet;
    readonly target: string;
    get_sheet(): DOMStyleSheet;
    get_target(): string;
}
export class DOMRange  {
    constructor(config?: properties);
    readonly collapsed: boolean;
    readonly common_ancestor_container: DOMNode;
    readonly end_container: DOMNode;
    readonly end_offset: number;
    readonly start_container: DOMNode;
    readonly start_offset: number;
    readonly text: string;
    clone_contents(): DOMDocumentFragment;
    clone_range(): DOMRange;
    collapse(toStart: boolean): void;
    compare_boundary_points(how: number, sourceRange: DOMRange): number;
    compare_node(refNode: DOMNode): number;
    compare_point(refNode: DOMNode, offset: number): number;
    create_contextual_fragment(html: string): DOMDocumentFragment;
    delete_contents(): void;
    detach(): void;
    expand(unit: string): void;
    extract_contents(): DOMDocumentFragment;
    get_collapsed(): boolean;
    get_common_ancestor_container(): DOMNode;
    get_end_container(): DOMNode;
    get_end_offset(): number;
    get_start_container(): DOMNode;
    get_start_offset(): number;
    get_text(): string;
    insert_node(newNode: DOMNode): void;
    intersects_node(refNode: DOMNode): boolean;
    is_point_in_range(refNode: DOMNode, offset: number): boolean;
    select_node(refNode: DOMNode): void;
    select_node_contents(refNode: DOMNode): void;
    set_end(refNode: DOMNode, offset: number): void;
    set_end_after(refNode: DOMNode): void;
    set_end_before(refNode: DOMNode): void;
    set_start(refNode: DOMNode, offset: number): void;
    set_start_after(refNode: DOMNode): void;
    set_start_before(refNode: DOMNode): void;
    surround_contents(newParent: DOMNode): void;
    to_string(): string;
}
export class DOMStyleSheet  {
    constructor(config?: properties);
    disabled: boolean;
    readonly href: string;
    readonly media: DOMMediaList;
    readonly owner_node: DOMNode;
    readonly parent_style_sheet: DOMStyleSheet;
    readonly title: string;
    readonly type: string;
    get_content_type(): string;
    get_disabled(): boolean;
    get_href(): string;
    get_media(): DOMMediaList;
    get_owner_node(): DOMNode;
    get_parent_style_sheet(): DOMStyleSheet;
    get_title(): string;
    set_disabled(value: boolean): void;
}
export class DOMStyleSheetList  {
    constructor(config?: properties);
    readonly length: number;
    get_length(): number;
    item(index: number): DOMStyleSheet;
}
export class DOMText  {
    constructor(config?: properties);
    readonly whole_text: string;
    get_whole_text(): string;
    replace_whole_text(content: string): DOMText;
    split_text(offset: number): DOMText;
}
export class DOMTreeWalker  {
    constructor(config?: properties);
    readonly current_node: DOMNode;
    readonly filter: DOMNodeFilter;
    readonly root: DOMNode;
    readonly what_to_show: number;
    first_child(): DOMNode;
    get_current_node(): DOMNode;
    get_expand_entity_references(): boolean;
    get_filter(): DOMNodeFilter;
    get_root(): DOMNode;
    get_what_to_show(): number;
    last_child(): DOMNode;
    next_node(): DOMNode;
    next_sibling(): DOMNode;
    parent_node(): DOMNode;
    previous_node(): DOMNode;
    previous_sibling(): DOMNode;
    set_current_node(value: DOMNode): void;
}
export class DOMUIEvent  {
    constructor(config?: properties);
    readonly char_code: number;
    readonly detail: number;
    readonly key_code: number;
    readonly layer_x: number;
    readonly layer_y: number;
    readonly page_x: number;
    readonly page_y: number;
    readonly view: DOMDOMWindow;
    get_char_code(): number;
    get_detail(): number;
    get_key_code(): number;
    get_layer_x(): number;
    get_layer_y(): number;
    get_page_x(): number;
    get_page_y(): number;
    get_view(): DOMDOMWindow;
    init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number): void;
}
export class DOMWheelEvent  {
    constructor(config?: properties);
    readonly wheel_delta: number;
    readonly wheel_delta_x: number;
    readonly wheel_delta_y: number;
    get_wheel_delta(): number;
    get_wheel_delta_x(): number;
    get_wheel_delta_y(): number;
    init_wheel_event(wheelDeltaX: number, wheelDeltaY: number, view: DOMDOMWindow, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): void;
}
export class DOMXPathExpression  {
    constructor(config?: properties);
    evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;
}
export class DOMXPathResult  {
    constructor(config?: properties);
    readonly boolean_value: boolean;
    readonly invalid_iterator_state: boolean;
    readonly number_value: number;
    readonly result_type: number;
    readonly single_node_value: DOMNode;
    readonly snapshot_length: number;
    readonly string_value: string;
    get_boolean_value(): boolean;
    get_invalid_iterator_state(): boolean;
    get_number_value(): number;
    get_result_type(): number;
    get_single_node_value(): DOMNode;
    get_snapshot_length(): number;
    get_string_value(): string;
    iterate_next(): DOMNode;
    snapshot_item(index: number): DOMNode;
}
export class Frame  {
    constructor(config?: properties);
    readonly priv: FramePrivate;
    get_id(): number;
    get_js_context(): JavaScriptCore.Context;
    get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
    get_js_value_for_dom_object(dom_object: DOMObject): JavaScriptCore.Value;
    get_js_value_for_dom_object_in_script_world(dom_object: DOMObject, world: ScriptWorld): JavaScriptCore.Value;
    get_uri(): string;
    is_main_frame(): boolean;
}
export class HitTestResult  {
    constructor(config?: properties);
    context: number;
    image_uri: string;
    link_label: string;
    link_title: string;
    link_uri: string;
    media_uri: string;
    readonly priv: HitTestResultPrivate;
    context_is_editable(): boolean;
    context_is_image(): boolean;
    context_is_link(): boolean;
    context_is_media(): boolean;
    context_is_scrollbar(): boolean;
    context_is_selection(): boolean;
    get_context(): number;
    get_image_uri(): string;
    get_link_label(): string;
    get_link_title(): string;
    get_link_uri(): string;
    get_media_uri(): string;
}
export class ScriptWorld extends GObject.Object {
    constructor(config?: properties);
    static new_with_name(name: string): ScriptWorld;
    get_name(): string;
    static get_default(): ScriptWorld;
}
export class URIRequest extends GObject.Object {
    constructor(config?: properties);
    uri: string;
    get_http_headers(): Soup.MessageHeaders;
    get_http_method(): string;
    get_uri(): string;
    set_uri(uri: string): void;
}
export class URIResponse  {
    constructor(config?: properties);
    readonly content_length: number;
    readonly http_headers: Soup.MessageHeaders;
    readonly mime_type: string;
    readonly status_code: number;
    readonly suggested_filename: string;
    readonly uri: string;
    readonly priv: URIResponsePrivate;
    get_content_length(): number;
    get_http_headers(): Soup.MessageHeaders;
    get_mime_type(): string;
    get_status_code(): number;
    get_suggested_filename(): string;
    get_uri(): string;
}
export class WebEditor  {
    constructor(config?: properties);
    readonly priv: WebEditorPrivate;
    get_page(): WebPage;
}
export class WebExtension  {
    constructor(config?: properties);
    readonly priv: WebExtensionPrivate;
    get_page(page_id: number): WebPage;
}
export class WebHitTestResult  {
    constructor(config?: properties);
    node: DOMNode;
    readonly priv: WebHitTestResultPrivate;
    get_node(): DOMNode;
}
export class WebPage  {
    constructor(config?: properties);
    readonly uri: string;
    readonly priv: WebPagePrivate;
    get_dom_document(): DOMDocument;
    get_editor(): WebEditor;
    get_id(): number;
    get_main_frame(): Frame;
    get_uri(): string;
}
export class ConsoleMessage  {
    constructor(config?: properties);
    copy(): ConsoleMessage;
    free(): void;
    get_level(): ConsoleMessageLevel;
    get_line(): number;
    get_source(): ConsoleMessageSource;
    get_source_id(): string;
    get_text(): string;
}
export class ContextMenuItemPrivate  {
    constructor(config?: properties);
}
export class ContextMenuPrivate  {
    constructor(config?: properties);
}
export class FramePrivate  {
    constructor(config?: properties);
}
export class HitTestResultPrivate  {
    constructor(config?: properties);
}
export class ScriptWorldPrivate  {
    constructor(config?: properties);
}
export class URIRequestPrivate  {
    constructor(config?: properties);
}
export class URIResponsePrivate  {
    constructor(config?: properties);
}
export class WebEditorPrivate  {
    constructor(config?: properties);
}
export class WebExtensionPrivate  {
    constructor(config?: properties);
}
export class WebHitTestResultPrivate  {
    constructor(config?: properties);
}
export class WebPagePrivate  {
    constructor(config?: properties);
}
export interface DOMEventTarget  {
    add_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean, user_data: object | null): boolean;
    add_event_listener_with_closure(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
    dispatch_event(event: DOMEvent): boolean;
    remove_event_listener(event_name: string, handler: GObject.Callback, use_capture: boolean): boolean;
    remove_event_listener_with_closure(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}
export interface DOMNodeFilter  {
    accept_node(node: DOMNode): number;
}
export interface DOMXPathNSResolver  {
    lookup_namespace_uri(prefix: string): string;
}