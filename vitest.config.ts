import path from "node:path";
import { defineConfig } from "vitest/config";

/* 配置测试运行环境与路径别名，保证组件测试能复用应用内导入方式。 */
export default defineConfig({
  test: {
    // 只执行仓库正式测试目录，避免误扫本地产生的镜像工作区。
    environment: "happy-dom",
    globals: true,
    include: ["tests/**/*.{test,spec}.{ts,tsx}"],
    exclude: [".buildcheck/**", ".superpowers/**"],
    setupFiles: ["./tests/setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
