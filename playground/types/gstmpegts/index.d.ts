
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstMpegts from "gstmpegts";
/**
 * gstmpegts.d.ts
 */
type properties = { [key: string]: any };
export type PacketizeFunc = (section: Section) => boolean;
/**
 * Creates a #GstMpegtsDescriptor with custom @tag and @data
 */
export function descriptor_from_custom(tag: number, data: number[], length: number): Descriptor;
/**
 * Creates a #GstMpegtsDescriptor with custom @tag, @tag_extension and @d
 * ata
 */
export function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: number[], length: number): Descriptor;
/**
 * Creates a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_NETWORK_NAME,
 * with the network name @name. The data field of the #GstMpegtsDescripto
 * r
 * will be allocated, and transferred to the caller.
 */
export function descriptor_from_dvb_network_name(name: string): Descriptor;
/**
 * Fills a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_SERVICE.
 * The data field of the #GstMpegtsDescriptor will be allocated,
 * and transferred to the caller.
 */
export function descriptor_from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor;
/**
 * 
 */
export function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
/**
 * Creates a %GST_MTS_DESC_ISO_639_LANGUAGE #GstMpegtsDescriptor with
 * a single language
 */
export function descriptor_from_iso_639_language(language: string): Descriptor;
/**
 * Creates a %GST_MTS_DESC_REGISTRATION #GstMpegtsDescriptor
 */
export function descriptor_from_registration(format_identifier: string, additional_info: number[] | null, additional_info_length: number): Descriptor;
/**
 * 
 */
export function dvb_component_descriptor_free(source: ComponentDescriptor): void;
/**
 * Extracts the #GstMpegtsSection contained in the @event #GstEvent
 */
export function event_parse_mpegts_section(event: Gst.Event): Section;
/**
 * Finds the first descriptor of type @tag in the array.
 * Note: To look for descriptors that can be present more than once in an
 * array of descriptors, iterate the #GArray manually.
 */
export function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor;
/**
 * Initializes the MPEG-TS helper library. Must be called before any
 * usage.
 */
export function initialize(): void;
/**
 * Creates a new #GstMessage for a @GstMpegtsSection.
 */
export function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message;
/**
 * Returns the #GstMpegtsSection contained in a message.
 */
export function message_parse_mpegts_section(message: Gst.Message): Section;
/**
 * Parses the descriptors present in @buffer and returns them as an
 * array.
 * Note: The data provided in @buffer will not be copied.
 */
export function parse_descriptors(buffer: number, buf_len: number): Descriptor[];
/**
 * Allocates a new #GPtrArray for #GstMpegtsPatProgram
 */
export function pat_new(): PatProgram[];
/**
 * Ownership of @nit is taken. The data in @nit is managed by the #GstMpe
 * gtsSection
 */
export function section_from_nit(nit: NIT): Section;
/**
 * Creates a PAT #GstMpegtsSection from the @programs array of #GstMpegts
 * PatPrograms
 */
export function section_from_pat(programs: PatProgram[], ts_id: number): Section;
/**
 * Creates a #GstMpegtsSection from @pmt that is bound to @pid
 */
export function section_from_pmt(pmt: PMT, pid: number): Section;
/**
 * Ownership of @sdt is taken. The data in @sdt is managed by the #GstMpe
 * gtsSection
 */
export function section_from_sdt(sdt: SDT): Section;
export enum ATSCDescriptorType {
    STUFFING = 128,
    AC3 = 131,
    CAPTION_SERVICE = 134,
    CONTENT_ADVISORY = 135,
    EXTENDED_CHANNEL_NAME = 160,
    SERVICE_LOCATION = 161,
    TIME_SHIFTED_SERVICE = 162,
    COMPONENT_NAME = 163,
    DCC_DEPARTING_REQUEST = 168,
    DCC_ARRIVING_REQUEST = 169,
    REDISTRIBUTION_CONTROL = 170,
    GENRE = 171,
    PRIVATE_INFORMATION = 173,
    EAC3 = 204,
    ENHANCED_SIGNALING = 178,
    DATA_SERVICE = 164,
    PID_COUNT = 165,
    DOWNLOAD_DESCRIPTOR = 166,
    MULTIPROTOCOL_ENCAPSULATION = 167,
    MODULE_LINK = 180,
    CRC32 = 181,
    GROUP_LINK = 184,
}
export enum AtscMGTTableType {
    EIT0 = 256,
    EIT127 = 383,
    ETT0 = 512,
    ETT127 = 639,
}
export enum CableOuterFECScheme {
    UNDEFINED = 0,
    NONE = 1,
    RS_204_188 = 2,
}
export enum ComponentStreamContent {
    MPEG2_VIDEO = 1,
    MPEG1_LAYER2_AUDIO = 2,
    TELETEXT_OR_SUBTITLE = 3,
    AC_3 = 4,
    AVC = 5,
    AAC = 6,
    DTS = 7,
    SRM_CPCM = 8,
}
export enum ContentNibbleHi {
    MOVIE_DRAMA = 1,
    NEWS_CURRENT_AFFAIRS = 2,
    SHOW_GAME_SHOW = 3,
    SPORTS = 4,
    CHILDREN_YOUTH_PROGRAM = 5,
    MUSIC_BALLET_DANCE = 6,
    ARTS_CULTURE = 7,
    SOCIAL_POLITICAL_ECONOMICS = 8,
    EDUCATION_SCIENCE_FACTUAL = 9,
    LEISURE_HOBBIES = 10,
    SPECIAL_CHARACTERISTICS = 11,
}
export enum DVBCodeRate {
    NONE = 0,
    Gjs_1_2 = 1,
    Gjs_2_3 = 2,
    Gjs_3_4 = 3,
    Gjs_4_5 = 4,
    Gjs_5_6 = 5,
    Gjs_6_7 = 6,
    Gjs_7_8 = 7,
    Gjs_8_9 = 8,
    AUTO = 9,
    Gjs_3_5 = 10,
    Gjs_9_10 = 11,
    Gjs_2_5 = 12,
}
export enum DVBDescriptorType {
    NETWORK_NAME = 64,
    SERVICE_LIST = 65,
    STUFFING = 66,
    SATELLITE_DELIVERY_SYSTEM = 67,
    CABLE_DELIVERY_SYSTEM = 68,
    VBI_DATA = 69,
    VBI_TELETEXT = 70,
    BOUQUET_NAME = 71,
    SERVICE = 72,
    COUNTRY_AVAILABILITY = 73,
    LINKAGE = 74,
    NVOD_REFERENCE = 75,
    TIME_SHIFTED_SERVICE = 76,
    SHORT_EVENT = 77,
    EXTENDED_EVENT = 78,
    TIME_SHIFTED_EVENT = 79,
    COMPONENT = 80,
    MOSAIC = 81,
    STREAM_IDENTIFIER = 82,
    CA_IDENTIFIER = 83,
    CONTENT = 84,
    PARENTAL_RATING = 85,
    TELETEXT = 86,
    TELEPHONE = 87,
    LOCAL_TIME_OFFSET = 88,
    SUBTITLING = 89,
    TERRESTRIAL_DELIVERY_SYSTEM = 90,
    MULTILINGUAL_NETWORK_NAME = 91,
    MULTILINGUAL_BOUQUET_NAME = 92,
    MULTILINGUAL_SERVICE_NAME = 93,
    MULTILINGUAL_COMPONENT = 94,
    PRIVATE_DATA_SPECIFIER = 95,
    SERVICE_MOVE = 96,
    SHORT_SMOOTHING_BUFFER = 97,
    FREQUENCY_LIST = 98,
    PARTIAL_TRANSPORT_STREAM = 99,
    DATA_BROADCAST = 100,
    SCRAMBLING = 101,
    DATA_BROADCAST_ID = 102,
    TRANSPORT_STREAM = 103,
    DSNG = 104,
    PDC = 105,
    AC3 = 106,
    ANCILLARY_DATA = 107,
    CELL_LIST = 108,
    CELL_FREQUENCY_LINK = 109,
    ANNOUNCEMENT_SUPPORT = 110,
    APPLICATION_SIGNALLING = 111,
    ADAPTATION_FIELD_DATA = 112,
    SERVICE_IDENTIFIER = 113,
    SERVICE_AVAILABILITY = 114,
    DEFAULT_AUTHORITY = 115,
    RELATED_CONTENT = 116,
    TVA_ID = 117,
    CONTENT_IDENTIFIER = 118,
    TIMESLICE_FEC_IDENTIFIER = 119,
    ECM_REPETITION_RATE = 120,
    S2_SATELLITE_DELIVERY_SYSTEM = 121,
    ENHANCED_AC3 = 122,
    DTS = 123,
    AAC = 124,
    XAIT_LOCATION = 125,
    FTA_CONTENT_MANAGEMENT = 126,
    EXTENSION = 127,
}
export enum DVBExtendedDescriptorType {
    IMAGE_ICON = 0,
    CPCM_DELIVERY_SIGNALLING = 1,
    CP = 2,
    CP_IDENTIFIER = 3,
    T2_DELIVERY_SYSTEM = 4,
    SH_DELIVERY_SYSTEM = 5,
    SUPPLEMENTARY_AUDIO = 6,
    NETWORK_CHANGE_NOTIFY = 7,
    MESSAGE = 8,
    TARGET_REGION = 9,
    TARGET_REGION_NAME = 10,
    SERVICE_RELOCATED = 11,
    XAIT_PID = 12,
    C2_DELIVERY_SYSTEM = 13,
    DTS_HD_AUDIO_STREAM = 14,
    DTS_NEUTRAL = 15,
    VIDEO_DEPTH_RANGE = 16,
    T2MI = 17,
    URI_LINKAGE = 19,
}
export enum DVBLinkageHandOverType {
    RESERVED = 0,
    IDENTICAL = 1,
    LOCAL_VARIATION = 2,
    ASSOCIATED = 3,
}
export enum DVBLinkageType {
    RESERVED_00 = 0,
    INFORMATION = 1,
    EPG = 2,
    CA_REPLACEMENT = 3,
    TS_CONTAINING_COMPLETE_SI = 4,
    SERVICE_REPLACEMENT = 5,
    DATA_BROADCAST = 6,
    RCS_MAP = 7,
    MOBILE_HAND_OVER = 8,
    SYSTEM_SOFTWARE_UPDATE = 9,
    TS_CONTAINING_SSU = 10,
    IP_MAC_NOTIFICATION = 11,
    TS_CONTAINING_INT = 12,
    EVENT = 13,
    EXTENDED_EVENT = 14,
}
export enum DVBScramblingModeType {
    RESERVED = 0,
    CSA1 = 1,
    CSA2 = 2,
    CSA3_STANDARD = 3,
    CSA3_MINIMAL_ENHANCED = 4,
    CSA3_FULL_ENHANCED = 5,
    CISSA = 16,
    ATIS_0 = 112,
    ATIS_F = 127,
}
export enum DVBServiceType {
    RESERVED_00 = 0,
    DIGITAL_TELEVISION = 1,
    DIGITAL_RADIO_SOUND = 2,
    TELETEXT = 3,
    NVOD_REFERENCE = 4,
    NVOD_TIME_SHIFTED = 5,
    MOSAIC = 6,
    FM_RADIO = 7,
    DVB_SRM = 8,
    RESERVED_09 = 9,
    ADVANCED_CODEC_DIGITAL_RADIO_SOUND = 10,
    ADVANCED_CODEC_MOSAIC = 11,
    DATA_BROADCAST = 12,
    RESERVED_0D_COMMON_INTERFACE = 13,
    RCS_MAP = 14,
    RCS_FLS = 15,
    DVB_MHP = 16,
    MPEG2_HD_DIGITAL_TELEVISION = 17,
    ADVANCED_CODEC_SD_DIGITAL_TELEVISION = 22,
    ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED = 23,
    ADVANCED_CODEC_SD_NVOD_REFERENCE = 24,
    ADVANCED_CODEC_HD_DIGITAL_TELEVISION = 25,
    ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED = 26,
    ADVANCED_CODEC_HD_NVOD_REFERENCE = 27,
    ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION = 28,
    ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED = 29,
    ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE = 30,
    RESERVED_FF = 31,
}
export enum DVBTeletextType {
    NITIAL_PAGE = 1,
    UBTITLE_PAGE = 2,
    DDITIONAL_INFO_PAGE = 3,
    ROGRAMME_SCHEDULE_PAGE = 4,
    EARING_IMPAIRED_PAGE = 5,
}
export enum DescriptorType {
    RESERVED_00 = 0,
    RESERVED_01 = 1,
    VIDEO_STREAM = 2,
    AUDIO_STREAM = 3,
    HIERARCHY = 4,
    REGISTRATION = 5,
    DATA_STREAM_ALIGNMENT = 6,
    TARGET_BACKGROUND_GRID = 7,
    VIDEO_WINDOW = 8,
    CA = 9,
    ISO_639_LANGUAGE = 10,
    SYSTEM_CLOCK = 11,
    MULTIPLEX_BUFFER_UTILISATION = 12,
    COPYRIGHT = 13,
    MAXIMUM_BITRATE = 14,
    PRIVATE_DATA_INDICATOR = 15,
    SMOOTHING_BUFFER = 16,
    STD = 17,
    IBP = 18,
    DSMCC_CAROUSEL_IDENTIFIER = 19,
    DSMCC_ASSOCIATION_TAG = 20,
    DSMCC_DEFERRED_ASSOCIATION_TAG = 21,
    DSMCC_NPT_REFERENCE = 23,
    DSMCC_NPT_ENDPOINT = 24,
    DSMCC_STREAM_MODE = 25,
    DSMCC_STREAM_EVENT = 26,
    MPEG4_VIDEO = 27,
    MPEG4_AUDIO = 28,
    IOD = 29,
    SL = 30,
    FMC = 31,
    EXTERNAL_ES_ID = 32,
    MUX_CODE = 33,
    FMX_BUFFER_SIZE = 34,
    MULTIPLEX_BUFFER = 35,
    CONTENT_LABELING = 36,
    METADATA_POINTER = 37,
    METADATA = 38,
    METADATA_STD = 39,
    AVC_VIDEO = 40,
    IPMP = 41,
    AVC_TIMING_AND_HRD = 42,
    MPEG2_AAC_AUDIO = 43,
    FLEX_MUX_TIMING = 44,
    MPEG4_TEXT = 45,
    MPEG4_AUDIO_EXTENSION = 46,
    AUXILIARY_VIDEO_STREAM = 47,
    SVC_EXTENSION = 48,
    MVC_EXTENSION = 49,
    J2K_VIDEO = 50,
    MVC_OPERATION_POINT = 51,
    MPEG2_STEREOSCOPIC_VIDEO_FORMAT = 52,
    STEREOSCOPIC_PROGRAM_INFO = 53,
    STEREOSCOPIC_VIDEO_INFO = 54,
}
export enum ISDBDescriptorType {
    HIERARCHICAL_TRANSMISSION = 192,
    DIGITAL_COPY_CONTROL = 193,
    NETWORK_IDENTIFICATION = 194,
    PARTIAL_TS_TIME = 195,
    AUDIO_COMPONENT = 196,
    HYPERLINK = 197,
    TARGET_REGION = 198,
    DATA_CONTENT = 199,
    VIDEO_DECODE_CONTROL = 200,
    DOWNLOAD_CONTENT = 201,
    CA_EMM_TS = 202,
    CA_CONTRACT_INFORMATION = 203,
    CA_SERVICE = 204,
    TS_INFORMATION = 205,
    EXTENDED_BROADCASTER = 206,
    LOGO_TRANSMISSION = 207,
    BASIC_LOCAL_EVENT = 208,
    REFERENCE = 209,
    NODE_RELATION = 210,
    SHORT_NODE_INFORMATION = 211,
    STC_REFERENCE = 212,
    SERIES = 213,
    EVENT_GROUP = 214,
    SI_PARAMETER = 215,
    BROADCASTER_NAME = 216,
    COMPONENT_GROUP = 217,
    SI_PRIME_TS = 218,
    BOARD_INFORMATION = 219,
    LDT_LINKAGE = 220,
    CONNECTED_TRANSMISSION = 221,
    CONTENT_AVAILABILITY = 222,
    SERVICE_GROUP = 224,
}
export enum Iso639AudioType {
    UNDEFINED = 0,
    CLEAN_EFFECTS = 1,
    HEARING_IMPAIRED = 2,
    VISUAL_IMPAIRED_COMMENTARY = 3,
}
export enum MiscDescriptorType {
    AC3_AUDIO_STREAM = 129,
    DTG_LOGICAL_CHANNEL = 131,
}
export enum ModulationType {
    QPSK = 0,
    QAM_16 = 1,
    QAM_32 = 2,
    QAM_64 = 3,
    QAM_128 = 4,
    QAM_256 = 5,
    QAM_AUTO = 6,
    VSB_8 = 7,
    VSB_16 = 8,
    PSK_8 = 9,
    APSK_16 = 10,
    APSK_32 = 11,
    DQPSK = 12,
    QAM_4_NR_ = 13,
    NONE = 14,
}
export enum RunningStatus {
    UNDEFINED = 0,
    NOT_RUNNING = 1,
    STARTS_IN_FEW_SECONDS = 2,
    PAUSING = 3,
    RUNNING = 4,
    OFF_AIR = 5,
}
export enum SatellitePolarizationType {
    LINEAR_HORIZONTAL = 0,
    LINEAR_VERTICAL = 1,
    CIRCULAR_LEFT = 2,
    CIRCULAR_RIGHT = 3,
}
export enum SatelliteRolloff {
    Gjs_35 = 0,
    Gjs_20 = 1,
    Gjs_25 = 2,
    RESERVED = 3,
    AUTO = 4,
}
export enum ScteStreamType {
    SUBTITLING = 130,
    ISOCH_DATA = 131,
    DST_NRT = 149,
    DSMCC_DCB = 176,
    SIGNALING = 192,
    SYNC_DATA = 194,
    ASYNC_DATA = 195,
}
export enum SectionATSCTableID {
    MASTER_GUIDE = 199,
    TERRESTRIAL_VIRTUAL_CHANNEL = 200,
    CABLE_VIRTUAL_CHANNEL = 201,
    RATING_REGION = 202,
    EVENT_INFORMATION = 203,
    CHANNEL_OR_EVENT_EXTENDED_TEXT = 204,
    SYSTEM_TIME = 205,
    DATA_EVENT = 206,
    DATA_SERVICE = 207,
    NETWORK_RESOURCE = 209,
    LONG_TERM_SERVICE = 210,
    DIRECTED_CHANNEL_CHANGE = 211,
    DIRECTED_CHANNEL_CHANGE_SECTION_CODE = 212,
    AGGREGATE_EVENT_INFORMATION = 214,
    AGGREGATE_EXTENDED_TEXT = 215,
    AGGREGATE_DATA_EVENT = 217,
    SATELLITE_VIRTUAL_CHANNEL = 218,
}
export enum SectionDVBTableID {
    NETWORK_INFORMATION_ACTUAL_NETWORK = 64,
    NETWORK_INFORMATION_OTHER_NETWORK = 65,
    SERVICE_DESCRIPTION_ACTUAL_TS = 66,
    SERVICE_DESCRIPTION_OTHER_TS = 70,
    BOUQUET_ASSOCIATION = 74,
    EVENT_INFORMATION_ACTUAL_TS_PRESENT = 78,
    EVENT_INFORMATION_OTHER_TS_PRESENT = 79,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1 = 80,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N = 95,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_1 = 96,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_N = 111,
    TIME_DATE = 112,
    RUNNING_STATUS = 113,
    STUFFING = 114,
    TIME_OFFSET = 115,
    APPLICATION_INFORMATION_TABLE = 116,
    CONTAINER = 117,
    RELATED_CONTENT = 118,
    CONTENT_IDENTIFIER = 119,
    MPE_FEC = 120,
    RESOLUTION_NOTIFICATION = 121,
    MPE_IFEC = 122,
    DISCONTINUITY_INFORMATION = 126,
    SELECTION_INFORMATION = 127,
    CA_MESSAGE_ECM_0 = 128,
    CA_MESSAGE_ECM_1 = 129,
    CA_MESSAGE_SYSTEM_PRIVATE_1 = 130,
    CA_MESSAGE_SYSTEM_PRIVATE_N = 143,
    SCT = 160,
    FCT = 161,
    TCT = 162,
    SPT = 163,
    CMT = 164,
    TBTP = 165,
    PCR_PACKET_PAYLOAD = 166,
    TRANSMISSION_MODE_SUPPORT_PAYLOAD = 170,
    TIM = 176,
    LL_FEC_PARITY_DATA_TABLE = 177,
}
export enum SectionSCTETableID {
    EAS = 216,
    EBIF = 224,
    RESERVED = 225,
    EISS = 226,
    DII = 227,
    DDB = 228,
    SPLICE = 252,
}
export enum SectionTableID {
    PROGRAM_ASSOCIATION = 0,
    CONDITIONAL_ACCESS = 1,
    TS_PROGRAM_MAP = 2,
    TS_DESCRIPTION = 3,
    Gjs_14496_SCENE_DESCRIPTION = 4,
    Gjs_14496_OBJET_DESCRIPTOR = 5,
    METADATA = 6,
    IPMP_CONTROL_INFORMATION = 7,
    DSM_CC_MULTIPROTO_ENCAPSULATED_DATA = 58,
    DSM_CC_U_N_MESSAGES = 59,
    DSM_CC_DOWNLOAD_DATA_MESSAGES = 60,
    DSM_CC_STREAM_DESCRIPTORS = 61,
    DSM_CC_PRIVATE_DATA = 62,
    DSM_CC_ADDRESSABLE_SECTIONS = 63,
    UNSET = 255,
}
export enum SectionType {
    UNKNOWN = 0,
    PAT = 1,
    PMT = 2,
    CAT = 3,
    TSDT = 4,
    EIT = 5,
    NIT = 6,
    BAT = 7,
    SDT = 8,
    TDT = 9,
    TOT = 10,
    ATSC_TVCT = 11,
    ATSC_CVCT = 12,
    ATSC_MGT = 13,
    ATSC_ETT = 14,
    ATSC_EIT = 15,
    ATSC_STT = 16,
}
export enum StreamType {
    RESERVED_00 = 0,
    VIDEO_MPEG1 = 1,
    VIDEO_MPEG2 = 2,
    AUDIO_MPEG1 = 3,
    AUDIO_MPEG2 = 4,
    PRIVATE_SECTIONS = 5,
    PRIVATE_PES_PACKETS = 6,
    MHEG = 7,
    DSM_CC = 8,
    H_222_1 = 9,
    DSMCC_A = 10,
    DSMCC_B = 11,
    DSMCC_C = 12,
    DSMCC_D = 13,
    AUXILIARY = 14,
    AUDIO_AAC_ADTS = 15,
    VIDEO_MPEG4 = 16,
    AUDIO_AAC_LATM = 17,
    SL_FLEXMUX_PES_PACKETS = 18,
    SL_FLEXMUX_SECTIONS = 19,
    SYNCHRONIZED_DOWNLOAD = 20,
    METADATA_PES_PACKETS = 21,
    METADATA_SECTIONS = 22,
    METADATA_DATA_CAROUSEL = 23,
    METADATA_OBJECT_CAROUSEL = 24,
    METADATA_SYNCHRONIZED_DOWNLOAD = 25,
    MPEG2_IPMP = 26,
    VIDEO_H264 = 27,
    AUDIO_AAC_CLEAN = 28,
    MPEG4_TIMED_TEXT = 29,
    VIDEO_RVC = 30,
    VIDEO_H264_SVC_SUB_BITSTREAM = 31,
    VIDEO_H264_MVC_SUB_BITSTREAM = 32,
    VIDEO_JP2K = 33,
    VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW = 34,
    VIDEO_H264_STEREO_ADDITIONAL_VIEW = 35,
    VIDEO_HEVC = 36,
    IPMP_STREAM = 127,
}
export enum TerrestrialGuardInterval {
    Gjs_1_32 = 0,
    Gjs_1_16 = 1,
    Gjs_1_8 = 2,
    Gjs_1_4 = 3,
    AUTO = 4,
    Gjs_1_128 = 5,
    Gjs_19_128 = 6,
    Gjs_19_256 = 7,
    PN420 = 8,
    PN595 = 9,
    PN945 = 10,
}
export enum TerrestrialHierarchy {
    NONE = 0,
    Gjs_1 = 1,
    Gjs_2 = 2,
    Gjs_4 = 3,
    AUTO = 4,
}
export enum TerrestrialTransmissionMode {
    Gjs_2K = 0,
    Gjs_8K = 1,
    AUTO = 2,
    Gjs_4K = 3,
    Gjs_1K = 4,
    Gjs_16K = 5,
    Gjs_32K = 6,
    C1 = 7,
    C3780 = 8,
}
export class AtscEIT  {constructor(config?: properties);
source_id: number;
protocol_version: number;
events: AtscEITEvent[];
}
export class AtscEITEvent  {constructor(config?: properties);
event_id: number;
start_time: number;
etm_location: number;
length_in_seconds: number;
titles: AtscMultString[];
descriptors: Descriptor[];
}
export class AtscETT  {constructor(config?: properties);
ett_table_id_extension: number;
protocol_version: number;
etm_id: number;
messages: AtscMultString[];
}
export class AtscMGT  {constructor(config?: properties);
protocol_version: number;
tables_defined: number;
tables: AtscMGTTable[];
descriptors: Descriptor[];
}
export class AtscMGTTable  {constructor(config?: properties);
table_type: number;
pid: number;
version_number: number;
number_bytes: number;
descriptors: Descriptor[];
}
export class AtscMultString  {constructor(config?: properties);
iso_639_langcode: number[];
segments: AtscStringSegment[];
}
export class AtscSTT  {constructor(config?: properties);
protocol_version: number;
system_time: number;
gps_utc_offset: number;
ds_status: boolean;
ds_dayofmonth: number;
ds_hour: number;
descriptors: Descriptor[];
utc_datetime: Gst.DateTime;
get_datetime_utc(): Gst.DateTime;
}
export class AtscStringSegment  {constructor(config?: properties);
compression_type: number;
mode: number;
compressed_data_size: number;
compressed_data: number;
cached_string: string;
get_string(): string;
}
export class AtscVCT  {constructor(config?: properties);
transport_stream_id: number;
protocol_version: number;
sources: AtscVCTSource[];
descriptors: Descriptor[];
}
export class AtscVCTSource  {constructor(config?: properties);
short_name: string;
major_channel_number: number;
minor_channel_number: number;
modulation_mode: number;
carrier_frequency: number;
channel_TSID: number;
program_number: number;
ETM_location: number;
access_controlled: boolean;
hidden: boolean;
path_select: boolean;
out_of_band: boolean;
hide_guide: boolean;
service_type: number;
source_id: number;
descriptors: Descriptor[];
}
export class BAT  {constructor(config?: properties);
descriptors: Descriptor[];
streams: BATStream[];
}
export class BATStream  {constructor(config?: properties);
transport_stream_id: number;
original_network_id: number;
descriptors: object[];
}
export class CableDeliverySystemDescriptor  {constructor(config?: properties);
frequency: number;
outer_fec: CableOuterFECScheme;
modulation: ModulationType;
symbol_rate: number;
fec_inner: DVBCodeRate;
free(): void;
}
export class ComponentDescriptor  {constructor(config?: properties);
stream_content: number;
component_type: number;
component_tag: number;
language_code: string;
text: string;
}
export class Content  {constructor(config?: properties);
content_nibble_1: ContentNibbleHi;
content_nibble_2: number;
user_byte: number;
}
export class DVBLinkageDescriptor  {constructor(config?: properties);
transport_stream_id: number;
original_network_id: number;
service_id: number;
linkage_type: DVBLinkageType;
readonly linkage_data: object;
private_data_length: number;
private_data_bytes: number;
free(): void;
get_event(): DVBLinkageEvent;
get_extended_event(): DVBLinkageExtendedEvent[];
get_mobile_hand_over(): DVBLinkageMobileHandOver;
}
export class DVBLinkageEvent  {constructor(config?: properties);
target_event_id: number;
target_listed: boolean;
event_simulcast: boolean;
}
export class DVBLinkageExtendedEvent  {constructor(config?: properties);
target_event_id: number;
target_listed: boolean;
event_simulcast: boolean;
link_type: number;
target_id_type: number;
original_network_id_flag: boolean;
service_id_flag: boolean;
user_defined_id: number;
target_transport_stream_id: number;
target_original_network_id: number;
target_service_id: number;
}
export class DVBLinkageMobileHandOver  {constructor(config?: properties);
hand_over_type: DVBLinkageHandOverType;
origin_type: boolean;
network_id: number;
initial_service_id: number;
}
export class DVBParentalRatingItem  {constructor(config?: properties);
country_code: string;
rating: number;
}
export class DVBServiceListItem  {constructor(config?: properties);
service_id: number;
type: DVBServiceType;
}
export class DataBroadcastDescriptor  {constructor(config?: properties);
data_broadcast_id: number;
component_tag: number;
length: number;
selector_bytes: number;
language_code: string;
text: string;
free(): void;
}
export class Descriptor  {constructor(config?: properties);
tag: number;
tag_extension: number;
length: number;
data: number;
readonly _gst_reserved: object[];
free(): void;
parse_ca(): [boolean, number,number,number[] | null,number | null];
parse_cable_delivery_system(): [boolean, CableDeliverySystemDescriptor];
parse_dvb_bouquet_name(): [boolean, string | null];
parse_dvb_ca_identifier(): [boolean, number[]];
parse_dvb_component(): [boolean, ComponentDescriptor];
parse_dvb_content(): [boolean, Content[]];
parse_dvb_data_broadcast(): [boolean, DataBroadcastDescriptor];
parse_dvb_data_broadcast_id(): [boolean, number,number[],number];
parse_dvb_extended_event(): [boolean, ExtendedEventDescriptor];
parse_dvb_frequency_list(): [boolean, boolean,number[]];
parse_dvb_linkage(): [boolean, DVBLinkageDescriptor];
parse_dvb_multilingual_bouquet_name(): [boolean, DvbMultilingualBouquetNameItem[]];
parse_dvb_multilingual_component(): [boolean, number,DvbMultilingualComponentItem[]];
parse_dvb_multilingual_network_name(): [boolean, DvbMultilingualNetworkNameItem[]];
parse_dvb_multilingual_service_name(): [boolean, DvbMultilingualServiceNameItem[]];
parse_dvb_network_name(): [boolean, string];
parse_dvb_parental_rating(): [boolean, DVBParentalRatingItem[]];
parse_dvb_private_data_specifier(): [boolean, number,number[] | null,number | null];
parse_dvb_scrambling(): [boolean, DVBScramblingModeType];
parse_dvb_service(): [boolean, DVBServiceType | null,string | null,string | null];
parse_dvb_service_list(): [boolean, DVBServiceListItem[]];
parse_dvb_short_event(): [boolean, string | null,string | null,string | null];
parse_dvb_stream_identifier(): [boolean, number];
parse_dvb_stuffing(): [boolean, number];
parse_dvb_subtitling_idx(idx: number): [boolean, string,number | null,number | null,number | null];
parse_dvb_subtitling_nb(): number;
parse_dvb_t2_delivery_system(): [boolean, T2DeliverySystemDescriptor];
parse_dvb_teletext_idx(idx: number): [boolean, string | null,DVBTeletextType | null,number | null,number | null];
parse_dvb_teletext_nb(): number;
parse_iso_639_language(): [boolean, ISO639LanguageDescriptor];
parse_iso_639_language_idx(idx: number): [boolean, string,Iso639AudioType | null];
parse_iso_639_language_nb(): number;
parse_logical_channel(): [boolean, LogicalChannelDescriptor];
parse_satellite_delivery_system(): [boolean, SatelliteDeliverySystemDescriptor];
parse_terrestrial_delivery_system(): [boolean, TerrestrialDeliverySystemDescriptor];
static from_custom(tag: number, data: number[], length: number): Descriptor;
static from_custom_with_extension(tag: number, tag_extension: number, data: number[], length: number): Descriptor;
static from_dvb_network_name(name: string): Descriptor;
static from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor;
static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
static from_iso_639_language(language: string): Descriptor;
static from_registration(format_identifier: string, additional_info: number[] | null, additional_info_length: number): Descriptor;
}
export class DvbMultilingualBouquetNameItem  {constructor(config?: properties);
language_code: string;
bouquet_name: string;
}
export class DvbMultilingualComponentItem  {constructor(config?: properties);
language_code: string;
description: string;
}
export class DvbMultilingualNetworkNameItem  {constructor(config?: properties);
language_code: string;
network_name: string;
}
export class DvbMultilingualServiceNameItem  {constructor(config?: properties);
language_code: string;
provider_name: string;
service_name: string;
}
export class EIT  {constructor(config?: properties);
transport_stream_id: number;
original_network_id: number;
segment_last_section_number: number;
last_table_id: number;
actual_stream: boolean;
present_following: boolean;
events: EITEvent[];
}
export class EITEvent  {constructor(config?: properties);
event_id: number;
start_time: Gst.DateTime;
duration: number;
running_status: RunningStatus;
free_CA_mode: boolean;
descriptors: Descriptor[];
}
export class ExtendedEventDescriptor  {constructor(config?: properties);
descriptor_number: number;
last_descriptor_number: number;
language_code: string;
items: ExtendedEventItem[];
text: string;
free(): void;
}
export class ExtendedEventItem  {constructor(config?: properties);
item_description: string;
item: string;
}
export class ISO639LanguageDescriptor  {constructor(config?: properties);
nb_language: number;
language: string[];
audio_type: Iso639AudioType[];
descriptor_free(): void;
}
export class LogicalChannel  {constructor(config?: properties);
service_id: number;
visible_service: boolean;
logical_channel_number: number;
}
export class LogicalChannelDescriptor  {constructor(config?: properties);
nb_channels: number;
channels: LogicalChannel[];
}
export class NIT  {constructor(config?: properties);
}
export class NITStream  {constructor(config?: properties);
}
export class PMT  {constructor(config?: properties);
}
export class PMTStream  {constructor(config?: properties);
}
export class PatProgram  {constructor(config?: properties);
}
export class SDT  {constructor(config?: properties);
}
export class SDTService  {constructor(config?: properties);
}
export class SatelliteDeliverySystemDescriptor  {constructor(config?: properties);
frequency: number;
orbital_position: number;
west_east: boolean;
polarization: SatellitePolarizationType;
roll_off: SatelliteRolloff;
modulation_system: boolean;
modulation_type: ModulationType;
symbol_rate: number;
fec_inner: DVBCodeRate;
}
export class Section  {constructor(config?: properties);
get_atsc_cvct(): AtscVCT;
get_atsc_eit(): AtscEIT;
get_atsc_ett(): AtscETT;
get_atsc_mgt(): AtscMGT;
get_atsc_stt(): AtscSTT;
get_atsc_tvct(): AtscVCT;
get_bat(): BAT;
get_cat(): Descriptor[];
get_data(): GLib.Bytes;
get_eit(): EIT;
get_nit(): NIT;
get_pat(): PatProgram[];
get_pmt(): PMT;
get_sdt(): SDT;
get_tdt(): Gst.DateTime;
get_tot(): TOT;
get_tsdt(): Descriptor[];
packetize(): [number, number];
send_event(element: Gst.Element): boolean;
static from_nit(nit: NIT): Section;
static from_pat(programs: PatProgram[], ts_id: number): Section;
static from_pmt(pmt: PMT, pid: number): Section;
static from_sdt(sdt: SDT): Section;
}
export class T2DeliverySystemCell  {constructor(config?: properties);
cell_id: number;
centre_frequencies: number[];
sub_cells: T2DeliverySystemCellExtension[];
}
export class T2DeliverySystemCellExtension  {constructor(config?: properties);
cell_id_extension: number;
transposer_frequency: number;
}
export class T2DeliverySystemDescriptor  {constructor(config?: properties);
plp_id: number;
t2_system_id: number;
siso_miso: number;
bandwidth: number;
guard_interval: TerrestrialGuardInterval;
transmission_mode: TerrestrialTransmissionMode;
other_frequency: boolean;
tfs: boolean;
cells: T2DeliverySystemCell[];
free(): void;
}
export class TOT  {constructor(config?: properties);
utc_time: Gst.DateTime;
descriptors: Descriptor[];
}
export class TerrestrialDeliverySystemDescriptor  {constructor(config?: properties);
frequency: number;
bandwidth: number;
priority: boolean;
time_slicing: boolean;
mpe_fec: boolean;
constellation: ModulationType;
hierarchy: TerrestrialHierarchy;
code_rate_hp: DVBCodeRate;
code_rate_lp: DVBCodeRate;
guard_interval: TerrestrialGuardInterval;
transmission_mode: TerrestrialTransmissionMode;
other_frequency: boolean;
}