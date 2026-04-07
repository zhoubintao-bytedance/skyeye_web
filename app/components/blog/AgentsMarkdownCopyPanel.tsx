"use client";

import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface AgentsMarkdownCopyPanelProps {
  markdown: string;
}

/* 在 Clipboard API 不可用时，回退到隐藏文本域复制，尽量保证一键复制可用。 */
function fallbackCopyText(text: string): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

/* 统一封装复制逻辑，优先使用现代 API，失败后再走兼容兜底。 */
async function copyMarkdownText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    return fallbackCopyText(text);
  }

  return fallbackCopyText(text);
}

/* AGENTS 文章专用复制面板，提供 VS Code 风格的黑底框与右上角复制按钮。 */
export default function AgentsMarkdownCopyPanel({
  markdown,
}: AgentsMarkdownCopyPanelProps) {
  const [isCopied, setIsCopied] = useState(false);
  const markdownLines = markdown.split("\n");

  /* 成功态只短暂保留，避免按钮一直停在“已复制”影响下次操作判断。 */
  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isCopied]);

  /* 点击按钮后复制整段 Markdown 原文，并更新局部成功反馈。 */
  async function handleCopyClick() {
    const copied = await copyMarkdownText(markdown);

    if (copied) {
      setIsCopied(true);
    }
  }

  const buttonLabel = isCopied ? "copied AGENTS.md 文本" : "copy AGENTS.md 文本";

  return (
    <section className="blog-article-panel agents-copy-panel mt-10 overflow-hidden">
      <div className="border-b border-[rgba(118,185,0,0.2)] bg-[linear-gradient(180deg,rgba(10,14,10,0.98)_0%,rgba(5,7,5,0.98)_100%)] px-4 py-3 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex border border-[rgba(118,185,0,0.55)] px-2 py-1 text-[0.68rem] font-bold tracking-[0.22em] text-[#76b900] uppercase">
              AGENTS.md
            </span>
            <p className="text-[0.78rem] leading-[1.6] text-[#a7a7a7]">
              一键复制后可直接粘贴到本地规则文件。
            </p>
          </div>

          <button
            type="button"
            aria-label={buttonLabel}
            onClick={handleCopyClick}
            className="inline-flex items-center justify-center gap-1 border border-[rgba(94,94,94,0.95)] bg-black/40 px-2 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-[#76b900] hover:text-[#76b900] focus:outline-none focus:ring-2 focus:ring-[#76b900] focus:ring-offset-2 focus:ring-offset-black"
          >
            {isCopied ? (
              <CheckIcon className="h-3 w-3" aria-hidden="true" />
            ) : (
              <DocumentDuplicateIcon className="h-3 w-3" aria-hidden="true" />
            )}
            <span>{isCopied ? "copied" : "copy"}</span>
          </button>
        </div>
      </div>

      <div className="agents-copy-editor relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(118,185,0,0.7)_50%,transparent_100%)]" />
        <div className="scrollbar-fine max-h-[22rem] overflow-auto px-4 py-4 md:px-6 md:py-5">
          <div className="agents-copy-code min-w-max font-mono text-[0.84rem] leading-[1.72] text-[#d7dad5] [tab-size:2]">
            {markdownLines.map((line, index) => (
              <div key={`line-${index + 1}`} className="agents-copy-code-row">
                <span className="agents-copy-line-number" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="agents-copy-line-text">{line || "\u00A0"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
