"use client";

import { useRef, useState } from "react";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import useAccessibleDialog from "@/app/components/useAccessibleDialog";

export interface ImagePreviewModalProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageClassName?: string;
  buttonClassName?: string;
  title?: string;
  subtitle?: string;
  sizes?: string;
  priority?: boolean;
}

/* 通用图片预览组件统一服务头像、证照和产品图，避免站内弹窗样式分裂。 */
export default function ImagePreviewModal({
  src,
  alt,
  width,
  height,
  imageClassName,
  buttonClassName,
  title,
  subtitle,
  sizes,
  priority = false,
}: ImagePreviewModalProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useAccessibleDialog({
    open,
    onClose: () => setOpen(false),
    triggerRef,
    initialFocusRef: closeButtonRef,
  });

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`放大查看${alt}`}
        className={`block cursor-zoom-in bg-transparent p-0 text-left ${buttonClassName || ""}`}
      >
        <ResponsiveImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={imageClassName || ""}
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={title || alt}
            className="relative mx-4 w-[92vw] max-w-5xl border border-[rgba(118,185,0,0.45)] bg-[#050505] p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)] md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="关闭图片预览"
              className="absolute top-2 right-3 cursor-pointer border-none bg-transparent text-2xl text-[#898989] hover:text-[#76b900]"
            >
              &times;
            </button>

            <ResponsiveImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="92vw"
              className="max-h-[75vh] h-auto w-full object-contain"
            />

            {title || subtitle ? (
              <div className="mt-3 text-center">
                {title ? <p className="text-sm font-bold text-[#76b900]">{title}</p> : null}
                {subtitle ? <p className="mt-1 text-xs text-[#a7a7a7]">{subtitle}</p> : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
