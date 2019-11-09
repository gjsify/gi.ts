
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as libxml2 from "libxml2";
import * as Libosinfo from "libosinfo";
/**
 * libosinfo.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const ARCHITECTURE_ALL: string;
export const AVATAR_FORMAT_PROP_ALPHA: string;
export const AVATAR_FORMAT_PROP_HEIGHT: string;
export const AVATAR_FORMAT_PROP_MIME_TYPE: string;
export const AVATAR_FORMAT_PROP_WIDTH: string;
export const DEVICELINK_PROP_DRIVER: string;
export const DEVICELINK_PROP_SUPPORTED: string;
export const DEVICE_DRIVER_PROP_ARCHITECTURE: string;
export const DEVICE_DRIVER_PROP_DEVICE: string;
export const DEVICE_DRIVER_PROP_FILE: string;
export const DEVICE_DRIVER_PROP_LOCATION: string;
export const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string;
export const DEVICE_DRIVER_PROP_SIGNED: string;
export const DEVICE_PROP_BUS_TYPE: string;
export const DEVICE_PROP_CLASS: string;
export const DEVICE_PROP_NAME: string;
export const DEVICE_PROP_PRODUCT: string;
export const DEVICE_PROP_PRODUCT_ID: string;
export const DEVICE_PROP_SUBSYSTEM: string;
export const DEVICE_PROP_VENDOR: string;
export const DEVICE_PROP_VENDOR_ID: string;
export const ENTITY_PROP_ID: string;
export const GIBIBYTES: number;
export const IMAGE_PROP_ARCHITECTURE: string;
export const IMAGE_PROP_CLOUD_INIT: string;
export const IMAGE_PROP_FORMAT: string;
export const IMAGE_PROP_URL: string;
export const IMAGE_PROP_VARIANT: string;
export const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string;
export const INSTALL_CONFIG_PARAM_PROP_NAME: string;
export const INSTALL_CONFIG_PARAM_PROP_POLICY: string;
export const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string;
export const INSTALL_CONFIG_PROP_AVATAR_DISK: string;
export const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string;
export const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string;
export const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string;
export const INSTALL_CONFIG_PROP_HOSTNAME: string;
export const INSTALL_CONFIG_PROP_INSTALLATION_URL: string;
export const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string;
export const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string;
export const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string;
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string;
export const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string;
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string;
export const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string;
export const INSTALL_CONFIG_PROP_REG_LOGIN: string;
export const INSTALL_CONFIG_PROP_REG_PASSWORD: string;
export const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string;
export const INSTALL_CONFIG_PROP_SCRIPT_DISK: string;
export const INSTALL_CONFIG_PROP_TARGET_DISK: string;
export const INSTALL_CONFIG_PROP_USER_ADMIN: string;
export const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string;
export const INSTALL_CONFIG_PROP_USER_LOGIN: string;
export const INSTALL_CONFIG_PROP_USER_PASSWORD: string;
export const INSTALL_CONFIG_PROP_USER_REALNAME: string;
export const INSTALL_SCRIPT_PROFILE_DESKTOP: string;
export const INSTALL_SCRIPT_PROFILE_JEOS: string;
export const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string;
export const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string;
export const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string;
export const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string;
export const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string;
export const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string;
export const INSTALL_SCRIPT_PROP_PATH_FORMAT: string;
export const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string;
export const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string;
export const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string;
export const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string;
export const INSTALL_SCRIPT_PROP_PROFILE: string;
export const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string;
export const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string;
export const KIBIBYTES: number;
export const MAJOR_VERSION: number;
export const MEBIBYTES: number;
export const MEDIA_PROP_APPLICATION_ID: string;
export const MEDIA_PROP_ARCHITECTURE: string;
export const MEDIA_PROP_BOOTABLE: string;
export const MEDIA_PROP_EJECT_AFTER_INSTALL: string;
export const MEDIA_PROP_INITRD: string;
export const MEDIA_PROP_INSTALLER: string;
export const MEDIA_PROP_INSTALLER_REBOOTS: string;
export const MEDIA_PROP_INSTALLER_SCRIPT: string;
export const MEDIA_PROP_KERNEL: string;
export const MEDIA_PROP_LANG: string;
export const MEDIA_PROP_LANG_MAP: string;
export const MEDIA_PROP_LANG_REGEX: string;
export const MEDIA_PROP_LIVE: string;
export const MEDIA_PROP_PUBLISHER_ID: string;
export const MEDIA_PROP_SYSTEM_ID: string;
export const MEDIA_PROP_URL: string;
export const MEDIA_PROP_VARIANT: string;
export const MEDIA_PROP_VOLUME_ID: string;
export const MEDIA_PROP_VOLUME_SIZE: string;
export const MEGAHERTZ: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OS_PROP_DISTRO: string;
export const OS_PROP_FAMILY: string;
export const OS_PROP_KERNEL_URL_ARGUMENT: string;
export const OS_PROP_RELEASE_STATUS: string;
export const OS_VARIANT_PROP_NAME: string;
export const PRODUCT_PROP_CODENAME: string;
export const PRODUCT_PROP_EOL_DATE: string;
export const PRODUCT_PROP_LOGO: string;
export const PRODUCT_PROP_NAME: string;
export const PRODUCT_PROP_RELEASE_DATE: string;
export const PRODUCT_PROP_SHORT_ID: string;
export const PRODUCT_PROP_VENDOR: string;
export const PRODUCT_PROP_VERSION: string;
export const RESOURCES_PROP_ARCHITECTURE: string;
export const RESOURCES_PROP_CPU: string;
export const RESOURCES_PROP_N_CPUS: string;
export const RESOURCES_PROP_RAM: string;
export const RESOURCES_PROP_STORAGE: string;
export const TREE_PROP_ARCHITECTURE: string;
export const TREE_PROP_BOOT_ISO: string;
export const TREE_PROP_HAS_TREEINFO: string;
export const TREE_PROP_INITRD: string;
export const TREE_PROP_KERNEL: string;
export const TREE_PROP_TREEINFO_ARCH: string;
export const TREE_PROP_TREEINFO_FAMILY: string;
export const TREE_PROP_TREEINFO_VARIANT: string;
export const TREE_PROP_TREEINFO_VERSION: string;
export const TREE_PROP_URL: string;
export const TREE_PROP_VARIANT: string;
/**
 * Gets a #GQuark representing the string "libosinfo"
 */
export function error_quark(): GLib.Quark;
/**
 * 
 */
export function media_error_quark(): GLib.Quark;
/**
 * Gets a #GQuark representing the string "osinfo-tree-error"
 */
export function tree_error_quark(): GLib.Quark;
export enum DeviceDriverSigningReq {
    NONE = 0,
    STRICT = 1,
    WARN = 2,
}
export enum InstallConfigParamPolicy {
    NONE = 0,
    REQUIRED = 1,
    OPTIONAL = 2,
}
export enum InstallScriptInstallationSource {
    MEDIA = 0,
    NETWORK = 1,
}
export enum MediaError {
    NO_DESCRIPTORS = 0,
    NO_PVD = 1,
    NO_SVD = 2,
    INSUFFICIENT_METADATA = 3,
    NOT_BOOTABLE = 4,
    NO_DIRECTORY_RECORD_EXTENT = 5,
}
export enum PathFormat {
    UNIX = 0,
    DOS = 1,
}
export enum ProductRelationship {
    DERIVES_FROM = 0,
    UPGRADES = 1,
    CLONES = 2,
}
export enum ReleaseStatus {
    RELEASED = 0,
    SNAPSHOT = 1,
    PRERELEASE = 2,
    ROLLING = 3,
}
export enum TreeError {
    NO_TREEINFO = 0,
    NOT_SUPPORTED_PROTOCOL = 1,
}
export enum InstallScriptInjectionMethod {
    CDROM = 1,
    DISK = 2,
    FLOPPY = 4,
    INITRD = 8,
    WEB = 16,
}
export enum MediaDetectFlags {
    BOOTABLE = 1,
}
export class AvatarFormat extends Entity {
    constructor(config?: properties);
    readonly alpha: boolean;
    readonly height: number;
    readonly mime_types: GLib.List;
    readonly width: number;
    get_alpha(): boolean;
    get_height(): number;
    get_mime_types(): GLib.List;
    get_width(): number;
}
export class Datamap extends Entity {
    constructor(config?: properties);
    insert(inval: string, outval: string): void;
    lookup(inval: string): string;
    reverse_lookup(outval: string): string;
}
export class DatamapList extends List {
    constructor(config?: properties);
}
export class Db extends GObject.Object {
    constructor(config?: properties);
    add_datamap(datamap: Datamap): void;
    add_deployment(deployment: Deployment): void;
    add_device(device: Device): void;
    add_install_script(script: InstallScript): void;
    add_os(os: Os): void;
    add_platform(platform: Platform): void;
    find_deployment(os: Os, platform: Platform): Deployment;
    get_datamap(id: string): Datamap;
    get_datamap_list(): DatamapList;
    get_deployment(id: string): Deployment;
    get_deployment_list(): DeploymentList;
    get_device(id: string): Device;
    get_device_list(): DeviceList;
    get_install_script(id: string): InstallScript;
    get_install_script_list(): InstallScriptList;
    get_os(id: string): Os;
    get_os_list(): OsList;
    get_platform(id: string): Platform;
    get_platform_list(): PlatformList;
    guess_os_from_media(media: Media): [Os, Media | null];
    guess_os_from_tree(tree: Tree): [Os, Tree | null];
    identify_media(media: Media): boolean;
    identify_tree(tree: Tree): boolean;
    unique_values_for_os_relationship(relshp: ProductRelationship): OsList;
    unique_values_for_platform_relationship(relshp: ProductRelationship): PlatformList;
    unique_values_for_property_in_deployment(propName: string): GLib.List;
    unique_values_for_property_in_device(propName: string): GLib.List;
    unique_values_for_property_in_os(propName: string): GLib.List;
    unique_values_for_property_in_platform(propName: string): GLib.List;
}
export class Deployment extends Entity {
    constructor(config?: properties);
    os: Os;
    platform: Platform;
    add_device(dev: Device): DeviceLink;
    get_device_links(filter: Filter | null): DeviceLinkList;
    get_devices(filter: Filter | null): DeviceList;
    get_os(): Os;
    get_platform(): Platform;
    get_preferred_device(filter: Filter | null): Device;
    get_preferred_device_link(filter: Filter | null): DeviceLink;
}
export class DeploymentList extends List {
    constructor(config?: properties);
    new_copy(): DeploymentList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): DeploymentList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: DeploymentList): DeploymentList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: DeploymentList): DeploymentList;
    new_union(...args: never[]): never;
}
export class Device extends Entity {
    constructor(config?: properties);
    get_bus_type(): string;
    get_class(): string;
    get_name(): string;
    get_product(): string;
    get_product_id(): string;
    get_subsystem(): string;
    get_vendor(): string;
    get_vendor_id(): string;
}
export class DeviceDriver  {
    constructor(config?: properties);
    readonly priv: DeviceDriverPrivate;
    get_architecture(): string;
    get_devices(): DeviceList;
    get_files(): GLib.List;
    get_location(): string;
    get_pre_installable(): boolean;
    get_signed(): boolean;
}
export class DeviceDriverList extends List {
    constructor(config?: properties);
}
export class DeviceLink extends Entity {
    constructor(config?: properties);
    target: Device;
    get_driver(): string;
    get_target(): Device;
}
export class DeviceLinkFilter extends Filter {
    constructor(config?: properties);
    target_filter: Filter;
    get_target_filter(): Filter;
}
export class DeviceLinkList extends List {
    constructor(config?: properties);
    get_devices(filter: Filter | null): DeviceList;
    new_copy(): DeviceLinkList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): DeviceLinkList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: DeviceLinkList): DeviceLinkList;
    new_union(...args: never[]): never;
}
export class DeviceList extends List {
    constructor(config?: properties);
    new_copy(): DeviceList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): DeviceList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: DeviceList): DeviceList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: DeviceList): DeviceList;
    new_union(...args: never[]): never;
}
export class Entity  {
    constructor(config?: properties);
    id: string;
    readonly priv: EntityPrivate;
    add_param(key: string, value: string): void;
    clear_param(key: string): void;
    get_id(): string;
    get_param_keys(): GLib.List;
    get_param_value(key: string): string;
    get_param_value_boolean(key: string): boolean;
    get_param_value_boolean_with_default(key: string, default_value: boolean): boolean;
    get_param_value_enum(key: string, enum_type: GType, default_value: number): number;
    get_param_value_int64(key: string): number;
    get_param_value_int64_with_default(key: string, default_value: number): number;
    get_param_value_list(key: string): GLib.List;
    set_param(key: string, value: string): void;
    set_param_boolean(key: string, value: boolean): void;
    set_param_enum(key: string, value: number, enum_type: GType): void;
    set_param_int64(key: string, value: number): void;
}
export class Filter extends GObject.Object {
    constructor(config?: properties);
    add_constraint(propName: string, propVal: string): void;
    clear_constraint(propName: string): void;
    clear_constraints(): void;
    get_constraint_keys(): GLib.List;
    get_constraint_values(propName: string): GLib.List;
    matches(entity: Entity): boolean;
    vfunc_matches(entity: Entity): boolean;
}
export class Image extends Entity {
    constructor(config?: properties);
    architecture: string;
    format: string;
    url: string;
    get_architecture(): string;
    get_cloud_init(): boolean;
    get_format(): string;
    get_os(): Os;
    get_os_variants(): OsVariantList;
    get_url(): string;
    set_os(os: Os): void;
}
export class ImageList extends List {
    constructor(config?: properties);
}
export class InstallConfig extends Entity {
    constructor(config?: properties);
    get_admin_password(): string;
    get_avatar_disk(): string;
    get_avatar_location(): string;
    get_driver_signing(): boolean;
    get_hardware_arch(): string;
    get_hostname(): string;
    get_installation_url(): string;
    get_l10n_keyboard(): string;
    get_l10n_language(): string;
    get_l10n_timezone(): string;
    get_post_install_drivers_disk(): string;
    get_post_install_drivers_location(): string;
    get_pre_install_drivers_disk(): string;
    get_pre_install_drivers_location(): string;
    get_reg_login(): string;
    get_reg_password(): string;
    get_reg_product_key(): string;
    get_script_disk(): string;
    get_target_disk(): string;
    get_user_administrator(): boolean;
    get_user_autologin(): boolean;
    get_user_login(): string;
    get_user_password(): string;
    get_user_realname(): string;
    set_admin_password(password: string): void;
    set_avatar_disk(disk: string): void;
    set_avatar_location(location: string): void;
    set_driver_signing(signing: boolean): void;
    set_hardware_arch(arch: string): void;
    set_hostname(hostname: string): void;
    set_installation_url(url: string): void;
    set_l10n_keyboard(keyboard: string): void;
    set_l10n_language(language: string): void;
    set_l10n_timezone(timezone: string): void;
    set_post_install_drivers_disk(disk: string): void;
    set_post_install_drivers_location(location: string): void;
    set_pre_install_drivers_disk(disk: string): void;
    set_pre_install_drivers_location(location: string): void;
    set_reg_login(name: string): void;
    set_reg_password(password: string): void;
    set_reg_product_key(key: string): void;
    set_script_disk(disk: string): void;
    set_target_disk(disk: string): void;
    set_user_administrator(admin: boolean): void;
    set_user_autologin(autologin: boolean): void;
    set_user_login(username: string): void;
    set_user_password(password: string): void;
    set_user_realname(name: string): void;
}
export class InstallConfigParam extends Entity {
    constructor(config?: properties);
    name: string;
    readonly policy: InstallConfigParamPolicy;
    value_map: Datamap;
    get_name(): string;
    get_policy(): InstallConfigParamPolicy;
    is_optional(): boolean;
    is_required(): boolean;
    set_value_map(datamap: Datamap): void;
}
export class InstallConfigParamList extends List {
    constructor(config?: properties);
}
export class InstallScript extends Entity {
    constructor(config?: properties);
    readonly avatar_format: AvatarFormat;
    readonly installation_source: InstallScriptInstallationSource;
    readonly path_format: PathFormat;
    preferred_injection_method: InstallScriptInjectionMethod;
    readonly product_key_format: string;
    profile: string;
    template_data: string;
    template_uri: string;static new_data(id: string, profile: string, templateData: string): InstallScript;
    static new_uri(id: string, profile: string, templateUri: string): InstallScript;
    generate(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
    generate_async(os: Os, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_command_line(os: Os, config: InstallConfig): string;
    generate_command_line_for_media(media: Media, config: InstallConfig): string;
    generate_command_line_for_tree(tree: Tree, config: InstallConfig): string;
    generate_finish(res: Gio.AsyncResult): string;
    generate_for_media(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
    generate_for_media_async(media: Media, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_for_media_finish(res: Gio.AsyncResult): string;
    generate_for_tree(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null): string;
    generate_for_tree_async(tree: Tree, config: InstallConfig, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_for_tree_finish(res: Gio.AsyncResult): string;
    generate_output(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
    generate_output_async(os: Os, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_output_finish(res: Gio.AsyncResult): Gio.File;
    generate_output_for_media(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
    generate_output_for_media_async(media: Media, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File;
    generate_output_for_tree(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null): Gio.File;
    generate_output_for_tree_async(tree: Tree, config: InstallConfig, output_dir: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File;
    get_avatar_format(): AvatarFormat;
    get_can_post_install_drivers(): boolean;
    get_can_pre_install_drivers(): boolean;
    get_config_param(name: string): InstallConfigParam;
    get_config_param_list(): GLib.List;
    get_config_params(): InstallConfigParamList;
    get_expected_filename(): string;
    get_injection_methods(): InstallScriptInjectionMethod;
    get_installation_source(): InstallScriptInstallationSource;
    get_needs_internet(): boolean;
    get_output_filename(): string;
    get_output_prefix(): string;
    get_path_format(): PathFormat;
    get_post_install_drivers_signing_req(): DeviceDriverSigningReq;
    get_pre_install_drivers_signing_req(): DeviceDriverSigningReq;
    get_preferred_injection_method(): InstallScriptInjectionMethod;
    get_product_key_format(): string;
    get_profile(): string;
    get_template_data(): string;
    get_template_uri(): string;
    has_config_param(config_param: InstallConfigParam): boolean;
    has_config_param_name(name: string): boolean;
    set_installation_source(source: InstallScriptInstallationSource): void;
    set_output_prefix(prefix: string): void;
    set_preferred_injection_method(method: InstallScriptInjectionMethod): void;
}
export class InstallScriptList extends List {
    constructor(config?: properties);
    new_copy(): InstallScriptList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): InstallScriptList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: InstallScriptList): InstallScriptList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: InstallScriptList): InstallScriptList;
    new_union(...args: never[]): never;
}
export class List  {
    constructor(config?: properties);
    element_type: GType;
    readonly priv: ListPrivate;
    add(entity: Entity): void;
    add_all(source: List): void;
    add_filtered(source: List, filter: Filter): void;
    add_intersection(sourceOne: List, sourceTwo: List): void;
    add_union(sourceOne: List, sourceTwo: List): void;
    find_by_id(id: string): Entity;
    get_element_type(): GType;
    get_elements(): GLib.List;
    get_length(): number;
    get_nth(idx: number): Entity;
    new_copy(): List;
    new_filtered(filter: Filter): List;
    new_intersection(sourceTwo: List): List;
    new_union(sourceTwo: List): List;
}
export class Loader extends GObject.Object {
    constructor(config?: properties);
    get_db(): Db;
    process_default_path(): void;
    process_local_path(): void;
    process_path(path: string): void;
    process_system_path(): void;
    process_uri(uri: string): void;
    process_user_path(): void;
}
export class Media extends Entity {
    constructor(config?: properties);
    application_id: string;
    architecture: string;
    eject_after_install: boolean;
    initrd_path: string;
    installer: boolean;
    installer_reboots: number;
    installer_script: boolean;
    kernel_path: string;
    readonly languages: GLib.List;
    live: boolean;
    os: Os;
    publisher_id: string;
    system_id: string;
    url: string;
    volume_id: string;
    volume_size: number;
    add_install_script(script: InstallScript): void;
    get_application_id(): string;
    get_architecture(): string;
    get_eject_after_install(): boolean;
    get_initrd_path(): string;
    get_install_script_list(): InstallScriptList;
    get_installer(): boolean;
    get_installer_reboots(): number;
    get_kernel_path(): string;
    get_languages(): GLib.List;
    get_live(): boolean;
    get_os(): Os;
    get_os_variants(): OsVariantList;
    get_publisher_id(): string;
    get_system_id(): string;
    get_url(): string;
    get_volume_id(): string;
    get_volume_size(): number;
    is_bootable(): boolean;
    supports_installer_script(): boolean;
    static create_from_location(location: string, cancellable: Gio.Cancellable | null): Media;
    static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static create_from_location_finish(res: Gio.AsyncResult): Media;
    static create_from_location_with_flags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media;
    static create_from_location_with_flags_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, flags: number, user_data: object | null): void;
    static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media;
}
export class MediaList extends List {
    constructor(config?: properties);
    new_copy(): MediaList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): MediaList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: MediaList): MediaList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: MediaList): MediaList;
    new_union(...args: never[]): never;
}
export class Os extends Product {
    constructor(config?: properties);
    readonly distro: string;
    readonly family: string;
    readonly kernel_url_argument: string;
    add_device(dev: Device): DeviceLink;
    add_device_driver(driver: DeviceDriver): void;
    add_image(image: Image): void;
    add_install_script(script: InstallScript): void;
    add_maximum_resources(resources: Resources): void;
    add_media(media: Media): void;
    add_minimum_resources(resources: Resources): void;
    add_network_install_resources(resources: Resources): void;
    add_recommended_resources(resources: Resources): void;
    add_tree(tree: Tree): void;
    add_variant(variant: OsVariant): void;
    find_install_script(profile: string): InstallScript;
    get_all_device_links(filter: Filter | null): DeviceLinkList;
    get_all_devices(filter: Filter | null): DeviceList;
    get_device_drivers(): DeviceDriverList;
    get_device_links(filter: Filter | null): DeviceLinkList;
    get_devices(filter: Filter | null): DeviceList;
    get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList;
    get_distro(): string;
    get_family(): string;
    get_image_list(): ImageList;
    get_install_script_list(): InstallScriptList;
    get_kernel_url_argument(): string;
    get_maximum_resources(): ResourcesList;
    get_media_list(): MediaList;
    get_minimum_resources(): ResourcesList;
    get_network_install_resources(): ResourcesList;
    get_recommended_resources(): ResourcesList;
    get_release_status(): ReleaseStatus;
    get_tree_list(): TreeList;
    get_variant_list(): OsVariantList;
}
export class OsList extends ProductList {
    constructor(config?: properties);
    new_copy(): OsList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): OsList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: OsList): OsList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: OsList): OsList;
    new_union(...args: never[]): never;
}
export class OsVariant extends Entity {
    constructor(config?: properties);
    name: string;
    get_name(): string;
}
export class OsVariantList extends List {
    constructor(config?: properties);
}
export class Platform extends Product {
    constructor(config?: properties);
    add_device(dev: Device): DeviceLink;
    get_all_devices(filter: Filter | null): DeviceList;
    get_device_links(filter: Filter | null): DeviceLinkList;
    get_devices(filter: Filter | null): DeviceList;
}
export class PlatformList extends ProductList {
    constructor(config?: properties);
    new_copy(): PlatformList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): PlatformList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: PlatformList): PlatformList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: PlatformList): PlatformList;
    new_union(...args: never[]): never;
}
export class Product  {
    constructor(config?: properties);
    readonly codename: string;
    readonly logo: string;
    readonly name: string;
    readonly short_id: string;
    readonly vendor: string;
    readonly version: string;
    readonly priv: ProductPrivate;
    add_related(relshp: ProductRelationship, otherproduct: Product): void;
    get_codename(): string;
    get_eol_date(): GLib.Date;
    get_eol_date_string(): string;
    get_logo(): string;
    get_name(): string;
    get_related(relshp: ProductRelationship): ProductList;
    get_release_date(): GLib.Date;
    get_release_date_string(): string;
    get_short_id(): string;
    get_short_id_list(): GLib.List;
    get_vendor(): string;
    get_version(): string;
}
export class ProductFilter extends Filter {
    constructor(config?: properties);
    add_product_constraint(relshp: ProductRelationship, product: Product): number;
    add_support_date_constraint(when: GLib.Date): void;
    clear_product_constraint(relshp: ProductRelationship): void;
    clear_product_constraints(): void;
    get_product_constraint_values(relshp: ProductRelationship): GLib.List;
}
export class ProductList extends List {
    constructor(config?: properties);
    new_copy(): ProductList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): ProductList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: ProductList): ProductList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: ProductList): ProductList;
    new_union(...args: never[]): never;
}
export class Resources extends Entity {
    constructor(config?: properties);
    architecture: string;
    cpu: number;
    n_cpus: number;
    ram: number;
    storage: number;
    get_architecture(): string;
    get_cpu(): number;
    get_n_cpus(): number;
    get_ram(): number;
    get_storage(): number;
    set_cpu(cpu: number): void;
    set_n_cpus(n_cpus: number): void;
    set_ram(ram: number): void;
    set_storage(storage: number): void;
}
export class ResourcesList extends List {
    constructor(config?: properties);
    new_copy(): ResourcesList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): ResourcesList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: ResourcesList): ResourcesList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: ResourcesList): ResourcesList;
    new_union(...args: never[]): never;
}
export class Tree extends Entity {
    constructor(config?: properties);
    architecture: string;
    boot_iso_path: string;
    initrd_path: string;
    kernel_path: string;
    os: Os;
    treeinfo_arch: string;
    treeinfo_family: string;
    treeinfo_variant: string;
    treeinfo_version: string;
    url: string;
    get_architecture(): string;
    get_boot_iso_path(): string;
    get_initrd_path(): string;
    get_kernel_path(): string;
    get_os(): Os;
    get_os_variants(): OsVariantList;
    get_treeinfo_arch(): string;
    get_treeinfo_family(): string;
    get_treeinfo_variant(): string;
    get_treeinfo_version(): string;
    get_url(): string;
    has_treeinfo(): boolean;
    set_os(os: Os): void;
    static create_from_location(location: string, cancellable: Gio.Cancellable | null): Tree;
    static create_from_location_async(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static create_from_location_finish(res: Gio.AsyncResult): Tree;
}
export class TreeList extends List {
    constructor(config?: properties);
    new_copy(): TreeList;
    new_copy(...args: never[]): never;
    new_filtered(filter: Filter): TreeList;
    new_filtered(...args: never[]): never;
    new_intersection(sourceTwo: TreeList): TreeList;
    new_intersection(...args: never[]): never;
    new_union(sourceTwo: TreeList): TreeList;
    new_union(...args: never[]): never;
}
export class DatamapListPrivate  {
    constructor(config?: properties);
}
export class DatamapPrivate  {
    constructor(config?: properties);
}
export class DbPrivate  {
    constructor(config?: properties);
}
export class DeploymentListPrivate  {
    constructor(config?: properties);
}
export class DeploymentPrivate  {
    constructor(config?: properties);
}
export class DeviceDriverListPrivate  {
    constructor(config?: properties);
}
export class DeviceDriverPrivate  {
    constructor(config?: properties);
}
export class DeviceLinkFilterPrivate  {
    constructor(config?: properties);
}
export class DeviceLinkListPrivate  {
    constructor(config?: properties);
}
export class DeviceLinkPrivate  {
    constructor(config?: properties);
}
export class DeviceListPrivate  {
    constructor(config?: properties);
}
export class DevicePrivate  {
    constructor(config?: properties);
}
export class EntityPrivate  {
    constructor(config?: properties);
}
export class FilterPrivate  {
    constructor(config?: properties);
}
export class ImageListPrivate  {
    constructor(config?: properties);
}
export class ImagePrivate  {
    constructor(config?: properties);
}
export class InstallConfigParamListPrivate  {
    constructor(config?: properties);
}
export class InstallConfigParamPrivate  {
    constructor(config?: properties);
}
export class InstallConfigPrivate  {
    constructor(config?: properties);
}
export class InstallScriptListPrivate  {
    constructor(config?: properties);
}
export class InstallScriptPrivate  {
    constructor(config?: properties);
}
export class ListPrivate  {
    constructor(config?: properties);
}
export class LoaderPrivate  {
    constructor(config?: properties);
}
export class MediaListPrivate  {
    constructor(config?: properties);
}
export class MediaPrivate  {
    constructor(config?: properties);
}
export class OsListPrivate  {
    constructor(config?: properties);
}
export class OsPrivate  {
    constructor(config?: properties);
}
export class OsVariantListPrivate  {
    constructor(config?: properties);
}
export class OsVariantPrivate  {
    constructor(config?: properties);
}
export class PlatformListPrivate  {
    constructor(config?: properties);
}
export class PlatformPrivate  {
    constructor(config?: properties);
}
export class ProductFilterPrivate  {
    constructor(config?: properties);
}
export class ProductListPrivate  {
    constructor(config?: properties);
}
export class ProductPrivate  {
    constructor(config?: properties);
}
export class ResourcesListPrivate  {
    constructor(config?: properties);
}
export class ResourcesPrivate  {
    constructor(config?: properties);
}
export class TreeListPrivate  {
    constructor(config?: properties);
}
export class TreePrivate  {
    constructor(config?: properties);
}