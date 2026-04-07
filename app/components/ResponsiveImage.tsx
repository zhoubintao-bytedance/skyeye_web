"use client";

import Image from "next/image";

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/* 站点关键图片统一通过稳定尺寸输出，减少 CLS 并集中控制加载语义。 */
export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className || ""}
    />
  );
}
