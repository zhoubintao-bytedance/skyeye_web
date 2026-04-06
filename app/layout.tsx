import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/site/SiteFooter";
import SiteHeader from "./components/site/SiteHeader";

export const metadata: Metadata = {
  title: "天眼投资北京有限公司",
  description: "让每一次投资，都更有把握。天眼以 AI Agent 与量化验证为底座，提供更可复核的研究与决策支持。",
};

/* 根布局统一挂载新的站点外壳，移除旧版侧边导航和黑客风头尾。 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-black text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
