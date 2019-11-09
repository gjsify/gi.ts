
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as ICal from "ical";
/**
 * ical.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type icalattach_free_fn_t = (data: number, user_data: object | null) => void;
export type icalparser_line_gen_func = (s: string, size: number, d: object | null) => string;
export type pvl_applyf = (a: object | null, b: object | null) => void;
export type pvl_comparef = (a: object | null, b: object | null) => number;
export type pvl_findf = (a: object | null, b: object | null) => number;
export const BOOLEAN_FALSE: number;
export const BOOLEAN_TRUE: number;
export const BY_DAY_SIZE: number;
export const BY_HOUR_SIZE: number;
export const BY_MINUTE_SIZE: number;
export const BY_MONTHDAY_SIZE: number;
export const BY_MONTH_SIZE: number;
export const BY_SECOND_SIZE: number;
export const BY_WEEKNO_SIZE: number;
export const BY_YEARDAY_SIZE: number;
export const ERRORS_ARE_FATAL: number;
export const ICALPARAMETER_FIRST_ENUM: number;
export const ICALPARAMETER_LAST_ENUM: number;
export const ICALPROPERTY_FIRST_ENUM: number;
export const ICALPROPERTY_LAST_ENUM: number;
export const MAJOR_VERSION: number;
export const MINOR_VERSION: number;
export const PACKAGE: string;
export const PATCH_VERSION: number;
export const VERSION: string;
export const ZONES_TAB_SYSTEM_FILENAME: string;
/**
 * }
 * ```
 */
export function bt(): void;
/**
 * 
 */
export function decode_base64(dest: string, src: string, size: number): string;
/**
 * 
 */
export function decode_quoted_printable(dest: string, src: string, size: number): string;
/**
 * 
 */
export function free_zone_directory(): void;
/**
 * 
 */
export function get_unknown_token_handling_setting(): _unknown_token_handling;
/**
 * 
 */
export function icalarray_append(array: array, element: object | null): void;
/**
 * 
 */
export function icalarray_element_at(array: array, position: number): object | null;
/**
 * ### Usage
 * ```c
 * // create new array
 * icalarray *array = icalarray_new(sizeof(int), 1);
 * // use array
 * int a = 4;
 * icalarray_append(array, &a);
 * assert(*icalarray_element_at(array, 0) == a);
 * // release memory
 * icalarray_free(array);
 * ```
 */
export function icalarray_free(array: array): void;
/**
 * 
 */
export function icalarray_remove_element_at(array: array, position: number): void;
/**
 * 
 */
export function icalarray_sort(array: array, compare: object | null): void;
/**
 * 
 */
export function icalattach_get_data(attach: attach): number;
/**
 * 
 */
export function icalattach_get_is_url(attach: attach): number;
/**
 * 
 */
export function icalattach_get_url(attach: attach): string;
/**
 * 
 */
export function icalattach_ref(attach: attach): void;
/**
 * 
 */
export function icalattach_unref(attach: attach): void;
/**
 * 
 */
export function icalcomponent_add_component(parent: component, child: component): void;
/**
 * 
 */
export function icalcomponent_add_property(component: component, property: property): void;
/**
 * 
 */
export function icalcomponent_as_ical_string(component: component): string;
/**
 * 
 */
export function icalcomponent_as_ical_string_r(component: component): string;
/**
 * 
 */
export function icalcomponent_check_restrictions(comp: component): number;
/**
 * 
 */
export function icalcomponent_convert_errors(component: component): void;
/**
 * 
 */
export function icalcomponent_count_components(component: component, kind: component_kind): number;
/**
 * 
 */
export function icalcomponent_count_errors(component: component): number;
/**
 * 
 */
export function icalcomponent_count_properties(component: component, kind: property_kind): number;
/**
 * 
 */
export function icalcomponent_foreach_recurrence(comp: component, start: object | null, end: object | null, callback: object | null, callback_data: object | null): void;
/**
 * 
 */
export function icalcomponent_foreach_tzid(comp: component, callback: object | null, callback_data: object | null): void;
/**
 * 
 */
export function icalcomponent_free(component: component): void;
/**
 * 
 */
export function icalcomponent_get_comment(comp: component): string;
/**
 * 
 */
export function icalcomponent_get_description(comp: component): string;
/**
 * 
 */
export function icalcomponent_get_dtend(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_dtstamp(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_dtstart(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_due(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_duration(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_location(comp: component): string;
/**
 * 
 */
export function icalcomponent_get_method(comp: component): property_method;
/**
 * 
 */
export function icalcomponent_get_recurrenceid(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_relcalid(comp: component): string;
/**
 * 
 */
export function icalcomponent_get_sequence(comp: component): number;
/**
 * 
 */
export function icalcomponent_get_span(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_status(comp: component): object | null;
/**
 * 
 */
export function icalcomponent_get_summary(comp: component): string;
/**
 * 
 */
export function icalcomponent_get_uid(comp: component): string;
/**
 * 
 */
export function icalcomponent_is_valid(component: component): number;
/**
 * 
 */
export function icalcomponent_isa(component: component): component_kind;
/**
 * 
 */
export function icalcomponent_isa_component(component: object | null): number;
/**
 * 
 */
export function icalcomponent_kind_is_valid(kind: component_kind): number;
/**
 * 
 */
export function icalcomponent_kind_to_string(kind: component_kind): string;
/**
 * 
 */
export function icalcomponent_merge_component(comp: component, comp_to_merge: component): void;
/**
 * 
 */
export function icalcomponent_normalize(comp: component): void;
/**
 * 
 */
export function icalcomponent_remove_component(parent: component, child: component): void;
/**
 * 
 */
export function icalcomponent_remove_property(component: component, property: property): void;
/**
 * 
 */
export function icalcomponent_set_comment(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_set_description(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_set_dtend(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_dtstamp(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_dtstart(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_due(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_duration(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_location(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_set_method(comp: component, method: property_method): void;
/**
 * 
 */
export function icalcomponent_set_parent(component: component, parent: component): void;
/**
 * 
 */
export function icalcomponent_set_recurrenceid(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_relcalid(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_set_sequence(comp: component, v: number): void;
/**
 * 
 */
export function icalcomponent_set_status(comp: component, v: object | null): void;
/**
 * 
 */
export function icalcomponent_set_summary(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_set_uid(comp: component, v: string): void;
/**
 * 
 */
export function icalcomponent_string_to_kind(string: string): component_kind;
/**
 * 
 */
export function icalcomponent_strip_errors(component: component): void;
/**
 * 
 */
export function icaldurationtype_as_ical_string(d: object | null): string;
/**
 * 
 */
export function icaldurationtype_as_ical_string_r(d: object | null): string;
/**
 * 
 */
export function icaldurationtype_as_int(duration: object | null): number;
/**
 * 
 */
export function icaldurationtype_bad_duration(): object | null;
/**
 * 
 */
export function icaldurationtype_from_int(t: number): object | null;
/**
 * 
 */
export function icaldurationtype_from_string(dur: string): object | null;
/**
 * 
 */
export function icaldurationtype_is_bad_duration(d: object | null): number;
/**
 * 
 */
export function icaldurationtype_is_null_duration(d: object | null): number;
/**
 * 
 */
export function icaldurationtype_null_duration(): object | null;
/**
 * 
 */
export function icalenum_num_to_reqstat(major: number, minor: number): requeststatus;
/**
 * 
 */
export function icalenum_reqstat_code(stat: requeststatus): string;
/**
 * 
 */
export function icalenum_reqstat_code_r(stat: requeststatus): string;
/**
 * 
 */
export function icalenum_reqstat_desc(stat: requeststatus): string;
/**
 * 
 */
export function icalenum_reqstat_major(stat: requeststatus): number;
/**
 * 
 */
export function icalenum_reqstat_minor(stat: requeststatus): number;
/**
 * 
 */
export function icalerrno_return(): errorenum;
/**
 * }
 * ```
 */
export function icalerror_clear_errno(): void;
/**
 * 
 */
export function icalerror_crash_here(): void;
/**
 * 
 */
export function icalerror_error_from_string(str: string): errorenum;
/**
 * 
 */
export function icalerror_get_error_state(error: errorenum): errorstate;
/**
 * 
 */
export function icalerror_get_errors_are_fatal(): number;
/**
 * 
 */
export function icalerror_perror(): string;
/**
 * 
 */
export function icalerror_restore(error: string, es: errorstate): void;
/**
 * 
 */
export function icalerror_set_errno(x: errorenum): void;
/**
 * 
 */
export function icalerror_set_error_state(error: errorenum, state: errorstate): void;
/**
 * 
 */
export function icalerror_set_errors_are_fatal(fatal: number): void;
/**
 * 
 */
export function icalerror_stop_here(): void;
/**
 * 
 */
export function icalerror_strerror(e: errorenum): string;
/**
 * 
 */
export function icalerror_supress(error: string): errorstate;
/**
 * 
 */
export function icallangbind_access_array(array: number, index: number): number;
/**
 * 
 */
export function icallangbind_free_array(array: number): void;
/**
 * 
 */
export function icallangbind_new_array(size: number): number;
/**
 * 
 */
export function icallangbind_property_eval_string(prop: property, sep: string): string;
/**
 * 
 */
export function icallangbind_property_eval_string_r(prop: property, sep: string): string;
/**
 * 
 */
export function icallangbind_quote_as_ical(str: string): string;
/**
 * 
 */
export function icallangbind_quote_as_ical_r(str: string): string;
/**
 * 
 */
export function icallangbind_string_to_open_flag(str: string): number;
/**
 * 
 */
export function icalmemory_add_tmp_buffer(buf: object | null): void;
/**
 * 
 */
export function icalmemory_append_char(buf: string, pos: string, buf_size: number, ch: number): void;
/**
 * 
 */
export function icalmemory_append_string(buf: string, pos: string, buf_size: number, string: string): void;
/**
 * 
 */
export function icalmemory_free_buffer(buf: object | null): void;
/**
 * ```
 */
export function icalmemory_free_ring(): void;
/**
 * 
 */
export function icalmemory_new_buffer(size: number): object | null;
/**
 * 
 */
export function icalmemory_resize_buffer(buf: object | null, size: number): object | null;
/**
 * 
 */
export function icalmemory_strdup(s: string): string;
/**
 * 
 */
export function icalmemory_tmp_buffer(size: number): object | null;
/**
 * 
 */
export function icalmemory_tmp_copy(str: string): string;
/**
 * ### Usage
 * ```c
 * icalparameter *param = icalparameter_new_from_string("ROLE=CHAIR");
 * if(param) {
 *     char *str = icalparameter_as_ical_string(param);
 *     printf("%s\n", str);
 *     free(str);
 * }
 * icalparameter_free(param);
 * ```
 */
export function icalparameter_as_ical_string(parameter: parameter): string;
/**
 * 
 */
export function icalparameter_as_ical_string_r(parameter: parameter): string;
/**
 * 
 */
export function icalparameter_enum_to_string(e: number): string;
/**
 * 
 */
export function icalparameter_free(parameter: parameter): void;
/**
 * 
 */
export function icalparameter_get_actionparam(value: parameter): parameter_action;
/**
 * 
 */
export function icalparameter_get_altrep(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_charset(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_cn(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_cutype(value: parameter): parameter_cutype;
/**
 * 
 */
export function icalparameter_get_delegatedfrom(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_delegatedto(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_dir(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_display(value: parameter): parameter_display;
/**
 * 
 */
export function icalparameter_get_email(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_enable(value: parameter): parameter_enable;
/**
 * 
 */
export function icalparameter_get_encoding(value: parameter): parameter_encoding;
/**
 * 
 */
export function icalparameter_get_fbtype(value: parameter): parameter_fbtype;
/**
 * 
 */
export function icalparameter_get_feature(value: parameter): parameter_feature;
/**
 * 
 */
export function icalparameter_get_filename(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_fmttype(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_iana(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_iana_name(param: parameter): string;
/**
 * 
 */
export function icalparameter_get_iana_value(param: parameter): string;
/**
 * 
 */
export function icalparameter_get_id(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_label(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_language(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_latency(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_local(value: parameter): parameter_local;
/**
 * 
 */
export function icalparameter_get_localize(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_managedid(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_member(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_modified(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_options(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_partstat(value: parameter): parameter_partstat;
/**
 * 
 */
export function icalparameter_get_patchaction(value: parameter): parameter_patchaction;
/**
 * 
 */
export function icalparameter_get_publiccomment(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_range(value: parameter): parameter_range;
/**
 * 
 */
export function icalparameter_get_reason(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_related(value: parameter): parameter_related;
/**
 * 
 */
export function icalparameter_get_reltype(value: parameter): parameter_reltype;
/**
 * 
 */
export function icalparameter_get_required(value: parameter): parameter_required;
/**
 * 
 */
export function icalparameter_get_response(value: parameter): number;
/**
 * 
 */
export function icalparameter_get_role(value: parameter): parameter_role;
/**
 * 
 */
export function icalparameter_get_rsvp(value: parameter): parameter_rsvp;
/**
 * 
 */
export function icalparameter_get_scheduleagent(value: parameter): parameter_scheduleagent;
/**
 * 
 */
export function icalparameter_get_scheduleforcesend(value: parameter): parameter_scheduleforcesend;
/**
 * 
 */
export function icalparameter_get_schedulestatus(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_sentby(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_size(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_stayinformed(value: parameter): parameter_stayinformed;
/**
 * 
 */
export function icalparameter_get_substate(value: parameter): parameter_substate;
/**
 * 
 */
export function icalparameter_get_tzid(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_value(value: parameter): parameter_value;
/**
 * 
 */
export function icalparameter_get_x(value: parameter): string;
/**
 * 
 */
export function icalparameter_get_xliccomparetype(value: parameter): parameter_xliccomparetype;
/**
 * 
 */
export function icalparameter_get_xlicerrortype(value: parameter): parameter_xlicerrortype;
/**
 * 
 */
export function icalparameter_get_xname(param: parameter): string;
/**
 * 
 */
export function icalparameter_get_xvalue(param: parameter): string;
/**
 * 
 */
export function icalparameter_has_same_name(param1: parameter, param2: parameter): number;
/**
 * 
 */
export function icalparameter_isa(parameter: parameter): parameter_kind;
/**
 * 
 */
export function icalparameter_isa_parameter(param: object | null): number;
/**
 * 
 */
export function icalparameter_kind_is_valid(kind: parameter_kind): number;
/**
 * 
 */
export function icalparameter_kind_to_string(kind: parameter_kind): string;
/**
 * 
 */
export function icalparameter_set_actionparam(value: parameter, v: parameter_action): void;
/**
 * 
 */
export function icalparameter_set_altrep(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_charset(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_cn(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_cutype(value: parameter, v: parameter_cutype): void;
/**
 * 
 */
export function icalparameter_set_delegatedfrom(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_delegatedto(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_dir(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_display(value: parameter, v: parameter_display): void;
/**
 * 
 */
export function icalparameter_set_email(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_enable(value: parameter, v: parameter_enable): void;
/**
 * 
 */
export function icalparameter_set_encoding(value: parameter, v: parameter_encoding): void;
/**
 * 
 */
export function icalparameter_set_fbtype(value: parameter, v: parameter_fbtype): void;
/**
 * 
 */
export function icalparameter_set_feature(value: parameter, v: parameter_feature): void;
/**
 * 
 */
export function icalparameter_set_filename(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_fmttype(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_iana(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_iana_name(param: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_iana_value(param: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_id(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_label(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_language(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_latency(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_local(value: parameter, v: parameter_local): void;
/**
 * 
 */
export function icalparameter_set_localize(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_managedid(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_member(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_modified(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_options(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_parent(param: parameter, property: property): void;
/**
 * 
 */
export function icalparameter_set_partstat(value: parameter, v: parameter_partstat): void;
/**
 * 
 */
export function icalparameter_set_patchaction(value: parameter, v: parameter_patchaction): void;
/**
 * 
 */
export function icalparameter_set_publiccomment(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_range(value: parameter, v: parameter_range): void;
/**
 * 
 */
export function icalparameter_set_reason(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_related(value: parameter, v: parameter_related): void;
/**
 * 
 */
export function icalparameter_set_reltype(value: parameter, v: parameter_reltype): void;
/**
 * 
 */
export function icalparameter_set_required(value: parameter, v: parameter_required): void;
/**
 * 
 */
export function icalparameter_set_response(value: parameter, v: number): void;
/**
 * 
 */
export function icalparameter_set_role(value: parameter, v: parameter_role): void;
/**
 * 
 */
export function icalparameter_set_rsvp(value: parameter, v: parameter_rsvp): void;
/**
 * 
 */
export function icalparameter_set_scheduleagent(value: parameter, v: parameter_scheduleagent): void;
/**
 * 
 */
export function icalparameter_set_scheduleforcesend(value: parameter, v: parameter_scheduleforcesend): void;
/**
 * 
 */
export function icalparameter_set_schedulestatus(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_sentby(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_size(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_stayinformed(value: parameter, v: parameter_stayinformed): void;
/**
 * 
 */
export function icalparameter_set_substate(value: parameter, v: parameter_substate): void;
/**
 * 
 */
export function icalparameter_set_tzid(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_value(value: parameter, v: parameter_value): void;
/**
 * 
 */
export function icalparameter_set_x(value: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_xliccomparetype(value: parameter, v: parameter_xliccomparetype): void;
/**
 * 
 */
export function icalparameter_set_xlicerrortype(value: parameter, v: parameter_xlicerrortype): void;
/**
 * 
 */
export function icalparameter_set_xname(param: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_set_xvalue(param: parameter, v: string): void;
/**
 * 
 */
export function icalparameter_string_to_enum(str: string): number;
/**
 * 
 */
export function icalparameter_string_to_kind(string: string): parameter_kind;
/**
 * 
 */
export function icalparameter_value_to_value_kind(value: parameter_value): value_kind;
/**
 * 
 */
export function icalparser_free(parser: parser): void;
/**
 * 
 */
export function icalparser_get_state(parser: parser): parser_state;
/**
 * 
 */
export function icalparser_set_gen_data(parser: parser, data: object | null): void;
/**
 * 
 */
export function icalparser_string_line_generator(out: string, buf_size: number, d: object | null): string;
/**
 * 
 */
export function icalperiodtype_as_ical_string(p: object | null): string;
/**
 * 
 */
export function icalperiodtype_as_ical_string_r(p: object | null): string;
/**
 * 
 */
export function icalperiodtype_from_string(str: string): object | null;
/**
 * 
 */
export function icalperiodtype_is_null_period(p: object | null): number;
/**
 * 
 */
export function icalperiodtype_is_valid_period(p: object | null): number;
/**
 * 
 */
export function icalperiodtype_null_period(): object | null;
/**
 * 
 */
export function icalproperty_add_parameter(prop: property, parameter: parameter): void;
/**
 * 
 */
export function icalproperty_as_ical_string(prop: property): string;
/**
 * 
 */
export function icalproperty_as_ical_string_r(prop: property): string;
/**
 * 
 */
export function icalproperty_count_parameters(prop: property): number;
/**
 * 
 */
export function icalproperty_enum_belongs_to_property(kind: property_kind, e: number): number;
/**
 * 
 */
export function icalproperty_enum_to_string(e: number): string;
/**
 * 
 */
export function icalproperty_enum_to_string_r(e: number): string;
/**
 * 
 */
export function icalproperty_free(prop: property): void;
/**
 * 
 */
export function icalproperty_get_acceptresponse(prop: property): string;
/**
 * 
 */
export function icalproperty_get_acknowledged(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_action(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_allowconflict(prop: property): string;
/**
 * 
 */
export function icalproperty_get_attendee(prop: property): string;
/**
 * 
 */
export function icalproperty_get_busytype(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_calid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_calmaster(prop: property): string;
/**
 * 
 */
export function icalproperty_get_calscale(prop: property): string;
/**
 * 
 */
export function icalproperty_get_capversion(prop: property): string;
/**
 * 
 */
export function icalproperty_get_carid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_carlevel(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_categories(prop: property): string;
/**
 * 
 */
export function icalproperty_get_class(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_cmd(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_color(prop: property): string;
/**
 * 
 */
export function icalproperty_get_comment(prop: property): string;
/**
 * 
 */
export function icalproperty_get_completed(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_components(prop: property): string;
/**
 * 
 */
export function icalproperty_get_conference(prop: property): string;
/**
 * 
 */
export function icalproperty_get_contact(prop: property): string;
/**
 * 
 */
export function icalproperty_get_created(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_csid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_datemax(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_datemin(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_datetime_with_component(prop: property, comp: component): object | null;
/**
 * 
 */
export function icalproperty_get_decreed(prop: property): string;
/**
 * 
 */
export function icalproperty_get_defaultcharset(prop: property): string;
/**
 * 
 */
export function icalproperty_get_defaultlocale(prop: property): string;
/**
 * 
 */
export function icalproperty_get_defaulttzid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_defaultvcars(prop: property): string;
/**
 * 
 */
export function icalproperty_get_deny(prop: property): string;
/**
 * 
 */
export function icalproperty_get_description(prop: property): string;
/**
 * 
 */
export function icalproperty_get_dtend(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_dtstamp(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_dtstart(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_due(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_duration(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_estimatedduration(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_exdate(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_expand(prop: property): number;
/**
 * 
 */
export function icalproperty_get_exrule(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_freebusy(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_geo(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_grant(prop: property): string;
/**
 * 
 */
export function icalproperty_get_itipversion(prop: property): string;
/**
 * 
 */
export function icalproperty_get_lastmodified(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_location(prop: property): string;
/**
 * 
 */
export function icalproperty_get_maxcomponentsize(prop: property): number;
/**
 * 
 */
export function icalproperty_get_maxdate(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_maxresults(prop: property): number;
/**
 * 
 */
export function icalproperty_get_maxresultssize(prop: property): number;
/**
 * 
 */
export function icalproperty_get_method(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_mindate(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_multipart(prop: property): string;
/**
 * 
 */
export function icalproperty_get_name(prop: property): string;
/**
 * 
 */
export function icalproperty_get_organizer(prop: property): string;
/**
 * 
 */
export function icalproperty_get_owner(prop: property): string;
/**
 * 
 */
export function icalproperty_get_parameter_as_string(prop: property, name: string): string;
/**
 * 
 */
export function icalproperty_get_parameter_as_string_r(prop: property, name: string): string;
/**
 * 
 */
export function icalproperty_get_patchdelete(prop: property): string;
/**
 * 
 */
export function icalproperty_get_patchorder(prop: property): number;
/**
 * 
 */
export function icalproperty_get_patchparameter(prop: property): string;
/**
 * 
 */
export function icalproperty_get_patchtarget(prop: property): string;
/**
 * 
 */
export function icalproperty_get_patchversion(prop: property): string;
/**
 * 
 */
export function icalproperty_get_percentcomplete(prop: property): number;
/**
 * 
 */
export function icalproperty_get_permission(prop: property): string;
/**
 * 
 */
export function icalproperty_get_pollcompletion(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_pollitemid(prop: property): number;
/**
 * 
 */
export function icalproperty_get_pollmode(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_pollproperties(prop: property): string;
/**
 * 
 */
export function icalproperty_get_pollwinner(prop: property): number;
/**
 * 
 */
export function icalproperty_get_priority(prop: property): number;
/**
 * 
 */
export function icalproperty_get_prodid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_property_name(prop: property): string;
/**
 * 
 */
export function icalproperty_get_property_name_r(prop: property): string;
/**
 * 
 */
export function icalproperty_get_query(prop: property): string;
/**
 * 
 */
export function icalproperty_get_queryid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_querylevel(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_queryname(prop: property): string;
/**
 * 
 */
export function icalproperty_get_rdate(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_recuraccepted(prop: property): string;
/**
 * 
 */
export function icalproperty_get_recurexpand(prop: property): string;
/**
 * 
 */
export function icalproperty_get_recurlimit(prop: property): string;
/**
 * 
 */
export function icalproperty_get_recurrenceid(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_refreshinterval(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_relatedto(prop: property): string;
/**
 * 
 */
export function icalproperty_get_relcalid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_repeat(prop: property): number;
/**
 * 
 */
export function icalproperty_get_replyurl(prop: property): string;
/**
 * 
 */
export function icalproperty_get_requeststatus(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_resources(prop: property): string;
/**
 * 
 */
export function icalproperty_get_response(prop: property): number;
/**
 * 
 */
export function icalproperty_get_restriction(prop: property): string;
/**
 * 
 */
export function icalproperty_get_rrule(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_scope(prop: property): string;
/**
 * 
 */
export function icalproperty_get_sequence(prop: property): number;
/**
 * 
 */
export function icalproperty_get_source(prop: property): string;
/**
 * 
 */
export function icalproperty_get_status(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_storesexpanded(prop: property): string;
/**
 * 
 */
export function icalproperty_get_summary(prop: property): string;
/**
 * 
 */
export function icalproperty_get_target(prop: property): string;
/**
 * 
 */
export function icalproperty_get_taskmode(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_transp(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_trigger(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_tzid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_tzidaliasof(prop: property): string;
/**
 * 
 */
export function icalproperty_get_tzname(prop: property): string;
/**
 * 
 */
export function icalproperty_get_tzoffsetfrom(prop: property): number;
/**
 * 
 */
export function icalproperty_get_tzoffsetto(prop: property): number;
/**
 * 
 */
export function icalproperty_get_tzuntil(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_tzurl(prop: property): string;
/**
 * 
 */
export function icalproperty_get_uid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_url(prop: property): string;
/**
 * 
 */
export function icalproperty_get_value_as_string(prop: property): string;
/**
 * 
 */
export function icalproperty_get_value_as_string_r(prop: property): string;
/**
 * 
 */
export function icalproperty_get_version(prop: property): string;
/**
 * 
 */
export function icalproperty_get_voter(prop: property): string;
/**
 * 
 */
export function icalproperty_get_x(prop: property): string;
/**
 * 
 */
export function icalproperty_get_x_name(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicclass(prop: property): object | null;
/**
 * 
 */
export function icalproperty_get_xlicclustercount(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicerror(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimecharset(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimecid(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimecontenttype(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimeencoding(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimefilename(prop: property): string;
/**
 * 
 */
export function icalproperty_get_xlicmimeoptinfo(prop: property): string;
/**
 * 
 */
export function icalproperty_isa(property: property): property_kind;
/**
 * 
 */
export function icalproperty_isa_property(property: object | null): number;
/**
 * 
 */
export function icalproperty_kind_and_string_to_enum(kind: number, str: string): number;
/**
 * 
 */
export function icalproperty_kind_is_valid(kind: property_kind): number;
/**
 * 
 */
export function icalproperty_kind_to_string(kind: property_kind): string;
/**
 * 
 */
export function icalproperty_kind_to_value_kind(kind: property_kind): value_kind;
/**
 * 
 */
export function icalproperty_method_to_string(method: property_method): string;
/**
 * 
 */
export function icalproperty_normalize(prop: property): void;
/**
 * 
 */
export function icalproperty_recurrence_is_excluded(comp: component, dtstart: object | null, recurtime: object | null): number;
/**
 * 
 */
export function icalproperty_remove_parameter_by_kind(prop: property, kind: parameter_kind): void;
/**
 * 
 */
export function icalproperty_remove_parameter_by_name(prop: property, name: string): void;
/**
 * 
 */
export function icalproperty_remove_parameter_by_ref(prop: property, param: parameter): void;
/**
 * 
 */
export function icalproperty_set_acceptresponse(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_acknowledged(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_action(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_allowconflict(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_attach(prop: property, v: attach): void;
/**
 * 
 */
export function icalproperty_set_attendee(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_busytype(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_calid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_calmaster(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_calscale(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_capversion(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_carid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_carlevel(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_categories(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_class(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_cmd(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_color(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_comment(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_completed(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_components(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_conference(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_contact(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_created(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_csid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_datemax(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_datemin(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_decreed(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_defaultcharset(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_defaultlocale(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_defaulttzid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_defaultvcars(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_deny(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_description(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_dtend(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_dtstamp(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_dtstart(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_due(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_duration(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_estimatedduration(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_exdate(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_expand(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_exrule(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_freebusy(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_geo(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_grant(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_image(prop: property, v: attach): void;
/**
 * 
 */
export function icalproperty_set_itipversion(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_lastmodified(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_location(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_maxcomponentsize(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_maxdate(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_maxresults(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_maxresultssize(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_method(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_mindate(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_multipart(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_name(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_organizer(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_owner(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_parameter(prop: property, parameter: parameter): void;
/**
 * 
 */
export function icalproperty_set_parameter_from_string(prop: property, name: string, value: string): void;
/**
 * 
 */
export function icalproperty_set_parent(property: property, component: component): void;
/**
 * 
 */
export function icalproperty_set_patchdelete(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_patchorder(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_patchparameter(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_patchtarget(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_patchversion(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_percentcomplete(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_permission(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_pollcompletion(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_pollitemid(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_pollmode(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_pollproperties(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_pollwinner(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_priority(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_prodid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_query(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_queryid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_querylevel(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_queryname(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_rdate(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_recuraccepted(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_recurexpand(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_recurlimit(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_recurrenceid(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_refreshinterval(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_relatedto(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_relcalid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_repeat(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_replyurl(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_requeststatus(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_resources(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_response(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_restriction(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_rrule(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_scope(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_sequence(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_source(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_status(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_storesexpanded(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_summary(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_target(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_taskmode(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_transp(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_trigger(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_tzid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_tzidaliasof(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_tzname(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_tzoffsetfrom(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_tzoffsetto(prop: property, v: number): void;
/**
 * 
 */
export function icalproperty_set_tzuntil(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_tzurl(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_uid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_url(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_value(prop: property, value: value): void;
/**
 * 
 */
export function icalproperty_set_value_from_string(prop: property, value: string, kind: string): void;
/**
 * 
 */
export function icalproperty_set_version(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_voter(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_x(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_x_name(prop: property, name: string): void;
/**
 * 
 */
export function icalproperty_set_xlicclass(prop: property, v: object | null): void;
/**
 * 
 */
export function icalproperty_set_xlicclustercount(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicerror(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimecharset(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimecid(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimecontenttype(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimeencoding(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimefilename(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_set_xlicmimeoptinfo(prop: property, v: string): void;
/**
 * 
 */
export function icalproperty_status_to_string(arg0: property_status): string;
/**
 * 
 */
export function icalproperty_string_to_kind(string: string): property_kind;
/**
 * 
 */
export function icalproperty_string_to_method(str: string): property_method;
/**
 * 
 */
export function icalproperty_string_to_status(string: string): property_status;
/**
 * 
 */
export function icalproperty_value_kind_to_kind(kind: value_kind): property_kind;
/**
 * 
 */
export function icalrecur_expand_recurrence(rule: string, start: number, count: number, array: number): number;
/**
 * 
 */
export function icalrecur_freq_to_string(kind: recurrencetype_frequency): string;
/**
 * 
 */
export function icalrecur_iterator_free(arg0: recur_iterator): void;
/**
 * 
 */
export function icalrecur_iterator_next(arg0: recur_iterator): object | null;
/**
 * 
 */
export function icalrecur_iterator_set_start(impl: recur_iterator, start: object | null): number;
/**
 * 
 */
export function icalrecur_skip_to_string(kind: recurrencetype_skip): string;
/**
 * 
 */
export function icalrecur_string_to_freq(str: string): recurrencetype_frequency;
/**
 * 
 */
export function icalrecur_string_to_skip(str: string): recurrencetype_skip;
/**
 * 
 */
export function icalrecur_string_to_weekday(str: string): recurrencetype_weekday;
/**
 * 
 */
export function icalrecur_weekday_to_string(kind: recurrencetype_weekday): string;
/**
 * 
 */
export function icalrecurrencetype_as_string(recur: object | null): string;
/**
 * 
 */
export function icalrecurrencetype_as_string_r(recur: object | null): string;
/**
 * 
 */
export function icalrecurrencetype_clear(r: object | null): void;
/**
 * 
 */
export function icalrecurrencetype_day_day_of_week(day: number): object | null;
/**
 * 
 */
export function icalrecurrencetype_day_position(day: number): number;
/**
 * 
 */
export function icalrecurrencetype_from_string(str: string): object | null;
/**
 * 
 */
export function icalrecurrencetype_month_is_leap(month: number): number;
/**
 * 
 */
export function icalrecurrencetype_month_month(month: number): number;
/**
 * 
 */
export function icalrecurrencetype_rscale_is_supported(): number;
/**
 * 
 */
export function icalreqstattype_as_string(arg0: object | null): string;
/**
 * 
 */
export function icalreqstattype_as_string_r(arg0: object | null): string;
/**
 * 
 */
export function icalreqstattype_from_string(str: string): object | null;
/**
 * 
 */
export function icalrestriction_check(comp: component): number;
/**
 * 
 */
export function icalrestriction_compare(restr: restriction_kind, count: number): number;
/**
 * 
 */
export function icaltime_add(t: object | null, d: object | null): object | null;
/**
 * 
 */
export function icaltime_adjust(tt: object | null, days: number, hours: number, minutes: number, seconds: number): void;
/**
 * 
 */
export function icaltime_as_ical_string(tt: object | null): string;
/**
 * 
 */
export function icaltime_as_ical_string_r(tt: object | null): string;
/**
 * 
 */
export function icaltime_as_timet(arg0: object | null): number;
/**
 * 
 */
export function icaltime_as_timet_with_zone(tt: object | null, zone: timezone): number;
/**
 * 
 */
export function icaltime_compare(a: object | null, b: object | null): number;
/**
 * 
 */
export function icaltime_compare_date_only(a: object | null, b: object | null): number;
/**
 * 
 */
export function icaltime_compare_date_only_tz(a: object | null, b: object | null, tz: timezone): number;
/**
 * There are several ways to create a new icaltimetype:
 *      - icaltime_null_time()
 *      - icaltime_null_date()
 *      - icaltime_current_time_with_zone()
 *      - icaltime_today()
 *      - icaltime_from_timet_with_zone(time_t tm, int is_date,
 *              icaltimezone *zone)
 *      - icaltime_from_day_of_year(int doy, int year)
 *      italtimetype objects can be converted to different formats:
 *      - icaltime_as_timet(struct icaltimetype tt)
 *      - icaltime_as_timet_with_zone(struct icaltimetype tt,
 *              icaltimezone *zone)
 *      - icaltime_as_ical_string(struct icaltimetype tt)
 *      Accessor methods include:
 *      - icaltime_get_timezone(struct icaltimetype t)
 *      - icaltime_get_tzid(struct icaltimetype t)
 *      - icaltime_set_timezone(struct icaltimetype t, const icaltimezone
 *  *zone)
 *      - icaltime_day_of_year(struct icaltimetype t)
 *      - icaltime_day_of_week(struct icaltimetype t)
 *      - icaltime_start_doy_week(struct icaltimetype t, int fdow)
 *      - icaltime_week_number(struct icaltimetype t)
 *      Query methods include:
 *      - icaltime_is_null_time(struct icaltimetype t)
 *      - icaltime_is_valid_time(struct icaltimetype t)
 *      - icaltime_is_date(struct icaltimetype t)
 *      - icaltime_is_utc(struct icaltimetype t)
 *      Modify, compare and utility methods include:
 *      - icaltime_compare(struct icaltimetype a,struct icaltimetype b)
 *      - icaltime_compare_date_only(struct icaltimetype a,
 *              struct icaltimetype b)
 *      - icaltime_adjust(struct icaltimetype *tt, int days, int hours,
 *              int minutes, int seconds);
 *      - icaltime_normalize(struct icaltimetype t);
 *      - icaltime_convert_to_zone(const struct icaltimetype tt,
 *              icaltimezone *zone);
 */
export function icaltime_convert_to_zone(tt: object | null, zone: timezone): object | null;
/**
 * 
 */
export function icaltime_current_time_with_zone(zone: timezone): object | null;
/**
 * 
 */
export function icaltime_day_of_week(t: object | null): number;
/**
 * 
 */
export function icaltime_day_of_year(t: object | null): number;
/**
 * 
 */
export function icaltime_days_in_month(month: number, year: number): number;
/**
 * 
 */
export function icaltime_days_in_year(year: number): number;
/**
 * 
 */
export function icaltime_from_day_of_year(doy: number, year: number): object | null;
/**
 * is the same as that used by icaldurationtype_from_string().
 * ### Usage
 * ```c
 * // create icalperiodtype
 * const char *period_string = "20170606T090000/20170607T090000";
 * struct icalperiodtype period = icalperiodtype_from_string(period_strin
 * g);
 * // print period in iCal format
 * printf("%s\n", icalperiodtype_as_ical_string(period));
 * ```
 */
export function icaltime_from_string(str: string): object | null;
/**
 * 
 */
export function icaltime_from_timet_with_zone(tm: number, is_date: number, zone: timezone): object | null;
/**
 * 
 */
export function icaltime_get_timezone(t: object | null): timezone;
/**
 * 
 */
export function icaltime_get_tzid(t: object | null): string;
/**
 * 
 */
export function icaltime_is_date(t: object | null): number;
/**
 * 
 */
export function icaltime_is_leap_year(year: number): number;
/**
 * 
 */
export function icaltime_is_null_time(t: object | null): number;
/**
 * 
 */
export function icaltime_is_utc(t: object | null): number;
/**
 * 
 */
export function icaltime_is_valid_time(t: object | null): number;
/**
 * 
 */
export function icaltime_normalize(t: object | null): object | null;
/**
 * 
 */
export function icaltime_null_date(): object | null;
/**
 * 
 */
export function icaltime_null_time(): object | null;
/**
 * 
 */
export function icaltime_set_timezone(t: object | null, zone: timezone): object | null;
/**
 * 
 */
export function icaltime_span_contains(s: time_span, container: time_span): number;
/**
 * 
 */
export function icaltime_span_new(dtstart: object | null, dtend: object | null, is_busy: number): object | null;
/**
 * 
 */
export function icaltime_span_overlaps(s1: time_span, s2: time_span): number;
/**
 * 
 */
export function icaltime_start_doy_week(t: object | null, fdow: number): number;
/**
 * 
 */
export function icaltime_subtract(t1: object | null, t2: object | null): object | null;
/**
 * 
 */
export function icaltime_today(): object | null;
/**
 * 
 */
export function icaltime_week_number(t: object | null): number;
/**
 * 
 */
export function icaltimezone_array_append_from_vtimezone(timezones: array, child: component): void;
/**
 * 
 */
export function icaltimezone_array_free(timezones: array): void;
/**
 * 
 */
export function icaltimezone_convert_time(tt: object | null, from_zone: timezone, to_zone: timezone): void;
/**
 * 
 */
export function icaltimezone_dump_changes(zone: timezone, max_year: number, fp: object | null): number;
/**
 * 
 */
export function icaltimezone_expand_vtimezone(comp: component, end_year: number, changes: array): void;
/**
 * 
 */
export function icaltimezone_free(zone: timezone, free_struct: number): void;
/**
 * 
 */
export function icaltimezone_free_builtin_timezones(): void;
/**
 * 
 */
export function icaltimezone_get_builtin_tzdata(): number;
/**
 * 
 */
export function icaltimezone_get_display_name(zone: timezone): string;
/**
 * 
 */
export function icaltimezone_get_latitude(zone: timezone): number;
/**
 * 
 */
export function icaltimezone_get_location(zone: timezone): string;
/**
 * 
 */
export function icaltimezone_get_location_from_vtimezone(component: component): string;
/**
 * 
 */
export function icaltimezone_get_longitude(zone: timezone): number;
/**
 * 
 */
export function icaltimezone_get_tzid(zone: timezone): string;
/**
 * 
 */
export function icaltimezone_get_tznames(zone: timezone): string;
/**
 * 
 */
export function icaltimezone_get_tznames_from_vtimezone(component: component): string;
/**
 * 
 */
export function icaltimezone_get_utc_offset(zone: timezone, tt: object | null, is_daylight: number): number;
/**
 * 
 */
export function icaltimezone_get_utc_offset_of_utc_time(zone: timezone, tt: object | null, is_daylight: number): number;
/**
 * 
 */
export function icaltimezone_release_zone_tab(): void;
/**
 * 
 */
export function icaltimezone_set_builtin_tzdata(set: number): void;
/**
 * 
 */
export function icaltimezone_set_component(zone: timezone, comp: component): number;
/**
 * 
 */
export function icaltimezone_set_tzid_prefix(new_prefix: string): void;
/**
 * 
 */
export function icaltimezone_truncate_vtimezone(vtz: component, start: timetype, end: timetype, ms_compatible: number): void;
/**
 * 
 */
export function icaltimezone_tzid_prefix(): string;
/**
 * 
 */
export function icaltriggertype_from_int(reltime: number): object | null;
/**
 * 
 */
export function icaltriggertype_from_string(str: string): object | null;
/**
 * 
 */
export function icaltriggertype_is_bad_trigger(tr: object | null): number;
/**
 * 
 */
export function icaltriggertype_is_null_trigger(tr: object | null): number;
/**
 * 
 */
export function icaltzutil_get_zone_directory(): string;
/**
 * 
 */
export function icalvalue_as_ical_string(value: value): string;
/**
 * 
 */
export function icalvalue_as_ical_string_r(value: value): string;
/**
 * 
 */
export function icalvalue_compare(a: value, b: value): parameter_xliccomparetype;
/**
 * 
 */
export function icalvalue_decode_ical_string(szText: string, szDecText: string, nMaxBufferLen: number): number;
/**
 * 
 */
export function icalvalue_encode_ical_string(szText: string, szEncText: string, MaxBufferLen: number): number;
/**
 * 
 */
export function icalvalue_free(value: value): void;
/**
 * 
 */
export function icalvalue_get_action(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_binary(value: value): string;
/**
 * 
 */
export function icalvalue_get_boolean(value: value): number;
/**
 * 
 */
export function icalvalue_get_busytype(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_caladdress(value: value): string;
/**
 * 
 */
export function icalvalue_get_carlevel(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_class(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_cmd(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_date(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_datetime(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_datetimedate(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_datetimeperiod(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_duration(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_float(value: value): number;
/**
 * 
 */
export function icalvalue_get_geo(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_integer(value: value): number;
/**
 * 
 */
export function icalvalue_get_method(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_period(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_pollcompletion(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_pollmode(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_query(value: value): string;
/**
 * 
 */
export function icalvalue_get_querylevel(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_recur(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_requeststatus(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_status(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_string(value: value): string;
/**
 * 
 */
export function icalvalue_get_taskmode(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_text(value: value): string;
/**
 * 
 */
export function icalvalue_get_transp(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_trigger(value: value): object | null;
/**
 * 
 */
export function icalvalue_get_uri(value: value): string;
/**
 * 
 */
export function icalvalue_get_utcoffset(value: value): number;
/**
 * 
 */
export function icalvalue_get_x(value: value): string;
/**
 * 
 */
export function icalvalue_get_xlicclass(value: value): object | null;
/**
 * 
 */
export function icalvalue_is_valid(value: value): number;
/**
 * 
 */
export function icalvalue_isa(value: value): value_kind;
/**
 * 
 */
export function icalvalue_isa_value(arg0: object | null): number;
/**
 * 
 */
export function icalvalue_kind_is_valid(kind: value_kind): number;
/**
 * 
 */
export function icalvalue_kind_to_string(kind: value_kind): string;
/**
 * 
 */
export function icalvalue_reset_kind(value: value): void;
/**
 * 
 */
export function icalvalue_set_action(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_attach(value: value, attach: attach): void;
/**
 * 
 */
export function icalvalue_set_binary(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_boolean(value: value, v: number): void;
/**
 * 
 */
export function icalvalue_set_busytype(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_caladdress(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_carlevel(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_class(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_cmd(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_date(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_datetime(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_datetimedate(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_datetimeperiod(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_duration(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_float(value: value, v: number): void;
/**
 * 
 */
export function icalvalue_set_geo(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_integer(value: value, v: number): void;
/**
 * 
 */
export function icalvalue_set_method(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_parent(value: value, property: property): void;
/**
 * 
 */
export function icalvalue_set_period(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_pollcompletion(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_pollmode(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_query(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_querylevel(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_recur(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_requeststatus(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_status(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_string(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_taskmode(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_text(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_transp(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_trigger(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_set_uri(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_utcoffset(value: value, v: number): void;
/**
 * 
 */
export function icalvalue_set_x(value: value, v: string): void;
/**
 * 
 */
export function icalvalue_set_xlicclass(value: value, v: object | null): void;
/**
 * 
 */
export function icalvalue_string_to_kind(str: string): value_kind;
/**
 * 
 */
export function print_date_to_string(str: string, data: object | null): void;
/**
 * 
 */
export function print_datetime_to_string(str: string, data: object | null): void;
/**
 * 
 */
export function pvl_clear(arg0: pvl_list): void;
/**
 * 
 */
export function pvl_count(arg0: pvl_list): number;
/**
 * 
 */
export function pvl_data(arg0: pvl_elem): object | null;
/**
 * 
 */
export function pvl_free(arg0: pvl_list): void;
/**
 * 
 */
export function pvl_insert_after(l: pvl_list, e: pvl_elem, d: object | null): void;
/**
 * 
 */
export function pvl_insert_before(l: pvl_list, e: pvl_elem, d: object | null): void;
/**
 * 
 */
export function pvl_pop(l: pvl_list): object | null;
/**
 * 
 */
export function pvl_push(l: pvl_list, d: object | null): void;
/**
 * 
 */
export function pvl_remove(arg0: pvl_list, arg1: pvl_elem): object | null;
/**
 * 
 */
export function pvl_shift(l: pvl_list): object | null;
/**
 * 
 */
export function pvl_unshift(l: pvl_list, d: object | null): void;
/**
 * 
 */
export function set_unknown_token_handling_setting(newSetting: _unknown_token_handling): void;
/**
 * 
 */
export function set_zone_directory(path: string): void;
/**
 * 
 */
export function sspm_encoding_string(type: object | null): string;
/**
 * 
 */
export function sspm_free_parts(parts: object | null, max_parts: number): void;
/**
 * 
 */
export function sspm_major_type_string(type: object | null): string;
/**
 * 
 */
export function sspm_minor_type_string(type: object | null): string;
/**
 * 
 */
export function sspm_parse_mime(parts: object | null, max_parts: number, actions: object | null, get_string: object | null, get_string_data: object | null, first_header: object | null): number;
/**
 * 
 */
export function sspm_write_mime(parts: object | null, num_parts: number, output_string: string, header: string): number;
export enum _unknown_token_handling {
    ASSUME_IANA_TOKEN = 1,
    DISCARD_TOKEN = 2,
    TREAT_AS_ERROR = 3,
}
export enum component_kind {
    NO_COMPONENT = 0,
    ANY_COMPONENT = 1,
    XROOT_COMPONENT = 2,
    XATTACH_COMPONENT = 3,
    VEVENT_COMPONENT = 4,
    VTODO_COMPONENT = 5,
    VJOURNAL_COMPONENT = 6,
    VCALENDAR_COMPONENT = 7,
    VAGENDA_COMPONENT = 8,
    VFREEBUSY_COMPONENT = 9,
    VALARM_COMPONENT = 10,
    XAUDIOALARM_COMPONENT = 11,
    XDISPLAYALARM_COMPONENT = 12,
    XEMAILALARM_COMPONENT = 13,
    XPROCEDUREALARM_COMPONENT = 14,
    VTIMEZONE_COMPONENT = 15,
    XSTANDARD_COMPONENT = 16,
    XDAYLIGHT_COMPONENT = 17,
    X_COMPONENT = 18,
    VSCHEDULE_COMPONENT = 19,
    VQUERY_COMPONENT = 20,
    VREPLY_COMPONENT = 21,
    VCAR_COMPONENT = 22,
    VCOMMAND_COMPONENT = 23,
    XLICINVALID_COMPONENT = 24,
    XLICMIMEPART_COMPONENT = 25,
    VAVAILABILITY_COMPONENT = 26,
    XAVAILABLE_COMPONENT = 27,
    VPOLL_COMPONENT = 28,
    VVOTER_COMPONENT = 29,
    XVOTE_COMPONENT = 30,
    VPATCH_COMPONENT = 31,
    XPATCH_COMPONENT = 32,
}
export enum errorenum {
    NO_ERROR = 0,
    BADARG_ERROR = 1,
    NEWFAILED_ERROR = 2,
    ALLOCATION_ERROR = 3,
    MALFORMEDDATA_ERROR = 4,
    PARSE_ERROR = 5,
    INTERNAL_ERROR = 6,
    FILE_ERROR = 7,
    USAGE_ERROR = 8,
    UNIMPLEMENTED_ERROR = 9,
    UNKNOWN_ERROR = 10,
}
export enum errorstate {
    FATAL = 0,
    NONFATAL = 1,
    DEFAULT = 2,
    UNKNOWN = 3,
}
export enum parameter_action {
    X = 20000,
    ASK = 20001,
    ABORT = 20002,
    NONE = 20099,
}
export enum parameter_cutype {
    X = 20100,
    INDIVIDUAL = 20101,
    GROUP = 20102,
    RESOURCE = 20103,
    ROOM = 20104,
    UNKNOWN = 20105,
    NONE = 20199,
}
export enum parameter_display {
    X = 22000,
    BADGE = 22001,
    GRAPHIC = 22002,
    FULLSIZE = 22003,
    THUMBNAIL = 22004,
    NONE = 22099,
}
export enum parameter_enable {
    X = 20200,
    TRUE = 20201,
    FALSE = 20202,
    NONE = 20299,
}
export enum parameter_encoding {
    X = 20300,
    Gjs_8BIT = 20301,
    BASE64 = 20302,
    NONE = 20399,
}
export enum parameter_fbtype {
    X = 20400,
    FREE = 20401,
    BUSY = 20402,
    BUSYUNAVAILABLE = 20403,
    BUSYTENTATIVE = 20404,
    NONE = 20499,
}
export enum parameter_feature {
    X = 22100,
    AUDIO = 22101,
    CHAT = 22102,
    FEED = 22103,
    MODERATOR = 22104,
    PHONE = 22105,
    SCREEN = 22106,
    VIDEO = 22107,
    NONE = 22199,
}
export enum parameter_kind {
    ANY_PARAMETER = 0,
    ACTIONPARAM_PARAMETER = 1,
    ALTREP_PARAMETER = 2,
    CHARSET_PARAMETER = 3,
    CN_PARAMETER = 4,
    CUTYPE_PARAMETER = 5,
    DELEGATEDFROM_PARAMETER = 6,
    DELEGATEDTO_PARAMETER = 7,
    DIR_PARAMETER = 8,
    DISPLAY_PARAMETER = 46,
    EMAIL_PARAMETER = 50,
    ENABLE_PARAMETER = 9,
    ENCODING_PARAMETER = 10,
    FBTYPE_PARAMETER = 11,
    FEATURE_PARAMETER = 48,
    FILENAME_PARAMETER = 42,
    FMTTYPE_PARAMETER = 12,
    IANA_PARAMETER = 33,
    ID_PARAMETER = 13,
    LABEL_PARAMETER = 49,
    LANGUAGE_PARAMETER = 14,
    LATENCY_PARAMETER = 15,
    LOCAL_PARAMETER = 16,
    LOCALIZE_PARAMETER = 17,
    MANAGEDID_PARAMETER = 40,
    MEMBER_PARAMETER = 18,
    MODIFIED_PARAMETER = 44,
    OPTIONS_PARAMETER = 19,
    PARTSTAT_PARAMETER = 20,
    PATCHACTION_PARAMETER = 51,
    PUBLICCOMMENT_PARAMETER = 37,
    RANGE_PARAMETER = 21,
    REASON_PARAMETER = 43,
    RELATED_PARAMETER = 22,
    RELTYPE_PARAMETER = 23,
    REQUIRED_PARAMETER = 43,
    RESPONSE_PARAMETER = 38,
    ROLE_PARAMETER = 24,
    RSVP_PARAMETER = 25,
    SCHEDULEAGENT_PARAMETER = 34,
    SCHEDULEFORCESEND_PARAMETER = 35,
    SCHEDULESTATUS_PARAMETER = 36,
    SENTBY_PARAMETER = 26,
    SIZE_PARAMETER = 41,
    STAYINFORMED_PARAMETER = 39,
    SUBSTATE_PARAMETER = 45,
    TZID_PARAMETER = 27,
    VALUE_PARAMETER = 28,
    X_PARAMETER = 29,
    XLICCOMPARETYPE_PARAMETER = 30,
    XLICERRORTYPE_PARAMETER = 31,
    NO_PARAMETER = 32,
}
export enum parameter_local {
    X = 20500,
    TRUE = 20501,
    FALSE = 20502,
    NONE = 20599,
}
export enum parameter_partstat {
    X = 20600,
    NEEDSACTION = 20601,
    ACCEPTED = 20602,
    DECLINED = 20603,
    TENTATIVE = 20604,
    DELEGATED = 20605,
    COMPLETED = 20606,
    INPROCESS = 20607,
    FAILED = 20608,
    NONE = 20699,
}
export enum parameter_patchaction {
    X = 22200,
    CREATE = 22201,
    BYNAME = 22202,
    BYVALUE = 22203,
    BYPARAM = 22204,
    NONE = 22299,
}
export enum parameter_range {
    X = 20700,
    THISANDPRIOR = 20701,
    THISANDFUTURE = 20702,
    NONE = 20799,
}
export enum parameter_related {
    X = 20800,
    START = 20801,
    END = 20802,
    NONE = 20899,
}
export enum parameter_reltype {
    X = 20900,
    PARENT = 20901,
    CHILD = 20902,
    SIBLING = 20903,
    POLL = 20904,
    NONE = 20999,
}
export enum parameter_required {
    X = 21000,
    TRUE = 21001,
    FALSE = 21002,
    NONE = 21099,
}
export enum parameter_role {
    X = 21100,
    CHAIR = 21101,
    REQPARTICIPANT = 21102,
    OPTPARTICIPANT = 21103,
    NONPARTICIPANT = 21104,
    NONE = 21199,
}
export enum parameter_rsvp {
    X = 21200,
    TRUE = 21201,
    FALSE = 21202,
    NONE = 21299,
}
export enum parameter_scheduleagent {
    X = 21300,
    SERVER = 21301,
    CLIENT = 21302,
    NONE = 21399,
}
export enum parameter_scheduleforcesend {
    X = 21400,
    REQUEST = 21401,
    REPLY = 21402,
    NONE = 21499,
}
export enum parameter_stayinformed {
    X = 21500,
    TRUE = 21501,
    FALSE = 21502,
    NONE = 21599,
}
export enum parameter_substate {
    X = 21900,
    OK = 21901,
    ERROR = 21902,
    SUSPENDED = 21903,
    NONE = 21999,
}
export enum parameter_value {
    X = 21600,
    BINARY = 21601,
    BOOLEAN = 21602,
    DATE = 21603,
    DURATION = 21604,
    FLOAT = 21605,
    INTEGER = 21606,
    PERIOD = 21607,
    RECUR = 21608,
    TEXT = 21609,
    URI = 21610,
    ERROR = 21611,
    DATETIME = 21612,
    UTCOFFSET = 21613,
    CALADDRESS = 21614,
    NONE = 21699,
}
export enum parameter_xliccomparetype {
    X = 21700,
    EQUAL = 21701,
    NOTEQUAL = 21702,
    LESS = 21703,
    GREATER = 21704,
    LESSEQUAL = 21705,
    GREATEREQUAL = 21706,
    REGEX = 21707,
    ISNULL = 21708,
    ISNOTNULL = 21709,
    NONE = 21799,
}
export enum parameter_xlicerrortype {
    X = 21800,
    COMPONENTPARSEERROR = 21801,
    PROPERTYPARSEERROR = 21802,
    PARAMETERNAMEPARSEERROR = 21803,
    PARAMETERVALUEPARSEERROR = 21804,
    VALUEPARSEERROR = 21805,
    INVALIDITIP = 21806,
    UNKNOWNVCALPROPERROR = 21807,
    MIMEPARSEERROR = 21808,
    VCALPROPPARSEERROR = 21809,
    NONE = 21899,
}
export enum parser_state {
    ERROR = 0,
    SUCCESS = 1,
    BEGIN_COMP = 2,
    END_COMP = 3,
    IN_PROGRESS = 4,
}
export enum property_action {
    X = 10000,
    AUDIO = 10001,
    DISPLAY = 10002,
    EMAIL = 10003,
    PROCEDURE = 10004,
    NONE = 10099,
}
export enum property_busytype {
    X = 10100,
    BUSY = 10101,
    BUSYUNAVAILABLE = 10102,
    BUSYTENTATIVE = 10103,
    NONE = 10199,
}
export enum property_carlevel {
    X = 10200,
    CARNONE = 10201,
    CARMIN = 10202,
    CARFULL1 = 10203,
    NONE = 10299,
}
export enum property_class {
    X = 10300,
    PUBLIC = 10301,
    PRIVATE = 10302,
    CONFIDENTIAL = 10303,
    NONE = 10399,
}
export enum property_cmd {
    X = 10400,
    ABORT = 10401,
    CONTINUE = 10402,
    CREATE = 10403,
    DELETE = 10404,
    GENERATEUID = 10405,
    GETCAPABILITY = 10406,
    IDENTIFY = 10407,
    MODIFY = 10408,
    MOVE = 10409,
    REPLY = 10410,
    SEARCH = 10411,
    SETLOCALE = 10412,
    NONE = 10499,
}
export enum property_kind {
    ANY_PROPERTY = 0,
    ACCEPTRESPONSE_PROPERTY = 102,
    ACKNOWLEDGED_PROPERTY = 1,
    ACTION_PROPERTY = 2,
    ALLOWCONFLICT_PROPERTY = 3,
    ATTACH_PROPERTY = 4,
    ATTENDEE_PROPERTY = 5,
    BUSYTYPE_PROPERTY = 101,
    CALID_PROPERTY = 6,
    CALMASTER_PROPERTY = 7,
    CALSCALE_PROPERTY = 8,
    CAPVERSION_PROPERTY = 9,
    CARLEVEL_PROPERTY = 10,
    CARID_PROPERTY = 11,
    CATEGORIES_PROPERTY = 12,
    CLASS_PROPERTY = 13,
    CMD_PROPERTY = 14,
    COLOR_PROPERTY = 118,
    COMMENT_PROPERTY = 15,
    COMPLETED_PROPERTY = 16,
    COMPONENTS_PROPERTY = 17,
    CONFERENCE_PROPERTY = 120,
    CONTACT_PROPERTY = 18,
    CREATED_PROPERTY = 19,
    CSID_PROPERTY = 20,
    DATEMAX_PROPERTY = 21,
    DATEMIN_PROPERTY = 22,
    DECREED_PROPERTY = 23,
    DEFAULTCHARSET_PROPERTY = 24,
    DEFAULTLOCALE_PROPERTY = 25,
    DEFAULTTZID_PROPERTY = 26,
    DEFAULTVCARS_PROPERTY = 27,
    DENY_PROPERTY = 28,
    DESCRIPTION_PROPERTY = 29,
    DTEND_PROPERTY = 30,
    DTSTAMP_PROPERTY = 31,
    DTSTART_PROPERTY = 32,
    DUE_PROPERTY = 33,
    DURATION_PROPERTY = 34,
    ESTIMATEDDURATION_PROPERTY = 113,
    EXDATE_PROPERTY = 35,
    EXPAND_PROPERTY = 36,
    EXRULE_PROPERTY = 37,
    FREEBUSY_PROPERTY = 38,
    GEO_PROPERTY = 39,
    GRANT_PROPERTY = 40,
    IMAGE_PROPERTY = 119,
    ITIPVERSION_PROPERTY = 41,
    LASTMODIFIED_PROPERTY = 42,
    LOCATION_PROPERTY = 43,
    MAXCOMPONENTSIZE_PROPERTY = 44,
    MAXDATE_PROPERTY = 45,
    MAXRESULTS_PROPERTY = 46,
    MAXRESULTSSIZE_PROPERTY = 47,
    METHOD_PROPERTY = 48,
    MINDATE_PROPERTY = 49,
    MULTIPART_PROPERTY = 50,
    NAME_PROPERTY = 115,
    ORGANIZER_PROPERTY = 52,
    OWNER_PROPERTY = 53,
    PATCHDELETE_PROPERTY = 124,
    PATCHORDER_PROPERTY = 122,
    PATCHPARAMETER_PROPERTY = 125,
    PATCHTARGET_PROPERTY = 123,
    PATCHVERSION_PROPERTY = 121,
    PERCENTCOMPLETE_PROPERTY = 54,
    PERMISSION_PROPERTY = 55,
    POLLCOMPLETION_PROPERTY = 110,
    POLLITEMID_PROPERTY = 103,
    POLLMODE_PROPERTY = 104,
    POLLPROPERTIES_PROPERTY = 105,
    POLLWINNER_PROPERTY = 106,
    PRIORITY_PROPERTY = 56,
    PRODID_PROPERTY = 57,
    QUERY_PROPERTY = 58,
    QUERYLEVEL_PROPERTY = 59,
    QUERYID_PROPERTY = 60,
    QUERYNAME_PROPERTY = 61,
    RDATE_PROPERTY = 62,
    RECURACCEPTED_PROPERTY = 63,
    RECUREXPAND_PROPERTY = 64,
    RECURLIMIT_PROPERTY = 65,
    RECURRENCEID_PROPERTY = 66,
    REFRESHINTERVAL_PROPERTY = 116,
    RELATEDTO_PROPERTY = 67,
    RELCALID_PROPERTY = 68,
    REPEAT_PROPERTY = 69,
    REPLYURL_PROPERTY = 111,
    REQUESTSTATUS_PROPERTY = 70,
    RESOURCES_PROPERTY = 71,
    RESPONSE_PROPERTY = 112,
    RESTRICTION_PROPERTY = 72,
    RRULE_PROPERTY = 73,
    SCOPE_PROPERTY = 74,
    SEQUENCE_PROPERTY = 75,
    SOURCE_PROPERTY = 117,
    STATUS_PROPERTY = 76,
    STORESEXPANDED_PROPERTY = 77,
    SUMMARY_PROPERTY = 78,
    TARGET_PROPERTY = 79,
    TASKMODE_PROPERTY = 114,
    TRANSP_PROPERTY = 80,
    TRIGGER_PROPERTY = 81,
    TZID_PROPERTY = 82,
    TZIDALIASOF_PROPERTY = 108,
    TZNAME_PROPERTY = 83,
    TZOFFSETFROM_PROPERTY = 84,
    TZOFFSETTO_PROPERTY = 85,
    TZUNTIL_PROPERTY = 109,
    TZURL_PROPERTY = 86,
    UID_PROPERTY = 87,
    URL_PROPERTY = 88,
    VERSION_PROPERTY = 89,
    VOTER_PROPERTY = 107,
    X_PROPERTY = 90,
    XLICCLASS_PROPERTY = 91,
    XLICCLUSTERCOUNT_PROPERTY = 92,
    XLICERROR_PROPERTY = 93,
    XLICMIMECHARSET_PROPERTY = 94,
    XLICMIMECID_PROPERTY = 95,
    XLICMIMECONTENTTYPE_PROPERTY = 96,
    XLICMIMEENCODING_PROPERTY = 97,
    XLICMIMEFILENAME_PROPERTY = 98,
    XLICMIMEOPTINFO_PROPERTY = 99,
    NO_PROPERTY = 100,
}
export enum property_method {
    X = 10500,
    PUBLISH = 10501,
    REQUEST = 10502,
    REPLY = 10503,
    ADD = 10504,
    CANCEL = 10505,
    REFRESH = 10506,
    COUNTER = 10507,
    DECLINECOUNTER = 10508,
    CREATE = 10509,
    READ = 10510,
    RESPONSE = 10511,
    MOVE = 10512,
    MODIFY = 10513,
    GENERATEUID = 10514,
    DELETE = 10515,
    POLLSTATUS = 10516,
    NONE = 10599,
}
export enum property_pollcompletion {
    X = 10600,
    SERVER = 10601,
    SERVERSUBMIT = 10602,
    SERVERCHOICE = 10603,
    CLIENT = 10604,
    NONE = 10699,
}
export enum property_pollmode {
    X = 10700,
    BASIC = 10701,
    NONE = 10799,
}
export enum property_querylevel {
    X = 10800,
    CALQL1 = 10801,
    CALQLNONE = 10802,
    NONE = 10899,
}
export enum property_status {
    X = 10900,
    TENTATIVE = 10901,
    CONFIRMED = 10902,
    COMPLETED = 10903,
    NEEDSACTION = 10904,
    CANCELLED = 10905,
    INPROCESS = 10906,
    DRAFT = 10907,
    FINAL = 10908,
    SUBMITTED = 10909,
    PENDING = 10910,
    FAILED = 10911,
    DELETED = 10912,
    NONE = 10999,
}
export enum property_taskmode {
    X = 11200,
    AUTOMATICCOMPLETION = 11201,
    AUTOMATICFAILURE = 11202,
    AUTOMATICSTATUS = 11203,
    NONE = 11299,
}
export enum property_transp {
    X = 11000,
    OPAQUE = 11001,
    OPAQUENOCONFLICT = 11002,
    TRANSPARENT = 11003,
    TRANSPARENTNOCONFLICT = 11004,
    NONE = 11099,
}
export enum property_xlicclass {
    X = 11100,
    PUBLISHNEW = 11101,
    PUBLISHUPDATE = 11102,
    PUBLISHFREEBUSY = 11103,
    REQUESTNEW = 11104,
    REQUESTUPDATE = 11105,
    REQUESTRESCHEDULE = 11106,
    REQUESTDELEGATE = 11107,
    REQUESTNEWORGANIZER = 11108,
    REQUESTFORWARD = 11109,
    REQUESTSTATUS = 11110,
    REQUESTFREEBUSY = 11111,
    REPLYACCEPT = 11112,
    REPLYDECLINE = 11113,
    REPLYDELEGATE = 11114,
    REPLYCRASHERACCEPT = 11115,
    REPLYCRASHERDECLINE = 11116,
    ADDINSTANCE = 11117,
    CANCELEVENT = 11118,
    CANCELINSTANCE = 11119,
    CANCELALL = 11120,
    REFRESH = 11121,
    COUNTER = 11122,
    DECLINECOUNTER = 11123,
    MALFORMED = 11124,
    OBSOLETE = 11125,
    MISSEQUENCED = 11126,
    UNKNOWN = 11127,
    NONE = 11199,
}
export enum recurrencetype_frequency {
    SECONDLY_RECURRENCE = 0,
    MINUTELY_RECURRENCE = 1,
    HOURLY_RECURRENCE = 2,
    DAILY_RECURRENCE = 3,
    WEEKLY_RECURRENCE = 4,
    MONTHLY_RECURRENCE = 5,
    YEARLY_RECURRENCE = 6,
    NO_RECURRENCE = 7,
}
export enum recurrencetype_skip {
    BACKWARD = 0,
    FORWARD = 1,
    OMIT = 2,
    UNDEFINED = 3,
}
export enum recurrencetype_weekday {
    NO_WEEKDAY = 0,
    SUNDAY_WEEKDAY = 1,
    MONDAY_WEEKDAY = 2,
    TUESDAY_WEEKDAY = 3,
    WEDNESDAY_WEEKDAY = 4,
    THURSDAY_WEEKDAY = 5,
    FRIDAY_WEEKDAY = 6,
    SATURDAY_WEEKDAY = 7,
}
export enum requeststatus {
    UNKNOWN_STATUS = 0,
    Gjs_2_0_SUCCESS_STATUS = 1,
    Gjs_2_1_FALLBACK_STATUS = 2,
    Gjs_2_2_IGPROP_STATUS = 3,
    Gjs_2_3_IGPARAM_STATUS = 4,
    Gjs_2_4_IGXPROP_STATUS = 5,
    Gjs_2_5_IGXPARAM_STATUS = 6,
    Gjs_2_6_IGCOMP_STATUS = 7,
    Gjs_2_7_FORWARD_STATUS = 8,
    Gjs_2_8_ONEEVENT_STATUS = 9,
    Gjs_2_9_TRUNC_STATUS = 10,
    Gjs_2_10_ONETODO_STATUS = 11,
    Gjs_2_11_TRUNCRRULE_STATUS = 12,
    Gjs_3_0_INVPROPNAME_STATUS = 13,
    Gjs_3_1_INVPROPVAL_STATUS = 14,
    Gjs_3_2_INVPARAM_STATUS = 15,
    Gjs_3_3_INVPARAMVAL_STATUS = 16,
    Gjs_3_4_INVCOMP_STATUS = 17,
    Gjs_3_5_INVTIME_STATUS = 18,
    Gjs_3_6_INVRULE_STATUS = 19,
    Gjs_3_7_INVCU_STATUS = 20,
    Gjs_3_8_NOAUTH_STATUS = 21,
    Gjs_3_9_BADVERSION_STATUS = 22,
    Gjs_3_10_TOOBIG_STATUS = 23,
    Gjs_3_11_MISSREQCOMP_STATUS = 24,
    Gjs_3_12_UNKCOMP_STATUS = 25,
    Gjs_3_13_BADCOMP_STATUS = 26,
    Gjs_3_14_NOCAP_STATUS = 27,
    Gjs_3_15_INVCOMMAND = 28,
    Gjs_4_0_BUSY_STATUS = 29,
    Gjs_4_1_STORE_ACCESS_DENIED = 30,
    Gjs_4_2_STORE_FAILED = 31,
    Gjs_4_3_STORE_NOT_FOUND = 32,
    Gjs_5_0_MAYBE_STATUS = 33,
    Gjs_5_1_UNAVAIL_STATUS = 34,
    Gjs_5_2_NOSERVICE_STATUS = 35,
    Gjs_5_3_NOSCHED_STATUS = 36,
    Gjs_6_1_CONTAINER_NOT_FOUND = 37,
    Gjs_9_0_UNRECOGNIZED_COMMAND = 38,
}
export enum restriction_kind {
    NONE = 0,
    ZERO = 1,
    ONE = 2,
    ZEROPLUS = 3,
    ONEPLUS = 4,
    ZEROORONE = 5,
    ONEEXCLUSIVE = 6,
    ONEMUTUAL = 7,
    UNKNOWN = 8,
}
export enum value_kind {
    ANY_VALUE = 5000,
    ACTION_VALUE = 5027,
    ATTACH_VALUE = 5003,
    BINARY_VALUE = 5011,
    BOOLEAN_VALUE = 5021,
    BUSYTYPE_VALUE = 5032,
    CALADDRESS_VALUE = 5023,
    CARLEVEL_VALUE = 5016,
    CLASS_VALUE = 5019,
    CMD_VALUE = 5010,
    DATE_VALUE = 5002,
    DATETIME_VALUE = 5028,
    DATETIMEDATE_VALUE = 5036,
    DATETIMEPERIOD_VALUE = 5015,
    DURATION_VALUE = 5020,
    FLOAT_VALUE = 5013,
    GEO_VALUE = 5004,
    INTEGER_VALUE = 5017,
    METHOD_VALUE = 5030,
    PERIOD_VALUE = 5014,
    POLLCOMPLETION_VALUE = 5034,
    POLLMODE_VALUE = 5033,
    QUERY_VALUE = 5001,
    QUERYLEVEL_VALUE = 5012,
    RECUR_VALUE = 5026,
    REQUESTSTATUS_VALUE = 5009,
    STATUS_VALUE = 5005,
    STRING_VALUE = 5007,
    TASKMODE_VALUE = 5035,
    TEXT_VALUE = 5008,
    TRANSP_VALUE = 5006,
    TRIGGER_VALUE = 5024,
    URI_VALUE = 5018,
    UTCOFFSET_VALUE = 5029,
    X_VALUE = 5022,
    XLICCLASS_VALUE = 5025,
    NO_VALUE = 5031,
}
export class array  {
    constructor(config?: properties);
    element_size: number;
    increment_size: number;
    num_elements: number;
    space_allocated: number;
    chunks: object;
}
export class attach  {
    constructor(config?: properties);
}
export class compiter  {
    constructor(config?: properties);
    kind: component_kind;
    iter: pvl_elem;
}
export class component  {
    constructor(config?: properties);
}
export class datetimeperiodtype  {
    constructor(config?: properties);
    time: object;
    period: object;
}
export class durationtype  {
    constructor(config?: properties);
    is_neg: number;
    days: number;
    weeks: number;
    hours: number;
    minutes: number;
    seconds: number;
}
export class geotype  {
    constructor(config?: properties);
    lat: number;
    lon: number;
}
export class parameter  {
    constructor(config?: properties);
}
export class parser  {
    constructor(config?: properties);
}
export class periodtype  {
    constructor(config?: properties);
    start: object;
    end: object;
    duration: object;
}
export class property  {
    constructor(config?: properties);
}
export class pvl_elem  {
    constructor(config?: properties);
}
export class pvl_elem_t  {
    constructor(config?: properties);
    MAGIC: number;
    d: object;
    next: object;
    prior: object;
}
export class pvl_list  {
    constructor(config?: properties);
}
export class recur_iterator  {
    constructor(config?: properties);
}
export class recurrencetype  {
    constructor(config?: properties);
    freq: recurrencetype_frequency;
    until: object;
    count: number;
    interval: number;
    week_start: recurrencetype_weekday;
    by_second: number[];
    by_minute: number[];
    by_hour: number[];
    by_day: number[];
    by_month_day: number[];
    by_year_day: number[];
    by_week_no: number[];
    by_month: number[];
    by_set_pos: number[];
    rscale: string;
    skip: recurrencetype_skip;
}
export class reqstattype  {
    constructor(config?: properties);
    code: requeststatus;
    desc: string;
    debug: string;
}
export class sspm_action_map  {
    constructor(config?: properties);
    major: object;
    minor: object;
}
export class sspm_header  {
    constructor(config?: properties);
    def: number;
    boundary: string;
    major: object;
    minor: object;
    minor_text: string;
    content_type_params: string;
    charset: string;
    encoding: object;
    filename: string;
    content_id: string;
    error: object;
    error_text: string;
}
export class sspm_part  {
    constructor(config?: properties);
    header: object;
    level: number;
    data_size: number;
    data: object;
}
export class time_span  {
    constructor(config?: properties);
    start: number;
    end: number;
    is_busy: number;
}
export class timetype  {
    constructor(config?: properties);
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    is_date: number;
    is_daylight: number;
    zone: timezone;
}
export class timezone  {
    constructor(config?: properties);
}
export class timezonephase  {
    constructor(config?: properties);
    tzname: string;
    is_stdandard: number;
    dtstart: object;
    offsetto: number;
    tzoffsetfrom: number;
    comment: string;
    rdate: object;
    rrule: string;
}
export class timezonetype  {
    constructor(config?: properties);
    tzid: string;
    last_mod: object;
    tzurl: string;
    phases: object;
}
export class triggertype  {
    constructor(config?: properties);
    time: object;
    duration: object;
}
export class value  {
    constructor(config?: properties);
}