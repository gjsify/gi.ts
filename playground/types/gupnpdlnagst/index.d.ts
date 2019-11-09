
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GUPnPDLNA from "gupnpdlna";
import * as Gst from "gst";
import * as GstPbutils from "gstpbutils";
/**
 * gupnpdlnagst.d.ts
 */
type properties = { [key: string]: any };
/**
 * This utility function creates a #GUPnPDLNAInformation from
 * #GstDiscovererInfo. Its purpose is mainly to pass its result to
 * gupnp_dlna_profile_guesser_guess_profile_from_info() to avoid
 * rediscovering of a URI. Created #GUPnPDLNAInformation takes a
 * reference on @info.
 */
export function utils_information_from_discoverer_info(info: GstPbutils.DiscovererInfo): GUPnPDLNA.Information;