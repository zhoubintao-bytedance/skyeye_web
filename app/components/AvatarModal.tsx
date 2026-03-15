"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer ${className || ""}`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[#1a1a1a] border border-dashed border-[#b5e853] p-4 rounded max-w-3xl w-[90vw] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-[#888] hover:text-[#b5e853] text-2xl cursor-pointer bg-transparent border-none font-mono"
            >
              &times;
            </button>
            <img
              src={src}
              alt={alt}
              className="w-full max-h-[70vh] object-contain rounded"
            />
            {(name || title) && (
              <div className="text-center mt-3">
                {name && <p className="text-[#b5e853] text-sm font-bold">{name}</p>}
                {title && <p className="text-[#888] text-xs mt-1">{title}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
