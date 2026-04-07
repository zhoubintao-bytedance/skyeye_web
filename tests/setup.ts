import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

/* 测试环境把 next/image 降级成普通 img，避免运行时依赖影响组件行为断言。 */
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | { src: string };
    alt: string;
    [key: string]: unknown;
  }) =>
    React.createElement("img", {
      src: typeof src === "string" ? src : src.src,
      alt,
      ...props,
    }),
}));
