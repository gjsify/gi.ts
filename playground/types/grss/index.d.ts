
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
import * as libxml2 from "libxml2";
import * as Grss from "grss";
/**
 * grss.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export class FeedAtomFormatter extends FeedFormatter {
    constructor(config?: properties);
}
export class FeedChannel extends GObject.Object {
    constructor(config?: properties);
    static new_from_file(path: string): FeedChannel;
    static new_from_memory(data: string): FeedChannel;
    static new_from_xml(doc: libxml2.DocPtr): FeedChannel;
    static new_with_source(source: string): FeedChannel;
    add_contributor(contributor: Person): void;
    add_cookie(cookie: Soup.Cookie): void;
    fetch(): boolean;
    fetch_all(): GLib.List;
    fetch_all_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_all_finish(res: Gio.AsyncResult): GLib.List;
    fetch_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_cancel(): boolean;
    fetch_finish(res: Gio.AsyncResult): boolean;
    get_category(): string;
    get_contributors(): GLib.List;
    get_cookies(): string[];
    get_copyright(): string;
    get_description(): string;
    get_editor(): Person;
    get_format(): string;
    get_generator(): string;
    get_gzip_compression(): boolean;
    get_homepage(): string;
    get_icon(): string;
    get_image(): string;
    get_language(): string;
    get_publish_time(): number;
    get_pubsubhub(hub: string): boolean;
    get_rsscloud(path: string, protocol: string): boolean;
    get_source(): string;
    get_title(): string;
    get_update_interval(): number;
    get_update_time(): number;
    get_webmaster(): string;
    set_category(category: string): void;
    set_copyright(copyright: string): void;
    set_description(description: string): void;
    set_editor(editor: Person): void;
    set_format(format: string): void;
    set_generator(generator: string): void;
    set_gzip_compression(value: boolean): void;
    set_homepage(homepage: string): boolean;
    set_icon(icon: string): boolean;
    set_image(image: string): boolean;
    set_language(language: string): void;
    set_publish_time(publish: number): void;
    set_pubsubhub(hub: string): boolean;
    set_rsscloud(path: string, protocol: string): void;
    set_source(source: string): boolean;
    set_title(title: string): void;
    set_update_interval(minutes: number): void;
    set_update_time(update: number): void;
    set_webmaster(webmaster: string): void;
}
export class FeedEnclosure extends GObject.Object {
    constructor(config?: properties);
    fetch(): Gio.File;
    fetch_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_finish(res: Gio.AsyncResult): Gio.File;
    get_format(): string;
    get_length(): number;
    get_url(): string;
    set_format(type: string): void;
    set_length(length: number): void;
}
export class FeedFormatter  {
    constructor(config?: properties);
    readonly priv: FeedFormatterPrivate;
    add_item(item: FeedItem): void;
    add_items(items: GLib.List): void;
    format(): string;
    get_channel(): FeedChannel;
    get_items(): GLib.List;
    reset(): void;
    set_channel(channel: FeedChannel): void;
}
export class FeedItem extends GObject.Object {
    constructor(config?: properties);
    add_category(category: string): void;
    add_contributor(contributor: Person): void;
    add_enclosure(enclosure: FeedEnclosure): void;
    get_author(): Person;
    get_categories(): GLib.List;
    get_comments_url(): string;
    get_contributors(): GLib.List;
    get_copyright(): string;
    get_description(): string;
    get_enclosures(): GLib.List;
    get_geo_point(latitude: number, longitude: number): boolean;
    get_id(): string;
    get_parent(): FeedChannel;
    get_publish_time(): number;
    get_real_source(realsource: string, title: string): void;
    get_related(): string;
    get_source(): string;
    get_title(): string;
    set_author(author: Person): void;
    set_comments_url(url: string): boolean;
    set_copyright(copyright: string): void;
    set_description(description: string): void;
    set_geo_point(latitude: number, longitude: number): void;
    set_id(id: string): void;
    set_publish_time(publish: number): void;
    set_real_source(realsource: string, title: string): boolean;
    set_related(related: string): void;
    set_source(source: string): boolean;
    set_title(title: string): void;
}
export class FeedParser extends GObject.Object {
    constructor(config?: properties);
    parse(feed: FeedChannel, doc: libxml2.DocPtr): GLib.List;
    parse_channel(feed: FeedChannel, doc: libxml2.DocPtr): void;
}
export class FeedRssFormatter extends FeedFormatter {
    constructor(config?: properties);
}
export class FeedsGroup extends GObject.Object {
    constructor(config?: properties);
    export_file(channels: GLib.List, format: string, uri: string): boolean;
    get_formats(): GLib.List;
    parse_file(path: string): GLib.List;
}
export class FeedsPool extends GObject.Object {
    constructor(config?: properties);
    get_listened(): GLib.List;
    get_listened_num(): number;
    get_session(): Soup.Session;
    listen(feeds: GLib.List): void;
    _switch(run: boolean): void;
    vfunc_feed_fetching(feed: FeedChannel): void;
}
export class FeedsPublisher extends GObject.Object {
    constructor(config?: properties);
    format_content(channel: FeedChannel, items: GLib.List): string;
    hub_set_port(port: number): void;
    hub_set_topics(topics: GLib.List): void;
    hub_switch(run: boolean): void;
    publish_file(channel: FeedChannel, items: GLib.List, uri: string): boolean;
    publish_web(channel: FeedChannel, items: GLib.List, id: string): boolean;
    vfunc_delete_subscription(topic: FeedChannel, callback: string): void;
    vfunc_new_subscription(topic: FeedChannel, callback: string): void;
}
export class FeedsStore  {
    constructor(config?: properties);
    readonly priv: FeedsStorePrivate;
    add_item_in_channel(channel: FeedChannel, item: FeedItem): void;
    get_channels(): GLib.List;
    get_items_by_channel(channel: FeedChannel): GLib.List;
    has_item(channel: FeedChannel, id: string): boolean;
    _switch(run: boolean): void;
}
export class FeedsSubscriber extends GObject.Object {
    constructor(config?: properties);
    get_address(): Gio.InetAddress;
    get_listened(): GLib.List;
    get_port(): number;
    get_session(): Soup.Session;
    listen(feeds: GLib.List): boolean;
    set_port(port: number): void;
    _switch(run: boolean): void;
    vfunc_notification_received(feed: FeedChannel, item: FeedItem): void;
}
export class FeedAtomFormatterPrivate  {
    constructor(config?: properties);
}
export class FeedChannelPrivate  {
    constructor(config?: properties);
}
export class FeedEnclosurePrivate  {
    constructor(config?: properties);
}
export class FeedFormatterPrivate  {
    constructor(config?: properties);
}
export class FeedItemPrivate  {
    constructor(config?: properties);
}
export class FeedParserPrivate  {
    constructor(config?: properties);
}
export class FeedRssFormatterPrivate  {
    constructor(config?: properties);
}
export class FeedsGroupPrivate  {
    constructor(config?: properties);
}
export class FeedsPoolPrivate  {
    constructor(config?: properties);
}
export class FeedsPublisherPrivate  {
    constructor(config?: properties);
}
export class FeedsStorePrivate  {
    constructor(config?: properties);
}
export class FeedsSubscriberPrivate  {
    constructor(config?: properties);
}
export class Person  {
    constructor(config?: properties);
    get_email(): string;
    get_name(): string;
    get_uri(): string;
    ref(): Person;
    unref(): void;
}