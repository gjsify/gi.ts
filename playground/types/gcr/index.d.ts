
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gck from "gck";
import * as Gcr from "gcr";
/**
 * gcr.d.ts
 */
type properties = { [key: string]: any };
export type FilterCollectionFunc = (object: GObject.Object, user_data: object | null) => boolean;
export const ICON_CERTIFICATE: string;
export const ICON_GNUPG: string;
export const ICON_HOME_DIRECTORY: string;
export const ICON_KEY: string;
export const ICON_KEY_PAIR: string;
export const ICON_PASSWORD: string;
export const ICON_SMART_CARD: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PURPOSE_CLIENT_AUTH: string;
export const PURPOSE_CODE_SIGNING: string;
export const PURPOSE_EMAIL: string;
export const PURPOSE_SERVER_AUTH: string;
export const SECRET_EXCHANGE_PROTOCOL_1: string;
export const UNLOCK_OPTION_ALWAYS: string;
export const UNLOCK_OPTION_IDLE: string;
export const UNLOCK_OPTION_SESSION: string;
export const UNLOCK_OPTION_TIMEOUT: string;
/**
 * Compare one certificate against another. If the certificates are equal
 * then zero is returned. If one certificate is %NULL or not a certificat
 * e,
 * then a non-zero value is returned.
 * The return value is useful in a stable sort, but has no user logical
 * meaning.
 */
export function certificate_compare(first: Comparable | null, other: Comparable | null): number;
/**
 * Get the columns appropriate for a certificate
 */
export function certificate_get_columns(): Column;
/**
 * Initialize the certificate mixin for the class. This mixin implements 
 * the
 * various required properties for the certificate.
 * Call this function near the end of your derived class_init function. T
 * he
 * derived class must implement the #GcrCertificate interface.
 */
export function certificate_mixin_class_init(object_class: GObject.ObjectClass): void;
/**
 * Initialize a #GcrComparableIface to compare the current certificate.
 * In general it's easier to use the GCR_CERTIFICATE_MIXIN_IMPLEMENT_COMP
 * ARABLE()
 * macro instead of this function.
 */
export function certificate_mixin_comparable_init(iface: ComparableIface): void;
/**
 * Implementation to get various required certificate properties. This sh
 * ould
 * be called from your derived class get_property function, or used as a
 * get_property virtual function.
 * Example of use as called from derived class get_property function:
 * <informalexample><programlisting>
 * static void
 * my_get_property (GObject *obj, guint prop_id, GValue *value, GParamSpe
 * c *pspec)
 * {
 * 	switch (prop_id) {
 * 	...
 * 	default:
 * 		gcr_certificate_mixin_get_property (obj, prop_id, value, pspec);
 * 		break;
 * 	}
 * }
 * </programlisting></informalexample>
 * Example of use as get_property function:
 * <informalexample><programlisting>
 * static void
 * my_class_init (MyClass *klass)
 * {
 * 	GObjectClass *gobject_class = G_OBJECT_CLASS (klass);
 * 	gobject_class->get_property = gcr_certificate_mixin_get_property;
 * 	...
 * }
 * </programlisting></informalexample>
 */
export function certificate_mixin_get_property(obj: GObject.Object, prop_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
/**
 * Compare two blocks of memory. The return value can be used to sort
 * the blocks of memory.
 */
export function comparable_memcmp(mem1: number[], size1: number, mem2: number[], size2: number): number;
/**
 * 
 */
export function data_error_get_domain(): GLib.Quark;
/**
 * Create a key fingerprint for a certificate, public key or private key.
 * Note that this is not a fingerprint of certificate data, which you wou
 * ld
 * use gcr_certificate_get_fingerprint() for.
 */
export function fingerprint_from_attributes(attrs: Gck.Attributes, checksum_type: GLib.ChecksumType): [number[] | null, number];
/**
 * Create a key fingerprint for a DER encoded subjectPublicKeyInfo.
 */
export function fingerprint_from_subject_public_key_info(key_info: number[], n_key_info: number, checksum_type: GLib.ChecksumType): [number[] | null, number];
/**
 * Get an appropriate icon for the token
 */
export function icon_for_token(token_info: Gck.TokenInfo): Gio.Icon;
/**
 * Create a set of importers which can import this parsed item.
 * The parsed item is represented by the state of the GcrParser at the
 * time of calling this method.
 */
export function importer_create_for_parsed(parsed: Parsed): GLib.List;
/**
 * Queues an additional item to be imported in all compattible importers
 * in the set. The parsed item is represented by the state of the #GcrPar
 * ser
 * at the time of calling this method.
 * If the parsed item is incompatible with an importer, then that the ite
 * m
 * will not be queued on that importer.
 */
export function importer_queue_and_filter_for_parsed(importers: GLib.List, parsed: Parsed): GLib.List;
/**
 * Register an importer to handle parsed items that match the given attri
 * butes.
 * If @attrs are a floating reference, then it is consumed.
 */
export function importer_register(importer_type: unknown, attrs: Gck.Attributes): void;
/**
 * Register built-in PKCS\#11 and GnuPG importers.
 */
export function importer_register_well_known(): void;
/**
 * Disconnect the mock prompter
 */
export function mock_prompter_disconnect(): void;
/**
 * Queue an expected response on the mock prompter.
 * Expects any prompt, and closes the prompt when it gets it.
 */
export function mock_prompter_expect_close(): void;
/**
 * Queue an expected response on the mock prompter.
 * Expects a confirmation prompt, and then cancels that prompt.
 */
export function mock_prompter_expect_confirm_cancel(): void;
/**
 * Queue an expected response on the mock prompter.
 * Expects a confirmation prompt, and then confirms that prompt by
 * simulating a click on the ok button.
 * Additional property pairs for the prompt can be added in the argument
 * list, in the same way that you would with g_object_new().
 * If the "choice-chosen" property is specified then that value will be
 * set on the prompt as if the user had changed the value.
 * All other properties will be checked against the prompt, and an error
 * will occur if they do not match the value set on the prompt.
 */
export function mock_prompter_expect_confirm_ok(first_property_name: string, ___: unknown[]): void;
/**
 * Queue an expected response on the mock prompter.
 * Expects a password prompt, and then cancels that prompt.
 */
export function mock_prompter_expect_password_cancel(): void;
/**
 * Queue an expected response on the mock prompter.
 * Expects a password prompt, and returns @password as if the user had en
 * tered
 * it and clicked the ok button.
 * Additional property pairs for the prompt can be added in the argument
 * list, in the same way that you would with g_object_new().
 * If the "choice-chosen" property is specified then that value will be
 * set on the prompt as if the user had changed the value.
 * All other properties will be checked against the prompt, and an error
 * will occur if they do not match the value set on the prompt.
 */
export function mock_prompter_expect_password_ok(password: string, first_property_name: string, ___: unknown[]): void;
/**
 * Get the delay in milliseconds before the mock prompter completes
 * an expected prompt.
 */
export function mock_prompter_get_delay_msec(): number;
/**
 * Check if the mock prompter is expecting a response. This will be %TRUE
 * when one of the <literal>gcr_mock_prompter_expect_xxx<!-- -->()</liter
 * al>
 * functions have been used to queue an expected prompt, but that prompt
 * response has not be 'used' yet.
 */
export function mock_prompter_is_expecting(): boolean;
/**
 * Check if the mock prompter is showing any prompts.
 */
export function mock_prompter_is_prompting(): boolean;
/**
 * Set the delay in milliseconds before the mock prompter completes
 * an expected prompt.
 */
export function mock_prompter_set_delay_msec(delay_msec: number): void;
/**
 * Start the mock prompter. This is often used from the
 * <literal>setup<!-- -->()</literal> function of tests.
 * Starts the mock prompter in an additional thread. Use the returned DBu
 * s bus
 * name with gcr_system_prompt_open_for_prompter() to connect to this pro
 * mpter.
 */
export function mock_prompter_start(): string;
/**
 * Stop the mock prompter. This is often used from the
 * <literal>teardown<!-- -->()</literal> function of tests.
 */
export function mock_prompter_stop(): void;
/**
 * Unreferences a parsed item which was referenced with gcr_parsed_ref()
 */
export function parsed_unref(parsed: object | null): void;
/**
 * Add a #GckModule to the list of PKCS\#11 modules that are used by the
 * GCR library.
 * It is not normally necessary to call this function. The available
 * PKCS\#11 modules installed on the system are automatically loaded
 * by the GCR library.
 */
export function pkcs11_add_module(module: Gck.Module): void;
/**
 * Initialize a PKCS\#11 module and add it to the modules that are
 * used by the GCR library. Note that is an error to initialize the same
 * PKCS\#11 module twice.
 * It is not normally necessary to call this function. The available
 * PKCS\#11 modules installed on the system are automatically loaded
 * by the GCR library.
 */
export function pkcs11_add_module_from_file(module_path: string, unused: object | null): boolean;
/**
 * List all the PKCS\#11 modules that are used by the GCR library.
 * Each module is a #GckModule object.
 * An empty list of modules will be returned if gcr_pkcs11_set_modules(),
 * or gcr_pkcs11_initialize() has not yet run.
 * When done with the list, free it with gck_list_unref_free().
 */
export function pkcs11_get_modules(): GLib.List;
/**
 * List all the PKCS\#11 slots that are used by the GCR library for looku
 * p
 * of trust assertions. Each slot is a #GckSlot object.
 * This will return an empty list if the gcr_pkcs11_initialize() function
 *  has
 * not yet been called.
 * When done with the list, free it with gck_list_unref_free().
 */
export function pkcs11_get_trust_lookup_slots(): GLib.List;
/**
 * Get the PKCS\#11 URIs that are used to identify which slots to use for
 * lookup trust assertions.
 */
export function pkcs11_get_trust_lookup_uris(): string[] | null;
/**
 * Selects an appropriate PKCS\#11 slot to store trust assertions. The sl
 * ot
 * to use is normally configured automatically by the system.
 * This will only return a valid result after the gcr_pkcs11_initialize()
 * method has been called.
 * When done with the #GckSlot, use g_object_unref() to release it.
 */
export function pkcs11_get_trust_store_slot(): Gck.Slot | null;
/**
 * Get the PKCS\#11 URI that is used to identify which slot to use for
 * storing trust storage.
 */
export function pkcs11_get_trust_store_uri(): string | null;
/**
 * Asynchronously initialize the registered PKCS\#11 modules.
 */
export function pkcs11_initialize(cancellable: Gio.Cancellable | null): boolean;
/**
 * Asynchronously initialize the registered PKCS\#11 modules.
 */
export function pkcs11_initialize_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Complete the asynchronous operation to initialize the registered PKCS\
 * #11
 * modules.
 */
export function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean;
/**
 * Set the list of PKCS\#11 modules that are used by the GCR library.
 * Each module in the list is a #GckModule object.
 * It is not normally necessary to call this function. The available
 * PKCS\#11 modules installed on the system are automatically loaded
 * by the GCR library.
 */
export function pkcs11_set_modules(modules: GLib.List): void;
/**
 * Set the PKCS\#11 URIs that are used to identify which slots to use for
 * lookup of trust assertions.
 * It is not normally necessary to call this function. The relevant
 * PKCS\#11 slots are automatically configured by the GCR library.
 */
export function pkcs11_set_trust_lookup_uris(pkcs11_uris: string | null): void;
/**
 * Set the PKCS\#11 URI that is used to identify which slot to use for
 * storing trust assertions.
 * It is not normally necessary to call this function. The relevant
 * PKCS\#11 slot is automatically configured by the GCR library.
 */
export function pkcs11_set_trust_store_uri(pkcs11_uri: string | null): void;
/**
 * Allocate a block of non-pageable memory.
 * If non-pageable memory cannot be allocated then normal memory will be
 * returned.
 */
export function secure_memory_alloc(size: number): object | null;
/**
 * Free a block of non-pageable memory.
 * Glib memory is also freed correctly when passed to this function. If c
 * alled
 * with a %NULL pointer then no action is taken.
 */
export function secure_memory_free(memory: object | null): void;
/**
 * Check if a pointer is in non-pageable memory allocated by.
 */
export function secure_memory_is_secure(memory: object | null): boolean;
/**
 * Reallocate a block of non-pageable memory.
 * Glib memory is also reallocated correctly. If called with a null point
 * er,
 * then a new block of memory is allocated. If called with a zero size,
 * then the block of memory is freed.
 * If non-pageable memory cannot be allocated then normal memory will be
 * returned.
 */
export function secure_memory_realloc(memory: object | null, size: number): object | null;
/**
 * Copy a string into non-pageable memory. If the input string is %NULL, 
 * then
 * %NULL will be returned.
 */
export function secure_memory_strdup(string: string | null): string;
/**
 * Free a string, whether securely allocated using these functions or not
 * .
 * This will also clear out the contents of the string so they do not
 * remain in memory.
 */
export function secure_memory_strfree(string: string | null): void;
/**
 * Allocate a block of non-pageable memory.
 * If non-pageable memory cannot be allocated, then %NULL is returned.
 */
export function secure_memory_try_alloc(size: number): object | null;
/**
 * Reallocate a block of non-pageable memory.
 * Glib memory is also reallocated correctly when passed to this function
 * .
 * If called with a null pointer, then a new block of memory is allocated
 * .
 * If called with a zero size, then the block of memory is freed.
 * If memory cannot be allocated, %NULL is returned and the original bloc
 * k
 * of memory remains intact.
 */
export function secure_memory_try_realloc(memory: object | null, size: number): object | null;
/**
 * Add a pinned @certificate for connections to @peer for @purpose. A pin
 * ned
 * certificate overrides all other certificate verification and should be
 * used with care.
 * If the same pinned certificate already exists, then this operation
 * does not add another, and succeeds without error.
 * This call may block, see gcr_trust_add_pinned_certificate_async() for 
 * the
 * non-blocking version.
 */
export function trust_add_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Add a pinned certificate for communication with @peer for @purpose. A 
 * pinned
 * certificate overrides all other certificate verification and should be
 *  used
 * with care.
 * If the same pinned certificate already exists, then this operation
 * does not add another, and succeeds without error.
 * When the operation is finished, callback will be called. You can then 
 * call
 * gcr_trust_add_pinned_certificate_finish() to get the result of the
 * operation.
 */
export function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an asynchronous operation started by
 * gcr_trust_add_pinned_certificate_async().
 */
export function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
/**
 * Check if the @certificate is a trust anchor for the given @purpose. A 
 * trust
 * anchor is used to verify the signatures on other certificates when ver
 * ifying
 * a certificate chain. Also known as a trusted certificate authority.
 * This call may block, see gcr_trust_is_certificate_anchored_async() for
 *  the
 * non-blocking version.
 * In the case of an error, %FALSE is also returned. Check @error to dete
 * ct
 * if an error occurred.
 */
export function trust_is_certificate_anchored(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Check if the @certificate is a trust anchor for the given @purpose. A 
 * trust
 * anchor is used to verify the signatures on other certificates when ver
 * ifying
 * a certificate chain. Also known as a trusted certificate authority.
 * When the operation is finished, callback will be called. You can then 
 * call
 * gcr_trust_is_certificate_anchored_finish() to get the result of the op
 * eration.
 */
export function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an asynchronous operation started by
 * gcr_trust_is_certificate_anchored_async().
 * In the case of an error, %FALSE is also returned. Check @error to dete
 * ct
 * if an error occurred.
 */
export function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean;
/**
 * Check if @certificate is pinned for @purpose to communicate with @peer
 * .
 * A pinned certificate overrides all other certificate verification.
 * This call may block, see gcr_trust_is_certificate_pinned_async() for t
 * he
 * non-blocking version.
 * In the case of an error, %FALSE is also returned. Check @error to dete
 * ct
 * if an error occurred.
 */
export function trust_is_certificate_pinned(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Check if @certificate is pinned for @purpose to communicate with @peer
 * . A
 * pinned certificate overrides all other certificate verification.
 * When the operation is finished, callback will be called. You can then 
 * call
 * gcr_trust_is_certificate_pinned_finish() to get the result of the
 * operation.
 */
export function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an asynchronous operation started by
 * gcr_trust_is_certificate_pinned_async().
 * In the case of an error, %FALSE is also returned. Check @error to dete
 * ct
 * if an error occurred.
 */
export function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean;
/**
 * Remove a pinned certificate for communication with @peer for @purpose.
 * If the same pinned certificate does not exist, or was already removed,
 * then this operation succeeds without error.
 * This call may block, see gcr_trust_remove_pinned_certificate_async() f
 * or the
 * non-blocking version.
 */
export function trust_remove_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Remove a pinned certificate for communication with @peer for @purpose.
 * If the same pinned certificate does not exist, or was already removed,
 * then this operation succeeds without error.
 * When the operation is finished, callback will be called. You can then 
 * call
 * gcr_trust_remove_pinned_certificate_finish() to get the result of the
 * operation.
 */
export function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an asynchronous operation started by
 * gcr_trust_remove_pinned_certificate_async().
 */
export function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
export enum CertificateChainStatus {
    UNKNOWN = 0,
    INCOMPLETE = 1,
    DISTRUSTED = 2,
    SELFSIGNED = 3,
    PINNED = 4,
    ANCHORED = 5,
}
export enum CertificateRequestFormat {
    CERTIFICATE_REQUEST_PKCS10 = 1,
}
export enum DataError {
    FAILURE = -1,
    UNRECOGNIZED = 1,
    CANCELLED = 2,
    LOCKED = 3,
}
export enum DataFormat {
    ALL = -1,
    INVALID = 0,
    DER_PRIVATE_KEY = 100,
    DER_PRIVATE_KEY_RSA = 101,
    DER_PRIVATE_KEY_DSA = 102,
    DER_PRIVATE_KEY_EC = 103,
    DER_SUBJECT_PUBLIC_KEY = 150,
    DER_CERTIFICATE_X509 = 200,
    DER_PKCS7 = 300,
    DER_PKCS8 = 400,
    DER_PKCS8_PLAIN = 401,
    DER_PKCS8_ENCRYPTED = 402,
    DER_PKCS10 = 450,
    DER_SPKAC = 455,
    BASE64_SPKAC = 456,
    DER_PKCS12 = 500,
    OPENSSH_PUBLIC = 600,
    OPENPGP_PACKET = 700,
    OPENPGP_ARMOR = 701,
    PEM = 1000,
    PEM_PRIVATE_KEY_RSA = 1001,
    PEM_PRIVATE_KEY_DSA = 1002,
    PEM_CERTIFICATE_X509 = 1003,
    PEM_PKCS7 = 1004,
    PEM_PKCS8_PLAIN = 1005,
    PEM_PKCS8_ENCRYPTED = 1006,
    PEM_PKCS12 = 1007,
    PEM_PRIVATE_KEY = 1008,
    PEM_PKCS10 = 1009,
    PEM_PRIVATE_KEY_EC = 1010,
    PEM_PUBLIC_KEY = 1011,
}
export enum PromptReply {
    CANCEL = 0,
    CONTINUE = 1,
}
export enum SystemPromptError {
    SYSTEM_PROMPT_IN_PROGRESS = 1,
}
export enum SystemPrompterMode {
    SINGLE = 0,
    MULTIPLE = 1,
}
export enum CertificateChainFlags {
    NONE = 0,
    NO_LOOKUPS = 1,
}
export enum ColumnFlags {
    NONE = 0,
    HIDDEN = 2,
    SORTABLE = 4,
}
export class CertificateChain extends GObject.Object {constructor(config?: properties);
readonly length: number;
readonly status: unknown;
add(certificate: Certificate): void;
build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null): boolean;
build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
build_finish(result: Gio.AsyncResult): boolean;
get_anchor(): Certificate;
get_certificate(index: number): Certificate;
get_endpoint(): Certificate;
get_length(): number;
get_status(): CertificateChainStatus;
}
export class CertificateRequest  {constructor(config?: properties);
format: unknown;
private_key: Gck.Object;
complete(cancellable: Gio.Cancellable | null): boolean;
complete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
complete_finish(result: Gio.AsyncResult): boolean;
encode(textual: boolean): [number[], number];
get_format(): CertificateRequestFormat;
get_private_key(): Gck.Object;
set_cn(cn: string): void;
static capable(private_key: Gck.Object, cancellable: Gio.Cancellable | null): boolean;
static capable_async(private_key: Gck.Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static capable_finish(result: Gio.AsyncResult): boolean;
static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest;
}
export class FilterCollection extends GObject.Object {constructor(config?: properties);
underlying: Collection;static new_with_callback(underlying: Collection, callback: FilterCollectionFunc | null, user_data: object | null, destroy_func: GLib.DestroyNotify): FilterCollection;
get_underlying(): Collection;
refilter(): void;
set_callback(callback: FilterCollectionFunc | null, user_data: object | null, destroy_func: GLib.DestroyNotify): void;
}
export class Parser extends GObject.Object {constructor(config?: properties);
readonly parsed_attributes: Gck.Attributes;
readonly parsed_description: string;
readonly parsed_label: string;
add_password(password: string | null): void;
format_disable(format: DataFormat): void;
format_enable(format: DataFormat): void;
format_supported(format: DataFormat): boolean;
get_filename(): string;
get_parsed(): Parsed;
get_parsed_attributes(): Gck.Attributes | null;
get_parsed_block(): [number[] | null, number];
get_parsed_bytes(): GLib.Bytes;
get_parsed_description(): string | null;
get_parsed_format(): DataFormat;
get_parsed_label(): string | null;
parse_bytes(data: GLib.Bytes): boolean;
parse_data(data: number[], n_data: number): boolean;
parse_stream(input: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
parse_stream_async(input: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
parse_stream_finish(result: Gio.AsyncResult): boolean;
set_filename(filename: string | null): void;
vfunc_authenticate(count: number): boolean;
vfunc_parsed(): void;
}
export class Pkcs11Certificate  {constructor(config?: properties);
attributes: Gck.Attributes;
readonly pv: Pkcs11CertificatePrivate;
get_attributes(): Gck.Attributes;
static lookup_issuer(certificate: Certificate, cancellable: Gio.Cancellable | null): Certificate;
static lookup_issuer_async(certificate: Certificate, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static lookup_issuer_finish(result: Gio.AsyncResult): Certificate;
}
export class SecretExchange extends GObject.Object {constructor(config?: properties);
protocol: string;
begin(): string;
get_protocol(): string;
get_secret(): [string[], number | null];
receive(exchange: string): boolean;
send(secret: string | null, secret_len: number): string;
vfunc_decrypt_transport_data(allocator: Gck.Allocator, cipher_text: number, n_cipher_text: number, parameter: number, n_parameter: number, plain_text: number, n_plain_text: number): boolean;
vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
vfunc_encrypt_transport_data(allocator: Gck.Allocator, plain_text: number, n_plain_text: number, parameter: number, n_parameter: number, cipher_text: number, n_cipher_text: number): boolean;
vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;
}
export class SimpleCertificate extends GObject.Object {constructor(config?: properties);
static new_static(data: number[], n_data: number): SimpleCertificate;
}
export class SimpleCollection extends GObject.Object {constructor(config?: properties);
add(object: GObject.Object): void;
remove(object: GObject.Object): void;
}
export class SshAskpass extends GObject.Object {constructor(config?: properties);
interaction: Gio.TlsInteraction;
get_interaction(): Gio.TlsInteraction;
static child_setup(askpass: object | null): void;
}
export class SystemPrompt  {constructor(config?: properties);
bus_name: string;
secret_exchange: SecretExchange;
timeout_seconds: number;
readonly pv: SystemPromptPrivate;
close(cancellable: Gio.Cancellable | null): boolean;
close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
close_finish(result: Gio.AsyncResult): boolean;
get_secret_exchange(): SecretExchange;
static error_get_domain(): GLib.Quark;
static open(timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
static open_async(timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static open_finish(result: Gio.AsyncResult): SystemPrompt;
static open_for_prompter(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
static open_for_prompter_async(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class SystemPrompter extends GObject.Object {constructor(config?: properties);
mode: unknown;
prompt_type: unknown;
readonly prompting: boolean;
get_mode(): SystemPrompterMode;
get_prompt_type(): unknown;
get_prompting(): boolean;
register(connection: Gio.DBusConnection): void;
unregister(wait: boolean): void;
vfunc_new_prompt(): Prompt;
}
export class UnionCollection extends GObject.Object {constructor(config?: properties);
add(collection: Collection): void;
elements(): GLib.List;
have(collection: Collection): boolean;
remove(collection: Collection): void;
size(): number;
take(collection: Collection): void;
}
export class CertificateChainClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class CertificateChainPrivate  {constructor(config?: properties);
}
export class CertificateIface  {constructor(config?: properties);
readonly get_der_data: unknown;
readonly dummy1: object;
readonly dummy2: object;
readonly dummy3: object;
readonly dummy5: object;
readonly dummy6: object;
readonly dummy7: object;
readonly dummy8: object;
}
export class CollectionIface  {constructor(config?: properties);
readonly added: unknown;
readonly removed: unknown;
readonly get_length: unknown;
readonly get_objects: unknown;
readonly contains: unknown;
readonly dummy1: object;
readonly dummy2: object;
readonly dummy3: object;
readonly dummy5: object;
readonly dummy6: object;
readonly dummy7: object;
readonly dummy8: object;
}
export class Column  {constructor(config?: properties);
property_name: string;
property_type: unknown;
column_type: unknown;
label: string;
flags: ColumnFlags;
transformer: GObject.ValueTransform;
user_data: object;
readonly reserved: object;
}
export class ComparableIface  {constructor(config?: properties);
readonly compare: unknown;
}
export class FilterCollectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class FilterCollectionPrivate  {constructor(config?: properties);
}
export class ImportInteractionIface  {constructor(config?: properties);
readonly supplement_prep: unknown;
readonly supplement: unknown;
readonly supplement_async: unknown;
readonly supplement_finish: unknown;
readonly reserved: object[];
}
export class ImporterIface  {constructor(config?: properties);
readonly create_for_parsed: unknown;
readonly queue_for_parsed: unknown;
readonly import_sync: unknown;
readonly import_async: unknown;
readonly import_finish: unknown;
readonly reserved: object[];
}
export class Parsed  {constructor(config?: properties);
get_attributes(): Gck.Attributes | null;
get_bytes(): GLib.Bytes;
get_data(): [number[] | null, number];
get_description(): string | null;
get_filename(): string;
get_format(): DataFormat;
get_label(): string | null;
ref(): Parsed;
static unref(parsed: object | null): void;
}
export class ParserClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly authenticate: unknown;
readonly parsed: unknown;
}
export class ParserPrivate  {constructor(config?: properties);
}
export class Pkcs11CertificateClass  {constructor(config?: properties);
readonly parent_class: Gck.ObjectClass;
}
export class Pkcs11CertificatePrivate  {constructor(config?: properties);
}
export class PromptIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly prompt_password_async: unknown;
readonly prompt_password_finish: unknown;
readonly prompt_confirm_async: unknown;
readonly prompt_confirm_finish: unknown;
readonly prompt_close: unknown;
}
export class SecretExchangeClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly generate_exchange_key: unknown;
readonly derive_transport_key: unknown;
readonly encrypt_transport_data: unknown;
readonly decrypt_transport_data: unknown;
readonly dummy: object[];
}
export class SecretExchangePrivate  {constructor(config?: properties);
}
export class SimpleCertificateClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SimpleCertificatePrivate  {constructor(config?: properties);
}
export class SimpleCollectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SimpleCollectionPrivate  {constructor(config?: properties);
}
export class SshAskpassClass  {constructor(config?: properties);
}
export class SystemPromptClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SystemPromptPrivate  {constructor(config?: properties);
}
export class SystemPrompterClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly new_prompt: unknown;
readonly padding: object[];
}
export class SystemPrompterPrivate  {constructor(config?: properties);
}
export class UnionCollectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class UnionCollectionPrivate  {constructor(config?: properties);
}
export interface Certificate  {
readonly description: string;
readonly expiry: GLib.Date;
readonly icon: Gio.Icon;
readonly issuer: string;
readonly label: string;
readonly markup: string;
readonly subject: string;
get_basic_constraints(): [boolean, boolean | null,number | null];
get_der_data(): [number[], number];
get_expiry_date(): GLib.Date;
get_fingerprint(type: GLib.ChecksumType): [number[], number];
get_fingerprint_hex(type: GLib.ChecksumType): string;
get_icon(): Gio.Icon;
get_issued_date(): GLib.Date;
get_issuer_cn(): string;
get_issuer_dn(): string;
get_issuer_name(): string;
get_issuer_part(part: string): string | null;
get_issuer_raw(): [number[], number];
get_key_size(): number;
get_markup_text(): string;
get_serial_number(): [number[], number];
get_serial_number_hex(): string;
get_subject_cn(): string;
get_subject_dn(): string;
get_subject_name(): string;
get_subject_part(part: string): string | null;
get_subject_raw(): [number[], number];
is_issuer(issuer: Certificate): boolean;
mixin_emit_notify(): void;
}
export interface Collection  {
contains(object: GObject.Object): boolean;
emit_added(object: GObject.Object): void;
emit_removed(object: GObject.Object): void;
get_length(): number;
get_objects(): GLib.List;
}
export interface Comparable  {
compare(other: Comparable | null): number;
}
export interface ImportInteraction  {
supplement(builder: Gck.Builder, cancellable: Gio.Cancellable | null): Gio.TlsInteractionResult;
supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
supplement_prep(builder: Gck.Builder): void;
}
export interface Importer  {
readonly icon: Gio.Icon;
interaction: Gio.TlsInteraction;
readonly label: string;
readonly uri: string;
get_interaction(): Gio.TlsInteraction | null;
_import(cancellable: Gio.Cancellable | null): boolean;
import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
import_finish(result: Gio.AsyncResult): boolean;
queue_for_parsed(parsed: Parsed): boolean;
set_interaction(interaction: Gio.TlsInteraction): void;
}
export interface Prompt  {
caller_window: string;
cancel_label: string;
choice_chosen: boolean;
choice_label: string;
continue_label: string;
description: string;
message: string;
password_new: boolean;
readonly password_strength: number;
title: string;
warning: string;
close(): void;
confirm(cancellable: Gio.Cancellable | null): PromptReply;
confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
confirm_finish(result: Gio.AsyncResult): PromptReply;
confirm_run(cancellable: Gio.Cancellable | null): PromptReply;
get_caller_window(): string;
get_cancel_label(): string;
get_choice_chosen(): boolean;
get_choice_label(): string;
get_continue_label(): string;
get_description(): string;
get_message(): string;
get_password_new(): boolean;
get_password_strength(): number;
get_title(): string;
get_warning(): string;
password(cancellable: Gio.Cancellable | null): string;
password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
password_finish(result: Gio.AsyncResult): string;
password_run(cancellable: Gio.Cancellable | null): string;
reset(): void;
set_caller_window(window_id: string): void;
set_cancel_label(cancel_label: string): void;
set_choice_chosen(chosen: boolean): void;
set_choice_label(choice_label: string | null): void;
set_continue_label(continue_label: string): void;
set_description(description: string): void;
set_message(message: string): void;
set_password_new(new_password: boolean): void;
set_title(title: string): void;
set_warning(warning: string | null): void;
}