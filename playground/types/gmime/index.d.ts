
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GMime from "gmime";
/**
 * gmime.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type HeaderForeachFunc = (name: string, value: string, user_data: object | null) => void;
export type HeaderWriter = (stream: Stream, name: string, value: string) => number;
export type ObjectForeachFunc = (parent: Object, part: Object, user_data: object | null) => void;
export type ParserHeaderRegexFunc = (parser: Parser, header: string, value: string, offset: number, user_data: object | null) => void;
export type PasswordRequestFunc = (ctx: CryptoContext, user_id: string, prompt_ctx: string, reprompt: boolean, response: Stream) => boolean;
export const BINARY_AGE: number;
export const DISPOSITION_ATTACHMENT: string;
export const DISPOSITION_INLINE: string;
export const ENABLE_RFC2047_WORKAROUNDS: number;
export const ENABLE_USE_ONLY_USER_CHARSETS: number;
export const FILTER_ENRICHED_IS_RICHTEXT: number;
export const FILTER_HTML_CITE: number;
export const FILTER_HTML_CONVERT_ADDRESSES: number;
export const FILTER_HTML_CONVERT_NL: number;
export const FILTER_HTML_CONVERT_SPACES: number;
export const FILTER_HTML_CONVERT_URLS: number;
export const FILTER_HTML_ESCAPE_8BIT: number;
export const FILTER_HTML_MARK_CITATION: number;
export const FILTER_HTML_PRE: number;
export const INTERFACE_AGE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const UUDECODE_STATE_BEGIN: number;
export const UUDECODE_STATE_END: number;
export const UUDECODE_STATE_INIT: number;
export const UUDECODE_STATE_MASK: number;
export const YDECODE_STATE_BEGIN: number;
export const YDECODE_STATE_DECODE: number;
export const YDECODE_STATE_END: number;
export const YDECODE_STATE_EOLN: number;
export const YDECODE_STATE_ESCAPE: number;
export const YDECODE_STATE_INIT: number;
export const YDECODE_STATE_PART: number;
export const YENCODE_CRC_INIT: number;
export const YENCODE_STATE_INIT: number;
/**
 * Computes the best charset to use to encode this text buffer.
 */
export function charset_best(inbuf: string, inlen: number): string;
/**
 * Attempts to find a canonical charset name for @charset.
 * Note: Will normally return the same value as
 * g_mime_charset_iconv_name() unless the system iconv does not use
 * the canonical ISO charset names (such as using ISO8859-1 rather
 * than the canonical form ISO-8859-1).
 */
export function charset_canon_name(charset: string): string;
/**
 * Attempts to find an iconv-friendly charset name for @charset.
 */
export function charset_iconv_name(charset: string): string;
/**
 * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
 * charset.
 */
export function charset_iso_to_windows(isocharset: string): string;
/**
 * Attempts to find a specific language code that is specific to
 * @charset. Currently only handles CJK and Russian/Ukranian
 * charset->lang mapping. Everything else will return %NULL.
 */
export function charset_language(charset: string): string;
/**
 * Gets the user's locale charset (or iso-8859-1 by default).
 * Note: This function is deprecated. Use g_mime_locale_charset()
 * instead.
 */
export function charset_locale_name(): string;
/**
 * Initializes character set maps.
 * Note: g_mime_init() calls this routine for you.
 */
export function charset_map_init(): void;
/**
 * Frees internal lookup tables created in g_mime_charset_map_init().
 */
export function charset_map_shutdown(): void;
/**
 * Attempts to find an iconv-friendly charset name for @charset.
 * Note: This function is deprecated. Use g_mime_charset_iconv_name()
 * instead.
 */
export function charset_name(charset: string): string;
/**
 * Checks that the GMime library version meets the requirements of the
 * required version.
 */
export function check_version(major: number, minor: number, micro: number): boolean;
/**
 * Gets the appropriate #GMimeContentEncoding enumeration value based
 * on the input string.
 */
export function content_encoding_from_string(str: string): ContentEncoding;
/**
 * Gets the string value of the content encoding.
 */
export function content_encoding_to_string(encoding: ContentEncoding): string;
/**
 * Decodes a chunk of base64 encoded data.
 */
export function encoding_base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Base64 encodes the input stream to the output stream. Call this
 * when finished encoding data with g_mime_encoding_base64_encode_step()
 * to flush off the last little bit.
 */
export function encoding_base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Base64 encodes a chunk of data. Performs an 'encode step', only
 * encodes blocks of 3 characters to the output at a time, saves
 * left-over state in state and save (initialise to 0 on first
 * invocation).
 */
export function encoding_base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Decodes a block of quoted-printable encoded data. Performs a
 * 'decode step' on a chunk of QP encoded data.
 */
export function encoding_quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Quoted-printable encodes a block of text. Call this when finished
 * encoding data with g_mime_encoding_quoted_encode_step() to flush off
 * the last little bit.
 */
export function encoding_quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Quoted-printable encodes a block of text. Performs an 'encode
 * step', saves left-over state in state and save (initialise to -1 on
 * first invocation).
 */
export function encoding_quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
 * uuencoded data. Assumes the "begin mode filename" line has
 * been stripped off.
 */
export function encoding_uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
/**
 * Uuencodes a chunk of data. Call this when finished encoding data
 * with g_mime_encoding_uuencode_step() to flush off the last little bit.
 */
export function encoding_uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number;
/**
 * Uuencodes a chunk of data. Performs an 'encode step', only encodes
 * blocks of 45 characters to the output at a time, saves left-over
 * state in @uubuf, @state and @save (initialize to 0 on first
 * invocation).
 */
export function encoding_uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number;
/**
 * Initialize GMime's iconv cache. This *MUST* be called before any
 * gmime-iconv interfaces will work correctly.
 * Note: this function is called for you by g_mime_init().
 */
export function iconv_init(): void;
/**
 * Allocates a new string buffer containing @str in UTF-8.
 */
export function iconv_locale_to_utf8(str: string): string;
/**
 * Allocates a new string buffer containing the first @n bytes of
 * @str converted to UTF-8.
 */
export function iconv_locale_to_utf8_length(str: string, n: number): string;
/**
 * Frees internal iconv caches created in g_mime_iconv_init().
 * Note: this function is called for you by g_mime_shutdown().
 */
export function iconv_shutdown(): void;
/**
 * Allocates a new string buffer containing @str converted to the
 * user's locale charset.
 */
export function iconv_utf8_to_locale(str: string): string;
/**
 * Allocates a new string buffer containing the first @n bytes of
 * @str converted to the user's locale charset.
 */
export function iconv_utf8_to_locale_length(str: string, n: number): string;
/**
 * Initializes GMime.
 * Note: Calls g_mime_charset_map_init() and g_mime_iconv_init() as
 * well.
 */
export function init(flags: number): void;
/**
 * Gets the user's locale charset (or iso-8859-1 by default).
 */
export function locale_charset(): string;
/**
 * Gets the user's locale language code (or %NULL by default).
 */
export function locale_language(): string;
/**
 * Appends a reference to msgid to the list of references.
 */
export function references_append(refs: References, msgid: string): void;
/**
 * Clears the #GMimeReferences list and resets it to %NULL.
 */
export function references_clear(refs: References): void;
/**
 * Set a list of charsets for GMime to use as a hint for encoding and
 * decoding headers. The charset list should be in order of preference
 * (e.g. most preferred first, least preferred last).
 */
export function set_user_charsets(charsets: string): void;
/**
 * Frees internally allocated tables created in g_mime_init(). Also
 * calls g_mime_charset_map_shutdown() and g_mime_iconv_shutdown().
 */
export function shutdown(): void;
/**
 * Get the list of user-preferred charsets set with
 * g_mime_set_user_charsets().
 */
export function user_charsets(): string[];
/**
 * Determines the best content encoding for the first @len bytes of
 * @text.
 */
export function utils_best_encoding(text: number, len: number): ContentEncoding;
/**
 * Attempts to convert text in an unknown 8bit/multibyte charset into
 * UTF-8 by finding the charset which will convert the most bytes into
 * valid UTF-8 characters as possible. If no exact match can be found,
 * it will choose the best match and convert invalid byte sequences
 * into question-marks (?) in the returned string buffer.
 */
export function utils_decode_8bit(text: number[], len: number): string;
/**
 * Decodes a msg-id as defined by rfc822.
 */
export function utils_decode_message_id(message_id: string): string;
/**
 * Generates a unique Message-Id.
 */
export function utils_generate_message_id(fqdn: string): string;
/**
 * Decodes the rfc822 date string and saves the GMT offset into
 * @tz_offset if non-NULL.
 */
export function utils_header_decode_date(str: string): [number, number];
/**
 * Decodes an rfc2047 encoded 'phrase' header.
 * Note: See g_mime_set_user_charsets() for details on how charset
 * conversion is handled for unencoded 8bit text and/or wrongly
 * specified rfc2047 encoded-word tokens.
 */
export function utils_header_decode_phrase(phrase: string): string;
/**
 * Decodes an rfc2047 encoded 'text' header.
 * Note: See g_mime_set_user_charsets() for details on how charset
 * conversion is handled for unencoded 8bit text and/or wrongly
 * specified rfc2047 encoded-word tokens.
 */
export function utils_header_decode_text(text: string): string;
/**
 * Encodes a 'phrase' header according to the rules in rfc2047.
 */
export function utils_header_encode_phrase(phrase: string): string;
/**
 * Encodes a 'text' header according to the rules in rfc2047.
 */
export function utils_header_encode_text(text: string): string;
/**
 * Folds a structured header according to the rules in rfc822.
 */
export function utils_header_fold(header: string): string;
/**
 * Allocates a string buffer containing the rfc822 formatted date
 * string represented by @time and @tz_offset.
 */
export function utils_header_format_date(date: number, tz_offset: number): string;
/**
 * Quotes @string as needed according to the rules in rfc2045.
 */
export function utils_quote_string(str: string): string;
/**
 * Folds a structured header according to the rules in rfc822.
 */
export function utils_structured_header_fold(header: string): string;
/**
 * Determines if @text contains 8bit characters within the first @len
 * bytes.
 */
export function utils_text_is_8bit(text: number, len: number): boolean;
/**
 * Unquotes and unescapes a string.
 */
export function utils_unquote_string(str: string): void;
/**
 * Folds an unstructured header according to the rules in rfc822.
 */
export function utils_unstructured_header_fold(header: string): string;
/**
 * Performs a 'decode step' on a chunk of yEncoded data of length
 * @inlen pointed to by @inbuf and writes to @outbuf. Assumes the =ybegin
 * and =ypart lines have already been stripped off.
 * To get the crc32 value of the part, use #GMIME_YENCODE_CRC_FINAL
 * (@pcrc). If there are more parts, you should reuse @crc without
 * re-initializing. Once all parts have been decoded, you may get the
 * combined crc32 value of all the parts using #GMIME_YENCODE_CRC_FINAL
 * (@crc).
 */
export function ydecode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number;
/**
 * Call this function when finished encoding data with
 * g_mime_yencode_step() to flush off the remaining state.
 * #GMIME_YENCODE_CRC_FINAL (@pcrc) will give you the crc32 of the
 * encoded "part". If there are more "parts" to encode, you should
 * re-use @crc when encoding the next "parts" and then use
 * #GMIME_YENCODE_CRC_FINAL (@crc) to get the combined crc32 value of
 * all the parts.
 */
export function yencode_close(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number;
/**
 * Performs an yEncode 'encode step' on a chunk of raw data of length
 * @inlen pointed to by @inbuf and writes to @outbuf.
 * @state should be initialized to #GMIME_YENCODE_STATE_INIT before
 * beginning making the first call to this function. Subsequent calls
 * should reuse @state.
 * Along the same lines, @pcrc and @crc should be initialized to
 * #GMIME_YENCODE_CRC_INIT before using.
 */
export function yencode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number;
export enum CertificateTrust {
    NONE = 0,
    NEVER = 1,
    UNDEFINED = 2,
    MARGINAL = 3,
    FULLY = 4,
    ULTIMATE = 5,
}
export enum CipherAlgo {
    DEFAULT = 0,
    IDEA = 1,
    "3DES" = 2,
    CAST5 = 3,
    BLOWFISH = 4,
    AES = 7,
    AES192 = 8,
    AES256 = 9,
    TWOFISH = 10,
    CAMELLIA128 = 11,
    CAMELLIA192 = 12,
    CAMELLIA256 = 13,
}
export enum ContentEncoding {
    DEFAULT = 0,
    "7BIT" = 1,
    "8BIT" = 2,
    BINARY = 3,
    BASE64 = 4,
    QUOTEDPRINTABLE = 5,
    UUENCODE = 6,
}
export enum DigestAlgo {
    DEFAULT = 0,
    MD5 = 1,
    SHA1 = 2,
    RIPEMD160 = 3,
    MD2 = 5,
    TIGER192 = 6,
    HAVAL5160 = 7,
    SHA256 = 8,
    SHA384 = 9,
    SHA512 = 10,
    SHA224 = 11,
    MD4 = 301,
}
export enum EncodingConstraint {
    "7BIT" = 0,
    "8BIT" = 1,
    BINARY = 2,
}
export enum FilterFromMode {
    DEFAULT = 0,
    ESCAPE = 0,
    ARMOR = 1,
}
export enum FilterGZipMode {
    ZIP = 0,
    UNZIP = 1,
}
export enum PubKeyAlgo {
    DEFAULT = 0,
    RSA = 1,
    RSA_E = 2,
    RSA_S = 3,
    ELG_E = 16,
    DSA = 17,
    ELG = 20,
}
export enum RecipientType {
    TO = 0,
    CC = 1,
    BCC = 2,
}
export enum SeekWhence {
    SET = 0,
    CUR = 1,
    END = 2,
}
export enum SignatureStatus {
    GOOD = 0,
    ERROR = 1,
    BAD = 2,
}
export enum StreamBufferMode {
    CACHE_READ = 0,
    BLOCK_READ = 1,
    BLOCK_WRITE = 2,
}
export enum FilterBestFlags {
    CHARSET = 1,
    ENCODING = 2,
}
export enum SignatureError {
    NONE = 0,
    EXPSIG = 1,
    NO_PUBKEY = 2,
    EXPKEYSIG = 4,
    REVKEYSIG = 8,
    UNSUPP_ALGO = 16,
}
export class Certificate extends GObject.Object {
    constructor(config?: properties);
    get_created(): number;
    get_digest_algo(): DigestAlgo;
    get_email(): string;
    get_expires(): number;
    get_fingerprint(): string;
    get_issuer_name(): string;
    get_issuer_serial(): string;
    get_key_id(): string;
    get_name(): string;
    get_pubkey_algo(): PubKeyAlgo;
    get_trust(): CertificateTrust;
    set_created(created: number): void;
    set_digest_algo(algo: DigestAlgo): void;
    set_email(email: string): void;
    set_expires(expires: number): void;
    set_fingerprint(fingerprint: string): void;
    set_issuer_name(issuer_name: string): void;
    set_issuer_serial(issuer_serial: string): void;
    set_key_id(key_id: string): void;
    set_name(name: string): void;
    set_pubkey_algo(algo: PubKeyAlgo): void;
    set_trust(trust: CertificateTrust): void;
}
export class CertificateList extends GObject.Object {
    constructor(config?: properties);
    add(cert: Certificate): number;
    clear(): void;
    contains(cert: Certificate): boolean;
    get_certificate(index: number): Certificate;
    index_of(cert: Certificate): number;
    insert(index: number, cert: Certificate): void;
    length(): number;
    remove(cert: Certificate): boolean;
    remove_at(index: number): boolean;
    set_certificate(index: number, cert: Certificate): void;
}
export class ContentDisposition extends GObject.Object {
    constructor(config?: properties);
    static new_from_string(str: string): ContentDisposition;
    get_disposition(): string;
    get_parameter(name: string): string;
    get_params(): Param;
    is_attachment(): boolean;
    set_disposition(value: string): void;
    set_parameter(name: string, value: string): void;
    set_params(params: Param): void;
    to_string(fold: boolean): string;
}
export class ContentType extends GObject.Object {
    constructor(config?: properties);
    static new_from_string(str: string): ContentType;
    get_media_subtype(): string;
    get_media_type(): string;
    get_parameter(name: string): string;
    get_params(): Param;
    is_type(type: string, subtype: string): boolean;
    set_media_subtype(subtype: string): void;
    set_media_type(type: string): void;
    set_parameter(name: string, value: string): void;
    set_params(params: Param): void;
    to_string(): string;
}
export class CryptoContext  {
    constructor(config?: properties);
    readonly parent_object: GObject.Object;
    readonly request_passwd: PasswordRequestFunc;
    decrypt(istream: Stream, ostream: Stream): DecryptResult;
    decrypt_session(session_key: string, istream: Stream, ostream: Stream): DecryptResult;
    digest_id(name: string): DigestAlgo;
    digest_name(digest: DigestAlgo): string;
    encrypt(sign: boolean, userid: string, digest: DigestAlgo, recipients: string[], istream: Stream, ostream: Stream): number;
    export_keys(keys: string[], ostream: Stream): number;
    get_encryption_protocol(): string;
    get_key_exchange_protocol(): string;
    get_retrieve_session_key(): boolean;
    get_signature_protocol(): string;
    import_keys(istream: Stream): number;
    set_retrieve_session_key(retrieve_session_key: boolean): number;
    sign(userid: string, digest: DigestAlgo, istream: Stream, ostream: Stream): number;
    verify(digest: DigestAlgo, istream: Stream, sigstream: Stream): SignatureList;
}
export class DataWrapper extends GObject.Object {
    constructor(config?: properties);
    static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper;
    get_encoding(): ContentEncoding;
    get_stream(): Stream;
    set_encoding(encoding: ContentEncoding): void;
    set_stream(stream: Stream): void;
    write_to_stream(stream: Stream): number;
    vfunc_write_to_stream(stream: Stream): number;
}
export class DecryptResult extends GObject.Object {
    constructor(config?: properties);
    get_cipher(): CipherAlgo;
    get_mdc(): DigestAlgo;
    get_recipients(): CertificateList;
    get_session_key(): string;
    get_signatures(): SignatureList;
    set_cipher(cipher: CipherAlgo): void;
    set_mdc(mdc: DigestAlgo): void;
    set_recipients(recipients: CertificateList): void;
    set_session_key(session_key: string): void;
    set_signatures(signatures: SignatureList): void;
}
export class Filter  {
    constructor(config?: properties);
    readonly parent_object: GObject.Object;
    readonly priv: object;
    readonly outreal: number[];
    readonly outbuf: string;
    readonly outptr: string;
    readonly outsize: number;
    readonly outpre: number;
    readonly backbuf: string;
    readonly backsize: number;
    readonly backlen: number;
    backup(data: number[], length: number): void;
    complete(inbuf: number[], inlen: number, prespace: number): [number[],number,number];
    copy(): Filter;
    filter(inbuf: number[], inlen: number, prespace: number): [number[],number,number];
    reset(): void;
    set_size(size: number, keep: boolean): void;
}
export class FilterBasic extends Filter {
    constructor(config?: properties);
}
export class FilterBest extends Filter {
    constructor(config?: properties);
    charset(): string;
    encoding(constraint: EncodingConstraint): ContentEncoding;
}
export class FilterCRLF extends Filter {
    constructor(config?: properties);
}
export class FilterCharset extends Filter {
    constructor(config?: properties);
}
export class FilterEnriched extends Filter {
    constructor(config?: properties);
}
export class FilterFrom extends Filter {
    constructor(config?: properties);
}
export class FilterGZip extends Filter {
    constructor(config?: properties);
}
export class FilterHTML extends Filter {
    constructor(config?: properties);
}
export class FilterMd5 extends Filter {
    constructor(config?: properties);
    get_digest(digest: number): void;
}
export class FilterStrip extends Filter {
    constructor(config?: properties);
}
export class FilterWindows extends Filter {
    constructor(config?: properties);
    is_windows_charset(): boolean;
    real_charset(): string;
}
export class FilterYenc extends Filter {
    constructor(config?: properties);
    get_crc(): number;
    get_pcrc(): number;
    set_crc(crc: number): void;
    set_state(state: number): void;
}
export class GpgContext extends CryptoContext {
    constructor(config?: properties);
    get_always_trust(): boolean;
    get_auto_key_retrieve(): boolean;
    get_use_agent(): boolean;
    set_always_trust(always_trust: boolean): void;
    set_auto_key_retrieve(auto_key_retrieve: boolean): void;
    set_use_agent(use_agent: boolean): void;
}
export class InternetAddress  {
    constructor(config?: properties);
    readonly parent_object: GObject.Object;
    readonly priv: object;
    readonly name: string;
    get_name(): string;
    set_name(name: string): void;
    to_string(encode: boolean): string;
}
export class InternetAddressGroup extends InternetAddress {
    constructor(config?: properties);
    add_member(member: InternetAddress): number;
    get_members(): InternetAddressList;
    set_members(members: InternetAddressList): void;
}
export class InternetAddressList extends GObject.Object {
    constructor(config?: properties);
    add(ia: InternetAddress): number;
    append(append: InternetAddressList): void;
    clear(): void;
    contains(ia: InternetAddress): boolean;
    get_address(index: number): InternetAddress;
    index_of(ia: InternetAddress): number;
    insert(index: number, ia: InternetAddress): void;
    length(): number;
    prepend(prepend: InternetAddressList): void;
    remove(ia: InternetAddress): boolean;
    remove_at(index: number): boolean;
    set_address(index: number, ia: InternetAddress): void;
    to_string(encode: boolean): string;
    writer(str: GLib.String): void;
    static parse_string(str: string): InternetAddressList;
}
export class InternetAddressMailbox extends InternetAddress {
    constructor(config?: properties);
    get_addr(): string;
    set_addr(addr: string): void;
}
export class Message extends Object {
    constructor(config?: properties);
    add_recipient(type: RecipientType, name: string, addr: string): void;
    foreach(callback: ObjectForeachFunc, user_data: object | null): void;
    get_all_recipients(): InternetAddressList;
    get_body(): Object;
    get_date(): [number,number];
    get_date_as_string(): string;
    get_message_id(): string;
    get_mime_part(): Object;
    get_recipients(type: RecipientType): InternetAddressList;
    get_reply_to(): string;
    get_sender(): string;
    get_subject(): string;
    partial_split_message(max_size: number, nparts: number): Message;
    set_date(date: number, tz_offset: number): void;
    set_date_as_string(str: string): void;
    set_message_id(message_id: string): void;
    set_mime_part(mime_part: Object): void;
    set_reply_to(reply_to: string): void;
    set_sender(sender: string): void;
    set_subject(subject: string): void;
}
export class MessagePart extends Object {
    constructor(config?: properties);
    static new_with_message(subtype: string, message: Message): MessagePart;
    get_message(): Message;
    set_message(message: Message): void;
}
export class MessagePartial extends Part {
    constructor(config?: properties);
    get_id(): string;
    get_number(): number;
    get_total(): number;
    static reconstruct_message(partials: MessagePartial, num: number): Message;
}
export class Multipart extends Object {
    constructor(config?: properties);
    static new_with_subtype(subtype: string): Multipart;
    add(part: Object): void;
    clear(): void;
    contains(part: Object): boolean;
    foreach(callback: ObjectForeachFunc, user_data: object | null): void;
    get_boundary(): string;
    get_count(): number;
    get_part(index: number): Object;
    get_postface(): string;
    get_preface(): string;
    get_subpart_from_content_id(content_id: string): Object;
    index_of(part: Object): number;
    insert(index: number, part: Object): void;
    remove(part: Object): boolean;
    remove_at(index: number): Object;
    replace(index: number, replacement: Object): Object;
    set_boundary(boundary: string): void;
    set_postface(postface: string): void;
    set_preface(preface: string): void;
    vfunc_add(part: Object): void;
    vfunc_clear(): void;
    vfunc_contains(part: Object): boolean;
    vfunc_get_boundary(): string;
    vfunc_get_count(): number;
    vfunc_get_part(index: number): Object;
    vfunc_index_of(part: Object): number;
    vfunc_insert(index: number, part: Object): void;
    vfunc_remove(part: Object): boolean;
    vfunc_remove_at(index: number): Object;
    vfunc_set_boundary(boundary: string): void;
}
export class MultipartEncrypted extends Multipart {
    constructor(config?: properties);
    decrypt(ctx: CryptoContext, result: DecryptResult): Object;
    decrypt_session(ctx: CryptoContext, session_key: string, result: DecryptResult): Object;
    encrypt(content: Object, ctx: CryptoContext, sign: boolean, userid: string, digest: DigestAlgo, recipients: string[]): number;
}
export class MultipartSigned extends Multipart {
    constructor(config?: properties);
    sign(content: Object, ctx: CryptoContext, userid: string, digest: DigestAlgo): number;
    verify(ctx: CryptoContext): SignatureList;
}
export class Object extends GObject.Object {
    constructor(config?: properties);
    static new_type(type: string, subtype: string): Object;
    append_header(header: string, value: string): void;
    encode(constraint: EncodingConstraint): void;
    get_content_disposition(): ContentDisposition;
    get_content_disposition_parameter(name: string): string;
    get_content_id(): string;
    get_content_type(): ContentType;
    get_content_type_parameter(name: string): string;
    get_disposition(): string;
    get_header(header: string): string;
    get_header_list(): HeaderList;
    get_headers(): string;
    prepend_header(header: string, value: string): void;
    remove_header(header: string): boolean;
    set_content_disposition(disposition: ContentDisposition): void;
    set_content_disposition_parameter(name: string, value: string): void;
    set_content_id(content_id: string): void;
    set_content_type(content_type: ContentType): void;
    set_content_type_parameter(name: string, value: string): void;
    set_disposition(disposition: string): void;
    set_header(header: string, value: string): void;
    to_string(): string;
    write_to_stream(stream: Stream): number;
    vfunc_append_header(header: string, value: string): void;
    vfunc_encode(constraint: EncodingConstraint): void;
    vfunc_get_header(header: string): string;
    vfunc_get_headers(): string;
    vfunc_prepend_header(header: string, value: string): void;
    vfunc_remove_header(header: string): boolean;
    vfunc_set_content_type(content_type: ContentType): void;
    vfunc_set_header(header: string, value: string): void;
    vfunc_write_to_stream(stream: Stream): number;
    static register_type(type: string, subtype: string, object_type: GType): void;
    static type_registry_init(): void;
    static type_registry_shutdown(): void;
}
export class Parser extends GObject.Object {
    constructor(config?: properties);
    static new_with_stream(stream: Stream): Parser;
    construct_message(): Message;
    construct_part(): Object;
    eos(): boolean;
    get_from(): string;
    get_from_offset(): number;
    get_headers_begin(): number;
    get_headers_end(): number;
    get_persist_stream(): boolean;
    get_respect_content_length(): boolean;
    get_scan_from(): boolean;
    init_with_stream(stream: Stream): void;
    set_persist_stream(persist: boolean): void;
    set_respect_content_length(respect_content_length: boolean): void;
    set_scan_from(scan_from: boolean): void;
    tell(): number;
}
export class Part extends Object {
    constructor(config?: properties);
    static new_with_type(type: string, subtype: string): Part;
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding;
    get_content_description(): string;
    get_content_encoding(): ContentEncoding;
    get_content_id(): string;
    get_content_location(): string;
    get_content_md5(): string;
    get_content_object(): DataWrapper;
    get_filename(): string;
    is_attachment(): boolean;
    set_content_description(description: string): void;
    set_content_encoding(encoding: ContentEncoding): void;
    set_content_id(content_id: string): void;
    set_content_location(content_location: string): void;
    set_content_md5(content_md5: string): void;
    set_content_object(content: DataWrapper): void;
    set_filename(filename: string): void;
    verify_content_md5(): boolean;
    vfunc_set_content_object(content: DataWrapper): void;
}
export class Pkcs7Context extends CryptoContext {
    constructor(config?: properties);
    get_always_trust(): boolean;
    set_always_trust(always_trust: boolean): void;
}
export class Signature extends GObject.Object {
    constructor(config?: properties);
    get_certificate(): Certificate;
    get_created(): number;
    get_errors(): SignatureError;
    get_expires(): number;
    get_status(): SignatureStatus;
    set_certificate(cert: Certificate): void;
    set_created(created: number): void;
    set_errors(errors: SignatureError): void;
    set_expires(expires: number): void;
    set_status(status: SignatureStatus): void;
}
export class SignatureList extends GObject.Object {
    constructor(config?: properties);
    add(sig: Signature): number;
    clear(): void;
    contains(sig: Signature): boolean;
    get_signature(index: number): Signature;
    index_of(sig: Signature): number;
    insert(index: number, sig: Signature): void;
    length(): number;
    remove(sig: Signature): boolean;
    remove_at(index: number): boolean;
    set_signature(index: number, sig: Signature): void;
}
export class Stream  {
    constructor(config?: properties);
    readonly parent_object: GObject.Object;
    readonly super_stream: Stream;
    readonly position: number;
    readonly bound_start: number;
    readonly bound_end: number;
    buffer_gets(buf: string, max: number): number;
    buffer_readln(buffer: number[]): void;
    close(): number;
    construct(start: number, end: number): void;
    eos(): boolean;
    flush(): number;
    length(): number;
    read(buf: number[], len: number): number;
    reset(): number;
    seek(offset: number, whence: SeekWhence): number;
    set_bounds(start: number, end: number): void;
    substream(start: number, end: number): Stream;
    tell(): number;
    write(buf: string, len: number): number;
    write_string(str: string): number;
    write_to_stream(dest: Stream): number;
    writev(vector: StreamIOVector, count: number): number;
}
export class StreamBuffer extends Stream {
    constructor(config?: properties);
}
export class StreamCat extends Stream {
    constructor(config?: properties);
    add_source(source: Stream): number;
}
export class StreamFile extends Stream {
    constructor(config?: properties);
    static new_for_path(path: string, mode: string): Stream;
    static new_with_bounds(fp: object | null, start: number, end: number): Stream;
    get_owner(): boolean;
    set_owner(owner: boolean): void;
}
export class StreamFilter extends Stream {
    constructor(config?: properties);
    add(filter: Filter): number;
    remove(id: number): void;
}
export class StreamFs extends Stream {
    constructor(config?: properties);
    static new_for_path(path: string, flags: number, mode: number): Stream;
    static new_with_bounds(fd: number, start: number, end: number): Stream;
    get_owner(): boolean;
    set_owner(owner: boolean): void;
}
export class StreamGIO extends Stream {
    constructor(config?: properties);
    static new_with_bounds(file: Gio.File, start: number, end: number): Stream;
    get_owner(): boolean;
    set_owner(owner: boolean): void;
}
export class StreamMem extends Stream {
    constructor(config?: properties);
    static new_with_buffer(buffer: number[], len: number): Stream;
    static new_with_byte_array(array: number[]): Stream;
    get_byte_array(): number[];
    get_owner(): boolean;
    set_byte_array(array: number[]): void;
    set_owner(owner: boolean): void;
}
export class StreamMmap extends Stream {
    constructor(config?: properties);
    static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): Stream;
}
export class StreamNull extends Stream {
    constructor(config?: properties);
}
export class StreamPipe extends Stream {
    constructor(config?: properties);
    get_owner(): boolean;
    set_owner(owner: boolean): void;
}
export class Charset  {
    constructor(config?: properties);
    mask: number;
    level: number;
    best_name(): string;
    can_encode(charset: string, text: string, len: number): boolean;
    init(): void;
    step(inbuf: string, inlen: number): void;
    static best(inbuf: string, inlen: number): string;
    static canon_name(charset: string): string;
    static iconv_name(charset: string): string;
    static iso_to_windows(isocharset: string): string;
    static language(charset: string): string;
    static locale_name(): string;
    static map_init(): void;
    static map_shutdown(): void;
    static name(charset: string): string;
}
export class Encoding  {
    constructor(config?: properties);
    encoding: ContentEncoding;
    uubuf: number[];
    encode: boolean;
    save: number;
    state: number;
    flush(inbuf: string, inlen: number, outbuf: string): number;
    init_decode(encoding: ContentEncoding): void;
    init_encode(encoding: ContentEncoding): void;
    outlen(inlen: number): number;
    reset(): void;
    step(inbuf: string, inlen: number, outbuf: string): number;
    static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    static uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number;
    static uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number;
}
export class Header  {
    constructor(config?: properties);
}
export class HeaderIter  {
    constructor(config?: properties);
    hdrlist: HeaderList;
    cursor: Header;
    version: number;
    copy_to(dest: HeaderIter): void;
    equal(iter2: HeaderIter): boolean;
    first(): boolean;
    free(): void;
    get_name(): string;
    get_value(): string;
    is_valid(): boolean;
    last(): boolean;
    next(): boolean;
    prev(): boolean;
    remove(): boolean;
    set_value(value: string): boolean;
}
export class HeaderList  {
    constructor(config?: properties);
    append(name: string, value: string): void;
    clear(): void;
    contains(name: string): boolean;
    destroy(): void;
    foreach(func: HeaderForeachFunc, user_data: object | null): void;
    get(name: string): string;
    get_iter(): [boolean, HeaderIter];
    get_stream(): Stream;
    prepend(name: string, value: string): void;
    remove(name: string): boolean;
    set(name: string, value: string): void;
    set_stream(stream: Stream): void;
    to_string(): string;
    write_to_stream(stream: Stream): number;
}
export class Param  {
    constructor(config?: properties);
    name: string;
    value: string;
    destroy(): void;
    get_name(): string;
    get_value(): string;
    next(): Param;
    write_to_string(fold: boolean, str: GLib.String): void;
}
export class PartIter  {
    constructor(config?: properties);
    free(): void;
    get_current(): Object;
    get_parent(): Object;
    get_path(): string;
    get_toplevel(): Object;
    is_valid(): boolean;
    jump_to(path: string): boolean;
    next(): boolean;
    prev(): boolean;
    remove(): boolean;
    replace(replacement: Object): boolean;
    reset(): void;
}
export class References  {
    constructor(config?: properties);
    next: References;
    msgid: string;
    free(): void;
    get_message_id(): string;
    get_next(): References;
    static append(refs: References, msgid: string): void;
    static clear(refs: References): void;
}
export class StreamIOVector  {
    constructor(config?: properties);
    data: object;
    len: number;
}