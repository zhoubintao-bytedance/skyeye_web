import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // 忽略本地调试和工具生成目录，避免将镜像工作区与产物纳入 lint。
    ".buildcheck/**",
    ".superpowers/**",
    ".codex",
  ]),
]);

export default eslintConfig;
