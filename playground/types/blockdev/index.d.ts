
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as BlockDev from "blockdev";
/**
 * blockdev.d.ts
 */
type properties = { [key: string]: any };
export type UtilsLogFunc = (level: number, msg: string) => void;
export type UtilsProgExtract = (line: string) => boolean;
export type UtilsProgFunc = (task_id: number, status: UtilsProgStatus, completion: number, msg: string | null) => void;
export const BTRFS_MAIN_VOLUME_ID: number;
export const BTRFS_MIN_MEMBER_SIZE: number;
export const CRYPTO_LUKS_METADATA_SIZE: number;
export const LVM_DEFAULT_CHUNK_SIZE: number;
export const LVM_DEFAULT_PE_SIZE: number;
export const LVM_DEFAULT_PE_START: number;
export const LVM_MAX_LV_SIZE: number;
export const LVM_MAX_PE_SIZE: number;
export const LVM_MAX_THPOOL_CHUNK_SIZE: number;
export const LVM_MAX_THPOOL_MD_SIZE: number;
export const LVM_MIN_CACHE_MD_SIZE: number;
export const LVM_MIN_PE_SIZE: number;
export const LVM_MIN_THPOOL_CHUNK_SIZE: number;
export const LVM_MIN_THPOOL_MD_SIZE: number;
export const MD_CHUNK_SIZE: number;
export const MD_SUPERBLOCK_SIZE: number;
/**
 * 
 */
export function btrfs_add_device(mountpoint: string, device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_change_label(mountpoint: string, label: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_check(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_create_snapshot(source: string, dest: string, ro: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_create_subvolume(mountpoint: string, name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_create_volume(devices: string[], label: string | null, data_level: string | null, md_level: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_delete_subvolume(mountpoint: string, name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_error_quark(): GLib.Quark;
/**
 * 
 */
export function btrfs_filesystem_info(device: string): BtrfsFilesystemInfo;
/**
 * 
 */
export function btrfs_get_default_subvolume_id(mountpoint: string): number;
/**
 * 
 */
export function btrfs_is_tech_avail(tech: BtrfsTech, mode: number): boolean;
/**
 * 
 */
export function btrfs_list_devices(device: string): BtrfsDeviceInfo[];
/**
 * 
 */
export function btrfs_list_subvolumes(mountpoint: string, snapshots_only: boolean): BtrfsSubvolumeInfo[];
/**
 * 
 */
export function btrfs_mkfs(devices: string[], label: string | null, data_level: string | null, md_level: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_remove_device(mountpoint: string, device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_repair(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_resize(mountpoint: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function btrfs_set_default_subvolume(mountpoint: string, subvol_id: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function crypto_device_is_luks(device: string): boolean;
/**
 * Determines whether a block device seems to be encrypted.
 * TCRYPT volumes are not easily identifiable, because they have no
 * cleartext header, but are completely encrypted. This function is
 * used to determine whether a block device is a candidate for being
 * TCRYPT encrypted.
 * To achieve this, we calculate the chi square value of the first
 * 512 Bytes and treat devices with a chi square value between 136
 * and 426 as candidates for being encrypted.
 * For the reasoning, see: https://tails.boum.org/blueprint/veracrypt/
 */
export function crypto_device_seems_encrypted(device: string): boolean;
/**
 * 
 */
export function crypto_error_quark(): GLib.Quark;
/**
 * 
 */
export function crypto_escrow_device(device: string, passphrase: string, cert_data: number[], directory: string, backup_passphrase: string | null): boolean;
/**
 * 
 */
export function crypto_generate_backup_passphrase(): string;
/**
 * 
 */
export function crypto_integrity_info(device: string): CryptoIntegrityInfo;
/**
 * 
 */
export function crypto_is_tech_avail(tech: CryptoTech, mode: number): boolean;
/**
 * 
 */
export function crypto_luks_add_key(device: string, pass: string | null, key_file: string | null, npass: string | null, nkey_file: string | null): boolean;
/**
 * 
 */
export function crypto_luks_add_key_blob(device: string, pass_data: number[], data_len: number, npass_data: number[], ndata_len: number): boolean;
/**
 * 
 */
export function crypto_luks_change_key(device: string, pass: string, npass: string): boolean;
/**
 * 
 */
export function crypto_luks_change_key_blob(device: string, pass_data: number[], data_len: number, npass_data: number[], ndata_len: number): boolean;
/**
 * 
 */
export function crypto_luks_close(luks_device: string): boolean;
/**
 * Formats the given @device as LUKS according to the other parameters gi
 * ven. If
 * @min_entropy is specified (greater than 0), the function waits for eno
 * ugh
 * entropy to be available in the random data pool (WHICH MAY POTENTIALLY
 *  TAKE
 * FOREVER).
 */
export function crypto_luks_format(device: string, cipher: string | null, key_size: number, passphrase: string | null, key_file: string | null, min_entropy: number): boolean;
/**
 * Formats the given @device as LUKS according to the other parameters gi
 * ven. If
 * @min_entropy is specified (greater than 0), the function waits for eno
 * ugh
 * entropy to be available in the random data pool (WHICH MAY POTENTIALLY
 *  TAKE
 * FOREVER).
 */
export function crypto_luks_format_blob(device: string, cipher: string | null, key_size: number, pass_data: number[], data_len: number, min_entropy: number): boolean;
/**
 * Formats the given @device as LUKS according to the other parameters gi
 * ven. If
 * @min_entropy is specified (greater than 0), the function waits for eno
 * ugh
 * entropy to be available in the random data pool (WHICH MAY POTENTIALLY
 *  TAKE
 * FOREVER).
 * Either @passhphrase or @key_file has to be != %NULL.
 * Using this function with @luks_version set to %BD_CRYPTO_LUKS_VERSION_
 * LUKS1 and
 * @extra to %NULL is the same as calling %bd_crypto_luks_format.
 */
export function crypto_luks_format_luks2(device: string, cipher: string | null, key_size: number, passphrase: string | null, key_file: string | null, min_entropy: number, luks_version: CryptoLUKSVersion, extra: CryptoLUKSExtra | null): boolean;
/**
 * Formats the given @device as LUKS according to the other parameters gi
 * ven. If
 * @min_entropy is specified (greater than 0), the function waits for eno
 * ugh
 * entropy to be available in the random data pool (WHICH MAY POTENTIALLY
 *  TAKE
 * FOREVER).
 * Using this function with @luks_version set to %BD_CRYPTO_LUKS_VERSION_
 * LUKS1 and
 * @extra to %NULL is the same as calling %bd_crypto_luks_format_blob.
 */
export function crypto_luks_format_luks2_blob(device: string, cipher: string | null, key_size: number, pass_data: number[], data_len: number, min_entropy: number, luks_version: CryptoLUKSVersion, extra: CryptoLUKSExtra | null): boolean;
/**
 * 
 */
export function crypto_luks_get_metadata_size(device: string): number;
/**
 * 
 */
export function crypto_luks_header_backup(device: string, backup_file: string): boolean;
/**
 * 
 */
export function crypto_luks_header_restore(device: string, backup_file: string): boolean;
/**
 * 
 */
export function crypto_luks_info(luks_device: string): CryptoLUKSInfo;
/**
 * Note: This can destroy last remaining keyslot without confirmation mak
 * ing
 *       the LUKS device permanently inaccessible.
 */
export function crypto_luks_kill_slot(device: string, slot: number): boolean;
/**
 * 
 */
export function crypto_luks_open(device: string, name: string, passphrase: string | null, key_file: string | null, read_only: boolean): boolean;
/**
 * 
 */
export function crypto_luks_open_blob(device: string, name: string, pass_data: number[], data_len: number, read_only: boolean): boolean;
/**
 * 
 */
export function crypto_luks_remove_key(device: string, pass: string | null, key_file: string | null): boolean;
/**
 * 
 */
export function crypto_luks_remove_key_blob(device: string, pass_data: number[], data_len: number): boolean;
/**
 * You need to specify passphrase when resizing LUKS 2 devices that don't
 *  have
 * verified key loaded in kernel. If you don't specify a passphrase, resi
 * ze
 * will fail with %BD_CRYPTO_ERROR_RESIZE_PERM. Use %bd_crypto_luks_resiz
 * e_luks2
 * or %bd_crypto_luks_resize_luks2_blob for these devices.
 */
export function crypto_luks_resize(luks_device: string, size: number): boolean;
/**
 * 
 */
export function crypto_luks_resize_luks2(luks_device: string, size: number, passphrase: string | null, key_file: string | null): boolean;
/**
 * 
 */
export function crypto_luks_resize_luks2_blob(luks_device: string, size: number, pass_data: number[], data_len: number): boolean;
/**
 * 
 */
export function crypto_luks_resume(luks_device: string, passphrase: string | null, key_file: string | null): boolean;
/**
 * 
 */
export function crypto_luks_resume_blob(luks_device: string, pass_data: number[], data_len: number): boolean;
/**
 * 
 */
export function crypto_luks_status(luks_device: string): string;
/**
 * 
 */
export function crypto_luks_suspend(luks_device: string): boolean;
/**
 * 
 */
export function crypto_luks_uuid(device: string): string;
/**
 * 
 */
export function crypto_tc_close(tc_device: string): boolean;
/**
 * 
 */
export function crypto_tc_open(device: string, name: string, pass_data: number[], data_len: number, read_only: boolean): boolean;
/**
 * 
 */
export function crypto_tc_open_full(device: string, name: string, pass_data: number[], data_len: number, keyfiles: string[] | null, hidden: boolean, system: boolean, veracrypt: boolean, veracrypt_pim: number, read_only: boolean): boolean;
/**
 * 
 */
export function dm_activate_raid_set(name: string): boolean;
/**
 * 
 */
export function dm_create_linear(map_name: string, device: string, length: number, uuid: string | null): boolean;
/**
 * 
 */
export function dm_deactivate_raid_set(name: string): boolean;
/**
 * 
 */
export function dm_error_quark(): GLib.Quark;
/**
 * 
 */
export function dm_get_member_raid_sets(name: string | null, uuid: string | null, major: number, minor: number): string[];
/**
 * 
 */
export function dm_get_raid_set_type(name: string): string;
/**
 * 
 */
export function dm_get_subsystem_from_name(device_name: string): string;
/**
 * 
 */
export function dm_is_tech_avail(tech: DMTech, mode: number): boolean;
/**
 * 
 */
export function dm_map_exists(map_name: string, live_only: boolean, active_only: boolean): boolean;
/**
 * 
 */
export function dm_name_from_node(dm_node: string): string;
/**
 * 
 */
export function dm_node_from_name(map_name: string): string;
/**
 * 
 */
export function dm_remove(map_name: string): boolean;
/**
 * Checks the state of the library and if it is uninitialized or not all 
 * the
 * @require_plugins plugins are available, tries to (re)initialize it. Ot
 * herwise
 * just returns early. The difference between:
 * |[<!-- language="C" -->
 * if (!bd_is_initialized())
 *     bd_init(None, None, &error);
 * ]|
 * and this function is that this function does the check and init in an 
 * atomic
 * way (holding the lock preventing other threads from doing changes in
 * between).
 */
export function ensure_init(require_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): boolean;
/**
 * Searches for the required utility to check the given filesystem and re
 * turns whether
 * it is installed.
 * Unknown filesystems or filesystems which do not support checking resul
 * t in errors.
 */
export function fs_can_check(type: string): [boolean, string];
/**
 * Searches for the required utility to repair the given filesystem and r
 * eturns whether
 * it is installed.
 * Unknown filesystems or filesystems which do not support reparing resul
 * t in errors.
 */
export function fs_can_repair(type: string): [boolean, string];
/**
 * Searches for the required utility to resize the given filesystem and r
 * eturns whether
 * it is installed. The mode flags indicate if growing and/or shrinking r
 * esize is available if
 * mounted/unmounted.
 * Unknown filesystems or filesystems which do not support resizing resul
 * t in errors.
 */
export function fs_can_resize(type: string): [boolean, FsResizeFlags,string];
/**
 * Searches for the required utility to set the label of the given filesy
 * stem and returns whether
 * it is installed.
 * Unknown filesystems or filesystems which do not support setting the la
 * bel result in errors.
 */
export function fs_can_set_label(type: string): [boolean, string];
/**
 * Check filesystem on @device. This calls other fs check functions from 
 * this
 * plugin based on detected filesystem (e.g. bd_fs_xfs_check for XFS). Th
 * is
 * function will return an error for unknown/unsupported filesystems.
 */
export function fs_check(device: string): boolean;
/**
 * Clean all signatures from @device.
 * Difference between this and bd_fs_wipe() is that this function doesn't
 * return error if @device is already empty. This will also always remove
 * all signatures from @device, not only the first one.
 */
export function fs_clean(device: string): boolean;
/**
 * 
 */
export function fs_error_quark(): GLib.Quark;
/**
 * 
 */
export function fs_ext2_check(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext2_get_info(device: string): FSExt2Info;
/**
 * 
 */
export function fs_ext2_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext2_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext2_resize(device: string, new_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext2_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_ext2_wipe(device: string): boolean;
/**
 * 
 */
export function fs_ext3_check(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext3_get_info(device: string): FSExt3Info;
/**
 * 
 */
export function fs_ext3_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext3_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext3_resize(device: string, new_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext3_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_ext3_wipe(device: string): boolean;
/**
 * 
 */
export function fs_ext4_check(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext4_get_info(device: string): FSExt4Info;
/**
 * 
 */
export function fs_ext4_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext4_repair(device: string, unsafe: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext4_resize(device: string, new_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ext4_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_ext4_wipe(device: string): boolean;
/**
 * Get first signature on @device as a string.
 */
export function fs_get_fstype(device: string): string;
/**
 * Get mountpoint for @device. If @device is mounted multiple times only
 * one mountpoint will be returned.
 */
export function fs_get_mountpoint(device: string): string;
/**
 * 
 */
export function fs_is_tech_avail(tech: FSTech, mode: number): boolean;
/**
 * 
 */
export function fs_mount(device: string | null, mountpoint: string | null, fstype: string | null, options: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ntfs_check(device: string): boolean;
/**
 * 
 */
export function fs_ntfs_get_info(device: string): FSNtfsInfo;
/**
 * 
 */
export function fs_ntfs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_ntfs_repair(device: string): boolean;
/**
 * 
 */
export function fs_ntfs_resize(device: string, new_size: number): boolean;
/**
 * 
 */
export function fs_ntfs_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_ntfs_wipe(device: string): boolean;
/**
 * Repair filesystem on @device. This calls other fs repair functions fro
 * m this
 * plugin based on detected filesystem (e.g. bd_fs_xfs_repair for XFS). T
 * his
 * function will return an error for unknown/unsupported filesystems.
 */
export function fs_repair(device: string): boolean;
/**
 * 
 */
export function fs_resize(device: string, new_size: number): boolean;
/**
 * Set label for filesystem on @device. This calls other fs label functio
 * ns from this
 * plugin based on detected filesystem (e.g. bd_fs_xfs_set_label for XFS)
 * . This
 * function will return an error for unknown/unsupported filesystems.
 */
export function fs_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_unmount(spec: string, lazy: boolean, force: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_vfat_check(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_vfat_get_info(device: string): FSVfatInfo;
/**
 * 
 */
export function fs_vfat_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_vfat_repair(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_vfat_resize(device: string, new_size: number): boolean;
/**
 * 
 */
export function fs_vfat_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_vfat_wipe(device: string): boolean;
/**
 * 
 */
export function fs_wipe(device: string, all: boolean): boolean;
/**
 * 
 */
export function fs_xfs_check(device: string): boolean;
/**
 * 
 */
export function fs_xfs_get_info(device: string): FSXfsInfo;
/**
 * 
 */
export function fs_xfs_mkfs(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_xfs_repair(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_xfs_resize(mpoint: string, new_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function fs_xfs_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function fs_xfs_wipe(device: string): boolean;
/**
 * 
 */
export function get_available_plugin_names(): string[];
/**
 * 
 */
export function get_plugin_name(plugin: Plugin): string;
/**
 * 
 */
export function get_plugin_soname(plugin: Plugin): string;
/**
 * 
 */
export function init(require_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): boolean;
/**
 * 
 */
export function init_error_quark(): GLib.Quark;
/**
 * 
 */
export function is_initialized(): boolean;
/**
 * 
 */
export function is_plugin_available(plugin: Plugin): boolean;
/**
 * 
 */
export function kbd_bcache_attach(c_set_uuid: string, bcache_device: string): boolean;
/**
 * 
 */
export function kbd_bcache_create(backing_device: string, cache_device: string, extra: ExtraArg[] | null): [boolean, string | null];
/**
 * 
 */
export function kbd_bcache_destroy(bcache_device: string): boolean;
/**
 * 
 */
export function kbd_bcache_detach(bcache_device: string): [boolean, string | null];
/**
 * 
 */
export function kbd_bcache_get_backing_device(bcache_device: string): string;
/**
 * 
 */
export function kbd_bcache_get_cache_device(bcache_device: string): string;
/**
 * 
 */
export function kbd_bcache_get_mode(bcache_device: string): KBDBcacheMode;
/**
 * 
 */
export function kbd_bcache_get_mode_from_str(mode_str: string): KBDBcacheMode;
/**
 * 
 */
export function kbd_bcache_get_mode_str(mode: KBDBcacheMode): string;
/**
 * 
 */
export function kbd_bcache_set_mode(bcache_device: string, mode: KBDBcacheMode): boolean;
/**
 * 
 */
export function kbd_bcache_status(bcache_device: string): KBDBcacheStats;
/**
 * 
 */
export function kbd_error_quark(): GLib.Quark;
/**
 * 
 */
export function kbd_is_tech_avail(tech: KBDTech, mode: number): boolean;
/**
 * 
 */
export function kbd_zram_add_device(size: number, nstreams: number): [boolean, string | null];
/**
 * 
 */
export function kbd_zram_create_devices(num_devices: number, sizes: number[], nstreams: number[] | null): boolean;
/**
 * 
 */
export function kbd_zram_destroy_devices(): boolean;
/**
 * 
 */
export function kbd_zram_get_stats(device: string): KBDZramStats;
/**
 * 
 */
export function kbd_zram_remove_device(device: string): boolean;
/**
 * 
 */
export function loop_error_quark(): GLib.Quark;
/**
 * 
 */
export function loop_get_autoclear(loop: string): boolean;
/**
 * 
 */
export function loop_get_backing_file(dev_name: string): string;
/**
 * 
 */
export function loop_get_loop_name(file: string): string;
/**
 * 
 */
export function loop_is_tech_avail(tech: LoopTech, mode: number): boolean;
/**
 * 
 */
export function loop_set_autoclear(loop: string, autoclear: boolean): boolean;
/**
 * 
 */
export function loop_setup(file: string, offset: number, size: number, read_only: boolean, part_scan: boolean): [boolean, string | null];
/**
 * 
 */
export function loop_setup_from_fd(fd: number, offset: number, size: number, read_only: boolean, part_scan: boolean): [boolean, string | null];
/**
 * 
 */
export function loop_teardown(loop: string): boolean;
/**
 * 
 */
export function lvm_cache_attach(vg_name: string, data_lv: string, cache_pool_lv: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_cache_create_cached_lv(vg_name: string, lv_name: string, data_size: number, cache_size: number, md_size: number, mode: LVMCacheMode, flags: LVMCachePoolFlags, slow_pvs: string[], fast_pvs: string[]): boolean;
/**
 * 
 */
export function lvm_cache_create_pool(vg_name: string, pool_name: string, pool_size: number, md_size: number, mode: LVMCacheMode, flags: LVMCachePoolFlags, fast_pvs: string[]): boolean;
/**
 * 
 */
export function lvm_cache_detach(vg_name: string, cached_lv: string, destroy: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_cache_get_default_md_size(cache_size: number): number;
/**
 * 
 */
export function lvm_cache_get_mode_from_str(mode_str: string): LVMCacheMode;
/**
 * 
 */
export function lvm_cache_get_mode_str(mode: LVMCacheMode): string;
/**
 * Converts the @data_lv and @metadata_lv into a new cache pool in the @v
 * g_name
 * VG.
 */
export function lvm_cache_pool_convert(vg_name: string, data_lv: string, metadata_lv: string, name: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_cache_pool_name(vg_name: string, cached_lv: string): string;
/**
 * 
 */
export function lvm_cache_stats(vg_name: string, cached_lv: string): LVMCacheStats;
/**
 * Frees @data.
 */
export function lvm_cache_stats_free(data: LVMLVdata): void;
/**
 * 
 */
export function lvm_data_lv_name(vg_name: string, lv_name: string): string;
/**
 * 
 */
export function lvm_error_quark(): GLib.Quark;
/**
 * 
 */
export function lvm_get_global_config(): string;
/**
 * 
 */
export function lvm_get_lv_physical_size(lv_size: number, pe_size: number): number;
/**
 * 
 */
export function lvm_get_max_lv_size(): number;
/**
 * 
 */
export function lvm_get_supported_pe_sizes(): number[];
/**
 * 
 */
export function lvm_get_thpool_meta_size(size: number, chunk_size: number, n_snapshots: number): number;
/**
 * 
 */
export function lvm_get_thpool_padding(size: number, pe_size: number, included: boolean): number;
/**
 * 
 */
export function lvm_is_supported_pe_size(size: number): boolean;
/**
 * 
 */
export function lvm_is_tech_avail(tech: LVMTech, mode: number): boolean;
/**
 * 
 */
export function lvm_is_valid_thpool_chunk_size(size: number, discard: boolean): boolean;
/**
 * 
 */
export function lvm_is_valid_thpool_md_size(size: number): boolean;
/**
 * 
 */
export function lvm_lvactivate(vg_name: string, lv_name: string, ignore_skip: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvcreate(vg_name: string, lv_name: string, size: number, type: string | null, pv_list: string[] | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvdeactivate(vg_name: string, lv_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvinfo(vg_name: string, lv_name: string): LVMLVdata;
/**
 * 
 */
export function lvm_lvorigin(vg_name: string, lv_name: string): string;
/**
 * 
 */
export function lvm_lvremove(vg_name: string, lv_name: string, force: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvrename(vg_name: string, lv_name: string, new_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvresize(vg_name: string, lv_name: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvs(vg_name: string | null): LVMLVdata[];
/**
 * 
 */
export function lvm_lvsnapshotcreate(vg_name: string, origin_name: string, snapshot_name: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_lvsnapshotmerge(vg_name: string, snapshot_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_metadata_lv_name(vg_name: string, lv_name: string): string;
/**
 * 
 */
export function lvm_pvcreate(device: string, data_alignment: number, metadata_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_pvinfo(device: string): LVMPVdata;
/**
 * 
 */
export function lvm_pvmove(src: string, dest: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_pvremove(device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_pvresize(device: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_pvs(): LVMPVdata[];
/**
 * 
 */
export function lvm_pvscan(device: string | null, update_cache: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_round_size_to_pe(size: number, pe_size: number, roundup: boolean): number;
/**
 * 
 */
export function lvm_set_global_config(new_config: string | null): boolean;
/**
 * 
 */
export function lvm_thlvcreate(vg_name: string, pool_name: string, lv_name: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_thlvpoolname(vg_name: string, lv_name: string): string;
/**
 * Converts the @data_lv and @metadata_lv into a new thin pool in the @vg
 * _name
 * VG.
 */
export function lvm_thpool_convert(vg_name: string, data_lv: string, metadata_lv: string, name: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_thpoolcreate(vg_name: string, lv_name: string, size: number, md_size: number, chunk_size: number, profile: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_thsnapshotcreate(vg_name: string, origin_name: string, snapshot_name: string, pool_name: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgactivate(vg_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgcreate(name: string, pv_list: string[], pe_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgdeactivate(vg_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgextend(vg_name: string, device: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vginfo(vg_name: string): LVMVGdata;
/**
 * 
 */
export function lvm_vgreduce(vg_name: string, device: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgremove(vg_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgrename(old_vg_name: string, new_vg_name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function lvm_vgs(): LVMVGdata[];
/**
 * 
 */
export function md_activate(raid_spec: string | null, members: string[] | null, uuid: string | null, start_degraded: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function md_add(raid_spec: string, device: string, raid_devs: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function md_canonicalize_uuid(uuid: string): string;
/**
 * 
 */
export function md_create(device_name: string, level: string, disks: string[], spares: number, version: string | null, bitmap: boolean, chunk_size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function md_deactivate(raid_spec: string): boolean;
/**
 * 
 */
export function md_denominate(device: string): boolean;
/**
 * 
 */
export function md_destroy(device: string): boolean;
/**
 * 
 */
export function md_detail(raid_spec: string): MDDetailData;
/**
 * 
 */
export function md_error_quark(): GLib.Quark;
/**
 * 
 */
export function md_examine(device: string): MDExamineData;
/**
 * 
 */
export function md_get_bitmap_location(raid_spec: string): string;
/**
 * 
 */
export function md_get_md_uuid(uuid: string): string;
/**
 * 
 */
export function md_get_status(raid_spec: string): string;
/**
 * 
 */
export function md_get_superblock_size(member_size: number, version: string | null): number;
/**
 * 
 */
export function md_is_tech_avail(tech: MDTech, mode: number): boolean;
/**
 * 
 */
export function md_name_from_node(node: string): string;
/**
 * 
 */
export function md_node_from_name(name: string): string;
/**
 * 
 */
export function md_nominate(device: string): boolean;
/**
 * 
 */
export function md_remove(raid_spec: string, device: string, fail: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function md_request_sync_action(raid_spec: string, action: string): boolean;
/**
 * 
 */
export function md_run(raid_spec: string): boolean;
/**
 * 
 */
export function md_set_bitmap_location(raid_spec: string, location: string): boolean;
/**
 * 
 */
export function mpath_error_quark(): GLib.Quark;
/**
 * 
 */
export function mpath_flush_mpaths(): boolean;
/**
 * 
 */
export function mpath_get_mpath_members(): string[];
/**
 * 
 */
export function mpath_is_mpath_member(device: string): boolean;
/**
 * 
 */
export function mpath_is_tech_avail(tech: MpathTech, mode: number): boolean;
/**
 * 
 */
export function mpath_set_friendly_names(enabled: boolean): boolean;
/**
 * 
 */
export function nvdimm_error_quark(): GLib.Quark;
/**
 * 
 */
export function nvdimm_is_tech_avail(tech: NVDIMMTech, mode: number): boolean;
/**
 * 
 */
export function nvdimm_list_namespaces(bus: string | null, region: string | null, idle: boolean, extra: ExtraArg[] | null): NVDIMMNamespaceInfo[];
/**
 * 
 */
export function nvdimm_namepace_get_supported_sector_sizes(mode: NVDIMMNamespaceMode): number[];
/**
 * 
 */
export function nvdimm_namespace_disable(namespace: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function nvdimm_namespace_enable(namespace: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function nvdimm_namespace_get_devname(device: string): string;
/**
 * 
 */
export function nvdimm_namespace_get_mode_from_str(mode_str: string): NVDIMMNamespaceMode;
/**
 * 
 */
export function nvdimm_namespace_get_mode_str(mode: NVDIMMNamespaceMode): string;
/**
 * 
 */
export function nvdimm_namespace_info(namespace: string, extra: ExtraArg[] | null): NVDIMMNamespaceInfo;
/**
 * 
 */
export function nvdimm_namespace_reconfigure(namespace: string, mode: NVDIMMNamespaceMode, force: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function part_create_part(disk: string, type: PartTypeReq, start: number, size: number, align: PartAlign): PartSpec;
/**
 * 
 */
export function part_create_table(disk: string, type: PartTableType, ignore_existing: boolean): boolean;
/**
 * 
 */
export function part_delete_part(disk: string, part: string): boolean;
/**
 * 
 */
export function part_error_quark(): GLib.Quark;
/**
 * 
 */
export function part_get_best_free_region(disk: string, type: PartType, size: number): PartSpec;
/**
 * 
 */
export function part_get_disk_free_regions(disk: string): PartSpec[];
/**
 * 
 */
export function part_get_disk_parts(disk: string): PartSpec[];
/**
 * 
 */
export function part_get_disk_spec(disk: string): PartDiskSpec;
/**
 * 
 */
export function part_get_flag_str(flag: PartFlag): string;
/**
 * 
 */
export function part_get_part_by_pos(disk: string, position: number): PartSpec;
/**
 * Returns (transfer full): partition id type or %NULL in case of error
 * Tech category: %BD_PART_TECH_MODE_QUERY_PART + the tech according to t
 * he partition table type
 */
export function part_get_part_id(disk: string, part: string): string;
/**
 * 
 */
export function part_get_part_spec(disk: string, part: string): PartSpec;
/**
 * 
 */
export function part_get_part_table_type_str(type: PartTableType): string;
/**
 * 
 */
export function part_get_type_str(type: PartType): string;
/**
 * 
 */
export function part_is_tech_avail(tech: PartTech, mode: number): boolean;
/**
 * 
 */
export function part_resize_part(disk: string, part: string, size: number, align: PartAlign): boolean;
/**
 * 
 */
export function part_set_disk_flag(disk: string, flag: PartDiskFlag, state: boolean): boolean;
/**
 * 
 */
export function part_set_part_flag(disk: string, part: string, flag: PartFlag, state: boolean): boolean;
/**
 * 
 */
export function part_set_part_flags(disk: string, part: string, flags: number): boolean;
/**
 * 
 */
export function part_set_part_id(disk: string, part: string, part_id: string): boolean;
/**
 * 
 */
export function part_set_part_name(disk: string, part: string, name: string): boolean;
/**
 * 
 */
export function part_set_part_type(disk: string, part: string, type_guid: string): boolean;
/**
 * 
 */
export function reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func: UtilsLogFunc | null): boolean;
/**
 * 
 */
export function swap_error_quark(): GLib.Quark;
/**
 * 
 */
export function swap_is_tech_avail(tech: SwapTech, mode: number): boolean;
/**
 * 
 */
export function swap_mkswap(device: string, label: string | null, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function swap_set_label(device: string, label: string): boolean;
/**
 * 
 */
export function swap_swapoff(device: string): boolean;
/**
 * 
 */
export function swap_swapon(device: string, priority: number): boolean;
/**
 * 
 */
export function swap_swapstatus(device: string): boolean;
/**
 * Enables or disables plugins' init checks based on @enable.
 * Note: The current implementation (un)sets the LIBBLOCKDEV_SKIP_DEP_CHE
 * CKS
 *       environment variable.
 */
export function switch_init_checks(enable: boolean): boolean;
/**
 * 
 */
export function try_init(request_plugins: PluginSpec[] | null, log_func: UtilsLogFunc | null): [boolean, string[] | null];
/**
 * 
 */
export function try_reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func: UtilsLogFunc | null): [boolean, string[] | null];
/**
 * 
 */
export function utils_check_util_version(util: string, version: string | null, version_arg: string | null, version_regexp: string | null): boolean;
/**
 * 
 */
export function utils_dbus_error_quark(): GLib.Quark;
/**
 * 
 */
export function utils_dbus_service_available(connection: Gio.DBusConnection | null, bus_type: Gio.BusType, bus_name: string, obj_prefix: string): boolean;
/**
 * 
 */
export function utils_dev_utils_error_quark(): GLib.Quark;
/**
 * 
 */
export function utils_echo_str_to_file(str: string, file_path: string): boolean;
/**
 * 
 */
export function utils_exec_and_capture_output(argv: string[], extra: ExtraArg[] | null): [boolean, string];
/**
 * 
 */
export function utils_exec_and_report_error(argv: string[], extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function utils_exec_and_report_error_no_progress(argv: string[], extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function utils_exec_and_report_progress(argv: string[], extra: ExtraArg[] | null, prog_extract: UtilsProgExtract): [boolean, number];
/**
 * 
 */
export function utils_exec_and_report_status_error(argv: string[], extra: ExtraArg[] | null): [boolean, number];
/**
 * 
 */
export function utils_exec_error_quark(): GLib.Quark;
/**
 * 
 */
export function utils_get_device_symlinks(dev_spec: string): string[];
/**
 * 
 */
export function utils_have_kernel_module(module_name: string): boolean;
/**
 * 
 */
export function utils_init_logging(new_log_func: UtilsLogFunc | null): boolean;
/**
 * 
 */
export function utils_init_prog_reporting(new_prog_func: UtilsProgFunc | null): boolean;
/**
 * 
 */
export function utils_init_prog_reporting_thread(new_prog_func: UtilsProgFunc | null): boolean;
/**
 * 
 */
export function utils_load_kernel_module(module_name: string, options: string | null): boolean;
/**
 * 
 */
export function utils_log(level: number, msg: string): void;
/**
 * 
 */
export function utils_module_error_quark(): GLib.Quark;
/**
 * 
 */
export function utils_mute_prog_reporting_thread(): boolean;
/**
 * 
 */
export function utils_prog_reporting_initialized(): boolean;
/**
 * 
 */
export function utils_report_finished(task_id: number, msg: string): void;
/**
 * 
 */
export function utils_report_progress(task_id: number, completion: number, msg: string): void;
/**
 * 
 */
export function utils_report_started(msg: string): number;
/**
 * 
 */
export function utils_resolve_device(dev_spec: string): string;
/**
 * 
 */
export function utils_unload_kernel_module(module_name: string): boolean;
/**
 * 
 */
export function utils_version_cmp(ver_string1: string, ver_string2: string): number;
/**
 * 
 */
export function vdo_activate(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_change_write_policy(name: string, write_policy: VDOWritePolicy, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_create(name: string, backing_device: string, logical_size: number, index_memory: number, compression: boolean, deduplication: boolean, write_policy: VDOWritePolicy, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_deactivate(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_disable_compression(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_disable_deduplication(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_enable_compression(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_enable_deduplication(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_error_quark(): GLib.Quark;
/**
 * 
 */
export function vdo_get_stats(name: string): VDOStats;
/**
 * 
 */
export function vdo_get_stats_full(name: string): GLib.HashTable;
/**
 * 
 */
export function vdo_get_write_policy_from_str(policy_str: string): VDOWritePolicy;
/**
 * 
 */
export function vdo_get_write_policy_str(policy: VDOWritePolicy): string;
/**
 * 
 */
export function vdo_grow_logical(name: string, size: number, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_grow_physical(name: string, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_info(name: string): VDOInfo;
/**
 * 
 */
export function vdo_is_tech_avail(tech: VDOTech, mode: number): boolean;
/**
 * 
 */
export function vdo_remove(name: string, force: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_start(name: string, rebuild: boolean, extra: ExtraArg[] | null): boolean;
/**
 * 
 */
export function vdo_stop(name: string, force: boolean, extra: ExtraArg[] | null): boolean;
export enum BtrfsError {
    DEVICE = 0,
    PARSE = 1,
    TECH_UNAVAIL = 2,
}
export enum BtrfsTech {
    FS = 0,
    MULTI_DEV = 1,
    SUBVOL = 2,
    SNAPSHOT = 3,
}
export enum CryptoError {
    DEVICE = 0,
    STATE = 1,
    INVALID_SPEC = 2,
    FORMAT_FAILED = 3,
    RESIZE_FAILED = 4,
    RESIZE_PERM = 5,
    ADD_KEY = 6,
    REMOVE_KEY = 7,
    NO_KEY = 8,
    KEY_SLOT = 9,
    NSS_INIT_FAILED = 10,
    CERT_DECODE = 11,
    ESCROW_FAILED = 12,
    INVALID_PARAMS = 13,
    TECH_UNAVAIL = 14,
}
export enum CryptoLUKSVersion {
    LUKS1 = 0,
    LUKS2 = 1,
}
export enum CryptoTech {
    LUKS = 0,
    LUKS2 = 1,
    TRUECRYPT = 2,
    ESCROW = 3,
    INTEGRITY = 4,
}
export enum DMError {
    SYS = 0,
    NOT_ROOT = 1,
    TASK = 2,
    RAID_FAIL = 3,
    RAID_NO_DEVS = 4,
    TECH_UNAVAIL = 5,
}
export enum DMTech {
    MAP = 0,
    RAID = 1,
}
export enum FSTech {
    GENERIC = 0,
    MOUNT = 1,
    EXT2 = 2,
    EXT3 = 3,
    EXT4 = 4,
    XFS = 5,
    VFAT = 6,
    NTFS = 7,
}
export enum FsError {
    INVAL = 0,
    PARSE = 1,
    FAIL = 2,
    NOFS = 3,
    PIPE = 4,
    UNMOUNT_FAIL = 5,
    NOT_SUPPORTED = 6,
    NOT_MOUNTED = 7,
    AUTH = 8,
    TECH_UNAVAIL = 9,
}
export enum InitError {
    PLUGINS_FAILED = 0,
    NOT_IMPLEMENTED = 1,
    FAILED = 2,
}
export enum KBDBcacheMode {
    WRITETHROUGH = 0,
    WRITEBACK = 1,
    WRITEAROUND = 2,
    NONE = 3,
    UNKNOWN = 4,
}
export enum KBDError {
    INVAL = 0,
    KMOD_INIT_FAIL = 1,
    MODULE_FAIL = 2,
    MODULE_NOEXIST = 3,
    ZRAM_NOEXIST = 4,
    ZRAM_INVAL = 5,
    BCACHE_PARSE = 6,
    BCACHE_SETUP_FAIL = 7,
    BCACHE_DETACH_FAIL = 8,
    BCACHE_NOT_ATTACHED = 9,
    BCACHE_UUID = 10,
    BCACHE_MODE_FAIL = 11,
    BCACHE_MODE_INVAL = 12,
    BCACHE_NOEXIST = 13,
    BCACHE_INVAL = 14,
    TECH_UNAVAIL = 15,
}
export enum KBDTech {
    ZRAM = 0,
    BCACHE = 1,
}
export enum LVMCacheMode {
    WRITETHROUGH = 0,
    WRITEBACK = 1,
    UNKNOWN = 2,
}
export enum LVMError {
    PARSE = 0,
    NOEXIST = 1,
    DM_ERROR = 2,
    NOT_ROOT = 3,
    CACHE_INVAL = 4,
    CACHE_NOCACHE = 5,
    TECH_UNAVAIL = 6,
    FAIL = 7,
}
export enum LVMTech {
    BASIC = 0,
    BASIC_SNAP = 1,
    THIN = 2,
    CACHE = 3,
    CALCS = 4,
    THIN_CALCS = 5,
    CACHE_CALCS = 6,
    GLOB_CONF = 7,
}
export enum LoopError {
    DEVICE = 0,
    FAIL = 1,
    TECH_UNAVAIL = 2,
}
export enum LoopTech {
    LOOP_TECH_LOOP = 0,
}
export enum MDError {
    PARSE = 0,
    BAD_FORMAT = 1,
    NO_MATCH = 2,
    INVAL = 3,
    FAIL = 4,
    TECH_UNAVAIL = 5,
}
export enum MDTech {
    MD_TECH_MDRAID = 0,
}
export enum MpathError {
    FLUSH = 0,
    NOT_ROOT = 1,
    DM_ERROR = 2,
    INVAL = 3,
    TECH_UNAVAIL = 4,
}
export enum MpathTech {
    BASE = 0,
    FRIENDLY_NAMES = 1,
}
export enum NVDIMMError {
    PARSE = 0,
    FAIL = 1,
    NOEXIST = 2,
    MODE_INVAL = 3,
}
export enum NVDIMMNamespaceMode {
    RAW = 0,
    SECTOR = 1,
    MEMORY = 2,
    DAX = 3,
    FSDAX = 4,
    DEVDAX = 5,
    UNKNOWN = 6,
}
export enum NVDIMMTech {
    NVDIMM_TECH_NAMESPACE = 0,
}
export enum PartAlign {
    MINIMAL = 0,
    OPTIMAL = 1,
    NONE = 2,
}
export enum PartDiskFlag {
    PART_DISK_FLAG_GPT_PMBR_BOOT = 1,
}
export enum PartError {
    EXISTS = 0,
    INVAL = 1,
    FAIL = 2,
    TECH_UNAVAIL = 3,
}
export enum PartTableType {
    MSDOS = 0,
    GPT = 1,
    UNDEF = 2,
}
export enum PartTech {
    MBR = 0,
    GPT = 1,
}
export enum PartType {
    NORMAL = 0,
    LOGICAL = 1,
    EXTENDED = 2,
    FREESPACE = 4,
    METADATA = 8,
    PROTECTED = 16,
}
export enum PartTypeReq {
    NORMAL = 0,
    LOGICAL = 1,
    EXTENDED = 2,
    NEXT = 4,
}
export enum Plugin {
    LVM = 0,
    BTRFS = 1,
    SWAP = 2,
    LOOP = 3,
    CRYPTO = 4,
    MPATH = 5,
    DM = 6,
    MDRAID = 7,
    KBD = 8,
    S390 = 9,
    PART = 10,
    FS = 11,
    NVDIMM = 12,
    VDO = 13,
    UNDEF = 14,
}
export enum SwapError {
    UNKNOWN_STATE = 0,
    ACTIVATE = 1,
    TECH_UNAVAIL = 2,
    ACTIVATE_OLD = 3,
    ACTIVATE_SUSPEND = 4,
    ACTIVATE_UNKNOWN = 5,
    ACTIVATE_PAGESIZE = 6,
}
export enum SwapTech {
    SWAP_TECH_SWAP = 0,
}
export enum UtilsDBusError {
    FAIL = 0,
    NOEXIST = 1,
}
export enum UtilsDevUtilsError {
    UTILS_DEV_UTILS_ERROR_FAILED = 0,
}
export enum UtilsExecError {
    FAILED = 0,
    NOOUT = 1,
    INVAL_VER = 2,
    UTIL_UNAVAILABLE = 3,
    UTIL_UNKNOWN_VER = 4,
    UTIL_LOW_VER = 5,
    UTIL_CHECK_ERROR = 6,
}
export enum UtilsModuleError {
    KMOD_INIT_FAIL = 0,
    FAIL = 1,
    NOEXIST = 2,
    MODULE_CHECK_ERROR = 3,
}
export enum UtilsProgStatus {
    STARTED = 0,
    PROGRESS = 1,
    FINISHED = 2,
}
export enum VDOError {
    VDO_ERROR_FAIL = 0,
}
export enum VDOTech {
    VDO_TECH_VDO = 0,
}
export enum VDOWritePolicy {
    SYNC = 0,
    ASYNC = 1,
    AUTO = 2,
    UNKNOWN = 3,
}
export enum BtrfsTechMode {
    CREATE = 1,
    DELETE = 2,
    MODIFY = 4,
    QUERY = 8,
}
export enum CryptoTechMode {
    CREATE = 1,
    OPEN_CLOSE = 2,
    QUERY = 4,
    ADD_KEY = 8,
    REMOVE_KEY = 16,
    RESIZE = 32,
    SUSPEND_RESUME = 64,
    BACKUP_RESTORE = 128,
}
export enum DMTechMode {
    CREATE_ACTIVATE = 1,
    REMOVE_DEACTIVATE = 2,
    QUERY = 4,
}
export enum FSTechMode {
    MKFS = 1,
    WIPE = 2,
    CHECK = 4,
    REPAIR = 8,
    SET_LABEL = 16,
    QUERY = 32,
    RESIZE = 64,
}
export enum FsResizeFlags {
    OFFLINE_SHRINK = 2,
    OFFLINE_GROW = 4,
    ONLINE_SHRINK = 8,
    ONLINE_GROW = 16,
}
export enum KBDTechMode {
    CREATE = 1,
    DESTROY = 2,
    MODIFY = 4,
    QUERY = 8,
}
export enum LVMCachePoolFlags {
    STRIPED = 1,
    RAID1 = 2,
    RAID5 = 4,
    RAID6 = 8,
    RAID10 = 16,
    META_STRIPED = 1024,
    META_RAID1 = 2048,
    META_RAID5 = 4096,
    META_RAID6 = 8192,
    META_RAID10 = 16384,
}
export enum LVMTechMode {
    CREATE = 1,
    REMOVE = 4,
    MODIFY = 8,
    QUERY = 16,
}
export enum LoopTechMode {
    CREATE = 1,
    DESTROY = 2,
    MODIFY = 4,
    QUERY = 8,
}
export enum MDTechMode {
    CREATE = 1,
    DELETE = 2,
    MODIFY = 4,
    QUERY = 8,
}
export enum MpathTechMode {
    QUERY = 1,
    MODIFY = 2,
}
export enum NVDIMMTechMode {
    CREATE = 1,
    REMOVE = 2,
    ACTIVATE_DEACTIVATE = 4,
    QUERY = 8,
    RECONFIGURE = 16,
}
export enum PartFlag {
    BOOT = 2,
    ROOT = 4,
    SWAP = 8,
    HIDDEN = 16,
    RAID = 32,
    LVM = 64,
    LBA = 128,
    HPSERVICE = 256,
    CPALO = 512,
    PREP = 1024,
    MSFT_RESERVED = 2048,
    BIOS_GRUB = 4096,
    APPLE_TV_RECOVERY = 8192,
    DIAG = 16384,
    LEGACY_BOOT = 32768,
    MSFT_DATA = 65536,
    IRST = 131072,
    ESP = 262144,
    GPT_SYSTEM_PART = 33554432,
    GPT_READ_ONLY = 67108864,
    GPT_HIDDEN = 134217728,
    GPT_NO_AUTOMOUNT = 268435456,
}
export enum PartTechMode {
    CREATE_TABLE = 1,
    MODIFY_TABLE = 2,
    QUERY_TABLE = 4,
    MODIFY_PART = 8,
    QUERY_PART = 16,
}
export enum SwapTechMode {
    CREATE = 1,
    ACTIVATE_DEACTIVATE = 2,
    QUERY = 4,
    SET_LABEL = 8,
}
export enum VDOTechMode {
    CREATE = 1,
    REMOVE = 2,
    MODIFY = 4,
    ACTIVATE_DEACTIVATE = 8,
    START_STOP = 16,
    QUERY = 32,
    GROW = 64,
}
export class BtrfsDeviceInfo  {constructor(config?: properties);
id: number;
path: string;
size: number;
used: number;
copy(): BtrfsDeviceInfo;
free(): void;
}
export class BtrfsFilesystemInfo  {constructor(config?: properties);
label: string;
uuid: string;
num_devices: number;
used: number;
copy(): BtrfsFilesystemInfo;
free(): void;
}
export class BtrfsSubvolumeInfo  {constructor(config?: properties);
id: number;
parent_id: number;
path: string;
copy(): BtrfsSubvolumeInfo;
free(): void;
}
export class CryptoIntegrityInfo  {constructor(config?: properties);
algorithm: string;
key_size: number;
sector_size: number;
tag_size: number;
interleave_sectors: number;
journal_size: number;
journal_crypt: string;
journal_integrity: string;
copy(): CryptoIntegrityInfo;
free(): void;
}
export class CryptoLUKSExtra  {constructor(config?: properties);
copy(): CryptoLUKSExtra;
free(): void;
}
export class CryptoLUKSInfo  {constructor(config?: properties);
version: CryptoLUKSVersion;
cipher: string;
mode: string;
uuid: string;
backing_device: string;
sector_size: number;
copy(): CryptoLUKSInfo;
free(): void;
}
export class CryptoLUKSPBKDF  {constructor(config?: properties);
copy(): CryptoLUKSPBKDF;
free(): void;
}
export class ExtraArg  {constructor(config?: properties);
copy(): ExtraArg;
free(): void;
}
export class FSExt2Info  {constructor(config?: properties);
label: string;
uuid: string;
state: string;
block_size: number;
block_count: number;
free_blocks: number;
copy(): FSExt2Info;
}
export class FSExt3Info  {constructor(config?: properties);
label: string;
uuid: string;
state: string;
block_size: number;
block_count: number;
free_blocks: number;
copy(): FSExt3Info;
free(): void;
}
export class FSExt4Info  {constructor(config?: properties);
label: string;
uuid: string;
state: string;
block_size: number;
block_count: number;
free_blocks: number;
copy(): FSExt4Info;
free(): void;
}
export class FSExtInfo  {constructor(config?: properties);
label: string;
uuid: string;
state: string;
block_size: number;
block_count: number;
free_blocks: number;
}
export class FSNtfsInfo  {constructor(config?: properties);
size: number;
free_space: number;
copy(): FSNtfsInfo;
free(): void;
}
export class FSVfatInfo  {constructor(config?: properties);
label: string;
uuid: string;
cluster_size: number;
cluster_count: number;
free_cluster_count: number;
copy(): FSVfatInfo;
free(): void;
}
export class FSXfsInfo  {constructor(config?: properties);
label: string;
uuid: string;
block_size: number;
block_count: number;
copy(): FSXfsInfo;
free(): void;
}
export class KBDBcacheStats  {constructor(config?: properties);
state: string;
block_size: number;
cache_size: number;
cache_used: number;
hits: number;
misses: number;
bypass_hits: number;
bypass_misses: number;
copy(): KBDBcacheStats;
free(): void;
}
export class KBDZramStats  {constructor(config?: properties);
disksize: number;
num_reads: number;
num_writes: number;
invalid_io: number;
zero_pages: number;
max_comp_streams: number;
comp_algorithm: string;
orig_data_size: number;
compr_data_size: number;
mem_used_total: number;
copy(): KBDZramStats;
free(): void;
}
export class LVMCacheStats  {constructor(config?: properties);
block_size: number;
cache_size: number;
cache_used: number;
md_block_size: number;
md_size: number;
md_used: number;
read_hits: number;
read_misses: number;
write_hits: number;
write_misses: number;
mode: LVMCacheMode;
copy(): LVMCacheStats;
static free(data: LVMLVdata): void;
}
export class LVMLVdata  {constructor(config?: properties);
lv_name: string;
vg_name: string;
uuid: string;
size: number;
attr: string;
segtype: string;
origin: string;
pool_lv: string;
data_lv: string;
metadata_lv: string;
roles: string;
move_pv: string;
data_percent: number;
metadata_percent: number;
copy_percent: number;
copy(): LVMLVdata;
free(): void;
}
export class LVMPVdata  {constructor(config?: properties);
pv_name: string;
pv_uuid: string;
pv_free: number;
pv_size: number;
pe_start: number;
vg_name: string;
vg_uuid: string;
vg_size: number;
vg_free: number;
vg_extent_size: number;
vg_extent_count: number;
vg_free_count: number;
vg_pv_count: number;
copy(): LVMPVdata;
free(): void;
}
export class LVMVGdata  {constructor(config?: properties);
name: string;
uuid: string;
size: number;
extent_size: number;
extent_count: number;
free_count: number;
pv_count: number;
copy(): LVMVGdata;
free(): void;
}
export class MDDetailData  {constructor(config?: properties);
device: string;
metadata: string;
creation_time: string;
level: string;
name: string;
array_size: number;
use_dev_size: number;
raid_devices: number;
total_devices: number;
active_devices: number;
working_devices: number;
failed_devices: number;
spare_devices: number;
clean: boolean;
uuid: string;
copy(): MDDetailData;
free(): void;
}
export class MDExamineData  {constructor(config?: properties);
device: string;
level: string;
num_devices: number;
name: string;
size: number;
uuid: string;
update_time: number;
dev_uuid: string;
events: number;
metadata: string;
chunk_size: number;
copy(): MDExamineData;
free(): void;
}
export class NVDIMMNamespaceInfo  {constructor(config?: properties);
dev: string;
mode: number;
size: number;
uuid: string;
sector_size: number;
blockdev: string;
enabled: boolean;
copy(): NVDIMMNamespaceInfo;
free(): void;
}
export class PartDiskSpec  {constructor(config?: properties);
path: string;
table_type: PartTableType;
size: number;
sector_size: number;
flags: number;
copy(): PartDiskSpec;
free(): void;
}
export class PartSpec  {constructor(config?: properties);
path: string;
name: string;
type_guid: string;
type: number;
start: number;
size: number;
flags: number;
copy(): PartSpec;
free(): void;
}
export class PluginSpec  {constructor(config?: properties);
name: Plugin;
so_name: string;
copy(): PluginSpec;
free(): void;
}
export class VDOInfo  {constructor(config?: properties);
name: string;
device: string;
active: boolean;
deduplication: boolean;
compression: boolean;
logical_size: number;
physical_size: number;
index_memory: number;
write_policy: VDOWritePolicy;
copy(): VDOInfo;
free(): void;
}
export class VDOStats  {constructor(config?: properties);
block_size: number;
logical_block_size: number;
physical_blocks: number;
data_blocks_used: number;
overhead_blocks_used: number;
logical_blocks_used: number;
used_percent: number;
saving_percent: number;
write_amplification_ratio: number;
copy(): VDOStats;
free(): void;
}