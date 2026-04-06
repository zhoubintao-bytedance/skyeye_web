"use client";

import ImagePreviewModal from "@/app/components/ImagePreviewModal";

/* 头像与证照沿用通用图片预览，只保留旧组件名以兼容现有调用点。 */
export default function AvatarModal({
  src,
  alt,
  name,
  title,
  className,
}: {
  src: string;
  alt: string;
  name?: string;
  title?: string;
  className?: string;
}) {
  return (
    <ImagePreviewModal
      src={src}
      alt={alt}
      title={name}
      subtitle={title}
      imageClassName={className}
      buttonClassName="w-full"
    />
  );
}
