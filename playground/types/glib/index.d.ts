
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * glib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ChildWatchFunc = (pid: Pid, status: number, user_data: object | null) => void;
export type ClearHandleFunc = (handle_id: number) => void;
export type CompareDataFunc = (a: object | null, b: object | null, user_data: object | null) => number;
export type CompareFunc = (a: object | null, b: object | null) => number;
export type CopyFunc = (src: object, data: object | null) => object;
export type DataForeachFunc = (key_id: Quark, data: object | null, user_data: object | null) => void;
export type DestroyNotify = (data: object | null) => void;
export type DuplicateFunc = (data: object | null, user_data: object | null) => object | null;
export type EqualFunc = (a: object | null, b: object | null) => boolean;
export type FreeFunc = (data: object | null) => void;
export type Func = (data: object | null, user_data: object | null) => void;
export type HFunc = (key: object | null, value: object | null, user_data: object | null) => void;
export type HRFunc = (key: object | null, value: object | null, user_data: object | null) => boolean;
export type HashFunc = (key: object | null) => number;
export type HookCheckFunc = (data: object | null) => boolean;
export type HookCheckMarshaller = (hook: Hook, marshal_data: object | null) => boolean;
export type HookCompareFunc = (new_hook: Hook, sibling: Hook) => number;
export type HookFinalizeFunc = (hook_list: HookList, hook: Hook) => void;
export type HookFindFunc = (hook: Hook, data: object | null) => boolean;
export type HookFunc = (data: object | null) => void;
export type HookMarshaller = (hook: Hook, marshal_data: object | null) => void;
export type IOFunc = (source: IOChannel, condition: IOCondition, data: object | null) => boolean;
export type LogFunc = (log_domain: string, log_level: LogLevelFlags, message: string, user_data: object | null) => void;
export type LogWriterFunc = (log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null) => LogWriterOutput;
export type NodeForeachFunc = (node: Node, data: object | null) => void;
export type NodeTraverseFunc = (node: Node, data: object | null) => boolean;
export type OptionArgFunc = (option_name: string, value: string, data: object | null) => boolean;
export type OptionErrorFunc = (context: OptionContext, group: OptionGroup, data: object | null) => void;
export type OptionParseFunc = (context: OptionContext, group: OptionGroup, data: object | null) => boolean;
export type PollFunc = (ufds: PollFD, nfsd: number, timeout_: number) => number;
export type PrintFunc = (string: string) => void;
export type RegexEvalCallback = (match_info: MatchInfo, result: String, user_data: object | null) => boolean;
export type ScannerMsgFunc = (scanner: Scanner, message: string, error: boolean) => void;
export type SequenceIterCompareFunc = (a: SequenceIter, b: SequenceIter, data: object | null) => number;
export type SourceDummyMarshal = () => void;
export type SourceFunc = (user_data: object | null) => boolean;
export type SpawnChildSetupFunc = (user_data: object | null) => void;
export type TestDataFunc = (user_data: object | null) => void;
export type TestFixtureFunc = (fixture: object, user_data: object | null) => void;
export type TestFunc = () => void;
export type TestLogFatalFunc = (log_domain: string, log_level: LogLevelFlags, message: string, user_data: object | null) => boolean;
export type ThreadFunc = (data: object | null) => object | null;
export type TranslateFunc = (str: string, data: object | null) => string;
export type TraverseFunc = (key: object | null, value: object | null, data: object | null) => boolean;
export type UnixFDSourceFunc = (fd: number, condition: IOCondition, user_data: object | null) => boolean;
export type VoidFunc = () => void;
export const ANALYZER_ANALYZING: number;
export const ASCII_DTOSTR_BUF_SIZE: number;
export const BIG_ENDIAN: number;
export const CSET_A_2_Z: string;
export const CSET_DIGITS: string;
export const CSET_a_2_z: string;
export const DATALIST_FLAGS_MASK: number;
export const DATE_BAD_DAY: number;
export const DATE_BAD_JULIAN: number;
export const DATE_BAD_YEAR: number;
export const DIR_SEPARATOR: number;
export const DIR_SEPARATOR_S: string;
export const E: number;
export const GINT16_FORMAT: string;
export const GINT16_MODIFIER: string;
export const GINT32_FORMAT: string;
export const GINT32_MODIFIER: string;
export const GINT64_FORMAT: string;
export const GINT64_MODIFIER: string;
export const GINTPTR_FORMAT: string;
export const GINTPTR_MODIFIER: string;
export const GNUC_FUNCTION: string;
export const GNUC_PRETTY_FUNCTION: string;
export const GSIZE_FORMAT: string;
export const GSIZE_MODIFIER: string;
export const GSSIZE_FORMAT: string;
export const GSSIZE_MODIFIER: string;
export const GUINT16_FORMAT: string;
export const GUINT32_FORMAT: string;
export const GUINT64_FORMAT: string;
export const GUINTPTR_FORMAT: string;
export const HAVE_GINT64: number;
export const HAVE_GNUC_VARARGS: number;
export const HAVE_GNUC_VISIBILITY: number;
export const HAVE_GROWING_STACK: number;
export const HAVE_ISO_VARARGS: number;
export const HOOK_FLAG_USER_SHIFT: number;
export const IEEE754_DOUBLE_BIAS: number;
export const IEEE754_FLOAT_BIAS: number;
export const KEY_FILE_DESKTOP_GROUP: string;
export const KEY_FILE_DESKTOP_KEY_ACTIONS: string;
export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string;
export const KEY_FILE_DESKTOP_KEY_COMMENT: string;
export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string;
export const KEY_FILE_DESKTOP_KEY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string;
export const KEY_FILE_DESKTOP_KEY_HIDDEN: string;
export const KEY_FILE_DESKTOP_KEY_ICON: string;
export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_NAME: string;
export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string;
export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_PATH: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string;
export const KEY_FILE_DESKTOP_KEY_TERMINAL: string;
export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_URL: string;
export const KEY_FILE_DESKTOP_KEY_VERSION: string;
export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string;
export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string;
export const KEY_FILE_DESKTOP_TYPE_LINK: string;
export const LITTLE_ENDIAN: number;
export const LN10: number;
export const LN2: number;
export const LOG_2_BASE_10: number;
export const LOG_DOMAIN: number;
export const LOG_FATAL_MASK: number;
export const LOG_LEVEL_USER_SHIFT: number;
export const MAJOR_VERSION: number;
export const MAXINT16: number;
export const MAXINT32: number;
export const MAXINT64: number;
export const MAXINT8: number;
export const MAXUINT16: number;
export const MAXUINT32: number;
export const MAXUINT64: number;
export const MAXUINT8: number;
export const MICRO_VERSION: number;
export const MININT16: number;
export const MININT32: number;
export const MININT64: number;
export const MININT8: number;
export const MINOR_VERSION: number;
export const MODULE_SUFFIX: string;
export const OPTION_REMAINING: string;
export const PDP_ENDIAN: number;
export const PI: number;
export const PID_FORMAT: string;
export const PI_2: number;
export const PI_4: number;
export const POLLFD_FORMAT: string;
export const PRIORITY_DEFAULT: number;
export const PRIORITY_DEFAULT_IDLE: number;
export const PRIORITY_HIGH: number;
export const PRIORITY_HIGH_IDLE: number;
export const PRIORITY_LOW: number;
export const SEARCHPATH_SEPARATOR: number;
export const SEARCHPATH_SEPARATOR_S: string;
export const SIZEOF_LONG: number;
export const SIZEOF_SIZE_T: number;
export const SIZEOF_SSIZE_T: number;
export const SIZEOF_VOID_P: number;
export const SOURCE_CONTINUE: boolean;
export const SOURCE_REMOVE: boolean;
export const SQRT2: number;
export const STR_DELIMITERS: string;
export const SYSDEF_AF_INET: number;
export const SYSDEF_AF_INET6: number;
export const SYSDEF_AF_UNIX: number;
export const SYSDEF_MSG_DONTROUTE: number;
export const SYSDEF_MSG_OOB: number;
export const SYSDEF_MSG_PEEK: number;
export const TEST_OPTION_ISOLATE_DIRS: string;
export const TIME_SPAN_DAY: number;
export const TIME_SPAN_HOUR: number;
export const TIME_SPAN_MILLISECOND: number;
export const TIME_SPAN_MINUTE: number;
export const TIME_SPAN_SECOND: number;
export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number;
export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string;
export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string;
export const USEC_PER_SEC: number;
export const VA_COPY_AS_ARRAY: number;
export const VERSION_MIN_REQUIRED: number;
export const WIN32_MSG_HANDLE: number;
/**
 * A wrapper for the POSIX access() function. This function is used to
 * test a pathname for one or several of read, write or execute
 * permissions, or just existence.
 * On Windows, the file protection mechanism is not at all POSIX-like,
 * and the underlying function in the C library only checks the
 * FAT-style READONLY attribute, and does not look at the ACL of a
 * file at all. This function is this in practise almost useless on
 * Windows. Software that needs to handle file permissions on Windows
 * more exactly should use the Win32 API.
 * See your C library manual for more details about access().
 */
export function access(filename: string, mode: number): number;
/**
 * Determines the numeric value of a character as a decimal digit.
 * Differs from g_unichar_digit_value() because it takes a char, so
 * there's no worry about sign extension if characters are signed.
 */
export function ascii_digit_value(c: number): number;
/**
 * Converts a #gdouble to a string, using the '.' as
 * decimal point.
 * This function generates enough precision that converting
 * the string back using g_ascii_strtod() gives the same machine-number
 * (on machines with IEEE compatible 64bit doubles). It is
 * guaranteed that the size of the resulting string will never
 * be larger than @G_ASCII_DTOSTR_BUF_SIZE bytes, including the terminati
 * ng
 * nul character, which is always added.
 */
export function ascii_dtostr(buffer: string, buf_len: number, d: number): string;
/**
 * Converts a #gdouble to a string, using the '.' as
 * decimal point. To format the number you pass in
 * a printf()-style format string. Allowed conversion
 * specifiers are 'e', 'E', 'f', 'F', 'g' and 'G'.
 * The returned buffer is guaranteed to be nul-terminated.
 * If you just want to want to serialize the value into a
 * string, use g_ascii_dtostr().
 */
export function ascii_formatd(buffer: string, buf_len: number, format: string, d: number): string;
/**
 * Compare two strings, ignoring the case of ASCII characters.
 * Unlike the BSD strcasecmp() function, this only recognizes standard
 * ASCII letters and ignores the locale, treating all non-ASCII
 * bytes as if they are not letters.
 * This function should be used only on strings that are known to be
 * in encodings where the bytes corresponding to ASCII letters always
 * represent themselves. This includes UTF-8 and the ISO-8859-*
 * charsets, but not for instance double-byte encodings like the
 * Windows Codepage 932, where the trailing bytes of double-byte
 * characters include all ASCII letters. If you compare two CP932
 * strings using this function, you will get false matches.
 * Both @s1 and @s2 must be non-%NULL.
 */
export function ascii_strcasecmp(s1: string, s2: string): number;
/**
 * Converts all upper case ASCII letters to lower case ASCII letters.
 */
export function ascii_strdown(str: string, len: number): string;
/**
 * A convenience function for converting a string to a signed number.
 * This function assumes that @str contains only a number of the given
 * @base that is within inclusive bounds limited by @min and @max. If
 * this is true, then the converted number is stored in @out_num. An
 * empty string is not a valid input. A string with leading or
 * trailing whitespace is also an invalid input.
 * @base can be between 2 and 36 inclusive. Hexadecimal numbers must
 * not be prefixed with "0x" or "0X". Such a problem does not exist
 * for octal numbers, since they were usually prefixed with a zero
 * which does not change the value of the parsed number.
 * Parsing failures result in an error with the %G_NUMBER_PARSER_ERROR
 * domain. If the input is invalid, the error code will be
 * %G_NUMBER_PARSER_ERROR_INVALID. If the parsed number is out of
 * bounds - %G_NUMBER_PARSER_ERROR_OUT_OF_BOUNDS.
 * See g_ascii_strtoll() if you have more complex needs such as
 * parsing a string which starts with a number, but then has other
 * characters.
 */
export function ascii_string_to_signed(str: string, base: number, min: number, max: number): [boolean, number | null];
/**
 * A convenience function for converting a string to an unsigned number.
 * This function assumes that @str contains only a number of the given
 * @base that is within inclusive bounds limited by @min and @max. If
 * this is true, then the converted number is stored in @out_num. An
 * empty string is not a valid input. A string with leading or
 * trailing whitespace is also an invalid input. A string with a leading 
 * sign
 * (`-` or `+`) is not a valid input for the unsigned parser.
 * @base can be between 2 and 36 inclusive. Hexadecimal numbers must
 * not be prefixed with "0x" or "0X". Such a problem does not exist
 * for octal numbers, since they were usually prefixed with a zero
 * which does not change the value of the parsed number.
 * Parsing failures result in an error with the %G_NUMBER_PARSER_ERROR
 * domain. If the input is invalid, the error code will be
 * %G_NUMBER_PARSER_ERROR_INVALID. If the parsed number is out of
 * bounds - %G_NUMBER_PARSER_ERROR_OUT_OF_BOUNDS.
 * See g_ascii_strtoull() if you have more complex needs such as
 * parsing a string which starts with a number, but then has other
 * characters.
 */
export function ascii_string_to_unsigned(str: string, base: number, min: number, max: number): [boolean, number | null];
/**
 * Compare @s1 and @s2, ignoring the case of ASCII characters and any
 * characters after the first @n in each string.
 * Unlike the BSD strcasecmp() function, this only recognizes standard
 * ASCII letters and ignores the locale, treating all non-ASCII
 * characters as if they are not letters.
 * The same warning as in g_ascii_strcasecmp() applies: Use this
 * function only on strings known to be in encodings where bytes
 * corresponding to ASCII letters always represent themselves.
 */
export function ascii_strncasecmp(s1: string, s2: string, n: number): number;
/**
 * Converts a string to a #gdouble value.
 * This function behaves like the standard strtod() function
 * does in the C locale. It does this without actually changing
 * the current locale, since that would not be thread-safe.
 * A limitation of the implementation is that this function
 * will still accept localized versions of infinities and NANs.
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtod() function.
 * To convert from a #gdouble to a string in a locale-insensitive
 * way, use g_ascii_dtostr().
 * If the correct value would cause overflow, plus or minus %HUGE_VAL
 * is returned (according to the sign of the value), and %ERANGE is
 * stored in %errno. If the correct value would cause underflow,
 * zero is returned and %ERANGE is stored in %errno.
 * This function resets %errno before calling strtod() so that
 * you can reliably detect overflow and underflow.
 */
export function ascii_strtod(nptr: string): [number, string | null];
/**
 * Converts a string to a #gint64 value.
 * This function behaves like the standard strtoll() function
 * does in the C locale. It does this without actually
 * changing the current locale, since that would not be
 * thread-safe.
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtoll() function.
 * If the correct value would cause overflow, %G_MAXINT64 or %G_MININT64
 * is returned, and `ERANGE` is stored in `errno`.
 * If the base is outside the valid range, zero is returned, and
 * `EINVAL` is stored in `errno`. If the
 * string conversion fails, zero is returned, and @endptr returns @nptr
 * (if @endptr is non-%NULL).
 */
export function ascii_strtoll(nptr: string, base: number): [number, string | null];
/**
 * Converts a string to a #guint64 value.
 * This function behaves like the standard strtoull() function
 * does in the C locale. It does this without actually
 * changing the current locale, since that would not be
 * thread-safe.
 * Note that input with a leading minus sign (`-`) is accepted, and will 
 * return
 * the negation of the parsed number, unless that would overflow a #guint
 * 64.
 * Critically, this means you cannot assume that a short fixed length inp
 * ut will
 * never result in a low return value, as the input could have a leading 
 * `-`.
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtoull() function.
 * If the correct value would cause overflow, %G_MAXUINT64
 * is returned, and `ERANGE` is stored in `errno`.
 * If the base is outside the valid range, zero is returned, and
 * `EINVAL` is stored in `errno`.
 * If the string conversion fails, zero is returned, and @endptr returns
 * @nptr (if @endptr is non-%NULL).
 */
export function ascii_strtoull(nptr: string, base: number): [number, string | null];
/**
 * Converts all lower case ASCII letters to upper case ASCII letters.
 */
export function ascii_strup(str: string, len: number): string;
/**
 * Convert a character to ASCII lower case.
 * Unlike the standard C library tolower() function, this only
 * recognizes standard ASCII letters and ignores the locale, returning
 * all non-ASCII characters unchanged, even if they are lower case
 * letters in a particular character set. Also unlike the standard
 * library function, this takes and returns a char, not an int, so
 * don't call it on %EOF but no need to worry about casting to #guchar
 * before passing a possibly non-ASCII character in.
 */
export function ascii_tolower(c: number): number;
/**
 * Convert a character to ASCII upper case.
 * Unlike the standard C library toupper() function, this only
 * recognizes standard ASCII letters and ignores the locale, returning
 * all non-ASCII characters unchanged, even if they are upper case
 * letters in a particular character set. Also unlike the standard
 * library function, this takes and returns a char, not an int, so
 * don't call it on %EOF but no need to worry about casting to #guchar
 * before passing a possibly non-ASCII character in.
 */
export function ascii_toupper(c: number): number;
/**
 * Determines the numeric value of a character as a hexidecimal
 * digit. Differs from g_unichar_xdigit_value() because it takes
 * a char, so there's no worry about sign extension if characters
 * are signed.
 */
export function ascii_xdigit_value(c: number): number;
/**
 * 
 */
export function assert_warning(log_domain: string, file: string, line: number, pretty_function: string, expression: string): void;
/**
 * 
 */
export function assertion_message(domain: string, file: string, line: number, func: string, message: string): void;
/**
 * 
 */
export function assertion_message_cmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void;
/**
 * 
 */
export function assertion_message_error(domain: string, file: string, line: number, func: string, expr: string, error: Error, error_domain: Quark, error_code: number): void;
/**
 * Specifies a function to be called at normal program termination.
 * Since GLib 2.8.2, on Windows g_atexit() actually is a preprocessor
 * macro that maps to a call to the atexit() function in the C
 * library. This means that in case the code that calls g_atexit(),
 * i.e. atexit(), is in a DLL, the function will be called when the
 * DLL is detached from the program. This typically makes more sense
 * than that the function is called when the GLib DLL is detached,
 * which happened earlier when g_atexit() was a function in the GLib
 * DLL.
 * The behaviour of atexit() in the context of dynamically loaded
 * modules is not formally specified and varies wildly.
 * On POSIX systems, calling g_atexit() (or atexit()) in a dynamically
 * loaded module which is unloaded before the program terminates might
 * well cause a crash at program exit.
 * Some POSIX systems implement atexit() like Windows, and have each
 * dynamically loaded module maintain an own atexit chain that is
 * called when the module is unloaded.
 * On other POSIX systems, before a dynamically loaded module is
 * unloaded, the registered atexit functions (if any) residing in that
 * module are called, regardless where the code that registered them
 * resided. This is presumably the most robust approach.
 * As can be seen from the above, for portability it's best to avoid
 * calling g_atexit() (or atexit()) except in the main executable of a
 * program.
 */
export function atexit(func: VoidFunc): void;
/**
 * Atomically adds @val to the value of @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic += val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 * Before version 2.30, this function did not return a value
 * (but g_atomic_int_exchange_and_add() did, and had the same meaning).
 */
export function atomic_int_add(atomic: number, val: number): number;
/**
 * Performs an atomic bitwise 'and' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * This call acts as a full compiler and hardware memory barrier.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic &= val; return tmp; }`.
 */
export function atomic_int_and(atomic: number, val: number): number;
/**
 * Compares @atomic to @oldval and, if equal, sets it to @newval.
 * If @atomic was not equal to @oldval then no change occurs.
 * This compare and exchange is done atomically.
 * Think of this operation as an atomic version of
 * `{ if (*atomic == oldval) { *atomic = newval; return TRUE; } else retu
 * rn FALSE; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_int_compare_and_exchange(atomic: number, oldval: number, newval: number): boolean;
/**
 * Decrements the value of @atomic by 1.
 * Think of this operation as an atomic version of
 * `{ *atomic -= 1; return (*atomic == 0); }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_int_dec_and_test(atomic: number): boolean;
/**
 * This function existed before g_atomic_int_add() returned the prior
 * value of the integer (which it now does).  It is retained only for
 * compatibility reasons.  Don't use this function in new code.
 */
export function atomic_int_exchange_and_add(atomic: number, val: number): number;
/**
 * Gets the current value of @atomic.
 * This call acts as a full compiler and hardware
 * memory barrier (before the get).
 */
export function atomic_int_get(atomic: number): number;
/**
 * Increments the value of @atomic by 1.
 * Think of this operation as an atomic version of `{ *atomic += 1; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_int_inc(atomic: number): void;
/**
 * Performs an atomic bitwise 'or' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic |= val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_int_or(atomic: number, val: number): number;
/**
 * Sets the value of @atomic to @newval.
 * This call acts as a full compiler and hardware
 * memory barrier (after the set).
 */
export function atomic_int_set(atomic: number, newval: number): void;
/**
 * Performs an atomic bitwise 'xor' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic ^= val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_int_xor(atomic: number, val: number): number;
/**
 * Atomically adds @val to the value of @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic += val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_pointer_add(atomic: object, val: number): number;
/**
 * Performs an atomic bitwise 'and' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic &= val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_pointer_and(atomic: object, val: number): number;
/**
 * Compares @atomic to @oldval and, if equal, sets it to @newval.
 * If @atomic was not equal to @oldval then no change occurs.
 * This compare and exchange is done atomically.
 * Think of this operation as an atomic version of
 * `{ if (*atomic == oldval) { *atomic = newval; return TRUE; } else retu
 * rn FALSE; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_pointer_compare_and_exchange(atomic: object, oldval: object | null, newval: object | null): boolean;
/**
 * Gets the current value of @atomic.
 * This call acts as a full compiler and hardware
 * memory barrier (before the get).
 */
export function atomic_pointer_get(atomic: object): object | null;
/**
 * Performs an atomic bitwise 'or' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic |= val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_pointer_or(atomic: object, val: number): number;
/**
 * Sets the value of @atomic to @newval.
 * This call acts as a full compiler and hardware
 * memory barrier (after the set).
 */
export function atomic_pointer_set(atomic: object, newval: object | null): void;
/**
 * Performs an atomic bitwise 'xor' of the value of @atomic and @val,
 * storing the result back in @atomic.
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic ^= val; return tmp; }`.
 * This call acts as a full compiler and hardware memory barrier.
 */
export function atomic_pointer_xor(atomic: object, val: number): number;
/**
 * Atomically acquires a reference on the data pointed by @mem_block.
 */
export function atomic_rc_box_acquire(mem_block: object): object;
/**
 * Allocates @block_size bytes of memory, and adds atomic
 * reference counting semantics to it.
 * The data will be freed when its reference count drops to
 * zero.
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 */
export function atomic_rc_box_alloc(block_size: number): object;
/**
 * Allocates @block_size bytes of memory, and adds atomic
 * referenc counting semantics to it.
 * The contents of the returned data is set to zero.
 * The data will be freed when its reference count drops to
 * zero.
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 */
export function atomic_rc_box_alloc0(block_size: number): object;
/**
 * Allocates a new block of data with atomit reference counting
 * semantics, and copies @block_size bytes of @mem_block
 * into it.
 */
export function atomic_rc_box_dup(block_size: number, mem_block: object): object;
/**
 * Retrieves the size of the reference counted data pointed by @mem_block
 * .
 */
export function atomic_rc_box_get_size(mem_block: object): number;
/**
 * Atomically releases a reference on the data pointed by @mem_block.
 * If the reference was the last one, it will free the
 * resources allocated for @mem_block.
 */
export function atomic_rc_box_release(mem_block: object): void;
/**
 * Atomically releases a reference on the data pointed by @mem_block.
 * If the reference was the last one, it will call @clear_func
 * to clear the contents of @mem_block, and then will free the
 * resources allocated for @mem_block.
 */
export function atomic_rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void;
/**
 * Atomically compares the current value of @arc with @val.
 */
export function atomic_ref_count_compare(arc: number, val: number): boolean;
/**
 * Atomically decreases the reference count.
 */
export function atomic_ref_count_dec(arc: number): boolean;
/**
 * Atomically increases the reference count.
 */
export function atomic_ref_count_inc(arc: number): void;
/**
 * Initializes a reference count variable.
 */
export function atomic_ref_count_init(arc: number): void;
/**
 * Decode a sequence of Base-64 encoded text into binary data.  Note
 * that the returned binary data is not necessarily zero-terminated,
 * so it should not be used as a character string.
 */
export function base64_decode(text: string): [number[], number];
/**
 * Decode a sequence of Base-64 encoded text into binary data
 * by overwriting the input data.
 */
export function base64_decode_inplace(text: number[], out_len: number): [number, number[],number];
/**
 * Encode a sequence of binary data into its Base-64 stringified
 * representation.
 */
export function base64_encode(data: number[] | null, len: number): string;
/**
 * Flush the status from a sequence of calls to g_base64_encode_step().
 * The output buffer must be large enough to fit all the data that will
 * be written to it. It will need up to 4 bytes, or up to 5 bytes if
 * line-breaking is enabled.
 * The @out array will not be automatically nul-terminated.
 */
export function base64_encode_close(break_lines: boolean, state: number, save: number): [number, number[],number,number];
/**
 * Incrementally encode a sequence of binary data into its Base-64 string
 * ified
 * representation. By calling this function multiple times you can conver
 * t
 * data in chunks to avoid having to have the full encoded data in memory
 * .
 * When all of the data has been converted you must call
 * g_base64_encode_close() to flush the saved state.
 * The output buffer must be large enough to fit all the data that will
 * be written to it. Due to the way base64 encodes you will need
 * at least: (@len / 3 + 1) * 4 + 4 bytes (+ 4 may be needed in case of
 * non-zero state). If you enable line-breaking you will need at least:
 * ((@len / 3 + 1) * 4 + 4) / 72 + 1 bytes of extra space.
 * @break_lines is typically used when putting base64-encoded data in ema
 * ils.
 * It breaks the lines at 72 columns instead of putting all of the text o
 * n
 * the same line. This avoids problems with long lines in the email syste
 * m.
 * Note however that it breaks the lines with `LF` characters, not
 * `CR LF` sequences, so the result cannot be passed directly to SMTP
 * or certain other protocols.
 */
export function base64_encode_step(_in: number[], len: number, break_lines: boolean, state: number, save: number): [number, number[],number,number];
/**
 * Gets the name of the file without any leading directory
 * components. It returns a pointer into the given file name
 * string.
 */
export function basename(file_name: string): string;
/**
 * Sets the indicated @lock_bit in @address.  If the bit is already
 * set, this call will block until g_bit_unlock() unsets the
 * corresponding bit.
 * Attempting to lock on two different bits within the same integer is
 * not supported and will very probably cause deadlocks.
 * The value of the bit that is set is (1u << @bit).  If @bit is not
 * between 0 and 31 then the result is undefined.
 * This function accesses @address atomically.  All other accesses to
 * @address must be atomic in order for this function to work
 * reliably.
 */
export function bit_lock(address: number, lock_bit: number): void;
/**
 * Find the position of the first bit set in @mask, searching
 * from (but not including) @nth_bit upwards. Bits are numbered
 * from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63,
 * usually). To start searching from the 0th bit, set @nth_bit to -1.
 */
export function bit_nth_lsf(mask: number, nth_bit: number): number;
/**
 * Find the position of the first bit set in @mask, searching
 * from (but not including) @nth_bit downwards. Bits are numbered
 * from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63,
 * usually). To start searching from the last bit, set @nth_bit to
 * -1 or GLIB_SIZEOF_LONG * 8.
 */
export function bit_nth_msf(mask: number, nth_bit: number): number;
/**
 * Gets the number of bits used to hold @number,
 * e.g. if @number is 4, 3 bits are needed.
 */
export function bit_storage(number: number): number;
/**
 * Sets the indicated @lock_bit in @address, returning %TRUE if
 * successful.  If the bit is already set, returns %FALSE immediately.
 * Attempting to lock on two different bits within the same integer is
 * not supported.
 * The value of the bit that is set is (1u << @bit).  If @bit is not
 * between 0 and 31 then the result is undefined.
 * This function accesses @address atomically.  All other accesses to
 * @address must be atomic in order for this function to work
 * reliably.
 */
export function bit_trylock(address: number, lock_bit: number): boolean;
/**
 * Clears the indicated @lock_bit in @address.  If another thread is
 * currently blocked in g_bit_lock() on this same bit then it will be
 * woken up.
 * This function accesses @address atomically.  All other accesses to
 * @address must be atomic in order for this function to work
 * reliably.
 */
export function bit_unlock(address: number, lock_bit: number): void;
/**
 * 
 */
export function bookmark_file_error_quark(): Quark;
/**
 * Behaves exactly like g_build_filename(), but takes the path elements
 * as a string array, instead of varargs. This function is mainly
 * meant for language bindings.
 */
export function build_filenamev(args: string[]): string;
/**
 * Behaves exactly like g_build_path(), but takes the path elements
 * as a string array, instead of varargs. This function is mainly
 * meant for language bindings.
 */
export function build_pathv(separator: string, args: string[]): string;
/**
 * Frees the memory allocated by the #GByteArray. If @free_segment is
 * %TRUE it frees the actual byte data. If the reference count of
 * @array is greater than one, the #GByteArray wrapper is preserved but
 * the size of @array will be set to zero.
 */
export function byte_array_free(array: number[], free_segment: boolean): number;
/**
 * Transfers the data from the #GByteArray into a new immutable #GBytes.
 * The #GByteArray is freed unless the reference count of @array is great
 * er
 * than one, the #GByteArray wrapper is preserved but the size of @array
 * will be set to zero.
 * This is identical to using g_bytes_new_take() and g_byte_array_free()
 * together.
 */
export function byte_array_free_to_bytes(array: number[]): Bytes;
/**
 * Creates a new #GByteArray with a reference count of 1.
 */
export function byte_array_new(): number[];
/**
 * Create byte array containing the data. The data will be owned by the a
 * rray
 * and will be freed with g_free(), i.e. it could be allocated using g_st
 * rdup().
 */
export function byte_array_new_take(data: number[], len: number): number[];
/**
 * Atomically decrements the reference count of @array by one. If the
 * reference count drops to 0, all memory allocated by the array is
 * released. This function is thread-safe and may be called from any
 * thread.
 */
export function byte_array_unref(array: number[]): void;
/**
 * Gets the canonical file name from @filename. All triple slashes are tu
 * rned into
 * single slashes, and all `..` and `.`s resolved against @relative_to.
 * Symlinks are not followed, and the returned path is guaranteed to be a
 * bsolute.
 * If @filename is an absolute path, @relative_to is ignored. Otherwise,
 * @relative_to will be prepended to @filename to make it absolute. @rela
 * tive_to
 * must be an absolute path, or %NULL. If @relative_to is %NULL, it'll fa
 * llback
 * to g_get_current_dir().
 * This function never fails, and will canonicalize file paths even if th
 * ey don't
 * exist.
 * No file system I/O is done.
 */
export function canonicalize_filename(filename: string, relative_to: string | null): string;
/**
 * A wrapper for the POSIX chdir() function. The function changes the
 * current directory of the process to @path.
 * See your C library manual for more details about chdir().
 */
export function chdir(path: string): number;
/**
 * Checks that the GLib library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #GLIB_MAJOR_VERSION, #GLIB_MINOR_VERSION, #GLIB_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of GLib the application or module was compiled
 * against.
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * @required_major.required_minor.@required_micro. Second
 * the running library must be binary compatible with the
 * version @required_major.required_minor.@required_micro
 * (same major version.)
 */
export function check_version(required_major: number, required_minor: number, required_micro: number): string;
/**
 * Gets the length in bytes of digests of type @checksum_type
 */
export function checksum_type_get_length(checksum_type: ChecksumType): number;
/**
 * Sets a function to be called when the child indicated by @pid
 * exits, at the priority @priority.
 * If you obtain @pid from g_spawn_async() or g_spawn_async_with_pipes()
 * you will need to pass #G_SPAWN_DO_NOT_REAP_CHILD as flag to
 * the spawn function for the child watching to work.
 * In many programs, you will want to call g_spawn_check_exit_status()
 * in the callback to determine whether or not the child exited
 * successfully.
 * Also, note that on platforms where #GPid must be explicitly closed
 * (see g_spawn_close_pid()) @pid must not be closed while the source
 * is still active.  Typically, you should invoke g_spawn_close_pid()
 * in the callback function for the source.
 * GLib supports only a single callback per process id.
 * On POSIX platforms, the same restrictions mentioned for
 * g_child_watch_source_new() apply to this function.
 * This internally creates a main loop source using
 * g_child_watch_source_new() and attaches it to the main loop context
 * using g_source_attach(). You can do these steps manually if you
 * need greater control.
 */
export function child_watch_add_full(priority: number, pid: Pid, _function: ChildWatchFunc, data: object | null, notify: DestroyNotify | null): number;
/**
 * Creates a new child_watch source.
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * Note that child watch sources can only be used in conjunction with
 * `g_spawn...` when the %G_SPAWN_DO_NOT_REAP_CHILD flag is used.
 * Note that on platforms where #GPid must be explicitly closed
 * (see g_spawn_close_pid()) @pid must not be closed while the
 * source is still active. Typically, you will want to call
 * g_spawn_close_pid() in the callback function for the source.
 * On POSIX platforms, the following restrictions apply to this API
 * due to limitations in POSIX process interfaces:
 * * @pid must be a child of this process
 * * @pid must be positive
 * * the application must not call `waitpid` with a non-positive
 *   first argument, for instance in another thread
 * * the application must not wait for @pid to exit by any other
 *   mechanism, including `waitpid(pid, ...)` or a second child-watch
 *   source for the same @pid
 * * the application must not ignore SIGCHILD
 * If any of those conditions are not met, this and related APIs will
 * not work correctly. This can often be diagnosed via a GLib warning
 * stating that `ECHILD` was received by `waitpid`.
 * Calling `waitpid` for specific processes other than @pid remains a
 * valid thing to do.
 */
export function child_watch_source_new(pid: Pid): Source;
/**
 * If @err or *@err is %NULL, does nothing. Otherwise,
 * calls g_error_free() on *@err and sets *@err to %NULL.
 */
export function clear_error(): void;
/**
 * This wraps the close() call; in case of error, %errno will be
 * preserved, but the error will also be stored as a #GError in @error.
 * Besides using #GError, there is another major reason to prefer this
 * function over the call provided by the system; on Unix, it will
 * attempt to correctly handle %EINTR, which has platform-specific
 * semantics.
 */
export function close(fd: number): boolean;
/**
 * Computes the checksum for a binary @data. This is a
 * convenience wrapper for g_checksum_new(), g_checksum_get_string()
 * and g_checksum_free().
 * The hexadecimal string returned will be in lower case.
 */
export function compute_checksum_for_bytes(checksum_type: ChecksumType, data: Bytes): string;
/**
 * Computes the checksum for a binary @data of @length. This is a
 * convenience wrapper for g_checksum_new(), g_checksum_get_string()
 * and g_checksum_free().
 * The hexadecimal string returned will be in lower case.
 */
export function compute_checksum_for_data(checksum_type: ChecksumType, data: number[], length: number): string;
/**
 * Computes the checksum of a string.
 * The hexadecimal string returned will be in lower case.
 */
export function compute_checksum_for_string(checksum_type: ChecksumType, str: string, length: number): string;
/**
 * Computes the HMAC for a binary @data. This is a
 * convenience wrapper for g_hmac_new(), g_hmac_get_string()
 * and g_hmac_unref().
 * The hexadecimal string returned will be in lower case.
 */
export function compute_hmac_for_bytes(digest_type: ChecksumType, key: Bytes, data: Bytes): string;
/**
 * Computes the HMAC for a binary @data of @length. This is a
 * convenience wrapper for g_hmac_new(), g_hmac_get_string()
 * and g_hmac_unref().
 * The hexadecimal string returned will be in lower case.
 */
export function compute_hmac_for_data(digest_type: ChecksumType, key: number[], key_len: number, data: number[], length: number): string;
/**
 * Computes the HMAC for a string.
 * The hexadecimal string returned will be in lower case.
 */
export function compute_hmac_for_string(digest_type: ChecksumType, key: number[], key_len: number, str: string, length: number): string;
/**
 * Converts a string from one character set to another.
 * Note that you should use g_iconv() for streaming conversions.
 * Despite the fact that @bytes_read can return information about partial
 * characters, the g_convert_... functions are not generally suitable
 * for streaming. If the underlying converter maintains internal state,
 * then this won't be preserved across successive calls to g_convert(),
 * g_convert_with_iconv() or g_convert_with_fallback(). (An example of
 * this is the GNU C converter for CP1255 which does not emit a base
 * character until it knows that the next character is not a mark that
 * could combine with the base character.)
 * Using extensions such as "//TRANSLIT" may not work (or may not work
 * well) on many platforms.  Consider using g_str_to_ascii() instead.
 */
export function convert(str: number[], len: number, to_codeset: string, from_codeset: string): [number[], number | null,number | null];
/**
 * 
 */
export function convert_error_quark(): Quark;
/**
 * Converts a string from one character set to another, possibly
 * including fallback sequences for characters not representable
 * in the output. Note that it is not guaranteed that the specification
 * for the fallback sequences in @fallback will be honored. Some
 * systems may do an approximate conversion from @from_codeset
 * to @to_codeset in their iconv() functions,
 * in which case GLib will simply return that approximate conversion.
 * Note that you should use g_iconv() for streaming conversions.
 * Despite the fact that @bytes_read can return information about partial
 * characters, the g_convert_... functions are not generally suitable
 * for streaming. If the underlying converter maintains internal state,
 * then this won't be preserved across successive calls to g_convert(),
 * g_convert_with_iconv() or g_convert_with_fallback(). (An example of
 * this is the GNU C converter for CP1255 which does not emit a base
 * character until it knows that the next character is not a mark that
 * could combine with the base character.)
 */
export function convert_with_fallback(str: number[], len: number, to_codeset: string, from_codeset: string, fallback: string): [number[], number | null,number | null];
/**
 * Calls the given function for each data element of the datalist. The
 * function is called with each data element's #GQuark id and data,
 * together with the given @user_data parameter. Note that this
 * function is NOT thread-safe. So unless @datalist can be protected
 * from any modifications during invocation of this function, it should
 * not be called.
 * @func can make changes to @datalist, but the iteration will not
 * reflect changes made during the g_datalist_foreach() call, other
 * than skipping over elements that are removed.
 */
export function datalist_foreach(datalist: Data, func: DataForeachFunc, user_data: object | null): void;
/**
 * Gets a data element, using its string identifier. This is slower than
 * g_datalist_id_get_data() because it compares strings.
 */
export function datalist_get_data(datalist: Data, key: string): object | null;
/**
 * Gets flags values packed in together with the datalist.
 * See g_datalist_set_flags().
 */
export function datalist_get_flags(datalist: Data): number;
/**
 * Retrieves the data element corresponding to @key_id.
 */
export function datalist_id_get_data(datalist: Data, key_id: Quark): object | null;
/**
 * Turns on flag values for a data list. This function is used
 * to keep a small number of boolean flags in an object with
 * a data list without using any additional space. It is
 * not generally useful except in circumstances where space
 * is very tight. (It is used in the base #GObject type, for
 * example.)
 */
export function datalist_set_flags(datalist: Data, flags: number): void;
/**
 * Turns off flag values for a data list. See g_datalist_unset_flags()
 */
export function datalist_unset_flags(datalist: Data, flags: number): void;
/**
 * Destroys the dataset, freeing all memory allocated, and calling any
 * destroy functions set for data elements.
 */
export function dataset_destroy(dataset_location: object): void;
/**
 * Calls the given function for each data element which is associated
 * with the given location. Note that this function is NOT thread-safe.
 * So unless @dataset_location can be protected from any modifications
 * during invocation of this function, it should not be called.
 * @func can make changes to the dataset, but the iteration will not
 * reflect changes made during the g_dataset_foreach() call, other
 * than skipping over elements that are removed.
 */
export function dataset_foreach(dataset_location: object, func: DataForeachFunc, user_data: object | null): void;
/**
 * Gets the data element corresponding to a #GQuark.
 */
export function dataset_id_get_data(dataset_location: object, key_id: Quark): object | null;
/**
 * Returns the number of days in a month, taking leap
 * years into account.
 */
export function date_get_days_in_month(month: DateMonth, year: DateYear): number;
/**
 * Returns the number of weeks in the year, where weeks
 * are taken to start on Monday. Will be 52 or 53. The
 * date must be valid. (Years always have 52 7-day periods,
 * plus 1 or 2 extra days depending on whether it's a leap
 * year. This function is basically telling you how many
 * Mondays are in the year, i.e. there are 53 Mondays if
 * one of the extra days happens to be a Monday.)
 */
export function date_get_monday_weeks_in_year(year: DateYear): number;
/**
 * Returns the number of weeks in the year, where weeks
 * are taken to start on Sunday. Will be 52 or 53. The
 * date must be valid. (Years always have 52 7-day periods,
 * plus 1 or 2 extra days depending on whether it's a leap
 * year. This function is basically telling you how many
 * Sundays are in the year, i.e. there are 53 Sundays if
 * one of the extra days happens to be a Sunday.)
 */
export function date_get_sunday_weeks_in_year(year: DateYear): number;
/**
 * Returns %TRUE if the year is a leap year.
 * For the purposes of this function, leap year is every year
 * divisible by 4 unless that year is divisible by 100. If it
 * is divisible by 100 it would be a leap year only if that year
 * is also divisible by 400.
 */
export function date_is_leap_year(year: DateYear): boolean;
/**
 * Generates a printed representation of the date, in a
 * [locale][setlocale]-specific way.
 * Works just like the platform's C library strftime() function,
 * but only accepts date-related formats; time-related formats
 * give undefined results. Date must be valid. Unlike strftime()
 * (which uses the locale encoding), works on a UTF-8 format
 * string and stores a UTF-8 result.
 * This function does not provide any conversion specifiers in
 * addition to those implemented by the platform's C library.
 * For example, don't expect that using g_date_strftime() would
 * make the \%F provided by the C99 strftime() work on Windows
 * where the C library only complies to C89.
 */
export function date_strftime(s: string, slen: number, format: string, date: Date): number;
/**
 * A comparison function for #GDateTimes that is suitable
 * as a #GCompareFunc. Both #GDateTimes must be non-%NULL.
 */
export function date_time_compare(dt1: object, dt2: object): number;
/**
 * Checks to see if @dt1 and @dt2 are equal.
 * Equal here means that they represent the same moment after converting
 * them to the same time zone.
 */
export function date_time_equal(dt1: object, dt2: object): boolean;
/**
 * Hashes @datetime into a #guint, suitable for use within #GHashTable.
 */
export function date_time_hash(datetime: object): number;
/**
 * Returns %TRUE if the day of the month is valid (a day is valid if it's
 * between 1 and 31 inclusive).
 */
export function date_valid_day(day: DateDay): boolean;
/**
 * Returns %TRUE if the day-month-year triplet forms a valid, existing da
 * y
 * in the range of days #GDate understands (Year 1 or later, no more than
 * a few thousand years in the future).
 */
export function date_valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
/**
 * Returns %TRUE if the Julian day is valid. Anything greater than zero
 * is basically a valid Julian, though there is a 32-bit limit.
 */
export function date_valid_julian(julian_date: number): boolean;
/**
 * Returns %TRUE if the month value is valid. The 12 #GDateMonth
 * enumeration values are the only valid months.
 */
export function date_valid_month(month: DateMonth): boolean;
/**
 * Returns %TRUE if the weekday is valid. The seven #GDateWeekday enumera
 * tion
 * values are the only valid weekdays.
 */
export function date_valid_weekday(weekday: DateWeekday): boolean;
/**
 * Returns %TRUE if the year is valid. Any year greater than 0 is valid,
 * though there is a 16-bit limit to what #GDate will understand.
 */
export function date_valid_year(year: DateYear): boolean;
/**
 * This is a variant of g_dgettext() that allows specifying a locale
 * category instead of always using `LC_MESSAGES`. See g_dgettext() for
 * more information about how this functions differs from calling
 * dcgettext() directly.
 */
export function dcgettext(domain: string | null, msgid: string, category: number): string;
/**
 * This function is a wrapper of dgettext() which does not translate
 * the message if the default domain as set with textdomain() has no
 * translations for the current locale.
 * The advantage of using this function over dgettext() proper is that
 * libraries using this function (like GTK+) will not use translations
 * if the application using the library does not have translations for
 * the current locale.  This results in a consistent English-only
 * interface instead of one having partial translations.  For this
 * feature to work, the call to textdomain() and setlocale() should
 * precede any g_dgettext() invocations.  For GTK+, it means calling
 * textdomain() before gtk_init or its variants.
 * This function disables translations if and only if upon its first
 * call all the following conditions hold:
 * - @domain is not %NULL
 * - textdomain() has been called to set a default text domain
 * - there is no translations available for the default text domain
 *   and the current locale
 * - current locale is not "C" or any English locales (those
 *   starting with "en_")
 * Note that this behavior may not be desired for example if an applicati
 * on
 * has its untranslated messages in a language other than English. In tho
 * se
 * cases the application should call textdomain() after initializing GTK+
 * .
 * Applications should normally not use this function directly,
 * but use the _() macro for translations.
 */
export function dgettext(domain: string | null, msgid: string): string;
/**
 * Creates a subdirectory in the preferred directory for temporary
 * files (as returned by g_get_tmp_dir()).
 * @tmpl should be a string in the GLib file name encoding containing
 * a sequence of six 'X' characters, as the parameter to g_mkstemp().
 * However, unlike these functions, the template should only be a
 * basename, no directory components are allowed. If template is
 * %NULL, a default template is used.
 * Note that in contrast to g_mkdtemp() (and mkdtemp()) @tmpl is not
 * modified, and might thus be a read-only literal string.
 */
export function dir_make_tmp(tmpl: string | null): string;
/**
 * Compares two #gpointer arguments and returns %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the @key_equal_func
 * parameter, when using opaque pointers compared by pointer value as
 * keys in a #GHashTable.
 * This equality function is also appropriate for keys that are integers
 * stored in pointers, such as `GINT_TO_POINTER (n)`.
 */
export function direct_equal(v1: object | null, v2: object | null): boolean;
/**
 * Converts a gpointer to a hash value.
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * when using opaque pointers compared by pointer value as keys in a
 * #GHashTable.
 * This hash function is also appropriate for keys that are integers
 * stored in pointers, such as `GINT_TO_POINTER (n)`.
 */
export function direct_hash(v: object | null): number;
/**
 * This function is a wrapper of dngettext() which does not translate
 * the message if the default domain as set with textdomain() has no
 * translations for the current locale.
 * See g_dgettext() for details of how this differs from dngettext()
 * proper.
 */
export function dngettext(domain: string | null, msgid: string, msgid_plural: string, n: number): string;
/**
 * Compares the two #gdouble values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the @key_equal_func
 * parameter, when using non-%NULL pointers to doubles as keys in a
 * #GHashTable.
 */
export function double_equal(v1: object, v2: object): boolean;
/**
 * Converts a pointer to a #gdouble to a hash value.
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * when using non-%NULL pointers to doubles as keys in a #GHashTable.
 */
export function double_hash(v: object): number;
/**
 * This function is a variant of g_dgettext() which supports
 * a disambiguating message context. GNU gettext uses the
 * '\004' character to separate the message context and
 * message id in @msgctxtid.
 * If 0 is passed as @msgidoffset, this function will fall back to
 * trying to use the deprecated convention of using "|" as a separation
 * character.
 * This uses g_dgettext() internally. See that functions for differences
 * with dgettext() proper.
 * Applications should normally not use this function directly,
 * but use the C_() macro for translations with context.
 */
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string;
/**
 * This function is a variant of g_dgettext() which supports
 * a disambiguating message context. GNU gettext uses the
 * '\004' character to separate the message context and
 * message id in @msgctxtid.
 * This uses g_dgettext() internally. See that functions for differences
 * with dgettext() proper.
 * This function differs from C_() in that it is not a macro and
 * thus you may use non-string-literals as context and msgid arguments.
 */
export function dpgettext2(domain: string | null, context: string, msgid: string): string;
/**
 * Returns the value of the environment variable @variable in the
 * provided list @envp.
 */
export function environ_getenv(envp: string[] | null, variable: string): string;
/**
 * Sets the environment variable @variable in the provided list
 * @envp to @value.
 */
export function environ_setenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[];
/**
 * Removes the environment variable @variable from the provided
 * environment @envp.
 */
export function environ_unsetenv(envp: string[] | null, variable: string): string[];
/**
 * Gets a #GFileError constant based on the passed-in @err_no.
 * For example, if you pass in `EEXIST` this function returns
 * #G_FILE_ERROR_EXIST. Unlike `errno` values, you can portably
 * assume that all #GFileError values will exist.
 * Normally a #GFileError value goes into a #GError returned
 * from a function that manipulates files. So you would use
 * g_file_error_from_errno() when constructing a #GError.
 */
export function file_error_from_errno(err_no: number): FileError;
/**
 * 
 */
export function file_error_quark(): Quark;
/**
 * Reads an entire file into allocated memory, with good error
 * checking.
 * If the call was successful, it returns %TRUE and sets @contents to the
 *  file
 * contents and @length to the length of the file contents in bytes. The 
 * string
 * stored in @contents will be nul-terminated, so for text files you can 
 * pass
 * %NULL for the @length argument. If the call was not successful, it ret
 * urns
 * %FALSE and sets @error. The error domain is #G_FILE_ERROR. Possible er
 * ror
 * codes are those in the #GFileError enumeration. In the error case,
 * @contents is set to %NULL and @length is set to zero.
 */
export function file_get_contents(filename: string): [boolean, number[],number | null];
/**
 * Opens a file for writing in the preferred directory for temporary
 * files (as returned by g_get_tmp_dir()).
 * @tmpl should be a string in the GLib file name encoding containing
 * a sequence of six 'X' characters, as the parameter to g_mkstemp().
 * However, unlike these functions, the template should only be a
 * basename, no directory components are allowed. If template is
 * %NULL, a default template is used.
 * Note that in contrast to g_mkstemp() (and mkstemp()) @tmpl is not
 * modified, and might thus be a read-only literal string.
 * Upon success, and if @name_used is non-%NULL, the actual name used
 * is returned in @name_used. This string should be freed with g_free()
 * when not needed any longer. The returned name is in the GLib file
 * name encoding.
 */
export function file_open_tmp(tmpl: string | null): [number, string];
/**
 * Reads the contents of the symbolic link @filename like the POSIX
 * readlink() function.  The returned string is in the encoding used
 * for filenames. Use g_filename_to_utf8() to convert it to UTF-8.
 */
export function file_read_link(filename: string): string;
/**
 * Writes all of @contents to a file named @filename, with good error che
 * cking.
 * If a file called @filename already exists it will be overwritten.
 * This write is atomic in the sense that it is first written to a tempor
 * ary
 * file which is then renamed to the final name. Notes:
 * - On UNIX, if @filename already exists hard links to @filename will br
 * eak.
 *   Also since the file is recreated, existing permissions, access contr
 * ol
 *   lists, metadata etc. may be lost. If @filename is a symbolic link,
 *   the link itself will be replaced, not the linked file.
 * - On UNIX, if @filename already exists and is non-empty, and if the sy
 * stem
 *   supports it (via a journalling filesystem or equivalent), the fsync(
 * )
 *   call (or equivalent) will be used to ensure atomic replacement: @fil
 * ename
 *   will contain either its old contents or @contents, even in the face 
 * of
 *   system power loss, the disk being unsafely removed, etc.
 * - On UNIX, if @filename does not already exist or is empty, there is a
 *   possibility that system power loss etc. after calling this function 
 * will
 *   leave @filename empty or full of NUL bytes, depending on the underly
 * ing
 *   filesystem.
 * - On Windows renaming a file will not remove an existing file with the
 *   new name, so on Windows there is a race condition between the existi
 * ng
 *   file being removed and the temporary file being renamed.
 * - On Windows there is no way to remove a file that is open to some
 *   process, or mapped into memory. Thus, this function will fail if
 *   @filename already exists and is open.
 * If the call was successful, it returns %TRUE. If the call was not succ
 * essful,
 * it returns %FALSE and sets @error. The error domain is #G_FILE_ERROR.
 * Possible error codes are those in the #GFileError enumeration.
 * Note that the name for the temporary file is constructed by appending 
 * up
 * to 7 characters to @filename.
 */
export function file_set_contents(filename: string, contents: number[], length: number): boolean;
/**
 * Returns %TRUE if any of the tests in the bitfield @test are
 * %TRUE. For example, `(G_FILE_TEST_EXISTS | G_FILE_TEST_IS_DIR)`
 * will return %TRUE if the file exists; the check whether it's a
 * directory doesn't matter since the existence test is %TRUE. With
 * the current set of available tests, there's no point passing in
 * more than one test at a time.
 * Apart from %G_FILE_TEST_IS_SYMLINK all tests follow symbolic links,
 * so for a symbolic link to a regular file g_file_test() will return
 * %TRUE for both %G_FILE_TEST_IS_SYMLINK and %G_FILE_TEST_IS_REGULAR.
 * Note, that for a dangling symbolic link g_file_test() will return
 * %TRUE for %G_FILE_TEST_IS_SYMLINK and %FALSE for all other flags.
 * You should never use g_file_test() to test whether it is safe
 * to perform an operation, because there is always the possibility
 * of the condition changing before you actually perform the operation.
 * For example, you might think you could use %G_FILE_TEST_IS_SYMLINK
 * to know whether it is safe to write to a file without being
 * tricked into writing into a different location. It doesn't work!
 * |[<!-- language="C" -->
 *  // DON'T DO THIS
 *  if (!g_file_test (filename, G_FILE_TEST_IS_SYMLINK))
 *    {
 *      fd = g_open (filename, O_WRONLY);
 *      // write to fd
 *    }
 * ]|
 * Another thing to note is that %G_FILE_TEST_EXISTS and
 * %G_FILE_TEST_IS_EXECUTABLE are implemented using the access()
 * system call. This usually doesn't matter, but if your program
 * is setuid or setgid it means that these tests will give you
 * the answer for the real user ID and group ID, rather than the
 * effective user ID and group ID.
 * On Windows, there are no symlinks, so testing for
 * %G_FILE_TEST_IS_SYMLINK will always return %FALSE. Testing for
 * %G_FILE_TEST_IS_EXECUTABLE will just check that the file exists and
 * its name indicates that it is executable, checking for well-known
 * extensions and those listed in the `PATHEXT` environment variable.
 */
export function file_test(filename: string, test: FileTest): boolean;
/**
 * Returns the display basename for the particular filename, guaranteed
 * to be valid UTF-8. The display name might not be identical to the file
 * name,
 * for instance there might be problems converting it to UTF-8, and some 
 * files
 * can be translated in the display.
 * If GLib cannot make sense of the encoding of @filename, as a last reso
 * rt it
 * replaces unknown characters with U+FFFD, the Unicode replacement chara
 * cter.
 * You can search the result for the UTF-8 encoding of this character (wh
 * ich is
 * "\357\277\275" in octal notation) to find out if @filename was in an i
 * nvalid
 * encoding.
 * You must pass the whole absolute pathname to this functions so that
 * translation of well known locations can be done.
 * This function is preferred over g_filename_display_name() if you know 
 * the
 * whole path, as it allows translation.
 */
export function filename_display_basename(filename: string): string;
/**
 * Converts a filename into a valid UTF-8 string. The conversion is
 * not necessarily reversible, so you should keep the original around
 * and use the return value of this function only for display purposes.
 * Unlike g_filename_to_utf8(), the result is guaranteed to be non-%NULL
 * even if the filename actually isn't in the GLib file name encoding.
 * If GLib cannot make sense of the encoding of @filename, as a last reso
 * rt it
 * replaces unknown characters with U+FFFD, the Unicode replacement chara
 * cter.
 * You can search the result for the UTF-8 encoding of this character (wh
 * ich is
 * "\357\277\275" in octal notation) to find out if @filename was in an i
 * nvalid
 * encoding.
 * If you know the whole pathname of the file you should use
 * g_filename_display_basename(), since that allows location-based
 * translation of filenames.
 */
export function filename_display_name(filename: string): string;
/**
 * Converts an escaped ASCII-encoded URI to a local filename in the
 * encoding used for filenames.
 */
export function filename_from_uri(uri: string): [string, string | null];
/**
 * Converts a string from UTF-8 to the encoding GLib uses for
 * filenames. Note that on Windows GLib uses UTF-8 for filenames;
 * on other platforms, this function indirectly depends on the
 * [current locale][setlocale].
 * The input string shall not contain nul characters even if the @len
 * argument is positive. A nul character found inside the string will res
 * ult
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE. If the filename encoding i
 * s
 * not UTF-8 and the conversion output contains a nul character, the erro
 * r
 * %G_CONVERT_ERROR_EMBEDDED_NUL is set and the function returns %NULL.
 */
export function filename_from_utf8(utf8string: string, len: number): [string, number | null,number | null];
/**
 * Converts an absolute filename to an escaped ASCII-encoded URI, with th
 * e path
 * component following Section 3.3. of RFC 2396.
 */
export function filename_to_uri(filename: string, hostname: string | null): string;
/**
 * Converts a string which is in the encoding used by GLib for
 * filenames into a UTF-8 string. Note that on Windows GLib uses UTF-8
 * for filenames; on other platforms, this function indirectly depends on
 * the [current locale][setlocale].
 * The input string shall not contain nul characters even if the @len
 * argument is positive. A nul character found inside the string will res
 * ult
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE.
 * If the source encoding is not UTF-8 and the conversion output contains
 *  a
 * nul character, the error %G_CONVERT_ERROR_EMBEDDED_NUL is set and the
 * function returns %NULL. Use g_convert() to produce output that
 * may contain embedded nul characters.
 */
export function filename_to_utf8(opsysstring: string, len: number): [string, number | null,number | null];
/**
 * Locates the first executable named @program in the user's path, in the
 * same way that execvp() would locate it. Returns an allocated string
 * with the absolute path name, or %NULL if the program is not found in
 * the path. If @program is already an absolute path, returns a copy of
 * @program if @program exists and is executable, and %NULL otherwise.
 *  
 * On Windows, if @program does not have a file type suffix, tries
 * with the suffixes .exe, .cmd, .bat and .com, and the suffixes in
 * the `PATHEXT` environment variable.
 * On Windows, it looks for the file in the same way as CreateProcess()
 * would. This means first in the directory where the executing
 * program was loaded from, then in the current directory, then in the
 * Windows 32-bit system directory, then in the Windows directory, and
 * finally in the directories in the `PATH` environment variable. If
 * the program is found, the return value contains the full name
 * including the type suffix.
 */
export function find_program_in_path(program: string): string;
/**
 * Formats a size (for example the size of a file) into a human readable
 * string.  Sizes are rounded to the nearest size prefix (kB, MB, GB)
 * and are displayed rounded to the nearest tenth. E.g. the file size
 * 3292528 bytes will be converted into the string "3.2 MB". The returned
 *  string
 * is UTF-8, and may use a non-breaking space to separate the number and 
 * units,
 * to ensure they aren’t separated when line wrapped.
 * The prefix units base is 1000 (i.e. 1 kB is 1000 bytes).
 * This string should be freed with g_free() when not needed any longer.
 * See g_format_size_full() for more options about how the size might be
 * formatted.
 */
export function format_size(size: number): string;
/**
 * Formats a size (for example the size of a file) into a human
 * readable string. Sizes are rounded to the nearest size prefix
 * (KB, MB, GB) and are displayed rounded to the nearest tenth.
 * E.g. the file size 3292528 bytes will be converted into the
 * string "3.1 MB".
 * The prefix units base is 1024 (i.e. 1 KB is 1024 bytes).
 * This string should be freed with g_free() when not needed any longer.
 */
export function format_size_for_display(size: number): string;
/**
 * Formats a size.
 * This function is similar to g_format_size() but allows for flags
 * that modify the output. See #GFormatSizeFlags.
 */
export function format_size_full(size: number, flags: FormatSizeFlags): string;
/**
 * Frees the memory pointed to by @mem.
 * If @mem is %NULL it simply returns, so there is no need to check @mem
 * against %NULL before calling this function.
 */
export function free(mem: object | null): void;
/**
 * Gets a human-readable name for the application, as set by
 * g_set_application_name(). This name should be localized if
 * possible, and is intended for display to the user.  Contrast with
 * g_get_prgname(), which gets a non-localized name. If
 * g_set_application_name() has not been called, returns the result of
 * g_get_prgname() (which may be %NULL if g_set_prgname() has also not
 * been called).
 */
export function get_application_name(): string;
/**
 * Obtains the character set for the [current locale][setlocale]; you
 * might use this character set as an argument to g_convert(), to convert
 * from the current locale's encoding to some other encoding. (Frequently
 * g_locale_to_utf8() and g_locale_from_utf8() are nice shortcuts, though
 * .)
 * On Windows the character set returned by this function is the
 * so-called system default ANSI code-page. That is the character set
 * used by the "narrow" versions of C library and Win32 functions that
 * handle file names. It might be different from the character set
 * used by the C library's current locale.
 * On Linux, the character set is found by consulting nl_langinfo() if
 * available. If not, the environment variables `LC_ALL`, `LC_CTYPE`, `LA
 * NG`
 * and `CHARSET` are queried in order.
 * The return value is %TRUE if the locale's encoding is UTF-8, in that
 * case you can perhaps avoid calling g_convert().
 * The string returned in @charset is not allocated, and should not be
 * freed.
 */
export function get_charset(): [boolean, string | null];
/**
 * Gets the character set for the current locale.
 */
export function get_codeset(): string;
/**
 * Gets the current directory.
 * The returned string should be freed when no longer needed.
 * The encoding of the returned string is system defined.
 * On Windows, it is always UTF-8.
 * Since GLib 2.40, this function will return the value of the "PWD"
 * environment variable if it is set and it happens to be the same as
 * the current directory.  This can make a difference in the case that
 * the current directory is the target of a symbolic link.
 */
export function get_current_dir(): string;
/**
 * Equivalent to the UNIX gettimeofday() function, but portable.
 * You may find g_get_real_time() to be more convenient.
 */
export function get_current_time(result: TimeVal): void;
/**
 * Gets the list of environment variables for the current process.
 * The list is %NULL terminated and each item in the list is of the
 * form 'NAME=VALUE'.
 * This is equivalent to direct access to the 'environ' global variable,
 * except portable.
 * The return value is freshly allocated and it should be freed with
 * g_strfreev() when it is no longer needed.
 */
export function get_environ(): string[];
/**
 * Determines the preferred character sets used for filenames.
 * The first character set from the @charsets is the filename encoding, t
 * he
 * subsequent character sets are used when trying to generate a displayab
 * le
 * representation of a filename, see g_filename_display_name().
 * On Unix, the character sets are determined by consulting the
 * environment variables `G_FILENAME_ENCODING` and `G_BROKEN_FILENAMES`.
 * On Windows, the character set used in the GLib API is always UTF-8
 * and said environment variables have no effect.
 * `G_FILENAME_ENCODING` may be set to a comma-separated list of
 * character set names. The special token "\@locale" is taken
 * to  mean the character set for the [current locale][setlocale].
 * If `G_FILENAME_ENCODING` is not set, but `G_BROKEN_FILENAMES` is,
 * the character set of the current locale is taken as the filename
 * encoding. If neither environment variable  is set, UTF-8 is taken
 * as the filename encoding, but the character set of the current locale
 * is also put in the list of encodings.
 * The returned @charsets belong to GLib and must not be freed.
 * Note that on Unix, regardless of the locale character set or
 * `G_FILENAME_ENCODING` value, the actual file names present
 * on a system might be in any random encoding or just gibberish.
 */
export function get_filename_charsets(): [boolean, string[]];
/**
 * Gets the current user's home directory.
 * As with most UNIX tools, this function will return the value of the
 * `HOME` environment variable if it is set to an existing absolute path
 * name, falling back to the `passwd` file in the case that it is unset.
 * If the path given in `HOME` is non-absolute, does not exist, or is
 * not a directory, the result is undefined.
 * Before version 2.36 this function would ignore the `HOME` environment
 * variable, taking the value from the `passwd` database instead. This wa
 * s
 * changed to increase the compatibility of GLib with other programs (and
 * the XDG basedir specification) and to increase testability of programs
 * based on GLib (by making it easier to run them from test frameworks).
 * If your program has a strong requirement for either the new or the
 * old behaviour (and if you don't wish to increase your GLib
 * dependency to ensure that the new behaviour is in effect) then you
 * should either directly check the `HOME` environment variable yourself
 * or unset it before calling any functions in GLib.
 */
export function get_home_dir(): string;
/**
 * Return a name for the machine.
 * The returned name is not necessarily a fully-qualified domain name,
 * or even present in DNS or some other name service at all. It need
 * not even be unique on your local network or site, but usually it
 * is. Callers should not rely on the return value having any specific
 * properties like uniqueness for security purposes. Even if the name
 * of the machine is changed while an application is running, the
 * return value from this function does not change. The returned
 * string is owned by GLib and should not be modified or freed. If no
 * name can be determined, a default fixed string "localhost" is
 * returned.
 * The encoding of the returned string is UTF-8.
 */
export function get_host_name(): string;
/**
 * Computes a list of applicable locale names, which can be used to
 * e.g. construct locale-dependent filenames or search paths. The returne
 * d
 * list is sorted from most desirable to least desirable and always conta
 * ins
 * the default locale "C".
 * For example, if LANGUAGE=de:en_US, then the returned list is
 * "de", "en_US", "en", "C".
 * This function consults the environment variables `LANGUAGE`, `LC_ALL`,
 * `LC_MESSAGES` and `LANG` to find the list of locales specified by the
 * user.
 */
export function get_language_names(): string[];
/**
 * Computes a list of applicable locale names with a locale category name
 * ,
 * which can be used to construct the fallback locale-dependent filenames
 * or search paths. The returned list is sorted from most desirable to
 * least desirable and always contains the default locale "C".
 * This function consults the environment variables `LANGUAGE`, `LC_ALL`,
 * @category_name, and `LANG` to find the list of locales specified by th
 * e
 * user.
 * g_get_language_names() returns g_get_language_names_with_category("LC_
 * MESSAGES").
 */
export function get_language_names_with_category(category_name: string): string[];
/**
 * Returns a list of derived variants of @locale, which can be used to
 * e.g. construct locale-dependent filenames or search paths. The returne
 * d
 * list is sorted from most desirable to least desirable.
 * This function handles territory, charset and extra locale modifiers.
 * For example, if @locale is "fr_BE", then the returned list
 * is "fr_BE", "fr".
 * If you need the list of variants for the current locale,
 * use g_get_language_names().
 */
export function get_locale_variants(locale: string): string[];
/**
 * Queries the system monotonic time.
 * The monotonic clock will always increase and doesn't suffer
 * discontinuities when the user (or NTP) changes the system time.  It
 * may or may not continue to tick during times where the machine is
 * suspended.
 * We try to use the clock that corresponds as closely as possible to
 * the passage of time as measured by system calls such as poll() but it
 * may not always be possible to do this.
 */
export function get_monotonic_time(): number;
/**
 * Determine the approximate number of threads that the system will
 * schedule simultaneously for this process.  This is intended to be
 * used as a parameter to g_thread_pool_new() for CPU bound tasks and
 * similar cases.
 */
export function get_num_processors(): number;
/**
 * Gets the name of the program. This name should not be localized,
 * in contrast to g_get_application_name().
 * If you are using #GApplication the program name is set in
 * g_application_run(). In case of GDK or GTK+ it is set in
 * gdk_init(), which is called by gtk_init() and the
 * #GtkApplication::startup handler. The program name is found by
 * taking the last component of @argv[0].
 */
export function get_prgname(): string;
/**
 * Gets the real name of the user. This usually comes from the user's
 * entry in the `passwd` file. The encoding of the returned string is
 * system-defined. (On Windows, it is, however, always UTF-8.) If the
 * real user name cannot be determined, the string "Unknown" is
 * returned.
 */
export function get_real_name(): string;
/**
 * Queries the system wall-clock time.
 * This call is functionally equivalent to g_get_current_time() except
 * that the return value is often more convenient than dealing with a
 * #GTimeVal.
 * You should only use this call if you are actually interested in the re
 * al
 * wall-clock time.  g_get_monotonic_time() is probably more useful for
 * measuring intervals.
 */
export function get_real_time(): number;
/**
 * Returns an ordered list of base directories in which to access
 * system-wide configuration information.
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec).
 * In this case the list of directories retrieved will be `XDG_CONFIG_DIR
 * S`.
 * On Windows it follows XDG Base Directory Specification if `XDG_CONFIG_
 * DIRS` is defined.
 * If `XDG_CONFIG_DIRS` is undefined, the directory that contains applica
 * tion
 * data for all users is used instead. A typical path is
 * `C:\Documents and Settings\All Users\Application Data`.
 * This folder is used for application data
 * that is not user specific. For example, an application can store
 * a spell-check dictionary, a database of clip art, or a log file in the
 * CSIDL_COMMON_APPDATA folder. This information will not roam and is ava
 * ilable
 * to anyone using the computer.
 */
export function get_system_config_dirs(): string[];
/**
 * Returns an ordered list of base directories in which to access
 * system-wide application data.
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec)
 * In this case the list of directories retrieved will be `XDG_DATA_DIRS`
 * .
 * On Windows it follows XDG Base Directory Specification if `XDG_DATA_DI
 * RS` is defined.
 * If `XDG_DATA_DIRS` is undefined,
 * the first elements in the list are the Application Data
 * and Documents folders for All Users. (These can be determined only
 * on Windows 2000 or later and are not present in the list on other
 * Windows versions.) See documentation for CSIDL_COMMON_APPDATA and
 * CSIDL_COMMON_DOCUMENTS.
 * Then follows the "share" subfolder in the installation folder for
 * the package containing the DLL that calls this function, if it can
 * be determined.
 * Finally the list contains the "share" subfolder in the installation
 * folder for GLib, and in the installation folder for the package the
 * application's .exe file belongs to.
 * The installation folders above are determined by looking up the
 * folder where the module (DLL or EXE) in question is located. If the
 * folder's name is "bin", its parent is used, otherwise the folder
 * itself.
 * Note that on Windows the returned list can vary depending on where
 * this function is called.
 */
export function get_system_data_dirs(): string[];
/**
 * Gets the directory to use for temporary files.
 * On UNIX, this is taken from the `TMPDIR` environment variable.
 * If the variable is not set, `P_tmpdir` is
 * used, as defined by the system C library. Failing that, a
 * hard-coded default of "/tmp" is returned.
 * On Windows, the `TEMP` environment variable is used, with the
 * root directory of the Windows installation (eg: "C:\") used
 * as a default.
 * The encoding of the returned string is system-defined. On Windows,
 * it is always UTF-8. The return value is never %NULL or the empty
 * string.
 */
export function get_tmp_dir(): string;
/**
 * Returns a base directory in which to store non-essential, cached
 * data specific to particular user.
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec).
 * In this case the directory retrieved will be `XDG_CACHE_HOME`.
 * On Windows it follows XDG Base Directory Specification if `XDG_CACHE_H
 * OME` is defined.
 * If `XDG_CACHE_HOME` is undefined, the directory that serves as a commo
 * n
 * repository for temporary Internet files is used instead. A typical pat
 * h is
 * `C:\Documents and Settings\username\Local Settings\Temporary Internet 
 * Files`.
 * See the [documentation for `CSIDL_INTERNET_CACHE`](https://msdn.micros
 * oft.com/en-us/library/windows/desktop/bb762494%28v=vs.85%29.aspx#csidl
 * _internet_cache).
 */
export function get_user_cache_dir(): string;
/**
 * Returns a base directory in which to store user-specific application
 * configuration information such as user preferences and settings.
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec).
 * In this case the directory retrieved will be `XDG_CONFIG_HOME`.
 * On Windows it follows XDG Base Directory Specification if `XDG_CONFIG_
 * HOME` is defined.
 * If `XDG_CONFIG_HOME` is undefined, the folder to use for local (as opp
 * osed
 * to roaming) application data is used instead. See the
 * [documentation for `CSIDL_LOCAL_APPDATA`](https://msdn.microsoft.com/e
 * n-us/library/windows/desktop/bb762494%28v=vs.85%29.aspx#csidl_local_ap
 * pdata).
 * Note that in this case on Windows it will be  the same
 * as what g_get_user_data_dir() returns.
 */
export function get_user_config_dir(): string;
/**
 * Returns a base directory in which to access application data such
 * as icons that is customized for a particular user.
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec).
 * In this case the directory retrieved will be `XDG_DATA_HOME`.
 * On Windows it follows XDG Base Directory Specification if `XDG_DATA_HO
 * ME`
 * is defined. If `XDG_DATA_HOME` is undefined, the folder to use for loc
 * al (as
 * opposed to roaming) application data is used instead. See the
 * [documentation for `CSIDL_LOCAL_APPDATA`](https://msdn.microsoft.com/e
 * n-us/library/windows/desktop/bb762494%28v=vs.85%29.aspx#csidl_local_ap
 * pdata).
 * Note that in this case on Windows it will be the same
 * as what g_get_user_config_dir() returns.
 */
export function get_user_data_dir(): string;
/**
 * Gets the user name of the current user. The encoding of the returned
 * string is system-defined. On UNIX, it might be the preferred file name
 * encoding, or something else, and there is no guarantee that it is even
 * consistent on a machine. On Windows, it is always UTF-8.
 */
export function get_user_name(): string;
/**
 * Returns a directory that is unique to the current user on the local
 * system.
 * This is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standard
 * s/basedir-spec).
 * This is the directory
 * specified in the `XDG_RUNTIME_DIR` environment variable.
 * In the case that this variable is not set, we return the value of
 * g_get_user_cache_dir(), after verifying that it exists.
 */
export function get_user_runtime_dir(): string;
/**
 * Returns the full path of a special directory using its logical id.
 * On UNIX this is done using the XDG special user directories.
 * For compatibility with existing practise, %G_USER_DIRECTORY_DESKTOP
 * falls back to `$HOME/Desktop` when XDG special user directories have
 * not been set up.
 * Depending on the platform, the user might be able to change the path
 * of the special directory without requiring the session to restart; GLi
 * b
 * will not reflect any change once the special directories are loaded.
 */
export function get_user_special_dir(directory: UserDirectory): string;
/**
 * Returns the value of an environment variable.
 * On UNIX, the name and value are byte strings which might or might not
 * be in some consistent character set and encoding. On Windows, they are
 * in UTF-8.
 * On Windows, in case the environment variable's value contains
 * references to other environment variables, they are expanded.
 */
export function getenv(variable: string): string;
/**
 * This is a convenience function for using a #GHashTable as a set.  It
 * is equivalent to calling g_hash_table_replace() with @key as both the
 * key and the value.
 * When a hash table only ever contains keys that have themselves as the
 * corresponding value it is able to be stored more efficiently.  See
 * the discussion in the section description.
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 */
export function hash_table_add(hash_table: HashTable, key: object | null): boolean;
/**
 * Checks if @key is in @hash_table.
 */
export function hash_table_contains(hash_table: HashTable, key: object | null): boolean;
/**
 * Destroys all keys and values in the #GHashTable and decrements its
 * reference count by 1. If keys and/or values are dynamically allocated,
 * you should either free them first or create the #GHashTable with destr
 * oy
 * notifiers using g_hash_table_new_full(). In the latter case the destro
 * y
 * functions you supplied will be called on all keys and values during th
 * e
 * destruction phase.
 */
export function hash_table_destroy(hash_table: HashTable): void;
/**
 * Inserts a new key and value into a #GHashTable.
 * If the key already exists in the #GHashTable its current
 * value is replaced with the new value. If you supplied a
 * @value_destroy_func when creating the #GHashTable, the old
 * value is freed using that function. If you supplied a
 * @key_destroy_func when creating the #GHashTable, the passed
 * key is freed using that function.
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 */
export function hash_table_insert(hash_table: HashTable, key: object | null, value: object | null): boolean;
/**
 * Looks up a key in a #GHashTable. Note that this function cannot
 * distinguish between a key that is not present and one which is present
 * and has the value %NULL. If you need this distinction, use
 * g_hash_table_lookup_extended().
 */
export function hash_table_lookup(hash_table: HashTable, key: object | null): object | null;
/**
 * Looks up a key in the #GHashTable, returning the original key and the
 * associated value and a #gboolean which is %TRUE if the key was found. 
 * This
 * is useful if you need to free the memory allocated for the original ke
 * y,
 * for example before calling g_hash_table_remove().
 * You can actually pass %NULL for @lookup_key to test
 * whether the %NULL key exists, provided the hash and equal functions
 * of @hash_table are %NULL-safe.
 */
export function hash_table_lookup_extended(hash_table: HashTable, lookup_key: object | null): [boolean, object | null,object | null];
/**
 * Removes a key and its associated value from a #GHashTable.
 * If the #GHashTable was created using g_hash_table_new_full(), the
 * key and value are freed using the supplied destroy functions, otherwis
 * e
 * you have to make sure that any dynamically allocated values are freed
 * yourself.
 */
export function hash_table_remove(hash_table: HashTable, key: object | null): boolean;
/**
 * Removes all keys and their associated values from a #GHashTable.
 * If the #GHashTable was created using g_hash_table_new_full(),
 * the keys and values are freed using the supplied destroy functions,
 * otherwise you have to make sure that any dynamically allocated
 * values are freed yourself.
 */
export function hash_table_remove_all(hash_table: HashTable): void;
/**
 * Inserts a new key and value into a #GHashTable similar to
 * g_hash_table_insert(). The difference is that if the key
 * already exists in the #GHashTable, it gets replaced by the
 * new key. If you supplied a @value_destroy_func when creating
 * the #GHashTable, the old value is freed using that function.
 * If you supplied a @key_destroy_func when creating the
 * #GHashTable, the old key is freed using that function.
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 */
export function hash_table_replace(hash_table: HashTable, key: object | null, value: object | null): boolean;
/**
 * Returns the number of elements contained in the #GHashTable.
 */
export function hash_table_size(hash_table: HashTable): number;
/**
 * Removes a key and its associated value from a #GHashTable without
 * calling the key and value destroy functions.
 */
export function hash_table_steal(hash_table: HashTable, key: object | null): boolean;
/**
 * Removes all keys and their associated values from a #GHashTable
 * without calling the key and value destroy functions.
 */
export function hash_table_steal_all(hash_table: HashTable): void;
/**
 * Looks up a key in the #GHashTable, stealing the original key and the
 * associated value and returning %TRUE if the key was found. If the key 
 * was
 * not found, %FALSE is returned.
 * If found, the stolen key and value are removed from the hash table wit
 * hout
 * calling the key and value destroy functions, and ownership is transfer
 * red to
 * the caller of this method; as with g_hash_table_steal().
 * You can pass %NULL for @lookup_key, provided the hash and equal functi
 * ons
 * of @hash_table are %NULL-safe.
 */
export function hash_table_steal_extended(hash_table: HashTable, lookup_key: object | null): [boolean, object | null,object | null];
/**
 * Atomically decrements the reference count of @hash_table by one.
 * If the reference count drops to 0, all keys and values will be
 * destroyed, and all memory allocated by the hash table is released.
 * This function is MT-safe and may be called from any thread.
 */
export function hash_table_unref(hash_table: HashTable): void;
/**
 * Destroys a #GHook, given its ID.
 */
export function hook_destroy(hook_list: HookList, hook_id: number): boolean;
/**
 * Removes one #GHook from a #GHookList, marking it
 * inactive and calling g_hook_unref() on it.
 */
export function hook_destroy_link(hook_list: HookList, hook: Hook): void;
/**
 * Calls the #GHookList @finalize_hook function if it exists,
 * and frees the memory allocated for the #GHook.
 */
export function hook_free(hook_list: HookList, hook: Hook): void;
/**
 * Inserts a #GHook into a #GHookList, before a given #GHook.
 */
export function hook_insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
/**
 * Prepends a #GHook on the start of a #GHookList.
 */
export function hook_prepend(hook_list: HookList, hook: Hook): void;
/**
 * Decrements the reference count of a #GHook.
 * If the reference count falls to 0, the #GHook is removed
 * from the #GHookList and g_hook_free() is called to free it.
 */
export function hook_unref(hook_list: HookList, hook: Hook): void;
/**
 * Tests if @hostname contains segments with an ASCII-compatible
 * encoding of an Internationalized Domain Name. If this returns
 * %TRUE, you should decode the hostname with g_hostname_to_unicode()
 * before displaying it to the user.
 * Note that a hostname might contain a mix of encoded and unencoded
 * segments, and so it is possible for g_hostname_is_non_ascii() and
 * g_hostname_is_ascii_encoded() to both return %TRUE for a name.
 */
export function hostname_is_ascii_encoded(hostname: string): boolean;
/**
 * Tests if @hostname is the string form of an IPv4 or IPv6 address.
 * (Eg, "192.168.0.1".)
 */
export function hostname_is_ip_address(hostname: string): boolean;
/**
 * Tests if @hostname contains Unicode characters. If this returns
 * %TRUE, you need to encode the hostname with g_hostname_to_ascii()
 * before using it in non-IDN-aware contexts.
 * Note that a hostname might contain a mix of encoded and unencoded
 * segments, and so it is possible for g_hostname_is_non_ascii() and
 * g_hostname_is_ascii_encoded() to both return %TRUE for a name.
 */
export function hostname_is_non_ascii(hostname: string): boolean;
/**
 * Converts @hostname to its canonical ASCII form; an ASCII-only
 * string containing no uppercase letters and not ending with a
 * trailing dot.
 */
export function hostname_to_ascii(hostname: string): string;
/**
 * Converts @hostname to its canonical presentation form; a UTF-8
 * string in Unicode normalization form C, containing no uppercase
 * letters, no forbidden characters, and no ASCII-encoded segments,
 * and not ending with a trailing dot.
 * Of course if @hostname is not an internationalized hostname, then
 * the canonical presentation form will be entirely ASCII.
 */
export function hostname_to_unicode(hostname: string): string;
/**
 * Adds a function to be called whenever there are no higher priority
 * events pending.  If the function returns %FALSE it is automatically
 * removed from the list of event sources and will not be called again.
 * See [memory management of sources][mainloop-memory-management] for det
 * ails
 * on how to handle the return value and memory management of @data.
 * This internally creates a main loop source using g_idle_source_new()
 * and attaches it to the global #GMainContext using g_source_attach(), s
 * o
 * the callback will be invoked in whichever thread is running that main
 * context. You can do these steps manually if you need greater control o
 * r to
 * use a custom main context.
 */
export function idle_add_full(priority: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
/**
 * Removes the idle function with the given data.
 */
export function idle_remove_by_data(data: object | null): boolean;
/**
 * Creates a new idle source.
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed. Note that the default priority for idle sources is
 * %G_PRIORITY_DEFAULT_IDLE, as compared to other sources which
 * have a default priority of %G_PRIORITY_DEFAULT.
 */
export function idle_source_new(): Source;
/**
 * Compares the two #gint64 values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the @key_equal_func
 * parameter, when using non-%NULL pointers to 64-bit integers as keys in
 *  a
 * #GHashTable.
 */
export function int64_equal(v1: object, v2: object): boolean;
/**
 * Converts a pointer to a #gint64 to a hash value.
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * when using non-%NULL pointers to 64-bit integer values as keys in a
 * #GHashTable.
 */
export function int64_hash(v: object): number;
/**
 * Compares the two #gint values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the @key_equal_func
 * parameter, when using non-%NULL pointers to integers as keys in a
 * #GHashTable.
 * Note that this function acts on pointers to #gint, not on #gint
 * directly: if your hash table's keys are of the form
 * `GINT_TO_POINTER (n)`, use g_direct_equal() instead.
 */
export function int_equal(v1: object, v2: object): boolean;
/**
 * Converts a pointer to a #gint to a hash value.
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * when using non-%NULL pointers to integer values as keys in a #GHashTab
 * le.
 * Note that this function acts on pointers to #gint, not on #gint
 * directly: if your hash table's keys are of the form
 * `GINT_TO_POINTER (n)`, use g_direct_hash() instead.
 */
export function int_hash(v: object): number;
/**
 * Returns a canonical representation for @string. Interned strings
 * can be compared for equality by comparing the pointers, instead of
 * using strcmp(). g_intern_static_string() does not copy the string,
 * therefore @string must not be freed or modified.
 */
export function intern_static_string(string: string | null): string;
/**
 * Returns a canonical representation for @string. Interned strings
 * can be compared for equality by comparing the pointers, instead of
 * using strcmp().
 */
export function intern_string(string: string | null): string;
/**
 * Adds the #GIOChannel into the default main loop context
 * with the given priority.
 * This internally creates a main loop source using g_io_create_watch()
 * and attaches it to the main loop context with g_source_attach().
 * You can do these steps manually if you need greater control.
 */
export function io_add_watch_full(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc, user_data: object | null, notify: DestroyNotify): number;
/**
 * Converts an `errno` error number to a #GIOChannelError.
 */
export function io_channel_error_from_errno(en: number): IOChannelError;
/**
 * 
 */
export function io_channel_error_quark(): Quark;
/**
 * Creates a #GSource that's dispatched when @condition is met for the
 * given @channel. For example, if condition is #G_IO_IN, the source will
 * be dispatched when there's data available for reading.
 * g_io_add_watch() is a simpler interface to this same functionality, fo
 * r
 * the case where you want to add the source to the default main loop con
 * text
 * at the default priority.
 * On Windows, polling a #GSource created to watch a channel for a socket
 * puts the socket in non-blocking mode. This is a side-effect of the
 * implementation and unavoidable.
 */
export function io_create_watch(channel: IOChannel, condition: IOCondition): Source;
/**
 * 
 */
export function key_file_error_quark(): Quark;
/**
 * Gets the names of all variables set in the environment.
 * Programs that want to be portable to Windows should typically use
 * this function and g_getenv() instead of using the environ array
 * from the C library directly. On Windows, the strings in the environ
 * array are in system codepage encoding, while in most of the typical
 * use cases for environment variables in GLib-using programs you want
 * the UTF-8 encoding that this function and g_getenv() provide.
 */
export function listenv(): string[];
/**
 * Converts a string from UTF-8 to the encoding used for strings by
 * the C runtime (usually the same as that used by the operating
 * system) in the [current locale][setlocale]. On Windows this means
 * the system codepage.
 * The input string shall not contain nul characters even if the @len
 * argument is positive. A nul character found inside the string will res
 * ult
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE. Use g_convert() to convert
 * input that may contain embedded nul characters.
 */
export function locale_from_utf8(utf8string: string, len: number): [number[], number | null,number | null];
/**
 * Converts a string which is in the encoding used for strings by
 * the C runtime (usually the same as that used by the operating
 * system) in the [current locale][setlocale] into a UTF-8 string.
 * If the source encoding is not UTF-8 and the conversion output contains
 *  a
 * nul character, the error %G_CONVERT_ERROR_EMBEDDED_NUL is set and the
 * function returns %NULL.
 * If the source encoding is UTF-8, an embedded nul character is treated 
 * with
 * the %G_CONVERT_ERROR_ILLEGAL_SEQUENCE error for backward compatibility
 *  with
 * earlier versions of this library. Use g_convert() to produce output th
 * at
 * may contain embedded nul characters.
 */
export function locale_to_utf8(opsysstring: number[], len: number): [string, number | null,number | null];
/**
 * The default log handler set up by GLib; g_log_set_default_handler()
 * allows to install an alternate default log handler.
 * This is used if no log handler has been set for the particular log
 * domain and log level combination. It outputs the message to stderr
 * or stdout and if the log level is fatal it calls G_BREAKPOINT(). It au
 * tomatically
 * prints a new-line character after the message, so one does not need to
 *  be
 * manually included in @message.
 * The behavior of this log handler can be influenced by a number of
 * environment variables:
 * - `G_MESSAGES_PREFIXED`: A :-separated list of log levels for which
 *   messages should be prefixed by the program name and PID of the
 *   aplication.
 * - `G_MESSAGES_DEBUG`: A space-separated list of log domains for
 *   which debug and informational messages are printed. By default
 *   these messages are not printed.
 * stderr is used for levels %G_LOG_LEVEL_ERROR, %G_LOG_LEVEL_CRITICAL,
 * %G_LOG_LEVEL_WARNING and %G_LOG_LEVEL_MESSAGE. stdout is used for
 * the rest.
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 */
export function log_default_handler(log_domain: string | null, log_level: LogLevelFlags, message: string | null, unused_data: object | null): void;
/**
 * Removes the log handler.
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 */
export function log_remove_handler(log_domain: string, handler_id: number): void;
/**
 * Sets the message levels which are always fatal, in any log domain.
 * When a message with any of these levels is logged the program terminat
 * es.
 * You can only set the levels defined by GLib to be fatal.
 * %G_LOG_LEVEL_ERROR is always fatal.
 * You can also make some message levels fatal at runtime by setting
 * the `G_DEBUG` environment variable (see
 * [Running GLib Applications](glib-running.html)).
 * Libraries should not call this function, as it affects all messages lo
 * gged
 * by a process, including those from other libraries.
 * Structured log messages (using g_log_structured() and
 * g_log_structured_array()) are fatal only if the default log writer is 
 * used;
 * otherwise it is up to the writer function to determine which log messa
 * ges
 * are fatal. See [Using Structured Logging][using-structured-logging].
 */
export function log_set_always_fatal(fatal_mask: LogLevelFlags): LogLevelFlags;
/**
 * Sets the log levels which are fatal in the given domain.
 * %G_LOG_LEVEL_ERROR is always fatal.
 * This has no effect on structured log messages (using g_log_structured(
 * ) or
 * g_log_structured_array()). To change the fatal behaviour for specific 
 * log
 * messages, programs must install a custom log writer function using
 * g_log_set_writer_func(). See
 * [Using Structured Logging][using-structured-logging].
 * This function is mostly intended to be used with
 * %G_LOG_LEVEL_CRITICAL.  You should typically not set
 * %G_LOG_LEVEL_WARNING, %G_LOG_LEVEL_MESSAGE, %G_LOG_LEVEL_INFO or
 * %G_LOG_LEVEL_DEBUG as fatal except inside of test programs.
 */
export function log_set_fatal_mask(log_domain: string, fatal_mask: LogLevelFlags): LogLevelFlags;
/**
 * Like g_log_set_handler(), but takes a destroy notify for the @user_dat
 * a.
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 */
export function log_set_handler_full(log_domain: string | null, log_levels: LogLevelFlags, log_func: LogFunc, user_data: object | null, destroy: DestroyNotify): number;
/**
 * Set a writer function which will be called to format and write out eac
 * h log
 * message. Each program should set a writer function, or the default wri
 * ter
 * (g_log_writer_default()) will be used.
 * Libraries **must not** call this function — only programs are allowed 
 * to
 * install a writer function, as there must be a single, central point wh
 * ere
 * log messages are formatted and outputted.
 * There can only be one writer function. It is an error to set more than
 *  one.
 */
export function log_set_writer_func(func: LogWriterFunc | null, user_data: object | null, user_data_free: DestroyNotify): void;
/**
 * Log a message with structured data. The message will be passed through
 *  to the
 * log writer set by the application using g_log_set_writer_func(). If th
 * e
 * message is fatal (i.e. its log level is %G_LOG_LEVEL_ERROR), the progr
 * am will
 * be aborted at the end of this function.
 * See g_log_structured() for more documentation.
 * This assumes that @log_level is already present in @fields (typically 
 * as the
 * `PRIORITY` field).
 */
export function log_structured_array(log_level: LogLevelFlags, fields: LogField[], n_fields: number): void;
/**
 * Log a message with structured data, accepting the data within a #GVari
 * ant. This
 * version is especially useful for use in other languages, via introspec
 * tion.
 * The only mandatory item in the @fields dictionary is the "MESSAGE" whi
 * ch must
 * contain the text shown to the user.
 * The values in the @fields dictionary are likely to be of type String
 * (#G_VARIANT_TYPE_STRING). Array of bytes (#G_VARIANT_TYPE_BYTESTRING) 
 * is also
 * supported. In this case the message is handled as binary and will be f
 * orwarded
 * to the log writer as such. The size of the array should not be higher 
 * than
 * %G_MAXSSIZE. Otherwise it will be truncated to this size. For other ty
 * pes
 * g_variant_print() will be used to convert the value into a string.
 * For more details on its usage and about the parameters, see g_log_stru
 * ctured().
 */
export function log_variant(log_domain: string | null, log_level: LogLevelFlags, fields: Variant): void;
/**
 * Format a structured log message and output it to the default log desti
 * nation
 * for the platform. On Linux, this is typically the systemd journal, fal
 * ling
 * back to `stdout` or `stderr` if running from the terminal or if output
 *  is
 * being redirected to a file.
 * Support for other platform-specific logging mechanisms may be added in
 * future. Distributors of GLib may modify this function to impose their 
 * own
 * (documented) platform-specific log writing policies.
 * This is suitable for use as a #GLogWriterFunc, and is the default writ
 * er used
 * if no other is set using g_log_set_writer_func().
 * As with g_log_default_handler(), this function drops debug and informa
 * tional
 * messages unless their log domain (or `all`) is listed in the space-sep
 * arated
 * `G_MESSAGES_DEBUG` environment variable.
 */
export function log_writer_default(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
/**
 * Format a structured log message as a string suitable for outputting to
 *  the
 * terminal (or elsewhere). This will include the values of all fields it
 *  knows
 * how to interpret, which includes `MESSAGE` and `GLIB_DOMAIN` (see the
 * documentation for g_log_structured()). It does not include values from
 * unknown fields.
 * The returned string does **not** have a trailing new-line character. I
 * t is
 * encoded in the character set of the current locale, which is not neces
 * sarily
 * UTF-8.
 */
export function log_writer_format_fields(log_level: LogLevelFlags, fields: LogField[], n_fields: number, use_color: boolean): string;
/**
 * Check whether the given @output_fd file descriptor is a connection to 
 * the
 * systemd journal, or something else (like a log file or `stdout` or
 * `stderr`).
 * Invalid file descriptors are accepted and return %FALSE, which allows 
 * for
 * the following construct without needing any additional error handling:
 * |[<!-- language="C" -->
 *   is_journald = g_log_writer_is_journald (fileno (stderr));
 * ]|
 */
export function log_writer_is_journald(output_fd: number): boolean;
/**
 * Format a structured log message and send it to the systemd journal as 
 * a set
 * of key–value pairs. All fields are sent to the journal, but if a field
 *  has
 * length zero (indicating program-specific data) then only its key will 
 * be
 * sent.
 * This is suitable for use as a #GLogWriterFunc.
 * If GLib has been compiled without systemd support, this function is st
 * ill
 * defined, but will always return %G_LOG_WRITER_UNHANDLED.
 */
export function log_writer_journald(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
/**
 * Format a structured log message and print it to either `stdout` or `st
 * derr`,
 * depending on its log level. %G_LOG_LEVEL_INFO and %G_LOG_LEVEL_DEBUG m
 * essages
 * are sent to `stdout`; all other log levels are sent to `stderr`. Only 
 * fields
 * which are understood by this function are included in the formatted st
 * ring
 * which is printed.
 * If the output stream supports ANSI color escape sequences, they will b
 * e used
 * in the output.
 * A trailing new-line character is added to the log message when it is p
 * rinted.
 * This is suitable for use as a #GLogWriterFunc.
 */
export function log_writer_standard_streams(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
/**
 * Check whether the given @output_fd file descriptor supports ANSI color
 * escape sequences. If so, they can safely be used when formatting log
 * messages.
 */
export function log_writer_supports_color(output_fd: number): boolean;
/**
 * Returns the global default main context. This is the main context
 * used for main loop functions when a main loop is not explicitly
 * specified, and corresponds to the "main" main loop. See also
 * g_main_context_get_thread_default().
 */
export function main_context_default(): MainContext;
/**
 * Gets the thread-default #GMainContext for this thread. Asynchronous
 * operations that want to be able to be run in contexts other than
 * the default one should call this method or
 * g_main_context_ref_thread_default() to get a #GMainContext to add
 * their #GSources to. (Note that even in single-threaded
 * programs applications may sometimes want to temporarily push a
 * non-default context, so it is not safe to assume that this will
 * always return %NULL if you are running in the default thread.)
 * If you need to hold a reference on the context, use
 * g_main_context_ref_thread_default() instead.
 */
export function main_context_get_thread_default(): MainContext;
/**
 * Gets the thread-default #GMainContext for this thread, as with
 * g_main_context_get_thread_default(), but also adds a reference to
 * it with g_main_context_ref(). In addition, unlike
 * g_main_context_get_thread_default(), if the thread-default context
 * is the global default context, this will return that #GMainContext
 * (with a ref added to it) rather than returning %NULL.
 */
export function main_context_ref_thread_default(): MainContext;
/**
 * Returns the currently firing source for this thread.
 */
export function main_current_source(): Source;
/**
 * Returns the depth of the stack of calls to
 * g_main_context_dispatch() on any #GMainContext in the current thread.
 *  That is, when called from the toplevel, it gives 0. When
 * called from within a callback from g_main_context_iteration()
 * (or g_main_loop_run(), etc.) it returns 1. When called from within
 * a callback to a recursive call to g_main_context_iteration(),
 * it returns 2. And so forth.
 * This function is useful in a situation like the following:
 * Imagine an extremely simple "garbage collected" system.
 * |[<!-- language="C" -->
 * static GList *free_list;
 * gpointer
 * allocate_memory (gsize size)
 * {
 *   gpointer result = g_malloc (size);
 *   free_list = g_list_prepend (free_list, result);
 *   return result;
 * }
 * void
 * free_allocated_memory (void)
 * {
 *   GList *l;
 *   for (l = free_list; l; l = l->next);
 *     g_free (l->data);
 *   g_list_free (free_list);
 *   free_list = NULL;
 *  }
 * [...]
 * while (TRUE);
 *  {
 *    g_main_context_iteration (NULL, TRUE);
 *    free_allocated_memory();
 *   }
 * ]|
 * This works from an application, however, if you want to do the same
 * thing from a library, it gets more difficult, since you no longer
 * control the main loop. You might think you can simply use an idle
 * function to make the call to free_allocated_memory(), but that
 * doesn't work, since the idle function could be called from a
 * recursive callback. This can be fixed by using g_main_depth()
 * |[<!-- language="C" -->
 * gpointer
 * allocate_memory (gsize size)
 * {
 *   FreeListBlock *block = g_new (FreeListBlock, 1);
 *   block->mem = g_malloc (size);
 *   block->depth = g_main_depth ();
 *   free_list = g_list_prepend (free_list, block);
 *   return block->mem;
 * }
 * void
 * free_allocated_memory (void)
 * {
 *   GList *l;
 *   
 *   int depth = g_main_depth ();
 *   for (l = free_list; l; );
 *     {
 *       GList *next = l->next;
 *       FreeListBlock *block = l->data;
 *       if (block->depth > depth)
 *         {
 *           g_free (block->mem);
 *           g_free (block);
 *           free_list = g_list_delete_link (free_list, l);
 *         }
 *               
 *       l = next;
 *     }
 *   }
 * ]|
 * There is a temptation to use g_main_depth() to solve
 * problems with reentrancy. For instance, while waiting for data
 * to be received from the network in response to a menu item,
 * the menu item might be selected again. It might seem that
 * one could make the menu item's callback return immediately
 * and do nothing if g_main_depth() returns a value greater than 1.
 * However, this should be avoided since the user then sees selecting
 * the menu item do nothing. Furthermore, you'll find yourself adding
 * these checks all over your code, since there are doubtless many,
 * many things that the user could do. Instead, you can use the
 * following techniques:
 * 1. Use gtk_widget_set_sensitive() or modal dialogs to prevent
 *    the user from interacting with elements while the main
 *    loop is recursing.
 * 2. Avoid main loop recursion in situations where you can't handle
 *    arbitrary  callbacks. Instead, structure your code so that you
 *    simply return to the main loop and then get called again when
 *    there is more work to do.
 */
export function main_depth(): number;
/**
 * Allocates @n_bytes bytes of memory.
 * If @n_bytes is 0 it returns %NULL.
 */
export function malloc(n_bytes: number): object | null;
/**
 * Allocates @n_bytes bytes of memory, initialized to 0's.
 * If @n_bytes is 0 it returns %NULL.
 */
export function malloc0(n_bytes: number): object | null;
/**
 * This function is similar to g_malloc0(), allocating (@n_blocks * @n_bl
 * ock_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function malloc0_n(n_blocks: number, n_block_bytes: number): object | null;
/**
 * This function is similar to g_malloc(), allocating (@n_blocks * @n_blo
 * ck_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function malloc_n(n_blocks: number, n_block_bytes: number): object | null;
/**
 * 
 */
export function markup_error_quark(): Quark;
/**
 * Escapes text so that the markup parser will parse it verbatim.
 * Less than, greater than, ampersand, etc. are replaced with the
 * corresponding entities. This function would typically be used
 * when writing out a file to be parsed with the markup parser.
 * Note that this function doesn't protect whitespace and line endings
 * from being processed according to the XML rules for normalization
 * of line endings and attribute values.
 * Note also that this function will produce character references in
 * the range of &#x1; ... &#x1f; for all control sequences
 * except for tabstop, newline and carriage return.  The character
 * references in this range are not valid XML 1.0, but they are
 * valid XML 1.1 and will be accepted by the GMarkup parser.
 */
export function markup_escape_text(text: string, length: number): string;
/**
 * Checks whether the allocator used by g_malloc() is the system's
 * malloc implementation. If it returns %TRUE memory allocated with
 * malloc() can be used interchangeable with memory allocated using g_mal
 * loc().
 * This function is useful for avoiding an extra copy of allocated memory
 *  returned
 * by a non-GLib-based API.
 */
export function mem_is_system_malloc(): boolean;
/**
 * GLib used to support some tools for memory profiling, but this
 * no longer works. There are many other useful tools for memory
 * profiling these days which can be used instead.
 */
export function mem_profile(): void;
/**
 * This function used to let you override the memory allocation function.
 * However, its use was incompatible with the use of global constructors
 * in GLib and GIO, because those use the GLib allocators before main is
 * reached. Therefore this function is now deprecated and is just a stub.
 */
export function mem_set_vtable(vtable: MemVTable): void;
/**
 * Allocates @byte_size bytes of memory, and copies @byte_size bytes into
 *  it
 * from @mem. If @mem is %NULL it returns %NULL.
 */
export function memdup(mem: object | null, byte_size: number): object | null;
/**
 * Create a directory if it doesn't already exist. Create intermediate
 * parent directories as needed, too.
 */
export function mkdir_with_parents(pathname: string, mode: number): number;
/**
 * Set the pointer at the specified location to %NULL.
 */
export function nullify_pointer(nullify_location: object): void;
/**
 * 
 */
export function number_parser_error_quark(): Quark;
/**
 * Prompts the user with
 * `[E]xit, [H]alt, show [S]tack trace or [P]roceed`.
 * This function is intended to be used for debugging use only.
 * The following example shows how it can be used together with
 * the g_log() functions.
 * |[<!-- language="C" -->
 * #include <glib.h>
 * static void
 * log_handler (const gchar   *log_domain,
 *              GLogLevelFlags log_level,
 *              const gchar   *message,
 *              gpointer       user_data)
 * {
 *   g_log_default_handler (log_domain, log_level, message, user_data);
 *   g_on_error_query (MY_PROGRAM_NAME);
 * }
 * int
 * main (int argc, char *argv[])
 * {
 *   g_log_set_handler (MY_LOG_DOMAIN,
 *                      G_LOG_LEVEL_WARNING |
 *                      G_LOG_LEVEL_ERROR |
 *                      G_LOG_LEVEL_CRITICAL,
 *                      log_handler,
 *                      NULL);
 *   ...
 * ]|
 * If "[E]xit" is selected, the application terminates with a call
 * to _exit(0).
 * If "[S]tack" trace is selected, g_on_error_stack_trace() is called.
 * This invokes gdb, which attaches to the current process and shows
 * a stack trace. The prompt is then shown again.
 * If "[P]roceed" is selected, the function returns.
 * This function may cause different actions on non-UNIX platforms.
 * On Windows consider using the `G_DEBUGGER` environment
 * variable (see [Running GLib Applications](glib-running.html)) and
 * calling g_on_error_stack_trace() instead.
 */
export function on_error_query(prg_name: string): void;
/**
 * Invokes gdb, which attaches to the current process and shows a
 * stack trace. Called by g_on_error_query() when the "[S]tack trace"
 * option is selected. You can get the current process's program name
 * with g_get_prgname(), assuming that you have called gtk_init() or
 * gdk_init().
 * This function may cause different actions on non-UNIX platforms.
 * When running on Windows, this function is *not* called by
 * g_on_error_query(). If called directly, it will raise an
 * exception, which will crash the program. If the `G_DEBUGGER` environme
 * nt
 * variable is set, a debugger will be invoked to attach and
 * handle that exception (see [Running GLib Applications](glib-running.ht
 * ml)).
 */
export function on_error_stack_trace(prg_name: string): void;
/**
 * Function to be called when starting a critical initialization
 * section. The argument @location must point to a static
 * 0-initialized variable that will be set to a value other than 0 at
 * the end of the initialization section. In combination with
 * g_once_init_leave() and the unique address @value_location, it can
 * be ensured that an initialization section will be executed only once
 * during a program's life time, and that concurrent threads are
 * blocked until initialization completed. To be used in constructs
 * like this:
 * |[<!-- language="C" -->
 *   static gsize initialization_value = 0;
 *   if (g_once_init_enter (&initialization_value))
 *     {
 *       gsize setup_value = 42; // initialization code here
 *       g_once_init_leave (&initialization_value, setup_value);
 *     }
 *   // use initialization_value here
 * ]|
 */
export function once_init_enter(location: object): boolean;
/**
 * Counterpart to g_once_init_enter(). Expects a location of a static
 * 0-initialized initialization variable, and an initialization value
 * other than 0. Sets the variable to the initialization value, and
 * releases concurrent threads blocking in g_once_init_enter() on this
 * initialization variable.
 */
export function once_init_leave(location: object, result: number): void;
/**
 * 
 */
export function option_error_quark(): Quark;
/**
 * Parses a string containing debugging options
 * into a %guint containing bit flags. This is used
 * within GDK and GTK+ to parse the debug options passed on the
 * command line or through environment variables.
 * If @string is equal to "all", all flags are set. Any flags
 * specified along with "all" in @string are inverted; thus,
 * "all,foo,bar" or "foo,bar,all" sets all flags except those
 * corresponding to "foo" and "bar".
 * If @string is equal to "help", all the available keys in @keys
 * are printed out to standard error.
 */
export function parse_debug_string(string: string | null, keys: DebugKey[], nkeys: number): number;
/**
 * Gets the last component of the filename.
 * If @file_name ends with a directory separator it gets the component
 * before the last slash. If @file_name consists only of directory
 * separators (and on Windows, possibly a drive letter), a single
 * separator is returned. If @file_name is empty, it gets ".".
 */
export function path_get_basename(file_name: string): string;
/**
 * Gets the directory components of a file name. For example, the directo
 * ry
 * component of `/usr/bin/test` is `/usr/bin`. The directory component of
 *  `/`
 * is `/`.
 * If the file name has no directory components "." is returned.
 * The returned string should be freed when no longer needed.
 */
export function path_get_dirname(file_name: string): string;
/**
 * Returns %TRUE if the given @file_name is an absolute file name.
 * Note that this is a somewhat vague concept on Windows.
 * On POSIX systems, an absolute file name is well-defined. It always
 * starts from the single root directory. For example "/usr/local".
 * On Windows, the concepts of current drive and drive-specific
 * current directory introduce vagueness. This function interprets as
 * an absolute file name one that either begins with a directory
 * separator such as "\Users\tml" or begins with the root on a drive,
 * for example "C:\Windows". The first case also includes UNC paths
 * such as "\\\\myserver\docs\foo". In all cases, either slashes or
 * backslashes are accepted.
 * Note that a file name relative to the current drive root does not
 * truly specify a file uniquely over time and across processes, as
 * the current drive is a per-process value and can be changed.
 * File names relative the current directory on some specific drive,
 * such as "D:foo/bar", are not interpreted as absolute by this
 * function, but they obviously are not relative to the normal current
 * directory as returned by getcwd() or g_get_current_dir()
 * either. Such paths should be avoided, or need to be handled using
 * Windows-specific code.
 */
export function path_is_absolute(file_name: string): boolean;
/**
 * Returns a pointer into @file_name after the root component,
 * i.e. after the "/" in UNIX or "C:\" under Windows. If @file_name
 * is not an absolute path it returns %NULL.
 */
export function path_skip_root(file_name: string): string | null;
/**
 * Matches a string against a compiled pattern. Passing the correct
 * length of the string given is mandatory. The reversed string can be
 * omitted by passing %NULL, this is more efficient if the reversed
 * version of the string to be matched is not at hand, as
 * g_pattern_match() will only construct it if the compiled pattern
 * requires reverse matches.
 * Note that, if the user code will (possibly) match a string against a
 * multitude of patterns containing wildcards, chances are high that
 * some patterns will require a reversed string. In this case, it's
 * more efficient to provide the reversed string to avoid multiple
 * constructions thereof in the various calls to g_pattern_match().
 * Note also that the reverse of a UTF-8 encoded string can in general
 * not be obtained by g_strreverse(). This works only if the string
 * does not contain any multibyte characters. GLib offers the
 * g_utf8_strreverse() function to reverse UTF-8 encoded strings.
 */
export function pattern_match(pspec: PatternSpec, string_length: number, string: string, string_reversed: string | null): boolean;
/**
 * Matches a string against a pattern given as a string. If this
 * function is to be called in a loop, it's more efficient to compile
 * the pattern once with g_pattern_spec_new() and call
 * g_pattern_match_string() repeatedly.
 */
export function pattern_match_simple(pattern: string, string: string): boolean;
/**
 * Matches a string against a compiled pattern. If the string is to be
 * matched against more than one pattern, consider using
 * g_pattern_match() instead while supplying the reversed string.
 */
export function pattern_match_string(pspec: PatternSpec, string: string): boolean;
/**
 * This is equivalent to g_bit_lock, but working on pointers (or other
 * pointer-sized values).
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 */
export function pointer_bit_lock(address: object, lock_bit: number): void;
/**
 * This is equivalent to g_bit_trylock, but working on pointers (or
 * other pointer-sized values).
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 */
export function pointer_bit_trylock(address: object, lock_bit: number): boolean;
/**
 * This is equivalent to g_bit_unlock, but working on pointers (or other
 * pointer-sized values).
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 */
export function pointer_bit_unlock(address: object, lock_bit: number): void;
/**
 * Polls @fds, as with the poll() system call, but portably. (On
 * systems that don't have poll(), it is emulated using select().)
 * This is used internally by #GMainContext, but it can be called
 * directly if you need to block until a file descriptor is ready, but
 * don't want to run the full main loop.
 * Each element of @fds is a #GPollFD describing a single file
 * descriptor to poll. The @fd field indicates the file descriptor,
 * and the @events field indicates the events to poll for. On return,
 * the @revents fields will be filled with the events that actually
 * occurred.
 * On POSIX systems, the file descriptors in @fds can be any sort of
 * file descriptor, but the situation is much more complicated on
 * Windows. If you need to use g_poll() in code that has to run on
 * Windows, the easiest solution is to construct all of your
 * #GPollFDs with g_io_channel_win32_make_pollfd().
 */
export function poll(fds: PollFD, nfds: number, timeout: number): number;
/**
 * If @dest is %NULL, free @src; otherwise, moves @src into *@dest.
 * The error variable @dest points to must be %NULL.
 * @src must be non-%NULL.
 * Note that @src is no longer valid after this call. If you want
 * to keep using the same GError*, you need to set it to %NULL
 * after calling this function on it.
 */
export function propagate_error(src: Error): [Error | null];
/**
 * Gets the #GQuark identifying the given (static) string. If the
 * string does not currently have an associated #GQuark, a new #GQuark
 * is created, linked to the given string.
 * Note that this function is identical to g_quark_from_string() except
 * that if a new #GQuark is created the string itself is used rather
 * than a copy. This saves memory, but can only be used if the string
 * will continue to exist until the program terminates. It can be used
 * with statically allocated strings in the main program, but not with
 * statically allocated memory in dynamically loaded modules, if you
 * expect to ever unload the module again (e.g. do not use this
 * function in GTK+ theme engines).
 */
export function quark_from_static_string(string: string | null): Quark;
/**
 * Gets the #GQuark identifying the given string. If the string does
 * not currently have an associated #GQuark, a new #GQuark is created,
 * using a copy of the string.
 */
export function quark_from_string(string: string | null): Quark;
/**
 * Gets the string associated with the given #GQuark.
 */
export function quark_to_string(quark: Quark): string;
/**
 * Gets the #GQuark associated with the given string, or 0 if string is
 * %NULL or it has no associated #GQuark.
 * If you want the GQuark to be created if it doesn't already exist,
 * use g_quark_from_string() or g_quark_from_static_string().
 */
export function quark_try_string(string: string | null): Quark;
/**
 * Returns a random #gdouble equally distributed over the range [0..1).
 */
export function random_double(): number;
/**
 * Returns a random #gdouble equally distributed over the range
 * [@begin..@end).
 */
export function random_double_range(begin: number, end: number): number;
/**
 * Return a random #guint32 equally distributed over the range
 * [0..2^32-1].
 */
export function random_int(): number;
/**
 * Returns a random #gint32 equally distributed over the range
 * [@begin..@end-1].
 */
export function random_int_range(begin: number, end: number): number;
/**
 * Sets the seed for the global random number generator, which is used
 * by the g_random_* functions, to @seed.
 */
export function random_set_seed(seed: number): void;
/**
 * Acquires a reference on the data pointed by @mem_block.
 */
export function rc_box_acquire(mem_block: object): object;
/**
 * Allocates @block_size bytes of memory, and adds reference
 * counting semantics to it.
 * The data will be freed when its reference count drops to
 * zero.
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 */
export function rc_box_alloc(block_size: number): object;
/**
 * Allocates @block_size bytes of memory, and adds reference
 * counting semantics to it.
 * The contents of the returned data is set to zero.
 * The data will be freed when its reference count drops to
 * zero.
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 */
export function rc_box_alloc0(block_size: number): object;
/**
 * Allocates a new block of data with reference counting
 * semantics, and copies @block_size bytes of @mem_block
 * into it.
 */
export function rc_box_dup(block_size: number, mem_block: object): object;
/**
 * Retrieves the size of the reference counted data pointed by @mem_block
 * .
 */
export function rc_box_get_size(mem_block: object): number;
/**
 * Releases a reference on the data pointed by @mem_block.
 * If the reference was the last one, it will free the
 * resources allocated for @mem_block.
 */
export function rc_box_release(mem_block: object): void;
/**
 * Releases a reference on the data pointed by @mem_block.
 * If the reference was the last one, it will call @clear_func
 * to clear the contents of @mem_block, and then will free the
 * resources allocated for @mem_block.
 */
export function rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void;
/**
 * Reallocates the memory pointed to by @mem, so that it now has space fo
 * r
 * @n_bytes bytes of memory. It returns the new address of the memory, wh
 * ich may
 * have been moved. @mem may be %NULL, in which case it's considered to
 * have zero-length. @n_bytes may be 0, in which case %NULL will be retur
 * ned
 * and @mem will be freed unless it is %NULL.
 */
export function realloc(mem: object | null, n_bytes: number): object | null;
/**
 * This function is similar to g_realloc(), allocating (@n_blocks * @n_bl
 * ock_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null;
/**
 * Compares the current value of @rc with @val.
 */
export function ref_count_compare(rc: number, val: number): boolean;
/**
 * Decreases the reference count.
 */
export function ref_count_dec(rc: number): boolean;
/**
 * Increases the reference count.
 */
export function ref_count_inc(rc: number): void;
/**
 * Initializes a reference count variable.
 */
export function ref_count_init(rc: number): void;
/**
 * Acquires a reference on a string.
 */
export function ref_string_acquire(str: string): string;
/**
 * Retrieves the length of @str.
 */
export function ref_string_length(str: string): number;
/**
 * Creates a new reference counted string and copies the contents of @str
 * into it.
 */
export function ref_string_new(str: string): string;
/**
 * Creates a new reference counted string and copies the content of @str
 * into it.
 * If you call this function multiple times with the same @str, or with
 * the same contents of @str, it will return a new reference, instead of
 * creating a new string.
 */
export function ref_string_new_intern(str: string): string;
/**
 * Creates a new reference counted string and copies the contents of @str
 * into it, up to @len bytes.
 * Since this function does not stop at nul bytes, it is the caller's
 * responsibility to ensure that @str has at least @len addressable bytes
 * .
 */
export function ref_string_new_len(str: string, len: number): string;
/**
 * Releases a reference on a string; if it was the last reference, the
 * resources allocated by the string are freed as well.
 */
export function ref_string_release(str: string): void;
/**
 * Checks whether @replacement is a valid replacement string
 * (see g_regex_replace()), i.e. that all escape sequences in
 * it are valid.
 * If @has_references is not %NULL then @replacement is checked
 * for pattern references. For instance, replacement text 'foo\n'
 * does not contain references and may be evaluated without information
 * about actual match, but '\0\1' (whole match followed by first
 * subpattern) requires valid #GMatchInfo object.
 */
export function regex_check_replacement(replacement: string): [boolean, boolean | null];
/**
 * 
 */
export function regex_error_quark(): Quark;
/**
 * Escapes the nul characters in @string to "\x00".  It can be used
 * to compile a regex with embedded nul characters.
 * For completeness, @length can be -1 for a nul-terminated string.
 * In this case the output string will be of course equal to @string.
 */
export function regex_escape_nul(string: string, length: number): string;
/**
 * Escapes the special characters used for regular expressions
 * in @string, for instance "a.b*c" becomes "a\.b\*c". This
 * function is useful to dynamically generate regular expressions.
 * @string can contain nul characters that are replaced with "\0",
 * in this case remember to specify the correct length of @string
 * in @length.
 */
export function regex_escape_string(string: string[], length: number): string;
/**
 * Scans for a match in @string for @pattern.
 * This function is equivalent to g_regex_match() but it does not
 * require to compile the pattern with g_regex_new(), avoiding some
 * lines of code when you need just to do a match without extracting
 * substrings, capture counts, and so on.
 * If this function is to be called on the same @pattern more than
 * once, it's more efficient to compile the pattern once with
 * g_regex_new() and then use g_regex_match().
 */
export function regex_match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean;
/**
 * Breaks the string on the pattern, and returns an array of
 * the tokens. If the pattern contains capturing parentheses,
 * then the text for each of the substrings will also be returned.
 * If the pattern does not match anywhere in the string, then the
 * whole string is returned as the first token.
 * This function is equivalent to g_regex_split() but it does
 * not require to compile the pattern with g_regex_new(), avoiding
 * some lines of code when you need just to do a split without
 * extracting substrings, capture counts, and so on.
 * If this function is to be called on the same @pattern more than
 * once, it's more efficient to compile the pattern once with
 * g_regex_new() and then use g_regex_split().
 * As a special case, the result of splitting the empty string ""
 * is an empty vector, not a vector containing a single string.
 * The reason for this special case is that being able to represent
 * a empty vector is typically more useful than consistent handling
 * of empty elements. If you do need to represent empty elements,
 * you'll need to check for the empty string before calling this
 * function.
 * A pattern that can match empty strings splits @string into
 * separate characters wherever it matches the empty string between
 * characters. For example splitting "ab c" using as a separator
 * "\s*", you will get "a", "b" and "c".
 */
export function regex_split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[];
/**
 * Resets the cache used for g_get_user_special_dir(), so
 * that the latest on-disk version is used. Call this only
 * if you just changed the data on disk yourself.
 * Due to thread safety issues this may cause leaking of strings
 * that were previously returned from g_get_user_special_dir()
 * that can't be freed. We ensure to only leak the data for
 * the directories that actually changed value though.
 */
export function reload_user_special_dirs_cache(): void;
/**
 * A wrapper for the POSIX rmdir() function. The rmdir() function
 * deletes a directory from the filesystem.
 * See your C library manual for more details about how rmdir() works
 * on your system.
 */
export function rmdir(filename: string): number;
/**
 * Returns the data that @iter points to.
 */
export function sequence_get(iter: SequenceIter): object | null;
/**
 * Inserts a new item just before the item pointed to by @iter.
 */
export function sequence_insert_before(iter: SequenceIter, data: object | null): SequenceIter;
/**
 * Moves the item pointed to by @src to the position indicated by @dest.
 * After calling this function @dest will point to the position immediate
 * ly
 * after @src. It is allowed for @src and @dest to point into different
 * sequences.
 */
export function sequence_move(src: SequenceIter, dest: SequenceIter): void;
/**
 * Inserts the (@begin, @end) range at the destination pointed to by @des
 * t.
 * The @begin and @end iters must point into the same sequence. It is
 * allowed for @dest to point to a different sequence than the one pointe
 * d
 * into by @begin and @end.
 * If @dest is %NULL, the range indicated by @begin and @end is
 * removed from the sequence. If @dest points to a place within
 * the (@begin, @end) range, the range does not move.
 */
export function sequence_move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
/**
 * Finds an iterator somewhere in the range (@begin, @end). This
 * iterator will be close to the middle of the range, but is not
 * guaranteed to be exactly in the middle.
 * The @begin and @end iterators must both point to the same sequence
 * and @begin must come before or be equal to @end in the sequence.
 */
export function sequence_range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
/**
 * Removes the item pointed to by @iter. It is an error to pass the
 * end iterator to this function.
 * If the sequence has a data destroy function associated with it, this
 * function is called on the data for the removed item.
 */
export function sequence_remove(iter: SequenceIter): void;
/**
 * Removes all items in the (@begin, @end) range.
 * If the sequence has a data destroy function associated with it, this
 * function is called on the data for the removed items.
 */
export function sequence_remove_range(begin: SequenceIter, end: SequenceIter): void;
/**
 * Changes the data for the item pointed to by @iter to be @data. If
 * the sequence has a data destroy function associated with it, that
 * function is called on the existing data that @iter pointed to.
 */
export function sequence_set(iter: SequenceIter, data: object | null): void;
/**
 * Swaps the items pointed to by @a and @b. It is allowed for @a and @b
 * to point into difference sequences.
 */
export function sequence_swap(a: SequenceIter, b: SequenceIter): void;
/**
 * Sets a human-readable name for the application. This name should be
 * localized if possible, and is intended for display to the user.
 * Contrast with g_set_prgname(), which sets a non-localized name.
 * g_set_prgname() will be called automatically by gtk_init(),
 * but g_set_application_name() will not.
 * Note that for thread safety reasons, this function can only
 * be called once.
 * The application name will be used in contexts such as error messages,
 * or when displaying an application's name in the task list.
 */
export function set_application_name(application_name: string): void;
/**
 * Does nothing if @err is %NULL; if @err is non-%NULL, then *@err
 * must be %NULL. A new #GError is created and assigned to *@err.
 * Unlike g_set_error(), @message is not a printf()-style format string.
 * Use this function if @message contains text you don't have control ove
 * r,
 * that could include printf() escape sequences.
 */
export function set_error_literal(domain: Quark, code: number, message: string): [Error | null];
/**
 * Sets the name of the program. This name should not be localized,
 * in contrast to g_set_application_name().
 * If you are using #GApplication the program name is set in
 * g_application_run(). In case of GDK or GTK+ it is set in
 * gdk_init(), which is called by gtk_init() and the
 * #GtkApplication::startup handler. The program name is found by
 * taking the last component of @argv[0].
 * Note that for thread-safety reasons this function can only be called o
 * nce.
 */
export function set_prgname(prgname: string): void;
/**
 * Sets an environment variable. On UNIX, both the variable's name and
 * value can be arbitrary byte strings, except that the variable's name
 * cannot contain '='. On Windows, they should be in UTF-8.
 * Note that on some systems, when variables are overwritten, the memory
 * used for the previous variables and its value isn't reclaimed.
 * You should be mindful of the fact that environment variable handling
 * in UNIX is not thread-safe, and your program may crash if one thread
 * calls g_setenv() while another thread is calling getenv(). (And note
 * that many functions, such as gettext(), call getenv() internally.)
 * This function is only safe to use at the very start of your program,
 * before creating any other threads (or creating objects that create
 * worker threads of their own).
 * If you need to set up the environment for a child process, you can
 * use g_get_environ() to get an environment array, modify that with
 * g_environ_setenv() and g_environ_unsetenv(), and then pass that
 * array directly to execvpe(), g_spawn_async(), or the like.
 */
export function setenv(variable: string, value: string, overwrite: boolean): boolean;
/**
 * 
 */
export function shell_error_quark(): Quark;
/**
 * Parses a command line into an argument vector, in much the same way
 * the shell would, but without many of the expansions the shell would
 * perform (variable expansion, globs, operators, filename expansion,
 * etc. are not supported). The results are defined to be the same as
 * those you would get from a UNIX98 /bin/sh, as long as the input
 * contains none of the unsupported shell expansions. If the input
 * does contain such expansions, they are passed through
 * literally. Possible errors are those from the #G_SHELL_ERROR
 * domain. Free the returned vector with g_strfreev().
 */
export function shell_parse_argv(command_line: string): [boolean, number | null,string[] | null];
/**
 * Quotes a string so that the shell (/bin/sh) will interpret the
 * quoted string to mean @unquoted_string. If you pass a filename to
 * the shell, for example, you should first quote it with this
 * function.  The return value must be freed with g_free(). The
 * quoting style used is undefined (single or double quotes may be
 * used).
 */
export function shell_quote(unquoted_string: string): string;
/**
 * Unquotes a string as the shell (/bin/sh) would. Only handles
 * quotes; if a string contains file globs, arithmetic operators,
 * variables, backticks, redirections, or other special-to-the-shell
 * features, the result will be different from the result a real shell
 * would produce (the variables, backticks, etc. will be passed
 * through literally instead of being expanded). This function is
 * guaranteed to succeed if applied to the result of
 * g_shell_quote(). If it fails, it returns %NULL and sets the
 * error. The @quoted_string need not actually contain quoted or
 * escaped text; g_shell_unquote() simply goes through the string and
 * unquotes/unescapes anything that the shell would. Both single and
 * double quotes are handled, as are escapes including escaped
 * newlines. The return value must be freed with g_free(). Possible
 * errors are in the #G_SHELL_ERROR domain.
 * Shell quoting rules are a bit strange. Single quotes preserve the
 * literal string exactly. escape sequences are not allowed; not even
 * \' - if you want a ' in the quoted text, you have to do something
 * like 'foo'\''bar'.  Double quotes allow $, `, ", \, and newline to
 * be escaped with backslash. Otherwise double quotes preserve things
 * literally.
 */
export function shell_unquote(quoted_string: string): string;
/**
 * Allocates a block of memory from the slice allocator.
 * The block address handed out can be expected to be aligned
 * to at least 1 * sizeof (void*),
 * though in general slices are 2 * sizeof (void*) bytes aligned,
 * if a malloc() fallback implementation is used instead,
 * the alignment may be reduced in a libc dependent fashion.
 * Note that the underlying slice allocation mechanism can
 * be changed with the [`G_SLICE=always-malloc`][G_SLICE]
 * environment variable.
 */
export function slice_alloc(block_size: number): object | null;
/**
 * Allocates a block of memory via g_slice_alloc() and initializes
 * the returned memory to 0. Note that the underlying slice allocation
 * mechanism can be changed with the [`G_SLICE=always-malloc`][G_SLICE]
 * environment variable.
 */
export function slice_alloc0(block_size: number): object | null;
/**
 * Allocates a block of memory from the slice allocator
 * and copies @block_size bytes into it from @mem_block.
 * @mem_block must be non-%NULL if @block_size is non-zero.
 */
export function slice_copy(block_size: number, mem_block: object | null): object | null;
/**
 * Frees a block of memory.
 * The memory must have been allocated via g_slice_alloc() or
 * g_slice_alloc0() and the @block_size has to match the size
 * specified upon allocation. Note that the exact release behaviour
 * can be changed with the [`G_DEBUG=gc-friendly`][G_DEBUG] environment
 * variable, also see [`G_SLICE`][G_SLICE] for related debugging options.
 * If @mem_block is %NULL, this function does nothing.
 */
export function slice_free1(block_size: number, mem_block: object | null): void;
/**
 * Frees a linked list of memory blocks of structure type @type.
 * The memory blocks must be equal-sized, allocated via
 * g_slice_alloc() or g_slice_alloc0() and linked together by a
 * @next pointer (similar to #GSList). The offset of the @next
 * field in each block is passed as third argument.
 * Note that the exact release behaviour can be changed with the
 * [`G_DEBUG=gc-friendly`][G_DEBUG] environment variable, also see
 * [`G_SLICE`][G_SLICE] for related debugging options.
 * If @mem_chain is %NULL, this function does nothing.
 */
export function slice_free_chain_with_offset(block_size: number, mem_chain: object | null, next_offset: number): void;
/**
 * 
 */
export function slice_get_config(ckey: SliceConfig): number;
/**
 * 
 */
export function slice_get_config_state(ckey: SliceConfig, address: number, n_values: number): number;
/**
 * 
 */
export function slice_set_config(ckey: SliceConfig, value: number): void;
/**
 * Removes the source with the given ID from the default main context. Yo
 * u must
 * use g_source_destroy() for sources added to a non-default main context
 * .
 * The ID of a #GSource is given by g_source_get_id(), or will be
 * returned by the functions g_source_attach(), g_idle_add(),
 * g_idle_add_full(), g_timeout_add(), g_timeout_add_full(),
 * g_child_watch_add(), g_child_watch_add_full(), g_io_add_watch(), and
 * g_io_add_watch_full().
 * It is a programmer error to attempt to remove a non-existent source.
 * More specifically: source IDs can be reissued after a source has been
 * destroyed and therefore it is never valid to use this function with a
 * source ID which may have already been removed.  An example is when
 * scheduling an idle to run in another thread with g_idle_add(): the
 * idle may already have run and been removed by the time this function
 * is called on its (now invalid) source ID.  This source ID may have
 * been reissued, leading to the operation being performed against the
 * wrong source.
 */
export function source_remove(tag: number): boolean;
/**
 * Removes a source from the default main loop context given the
 * source functions and user data. If multiple sources exist with the
 * same source functions and user data, only one will be destroyed.
 */
export function source_remove_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): boolean;
/**
 * Removes a source from the default main loop context given the user
 * data for the callback. If multiple sources exist with the same user
 * data, only one will be destroyed.
 */
export function source_remove_by_user_data(user_data: object | null): boolean;
/**
 * Sets the name of a source using its ID.
 * This is a convenience utility to set source names from the return
 * value of g_idle_add(), g_timeout_add(), etc.
 * It is a programmer error to attempt to set the name of a non-existent
 * source.
 * More specifically: source IDs can be reissued after a source has been
 * destroyed and therefore it is never valid to use this function with a
 * source ID which may have already been removed.  An example is when
 * scheduling an idle to run in another thread with g_idle_add(): the
 * idle may already have run and been removed by the time this function
 * is called on its (now invalid) source ID.  This source ID may have
 * been reissued, leading to the operation being performed against the
 * wrong source.
 */
export function source_set_name_by_id(tag: number, name: string): void;
/**
 * Gets the smallest prime number from a built-in array of primes which
 * is larger than @num. This is used within GLib to calculate the optimum
 * size of a #GHashTable.
 * The built-in array of primes ranges from 11 to 13845163 such that
 * each prime is approximately 1.5-2 times the previous prime.
 */
export function spaced_primes_closest(num: number): number;
/**
 * See g_spawn_async_with_pipes() for a full description; this function
 * simply calls the g_spawn_async_with_pipes() without any pipes.
 * You should call g_spawn_close_pid() on the returned child process
 * reference when you don't need it any more.
 * If you are writing a GTK+ application, and the program you are spawnin
 * g is a
 * graphical application too, then to ensure that the spawned program ope
 * ns its
 * windows on the right screen, you may want to use #GdkAppLaunchContext,
 * #GAppLaunchContext, or set the %DISPLAY environment variable.
 * Note that the returned @child_pid on Windows is a handle to the child
 * process and not its identifier. Process handles and process identifier
 * s
 * are different concepts on Windows.
 */
export function spawn_async(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null): [boolean, Pid | null];
/**
 * Identical to g_spawn_async_with_pipes() but instead of
 * creating pipes for the stdin/stdout/stderr, you can pass existing
 * file descriptors into this function through the @stdin_fd,
 * @stdout_fd and @stderr_fd parameters. The following @flags
 * also have their behaviour slightly tweaked as a result:
 * %G_SPAWN_STDOUT_TO_DEV_NULL means that the child's standard output
 * will be discarded, instead of going to the same location as the parent
 * 's
 * standard output. If you use this flag, @standard_output must be -1.
 * %G_SPAWN_STDERR_TO_DEV_NULL means that the child's standard error
 * will be discarded, instead of going to the same location as the parent
 * 's
 * standard error. If you use this flag, @standard_error must be -1.
 * %G_SPAWN_CHILD_INHERITS_STDIN means that the child will inherit the pa
 * rent's
 * standard input (by default, the child's standard input is attached to
 * /dev/null). If you use this flag, @standard_input must be -1.
 * It is valid to pass the same fd in multiple parameters (e.g. you can p
 * ass
 * a single fd for both stdout and stderr).
 */
export function spawn_async_with_fds(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): [boolean, Pid | null];
/**
 * Executes a child program asynchronously (your program will not
 * block waiting for the child to exit). The child program is
 * specified by the only argument that must be provided, @argv.
 * @argv should be a %NULL-terminated array of strings, to be passed
 * as the argument vector for the child. The first string in @argv
 * is of course the name of the program to execute. By default, the
 * name of the program must be a full path. If @flags contains the
 * %G_SPAWN_SEARCH_PATH flag, the `PATH` environment variable is
 * used to search for the executable. If @flags contains the
 * %G_SPAWN_SEARCH_PATH_FROM_ENVP flag, the `PATH` variable from
 * @envp is used to search for the executable. If both the
 * %G_SPAWN_SEARCH_PATH and %G_SPAWN_SEARCH_PATH_FROM_ENVP flags
 * are set, the `PATH` variable from @envp takes precedence over
 * the environment variable.
 * If the program name is not a full path and %G_SPAWN_SEARCH_PATH flag i
 * s not
 * used, then the program will be run from the current directory (or
 * @working_directory, if specified); this might be unexpected or even
 * dangerous in some cases when the current directory is world-writable.
 * On Windows, note that all the string or string vector arguments to
 * this function and the other g_spawn*() functions are in UTF-8, the
 * GLib file name encoding. Unicode characters that are not part of
 * the system codepage passed in these arguments will be correctly
 * available in the spawned program only if it uses wide character API
 * to retrieve its command line. For C programs built with Microsoft's
 * tools it is enough to make the program have a wmain() instead of
 * main(). wmain() has a wide character argument vector as parameter.
 * At least currently, mingw doesn't support wmain(), so if you use
 * mingw to develop the spawned program, it should call
 * g_win32_get_command_line() to get arguments in UTF-8.
 * On Windows the low-level child process creation API CreateProcess()
 * doesn't use argument vectors, but a command line. The C runtime
 * library's spawn*() family of functions (which g_spawn_async_with_pipes
 * ()
 * eventually calls) paste the argument vector elements together into
 * a command line, and the C runtime startup code does a corresponding
 * reconstruction of an argument vector from the command line, to be
 * passed to main(). Complications arise when you have argument vector
 * elements that contain spaces or double quotes. The `spawn*()` function
 * s
 * don't do any quoting or escaping, but on the other hand the startup
 * code does do unquoting and unescaping in order to enable receiving
 * arguments with embedded spaces or double quotes. To work around this
 * asymmetry, g_spawn_async_with_pipes() will do quoting and escaping on
 * argument vector elements that need it before calling the C runtime
 * spawn() function.
 * The returned @child_pid on Windows is a handle to the child
 * process, not its identifier. Process handles and process
 * identifiers are different concepts on Windows.
 * @envp is a %NULL-terminated array of strings, where each string
 * has the form `KEY=VALUE`. This will become the child's environment.
 * If @envp is %NULL, the child inherits its parent's environment.
 * @flags should be the bitwise OR of any flags you want to affect the
 * function's behaviour. The %G_SPAWN_DO_NOT_REAP_CHILD means that the
 * child will not automatically be reaped; you must use a child watch
 * (g_child_watch_add()) to be notified about the death of the child proc
 * ess,
 * otherwise it will stay around as a zombie process until this process e
 * xits.
 * Eventually you must call g_spawn_close_pid() on the @child_pid, in ord
 * er to
 * free resources which may be associated with the child process. (On Uni
 * x,
 * using a child watch is equivalent to calling waitpid() or handling
 * the %SIGCHLD signal manually. On Windows, calling g_spawn_close_pid()
 * is equivalent to calling CloseHandle() on the process handle returned
 * in @child_pid). See g_child_watch_add().
 * Open UNIX file descriptors marked as `FD_CLOEXEC` will be automaticall
 * y
 * closed in the child process. %G_SPAWN_LEAVE_DESCRIPTORS_OPEN means tha
 * t
 * other open file descriptors will be inherited by the child; otherwise 
 * all
 * descriptors except stdin/stdout/stderr will be closed before calling e
 * xec()
 * in the child. %G_SPAWN_SEARCH_PATH means that @argv[0] need not be an
 * absolute path, it will be looked for in the `PATH` environment
 * variable. %G_SPAWN_SEARCH_PATH_FROM_ENVP means need not be an
 * absolute path, it will be looked for in the `PATH` variable from
 * @envp. If both %G_SPAWN_SEARCH_PATH and %G_SPAWN_SEARCH_PATH_FROM_ENVP
 * are used, the value from @envp takes precedence over the environment.
 * %G_SPAWN_STDOUT_TO_DEV_NULL means that the child's standard output
 * will be discarded, instead of going to the same location as the parent
 * 's
 * standard output. If you use this flag, @standard_output must be %NULL.
 * %G_SPAWN_STDERR_TO_DEV_NULL means that the child's standard error
 * will be discarded, instead of going to the same location as the parent
 * 's
 * standard error. If you use this flag, @standard_error must be %NULL.
 * %G_SPAWN_CHILD_INHERITS_STDIN means that the child will inherit the pa
 * rent's
 * standard input (by default, the child's standard input is attached to
 * `/dev/null`). If you use this flag, @standard_input must be %NULL.
 * %G_SPAWN_FILE_AND_ARGV_ZERO means that the first element of @argv is
 * the file to execute, while the remaining elements are the actual
 * argument vector to pass to the file. Normally g_spawn_async_with_pipes
 * ()
 * uses @argv[0] as the file to execute, and passes all of @argv to the c
 * hild.
 * @child_setup and @user_data are a function and user data. On POSIX
 * platforms, the function is called in the child after GLib has
 * performed all the setup it plans to perform (including creating
 * pipes, closing file descriptors, etc.) but before calling exec().
 * That is, @child_setup is called just before calling exec() in the
 * child. Obviously actions taken in this function will only affect
 * the child, not the parent.
 * On Windows, there is no separate fork() and exec() functionality.
 * Child processes are created and run with a single API call,
 * CreateProcess(). There is no sensible thing @child_setup
 * could be used for on Windows so it is ignored and not called.
 * If non-%NULL, @child_pid will on Unix be filled with the child's
 * process ID. You can use the process ID to send signals to the child,
 * or to use g_child_watch_add() (or waitpid()) if you specified the
 * %G_SPAWN_DO_NOT_REAP_CHILD flag. On Windows, @child_pid will be
 * filled with a handle to the child process only if you specified the
 * %G_SPAWN_DO_NOT_REAP_CHILD flag. You can then access the child
 * process using the Win32 API, for example wait for its termination
 * with the WaitFor*() functions, or examine its exit code with
 * GetExitCodeProcess(). You should close the handle with CloseHandle()
 * or g_spawn_close_pid() when you no longer need it.
 * If non-%NULL, the @standard_input, @standard_output, @standard_error
 * locations will be filled with file descriptors for writing to the chil
 * d's
 * standard input or reading from its standard output or standard error.
 * The caller of g_spawn_async_with_pipes() must close these file descrip
 * tors
 * when they are no longer in use. If these parameters are %NULL, the
 * corresponding pipe won't be created.
 * If @standard_input is %NULL, the child's standard input is attached to
 * `/dev/null` unless %G_SPAWN_CHILD_INHERITS_STDIN is set.
 * If @standard_error is NULL, the child's standard error goes to the sam
 * e
 * location as the parent's standard error unless %G_SPAWN_STDERR_TO_DEV_
 * NULL
 * is set.
 * If @standard_output is NULL, the child's standard output goes to the s
 * ame
 * location as the parent's standard output unless %G_SPAWN_STDOUT_TO_DEV
 * _NULL
 * is set.
 * @error can be %NULL to ignore errors, or non-%NULL to report errors.
 * If an error is set, the function returns %FALSE. Errors are reported
 * even if they occur in the child (for example if the executable in
 * @argv[0] is not found). Typically the `message` field of returned
 * errors should be displayed to users. Possible errors are those from
 * the #G_SPAWN_ERROR domain.
 * If an error occurs, @child_pid, @standard_input, @standard_output,
 * and @standard_error will not be filled with valid values.
 * If @child_pid is not %NULL and an error does not occur then the return
 * ed
 * process reference must be closed using g_spawn_close_pid().
 * On modern UNIX platforms, GLib can use an efficient process launching
 * codepath driven internally by posix_spawn(). This has the advantage of
 * avoiding the fork-time performance costs of cloning the parent process
 * address space, and avoiding associated memory overcommit checks that a
 * re
 * not relevant in the context of immediately executing a distinct proces
 * s.
 * This optimized codepath will be used provided that the following condi
 * tions
 * are met:
 * 1. %G_SPAWN_DO_NOT_REAP_CHILD is set
 * 2. %G_SPAWN_LEAVE_DESCRIPTORS_OPEN is set
 * 3. %G_SPAWN_SEARCH_PATH_FROM_ENVP is not set
 * 4. @working_directory is %NULL
 * 5. @child_setup is %NULL
 * 6. The program is of a recognised binary format, or has a shebang. Oth
 * erwise, GLib will have to execute the program through the shell, which
 *  is not done using the optimized codepath.
 * If you are writing a GTK+ application, and the program you are spawnin
 * g is a
 * graphical application too, then to ensure that the spawned program ope
 * ns its
 * windows on the right screen, you may want to use #GdkAppLaunchContext,
 * #GAppLaunchContext, or set the %DISPLAY environment variable.
 */
export function spawn_async_with_pipes(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null): [boolean, Pid | null,number | null,number | null,number | null];
/**
 * Set @error if @exit_status indicates the child exited abnormally
 * (e.g. with a nonzero exit code, or via a fatal signal).
 * The g_spawn_sync() and g_child_watch_add() family of APIs return an
 * exit status for subprocesses encoded in a platform-specific way.
 * On Unix, this is guaranteed to be in the same format waitpid() returns
 * ,
 * and on Windows it is guaranteed to be the result of GetExitCodeProcess
 * ().
 * Prior to the introduction of this function in GLib 2.34, interpreting
 * @exit_status required use of platform-specific APIs, which is problema
 * tic
 * for software using GLib as a cross-platform layer.
 * Additionally, many programs simply want to determine whether or not
 * the child exited successfully, and either propagate a #GError or
 * print a message to standard error. In that common case, this function
 * can be used. Note that the error message in @error will contain
 * human-readable information about the exit status.
 * The @domain and @code of @error have special semantics in the case
 * where the process has an "exit code", as opposed to being killed by
 * a signal. On Unix, this happens if WIFEXITED() would be true of
 * @exit_status. On Windows, it is always the case.
 * The special semantics are that the actual exit code will be the
 * code set in @error, and the domain will be %G_SPAWN_EXIT_ERROR.
 * This allows you to differentiate between different exit codes.
 * If the process was terminated by some means other than an exit
 * status, the domain will be %G_SPAWN_ERROR, and the code will be
 * %G_SPAWN_ERROR_FAILED.
 * This function just offers convenience; you can of course also check
 * the available platform via a macro such as %G_OS_UNIX, and use
 * WIFEXITED() and WEXITSTATUS() on @exit_status directly. Do not attempt
 * to scan or parse the error message string; it may be translated and/or
 * change in future versions of GLib.
 */
export function spawn_check_exit_status(exit_status: number): boolean;
/**
 * On some platforms, notably Windows, the #GPid type represents a resour
 * ce
 * which must be closed to prevent resource leaking. g_spawn_close_pid()
 * is provided for this purpose. It should be used on all platforms, even
 * though it doesn't do anything under UNIX.
 */
export function spawn_close_pid(pid: Pid): void;
/**
 * A simple version of g_spawn_async() that parses a command line with
 * g_shell_parse_argv() and passes it to g_spawn_async(). Runs a
 * command line in the background. Unlike g_spawn_async(), the
 * %G_SPAWN_SEARCH_PATH flag is enabled, other flags are not. Note
 * that %G_SPAWN_SEARCH_PATH can have security implications, so
 * consider using g_spawn_async() directly if appropriate. Possible
 * errors are those from g_shell_parse_argv() and g_spawn_async().
 * The same concerns on Windows apply as for g_spawn_command_line_sync().
 */
export function spawn_command_line_async(command_line: string): boolean;
/**
 * A simple version of g_spawn_sync() with little-used parameters
 * removed, taking a command line instead of an argument vector.  See
 * g_spawn_sync() for full details. @command_line will be parsed by
 * g_shell_parse_argv(). Unlike g_spawn_sync(), the %G_SPAWN_SEARCH_PATH 
 * flag
 * is enabled. Note that %G_SPAWN_SEARCH_PATH can have security
 * implications, so consider using g_spawn_sync() directly if
 * appropriate. Possible errors are those from g_spawn_sync() and those
 * from g_shell_parse_argv().
 * If @exit_status is non-%NULL, the platform-specific exit status of
 * the child is stored there; see the documentation of
 * g_spawn_check_exit_status() for how to use and interpret this.
 * On Windows, please note the implications of g_shell_parse_argv()
 * parsing @command_line. Parsing is done according to Unix shell rules, 
 * not
 * Windows command interpreter rules.
 * Space is a separator, and backslashes are
 * special. Thus you cannot simply pass a @command_line containing
 * canonical Windows paths, like "c:\\program files\\app\\app.exe", as
 * the backslashes will be eaten, and the space will act as a
 * separator. You need to enclose such paths with single quotes, like
 * "'c:\\program files\\app\\app.exe' 'e:\\folder\\argument.txt'".
 */
export function spawn_command_line_sync(command_line: string): [boolean, number[] | null,number[] | null,number | null];
/**
 * 
 */
export function spawn_error_quark(): Quark;
/**
 * 
 */
export function spawn_exit_error_quark(): Quark;
/**
 * Executes a child synchronously (waits for the child to exit before ret
 * urning).
 * All output from the child is stored in @standard_output and @standard_
 * error,
 * if those parameters are non-%NULL. Note that you must set the
 * %G_SPAWN_STDOUT_TO_DEV_NULL and %G_SPAWN_STDERR_TO_DEV_NULL flags when
 * passing %NULL for @standard_output and @standard_error.
 * If @exit_status is non-%NULL, the platform-specific exit status of
 * the child is stored there; see the documentation of
 * g_spawn_check_exit_status() for how to use and interpret this.
 * Note that it is invalid to pass %G_SPAWN_DO_NOT_REAP_CHILD in
 * @flags, and on POSIX platforms, the same restrictions as for
 * g_child_watch_source_new() apply.
 * If an error occurs, no data is returned in @standard_output,
 * @standard_error, or @exit_status.
 * This function calls g_spawn_async_with_pipes() internally; see that
 * function for full details on the other parameters and details on
 * how these functions work on Windows.
 */
export function spawn_sync(working_directory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null): [boolean, number[] | null,number[] | null,number | null];
/**
 * Copies a nul-terminated string into the dest buffer, include the
 * trailing nul, and return a pointer to the trailing nul byte.
 * This is useful for concatenating multiple strings together
 * without having to repeatedly scan for the end.
 */
export function stpcpy(dest: string, src: string): string;
/**
 * Compares two strings for byte-by-byte equality and returns %TRUE
 * if they are equal. It can be passed to g_hash_table_new() as the
 * @key_equal_func parameter, when using non-%NULL strings as keys in a
 * #GHashTable.
 * This function is typically used for hash table comparisons, but can be
 *  used
 * for general purpose comparisons of non-%NULL strings. For a %NULL-safe
 *  string
 * comparison function, see g_strcmp0().
 */
export function str_equal(v1: object, v2: object): boolean;
/**
 * Looks whether the string @str begins with @prefix.
 */
export function str_has_prefix(str: string, prefix: string): boolean;
/**
 * Looks whether the string @str ends with @suffix.
 */
export function str_has_suffix(str: string, suffix: string): boolean;
/**
 * Converts a string to a hash value.
 * This function implements the widely used "djb" hash apparently
 * posted by Daniel Bernstein to comp.lang.c some time ago.  The 32
 * bit unsigned hash value starts at 5381 and for each byte 'c' in
 * the string, is updated: `hash = hash * 33 + c`. This function
 * uses the signed value of each byte.
 * It can be passed to g_hash_table_new() as the @hash_func parameter,
 * when using non-%NULL strings as keys in a #GHashTable.
 * Note that this function may not be a perfect fit for all use cases.
 * For example, it produces some hash collisions with strings as short
 * as 2.
 */
export function str_hash(v: object): number;
/**
 * Determines if a string is pure ASCII. A string is pure ASCII if it
 * contains no bytes with the high bit set.
 */
export function str_is_ascii(str: string): boolean;
/**
 * Checks if a search conducted for @search_term should match
 * @potential_hit.
 * This function calls g_str_tokenize_and_fold() on both
 * @search_term and @potential_hit.  ASCII alternates are never taken
 * for @search_term but will be taken for @potential_hit according to
 * the value of @accept_alternates.
 * A hit occurs when each folded token in @search_term is a prefix of a
 * folded token from @potential_hit.
 * Depending on how you're performing the search, it will typically be
 * faster to call g_str_tokenize_and_fold() on each string in
 * your corpus and build an index on the returned folded tokens, then
 * call g_str_tokenize_and_fold() on the search term and
 * perform lookups into that index.
 * As some examples, searching for ‘fred’ would match the potential hit
 * ‘Smith, Fred’ and also ‘Frédéric’.  Searching for ‘Fréd’ would match
 * ‘Frédéric’ but not ‘Frederic’ (due to the one-directional nature of
 * accent matching).  Searching ‘fo’ would match ‘Foo’ and ‘Bar Foo
 * Baz’, but not ‘SFO’ (because no word has ‘fo’ as a prefix).
 */
export function str_match_string(search_term: string, potential_hit: string, accept_alternates: boolean): boolean;
/**
 * Transliterate @str to plain ASCII.
 * For best results, @str should be in composed normalised form.
 * This function performs a reasonably good set of character
 * replacements.  The particular set of replacements that is done may
 * change by version or even by runtime environment.
 * If the source language of @str is known, it can used to improve the
 * accuracy of the translation by passing it as @from_locale.  It should
 * be a valid POSIX locale string (of the form
 * `language[_territory][.codeset][@modifier]`).
 * If @from_locale is %NULL then the current locale is used.
 * If you want to do translation for no specific locale, and you want it
 * to be done independently of the currently locale, specify `"C"` for
 * @from_locale.
 */
export function str_to_ascii(str: string, from_locale: string | null): string;
/**
 * Tokenises @string and performs folding on each token.
 * A token is a non-empty sequence of alphanumeric characters in the
 * source string, separated by non-alphanumeric characters.  An
 * "alphanumeric" character for this purpose is one that matches
 * g_unichar_isalnum() or g_unichar_ismark().
 * Each token is then (Unicode) normalised and case-folded.  If
 * @ascii_alternates is non-%NULL and some of the returned tokens
 * contain non-ASCII characters, ASCII alternatives will be generated.
 * The number of ASCII alternatives that are generated and the method
 * for doing so is unspecified, but @translit_locale (if specified) may
 * improve the transliteration if the language of the source string is
 * known.
 */
export function str_tokenize_and_fold(string: string, translit_locale: string | null): [string[], string[]];
/**
 * For each character in @string, if the character is not in @valid_chars
 * ,
 * replaces the character with @substitutor. Modifies @string in place,
 * and return @string itself, not a copy. The return value is to allow
 * nesting such as
 * |[<!-- language="C" -->
 *   g_ascii_strup (g_strcanon (str, "abc", '?'))
 * ]|
 */
export function strcanon(string: string, valid_chars: string, substitutor: number): string;
/**
 * A case-insensitive string comparison, corresponding to the standard
 * strcasecmp() function on platforms which support it.
 */
export function strcasecmp(s1: string, s2: string): number;
/**
 * Removes trailing whitespace from a string.
 * This function doesn't allocate or reallocate any memory;
 * it modifies @string in place. Therefore, it cannot be used
 * on statically allocated strings.
 * The pointer to @string is returned to allow the nesting of functions.
 * Also see g_strchug() and g_strstrip().
 */
export function strchomp(string: string): string;
/**
 * Removes leading whitespace from a string, by moving the rest
 * of the characters forward.
 * This function doesn't allocate or reallocate any memory;
 * it modifies @string in place. Therefore, it cannot be used on
 * statically allocated strings.
 * The pointer to @string is returned to allow the nesting of functions.
 * Also see g_strchomp() and g_strstrip().
 */
export function strchug(string: string): string;
/**
 * Compares @str1 and @str2 like strcmp(). Handles %NULL
 * gracefully by sorting it before non-%NULL strings.
 * Comparing two %NULL pointers returns 0.
 */
export function strcmp0(str1: string | null, str2: string | null): number;
/**
 * Replaces all escaped characters with their one byte equivalent.
 * This function does the reverse conversion of g_strescape().
 */
export function strcompress(source: string): string;
/**
 * Converts any delimiter characters in @string to @new_delimiter.
 * Any characters in @string which are found in @delimiters are
 * changed to the @new_delimiter character. Modifies @string in place,
 * and returns @string itself, not a copy. The return value is to
 * allow nesting such as
 * |[<!-- language="C" -->
 *   g_ascii_strup (g_strdelimit (str, "abc", '?'))
 * ]|
 */
export function strdelimit(string: string, delimiters: string | null, new_delimiter: number): string;
/**
 * Converts a string to lower case.
 */
export function strdown(string: string): string;
/**
 * Duplicates a string. If @str is %NULL it returns %NULL.
 * The returned string should be freed with g_free()
 * when no longer needed.
 */
export function strdup(str: string | null): string;
/**
 * Returns a string corresponding to the given error code, e.g. "no
 * such process". Unlike strerror(), this always returns a string in
 * UTF-8 encoding, and the pointer is guaranteed to remain valid for
 * the lifetime of the process.
 * Note that the string may be translated according to the current locale
 * .
 * The value of %errno will not be changed by this function. However, it 
 * may
 * be changed by intermediate function calls, so you should save its valu
 * e
 * as soon as the call returns:
 * |[
 *   int saved_errno;
 *   ret = read (blah);
 *   saved_errno = errno;
 *   g_strerror (saved_errno);
 * ]|
 */
export function strerror(errnum: number): string;
/**
 * Escapes the special characters '\b', '\f', '\n', '\r', '\t', '\v', '\'
 * and '"' in the string @source by inserting a '\' before
 * them. Additionally all characters in the range 0x01-0x1F (everything
 * below SPACE) and in the range 0x7F-0xFF (all non-ASCII chars) are
 * replaced with a '\' followed by their octal representation.
 * Characters supplied in @exceptions are not escaped.
 * g_strcompress() does the reverse conversion.
 */
export function strescape(source: string, exceptions: string | null): string;
/**
 * Frees a %NULL-terminated array of strings, as well as each
 * string it contains.
 * If @str_array is %NULL, this function simply returns.
 */
export function strfreev(str_array: string | null): void;
/**
 * Creates a new #GString, initialized with the given string.
 */
export function string_new(init: string | null): String;
/**
 * Creates a new #GString with @len bytes of the @init buffer.
 * Because a length is provided, @init need not be nul-terminated,
 * and can contain embedded nul bytes.
 * Since this function does not stop at nul bytes, it is the caller's
 * responsibility to ensure that @init has at least @len addressable
 * bytes.
 */
export function string_new_len(init: string, len: number): String;
/**
 * Creates a new #GString, with enough space for @dfl_size
 * bytes. This is useful if you are going to add a lot of
 * text to the string and don't want it to be reallocated
 * too often.
 */
export function string_sized_new(dfl_size: number): String;
/**
 * An auxiliary function for gettext() support (see Q_()).
 */
export function strip_context(msgid: string, msgval: string): string;
/**
 * Joins a number of strings together to form one long string, with the
 * optional @separator inserted between each of them. The returned string
 * should be freed with g_free().
 * If @str_array has no items, the return value will be an
 * empty string. If @str_array contains a single item, @separator will no
 * t
 * appear in the resulting string.
 */
export function strjoinv(separator: string | null, str_array: string): string;
/**
 * Portability wrapper that calls strlcat() on systems which have it,
 * and emulates it otherwise. Appends nul-terminated @src string to @dest
 * ,
 * guaranteeing nul-termination for @dest. The total size of @dest won't
 * exceed @dest_size.
 * At most @dest_size - 1 characters will be copied. Unlike strncat(),
 * @dest_size is the full size of dest, not the space left over. This
 * function does not allocate memory. It always nul-terminates (unless
 * @dest_size == 0 or there were no nul characters in the @dest_size
 * characters of dest to start with).
 * Caveat: this is supposedly a more secure alternative to strcat() or
 * strncat(), but for real security g_strconcat() is harder to mess up.
 */
export function strlcat(dest: string, src: string, dest_size: number): number;
/**
 * Portability wrapper that calls strlcpy() on systems which have it,
 * and emulates strlcpy() otherwise. Copies @src to @dest; @dest is
 * guaranteed to be nul-terminated; @src must be nul-terminated;
 * @dest_size is the buffer size, not the number of bytes to copy.
 * At most @dest_size - 1 characters will be copied. Always nul-terminate
 * s
 * (unless @dest_size is 0). This function does not allocate memory. Unli
 * ke
 * strncpy(), this function doesn't pad @dest (so it's often faster). It
 * returns the size of the attempted result, strlen (src), so if
 * @retval >= @dest_size, truncation occurred.
 * Caveat: strlcpy() is supposedly more secure than strcpy() or strncpy()
 * ,
 * but if you really want to avoid screwups, g_strdup() is an even better
 * idea.
 */
export function strlcpy(dest: string, src: string, dest_size: number): number;
/**
 * A case-insensitive string comparison, corresponding to the standard
 * strncasecmp() function on platforms which support it. It is similar
 * to g_strcasecmp() except it only compares the first @n characters of
 * the strings.
 */
export function strncasecmp(s1: string, s2: string, n: number): number;
/**
 * Duplicates the first @n bytes of a string, returning a newly-allocated
 * buffer @n + 1 bytes long which will always be nul-terminated. If @str
 * is less than @n bytes long the buffer is padded with nuls. If @str is
 * %NULL it returns %NULL. The returned value should be freed when no lon
 * ger
 * needed.
 * To copy a number of characters from a UTF-8 encoded string,
 * use g_utf8_strncpy() instead.
 */
export function strndup(str: string, n: number): string;
/**
 * Creates a new string @length bytes long filled with @fill_char.
 * The returned string should be freed when no longer needed.
 */
export function strnfill(length: number, fill_char: number): string;
/**
 * Reverses all of the bytes in a string. For example,
 * `g_strreverse ("abcdef")` will result in "fedcba".
 * Note that g_strreverse() doesn't work on UTF-8 strings
 * containing multibyte characters. For that purpose, use
 * g_utf8_strreverse().
 */
export function strreverse(string: string): string;
/**
 * Searches the string @haystack for the last occurrence
 * of the string @needle.
 */
export function strrstr(haystack: string, needle: string): string;
/**
 * Searches the string @haystack for the last occurrence
 * of the string @needle, limiting the length of the search
 * to @haystack_len.
 */
export function strrstr_len(haystack: string, haystack_len: number, needle: string): string;
/**
 * Returns a string describing the given signal, e.g. "Segmentation fault
 * ".
 * You should use this function in preference to strsignal(), because it
 * returns a string in UTF-8 encoding, and since not all platforms suppor
 * t
 * the strsignal() function.
 */
export function strsignal(signum: number): string;
/**
 * Searches the string @haystack for the first occurrence
 * of the string @needle, limiting the length of the search
 * to @haystack_len.
 */
export function strstr_len(haystack: string, haystack_len: number, needle: string): string;
/**
 * Converts a string to a #gdouble value.
 * It calls the standard strtod() function to handle the conversion, but
 * if the string is not completely converted it attempts the conversion
 * again with g_ascii_strtod(), and returns the best match.
 * This function should seldom be used. The normal situation when reading
 * numbers not for human consumption is to use g_ascii_strtod(). Only whe
 * n
 * you know that you must expect both locale formatted and C formatted nu
 * mbers
 * should you use this. Make sure that you don't pass strings such as com
 * ma
 * separated lists of values, since the commas may be interpreted as a de
 * cimal
 * point in some locales, causing unexpected results.
 */
export function strtod(nptr: string): [number, string | null];
/**
 * Converts a string to upper case.
 */
export function strup(string: string): string;
/**
 * Checks if @strv contains @str. @strv must not be %NULL.
 */
export function strv_contains(strv: string, str: string): boolean;
/**
 * Checks if @strv1 and @strv2 contain exactly the same elements in exact
 * ly the
 * same order. Elements are compared using g_str_equal(). To match indepe
 * ndently
 * of order, sort the arrays first (using g_qsort_with_data() or similar)
 * .
 * Two empty arrays are considered equal. Neither @strv1 not @strv2 may b
 * e
 * %NULL.
 */
export function strv_equal(strv1: string, strv2: string): boolean;
/**
 * 
 */
export function strv_get_type(): GType;
/**
 * Returns the length of the given %NULL-terminated
 * string array @str_array. @str_array must not be %NULL.
 */
export function strv_length(str_array: string): number;
/**
 * Create a new test case, similar to g_test_create_case(). However
 * the test is assumed to use no fixture, and test suites are automatical
 * ly
 * created on the fly and added to the root fixture, based on the
 * slash-separated portions of @testpath. The @test_data argument
 * will be passed as first argument to @test_func.
 * If @testpath includes the component "subprocess" anywhere in it,
 * the test will be skipped by default, and only run if explicitly
 * required via the `-p` command-line option or g_test_trap_subprocess().
 * No component of @testpath may start with a dot (`.`) if the
 * %G_TEST_OPTION_ISOLATE_DIRS option is being used; and it is recommende
 * d to
 * do so even if it isn’t.
 */
export function test_add_data_func(testpath: string, test_data: object | null, test_func: TestDataFunc): void;
/**
 * Create a new test case, as with g_test_add_data_func(), but freeing
 * @test_data after the test run is complete.
 */
export function test_add_data_func_full(testpath: string, test_data: object | null, test_func: TestDataFunc, data_free_func: DestroyNotify): void;
/**
 * Create a new test case, similar to g_test_create_case(). However
 * the test is assumed to use no fixture, and test suites are automatical
 * ly
 * created on the fly and added to the root fixture, based on the
 * slash-separated portions of @testpath.
 * If @testpath includes the component "subprocess" anywhere in it,
 * the test will be skipped by default, and only run if explicitly
 * required via the `-p` command-line option or g_test_trap_subprocess().
 * No component of @testpath may start with a dot (`.`) if the
 * %G_TEST_OPTION_ISOLATE_DIRS option is being used; and it is recommende
 * d to
 * do so even if it isn’t.
 */
export function test_add_func(testpath: string, test_func: TestFunc): void;
/**
 * 
 */
export function test_assert_expected_messages_internal(domain: string, file: string, line: number, func: string): void;
/**
 * This function adds a message to test reports that
 * associates a bug URI with a test case.
 * Bug URIs are constructed from a base URI set with g_test_bug_base()
 * and @bug_uri_snippet.
 */
export function test_bug(bug_uri_snippet: string): void;
/**
 * Specify the base URI for bug reports.
 * The base URI is used to construct bug report messages for
 * g_test_message() when g_test_bug() is called.
 * Calling this function outside of a test case sets the
 * default base URI for all test cases. Calling it from within
 * a test case changes the base URI for the scope of the test
 * case only.
 * Bug URIs are constructed by appending a bug specific URI
 * portion to @uri_pattern, or by replacing the special string
 * '\%s' within @uri_pattern if that is present.
 */
export function test_bug_base(uri_pattern: string): void;
/**
 * Indicates that a message with the given @log_domain and @log_level,
 * with text matching @pattern, is expected to be logged. When this
 * message is logged, it will not be printed, and the test case will
 * not abort.
 * This API may only be used with the old logging API (g_log() without
 * %G_LOG_USE_STRUCTURED defined). It will not work with the structured l
 * ogging
 * API. See [Testing for Messages][testing-for-messages].
 * Use g_test_assert_expected_messages() to assert that all
 * previously-expected messages have been seen and suppressed.
 * You can call this multiple times in a row, if multiple messages are
 * expected as a result of a single call. (The messages must appear in
 * the same order as the calls to g_test_expect_message().)
 * For example:
 * |[<!-- language="C" -->
 *   // g_main_context_push_thread_default() should fail if the
 *   // context is already owned by another thread.
 *   g_test_expect_message (G_LOG_DOMAIN,
 *                          G_LOG_LEVEL_CRITICAL,
 *                          "assertion*acquired_context*failed");
 *   g_main_context_push_thread_default (bad_context);
 *   g_test_assert_expected_messages ();
 * ]|
 * Note that you cannot use this to test g_error() messages, since
 * g_error() intentionally never returns even if the program doesn't
 * abort; use g_test_trap_subprocess() in this case.
 * If messages at %G_LOG_LEVEL_DEBUG are emitted, but not explicitly
 * expected via g_test_expect_message() then they will be ignored.
 */
export function test_expect_message(log_domain: string | null, log_level: LogLevelFlags, pattern: string): void;
/**
 * Indicates that a test failed. This function can be called
 * multiple times from the same test. You can use this function
 * if your test failed in a recoverable way.
 * Do not use this function if the failure of a test could cause
 * other tests to malfunction.
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * If not called from inside a test, this function does nothing.
 */
export function test_fail(): void;
/**
 * Returns whether a test has already failed. This will
 * be the case when g_test_fail(), g_test_incomplete()
 * or g_test_skip() have been called, but also if an
 * assertion has failed.
 * This can be useful to return early from a test if
 * continuing after a failed assertion might be harmful.
 * The return value of this function is only meaningful
 * if it is called from inside a test function.
 */
export function test_failed(): boolean;
/**
 * Gets the pathname of the directory containing test files of the type
 * specified by @file_type.
 * This is approximately the same as calling g_test_build_filename("."),
 * but you don't need to free the return value.
 */
export function test_get_dir(file_type: TestFileType): string;
/**
 * Indicates that a test failed because of some incomplete
 * functionality. This function can be called multiple times
 * from the same test.
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * If not called from inside a test, this function does nothing.
 */
export function test_incomplete(msg: string | null): void;
/**
 * 
 */
export function test_log_type_name(log_type: TestLogType): string;
/**
 * This function enqueus a callback @destroy_func to be executed
 * during the next test case teardown phase. This is most useful
 * to auto destruct allocated test resources at the end of a test run.
 * Resources are released in reverse queue order, that means enqueueing
 * callback A before callback B will cause B() to be called before
 * A() during teardown.
 */
export function test_queue_destroy(destroy_func: DestroyNotify, destroy_data: object | null): void;
/**
 * Enqueue a pointer to be released with g_free() during the next
 * teardown phase. This is equivalent to calling g_test_queue_destroy()
 * with a destroy callback of g_free().
 */
export function test_queue_free(gfree_pointer: object | null): void;
/**
 * Get a reproducible random floating point number,
 * see g_test_rand_int() for details on test case random numbers.
 */
export function test_rand_double(): number;
/**
 * Get a reproducible random floating pointer number out of a specified r
 * ange,
 * see g_test_rand_int() for details on test case random numbers.
 */
export function test_rand_double_range(range_start: number, range_end: number): number;
/**
 * Get a reproducible random integer number.
 * The random numbers generated by the g_test_rand_*() family of function
 * s
 * change with every new test program start, unless the --seed option is
 * given when starting test programs.
 * For individual test cases however, the random number generator is
 * reseeded, to avoid dependencies between tests and to make --seed
 * effective for all test cases.
 */
export function test_rand_int(): number;
/**
 * Get a reproducible random integer number out of a specified range,
 * see g_test_rand_int() for details on test case random numbers.
 */
export function test_rand_int_range(begin: number, end: number): number;
/**
 * Runs all tests under the toplevel suite which can be retrieved
 * with g_test_get_root(). Similar to g_test_run_suite(), the test
 * cases to be run are filtered according to test path arguments
 * (`-p testpath` and `-s testpath`) as parsed by g_test_init().
 * g_test_run_suite() or g_test_run() may only be called once in a
 * program.
 * In general, the tests and sub-suites within each suite are run in
 * the order in which they are defined. However, note that prior to
 * GLib 2.36, there was a bug in the `g_test_add_*`
 * functions which caused them to create multiple suites with the same
 * name, meaning that if you created tests "/foo/simple",
 * "/bar/simple", and "/foo/using-bar" in that order, they would get
 * run in that order (since g_test_run() would run the first "/foo"
 * suite, then the "/bar" suite, then the second "/foo" suite). As of
 * 2.36, this bug is fixed, and adding the tests in that order would
 * result in a running order of "/foo/simple", "/foo/using-bar",
 * "/bar/simple". If this new ordering is sub-optimal (because it puts
 * more-complicated tests before simpler ones, making it harder to
 * figure out exactly what has failed), you can fix it by changing the
 * test paths to group tests by suite in a way that will result in the
 * desired running order. Eg, "/simple/foo", "/simple/bar",
 * "/complex/foo-using-bar".
 * However, you should never make the actual result of a test depend
 * on the order that tests are run in. If you need to ensure that some
 * particular code runs before or after a given test case, use
 * g_test_add(), which lets you specify setup and teardown functions.
 * If all tests are skipped or marked as incomplete (expected failures),
 * this function will return 0 if producing TAP output, or 77 (treated
 * as "skip test" by Automake) otherwise.
 */
export function test_run(): number;
/**
 * Execute the tests within @suite and all nested #GTestSuites.
 * The test suites to be executed are filtered according to
 * test path arguments (`-p testpath` and `-s testpath`) as parsed by
 * g_test_init(). See the g_test_run() documentation for more
 * information on the order that tests are run in.
 * g_test_run_suite() or g_test_run() may only be called once
 * in a program.
 */
export function test_run_suite(suite: TestSuite): number;
/**
 * Changes the behaviour of g_assert_cmpstr(), g_assert_cmpint(),
 * g_assert_cmpuint(), g_assert_cmphex(), g_assert_cmpfloat(),
 * g_assert_true(), g_assert_false(), g_assert_null(), g_assert_no_error(
 * ),
 * g_assert_error(), g_test_assert_expected_messages() and the various
 * g_test_trap_assert_*() macros to not abort to program, but instead
 * call g_test_fail() and continue. (This also changes the behavior of
 * g_test_fail() so that it will not cause the test program to abort
 * after completing the failed test.)
 * Note that the g_assert_not_reached() and g_assert() are not
 * affected by this.
 * This function can only be called after g_test_init().
 */
export function test_set_nonfatal_assertions(): void;
/**
 * Indicates that a test was skipped.
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * If not called from inside a test, this function does nothing.
 */
export function test_skip(msg: string | null): void;
/**
 * Returns %TRUE (after g_test_init() has been called) if the test
 * program is running under g_test_trap_subprocess().
 */
export function test_subprocess(): boolean;
/**
 * Get the time since the last start of the timer with g_test_timer_start
 * ().
 */
export function test_timer_elapsed(): number;
/**
 * Report the last result of g_test_timer_elapsed().
 */
export function test_timer_last(): number;
/**
 * Start a timing test. Call g_test_timer_elapsed() when the task is supp
 * osed
 * to be done. Call this function again to restart the timer.
 */
export function test_timer_start(): void;
/**
 * 
 */
export function test_trap_assertions(domain: string, file: string, line: number, func: string, assertion_flags: number, pattern: string): void;
/**
 * Fork the current test program to execute a test case that might
 * not return or that might abort.
 * If @usec_timeout is non-0, the forked test case is aborted and
 * considered failing if its run time exceeds it.
 * The forking behavior can be configured with the #GTestTrapFlags flags.
 * In the following example, the test code forks, the forked child
 * process produces some sample output and exits successfully.
 * The forking parent process then asserts successful child program
 * termination and validates child program outputs.
 * |[<!-- language="C" -->
 *   static void
 *   test_fork_patterns (void)
 *   {
 *     if (g_test_trap_fork (0, G_TEST_TRAP_SILENCE_STDOUT | G_TEST_TRAP_
 * SILENCE_STDERR))
 *       {
 *         g_print ("some stdout text: somagic17\n");
 *         g_printerr ("some stderr text: semagic43\n");
 *         exit (0); // successful test run
 *       }
 *     g_test_trap_assert_passed ();
 *     g_test_trap_assert_stdout ("*somagic17*");
 *     g_test_trap_assert_stderr ("*semagic43*");
 *   }
 * ]|
 */
export function test_trap_fork(usec_timeout: number, test_trap_flags: TestTrapFlags): boolean;
/**
 * Check the result of the last g_test_trap_subprocess() call.
 */
export function test_trap_has_passed(): boolean;
/**
 * Check the result of the last g_test_trap_subprocess() call.
 */
export function test_trap_reached_timeout(): boolean;
/**
 * Respawns the test program to run only @test_path in a subprocess.
 * This can be used for a test case that might not return, or that
 * might abort.
 * If @test_path is %NULL then the same test is re-run in a subprocess.
 * You can use g_test_subprocess() to determine whether the test is in
 * a subprocess or not.
 * @test_path can also be the name of the parent test, followed by
 * "`/subprocess/`" and then a name for the specific subtest (or just
 * ending with "`/subprocess`" if the test only has one child test);
 * tests with names of this form will automatically be skipped in the
 * parent process.
 * If @usec_timeout is non-0, the test subprocess is aborted and
 * considered failing if its run time exceeds it.
 * The subprocess behavior can be configured with the
 * #GTestSubprocessFlags flags.
 * You can use methods such as g_test_trap_assert_passed(),
 * g_test_trap_assert_failed(), and g_test_trap_assert_stderr() to
 * check the results of the subprocess. (But note that
 * g_test_trap_assert_stdout() and g_test_trap_assert_stderr()
 * cannot be used if @test_flags specifies that the child should
 * inherit the parent stdout/stderr.)
 * If your `main ()` needs to behave differently in
 * the subprocess, you can call g_test_subprocess() (after calling
 * g_test_init()) to see whether you are in a subprocess.
 * The following example tests that calling
 * `my_object_new(1000000)` will abort with an error
 * message.
 * |[<!-- language="C" -->
 *   static void
 *   test_create_large_object (void)
 *   {
 *     if (g_test_subprocess ())
 *       {
 *         my_object_new (1000000);
 *         return;
 *       }
 *     // Reruns this same test in a subprocess
 *     g_test_trap_subprocess (NULL, 0, 0);
 *     g_test_trap_assert_failed ();
 *     g_test_trap_assert_stderr ("*ERROR*too large*");
 *   }
 *   int
 *   main (int argc, char **argv)
 *   {
 *     g_test_init (&argc, &argv, NULL);
 *     g_test_add_func ("/myobject/create_large_object",
 *                      test_create_large_object);
 *     return g_test_run ();
 *   }
 * ]|
 */
export function test_trap_subprocess(test_path: string | null, usec_timeout: number, test_flags: TestSubprocessFlags): void;
/**
 * 
 */
export function thread_error_quark(): Quark;
/**
 * Terminates the current thread.
 * If another thread is waiting for us using g_thread_join() then the
 * waiting thread will be woken up and get @retval as the return value
 * of g_thread_join().
 * Calling g_thread_exit() with a parameter @retval is equivalent to
 * returning @retval from the function @func, as given to g_thread_new().
 * You must only call g_thread_exit() from a thread that you created
 * yourself with g_thread_new() or related APIs. You must not call
 * this function from a thread created with another threading library
 * or or from within a #GThreadPool.
 */
export function thread_exit(retval: object | null): void;
/**
 * This function will return the maximum @interval that a
 * thread will wait in the thread pool for new tasks before
 * being stopped.
 * If this function returns 0, threads waiting in the thread
 * pool for new work are not stopped.
 */
export function thread_pool_get_max_idle_time(): number;
/**
 * Returns the maximal allowed number of unused threads.
 */
export function thread_pool_get_max_unused_threads(): number;
/**
 * Returns the number of currently unused threads.
 */
export function thread_pool_get_num_unused_threads(): number;
/**
 * This function will set the maximum @interval that a thread
 * waiting in the pool for new tasks can be idle for before
 * being stopped. This function is similar to calling
 * g_thread_pool_stop_unused_threads() on a regular timeout,
 * except this is done on a per thread basis.
 * By setting @interval to 0, idle threads will not be stopped.
 * The default value is 15000 (15 seconds).
 */
export function thread_pool_set_max_idle_time(interval: number): void;
/**
 * Sets the maximal number of unused threads to @max_threads.
 * If @max_threads is -1, no limit is imposed on the number
 * of unused threads.
 * The default value is 2.
 */
export function thread_pool_set_max_unused_threads(max_threads: number): void;
/**
 * Stops all currently unused threads. This does not change the
 * maximal number of unused threads. This function can be used to
 * regularly stop all unused threads e.g. from g_timeout_add().
 */
export function thread_pool_stop_unused_threads(): void;
/**
 * This function returns the #GThread corresponding to the
 * current thread. Note that this function does not increase
 * the reference count of the returned struct.
 * This function will return a #GThread even for threads that
 * were not created by GLib (i.e. those created by other threading
 * APIs). This may be useful for thread identification purposes
 * (i.e. comparisons) but you must not use GLib functions (such
 * as g_thread_join()) on these threads.
 */
export function thread_self(): Thread;
/**
 * Causes the calling thread to voluntarily relinquish the CPU, so
 * that other threads can run.
 * This function is often used as a method to make busy wait less evil.
 */
export function thread_yield(): void;
/**
 * Converts a string containing an ISO 8601 encoded date and time
 * to a #GTimeVal and puts it into @time_.
 * @iso_date must include year, month, day, hours, minutes, and
 * seconds. It can optionally include fractions of a second and a time
 * zone indicator. (In the absence of any time zone indication, the
 * timestamp is assumed to be in local time.)
 * Any leading or trailing space in @iso_date is ignored.
 */
export function time_val_from_iso8601(iso_date: string): [boolean, TimeVal];
/**
 * Sets a function to be called at regular intervals, with the given
 * priority.  The function is called repeatedly until it returns
 * %FALSE, at which point the timeout is automatically destroyed and
 * the function will not be called again.  The @notify function is
 * called when the timeout is destroyed.  The first call to the
 * function will be at the end of the first @interval.
 * Note that timeout functions may be delayed, due to the processing of o
 * ther
 * event sources. Thus they should not be relied on for precise timing.
 * After each call to the timeout function, the time of the next
 * timeout is recalculated based on the current time and the given interv
 * al
 * (it does not try to 'catch up' time lost in delays).
 * See [memory management of sources][mainloop-memory-management] for det
 * ails
 * on how to handle the return value and memory management of @data.
 * This internally creates a main loop source using g_timeout_source_new(
 * )
 * and attaches it to the global #GMainContext using g_source_attach(), s
 * o
 * the callback will be invoked in whichever thread is running that main
 * context. You can do these steps manually if you need greater control o
 * r to
 * use a custom main context.
 * The interval given is in terms of monotonic time, not wall clock time.
 * See g_get_monotonic_time().
 */
export function timeout_add_full(priority: number, interval: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
/**
 * Sets a function to be called at regular intervals, with @priority.
 * The function is called repeatedly until it returns %FALSE, at which
 * point the timeout is automatically destroyed and the function will
 * not be called again.
 * Unlike g_timeout_add(), this function operates at whole second granula
 * rity.
 * The initial starting point of the timer is determined by the implement
 * ation
 * and the implementation is expected to group multiple timers together s
 * o that
 * they fire all at the same time.
 * To allow this grouping, the @interval to the first timer is rounded
 * and can deviate up to one second from the specified interval.
 * Subsequent timer iterations will generally run at the specified interv
 * al.
 * Note that timeout functions may be delayed, due to the processing of o
 * ther
 * event sources. Thus they should not be relied on for precise timing.
 * After each call to the timeout function, the time of the next
 * timeout is recalculated based on the current time and the given @inter
 * val
 * See [memory management of sources][mainloop-memory-management] for det
 * ails
 * on how to handle the return value and memory management of @data.
 * If you want timing more precise than whole seconds, use g_timeout_add(
 * )
 * instead.
 * The grouping of timers to fire at the same time results in a more powe
 * r
 * and CPU efficient behavior so if your timer is in multiples of seconds
 * and you don't require the first timer exactly one second from now, the
 * use of g_timeout_add_seconds() is preferred over g_timeout_add().
 * This internally creates a main loop source using
 * g_timeout_source_new_seconds() and attaches it to the main loop contex
 * t
 * using g_source_attach(). You can do these steps manually if you need
 * greater control.
 * The interval given is in terms of monotonic time, not wall clock
 * time.  See g_get_monotonic_time().
 */
export function timeout_add_seconds_full(priority: number, interval: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
/**
 * Creates a new timeout source.
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * The interval given is in terms of monotonic time, not wall clock
 * time.  See g_get_monotonic_time().
 */
export function timeout_source_new(interval: number): Source;
/**
 * Creates a new timeout source.
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * The scheduling granularity/accuracy of this timeout source will be
 * in seconds.
 * The interval given is in terms of monotonic time, not wall clock time.
 * See g_get_monotonic_time().
 */
export function timeout_source_new_seconds(interval: number): Source;
/**
 * Returns the height of a #GTrashStack.
 * Note that execution of this function is of O(N) complexity
 * where N denotes the number of items on the stack.
 */
export function trash_stack_height(stack_p: TrashStack): number;
/**
 * Returns the element at the top of a #GTrashStack
 * which may be %NULL.
 */
export function trash_stack_peek(stack_p: TrashStack): object | null;
/**
 * Pops a piece of memory off a #GTrashStack.
 */
export function trash_stack_pop(stack_p: TrashStack): object | null;
/**
 * Pushes a piece of memory onto a #GTrashStack.
 */
export function trash_stack_push(stack_p: TrashStack, data_p: object): void;
/**
 * Attempts to allocate @n_bytes, and returns %NULL on failure.
 * Contrast with g_malloc(), which aborts the program on failure.
 */
export function try_malloc(n_bytes: number): object | null;
/**
 * Attempts to allocate @n_bytes, initialized to 0's, and returns %NULL o
 * n
 * failure. Contrast with g_malloc0(), which aborts the program on failur
 * e.
 */
export function try_malloc0(n_bytes: number): object | null;
/**
 * This function is similar to g_try_malloc0(), allocating (@n_blocks * @
 * n_block_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function try_malloc0_n(n_blocks: number, n_block_bytes: number): object | null;
/**
 * This function is similar to g_try_malloc(), allocating (@n_blocks * @n
 * _block_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function try_malloc_n(n_blocks: number, n_block_bytes: number): object | null;
/**
 * Attempts to realloc @mem to a new size, @n_bytes, and returns %NULL
 * on failure. Contrast with g_realloc(), which aborts the program
 * on failure.
 * If @mem is %NULL, behaves the same as g_try_malloc().
 */
export function try_realloc(mem: object | null, n_bytes: number): object | null;
/**
 * This function is similar to g_try_realloc(), allocating (@n_blocks * @
 * n_block_bytes) bytes,
 * but care is taken to detect possible overflow during multiplication.
 */
export function try_realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null;
/**
 * Convert a string from UCS-4 to UTF-16. A 0 character will be
 * added to the result after the converted text.
 */
export function ucs4_to_utf16(str: number, len: number): [number, number | null,number | null];
/**
 * Convert a string from a 32-bit fixed width representation as UCS-4.
 * to UTF-8. The result will be terminated with a 0 byte.
 */
export function ucs4_to_utf8(str: number, len: number): [string, number | null,number | null];
/**
 * Determines the break type of @c. @c should be a Unicode character
 * (to derive a character from UTF-8 encoded text, use
 * g_utf8_get_char()). The break type is used to find word and line
 * breaks ("text boundaries"), Pango implements the Unicode boundary
 * resolution algorithms and normally you would use a function such
 * as pango_break() instead of caring about break types yourself.
 */
export function unichar_break_type(c: number): UnicodeBreakType;
/**
 * Determines the canonical combining class of a Unicode character.
 */
export function unichar_combining_class(uc: number): number;
/**
 * Performs a single composition step of the
 * Unicode canonical composition algorithm.
 * This function includes algorithmic Hangul Jamo composition,
 * but it is not exactly the inverse of g_unichar_decompose().
 * No composition can have either of @a or @b equal to zero.
 * To be precise, this function composes if and only if
 * there exists a Primary Composite P which is canonically
 * equivalent to the sequence <@a,@b>.  See the Unicode
 * Standard for the definition of Primary Composite.
 * If @a and @b do not compose a new character, @ch is set to zero.
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 */
export function unichar_compose(a: number, b: number, ch: number): boolean;
/**
 * Performs a single decomposition step of the
 * Unicode canonical decomposition algorithm.
 * This function does not include compatibility
 * decompositions. It does, however, include algorithmic
 * Hangul Jamo decomposition, as well as 'singleton'
 * decompositions which replace a character by a single
 * other character. In the case of singletons *@b will
 * be set to zero.
 * If @ch is not decomposable, *@a is set to @ch and *@b
 * is set to zero.
 * Note that the way Unicode decomposition pairs are
 * defined, it is guaranteed that @b would not decompose
 * further, but @a may itself decompose.  To get the full
 * canonical decomposition for @ch, one would need to
 * recursively call this function on @a.  Or use
 * g_unichar_fully_decompose().
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 */
export function unichar_decompose(ch: number, a: number, b: number): boolean;
/**
 * Determines the numeric value of a character as a decimal
 * digit.
 */
export function unichar_digit_value(c: number): number;
/**
 * Computes the canonical or compatibility decomposition of a
 * Unicode character.  For compatibility decomposition,
 * pass %TRUE for @compat; for canonical decomposition
 * pass %FALSE for @compat.
 * The decomposed sequence is placed in @result.  Only up to
 * @result_len characters are written into @result.  The length
 * of the full decomposition (irrespective of @result_len) is
 * returned by the function.  For canonical decomposition,
 * currently all decompositions are of length at most 4, but
 * this may change in the future (very unlikely though).
 * At any rate, Unicode does guarantee that a buffer of length
 * 18 is always enough for both compatibility and canonical
 * decompositions, so that is the size recommended. This is provided
 * as %G_UNICHAR_MAX_DECOMPOSITION_LENGTH.
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 */
export function unichar_fully_decompose(ch: number, compat: boolean, result: number | null, result_len: number): number;
/**
 * In Unicode, some characters are "mirrored". This means that their
 * images are mirrored horizontally in text that is laid out from right
 * to left. For instance, "(" would become its mirror image, ")", in
 * right-to-left text.
 * If @ch has the Unicode mirrored property and there is another unicode
 * character that typically has a glyph that is the mirror image of @ch's
 * glyph and @mirrored_ch is set, it puts that character in the address
 * pointed to by @mirrored_ch.  Otherwise the original character is put.
 */
export function unichar_get_mirror_char(ch: number, mirrored_ch: number): boolean;
/**
 * Looks up the #GUnicodeScript for a particular character (as defined
 * by Unicode Standard Annex \#24). No check is made for @ch being a
 * valid Unicode character; if you pass in invalid character, the
 * result is undefined.
 * This function is equivalent to pango_script_for_unichar() and the
 * two are interchangeable.
 */
export function unichar_get_script(ch: number): UnicodeScript;
/**
 * Determines whether a character is alphanumeric.
 * Given some UTF-8 text, obtain a character value
 * with g_utf8_get_char().
 */
export function unichar_isalnum(c: number): boolean;
/**
 * Determines whether a character is alphabetic (i.e. a letter).
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_isalpha(c: number): boolean;
/**
 * Determines whether a character is a control character.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_iscntrl(c: number): boolean;
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 */
export function unichar_isdefined(c: number): boolean;
/**
 * Determines whether a character is numeric (i.e. a digit).  This
 * covers ASCII 0-9 and also digits in other languages/scripts.  Given
 * some UTF-8 text, obtain a character value with g_utf8_get_char().
 */
export function unichar_isdigit(c: number): boolean;
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_isgraph(c: number): boolean;
/**
 * Determines whether a character is a lowercase letter.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_islower(c: number): boolean;
/**
 * Determines whether a character is a mark (non-spacing mark,
 * combining mark, or enclosing mark in Unicode speak).
 * Given some UTF-8 text, obtain a character value
 * with g_utf8_get_char().
 * Note: in most cases where isalpha characters are allowed,
 * ismark characters should be allowed to as they are essential
 * for writing most European languages as well as many non-Latin
 * scripts.
 */
export function unichar_ismark(c: number): boolean;
/**
 * Determines whether a character is printable.
 * Unlike g_unichar_isgraph(), returns %TRUE for spaces.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_isprint(c: number): boolean;
/**
 * Determines whether a character is punctuation or a symbol.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 */
export function unichar_ispunct(c: number): boolean;
/**
 * Determines whether a character is a space, tab, or line separator
 * (newline, carriage return, etc.).  Given some UTF-8 text, obtain a
 * character value with g_utf8_get_char().
 * (Note: don't use this to do word breaking; you have to use
 * Pango or equivalent to get word breaking right, the algorithm
 * is fairly complex.)
 */
export function unichar_isspace(c: number): boolean;
/**
 * Determines if a character is titlecase. Some characters in
 * Unicode which are composites, such as the DZ digraph
 * have three case variants instead of just two. The titlecase
 * form is used at the beginning of a word where only the
 * first letter is capitalized. The titlecase form of the DZ
 * digraph is U+01F2 LATIN CAPITAL LETTTER D WITH SMALL LETTER Z.
 */
export function unichar_istitle(c: number): boolean;
/**
 * Determines if a character is uppercase.
 */
export function unichar_isupper(c: number): boolean;
/**
 * Determines if a character is typically rendered in a double-width
 * cell.
 */
export function unichar_iswide(c: number): boolean;
/**
 * Determines if a character is typically rendered in a double-width
 * cell under legacy East Asian locales.  If a character is wide accordin
 * g to
 * g_unichar_iswide(), then it is also reported wide with this function, 
 * but
 * the converse is not necessarily true. See the
 * [Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/)
 * for details.
 * If a character passes the g_unichar_iswide() test then it will also pa
 * ss
 * this test, but not the other way around.  Note that some characters ma
 * y
 * pass both this test and g_unichar_iszerowidth().
 */
export function unichar_iswide_cjk(c: number): boolean;
/**
 * Determines if a character is a hexidecimal digit.
 */
export function unichar_isxdigit(c: number): boolean;
/**
 * Determines if a given character typically takes zero width when render
 * ed.
 * The return value is %TRUE for all non-spacing and enclosing marks
 * (e.g., combining accents), format characters, zero-width
 * space, but not U+00AD SOFT HYPHEN.
 * A typical use of this function is with one of g_unichar_iswide() or
 * g_unichar_iswide_cjk() to determine the number of cells a string occup
 * ies
 * when displayed on a grid display (terminals).  However, note that not 
 * all
 * terminals support zero-width rendering of zero-width marks.
 */
export function unichar_iszerowidth(c: number): boolean;
/**
 * Converts a single character to UTF-8.
 */
export function unichar_to_utf8(c: number): [number, string | null];
/**
 * Converts a character to lower case.
 */
export function unichar_tolower(c: number): number;
/**
 * Converts a character to the titlecase.
 */
export function unichar_totitle(c: number): number;
/**
 * Converts a character to uppercase.
 */
export function unichar_toupper(c: number): number;
/**
 * Classifies a Unicode character by type.
 */
export function unichar_type(c: number): UnicodeType;
/**
 * Checks whether @ch is a valid Unicode character. Some possible
 * integer values of @ch will not be valid. 0 is considered a valid
 * character, though it's normally a string terminator.
 */
export function unichar_validate(ch: number): boolean;
/**
 * Determines the numeric value of a character as a hexidecimal
 * digit.
 */
export function unichar_xdigit_value(c: number): number;
/**
 * Computes the canonical decomposition of a Unicode character.
 */
export function unicode_canonical_decomposition(ch: number, result_len: number): number;
/**
 * Computes the canonical ordering of a string in-place.
 * This rearranges decomposed characters in the string
 * according to their combining classes.  See the Unicode
 * manual for more information.
 */
export function unicode_canonical_ordering(string: number, len: number): void;
/**
 * Looks up the Unicode script for @iso15924.  ISO 15924 assigns four-let
 * ter
 * codes to scripts.  For example, the code for Arabic is 'Arab'.
 * This function accepts four letter codes encoded as a @guint32 in a
 * big-endian fashion.  That is, the code expected for Arabic is
 * 0x41726162 (0x41 is ASCII code for 'A', 0x72 is ASCII code for 'r', et
 * c).
 * See
 * [Codes for the representation of names of scripts](http://unicode.org/
 * iso15924/codelists.html)
 * for details.
 */
export function unicode_script_from_iso15924(iso15924: number): UnicodeScript;
/**
 * Looks up the ISO 15924 code for @script.  ISO 15924 assigns four-lette
 * r
 * codes to scripts.  For example, the code for Arabic is 'Arab'.  The
 * four letter codes are encoded as a @guint32 by this function in a
 * big-endian fashion.  That is, the code returned for Arabic is
 * 0x41726162 (0x41 is ASCII code for 'A', 0x72 is ASCII code for 'r', et
 * c).
 * See
 * [Codes for the representation of names of scripts](http://unicode.org/
 * iso15924/codelists.html)
 * for details.
 */
export function unicode_script_to_iso15924(script: UnicodeScript): number;
/**
 * 
 */
export function unix_error_quark(): Quark;
/**
 * Sets a function to be called when the IO condition, as specified by
 * @condition becomes true for @fd.
 * This is the same as g_unix_fd_add(), except that it allows you to
 * specify a non-default priority and a provide a #GDestroyNotify for
 * @user_data.
 */
export function unix_fd_add_full(priority: number, fd: number, condition: IOCondition, _function: UnixFDSourceFunc, user_data: object | null, notify: DestroyNotify): number;
/**
 * Creates a #GSource to watch for a particular IO condition on a file
 * descriptor.
 * The source will never close the fd -- you must do it yourself.
 */
export function unix_fd_source_new(fd: number, condition: IOCondition): Source;
/**
 * Similar to the UNIX pipe() call, but on modern systems like Linux
 * uses the pipe2() system call, which atomically creates a pipe with
 * the configured flags. The only supported flag currently is
 * %FD_CLOEXEC. If for example you want to configure %O_NONBLOCK, that
 * must still be done separately with fcntl().
 * This function does not take %O_CLOEXEC, it takes %FD_CLOEXEC as if
 * for fcntl(); these are different on Linux/glibc.
 */
export function unix_open_pipe(fds: number, flags: number): boolean;
/**
 * Control the non-blocking state of the given file descriptor,
 * according to @nonblock. On most systems this uses %O_NONBLOCK, but
 * on some older ones may use %O_NDELAY.
 */
export function unix_set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
/**
 * A convenience function for g_unix_signal_source_new(), which
 * attaches to the default #GMainContext.  You can remove the watch
 * using g_source_remove().
 */
export function unix_signal_add_full(priority: number, signum: number, handler: SourceFunc, user_data: object | null, notify: DestroyNotify): number;
/**
 * Create a #GSource that will be dispatched upon delivery of the UNIX
 * signal @signum.  In GLib versions before 2.36, only `SIGHUP`, `SIGINT`
 * ,
 * `SIGTERM` can be monitored.  In GLib 2.36, `SIGUSR1` and `SIGUSR2`
 * were added. In GLib 2.54, `SIGWINCH` was added.
 * Note that unlike the UNIX default, all sources which have created a
 * watch will be dispatched, regardless of which underlying thread
 * invoked g_unix_signal_source_new().
 * For example, an effective use of this function is to handle `SIGTERM`
 * cleanly; flushing any outstanding files, and then calling
 * g_main_loop_quit ().  It is not safe to do any of this a regular
 * UNIX signal handler; your handler may be invoked while malloc() or
 * another library function is running, causing reentrancy if you
 * attempt to use it from the handler.  None of the GLib/GObject API
 * is safe against this kind of reentrancy.
 * The interaction of this source when combined with native UNIX
 * functions like sigprocmask() is not defined.
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 */
export function unix_signal_source_new(signum: number): Source;
/**
 * A wrapper for the POSIX unlink() function. The unlink() function
 * deletes a name from the filesystem. If this was the last link to the
 * file and no processes have it opened, the diskspace occupied by the
 * file is freed.
 * See your C library manual for more details about unlink(). Note
 * that on Windows, it is in general not possible to delete files that
 * are open to some process, or mapped into memory.
 */
export function unlink(filename: string): number;
/**
 * Removes an environment variable from the environment.
 * Note that on some systems, when variables are overwritten, the
 * memory used for the previous variables and its value isn't reclaimed.
 * You should be mindful of the fact that environment variable handling
 * in UNIX is not thread-safe, and your program may crash if one thread
 * calls g_unsetenv() while another thread is calling getenv(). (And note
 * that many functions, such as gettext(), call getenv() internally.) Thi
 * s
 * function is only safe to use at the very start of your program, before
 * creating any other threads (or creating objects that create worker
 * threads of their own).
 * If you need to set up the environment for a child process, you can
 * use g_get_environ() to get an environment array, modify that with
 * g_environ_setenv() and g_environ_unsetenv(), and then pass that
 * array directly to execvpe(), g_spawn_async(), or the like.
 */
export function unsetenv(variable: string): void;
/**
 * Escapes a string for use in a URI.
 * Normally all characters that are not "unreserved" (i.e. ASCII alphanum
 * erical
 * characters plus dash, dot, underscore and tilde) are escaped.
 * But if you specify characters in @reserved_chars_allowed they are not
 * escaped. This is useful for the "reserved" characters in the URI
 * specification, since those are allowed unescaped in some portions of
 * a URI.
 */
export function uri_escape_string(unescaped: string, reserved_chars_allowed: string | null, allow_utf8: boolean): string;
/**
 * Splits an URI list conforming to the text/uri-list
 * mime type defined in RFC 2483 into individual URIs,
 * discarding any comments. The URIs are not validated.
 */
export function uri_list_extract_uris(uri_list: string): string[];
/**
 * Gets the scheme portion of a URI string. RFC 3986 decodes the scheme a
 * s:
 * |[
 * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
 * ]|
 * Common schemes include "file", "http", "svn+ssh", etc.
 */
export function uri_parse_scheme(uri: string): string;
/**
 * Unescapes a segment of an escaped string.
 * If any of the characters in @illegal_characters or the character zero 
 * appears
 * as an escaped character in @escaped_string then that is an error and %
 * NULL
 * will be returned. This is useful it you want to avoid for instance hav
 * ing a
 * slash being expanded in an escaped path element, which might confuse p
 * athname
 * handling.
 */
export function uri_unescape_segment(escaped_string: string | null, escaped_string_end: string | null, illegal_characters: string | null): string;
/**
 * Unescapes a whole escaped string.
 * If any of the characters in @illegal_characters or the character zero 
 * appears
 * as an escaped character in @escaped_string then that is an error and %
 * NULL
 * will be returned. This is useful it you want to avoid for instance hav
 * ing a
 * slash being expanded in an escaped path element, which might confuse p
 * athname
 * handling.
 */
export function uri_unescape_string(escaped_string: string, illegal_characters: string | null): string;
/**
 * Pauses the current thread for the given number of microseconds.
 * There are 1 million microseconds per second (represented by the
 * #G_USEC_PER_SEC macro). g_usleep() may have limited precision,
 * depending on hardware and operating system; don't rely on the exact
 * length of the sleep.
 */
export function usleep(microseconds: number): void;
/**
 * Convert a string from UTF-16 to UCS-4. The result will be
 * nul-terminated.
 */
export function utf16_to_ucs4(str: number, len: number): [number, number | null,number | null];
/**
 * Convert a string from UTF-16 to UTF-8. The result will be
 * terminated with a 0 byte.
 * Note that the input is expected to be already in native endianness,
 * an initial byte-order-mark character is not handled specially.
 * g_convert() can be used to convert a byte buffer of UTF-16 data of
 * ambiguous endianess.
 * Further note that this function does not validate the result
 * string; it may e.g. include embedded NUL characters. The only
 * validation done by this function is to ensure that the input can
 * be correctly interpreted as UTF-16, i.e. it doesn't contain
 * things unpaired surrogates.
 */
export function utf16_to_utf8(str: number, len: number): [string, number | null,number | null];
/**
 * Converts a string into a form that is independent of case. The
 * result will not correspond to any particular case, but can be
 * compared for equality or ordered with the results of calling
 * g_utf8_casefold() on other strings.
 * Note that calling g_utf8_casefold() followed by g_utf8_collate() is
 * only an approximation to the correct linguistic case insensitive
 * ordering, though it is a fairly good one. Getting this exactly
 * right would require a more sophisticated collation function that
 * takes case sensitivity into account. GLib does not currently
 * provide such a function.
 */
export function utf8_casefold(str: string, len: number): string;
/**
 * Compares two strings for ordering using the linguistically
 * correct rules for the [current locale][setlocale].
 * When sorting a large number of strings, it will be significantly
 * faster to obtain collation keys with g_utf8_collate_key() and
 * compare the keys with strcmp() when sorting instead of sorting
 * the original strings.
 */
export function utf8_collate(str1: string, str2: string): number;
/**
 * Converts a string into a collation key that can be compared
 * with other collation keys produced by the same function using
 * strcmp().
 * The results of comparing the collation keys of two strings
 * with strcmp() will always be the same as comparing the two
 * original keys with g_utf8_collate().
 * Note that this function depends on the [current locale][setlocale].
 */
export function utf8_collate_key(str: string, len: number): string;
/**
 * Converts a string into a collation key that can be compared
 * with other collation keys produced by the same function using strcmp()
 * .
 * In order to sort filenames correctly, this function treats the dot '.'
 * as a special case. Most dictionary orderings seem to consider it
 * insignificant, thus producing the ordering "event.c" "eventgenerator.c
 * "
 * "event.h" instead of "event.c" "event.h" "eventgenerator.c". Also, we
 * would like to treat numbers intelligently so that "file1" "file10" "fi
 * le5"
 * is sorted as "file1" "file5" "file10".
 * Note that this function depends on the [current locale][setlocale].
 */
export function utf8_collate_key_for_filename(str: string, len: number): string;
/**
 * Finds the start of the next UTF-8 character in the string after @p.
 * @p does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte.
 * If @end is %NULL, the return value will never be %NULL: if the end of 
 * the
 * string is reached, a pointer to the terminating nul byte is returned. 
 * If
 * @end is non-%NULL, the return value will be %NULL if the end of the st
 * ring
 * is reached.
 */
export function utf8_find_next_char(p: string, end: string | null): string | null;
/**
 * Given a position @p with a UTF-8 encoded string @str, find the start
 * of the previous UTF-8 character starting before @p. Returns %NULL if n
 * o
 * UTF-8 characters are present in @str before @p.
 * @p does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte.
 */
export function utf8_find_prev_char(str: string, p: string): string;
/**
 * Converts a sequence of bytes encoded as UTF-8 to a Unicode character.
 * If @p does not point to a valid UTF-8 encoded character, results
 * are undefined. If you are not sure that the bytes are complete
 * valid Unicode characters, you should use g_utf8_get_char_validated()
 * instead.
 */
export function utf8_get_char(p: string): number;
/**
 * Convert a sequence of bytes encoded as UTF-8 to a Unicode character.
 * This function checks for incomplete characters, for invalid characters
 * such as characters that are out of the range of Unicode, and for
 * overlong encodings of valid characters.
 * Note that g_utf8_get_char_validated() returns (gunichar)-2 if
 * @max_len is positive and any of the bytes in the first UTF-8 character
 * sequence are nul.
 */
export function utf8_get_char_validated(p: string, max_len: number): number;
/**
 * If the provided string is valid UTF-8, return a copy of it. If not,
 * return a copy in which bytes that could not be interpreted as valid Un
 * icode
 * are replaced with the Unicode replacement character (U+FFFD).
 * For example, this is an appropriate function to use if you have receiv
 * ed
 * a string that was incorrectly declared to be UTF-8, and you need a val
 * id
 * UTF-8 version of it that can be logged or displayed to the user, with 
 * the
 * assumption that it is close enough to ASCII or UTF-8 to be mostly
 * readable as-is.
 */
export function utf8_make_valid(str: string, len: number): string;
/**
 * Converts a string into canonical form, standardizing
 * such issues as whether a character with an accent
 * is represented as a base character and combining
 * accent or as a single precomposed character. The
 * string has to be valid UTF-8, otherwise %NULL is
 * returned. You should generally call g_utf8_normalize()
 * before comparing two Unicode strings.
 * The normalization mode %G_NORMALIZE_DEFAULT only
 * standardizes differences that do not affect the
 * text content, such as the above-mentioned accent
 * representation. %G_NORMALIZE_ALL also standardizes
 * the "compatibility" characters in Unicode, such
 * as SUPERSCRIPT THREE to the standard forms
 * (in this case DIGIT THREE). Formatting information
 * may be lost but for most text operations such
 * characters should be considered the same.
 * %G_NORMALIZE_DEFAULT_COMPOSE and %G_NORMALIZE_ALL_COMPOSE
 * are like %G_NORMALIZE_DEFAULT and %G_NORMALIZE_ALL,
 * but returned a result with composed forms rather
 * than a maximally decomposed form. This is often
 * useful if you intend to convert the string to
 * a legacy encoding or pass it to a system with
 * less capable Unicode handling.
 */
export function utf8_normalize(str: string, len: number, mode: NormalizeMode): string;
/**
 * Converts from an integer character offset to a pointer to a position
 * within the string.
 * Since 2.10, this function allows to pass a negative @offset to
 * step backwards. It is usually worth stepping backwards from the end
 * instead of forwards if @offset is in the last fourth of the string,
 * since moving forward is about 3 times faster than moving backward.
 * Note that this function doesn't abort when reaching the end of @str.
 * Therefore you should be sure that @offset is within string boundaries
 * before calling that function. Call g_utf8_strlen() when unsure.
 * This limitation exists as this function is called frequently during
 * text rendering and therefore has to be as fast as possible.
 */
export function utf8_offset_to_pointer(str: string, offset: number): string;
/**
 * Converts from a pointer to position within a string to a integer
 * character offset.
 * Since 2.10, this function allows @pos to be before @str, and returns
 * a negative offset in this case.
 */
export function utf8_pointer_to_offset(str: string, pos: string): number;
/**
 * Finds the previous UTF-8 character in the string before @p.
 * @p does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte. If @p might be the first
 * character of the string, you must use g_utf8_find_prev_char() instead.
 */
export function utf8_prev_char(p: string): string;
/**
 * Finds the leftmost occurrence of the given Unicode character
 * in a UTF-8 encoded string, while limiting the search to @len bytes.
 * If @len is -1, allow unbounded search.
 */
export function utf8_strchr(p: string, len: number, c: number): string;
/**
 * Converts all Unicode characters in the string that have a case
 * to lowercase. The exact manner that this is done depends
 * on the current locale, and may result in the number of
 * characters in the string changing.
 */
export function utf8_strdown(str: string, len: number): string;
/**
 * Computes the length of the string in characters, not including
 * the terminating nul character. If the @max'th byte falls in the
 * middle of a character, the last (partial) character is not counted.
 */
export function utf8_strlen(p: string, max: number): number;
/**
 * Like the standard C strncpy() function, but copies a given number
 * of characters instead of a given number of bytes. The @src string
 * must be valid UTF-8 encoded text. (Use g_utf8_validate() on all
 * text before trying to use UTF-8 utility functions with it.)
 * Note you must ensure @dest is at least 4 * @n to fit the
 * largest possible UTF-8 characters
 */
export function utf8_strncpy(dest: string, src: string, n: number): string;
/**
 * Find the rightmost occurrence of the given Unicode character
 * in a UTF-8 encoded string, while limiting the search to @len bytes.
 * If @len is -1, allow unbounded search.
 */
export function utf8_strrchr(p: string, len: number, c: number): string;
/**
 * Reverses a UTF-8 string. @str must be valid UTF-8 encoded text.
 * (Use g_utf8_validate() on all text before trying to use UTF-8
 * utility functions with it.)
 * This function is intended for programmatic uses of reversed strings.
 * It pays no attention to decomposed characters, combining marks, byte
 * order marks, directional indicators (LRM, LRO, etc) and similar
 * characters which might need special handling when reversing a string
 * for display purposes.
 * Note that unlike g_strreverse(), this function returns
 * newly-allocated memory, which should be freed with g_free() when
 * no longer needed.
 */
export function utf8_strreverse(str: string, len: number): string;
/**
 * Converts all Unicode characters in the string that have a case
 * to uppercase. The exact manner that this is done depends
 * on the current locale, and may result in the number of
 * characters in the string increasing. (For instance, the
 * German ess-zet will be changed to SS.)
 */
export function utf8_strup(str: string, len: number): string;
/**
 * Copies a substring out of a UTF-8 encoded string.
 * The substring will contain @end_pos - @start_pos characters.
 */
export function utf8_substring(str: string, start_pos: number, end_pos: number): string;
/**
 * Convert a string from UTF-8 to a 32-bit fixed width
 * representation as UCS-4. A trailing 0 character will be added to the
 * string after the converted text.
 */
export function utf8_to_ucs4(str: string, len: number): [number, number | null,number | null];
/**
 * Convert a string from UTF-8 to a 32-bit fixed width
 * representation as UCS-4, assuming valid UTF-8 input.
 * This function is roughly twice as fast as g_utf8_to_ucs4()
 * but does no error checking on the input. A trailing 0 character
 * will be added to the string after the converted text.
 */
export function utf8_to_ucs4_fast(str: string, len: number): [number, number | null];
/**
 * Convert a string from UTF-8 to UTF-16. A 0 character will be
 * added to the result after the converted text.
 */
export function utf8_to_utf16(str: string, len: number): [number, number | null,number | null];
/**
 * Validates UTF-8 encoded text. @str is the text to validate;
 * if @str is nul-terminated, then @max_len can be -1, otherwise
 * @max_len should be the number of bytes to validate.
 * If @end is non-%NULL, then the end of the valid range
 * will be stored there (i.e. the start of the first invalid
 * character if some bytes were invalid, or the end of the text
 * being validated otherwise).
 * Note that g_utf8_validate() returns %FALSE if @max_len is
 * positive and any of the @max_len bytes are nul.
 * Returns %TRUE if all of @str was valid. Many GLib and GTK+
 * routines require valid UTF-8 as input; so data read from a file
 * or the network should be checked with g_utf8_validate() before
 * doing anything else with it.
 */
export function utf8_validate(str: number[], max_len: number): [boolean, string | null];
/**
 * Validates UTF-8 encoded text.
 * As with g_utf8_validate(), but @max_len must be set, and hence this fu
 * nction
 * will always return %FALSE if any of the bytes of @str are nul.
 */
export function utf8_validate_len(str: number[], max_len: number): [boolean, string | null];
/**
 * Parses the string @str and verify if it is a UUID.
 * The function accepts the following syntax:
 * - simple forms (e.g. `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`)
 * Note that hyphens are required within the UUID string itself,
 * as per the aforementioned RFC.
 */
export function uuid_string_is_valid(str: string): boolean;
/**
 * Generates a random UUID (RFC 4122 version 4) as a string.
 */
export function uuid_string_random(): string;
/**
 * 
 */
export function variant_get_gtype(): GType;
/**
 * Determines if a given string is a valid D-Bus object path.  You
 * should ensure that a string is a valid D-Bus object path before
 * passing it to g_variant_new_object_path().
 * A valid object path starts with `/` followed by zero or more
 * sequences of characters separated by `/` characters.  Each sequence
 * must contain only the characters `[A-Z][a-z][0-9]_`.  No sequence
 * (including the one following the final `/` character) may be empty.
 */
export function variant_is_object_path(string: string): boolean;
/**
 * Determines if a given string is a valid D-Bus type signature.  You
 * should ensure that a string is a valid D-Bus type signature before
 * passing it to g_variant_new_signature().
 * D-Bus type signatures consist of zero or more definite #GVariantType
 * strings in sequence.
 */
export function variant_is_signature(string: string): boolean;
/**
 * Parses a #GVariant from a text representation.
 * A single #GVariant is parsed from the content of @text.
 * The format is described [here][gvariant-text].
 * The memory at @limit will never be accessed and the parser behaves as
 * if the character at @limit is the nul terminator.  This has the
 * effect of bounding @text.
 * If @endptr is non-%NULL then @text is permitted to contain data
 * following the value that this function parses and @endptr will be
 * updated to point to the first character past the end of the text
 * parsed by this function.  If @endptr is %NULL and there is extra data
 * then an error is returned.
 * If @type is non-%NULL then the value will be parsed to have that
 * type.  This may result in additional parse errors (in the case that
 * the parsed value doesn't fit the type) but may also result in fewer
 * errors (in the case that the type would have been ambiguous, such as
 * with empty arrays).
 * In the event that the parsing is successful, the resulting #GVariant
 * is returned. It is never floating, and must be freed with
 * g_variant_unref().
 * In case of any error, %NULL will be returned.  If @error is non-%NULL
 * then it will be set to reflect the error that occurred.
 * Officially, the language understood by the parser is "any string
 * produced by g_variant_print()".
 */
export function variant_parse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant;
/**
 * Pretty-prints a message showing the context of a #GVariant parse
 * error within the string for which parsing was attempted.
 * The resulting string is suitable for output to the console or other
 * monospace media where newlines are treated in the usual way.
 * The message will typically look something like one of the following:
 * |[
 * unterminated string constant:
 *   (1, 2, 3, 'abc
 *             ^^^^
 * ]|
 * or
 * |[
 * unable to find a common type:
 *   [1, 2, 3, 'str']
 *    ^        ^^^^^
 * ]|
 * The format of the message may change in a future version.
 * @error must have come from a failed attempt to g_variant_parse() and
 * @source_str must be exactly the same string that caused the error.
 * If @source_str was not nul-terminated when you passed it to
 * g_variant_parse() then you must add nul termination before using this
 * function.
 */
export function variant_parse_error_print_context(error: Error, source_str: string): string;
/**
 * 
 */
export function variant_parse_error_quark(): Quark;
/**
 * Same as g_variant_error_quark().
 */
export function variant_parser_get_error_quark(): Quark;
/**
 * 
 */
export function variant_type_checked_(arg0: string): VariantType;
/**
 * 
 */
export function variant_type_string_get_depth_(type_string: string): number;
/**
 * Checks if @type_string is a valid GVariant type string.  This call is
 * equivalent to calling g_variant_type_string_scan() and confirming
 * that the following character is a nul terminator.
 */
export function variant_type_string_is_valid(type_string: string): boolean;
/**
 * Scan for a single complete and valid GVariant type string in @string.
 * The memory pointed to by @limit (or bytes beyond it) is never
 * accessed.
 * If a valid type string is found, @endptr is updated to point to the
 * first character past the end of the string that was found and %TRUE
 * is returned.
 * If there is no valid type string starting at @string, or if the type
 * string does not end before @limit then %FALSE is returned.
 * For the simple case of checking if a string is a valid type string,
 * see g_variant_type_string_is_valid().
 */
export function variant_type_string_scan(string: string, limit: string | null): [boolean, string | null];
export enum BookmarkFileError {
    INVALID_URI = 0,
    INVALID_VALUE = 1,
    APP_NOT_REGISTERED = 2,
    URI_NOT_FOUND = 3,
    READ = 4,
    UNKNOWN_ENCODING = 5,
    WRITE = 6,
    FILE_NOT_FOUND = 7,
}
export enum ChecksumType {
    MD5 = 0,
    SHA1 = 1,
    SHA256 = 2,
    SHA512 = 3,
    SHA384 = 4,
}
export enum ConvertError {
    NO_CONVERSION = 0,
    ILLEGAL_SEQUENCE = 1,
    FAILED = 2,
    PARTIAL_INPUT = 3,
    BAD_URI = 4,
    NOT_ABSOLUTE_PATH = 5,
    NO_MEMORY = 6,
    EMBEDDED_NUL = 7,
}
export enum DateDMY {
    DAY = 0,
    MONTH = 1,
    YEAR = 2,
}
export enum DateMonth {
    BAD_MONTH = 0,
    JANUARY = 1,
    FEBRUARY = 2,
    MARCH = 3,
    APRIL = 4,
    MAY = 5,
    JUNE = 6,
    JULY = 7,
    AUGUST = 8,
    SEPTEMBER = 9,
    OCTOBER = 10,
    NOVEMBER = 11,
    DECEMBER = 12,
}
export enum DateWeekday {
    BAD_WEEKDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
}
export enum ErrorType {
    UNKNOWN = 0,
    UNEXP_EOF = 1,
    UNEXP_EOF_IN_STRING = 2,
    UNEXP_EOF_IN_COMMENT = 3,
    NON_DIGIT_IN_CONST = 4,
    DIGIT_RADIX = 5,
    FLOAT_RADIX = 6,
    FLOAT_MALFORMED = 7,
}
export enum FileError {
    EXIST = 0,
    ISDIR = 1,
    ACCES = 2,
    NAMETOOLONG = 3,
    NOENT = 4,
    NOTDIR = 5,
    NXIO = 6,
    NODEV = 7,
    ROFS = 8,
    TXTBSY = 9,
    FAULT = 10,
    LOOP = 11,
    NOSPC = 12,
    NOMEM = 13,
    MFILE = 14,
    NFILE = 15,
    BADF = 16,
    INVAL = 17,
    PIPE = 18,
    AGAIN = 19,
    INTR = 20,
    IO = 21,
    PERM = 22,
    NOSYS = 23,
    FAILED = 24,
}
export enum IOChannelError {
    FBIG = 0,
    INVAL = 1,
    IO = 2,
    ISDIR = 3,
    NOSPC = 4,
    NXIO = 5,
    OVERFLOW = 6,
    PIPE = 7,
    FAILED = 8,
}
export enum IOError {
    NONE = 0,
    AGAIN = 1,
    INVAL = 2,
    UNKNOWN = 3,
}
export enum IOStatus {
    ERROR = 0,
    NORMAL = 1,
    EOF = 2,
    AGAIN = 3,
}
export enum KeyFileError {
    UNKNOWN_ENCODING = 0,
    PARSE = 1,
    NOT_FOUND = 2,
    KEY_NOT_FOUND = 3,
    GROUP_NOT_FOUND = 4,
    INVALID_VALUE = 5,
}
export enum LogWriterOutput {
    HANDLED = 1,
    UNHANDLED = 0,
}
export enum MarkupError {
    BAD_UTF8 = 0,
    EMPTY = 1,
    PARSE = 2,
    UNKNOWN_ELEMENT = 3,
    UNKNOWN_ATTRIBUTE = 4,
    INVALID_CONTENT = 5,
    MISSING_ATTRIBUTE = 6,
}
export enum NormalizeMode {
    DEFAULT = 0,
    NFD = 0,
    DEFAULT_COMPOSE = 1,
    NFC = 1,
    ALL = 2,
    NFKD = 2,
    ALL_COMPOSE = 3,
    NFKC = 3,
}
export enum NumberParserError {
    INVALID = 0,
    OUT_OF_BOUNDS = 1,
}
export enum OnceStatus {
    NOTCALLED = 0,
    PROGRESS = 1,
    READY = 2,
}
export enum OptionArg {
    NONE = 0,
    STRING = 1,
    INT = 2,
    CALLBACK = 3,
    FILENAME = 4,
    STRING_ARRAY = 5,
    FILENAME_ARRAY = 6,
    DOUBLE = 7,
    INT64 = 8,
}
export enum OptionError {
    UNKNOWN_OPTION = 0,
    BAD_VALUE = 1,
    FAILED = 2,
}
export enum RegexError {
    COMPILE = 0,
    OPTIMIZE = 1,
    REPLACE = 2,
    MATCH = 3,
    INTERNAL = 4,
    STRAY_BACKSLASH = 101,
    MISSING_CONTROL_CHAR = 102,
    UNRECOGNIZED_ESCAPE = 103,
    QUANTIFIERS_OUT_OF_ORDER = 104,
    QUANTIFIER_TOO_BIG = 105,
    UNTERMINATED_CHARACTER_CLASS = 106,
    INVALID_ESCAPE_IN_CHARACTER_CLASS = 107,
    RANGE_OUT_OF_ORDER = 108,
    NOTHING_TO_REPEAT = 109,
    UNRECOGNIZED_CHARACTER = 112,
    POSIX_NAMED_CLASS_OUTSIDE_CLASS = 113,
    UNMATCHED_PARENTHESIS = 114,
    INEXISTENT_SUBPATTERN_REFERENCE = 115,
    UNTERMINATED_COMMENT = 118,
    EXPRESSION_TOO_LARGE = 120,
    MEMORY_ERROR = 121,
    VARIABLE_LENGTH_LOOKBEHIND = 125,
    MALFORMED_CONDITION = 126,
    TOO_MANY_CONDITIONAL_BRANCHES = 127,
    ASSERTION_EXPECTED = 128,
    UNKNOWN_POSIX_CLASS_NAME = 130,
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED = 131,
    HEX_CODE_TOO_LARGE = 134,
    INVALID_CONDITION = 135,
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND = 136,
    INFINITE_LOOP = 140,
    MISSING_SUBPATTERN_NAME_TERMINATOR = 142,
    DUPLICATE_SUBPATTERN_NAME = 143,
    MALFORMED_PROPERTY = 146,
    UNKNOWN_PROPERTY = 147,
    SUBPATTERN_NAME_TOO_LONG = 148,
    TOO_MANY_SUBPATTERNS = 149,
    INVALID_OCTAL_VALUE = 151,
    TOO_MANY_BRANCHES_IN_DEFINE = 154,
    DEFINE_REPETION = 155,
    INCONSISTENT_NEWLINE_OPTIONS = 156,
    MISSING_BACK_REFERENCE = 157,
    INVALID_RELATIVE_REFERENCE = 158,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN = 159,
    UNKNOWN_BACKTRACKING_CONTROL_VERB = 160,
    NUMBER_TOO_BIG = 161,
    MISSING_SUBPATTERN_NAME = 162,
    MISSING_DIGIT = 163,
    INVALID_DATA_CHARACTER = 164,
    EXTRA_SUBPATTERN_NAME = 165,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED = 166,
    INVALID_CONTROL_CHAR = 168,
    MISSING_NAME = 169,
    NOT_SUPPORTED_IN_CLASS = 171,
    TOO_MANY_FORWARD_REFERENCES = 172,
    NAME_TOO_LONG = 175,
    CHARACTER_VALUE_TOO_LARGE = 176,
}
export enum SeekType {
    CUR = 0,
    SET = 1,
    END = 2,
}
export enum ShellError {
    BAD_QUOTING = 0,
    EMPTY_STRING = 1,
    FAILED = 2,
}
export enum SliceConfig {
    ALWAYS_MALLOC = 1,
    BYPASS_MAGAZINES = 2,
    WORKING_SET_MSECS = 3,
    COLOR_INCREMENT = 4,
    CHUNK_SIZES = 5,
    CONTENTION_COUNTER = 6,
}
export enum SpawnError {
    FORK = 0,
    READ = 1,
    CHDIR = 2,
    ACCES = 3,
    PERM = 4,
    TOO_BIG = 5,
    "2BIG" = 5,
    NOEXEC = 6,
    NAMETOOLONG = 7,
    NOENT = 8,
    NOMEM = 9,
    NOTDIR = 10,
    LOOP = 11,
    TXTBUSY = 12,
    IO = 13,
    NFILE = 14,
    MFILE = 15,
    INVAL = 16,
    ISDIR = 17,
    LIBBAD = 18,
    FAILED = 19,
}
export enum TestFileType {
    DIST = 0,
    BUILT = 1,
}
export enum TestLogType {
    NONE = 0,
    ERROR = 1,
    START_BINARY = 2,
    LIST_CASE = 3,
    SKIP_CASE = 4,
    START_CASE = 5,
    STOP_CASE = 6,
    MIN_RESULT = 7,
    MAX_RESULT = 8,
    MESSAGE = 9,
    START_SUITE = 10,
    STOP_SUITE = 11,
}
export enum TestResult {
    SUCCESS = 0,
    SKIPPED = 1,
    FAILURE = 2,
    INCOMPLETE = 3,
}
export enum ThreadError {
    THREAD_ERROR_AGAIN = 0,
}
export enum TimeType {
    STANDARD = 0,
    DAYLIGHT = 1,
    UNIVERSAL = 2,
}
export enum TokenType {
    EOF = 0,
    LEFT_PAREN = 40,
    RIGHT_PAREN = 41,
    LEFT_CURLY = 123,
    RIGHT_CURLY = 125,
    LEFT_BRACE = 91,
    RIGHT_BRACE = 93,
    EQUAL_SIGN = 61,
    COMMA = 44,
    NONE = 256,
    ERROR = 257,
    CHAR = 258,
    BINARY = 259,
    OCTAL = 260,
    INT = 261,
    HEX = 262,
    FLOAT = 263,
    STRING = 264,
    SYMBOL = 265,
    IDENTIFIER = 266,
    IDENTIFIER_NULL = 267,
    COMMENT_SINGLE = 268,
    COMMENT_MULTI = 269,
}
export enum TraverseType {
    IN_ORDER = 0,
    PRE_ORDER = 1,
    POST_ORDER = 2,
    LEVEL_ORDER = 3,
}
export enum UnicodeBreakType {
    MANDATORY = 0,
    CARRIAGE_RETURN = 1,
    LINE_FEED = 2,
    COMBINING_MARK = 3,
    SURROGATE = 4,
    ZERO_WIDTH_SPACE = 5,
    INSEPARABLE = 6,
    NON_BREAKING_GLUE = 7,
    CONTINGENT = 8,
    SPACE = 9,
    AFTER = 10,
    BEFORE = 11,
    BEFORE_AND_AFTER = 12,
    HYPHEN = 13,
    NON_STARTER = 14,
    OPEN_PUNCTUATION = 15,
    CLOSE_PUNCTUATION = 16,
    QUOTATION = 17,
    EXCLAMATION = 18,
    IDEOGRAPHIC = 19,
    NUMERIC = 20,
    INFIX_SEPARATOR = 21,
    SYMBOL = 22,
    ALPHABETIC = 23,
    PREFIX = 24,
    POSTFIX = 25,
    COMPLEX_CONTEXT = 26,
    AMBIGUOUS = 27,
    UNKNOWN = 28,
    NEXT_LINE = 29,
    WORD_JOINER = 30,
    HANGUL_L_JAMO = 31,
    HANGUL_V_JAMO = 32,
    HANGUL_T_JAMO = 33,
    HANGUL_LV_SYLLABLE = 34,
    HANGUL_LVT_SYLLABLE = 35,
    CLOSE_PARANTHESIS = 36,
    CONDITIONAL_JAPANESE_STARTER = 37,
    HEBREW_LETTER = 38,
    REGIONAL_INDICATOR = 39,
    EMOJI_BASE = 40,
    EMOJI_MODIFIER = 41,
    ZERO_WIDTH_JOINER = 42,
}
export enum UnicodeScript {
    INVALID_CODE = -1,
    COMMON = 0,
    INHERITED = 1,
    ARABIC = 2,
    ARMENIAN = 3,
    BENGALI = 4,
    BOPOMOFO = 5,
    CHEROKEE = 6,
    COPTIC = 7,
    CYRILLIC = 8,
    DESERET = 9,
    DEVANAGARI = 10,
    ETHIOPIC = 11,
    GEORGIAN = 12,
    GOTHIC = 13,
    GREEK = 14,
    GUJARATI = 15,
    GURMUKHI = 16,
    HAN = 17,
    HANGUL = 18,
    HEBREW = 19,
    HIRAGANA = 20,
    KANNADA = 21,
    KATAKANA = 22,
    KHMER = 23,
    LAO = 24,
    LATIN = 25,
    MALAYALAM = 26,
    MONGOLIAN = 27,
    MYANMAR = 28,
    OGHAM = 29,
    OLD_ITALIC = 30,
    ORIYA = 31,
    RUNIC = 32,
    SINHALA = 33,
    SYRIAC = 34,
    TAMIL = 35,
    TELUGU = 36,
    THAANA = 37,
    THAI = 38,
    TIBETAN = 39,
    CANADIAN_ABORIGINAL = 40,
    YI = 41,
    TAGALOG = 42,
    HANUNOO = 43,
    BUHID = 44,
    TAGBANWA = 45,
    BRAILLE = 46,
    CYPRIOT = 47,
    LIMBU = 48,
    OSMANYA = 49,
    SHAVIAN = 50,
    LINEAR_B = 51,
    TAI_LE = 52,
    UGARITIC = 53,
    NEW_TAI_LUE = 54,
    BUGINESE = 55,
    GLAGOLITIC = 56,
    TIFINAGH = 57,
    SYLOTI_NAGRI = 58,
    OLD_PERSIAN = 59,
    KHAROSHTHI = 60,
    UNKNOWN = 61,
    BALINESE = 62,
    CUNEIFORM = 63,
    PHOENICIAN = 64,
    PHAGS_PA = 65,
    NKO = 66,
    KAYAH_LI = 67,
    LEPCHA = 68,
    REJANG = 69,
    SUNDANESE = 70,
    SAURASHTRA = 71,
    CHAM = 72,
    OL_CHIKI = 73,
    VAI = 74,
    CARIAN = 75,
    LYCIAN = 76,
    LYDIAN = 77,
    AVESTAN = 78,
    BAMUM = 79,
    EGYPTIAN_HIEROGLYPHS = 80,
    IMPERIAL_ARAMAIC = 81,
    INSCRIPTIONAL_PAHLAVI = 82,
    INSCRIPTIONAL_PARTHIAN = 83,
    JAVANESE = 84,
    KAITHI = 85,
    LISU = 86,
    MEETEI_MAYEK = 87,
    OLD_SOUTH_ARABIAN = 88,
    OLD_TURKIC = 89,
    SAMARITAN = 90,
    TAI_THAM = 91,
    TAI_VIET = 92,
    BATAK = 93,
    BRAHMI = 94,
    MANDAIC = 95,
    CHAKMA = 96,
    MEROITIC_CURSIVE = 97,
    MEROITIC_HIEROGLYPHS = 98,
    MIAO = 99,
    SHARADA = 100,
    SORA_SOMPENG = 101,
    TAKRI = 102,
    BASSA_VAH = 103,
    CAUCASIAN_ALBANIAN = 104,
    DUPLOYAN = 105,
    ELBASAN = 106,
    GRANTHA = 107,
    KHOJKI = 108,
    KHUDAWADI = 109,
    LINEAR_A = 110,
    MAHAJANI = 111,
    MANICHAEAN = 112,
    MENDE_KIKAKUI = 113,
    MODI = 114,
    MRO = 115,
    NABATAEAN = 116,
    OLD_NORTH_ARABIAN = 117,
    OLD_PERMIC = 118,
    PAHAWH_HMONG = 119,
    PALMYRENE = 120,
    PAU_CIN_HAU = 121,
    PSALTER_PAHLAVI = 122,
    SIDDHAM = 123,
    TIRHUTA = 124,
    WARANG_CITI = 125,
    AHOM = 126,
    ANATOLIAN_HIEROGLYPHS = 127,
    HATRAN = 128,
    MULTANI = 129,
    OLD_HUNGARIAN = 130,
    SIGNWRITING = 131,
    ADLAM = 132,
    BHAIKSUKI = 133,
    MARCHEN = 134,
    NEWA = 135,
    OSAGE = 136,
    TANGUT = 137,
    MASARAM_GONDI = 138,
    NUSHU = 139,
    SOYOMBO = 140,
    ZANABAZAR_SQUARE = 141,
    DOGRA = 142,
    GUNJALA_GONDI = 143,
    HANIFI_ROHINGYA = 144,
    MAKASAR = 145,
    MEDEFAIDRIN = 146,
    OLD_SOGDIAN = 147,
    SOGDIAN = 148,
}
export enum UnicodeType {
    CONTROL = 0,
    FORMAT = 1,
    UNASSIGNED = 2,
    PRIVATE_USE = 3,
    SURROGATE = 4,
    LOWERCASE_LETTER = 5,
    MODIFIER_LETTER = 6,
    OTHER_LETTER = 7,
    TITLECASE_LETTER = 8,
    UPPERCASE_LETTER = 9,
    SPACING_MARK = 10,
    ENCLOSING_MARK = 11,
    NON_SPACING_MARK = 12,
    DECIMAL_NUMBER = 13,
    LETTER_NUMBER = 14,
    OTHER_NUMBER = 15,
    CONNECT_PUNCTUATION = 16,
    DASH_PUNCTUATION = 17,
    CLOSE_PUNCTUATION = 18,
    FINAL_PUNCTUATION = 19,
    INITIAL_PUNCTUATION = 20,
    OTHER_PUNCTUATION = 21,
    OPEN_PUNCTUATION = 22,
    CURRENCY_SYMBOL = 23,
    MODIFIER_SYMBOL = 24,
    MATH_SYMBOL = 25,
    OTHER_SYMBOL = 26,
    LINE_SEPARATOR = 27,
    PARAGRAPH_SEPARATOR = 28,
    SPACE_SEPARATOR = 29,
}
export enum UserDirectory {
    DIRECTORY_DESKTOP = 0,
    DIRECTORY_DOCUMENTS = 1,
    DIRECTORY_DOWNLOAD = 2,
    DIRECTORY_MUSIC = 3,
    DIRECTORY_PICTURES = 4,
    DIRECTORY_PUBLIC_SHARE = 5,
    DIRECTORY_TEMPLATES = 6,
    DIRECTORY_VIDEOS = 7,
    N_DIRECTORIES = 8,
}
export enum VariantClass {
    BOOLEAN = 98,
    BYTE = 121,
    INT16 = 110,
    UINT16 = 113,
    INT32 = 105,
    UINT32 = 117,
    INT64 = 120,
    UINT64 = 116,
    HANDLE = 104,
    DOUBLE = 100,
    STRING = 115,
    OBJECT_PATH = 111,
    SIGNATURE = 103,
    VARIANT = 118,
    MAYBE = 109,
    ARRAY = 97,
    TUPLE = 40,
    DICT_ENTRY = 123,
}
export enum VariantParseError {
    FAILED = 0,
    BASIC_TYPE_EXPECTED = 1,
    CANNOT_INFER_TYPE = 2,
    DEFINITE_TYPE_EXPECTED = 3,
    INPUT_NOT_AT_END = 4,
    INVALID_CHARACTER = 5,
    INVALID_FORMAT_STRING = 6,
    INVALID_OBJECT_PATH = 7,
    INVALID_SIGNATURE = 8,
    INVALID_TYPE_STRING = 9,
    NO_COMMON_TYPE = 10,
    NUMBER_OUT_OF_RANGE = 11,
    NUMBER_TOO_BIG = 12,
    TYPE_ERROR = 13,
    UNEXPECTED_TOKEN = 14,
    UNKNOWN_KEYWORD = 15,
    UNTERMINATED_STRING_CONSTANT = 16,
    VALUE_EXPECTED = 17,
}
export type DateDay = number;
export type DateYear = number;
export type MutexLocker = void;
export type Pid = number;
export type Quark = number;
export type RecMutexLocker = void;
export type RefString = number;
export type Strv = string;
export type Time = number;
export type TimeSpan = number;
export type Type = number;
export enum AsciiType {
    ALNUM = 1,
    ALPHA = 2,
    CNTRL = 4,
    DIGIT = 8,
    GRAPH = 16,
    LOWER = 32,
    PRINT = 64,
    PUNCT = 128,
    SPACE = 256,
    UPPER = 512,
    XDIGIT = 1024,
}
export enum FileTest {
    IS_REGULAR = 1,
    IS_SYMLINK = 2,
    IS_DIR = 4,
    IS_EXECUTABLE = 8,
    EXISTS = 16,
}
export enum FormatSizeFlags {
    DEFAULT = 0,
    LONG_FORMAT = 1,
    IEC_UNITS = 2,
    BITS = 4,
}
export enum HookFlagMask {
    ACTIVE = 1,
    IN_CALL = 2,
    MASK = 15,
}
export enum IOCondition {
    IN = 1,
    OUT = 4,
    PRI = 2,
    ERR = 8,
    HUP = 16,
    NVAL = 32,
}
export enum IOFlags {
    APPEND = 1,
    NONBLOCK = 2,
    IS_READABLE = 4,
    IS_WRITABLE = 8,
    IS_WRITEABLE = 8,
    IS_SEEKABLE = 16,
    MASK = 31,
    GET_MASK = 31,
    SET_MASK = 3,
}
export enum KeyFileFlags {
    NONE = 0,
    KEEP_COMMENTS = 1,
    KEEP_TRANSLATIONS = 2,
}
export enum LogLevelFlags {
    FLAG_RECURSION = 1,
    FLAG_FATAL = 2,
    LEVEL_ERROR = 4,
    LEVEL_CRITICAL = 8,
    LEVEL_WARNING = 16,
    LEVEL_MESSAGE = 32,
    LEVEL_INFO = 64,
    LEVEL_DEBUG = 128,
    LEVEL_MASK = -4,
}
export enum MarkupCollectType {
    INVALID = 0,
    STRING = 1,
    STRDUP = 2,
    BOOLEAN = 3,
    TRISTATE = 4,
    OPTIONAL = 65536,
}
export enum MarkupParseFlags {
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG = 1,
    TREAT_CDATA_AS_TEXT = 2,
    PREFIX_ERROR_POSITION = 4,
    IGNORE_QUALIFIED = 8,
}
export enum OptionFlags {
    NONE = 0,
    HIDDEN = 1,
    IN_MAIN = 2,
    REVERSE = 4,
    NO_ARG = 8,
    FILENAME = 16,
    OPTIONAL_ARG = 32,
    NOALIAS = 64,
}
export enum RegexCompileFlags {
    CASELESS = 1,
    MULTILINE = 2,
    DOTALL = 4,
    EXTENDED = 8,
    ANCHORED = 16,
    DOLLAR_ENDONLY = 32,
    UNGREEDY = 512,
    RAW = 2048,
    NO_AUTO_CAPTURE = 4096,
    OPTIMIZE = 8192,
    FIRSTLINE = 262144,
    DUPNAMES = 524288,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    JAVASCRIPT_COMPAT = 33554432,
}
export enum RegexMatchFlags {
    ANCHORED = 16,
    NOTBOL = 128,
    NOTEOL = 256,
    NOTEMPTY = 1024,
    PARTIAL = 32768,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANY = 4194304,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    BSR_ANY = 16777216,
    PARTIAL_SOFT = 32768,
    PARTIAL_HARD = 134217728,
    NOTEMPTY_ATSTART = 268435456,
}
export enum SpawnFlags {
    DEFAULT = 0,
    LEAVE_DESCRIPTORS_OPEN = 1,
    DO_NOT_REAP_CHILD = 2,
    SEARCH_PATH = 4,
    STDOUT_TO_DEV_NULL = 8,
    STDERR_TO_DEV_NULL = 16,
    CHILD_INHERITS_STDIN = 32,
    FILE_AND_ARGV_ZERO = 64,
    SEARCH_PATH_FROM_ENVP = 128,
    CLOEXEC_PIPES = 256,
}
export enum TestSubprocessFlags {
    STDIN = 1,
    STDOUT = 2,
    STDERR = 4,
}
export enum TestTrapFlags {
    SILENCE_STDOUT = 128,
    SILENCE_STDERR = 256,
    INHERIT_STDIN = 512,
}
export enum TraverseFlags {
    LEAVES = 1,
    NON_LEAVES = 2,
    ALL = 3,
    MASK = 3,
    LEAFS = 1,
    NON_LEAFS = 2,
}
export class Array  {
    constructor(config?: properties);
    data: string;
    len: number;
}
export class AsyncQueue  {
    constructor(config?: properties);
    length(): number;
    length_unlocked(): number;
    lock(): void;
    pop(): object | null;
    pop_unlocked(): object | null;
    push(data: object | null): void;
    push_front(item: object | null): void;
    push_front_unlocked(item: object | null): void;
    push_unlocked(data: object | null): void;
    ref_unlocked(): void;
    remove(item: object | null): boolean;
    remove_unlocked(item: object | null): boolean;
    timed_pop(end_time: TimeVal): object | null;
    timed_pop_unlocked(end_time: TimeVal): object | null;
    timeout_pop(timeout: number): object | null;
    timeout_pop_unlocked(timeout: number): object | null;
    try_pop(): object | null;
    try_pop_unlocked(): object | null;
    unlock(): void;
    unref(): void;
    unref_and_unlock(): void;
}
export class BookmarkFile  {
    constructor(config?: properties);
    add_application(uri: string, name: string | null, exec: string | null): void;
    add_group(uri: string, group: string): void;
    free(): void;
    get_added(uri: string): number;
    get_app_info(uri: string, name: string): [boolean, string | null,number | null,number | null];
    get_applications(uri: string): [string[], number | null];
    get_description(uri: string): string;
    get_groups(uri: string): [string[], number | null];
    get_icon(uri: string): [boolean, string | null,string | null];
    get_is_private(uri: string): boolean;
    get_mime_type(uri: string): string;
    get_modified(uri: string): number;
    get_size(): number;
    get_title(uri: string | null): string;
    get_uris(): [string[], number | null];
    get_visited(uri: string): number;
    has_application(uri: string, name: string): boolean;
    has_group(uri: string, group: string): boolean;
    has_item(uri: string): boolean;
    load_from_data(data: number[], length: number): boolean;
    load_from_data_dirs(file: string): [boolean, string | null];
    load_from_file(filename: string): boolean;
    move_item(old_uri: string, new_uri: string | null): boolean;
    remove_application(uri: string, name: string): boolean;
    remove_group(uri: string, group: string): boolean;
    remove_item(uri: string): boolean;
    set_added(uri: string, added: number): void;
    set_app_info(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
    set_description(uri: string | null, description: string): void;
    set_groups(uri: string, groups: string[] | null, length: number): void;
    set_icon(uri: string, href: string | null, mime_type: string): void;
    set_is_private(uri: string, is_private: boolean): void;
    set_mime_type(uri: string, mime_type: string): void;
    set_modified(uri: string, modified: number): void;
    set_title(uri: string | null, title: string): void;
    set_visited(uri: string, visited: number): void;
    to_data(): [number[], number | null];
    to_file(filename: string): boolean;
    static error_quark(): Quark;
}
export class ByteArray  {
    constructor(config?: properties);
    data: number;
    len: number;
    static free(array: number[], free_segment: boolean): number;
    static free_to_bytes(array: number[]): Bytes;
    static _new(): number[];
    static new_take(data: number[], len: number): number[];
    static unref(array: number[]): void;
}
export class Bytes  {
    constructor(config?: properties);
    static new_take(data: number[] | null, size: number): Bytes;
    compare(bytes2: Bytes): number;
    equal(bytes2: Bytes): boolean;
    get_data(): [number[] | null, number | null];
    get_size(): number;
    hash(): number;
    new_from_bytes(offset: number, length: number): Bytes;
    ref(): Bytes;
    unref(): void;
    unref_to_array(): number[];
    unref_to_data(): [number[], number];
}
export class Checksum  {
    constructor(config?: properties);
    copy(): Checksum;
    free(): void;
    get_string(): string;
    reset(): void;
    update(data: number[], length: number): void;
    static type_get_length(checksum_type: ChecksumType): number;
}
export class Cond  {
    constructor(config?: properties);
    readonly p: object;
    readonly i: number[];
    broadcast(): void;
    clear(): void;
    init(): void;
    signal(): void;
    wait(mutex: Mutex): void;
    wait_until(mutex: Mutex, end_time: number): boolean;
}
export class Data  {
    constructor(config?: properties);
}
export class Date  {
    constructor(config?: properties);
    static new_dmy(day: DateDay, month: DateMonth, year: DateYear): Date;
    static new_julian(julian_day: number): Date;
    add_days(n_days: number): void;
    add_months(n_months: number): void;
    add_years(n_years: number): void;
    clamp(min_date: Date, max_date: Date): void;
    clear(n_dates: number): void;
    compare(rhs: Date): number;
    copy(): Date;
    days_between(date2: Date): number;
    free(): void;
    get_day(): DateDay;
    get_day_of_year(): number;
    get_iso8601_week_of_year(): number;
    get_julian(): number;
    get_monday_week_of_year(): number;
    get_month(): DateMonth;
    get_sunday_week_of_year(): number;
    get_weekday(): DateWeekday;
    get_year(): DateYear;
    is_first_of_month(): boolean;
    is_last_of_month(): boolean;
    order(date2: Date): void;
    set_day(day: DateDay): void;
    set_dmy(day: DateDay, month: DateMonth, y: DateYear): void;
    set_julian(julian_date: number): void;
    set_month(month: DateMonth): void;
    set_parse(str: string): void;
    set_time(time_: Time): void;
    set_time_t(timet: number): void;
    set_time_val(timeval: TimeVal): void;
    set_year(year: DateYear): void;
    subtract_days(n_days: number): void;
    subtract_months(n_months: number): void;
    subtract_years(n_years: number): void;
    to_struct_tm(tm: object): void;
    valid(): boolean;
    static get_days_in_month(month: DateMonth, year: DateYear): number;
    static get_monday_weeks_in_year(year: DateYear): number;
    static get_sunday_weeks_in_year(year: DateYear): number;
    static is_leap_year(year: DateYear): boolean;
    static strftime(s: string, slen: number, format: string, date: Date): number;
    static valid_day(day: DateDay): boolean;
    static valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
    static valid_julian(julian_date: number): boolean;
    static valid_month(month: DateMonth): boolean;
    static valid_weekday(weekday: DateWeekday): boolean;
    static valid_year(year: DateYear): boolean;
}
export class DateTime  {
    constructor(config?: properties);
    static new_from_iso8601(text: string, default_tz: TimeZone | null): DateTime | null;
    static new_from_timeval_local(tv: TimeVal): DateTime;
    static new_from_timeval_utc(tv: TimeVal): DateTime;
    static new_from_unix_local(t: number): DateTime;
    static new_from_unix_utc(t: number): DateTime;
    static new_local(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
    static new_now(tz: TimeZone): DateTime;
    static new_now_local(): DateTime;
    static new_now_utc(): DateTime;
    static new_utc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
    add(timespan: TimeSpan): DateTime;
    add_days(days: number): DateTime;
    add_full(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime;
    add_hours(hours: number): DateTime;
    add_minutes(minutes: number): DateTime;
    add_months(months: number): DateTime;
    add_seconds(seconds: number): DateTime;
    add_weeks(weeks: number): DateTime;
    add_years(years: number): DateTime;
    difference(begin: DateTime): TimeSpan;
    format(format: string): string;
    get_day_of_month(): number;
    get_day_of_week(): number;
    get_day_of_year(): number;
    get_hour(): number;
    get_microsecond(): number;
    get_minute(): number;
    get_month(): number;
    get_second(): number;
    get_seconds(): number;
    get_timezone(): TimeZone;
    get_timezone_abbreviation(): string;
    get_utc_offset(): TimeSpan;
    get_week_numbering_year(): number;
    get_week_of_year(): number;
    get_year(): number;
    get_ymd(): [number | null,number | null,number | null];
    is_daylight_savings(): boolean;
    ref(): DateTime;
    to_local(): DateTime;
    to_timeval(tv: TimeVal): boolean;
    to_timezone(tz: TimeZone): DateTime;
    to_unix(): number;
    to_utc(): DateTime;
    unref(): void;
    static compare(dt1: object, dt2: object): number;
    static equal(dt1: object, dt2: object): boolean;
    static hash(datetime: object): number;
}
export class DebugKey  {
    constructor(config?: properties);
    key: string;
    value: number;
}
export class Dir  {
    constructor(config?: properties);
    close(): void;
    read_name(): string;
    rewind(): void;
    static make_tmp(tmpl: string | null): string;
}
export class Error  {
    constructor(config?: properties);
    static new_literal(domain: Quark, code: number, message: string): Error;
    copy(): Error;
    free(): void;
    matches(domain: Quark, code: number): boolean;
}
export class HashTable  {
    constructor(config?: properties);
    static add(hash_table: HashTable, key: object | null): boolean;
    static contains(hash_table: HashTable, key: object | null): boolean;
    static destroy(hash_table: HashTable): void;
    static insert(hash_table: HashTable, key: object | null, value: object | null): boolean;
    static lookup(hash_table: HashTable, key: object | null): object | null;
    static lookup_extended(hash_table: HashTable, lookup_key: object | null): [boolean, object | null,object | null];
    static remove(hash_table: HashTable, key: object | null): boolean;
    static remove_all(hash_table: HashTable): void;
    static replace(hash_table: HashTable, key: object | null, value: object | null): boolean;
    static size(hash_table: HashTable): number;
    static steal(hash_table: HashTable, key: object | null): boolean;
    static steal_all(hash_table: HashTable): void;
    static steal_extended(hash_table: HashTable, lookup_key: object | null): [boolean, object | null,object | null];
    static unref(hash_table: HashTable): void;
}
export class HashTableIter  {
    constructor(config?: properties);
    readonly dummy1: object;
    readonly dummy2: object;
    readonly dummy3: object;
    readonly dummy4: number;
    readonly dummy5: boolean;
    readonly dummy6: object;
    init(hash_table: HashTable): void;
    next(): [boolean, object | null,object | null];
    remove(): void;
    replace(value: object | null): void;
    steal(): void;
}
export class Hmac  {
    constructor(config?: properties);
    get_digest(buffer: number[], digest_len: number): [number];
    get_string(): string;
    unref(): void;
    update(data: number[], length: number): void;
}
export class Hook  {
    constructor(config?: properties);
    data: object;
    next: Hook;
    prev: Hook;
    ref_count: number;
    hook_id: number;
    flags: number;
    func: object;
    compare_ids(sibling: Hook): number;
    static destroy(hook_list: HookList, hook_id: number): boolean;
    static destroy_link(hook_list: HookList, hook: Hook): void;
    static free(hook_list: HookList, hook: Hook): void;
    static insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
    static prepend(hook_list: HookList, hook: Hook): void;
    static unref(hook_list: HookList, hook: Hook): void;
}
export class HookList  {
    constructor(config?: properties);
    seq_id: number;
    hook_size: number;
    is_setup: number;
    hooks: Hook;
    dummy3: object;
    finalize_hook: HookFinalizeFunc;
    dummy: object[];
    clear(): void;
    init(hook_size: number): void;
    invoke(may_recurse: boolean): void;
    invoke_check(may_recurse: boolean): void;
}
export class IOChannel  {
    constructor(config?: properties);
    static new_file(filename: string, mode: string): IOChannel;
    static unix_new(fd: number): IOChannel;
    close(): void;
    flush(): IOStatus;
    get_buffer_condition(): IOCondition;
    get_buffer_size(): number;
    get_buffered(): boolean;
    get_close_on_unref(): boolean;
    get_encoding(): string;
    get_flags(): IOFlags;
    get_line_term(length: number): string;
    init(): void;
    read(buf: string, count: number, bytes_read: number): IOError;
    read_chars(count: number): [IOStatus, number[],number | null];
    read_line(): [IOStatus, string,number | null,number | null];
    read_line_string(buffer: String, terminator_pos: number | null): IOStatus;
    read_to_end(): [IOStatus, number[],number];
    read_unichar(): [IOStatus, number];
    ref(): IOChannel;
    seek(offset: number, type: SeekType): IOError;
    seek_position(offset: number, type: SeekType): IOStatus;
    set_buffer_size(size: number): void;
    set_buffered(buffered: boolean): void;
    set_close_on_unref(do_close: boolean): void;
    set_encoding(encoding: string | null): IOStatus;
    set_flags(flags: IOFlags): IOStatus;
    set_line_term(line_term: string | null, length: number): void;
    shutdown(flush: boolean): IOStatus;
    unix_get_fd(): number;
    unref(): void;
    write(buf: string, count: number, bytes_written: number): IOError;
    write_chars(buf: number[], count: number): [IOStatus, number];
    write_unichar(thechar: number): IOStatus;
    static error_from_errno(en: number): IOChannelError;
    static error_quark(): Quark;
}
export class IOFuncs  {
    constructor(config?: properties);
}
export class KeyFile  {
    constructor(config?: properties);
    get_boolean(group_name: string, key: string): boolean;
    get_boolean_list(group_name: string, key: string): [boolean[], number];
    get_comment(group_name: string | null, key: string): string;
    get_double(group_name: string, key: string): number;
    get_double_list(group_name: string, key: string): [number[], number];
    get_groups(): [string[], number | null];
    get_int64(group_name: string, key: string): number;
    get_integer(group_name: string, key: string): number;
    get_integer_list(group_name: string, key: string): [number[], number];
    get_keys(group_name: string): [string[], number | null];
    get_locale_for_key(group_name: string, key: string, locale: string | null): string | null;
    get_locale_string(group_name: string, key: string, locale: string | null): string;
    get_locale_string_list(group_name: string, key: string, locale: string | null): [string[], number | null];
    get_start_group(): string;
    get_string(group_name: string, key: string): string;
    get_string_list(group_name: string, key: string): [string[], number | null];
    get_uint64(group_name: string, key: string): number;
    get_value(group_name: string, key: string): string;
    has_group(group_name: string): boolean;
    load_from_bytes(bytes: Bytes, flags: KeyFileFlags): boolean;
    load_from_data(data: string, length: number, flags: KeyFileFlags): boolean;
    load_from_data_dirs(file: string, flags: KeyFileFlags): [boolean, string | null];
    load_from_dirs(file: string, search_dirs: string[], flags: KeyFileFlags): [boolean, string | null];
    load_from_file(file: string, flags: KeyFileFlags): boolean;
    remove_comment(group_name: string | null, key: string | null): boolean;
    remove_group(group_name: string): boolean;
    remove_key(group_name: string, key: string): boolean;
    save_to_file(filename: string): boolean;
    set_boolean(group_name: string, key: string, value: boolean): void;
    set_boolean_list(group_name: string, key: string, list: boolean[], length: number): void;
    set_comment(group_name: string | null, key: string | null, comment: string): boolean;
    set_double(group_name: string, key: string, value: number): void;
    set_double_list(group_name: string, key: string, list: number[], length: number): void;
    set_int64(group_name: string, key: string, value: number): void;
    set_integer(group_name: string, key: string, value: number): void;
    set_integer_list(group_name: string, key: string, list: number[], length: number): void;
    set_list_separator(separator: number): void;
    set_locale_string(group_name: string, key: string, locale: string, string: string): void;
    set_locale_string_list(group_name: string, key: string, locale: string, list: string[], length: number): void;
    set_string(group_name: string, key: string, string: string): void;
    set_string_list(group_name: string, key: string, list: string[], length: number): void;
    set_uint64(group_name: string, key: string, value: number): void;
    set_value(group_name: string, key: string, value: string): void;
    to_data(): [string, number | null];
    unref(): void;
    static error_quark(): Quark;
}
export class List  {
    constructor(config?: properties);
    data: object;
    next: List;
    prev: List;
}
export class LogField  {
    constructor(config?: properties);
    key: string;
    value: object;
    length: number;
}
export class MainContext  {
    constructor(config?: properties);
    acquire(): boolean;
    add_poll(fd: PollFD, priority: number): void;
    check(max_priority: number, fds: PollFD[], n_fds: number): boolean;
    dispatch(): void;
    find_source_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): Source;
    find_source_by_id(source_id: number): Source;
    find_source_by_user_data(user_data: object | null): Source;
    invoke_full(priority: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): void;
    is_owner(): boolean;
    iteration(may_block: boolean): boolean;
    pending(): boolean;
    pop_thread_default(): void;
    prepare(priority: number): boolean;
    push_thread_default(): void;
    query(max_priority: number, n_fds: number): [number, number,PollFD[]];
    ref(): MainContext;
    release(): void;
    remove_poll(fd: PollFD): void;
    unref(): void;
    wait(cond: Cond, mutex: Mutex): boolean;
    wakeup(): void;
    static _default(): MainContext;
    static get_thread_default(): MainContext;
    static ref_thread_default(): MainContext;
}
export class MainLoop  {
    constructor(config?: properties);
    get_context(): MainContext;
    is_running(): boolean;
    quit(): void;
    ref(): MainLoop;
    run(): void;
    unref(): void;
}
export class MappedFile  {
    constructor(config?: properties);
    static new_from_fd(fd: number, writable: boolean): MappedFile;
    free(): void;
    get_bytes(): Bytes;
    get_contents(): string;
    get_length(): number;
    ref(): MappedFile;
    unref(): void;
}
export class MarkupParseContext  {
    constructor(config?: properties);
    end_parse(): boolean;
    free(): void;
    get_element(): string;
    get_position(line_number: number | null, char_number: number | null): void;
    get_user_data(): object | null;
    parse(text: string, text_len: number): boolean;
    pop(): object | null;
    push(parser: MarkupParser, user_data: object | null): void;
    ref(): MarkupParseContext;
    unref(): void;
}
export class MarkupParser  {
    constructor(config?: properties);
}
export class MatchInfo  {
    constructor(config?: properties);
    expand_references(string_to_expand: string): string | null;
    fetch(match_num: number): string | null;
    fetch_all(): string[];
    fetch_named(name: string): string | null;
    fetch_named_pos(name: string): [boolean, number | null,number | null];
    fetch_pos(match_num: number): [boolean, number | null,number | null];
    free(): void;
    get_match_count(): number;
    get_regex(): Regex;
    get_string(): string;
    is_partial_match(): boolean;
    matches(): boolean;
    next(): boolean;
    ref(): MatchInfo;
    unref(): void;
}
export class MemVTable  {
    constructor(config?: properties);
}
export class Node  {
    constructor(config?: properties);
    data: object;
    next: Node;
    prev: Node;
    children: Node;
    child_index(data: object | null): number;
    child_position(child: Node): number;
    depth(): number;
    destroy(): void;
    is_ancestor(descendant: Node): boolean;
    max_height(): number;
    n_children(): number;
    n_nodes(flags: TraverseFlags): number;
    reverse_children(): void;
    unlink(): void;
}
export class Once  {
    constructor(config?: properties);
    status: OnceStatus;
    retval: object;
    static init_enter(location: object): boolean;
    static init_leave(location: object, result: number): void;
}
export class OptionContext  {
    constructor(config?: properties);
    add_group(group: OptionGroup): void;
    add_main_entries(entries: OptionEntry, translation_domain: string | null): void;
    free(): void;
    get_description(): string;
    get_help(main_help: boolean, group: OptionGroup | null): string;
    get_help_enabled(): boolean;
    get_ignore_unknown_options(): boolean;
    get_main_group(): OptionGroup;
    get_strict_posix(): boolean;
    get_summary(): string;
    parse(argc: number | null, argv: string[] | null): [boolean, number,string[]];
    parse_strv(_arguments: string[]): [boolean, string[]];
    set_description(description: string | null): void;
    set_help_enabled(help_enabled: boolean): void;
    set_ignore_unknown_options(ignore_unknown: boolean): void;
    set_main_group(group: OptionGroup): void;
    set_strict_posix(strict_posix: boolean): void;
    set_summary(summary: string | null): void;
    set_translate_func(func: TranslateFunc | null, data: object | null, destroy_notify: DestroyNotify | null): void;
    set_translation_domain(domain: string): void;
}
export class OptionEntry  {
    constructor(config?: properties);
    long_name: string;
    short_name: number;
    flags: number;
    arg: OptionArg;
    arg_data: object;
    description: string;
    arg_description: string;
}
export class OptionGroup  {
    constructor(config?: properties);
    add_entries(entries: OptionEntry): void;
    free(): void;
    ref(): OptionGroup;
    set_translate_func(func: TranslateFunc | null, data: object | null, destroy_notify: DestroyNotify | null): void;
    set_translation_domain(domain: string): void;
    unref(): void;
}
export class PatternSpec  {
    constructor(config?: properties);
    equal(pspec2: PatternSpec): boolean;
    free(): void;
}
export class PollFD  {
    constructor(config?: properties);
    fd: number;
    events: number;
    revents: number;
}
export class Private  {
    constructor(config?: properties);
    readonly p: object;
    readonly notify: DestroyNotify;
    readonly future: object[];
    get(): object | null;
    replace(value: object | null): void;
    set(value: object | null): void;
}
export class PtrArray  {
    constructor(config?: properties);
    pdata: object;
    len: number;
}
export class Queue  {
    constructor(config?: properties);
    head: List;
    tail: List;
    length: number;
    clear(): void;
    clear_full(free_func: DestroyNotify | null): void;
    free(): void;
    free_full(free_func: DestroyNotify): void;
    get_length(): number;
    index(data: object | null): number;
    init(): void;
    is_empty(): boolean;
    peek_head(): object | null;
    peek_nth(n: number): object | null;
    peek_tail(): object | null;
    pop_head(): object | null;
    pop_nth(n: number): object | null;
    pop_tail(): object | null;
    push_head(data: object | null): void;
    push_nth(data: object | null, n: number): void;
    push_tail(data: object | null): void;
    remove(data: object | null): boolean;
    remove_all(data: object | null): number;
    reverse(): void;
}
export class RWLock  {
    constructor(config?: properties);
    readonly p: object;
    readonly i: number[];
    clear(): void;
    init(): void;
    reader_lock(): void;
    reader_trylock(): boolean;
    reader_unlock(): void;
    writer_lock(): void;
    writer_trylock(): boolean;
    writer_unlock(): void;
}
export class Rand  {
    constructor(config?: properties);
    _double(): number;
    double_range(begin: number, end: number): number;
    free(): void;
    _int(): number;
    int_range(begin: number, end: number): number;
    set_seed(seed: number): void;
    set_seed_array(seed: number, seed_length: number): void;
}
export class RecMutex  {
    constructor(config?: properties);
    readonly p: object;
    readonly i: number[];
    clear(): void;
    init(): void;
    lock(): void;
    trylock(): boolean;
    unlock(): void;
}
export class Regex  {
    constructor(config?: properties);
    get_capture_count(): number;
    get_compile_flags(): RegexCompileFlags;
    get_has_cr_or_lf(): boolean;
    get_match_flags(): RegexMatchFlags;
    get_max_backref(): number;
    get_max_lookbehind(): number;
    get_pattern(): string;
    get_string_number(name: string): number;
    match(string: string, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    match_all(string: string, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    match_all_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    match_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags): [boolean, MatchInfo | null];
    ref(): Regex;
    replace(string: string[], string_len: number, start_position: number, replacement: string, match_options: RegexMatchFlags): string;
    replace_literal(string: string[], string_len: number, start_position: number, replacement: string, match_options: RegexMatchFlags): string;
    split(string: string, match_options: RegexMatchFlags): string[];
    split_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags, max_tokens: number): string[];
    unref(): void;
    static check_replacement(replacement: string): [boolean, boolean | null];
    static error_quark(): Quark;
    static escape_nul(string: string, length: number): string;
    static escape_string(string: string[], length: number): string;
    static match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean;
    static split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[];
}
export class SList  {
    constructor(config?: properties);
    data: object;
    next: string[];
}
export class Scanner  {
    constructor(config?: properties);
    user_data: object;
    max_parse_errors: number;
    parse_errors: number;
    input_name: string;
    qdata: Data;
    config: ScannerConfig;
    token: TokenType;
    value: TokenValue;
    line: number;
    position: number;
    next_token: TokenType;
    next_value: TokenValue;
    next_line: number;
    next_position: number;
    readonly symbol_table: HashTable;
    readonly input_fd: number;
    readonly text: string;
    readonly text_end: string;
    readonly buffer: string;
    readonly scope_id: number;
    msg_handler: ScannerMsgFunc;
    cur_line(): number;
    cur_position(): number;
    cur_token(): TokenType;
    destroy(): void;
    eof(): boolean;
    get_next_token(): TokenType;
    input_file(input_fd: number): void;
    input_text(text: string, text_len: number): void;
    lookup_symbol(symbol: string): object | null;
    peek_next_token(): TokenType;
    scope_add_symbol(scope_id: number, symbol: string, value: object | null): void;
    scope_lookup_symbol(scope_id: number, symbol: string): object | null;
    scope_remove_symbol(scope_id: number, symbol: string): void;
    set_scope(scope_id: number): number;
    sync_file_offset(): void;
    unexp_token(expected_token: TokenType, identifier_spec: string, symbol_spec: string, symbol_name: string, message: string, is_error: number): void;
}
export class ScannerConfig  {
    constructor(config?: properties);
    cset_skip_characters: string;
    cset_identifier_first: string;
    cset_identifier_nth: string;
    cpair_comment_single: string;
    case_sensitive: number;
    skip_comment_multi: number;
    skip_comment_single: number;
    scan_comment_multi: number;
    scan_identifier: number;
    scan_identifier_1char: number;
    scan_identifier_NULL: number;
    scan_symbols: number;
    scan_binary: number;
    scan_octal: number;
    scan_float: number;
    scan_hex: number;
    scan_hex_dollar: number;
    scan_string_sq: number;
    scan_string_dq: number;
    numbers_2_int: number;
    int_2_float: number;
    identifier_2_string: number;
    char_2_token: number;
    symbol_2_token: number;
    scope_0_fallback: number;
    store_int64: number;
    readonly padding_dummy: number;
}
export class Sequence  {
    constructor(config?: properties);
    append(data: object | null): SequenceIter;
    free(): void;
    get_begin_iter(): SequenceIter;
    get_end_iter(): SequenceIter;
    get_iter_at_pos(pos: number): SequenceIter;
    get_length(): number;
    is_empty(): boolean;
    prepend(data: object | null): SequenceIter;
    static get(iter: SequenceIter): object | null;
    static insert_before(iter: SequenceIter, data: object | null): SequenceIter;
    static move(src: SequenceIter, dest: SequenceIter): void;
    static move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
    static range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
    static remove(iter: SequenceIter): void;
    static remove_range(begin: SequenceIter, end: SequenceIter): void;
    static set(iter: SequenceIter, data: object | null): void;
    static swap(a: SequenceIter, b: SequenceIter): void;
}
export class SequenceIter  {
    constructor(config?: properties);
    compare(b: SequenceIter): number;
    get_position(): number;
    get_sequence(): Sequence;
    is_begin(): boolean;
    is_end(): boolean;
    move(delta: number): SequenceIter;
    next(): SequenceIter;
    prev(): SequenceIter;
}
export class Source  {
    constructor(config?: properties);
    add_child_source(child_source: Source): void;
    add_poll(fd: PollFD): void;
    add_unix_fd(fd: number, events: IOCondition): object;
    attach(context: MainContext | null): number;
    destroy(): void;
    get_can_recurse(): boolean;
    get_context(): MainContext | null;
    get_current_time(timeval: TimeVal): void;
    get_id(): number;
    get_name(): string;
    get_priority(): number;
    get_ready_time(): number;
    get_time(): number;
    is_destroyed(): boolean;
    modify_unix_fd(tag: object, new_events: IOCondition): void;
    query_unix_fd(tag: object): IOCondition;
    ref(): Source;
    remove_child_source(child_source: Source): void;
    remove_poll(fd: PollFD): void;
    remove_unix_fd(tag: object): void;
    set_callback(func: SourceFunc, data: object | null, notify: DestroyNotify | null): void;
    set_callback_indirect(callback_data: object | null, callback_funcs: SourceCallbackFuncs): void;
    set_can_recurse(can_recurse: boolean): void;
    set_funcs(funcs: SourceFuncs): void;
    set_name(name: string): void;
    set_priority(priority: number): void;
    set_ready_time(ready_time: number): void;
    unref(): void;
    static remove(tag: number): boolean;
    static remove_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): boolean;
    static remove_by_user_data(user_data: object | null): boolean;
    static set_name_by_id(tag: number, name: string): void;
}
export class SourceCallbackFuncs  {
    constructor(config?: properties);
}
export class SourceFuncs  {
    constructor(config?: properties);
    readonly closure_callback: SourceFunc;
    readonly closure_marshal: SourceDummyMarshal;
}
export class SourcePrivate  {
    constructor(config?: properties);
}
export class StatBuf  {
    constructor(config?: properties);
}
export class String  {
    constructor(config?: properties);
    str: string;
    len: number;
    allocated_len: number;
    append(val: string): String;
    append_c(c: number): String;
    append_len(val: string, len: number): String;
    append_unichar(wc: number): String;
    append_uri_escaped(unescaped: string, reserved_chars_allowed: string, allow_utf8: boolean): String;
    ascii_down(): String;
    ascii_up(): String;
    assign(rval: string): String;
    down(): String;
    equal(v2: String): boolean;
    erase(pos: number, len: number): String;
    free(free_segment: boolean): string | null;
    free_to_bytes(): Bytes;
    hash(): number;
    insert(pos: number, val: string): String;
    insert_c(pos: number, c: number): String;
    insert_len(pos: number, val: string, len: number): String;
    insert_unichar(pos: number, wc: number): String;
    overwrite(pos: number, val: string): String;
    overwrite_len(pos: number, val: string, len: number): String;
    prepend(val: string): String;
    prepend_c(c: number): String;
    prepend_len(val: string, len: number): String;
    prepend_unichar(wc: number): String;
    set_size(len: number): String;
    truncate(len: number): String;
    up(): String;
}
export class StringChunk  {
    constructor(config?: properties);
    clear(): void;
    free(): void;
    insert(string: string): string;
    insert_const(string: string): string;
    insert_len(string: string, len: number): string;
}
export class TestCase  {
    constructor(config?: properties);
}
export class TestConfig  {
    constructor(config?: properties);
    test_initialized: boolean;
    test_quick: boolean;
    test_perf: boolean;
    test_verbose: boolean;
    test_quiet: boolean;
    test_undefined: boolean;
}
export class TestLogBuffer  {
    constructor(config?: properties);
    readonly data: String;
    readonly msgs: string[];
    free(): void;
    push(n_bytes: number, bytes: number): void;
}
export class TestLogMsg  {
    constructor(config?: properties);
    log_type: TestLogType;
    n_strings: number;
    strings: string;
    n_nums: number;
    free(): void;
}
export class TestSuite  {
    constructor(config?: properties);
    add(test_case: TestCase): void;
    add_suite(nestedsuite: TestSuite): void;
}
export class Thread  {
    constructor(config?: properties);
    join(): object | null;
    ref(): Thread;
    unref(): void;
    static error_quark(): Quark;
    static exit(retval: object | null): void;
    static self(): Thread;
    static _yield(): void;
}
export class ThreadPool  {
    constructor(config?: properties);
    func: Func;
    user_data: object;
    exclusive: boolean;
    free(immediate: boolean, wait_: boolean): void;
    get_max_threads(): number;
    get_num_threads(): number;
    move_to_front(data: object | null): boolean;
    push(data: object | null): boolean;
    set_max_threads(max_threads: number): boolean;
    unprocessed(): number;
    static get_max_idle_time(): number;
    static get_max_unused_threads(): number;
    static get_num_unused_threads(): number;
    static set_max_idle_time(interval: number): void;
    static set_max_unused_threads(max_threads: number): void;
    static stop_unused_threads(): void;
}
export class TimeVal  {
    constructor(config?: properties);
    tv_sec: number;
    tv_usec: number;
    add(microseconds: number): void;
    to_iso8601(): string | null;
    static from_iso8601(iso_date: string): [boolean, TimeVal];
}
export class TimeZone  {
    constructor(config?: properties);
    static new_local(): TimeZone;
    static new_offset(seconds: number): TimeZone;
    static new_utc(): TimeZone;
    adjust_time(type: TimeType, time_: number): number;
    find_interval(type: TimeType, time_: number): number;
    get_abbreviation(interval: number): string;
    get_identifier(): string;
    get_offset(interval: number): number;
    is_dst(interval: number): boolean;
    ref(): TimeZone;
    unref(): void;
}
export class Timer  {
    constructor(config?: properties);
    _continue(): void;
    destroy(): void;
    elapsed(microseconds: number): number;
    reset(): void;
    start(): void;
    stop(): void;
}
export class TrashStack  {
    constructor(config?: properties);
    next: TrashStack;
    static height(stack_p: TrashStack): number;
    static peek(stack_p: TrashStack): object | null;
    static pop(stack_p: TrashStack): object | null;
    static push(stack_p: TrashStack, data_p: object): void;
}
export class Tree  {
    constructor(config?: properties);
    destroy(): void;
    height(): number;
    insert(key: object | null, value: object | null): void;
    lookup(key: object | null): object | null;
    lookup_extended(lookup_key: object | null, orig_key: object | null, value: object | null): boolean;
    nnodes(): number;
    remove(key: object | null): boolean;
    replace(key: object | null, value: object | null): void;
    steal(key: object | null): boolean;
    unref(): void;
}
export class Variant  {
    constructor(config?: properties);
    static new_array(child_type: VariantType | null, children: Variant[] | null, n_children: number): Variant;
    static new_boolean(value: boolean): Variant;
    static new_byte(value: number): Variant;
    static new_bytestring(string: number[]): Variant;
    static new_bytestring_array(strv: string[], length: number): Variant;
    static new_dict_entry(key: Variant, value: Variant): Variant;
    static new_double(value: number): Variant;
    static new_fixed_array(element_type: VariantType, elements: object | null, n_elements: number, element_size: number): Variant;
    static new_from_bytes(type: VariantType, bytes: Bytes, trusted: boolean): Variant;
    static new_from_data(type: VariantType, data: number[], size: number, trusted: boolean, notify: DestroyNotify, user_data: object | null): Variant;
    static new_handle(value: number): Variant;
    static new_int16(value: number): Variant;
    static new_int32(value: number): Variant;
    static new_int64(value: number): Variant;
    static new_maybe(child_type: VariantType | null, child: Variant | null): Variant;
    static new_object_path(object_path: string): Variant;
    static new_objv(strv: string[], length: number): Variant;
    static new_signature(signature: string): Variant;
    static new_string(string: string): Variant;
    static new_strv(strv: string[], length: number): Variant;
    static new_tuple(children: Variant[], n_children: number): Variant;
    static new_uint16(value: number): Variant;
    static new_uint32(value: number): Variant;
    static new_uint64(value: number): Variant;
    static new_variant(value: Variant): Variant;
    byteswap(): Variant;
    check_format_string(format_string: string, copy_only: boolean): boolean;
    classify(): VariantClass;
    compare(two: Variant): number;
    dup_bytestring(): [number[], number | null];
    dup_bytestring_array(): [string[], number | null];
    dup_objv(): [string[], number | null];
    dup_string(): [string, number];
    dup_strv(): [string[], number | null];
    equal(two: Variant): boolean;
    get_boolean(): boolean;
    get_byte(): number;
    get_bytestring(): number[];
    get_bytestring_array(): [string[], number | null];
    get_child_value(index_: number): Variant;
    get_data(): object | null;
    get_data_as_bytes(): Bytes;
    get_double(): number;
    get_handle(): number;
    get_int16(): number;
    get_int32(): number;
    get_int64(): number;
    get_maybe(): Variant | null;
    get_normal_form(): Variant;
    get_objv(): [string[], number | null];
    get_size(): number;
    get_string(): [string, number | null];
    get_strv(): [string[], number | null];
    get_type(): VariantType;
    get_type_string(): string;
    get_uint16(): number;
    get_uint32(): number;
    get_uint64(): number;
    get_variant(): Variant;
    hash(): number;
    is_container(): boolean;
    is_floating(): boolean;
    is_normal_form(): boolean;
    is_of_type(type: VariantType): boolean;
    lookup_value(key: string, expected_type: VariantType | null): Variant;
    n_children(): number;
    print(type_annotate: boolean): string;
    ref(): Variant;
    ref_sink(): Variant;
    store(data: object): void;
    take_ref(): Variant;
    unref(): void;
    static is_object_path(string: string): boolean;
    static is_signature(string: string): boolean;
    static parse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant;
    static parse_error_print_context(error: Error, source_str: string): string;
    static parse_error_quark(): Quark;
    static parser_get_error_quark(): Quark;
}
export class VariantBuilder  {
    constructor(config?: properties);
    add_value(value: Variant): void;
    close(): void;
    end(): Variant;
    open(type: VariantType): void;
    ref(): VariantBuilder;
    unref(): void;
}
export class VariantDict  {
    constructor(config?: properties);
    clear(): void;
    contains(key: string): boolean;
    end(): Variant;
    insert_value(key: string, value: Variant): void;
    lookup_value(key: string, expected_type: VariantType | null): Variant;
    ref(): VariantDict;
    remove(key: string): boolean;
    unref(): void;
}
export class VariantType  {
    constructor(config?: properties);
    static new_array(element: VariantType): VariantType;
    static new_dict_entry(key: VariantType, value: VariantType): VariantType;
    static new_maybe(element: VariantType): VariantType;
    static new_tuple(items: VariantType[], length: number): VariantType;
    copy(): VariantType;
    dup_string(): string;
    element(): VariantType;
    equal(type2: VariantType): boolean;
    first(): VariantType;
    free(): void;
    get_string_length(): number;
    hash(): number;
    is_array(): boolean;
    is_basic(): boolean;
    is_container(): boolean;
    is_definite(): boolean;
    is_dict_entry(): boolean;
    is_maybe(): boolean;
    is_subtype_of(supertype: VariantType): boolean;
    is_tuple(): boolean;
    is_variant(): boolean;
    key(): VariantType;
    n_items(): number;
    next(): VariantType;
    value(): VariantType;
    static checked_(arg0: string): VariantType;
    static string_get_depth_(type_string: string): number;
    static string_is_valid(type_string: string): boolean;
    static string_scan(string: string, limit: string | null): [boolean, string | null];
}
export class DoubleIEEE754  {
    constructor(config?: properties);
    v_double: number;
}
export class FloatIEEE754  {
    constructor(config?: properties);
    v_float: number;
}
export class Mutex  {
    constructor(config?: properties);
    readonly p: object;
    readonly i: number[];
    clear(): void;
    init(): void;
    lock(): void;
    trylock(): boolean;
    unlock(): void;
}
export class TokenValue  {
    constructor(config?: properties);
    v_symbol: object;
    v_identifier: string;
    v_binary: number;
    v_octal: number;
    v_int: number;
    v_int64: number;
    v_float: number;
    v_hex: number;
    v_string: string;
    v_comment: string;
    v_char: number;
    v_error: number;
}