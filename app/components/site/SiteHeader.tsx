"use client";

import { useState } from "react";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import { companyProfile, homepageNavItems, siteBranding } from "@/app/content/homepage";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* 站点头部统一承载品牌与主导航，供首页和博客页面复用。 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(118,185,0,0.28)] bg-[rgba(0,0,0,0.96)] text-white backdrop-blur-sm">
      <div className="mx-auto flex w-[92%] max-w-[1200px] items-center justify-between gap-8 py-5">
        <a href={`${basePath}/#hero`} className="flex items-center gap-3 no-underline">
          <ResponsiveImage
            src={`${basePath}/imgs/skyeye_logo.png`}
            alt="天眼投资 Logo"
            width={siteBranding.logoWidth}
            height={siteBranding.logoHeight}
            sizes="176px"
            priority
            className="h-10 w-auto object-contain md:h-11"
          />
          <div>
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
              SKYEYE RESEARCH
            </p>
            <p className="m-0 text-[0.98rem] font-bold tracking-[-0.02em] text-white">
              {companyProfile.name}
            </p>
          </div>
        </a>

        <nav aria-label="主导航" className="hidden items-center gap-6 lg:flex">
          {homepageNavItems.map((item) => (
            <a
              key={item.id}
              href={`${basePath}/${item.href}`}
              className="text-[0.92rem] font-bold tracking-[0.04em] text-white no-underline transition-colors hover:text-[#76b900]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${basePath}/blog`}
            className="border border-[#76b900] px-3 py-2 text-[0.92rem] font-bold tracking-[0.04em] text-white no-underline transition-colors hover:bg-[#76b900] hover:text-black"
          >
            博客
          </a>
        </nav>

        <button
          type="button"
          aria-label="切换导航"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex items-center border border-[#76b900] px-3 py-2 text-sm font-bold tracking-[0.06em] text-white lg:hidden"
        >
          MENU
        </button>
      </div>

      {open ? (
        <div className="border-t border-[rgba(94,94,94,0.95)] lg:hidden">
          <nav aria-label="移动导航" className="mx-auto grid w-[92%] max-w-[1200px] gap-2 py-4">
            {homepageNavItems.map((item) => (
              <a
                key={item.id}
                href={`${basePath}/${item.href}`}
                onClick={() => setOpen(false)}
                className="border border-[rgba(94,94,94,0.95)] px-4 py-3 text-sm font-bold tracking-[0.04em] text-white no-underline"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`${basePath}/blog`}
              onClick={() => setOpen(false)}
              className="border border-[#76b900] px-4 py-3 text-sm font-bold tracking-[0.04em] text-white no-underline"
            >
              博客
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
