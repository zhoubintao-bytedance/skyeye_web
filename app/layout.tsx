import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";

export const metadata: Metadata = {
  title: "天眼投资北京有限公司",
  description: "基于Agent和量化的投资公司，让个人交易者在交易市场更理性",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Navigation() {
  return (
    <header className="w-full bg-[rgba(0,0,0,0.1)] dashed-border-b py-5 mb-0">
      <div className="w-[90%] max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between">
          <a href={`${basePath}/#home`} className="no-underline flex items-center gap-3">
            <img src={`${basePath}/imgs/skyeye_logo.png`} alt="天眼投资 Logo" className="h-8 object-contain" />
            <h1 className="text-2xl font-bold hacker-glow m-0">
              天眼投资
            </h1>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href={`${basePath}/#home`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              首页
            </a>
            <a href={`${basePath}/#advantages`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              核心优势
            </a>
            <a href={`${basePath}/#about`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              关于我们
            </a>
            <a href={`${basePath}/#products`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              产品服务
            </a>
            <a href={`${basePath}/#careers`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              招贤纳士
            </a>
            <a href={`${basePath}/#contact`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              联系我们
            </a>
            <a href={`${basePath}/blog`} className="text-[#63c0f5] hover:text-[#b5e853] transition-colors text-sm no-underline">
              博客
            </a>
          </nav>
        </div>
        <p className="text-[#666] text-sm mt-1 mb-0">
          基于Agent和量化的投资公司，让个人交易者在交易市场更理性
        </p>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="dashed-border-t mt-16 pt-8 pb-8">
      <div className="w-[90%] max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="hacker-glow text-base mb-3">天眼投资北京有限公司</h3>
            <p className="text-[#888] text-sm">
              基于Agent和量化的投资公司，让个人交易者在交易市场更理性、减少情绪交易。
            </p>
          </div>
          <div>
            <h3 className="hacker-glow text-base mb-3">快速链接</h3>
            <ul className="space-y-1 list-none p-0">
              <li><a href={`${basePath}/#home`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">首页</a></li>
              <li><a href={`${basePath}/#advantages`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">核心优势</a></li>
              <li><a href={`${basePath}/#about`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">关于我们</a></li>
              <li><a href={`${basePath}/#products`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">产品服务</a></li>
              <li><a href={`${basePath}/#careers`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">招贤纳士</a></li>
              <li><a href={`${basePath}/#contact`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">联系我们</a></li>
              <li><a href={`${basePath}/blog`} className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline">博客</a></li>
            </ul>
          </div>
          <div>
            <h3 className="hacker-glow text-base mb-3">联系方式</h3>
            <ul className="space-y-1 text-[#888] text-sm list-none p-0">
              <li>地址: 北京市 海淀区 大钟寺宇宙研发中心</li>
              <li>邮箱: contact@skyeye-invest.com</li>
            </ul>
          </div>
        </div>
        <div className="dashed-border-t pt-4 text-center text-[#666] text-sm">
          <p>&copy; 2026 天眼投资北京有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;700;900&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        <SideNav />
        <Navigation />
        <div className="w-[90%] max-w-[1000px] mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
