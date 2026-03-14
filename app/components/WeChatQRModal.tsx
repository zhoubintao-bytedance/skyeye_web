"use client";

import { useState } from "react";

export default function WeChatQRModal({ qrSrc }: { qrSrc: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hacker-btn no-underline text-sm flex items-center gap-2 px-3 py-2 cursor-pointer bg-transparent"
        title="微信"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#07C160">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05a6.127 6.127 0 0 1-.253-1.726c0-3.573 3.26-6.467 7.045-6.467.3 0 .599.034.889.058C16.558 4.59 13.026 2.188 8.691 2.188zm-2.97 4.47a1.123 1.123 0 1 1 0-2.246 1.123 1.123 0 0 1 0 2.246zm5.83 0a1.123 1.123 0 1 1 0-2.246 1.123 1.123 0 0 1 0 2.246zm11.614 6.837c0-3.18-3.189-5.755-6.87-5.755-3.865 0-6.87 2.575-6.87 5.755 0 3.18 3.005 5.755 6.87 5.755.746 0 1.457-.109 2.127-.287a.643.643 0 0 1 .536.074l1.428.837a.245.245 0 0 0 .126.041.22.22 0 0 0 .218-.221c0-.054-.021-.108-.036-.16l-.292-1.11a.444.444 0 0 1 .159-.498c1.394-1.052 2.604-2.776 2.604-4.43zm-9.188-1.03a.844.844 0 1 1 0-1.689.844.844 0 0 1 0 1.689zm4.636 0a.844.844 0 1 1 0-1.689.844.844 0 0 1 0 1.689z" />
        </svg>
        微信
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[#1a1a1a] border border-dashed border-[#b5e853] p-6 rounded max-w-sm mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-[#888] hover:text-[#b5e853] text-2xl cursor-pointer bg-transparent border-none font-mono"
            >
              &times;
            </button>
            <p className="text-[#b5e853] text-sm mb-3 text-center">请CEO喝杯咖啡</p>
            <img src={qrSrc} alt="微信二维码" className="w-64 h-64 object-contain mx-auto rounded" />
          </div>
        </div>
      )}
    </>
  );
}
