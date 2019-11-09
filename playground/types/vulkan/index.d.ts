
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * vulkan.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export class Flags  {
    constructor(config?: properties);
}
export class Bool32  {
    constructor(config?: properties);
}
export class DeviceSize  {
    constructor(config?: properties);
}
export class SampleMask  {
    constructor(config?: properties);
}
export class Instance  {
    constructor(config?: properties);
}
export class PhysicalDevice  {
    constructor(config?: properties);
}
export class Device  {
    constructor(config?: properties);
}
export class Queue  {
    constructor(config?: properties);
}
export class Semaphore  {
    constructor(config?: properties);
}
export class CommandBuffer  {
    constructor(config?: properties);
}
export class Fence  {
    constructor(config?: properties);
}
export class DeviceMemory  {
    constructor(config?: properties);
}
export class Buffer  {
    constructor(config?: properties);
}
export class Image  {
    constructor(config?: properties);
}
export class Event  {
    constructor(config?: properties);
}
export class QueryPool  {
    constructor(config?: properties);
}
export class BufferView  {
    constructor(config?: properties);
}
export class ImageView  {
    constructor(config?: properties);
}
export class ShaderModule  {
    constructor(config?: properties);
}
export class PipelineCache  {
    constructor(config?: properties);
}
export class PipelineLayout  {
    constructor(config?: properties);
}
export class RenderPass  {
    constructor(config?: properties);
}
export class Pipeline  {
    constructor(config?: properties);
}
export class DescriptorSetLayout  {
    constructor(config?: properties);
}
export class Sampler  {
    constructor(config?: properties);
}
export class DescriptorPool  {
    constructor(config?: properties);
}
export class DescriptorSet  {
    constructor(config?: properties);
}
export class Framebuffer  {
    constructor(config?: properties);
}
export class CommandPool  {
    constructor(config?: properties);
}
export class PipelineCacheHeaderVersion  {
    constructor(config?: properties);
}
export class Result  {
    constructor(config?: properties);
}
export class StructureType  {
    constructor(config?: properties);
}
export class SystemAllocationScope  {
    constructor(config?: properties);
}
export class InternalAllocationType  {
    constructor(config?: properties);
}
export class Format  {
    constructor(config?: properties);
}
export class ImageType  {
    constructor(config?: properties);
}
export class ImageTiling  {
    constructor(config?: properties);
}
export class PhysicalDeviceType  {
    constructor(config?: properties);
}
export class QueryType  {
    constructor(config?: properties);
}
export class SharingMode  {
    constructor(config?: properties);
}
export class ImageLayout  {
    constructor(config?: properties);
}
export class ImageViewType  {
    constructor(config?: properties);
}
export class ComponentSwizzle  {
    constructor(config?: properties);
}
export class VertexInputRate  {
    constructor(config?: properties);
}
export class PrimitiveTopology  {
    constructor(config?: properties);
}
export class PolygonMode  {
    constructor(config?: properties);
}
export class FrontFace  {
    constructor(config?: properties);
}
export class CompareOp  {
    constructor(config?: properties);
}
export class StencilOp  {
    constructor(config?: properties);
}
export class LogicOp  {
    constructor(config?: properties);
}
export class BlendFactor  {
    constructor(config?: properties);
}
export class BlendOp  {
    constructor(config?: properties);
}
export class DynamicState  {
    constructor(config?: properties);
}
export class Filter  {
    constructor(config?: properties);
}
export class SamplerMipmapMode  {
    constructor(config?: properties);
}
export class SamplerAddressMode  {
    constructor(config?: properties);
}
export class BorderColor  {
    constructor(config?: properties);
}
export class DescriptorType  {
    constructor(config?: properties);
}
export class AttachmentLoadOp  {
    constructor(config?: properties);
}
export class AttachmentStoreOp  {
    constructor(config?: properties);
}
export class PipelineBindPoint  {
    constructor(config?: properties);
}
export class CommandBufferLevel  {
    constructor(config?: properties);
}
export class IndexType  {
    constructor(config?: properties);
}
export class SubpassContents  {
    constructor(config?: properties);
}
export class ObjectType  {
    constructor(config?: properties);
}
export class VendorId  {
    constructor(config?: properties);
}
export class InstanceCreateFlags  {
    constructor(config?: properties);
}
export class FormatFeatureFlagBits  {
    constructor(config?: properties);
}
export class FormatFeatureFlags  {
    constructor(config?: properties);
}
export class ImageUsageFlagBits  {
    constructor(config?: properties);
}
export class ImageUsageFlags  {
    constructor(config?: properties);
}
export class ImageCreateFlagBits  {
    constructor(config?: properties);
}
export class ImageCreateFlags  {
    constructor(config?: properties);
}
export class SampleCountFlagBits  {
    constructor(config?: properties);
}
export class SampleCountFlags  {
    constructor(config?: properties);
}
export class QueueFlagBits  {
    constructor(config?: properties);
}
export class QueueFlags  {
    constructor(config?: properties);
}
export class MemoryPropertyFlagBits  {
    constructor(config?: properties);
}
export class MemoryPropertyFlags  {
    constructor(config?: properties);
}
export class MemoryHeapFlagBits  {
    constructor(config?: properties);
}
export class MemoryHeapFlags  {
    constructor(config?: properties);
}
export class DeviceCreateFlags  {
    constructor(config?: properties);
}
export class DeviceQueueCreateFlagBits  {
    constructor(config?: properties);
}
export class DeviceQueueCreateFlags  {
    constructor(config?: properties);
}
export class PipelineStageFlagBits  {
    constructor(config?: properties);
}
export class PipelineStageFlags  {
    constructor(config?: properties);
}
export class MemoryMapFlags  {
    constructor(config?: properties);
}
export class ImageAspectFlagBits  {
    constructor(config?: properties);
}
export class ImageAspectFlags  {
    constructor(config?: properties);
}
export class SparseImageFormatFlagBits  {
    constructor(config?: properties);
}
export class SparseImageFormatFlags  {
    constructor(config?: properties);
}
export class SparseMemoryBindFlagBits  {
    constructor(config?: properties);
}
export class SparseMemoryBindFlags  {
    constructor(config?: properties);
}
export class FenceCreateFlagBits  {
    constructor(config?: properties);
}
export class FenceCreateFlags  {
    constructor(config?: properties);
}
export class SemaphoreCreateFlags  {
    constructor(config?: properties);
}
export class EventCreateFlags  {
    constructor(config?: properties);
}
export class QueryPoolCreateFlags  {
    constructor(config?: properties);
}
export class QueryPipelineStatisticFlagBits  {
    constructor(config?: properties);
}
export class QueryPipelineStatisticFlags  {
    constructor(config?: properties);
}
export class QueryResultFlagBits  {
    constructor(config?: properties);
}
export class QueryResultFlags  {
    constructor(config?: properties);
}
export class BufferCreateFlagBits  {
    constructor(config?: properties);
}
export class BufferCreateFlags  {
    constructor(config?: properties);
}
export class BufferUsageFlagBits  {
    constructor(config?: properties);
}
export class BufferUsageFlags  {
    constructor(config?: properties);
}
export class BufferViewCreateFlags  {
    constructor(config?: properties);
}
export class ImageViewCreateFlagBits  {
    constructor(config?: properties);
}
export class ImageViewCreateFlags  {
    constructor(config?: properties);
}
export class ShaderModuleCreateFlags  {
    constructor(config?: properties);
}
export class PipelineCacheCreateFlags  {
    constructor(config?: properties);
}
export class PipelineCreateFlagBits  {
    constructor(config?: properties);
}
export class PipelineCreateFlags  {
    constructor(config?: properties);
}
export class PipelineShaderStageCreateFlags  {
    constructor(config?: properties);
}
export class ShaderStageFlagBits  {
    constructor(config?: properties);
}
export class PipelineVertexInputStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineInputAssemblyStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineTessellationStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineViewportStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineRasterizationStateCreateFlags  {
    constructor(config?: properties);
}
export class CullModeFlagBits  {
    constructor(config?: properties);
}
export class CullModeFlags  {
    constructor(config?: properties);
}
export class PipelineMultisampleStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineDepthStencilStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineColorBlendStateCreateFlags  {
    constructor(config?: properties);
}
export class ColorComponentFlagBits  {
    constructor(config?: properties);
}
export class ColorComponentFlags  {
    constructor(config?: properties);
}
export class PipelineDynamicStateCreateFlags  {
    constructor(config?: properties);
}
export class PipelineLayoutCreateFlags  {
    constructor(config?: properties);
}
export class ShaderStageFlags  {
    constructor(config?: properties);
}
export class SamplerCreateFlagBits  {
    constructor(config?: properties);
}
export class SamplerCreateFlags  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutCreateFlagBits  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutCreateFlags  {
    constructor(config?: properties);
}
export class DescriptorPoolCreateFlagBits  {
    constructor(config?: properties);
}
export class DescriptorPoolCreateFlags  {
    constructor(config?: properties);
}
export class DescriptorPoolResetFlags  {
    constructor(config?: properties);
}
export class FramebufferCreateFlags  {
    constructor(config?: properties);
}
export class RenderPassCreateFlags  {
    constructor(config?: properties);
}
export class AttachmentDescriptionFlagBits  {
    constructor(config?: properties);
}
export class AttachmentDescriptionFlags  {
    constructor(config?: properties);
}
export class SubpassDescriptionFlagBits  {
    constructor(config?: properties);
}
export class SubpassDescriptionFlags  {
    constructor(config?: properties);
}
export class AccessFlagBits  {
    constructor(config?: properties);
}
export class AccessFlags  {
    constructor(config?: properties);
}
export class DependencyFlagBits  {
    constructor(config?: properties);
}
export class DependencyFlags  {
    constructor(config?: properties);
}
export class CommandPoolCreateFlagBits  {
    constructor(config?: properties);
}
export class CommandPoolCreateFlags  {
    constructor(config?: properties);
}
export class CommandPoolResetFlagBits  {
    constructor(config?: properties);
}
export class CommandPoolResetFlags  {
    constructor(config?: properties);
}
export class CommandBufferUsageFlagBits  {
    constructor(config?: properties);
}
export class CommandBufferUsageFlags  {
    constructor(config?: properties);
}
export class QueryControlFlagBits  {
    constructor(config?: properties);
}
export class QueryControlFlags  {
    constructor(config?: properties);
}
export class CommandBufferResetFlagBits  {
    constructor(config?: properties);
}
export class CommandBufferResetFlags  {
    constructor(config?: properties);
}
export class StencilFaceFlagBits  {
    constructor(config?: properties);
}
export class StencilFaceFlags  {
    constructor(config?: properties);
}
export class ApplicationInfo  {
    constructor(config?: properties);
}
export class InstanceCreateInfo  {
    constructor(config?: properties);
}
export class AllocationCallbacks  {
    constructor(config?: properties);
}
export class PhysicalDeviceFeatures  {
    constructor(config?: properties);
}
export class FormatProperties  {
    constructor(config?: properties);
}
export class Extent3D  {
    constructor(config?: properties);
}
export class ImageFormatProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceLimits  {
    constructor(config?: properties);
}
export class PhysicalDeviceSparseProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceProperties  {
    constructor(config?: properties);
}
export class QueueFamilyProperties  {
    constructor(config?: properties);
}
export class MemoryType  {
    constructor(config?: properties);
}
export class MemoryHeap  {
    constructor(config?: properties);
}
export class PhysicalDeviceMemoryProperties  {
    constructor(config?: properties);
}
export class DeviceQueueCreateInfo  {
    constructor(config?: properties);
}
export class DeviceCreateInfo  {
    constructor(config?: properties);
}
export class ExtensionProperties  {
    constructor(config?: properties);
}
export class LayerProperties  {
    constructor(config?: properties);
}
export class SubmitInfo  {
    constructor(config?: properties);
}
export class MemoryAllocateInfo  {
    constructor(config?: properties);
}
export class MappedMemoryRange  {
    constructor(config?: properties);
}
export class MemoryRequirements  {
    constructor(config?: properties);
}
export class SparseImageFormatProperties  {
    constructor(config?: properties);
}
export class SparseImageMemoryRequirements  {
    constructor(config?: properties);
}
export class SparseMemoryBind  {
    constructor(config?: properties);
}
export class SparseBufferMemoryBindInfo  {
    constructor(config?: properties);
}
export class SparseImageOpaqueMemoryBindInfo  {
    constructor(config?: properties);
}
export class ImageSubresource  {
    constructor(config?: properties);
}
export class Offset3D  {
    constructor(config?: properties);
}
export class SparseImageMemoryBind  {
    constructor(config?: properties);
}
export class SparseImageMemoryBindInfo  {
    constructor(config?: properties);
}
export class BindSparseInfo  {
    constructor(config?: properties);
}
export class FenceCreateInfo  {
    constructor(config?: properties);
}
export class SemaphoreCreateInfo  {
    constructor(config?: properties);
}
export class EventCreateInfo  {
    constructor(config?: properties);
}
export class QueryPoolCreateInfo  {
    constructor(config?: properties);
}
export class BufferCreateInfo  {
    constructor(config?: properties);
}
export class BufferViewCreateInfo  {
    constructor(config?: properties);
}
export class ImageCreateInfo  {
    constructor(config?: properties);
}
export class SubresourceLayout  {
    constructor(config?: properties);
}
export class ComponentMapping  {
    constructor(config?: properties);
}
export class ImageSubresourceRange  {
    constructor(config?: properties);
}
export class ImageViewCreateInfo  {
    constructor(config?: properties);
}
export class ShaderModuleCreateInfo  {
    constructor(config?: properties);
}
export class PipelineCacheCreateInfo  {
    constructor(config?: properties);
}
export class SpecializationMapEntry  {
    constructor(config?: properties);
}
export class SpecializationInfo  {
    constructor(config?: properties);
}
export class PipelineShaderStageCreateInfo  {
    constructor(config?: properties);
}
export class VertexInputBindingDescription  {
    constructor(config?: properties);
}
export class VertexInputAttributeDescription  {
    constructor(config?: properties);
}
export class PipelineVertexInputStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineInputAssemblyStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineTessellationStateCreateInfo  {
    constructor(config?: properties);
}
export class Viewport  {
    constructor(config?: properties);
}
export class Offset2D  {
    constructor(config?: properties);
}
export class Extent2D  {
    constructor(config?: properties);
}
export class Rect2D  {
    constructor(config?: properties);
}
export class PipelineViewportStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineRasterizationStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineMultisampleStateCreateInfo  {
    constructor(config?: properties);
}
export class StencilOpState  {
    constructor(config?: properties);
}
export class PipelineDepthStencilStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineColorBlendAttachmentState  {
    constructor(config?: properties);
}
export class PipelineColorBlendStateCreateInfo  {
    constructor(config?: properties);
}
export class PipelineDynamicStateCreateInfo  {
    constructor(config?: properties);
}
export class GraphicsPipelineCreateInfo  {
    constructor(config?: properties);
}
export class ComputePipelineCreateInfo  {
    constructor(config?: properties);
}
export class PushConstantRange  {
    constructor(config?: properties);
}
export class PipelineLayoutCreateInfo  {
    constructor(config?: properties);
}
export class SamplerCreateInfo  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutBinding  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutCreateInfo  {
    constructor(config?: properties);
}
export class DescriptorPoolSize  {
    constructor(config?: properties);
}
export class DescriptorPoolCreateInfo  {
    constructor(config?: properties);
}
export class DescriptorSetAllocateInfo  {
    constructor(config?: properties);
}
export class DescriptorImageInfo  {
    constructor(config?: properties);
}
export class DescriptorBufferInfo  {
    constructor(config?: properties);
}
export class WriteDescriptorSet  {
    constructor(config?: properties);
}
export class CopyDescriptorSet  {
    constructor(config?: properties);
}
export class FramebufferCreateInfo  {
    constructor(config?: properties);
}
export class AttachmentDescription  {
    constructor(config?: properties);
}
export class AttachmentReference  {
    constructor(config?: properties);
}
export class SubpassDescription  {
    constructor(config?: properties);
}
export class SubpassDependency  {
    constructor(config?: properties);
}
export class RenderPassCreateInfo  {
    constructor(config?: properties);
}
export class CommandPoolCreateInfo  {
    constructor(config?: properties);
}
export class CommandBufferAllocateInfo  {
    constructor(config?: properties);
}
export class CommandBufferInheritanceInfo  {
    constructor(config?: properties);
}
export class CommandBufferBeginInfo  {
    constructor(config?: properties);
}
export class BufferCopy  {
    constructor(config?: properties);
}
export class ImageSubresourceLayers  {
    constructor(config?: properties);
}
export class ImageCopy  {
    constructor(config?: properties);
}
export class ImageBlit  {
    constructor(config?: properties);
}
export class BufferImageCopy  {
    constructor(config?: properties);
}
export class ClearColorValue  {
    constructor(config?: properties);
}
export class ClearDepthStencilValue  {
    constructor(config?: properties);
}
export class ClearValue  {
    constructor(config?: properties);
}
export class ClearAttachment  {
    constructor(config?: properties);
}
export class ClearRect  {
    constructor(config?: properties);
}
export class ImageResolve  {
    constructor(config?: properties);
}
export class MemoryBarrier  {
    constructor(config?: properties);
}
export class BufferMemoryBarrier  {
    constructor(config?: properties);
}
export class ImageMemoryBarrier  {
    constructor(config?: properties);
}
export class RenderPassBeginInfo  {
    constructor(config?: properties);
}
export class DispatchIndirectCommand  {
    constructor(config?: properties);
}
export class DrawIndexedIndirectCommand  {
    constructor(config?: properties);
}
export class DrawIndirectCommand  {
    constructor(config?: properties);
}
export class BaseOutStructure  {
    constructor(config?: properties);
}
export class BaseInStructure  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversion  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplate  {
    constructor(config?: properties);
}
export class PointClippingBehavior  {
    constructor(config?: properties);
}
export class TessellationDomainOrigin  {
    constructor(config?: properties);
}
export class SamplerYcbcrModelConversion  {
    constructor(config?: properties);
}
export class SamplerYcbcrRange  {
    constructor(config?: properties);
}
export class ChromaLocation  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateType  {
    constructor(config?: properties);
}
export class SubgroupFeatureFlagBits  {
    constructor(config?: properties);
}
export class SubgroupFeatureFlags  {
    constructor(config?: properties);
}
export class PeerMemoryFeatureFlagBits  {
    constructor(config?: properties);
}
export class PeerMemoryFeatureFlags  {
    constructor(config?: properties);
}
export class MemoryAllocateFlagBits  {
    constructor(config?: properties);
}
export class MemoryAllocateFlags  {
    constructor(config?: properties);
}
export class CommandPoolTrimFlags  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateCreateFlags  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlagBits  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlags  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlagBits  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlags  {
    constructor(config?: properties);
}
export class ExternalFenceHandleTypeFlagBits  {
    constructor(config?: properties);
}
export class ExternalFenceHandleTypeFlags  {
    constructor(config?: properties);
}
export class ExternalFenceFeatureFlagBits  {
    constructor(config?: properties);
}
export class ExternalFenceFeatureFlags  {
    constructor(config?: properties);
}
export class FenceImportFlagBits  {
    constructor(config?: properties);
}
export class FenceImportFlags  {
    constructor(config?: properties);
}
export class SemaphoreImportFlagBits  {
    constructor(config?: properties);
}
export class SemaphoreImportFlags  {
    constructor(config?: properties);
}
export class ExternalSemaphoreHandleTypeFlagBits  {
    constructor(config?: properties);
}
export class ExternalSemaphoreHandleTypeFlags  {
    constructor(config?: properties);
}
export class ExternalSemaphoreFeatureFlagBits  {
    constructor(config?: properties);
}
export class ExternalSemaphoreFeatureFlags  {
    constructor(config?: properties);
}
export class PhysicalDeviceSubgroupProperties  {
    constructor(config?: properties);
}
export class BindBufferMemoryInfo  {
    constructor(config?: properties);
}
export class BindImageMemoryInfo  {
    constructor(config?: properties);
}
export class PhysicalDevice16BitStorageFeatures  {
    constructor(config?: properties);
}
export class MemoryDedicatedRequirements  {
    constructor(config?: properties);
}
export class MemoryDedicatedAllocateInfo  {
    constructor(config?: properties);
}
export class MemoryAllocateFlagsInfo  {
    constructor(config?: properties);
}
export class DeviceGroupRenderPassBeginInfo  {
    constructor(config?: properties);
}
export class DeviceGroupCommandBufferBeginInfo  {
    constructor(config?: properties);
}
export class DeviceGroupSubmitInfo  {
    constructor(config?: properties);
}
export class DeviceGroupBindSparseInfo  {
    constructor(config?: properties);
}
export class BindBufferMemoryDeviceGroupInfo  {
    constructor(config?: properties);
}
export class BindImageMemoryDeviceGroupInfo  {
    constructor(config?: properties);
}
export class PhysicalDeviceGroupProperties  {
    constructor(config?: properties);
}
export class DeviceGroupDeviceCreateInfo  {
    constructor(config?: properties);
}
export class BufferMemoryRequirementsInfo2  {
    constructor(config?: properties);
}
export class ImageMemoryRequirementsInfo2  {
    constructor(config?: properties);
}
export class ImageSparseMemoryRequirementsInfo2  {
    constructor(config?: properties);
}
export class MemoryRequirements2  {
    constructor(config?: properties);
}
export class MemoryRequirements2KHR  {
    constructor(config?: properties);
}
export class SparseImageMemoryRequirements2  {
    constructor(config?: properties);
}
export class PhysicalDeviceFeatures2  {
    constructor(config?: properties);
}
export class PhysicalDeviceProperties2  {
    constructor(config?: properties);
}
export class FormatProperties2  {
    constructor(config?: properties);
}
export class ImageFormatProperties2  {
    constructor(config?: properties);
}
export class PhysicalDeviceImageFormatInfo2  {
    constructor(config?: properties);
}
export class QueueFamilyProperties2  {
    constructor(config?: properties);
}
export class PhysicalDeviceMemoryProperties2  {
    constructor(config?: properties);
}
export class SparseImageFormatProperties2  {
    constructor(config?: properties);
}
export class PhysicalDeviceSparseImageFormatInfo2  {
    constructor(config?: properties);
}
export class PhysicalDevicePointClippingProperties  {
    constructor(config?: properties);
}
export class InputAttachmentAspectReference  {
    constructor(config?: properties);
}
export class RenderPassInputAttachmentAspectCreateInfo  {
    constructor(config?: properties);
}
export class ImageViewUsageCreateInfo  {
    constructor(config?: properties);
}
export class PipelineTessellationDomainOriginStateCreateInfo  {
    constructor(config?: properties);
}
export class RenderPassMultiviewCreateInfo  {
    constructor(config?: properties);
}
export class PhysicalDeviceMultiviewFeatures  {
    constructor(config?: properties);
}
export class PhysicalDeviceMultiviewProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceVariablePointersFeatures  {
    constructor(config?: properties);
}
export class PhysicalDeviceVariablePointerFeatures  {
    constructor(config?: properties);
}
export class PhysicalDeviceProtectedMemoryFeatures  {
    constructor(config?: properties);
}
export class PhysicalDeviceProtectedMemoryProperties  {
    constructor(config?: properties);
}
export class DeviceQueueInfo2  {
    constructor(config?: properties);
}
export class ProtectedSubmitInfo  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionCreateInfo  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionInfo  {
    constructor(config?: properties);
}
export class BindImagePlaneMemoryInfo  {
    constructor(config?: properties);
}
export class ImagePlaneMemoryRequirementsInfo  {
    constructor(config?: properties);
}
export class PhysicalDeviceSamplerYcbcrConversionFeatures  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionImageFormatProperties  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateEntry  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateCreateInfo  {
    constructor(config?: properties);
}
export class ExternalMemoryProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalImageFormatInfo  {
    constructor(config?: properties);
}
export class ExternalImageFormatProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalBufferInfo  {
    constructor(config?: properties);
}
export class ExternalBufferProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceIDProperties  {
    constructor(config?: properties);
}
export class ExternalMemoryImageCreateInfo  {
    constructor(config?: properties);
}
export class ExternalMemoryBufferCreateInfo  {
    constructor(config?: properties);
}
export class ExportMemoryAllocateInfo  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalFenceInfo  {
    constructor(config?: properties);
}
export class ExternalFenceProperties  {
    constructor(config?: properties);
}
export class ExportFenceCreateInfo  {
    constructor(config?: properties);
}
export class ExportSemaphoreCreateInfo  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalSemaphoreInfo  {
    constructor(config?: properties);
}
export class ExternalSemaphoreProperties  {
    constructor(config?: properties);
}
export class PhysicalDeviceMaintenance3Properties  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutSupport  {
    constructor(config?: properties);
}
export class PhysicalDeviceShaderDrawParametersFeatures  {
    constructor(config?: properties);
}
export class PhysicalDeviceShaderDrawParameterFeatures  {
    constructor(config?: properties);
}
export class SurfaceKHR  {
    constructor(config?: properties);
}
export class ColorSpaceKHR  {
    constructor(config?: properties);
}
export class PresentModeKHR  {
    constructor(config?: properties);
}
export class SurfaceTransformFlagBitsKHR  {
    constructor(config?: properties);
}
export class SurfaceTransformFlagsKHR  {
    constructor(config?: properties);
}
export class CompositeAlphaFlagBitsKHR  {
    constructor(config?: properties);
}
export class CompositeAlphaFlagsKHR  {
    constructor(config?: properties);
}
export class SurfaceCapabilitiesKHR  {
    constructor(config?: properties);
}
export class SurfaceFormatKHR  {
    constructor(config?: properties);
}
export class SwapchainKHR  {
    constructor(config?: properties);
}
export class SwapchainCreateFlagBitsKHR  {
    constructor(config?: properties);
}
export class SwapchainCreateFlagsKHR  {
    constructor(config?: properties);
}
export class DeviceGroupPresentModeFlagBitsKHR  {
    constructor(config?: properties);
}
export class DeviceGroupPresentModeFlagsKHR  {
    constructor(config?: properties);
}
export class SwapchainCreateInfoKHR  {
    constructor(config?: properties);
}
export class PresentInfoKHR  {
    constructor(config?: properties);
}
export class ImageSwapchainCreateInfoKHR  {
    constructor(config?: properties);
}
export class BindImageMemorySwapchainInfoKHR  {
    constructor(config?: properties);
}
export class AcquireNextImageInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupPresentCapabilitiesKHR  {
    constructor(config?: properties);
}
export class DeviceGroupPresentInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupSwapchainCreateInfoKHR  {
    constructor(config?: properties);
}
export class DisplayKHR  {
    constructor(config?: properties);
}
export class DisplayModeKHR  {
    constructor(config?: properties);
}
export class DisplayPlaneAlphaFlagBitsKHR  {
    constructor(config?: properties);
}
export class DisplayPlaneAlphaFlagsKHR  {
    constructor(config?: properties);
}
export class DisplayModeCreateFlagsKHR  {
    constructor(config?: properties);
}
export class DisplaySurfaceCreateFlagsKHR  {
    constructor(config?: properties);
}
export class DisplayPropertiesKHR  {
    constructor(config?: properties);
}
export class DisplayModeParametersKHR  {
    constructor(config?: properties);
}
export class DisplayModePropertiesKHR  {
    constructor(config?: properties);
}
export class DisplayModeCreateInfoKHR  {
    constructor(config?: properties);
}
export class DisplayPlaneCapabilitiesKHR  {
    constructor(config?: properties);
}
export class DisplayPlanePropertiesKHR  {
    constructor(config?: properties);
}
export class DisplaySurfaceCreateInfoKHR  {
    constructor(config?: properties);
}
export class DisplayPresentInfoKHR  {
    constructor(config?: properties);
}
export class RenderPassMultiviewCreateInfoKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceMultiviewFeaturesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceMultiviewPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceFeatures2KHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceProperties2KHR  {
    constructor(config?: properties);
}
export class FormatProperties2KHR  {
    constructor(config?: properties);
}
export class ImageFormatProperties2KHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceImageFormatInfo2KHR  {
    constructor(config?: properties);
}
export class QueueFamilyProperties2KHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceMemoryProperties2KHR  {
    constructor(config?: properties);
}
export class SparseImageFormatProperties2KHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceSparseImageFormatInfo2KHR  {
    constructor(config?: properties);
}
export class PeerMemoryFeatureFlagsKHR  {
    constructor(config?: properties);
}
export class PeerMemoryFeatureFlagBitsKHR  {
    constructor(config?: properties);
}
export class MemoryAllocateFlagsKHR  {
    constructor(config?: properties);
}
export class MemoryAllocateFlagBitsKHR  {
    constructor(config?: properties);
}
export class MemoryAllocateFlagsInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupRenderPassBeginInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupCommandBufferBeginInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupSubmitInfoKHR  {
    constructor(config?: properties);
}
export class DeviceGroupBindSparseInfoKHR  {
    constructor(config?: properties);
}
export class BindBufferMemoryDeviceGroupInfoKHR  {
    constructor(config?: properties);
}
export class BindImageMemoryDeviceGroupInfoKHR  {
    constructor(config?: properties);
}
export class CommandPoolTrimFlagsKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceGroupPropertiesKHR  {
    constructor(config?: properties);
}
export class DeviceGroupDeviceCreateInfoKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalImageFormatInfoKHR  {
    constructor(config?: properties);
}
export class ExternalImageFormatPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalBufferInfoKHR  {
    constructor(config?: properties);
}
export class ExternalBufferPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceIDPropertiesKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryImageCreateInfoKHR  {
    constructor(config?: properties);
}
export class ExternalMemoryBufferCreateInfoKHR  {
    constructor(config?: properties);
}
export class ExportMemoryAllocateInfoKHR  {
    constructor(config?: properties);
}
export class ImportMemoryFdInfoKHR  {
    constructor(config?: properties);
}
export class MemoryFdPropertiesKHR  {
    constructor(config?: properties);
}
export class MemoryGetFdInfoKHR  {
    constructor(config?: properties);
}
export class ExternalSemaphoreHandleTypeFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalSemaphoreHandleTypeFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExternalSemaphoreFeatureFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalSemaphoreFeatureFlagBitsKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalSemaphoreInfoKHR  {
    constructor(config?: properties);
}
export class ExternalSemaphorePropertiesKHR  {
    constructor(config?: properties);
}
export class SemaphoreImportFlagsKHR  {
    constructor(config?: properties);
}
export class SemaphoreImportFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExportSemaphoreCreateInfoKHR  {
    constructor(config?: properties);
}
export class ImportSemaphoreFdInfoKHR  {
    constructor(config?: properties);
}
export class SemaphoreGetFdInfoKHR  {
    constructor(config?: properties);
}
export class PhysicalDevicePushDescriptorPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceFloat16Int8FeaturesKHR  {
    constructor(config?: properties);
}
export class PhysicalDevice16BitStorageFeaturesKHR  {
    constructor(config?: properties);
}
export class RectLayerKHR  {
    constructor(config?: properties);
}
export class PresentRegionKHR  {
    constructor(config?: properties);
}
export class PresentRegionsKHR  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateKHR  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateTypeKHR  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateCreateFlagsKHR  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateEntryKHR  {
    constructor(config?: properties);
}
export class DescriptorUpdateTemplateCreateInfoKHR  {
    constructor(config?: properties);
}
export class AttachmentDescription2KHR  {
    constructor(config?: properties);
}
export class AttachmentReference2KHR  {
    constructor(config?: properties);
}
export class SubpassDescription2KHR  {
    constructor(config?: properties);
}
export class SubpassDependency2KHR  {
    constructor(config?: properties);
}
export class RenderPassCreateInfo2KHR  {
    constructor(config?: properties);
}
export class SubpassBeginInfoKHR  {
    constructor(config?: properties);
}
export class SubpassEndInfoKHR  {
    constructor(config?: properties);
}
export class SharedPresentSurfaceCapabilitiesKHR  {
    constructor(config?: properties);
}
export class ExternalFenceHandleTypeFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalFenceHandleTypeFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExternalFenceFeatureFlagsKHR  {
    constructor(config?: properties);
}
export class ExternalFenceFeatureFlagBitsKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalFenceInfoKHR  {
    constructor(config?: properties);
}
export class ExternalFencePropertiesKHR  {
    constructor(config?: properties);
}
export class FenceImportFlagsKHR  {
    constructor(config?: properties);
}
export class FenceImportFlagBitsKHR  {
    constructor(config?: properties);
}
export class ExportFenceCreateInfoKHR  {
    constructor(config?: properties);
}
export class ImportFenceFdInfoKHR  {
    constructor(config?: properties);
}
export class FenceGetFdInfoKHR  {
    constructor(config?: properties);
}
export class PointClippingBehaviorKHR  {
    constructor(config?: properties);
}
export class TessellationDomainOriginKHR  {
    constructor(config?: properties);
}
export class PhysicalDevicePointClippingPropertiesKHR  {
    constructor(config?: properties);
}
export class RenderPassInputAttachmentAspectCreateInfoKHR  {
    constructor(config?: properties);
}
export class InputAttachmentAspectReferenceKHR  {
    constructor(config?: properties);
}
export class ImageViewUsageCreateInfoKHR  {
    constructor(config?: properties);
}
export class PipelineTessellationDomainOriginStateCreateInfoKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceSurfaceInfo2KHR  {
    constructor(config?: properties);
}
export class SurfaceCapabilities2KHR  {
    constructor(config?: properties);
}
export class SurfaceFormat2KHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceVariablePointerFeaturesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceVariablePointersFeaturesKHR  {
    constructor(config?: properties);
}
export class DisplayProperties2KHR  {
    constructor(config?: properties);
}
export class DisplayPlaneProperties2KHR  {
    constructor(config?: properties);
}
export class DisplayModeProperties2KHR  {
    constructor(config?: properties);
}
export class DisplayPlaneInfo2KHR  {
    constructor(config?: properties);
}
export class DisplayPlaneCapabilities2KHR  {
    constructor(config?: properties);
}
export class MemoryDedicatedRequirementsKHR  {
    constructor(config?: properties);
}
export class MemoryDedicatedAllocateInfoKHR  {
    constructor(config?: properties);
}
export class BufferMemoryRequirementsInfo2KHR  {
    constructor(config?: properties);
}
export class ImageMemoryRequirementsInfo2KHR  {
    constructor(config?: properties);
}
export class ImageSparseMemoryRequirementsInfo2KHR  {
    constructor(config?: properties);
}
export class SparseImageMemoryRequirements2KHR  {
    constructor(config?: properties);
}
export class ImageFormatListCreateInfoKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrModelConversionKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrRangeKHR  {
    constructor(config?: properties);
}
export class ChromaLocationKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionCreateInfoKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionInfoKHR  {
    constructor(config?: properties);
}
export class BindImagePlaneMemoryInfoKHR  {
    constructor(config?: properties);
}
export class ImagePlaneMemoryRequirementsInfoKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR  {
    constructor(config?: properties);
}
export class SamplerYcbcrConversionImageFormatPropertiesKHR  {
    constructor(config?: properties);
}
export class BindBufferMemoryInfoKHR  {
    constructor(config?: properties);
}
export class BindImageMemoryInfoKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceMaintenance3PropertiesKHR  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutSupportKHR  {
    constructor(config?: properties);
}
export class PhysicalDevice8BitStorageFeaturesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceShaderAtomicInt64FeaturesKHR  {
    constructor(config?: properties);
}
export class DriverIdKHR  {
    constructor(config?: properties);
}
export class ConformanceVersionKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceDriverPropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceFloatControlsPropertiesKHR  {
    constructor(config?: properties);
}
export class ResolveModeFlagBitsKHR  {
    constructor(config?: properties);
}
export class ResolveModeFlagsKHR  {
    constructor(config?: properties);
}
export class SubpassDescriptionDepthStencilResolveKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceDepthStencilResolvePropertiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceVulkanMemoryModelFeaturesKHR  {
    constructor(config?: properties);
}
export class SurfaceProtectedCapabilitiesKHR  {
    constructor(config?: properties);
}
export class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR  {
    constructor(config?: properties);
}
export class DebugReportCallbackEXT  {
    constructor(config?: properties);
}
export class DebugReportObjectTypeEXT  {
    constructor(config?: properties);
}
export class DebugReportFlagBitsEXT  {
    constructor(config?: properties);
}
export class DebugReportFlagsEXT  {
    constructor(config?: properties);
}
export class DebugReportCallbackCreateInfoEXT  {
    constructor(config?: properties);
}
export class RasterizationOrderAMD  {
    constructor(config?: properties);
}
export class PipelineRasterizationStateRasterizationOrderAMD  {
    constructor(config?: properties);
}
export class DebugMarkerObjectNameInfoEXT  {
    constructor(config?: properties);
}
export class DebugMarkerObjectTagInfoEXT  {
    constructor(config?: properties);
}
export class DebugMarkerMarkerInfoEXT  {
    constructor(config?: properties);
}
export class DedicatedAllocationImageCreateInfoNV  {
    constructor(config?: properties);
}
export class DedicatedAllocationBufferCreateInfoNV  {
    constructor(config?: properties);
}
export class DedicatedAllocationMemoryAllocateInfoNV  {
    constructor(config?: properties);
}
export class PipelineRasterizationStateStreamCreateFlagsEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceTransformFeedbackFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceTransformFeedbackPropertiesEXT  {
    constructor(config?: properties);
}
export class PipelineRasterizationStateStreamCreateInfoEXT  {
    constructor(config?: properties);
}
export class ImageViewHandleInfoNVX  {
    constructor(config?: properties);
}
export class TextureLODGatherFormatPropertiesAMD  {
    constructor(config?: properties);
}
export class ShaderInfoTypeAMD  {
    constructor(config?: properties);
}
export class ShaderResourceUsageAMD  {
    constructor(config?: properties);
}
export class ShaderStatisticsInfoAMD  {
    constructor(config?: properties);
}
export class PhysicalDeviceCornerSampledImageFeaturesNV  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlagBitsNV  {
    constructor(config?: properties);
}
export class ExternalMemoryHandleTypeFlagsNV  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlagBitsNV  {
    constructor(config?: properties);
}
export class ExternalMemoryFeatureFlagsNV  {
    constructor(config?: properties);
}
export class ExternalImageFormatPropertiesNV  {
    constructor(config?: properties);
}
export class ExternalMemoryImageCreateInfoNV  {
    constructor(config?: properties);
}
export class ExportMemoryAllocateInfoNV  {
    constructor(config?: properties);
}
export class ValidationCheckEXT  {
    constructor(config?: properties);
}
export class ValidationFlagsEXT  {
    constructor(config?: properties);
}
export class ImageViewASTCDecodeModeEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceASTCDecodeFeaturesEXT  {
    constructor(config?: properties);
}
export class ConditionalRenderingFlagBitsEXT  {
    constructor(config?: properties);
}
export class ConditionalRenderingFlagsEXT  {
    constructor(config?: properties);
}
export class ConditionalRenderingBeginInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceConditionalRenderingFeaturesEXT  {
    constructor(config?: properties);
}
export class CommandBufferInheritanceConditionalRenderingInfoEXT  {
    constructor(config?: properties);
}
export class ObjectTableNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsLayoutNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsTokenTypeNVX  {
    constructor(config?: properties);
}
export class ObjectEntryTypeNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsLayoutUsageFlagBitsNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsLayoutUsageFlagsNVX  {
    constructor(config?: properties);
}
export class ObjectEntryUsageFlagBitsNVX  {
    constructor(config?: properties);
}
export class ObjectEntryUsageFlagsNVX  {
    constructor(config?: properties);
}
export class DeviceGeneratedCommandsFeaturesNVX  {
    constructor(config?: properties);
}
export class DeviceGeneratedCommandsLimitsNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsTokenNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsLayoutTokenNVX  {
    constructor(config?: properties);
}
export class IndirectCommandsLayoutCreateInfoNVX  {
    constructor(config?: properties);
}
export class CmdProcessCommandsInfoNVX  {
    constructor(config?: properties);
}
export class CmdReserveSpaceForCommandsInfoNVX  {
    constructor(config?: properties);
}
export class ObjectTableCreateInfoNVX  {
    constructor(config?: properties);
}
export class ObjectTableEntryNVX  {
    constructor(config?: properties);
}
export class ObjectTablePipelineEntryNVX  {
    constructor(config?: properties);
}
export class ObjectTableDescriptorSetEntryNVX  {
    constructor(config?: properties);
}
export class ObjectTableVertexBufferEntryNVX  {
    constructor(config?: properties);
}
export class ObjectTableIndexBufferEntryNVX  {
    constructor(config?: properties);
}
export class ObjectTablePushConstantEntryNVX  {
    constructor(config?: properties);
}
export class ViewportWScalingNV  {
    constructor(config?: properties);
}
export class PipelineViewportWScalingStateCreateInfoNV  {
    constructor(config?: properties);
}
export class SurfaceCounterFlagBitsEXT  {
    constructor(config?: properties);
}
export class SurfaceCounterFlagsEXT  {
    constructor(config?: properties);
}
export class SurfaceCapabilities2EXT  {
    constructor(config?: properties);
}
export class DisplayPowerStateEXT  {
    constructor(config?: properties);
}
export class DeviceEventTypeEXT  {
    constructor(config?: properties);
}
export class DisplayEventTypeEXT  {
    constructor(config?: properties);
}
export class DisplayPowerInfoEXT  {
    constructor(config?: properties);
}
export class DeviceEventInfoEXT  {
    constructor(config?: properties);
}
export class DisplayEventInfoEXT  {
    constructor(config?: properties);
}
export class SwapchainCounterCreateInfoEXT  {
    constructor(config?: properties);
}
export class RefreshCycleDurationGOOGLE  {
    constructor(config?: properties);
}
export class PastPresentationTimingGOOGLE  {
    constructor(config?: properties);
}
export class PresentTimeGOOGLE  {
    constructor(config?: properties);
}
export class PresentTimesInfoGOOGLE  {
    constructor(config?: properties);
}
export class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX  {
    constructor(config?: properties);
}
export class ViewportCoordinateSwizzleNV  {
    constructor(config?: properties);
}
export class PipelineViewportSwizzleStateCreateFlagsNV  {
    constructor(config?: properties);
}
export class ViewportSwizzleNV  {
    constructor(config?: properties);
}
export class PipelineViewportSwizzleStateCreateInfoNV  {
    constructor(config?: properties);
}
export class DiscardRectangleModeEXT  {
    constructor(config?: properties);
}
export class PipelineDiscardRectangleStateCreateFlagsEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceDiscardRectanglePropertiesEXT  {
    constructor(config?: properties);
}
export class PipelineDiscardRectangleStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class ConservativeRasterizationModeEXT  {
    constructor(config?: properties);
}
export class PipelineRasterizationConservativeStateCreateFlagsEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceConservativeRasterizationPropertiesEXT  {
    constructor(config?: properties);
}
export class PipelineRasterizationConservativeStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class PipelineRasterizationDepthClipStateCreateFlagsEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceDepthClipEnableFeaturesEXT  {
    constructor(config?: properties);
}
export class PipelineRasterizationDepthClipStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class XYColorEXT  {
    constructor(config?: properties);
}
export class HdrMetadataEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessengerEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessengerCallbackDataFlagsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessengerCreateFlagsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessageSeverityFlagBitsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessageSeverityFlagsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessageTypeFlagBitsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessageTypeFlagsEXT  {
    constructor(config?: properties);
}
export class DebugUtilsObjectNameInfoEXT  {
    constructor(config?: properties);
}
export class DebugUtilsObjectTagInfoEXT  {
    constructor(config?: properties);
}
export class DebugUtilsLabelEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessengerCallbackDataEXT  {
    constructor(config?: properties);
}
export class DebugUtilsMessengerCreateInfoEXT  {
    constructor(config?: properties);
}
export class SamplerReductionModeEXT  {
    constructor(config?: properties);
}
export class SamplerReductionModeCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceInlineUniformBlockFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceInlineUniformBlockPropertiesEXT  {
    constructor(config?: properties);
}
export class WriteDescriptorSetInlineUniformBlockEXT  {
    constructor(config?: properties);
}
export class DescriptorPoolInlineUniformBlockCreateInfoEXT  {
    constructor(config?: properties);
}
export class SampleLocationEXT  {
    constructor(config?: properties);
}
export class SampleLocationsInfoEXT  {
    constructor(config?: properties);
}
export class AttachmentSampleLocationsEXT  {
    constructor(config?: properties);
}
export class SubpassSampleLocationsEXT  {
    constructor(config?: properties);
}
export class RenderPassSampleLocationsBeginInfoEXT  {
    constructor(config?: properties);
}
export class PipelineSampleLocationsStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceSampleLocationsPropertiesEXT  {
    constructor(config?: properties);
}
export class MultisamplePropertiesEXT  {
    constructor(config?: properties);
}
export class BlendOverlapEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceBlendOperationAdvancedFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceBlendOperationAdvancedPropertiesEXT  {
    constructor(config?: properties);
}
export class PipelineColorBlendAdvancedStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class PipelineCoverageToColorStateCreateFlagsNV  {
    constructor(config?: properties);
}
export class PipelineCoverageToColorStateCreateInfoNV  {
    constructor(config?: properties);
}
export class CoverageModulationModeNV  {
    constructor(config?: properties);
}
export class PipelineCoverageModulationStateCreateFlagsNV  {
    constructor(config?: properties);
}
export class PipelineCoverageModulationStateCreateInfoNV  {
    constructor(config?: properties);
}
export class DrmFormatModifierPropertiesEXT  {
    constructor(config?: properties);
}
export class DrmFormatModifierPropertiesListEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceImageDrmFormatModifierInfoEXT  {
    constructor(config?: properties);
}
export class ImageDrmFormatModifierListCreateInfoEXT  {
    constructor(config?: properties);
}
export class ImageDrmFormatModifierExplicitCreateInfoEXT  {
    constructor(config?: properties);
}
export class ImageDrmFormatModifierPropertiesEXT  {
    constructor(config?: properties);
}
export class ValidationCacheEXT  {
    constructor(config?: properties);
}
export class ValidationCacheHeaderVersionEXT  {
    constructor(config?: properties);
}
export class ValidationCacheCreateFlagsEXT  {
    constructor(config?: properties);
}
export class ValidationCacheCreateInfoEXT  {
    constructor(config?: properties);
}
export class ShaderModuleValidationCacheCreateInfoEXT  {
    constructor(config?: properties);
}
export class DescriptorBindingFlagBitsEXT  {
    constructor(config?: properties);
}
export class DescriptorBindingFlagsEXT  {
    constructor(config?: properties);
}
export class DescriptorSetLayoutBindingFlagsCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceDescriptorIndexingFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceDescriptorIndexingPropertiesEXT  {
    constructor(config?: properties);
}
export class DescriptorSetVariableDescriptorCountAllocateInfoEXT  {
    constructor(config?: properties);
}
export class DescriptorSetVariableDescriptorCountLayoutSupportEXT  {
    constructor(config?: properties);
}
export class ShadingRatePaletteEntryNV  {
    constructor(config?: properties);
}
export class CoarseSampleOrderTypeNV  {
    constructor(config?: properties);
}
export class ShadingRatePaletteNV  {
    constructor(config?: properties);
}
export class PipelineViewportShadingRateImageStateCreateInfoNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceShadingRateImageFeaturesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceShadingRateImagePropertiesNV  {
    constructor(config?: properties);
}
export class CoarseSampleLocationNV  {
    constructor(config?: properties);
}
export class CoarseSampleOrderCustomNV  {
    constructor(config?: properties);
}
export class PipelineViewportCoarseSampleOrderStateCreateInfoNV  {
    constructor(config?: properties);
}
export class AccelerationStructureNV  {
    constructor(config?: properties);
}
export class RayTracingShaderGroupTypeNV  {
    constructor(config?: properties);
}
export class GeometryTypeNV  {
    constructor(config?: properties);
}
export class AccelerationStructureTypeNV  {
    constructor(config?: properties);
}
export class CopyAccelerationStructureModeNV  {
    constructor(config?: properties);
}
export class AccelerationStructureMemoryRequirementsTypeNV  {
    constructor(config?: properties);
}
export class GeometryFlagBitsNV  {
    constructor(config?: properties);
}
export class GeometryFlagsNV  {
    constructor(config?: properties);
}
export class GeometryInstanceFlagBitsNV  {
    constructor(config?: properties);
}
export class GeometryInstanceFlagsNV  {
    constructor(config?: properties);
}
export class BuildAccelerationStructureFlagBitsNV  {
    constructor(config?: properties);
}
export class BuildAccelerationStructureFlagsNV  {
    constructor(config?: properties);
}
export class RayTracingShaderGroupCreateInfoNV  {
    constructor(config?: properties);
}
export class RayTracingPipelineCreateInfoNV  {
    constructor(config?: properties);
}
export class GeometryTrianglesNV  {
    constructor(config?: properties);
}
export class GeometryAABBNV  {
    constructor(config?: properties);
}
export class GeometryDataNV  {
    constructor(config?: properties);
}
export class GeometryNV  {
    constructor(config?: properties);
}
export class AccelerationStructureInfoNV  {
    constructor(config?: properties);
}
export class AccelerationStructureCreateInfoNV  {
    constructor(config?: properties);
}
export class BindAccelerationStructureMemoryInfoNV  {
    constructor(config?: properties);
}
export class WriteDescriptorSetAccelerationStructureNV  {
    constructor(config?: properties);
}
export class AccelerationStructureMemoryRequirementsInfoNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceRayTracingPropertiesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceRepresentativeFragmentTestFeaturesNV  {
    constructor(config?: properties);
}
export class PipelineRepresentativeFragmentTestStateCreateInfoNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceImageViewImageFormatInfoEXT  {
    constructor(config?: properties);
}
export class FilterCubicImageViewImageFormatPropertiesEXT  {
    constructor(config?: properties);
}
export class QueueGlobalPriorityEXT  {
    constructor(config?: properties);
}
export class DeviceQueueGlobalPriorityCreateInfoEXT  {
    constructor(config?: properties);
}
export class ImportMemoryHostPointerInfoEXT  {
    constructor(config?: properties);
}
export class MemoryHostPointerPropertiesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceExternalMemoryHostPropertiesEXT  {
    constructor(config?: properties);
}
export class TimeDomainEXT  {
    constructor(config?: properties);
}
export class CalibratedTimestampInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceShaderCorePropertiesAMD  {
    constructor(config?: properties);
}
export class MemoryOverallocationBehaviorAMD  {
    constructor(config?: properties);
}
export class DeviceMemoryOverallocationCreateInfoAMD  {
    constructor(config?: properties);
}
export class PhysicalDeviceVertexAttributeDivisorPropertiesEXT  {
    constructor(config?: properties);
}
export class VertexInputBindingDivisorDescriptionEXT  {
    constructor(config?: properties);
}
export class PipelineVertexInputDivisorStateCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceVertexAttributeDivisorFeaturesEXT  {
    constructor(config?: properties);
}
export class PipelineCreationFeedbackFlagBitsEXT  {
    constructor(config?: properties);
}
export class PipelineCreationFeedbackFlagsEXT  {
    constructor(config?: properties);
}
export class PipelineCreationFeedbackEXT  {
    constructor(config?: properties);
}
export class PipelineCreationFeedbackCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceComputeShaderDerivativesFeaturesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceMeshShaderFeaturesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceMeshShaderPropertiesNV  {
    constructor(config?: properties);
}
export class DrawMeshTasksIndirectCommandNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceFragmentShaderBarycentricFeaturesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceShaderImageFootprintFeaturesNV  {
    constructor(config?: properties);
}
export class PipelineViewportExclusiveScissorStateCreateInfoNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceExclusiveScissorFeaturesNV  {
    constructor(config?: properties);
}
export class QueueFamilyCheckpointPropertiesNV  {
    constructor(config?: properties);
}
export class CheckpointDataNV  {
    constructor(config?: properties);
}
export class PhysicalDevicePCIBusInfoPropertiesEXT  {
    constructor(config?: properties);
}
export class DisplayNativeHdrSurfaceCapabilitiesAMD  {
    constructor(config?: properties);
}
export class SwapchainDisplayNativeHdrCreateInfoAMD  {
    constructor(config?: properties);
}
export class PhysicalDeviceFragmentDensityMapFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceFragmentDensityMapPropertiesEXT  {
    constructor(config?: properties);
}
export class RenderPassFragmentDensityMapCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceScalarBlockLayoutFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceMemoryBudgetPropertiesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceMemoryPriorityFeaturesEXT  {
    constructor(config?: properties);
}
export class MemoryPriorityAllocateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV  {
    constructor(config?: properties);
}
export class DeviceAddress  {
    constructor(config?: properties);
}
export class PhysicalDeviceBufferDeviceAddressFeaturesEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceBufferAddressFeaturesEXT  {
    constructor(config?: properties);
}
export class BufferDeviceAddressInfoEXT  {
    constructor(config?: properties);
}
export class BufferDeviceAddressCreateInfoEXT  {
    constructor(config?: properties);
}
export class ImageStencilUsageCreateInfoEXT  {
    constructor(config?: properties);
}
export class ValidationFeatureEnableEXT  {
    constructor(config?: properties);
}
export class ValidationFeatureDisableEXT  {
    constructor(config?: properties);
}
export class ValidationFeaturesEXT  {
    constructor(config?: properties);
}
export class ComponentTypeNV  {
    constructor(config?: properties);
}
export class ScopeNV  {
    constructor(config?: properties);
}
export class CooperativeMatrixPropertiesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceCooperativeMatrixFeaturesNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceCooperativeMatrixPropertiesNV  {
    constructor(config?: properties);
}
export class CoverageReductionModeNV  {
    constructor(config?: properties);
}
export class PipelineCoverageReductionStateCreateFlagsNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceCoverageReductionModeFeaturesNV  {
    constructor(config?: properties);
}
export class PipelineCoverageReductionStateCreateInfoNV  {
    constructor(config?: properties);
}
export class FramebufferMixedSamplesCombinationNV  {
    constructor(config?: properties);
}
export class PhysicalDeviceYcbcrImageArraysFeaturesEXT  {
    constructor(config?: properties);
}
export class HeadlessSurfaceCreateFlagsEXT  {
    constructor(config?: properties);
}
export class HeadlessSurfaceCreateInfoEXT  {
    constructor(config?: properties);
}
export class PhysicalDeviceHostQueryResetFeaturesEXT  {
    constructor(config?: properties);
}