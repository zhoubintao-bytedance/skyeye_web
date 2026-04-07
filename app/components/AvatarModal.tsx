"use client";

import ImagePreviewModal from "@/app/components/ImagePreviewModal";

/* 头像与证照沿用通用图片预览，只保留旧组件名以兼容现有调用点。 */
export default function AvatarModal({
  src,
  alt,
  name,
  title,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  name?: string;
  title?: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <ImagePreviewModal
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={name}
      subtitle={title}
      imageClassName={className}
      buttonClassName="w-full"
    />
  );
}
