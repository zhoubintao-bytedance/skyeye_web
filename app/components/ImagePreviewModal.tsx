"use client";

import { useState } from "react";

export interface ImagePreviewModalProps {
  src: string;
  alt: string;
  imageClassName?: string;
  buttonClassName?: string;
  title?: string;
  subtitle?: string;
}

/* 通用图片预览组件统一服务头像、证照和产品图，避免站内弹窗样式分裂。 */
export default function ImagePreviewModal({
  src,
  alt,
  imageClassName,
  buttonClassName,
  title,
  subtitle,
}: ImagePreviewModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`放大查看${alt}`}
        className={`block cursor-zoom-in bg-transparent p-0 text-left ${buttonClassName || ""}`}
      >
        <img src={src} alt={alt} className={imageClassName || ""} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-4 w-[92vw] max-w-5xl border border-[rgba(118,185,0,0.45)] bg-[#050505] p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)] md:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="关闭图片预览"
              className="absolute top-2 right-3 cursor-pointer border-none bg-transparent text-2xl text-[#898989] hover:text-[#76b900]"
            >
              &times;
            </button>

            <img src={src} alt={alt} className="max-h-[75vh] w-full object-contain" />

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
