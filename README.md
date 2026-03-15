# 天眼投资官网

天眼投资北京有限公司官方网站。公司专注于 AI 驱动的量化投资，本站为单页应用，涵盖公司介绍、核心团队、产品服务、招聘与联系方式。

线上地址：https://zhoubintao-bytedance.github.io/skyeye_web/

## 技术栈

- **Next.js 16** — App Router + 静态导出 (`output: "export"`)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4**
- **GitHub Pages** — 通过 `gh-pages` 部署到 `gh-pages` 分支

## 环境要求

- **Node.js >= 20**（推荐通过 [nvm](https://github.com/nvm-sh/nvm) 管理）
- npm >= 10（随 Node.js 20 自带）

## 快速开始

```bash
# 克隆仓库
git clone git@github.com:zhoubintao-bytedance/skyeye_web.git
cd skyeye_web

# 方式一：一键启动（自动切换 Node 版本、安装依赖、编译、启动）
chmod +x start.sh
./start.sh

# 方式二：手动启动
source ~/.nvm/nvm.sh
nvm use 20
npm install
npm run dev
```

启动后访问 http://localhost:3000

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 (localhost:3000) |
| `npm run build` | 静态编译，输出到 `out/` |
| `npm run lint` | ESLint 代码检查 |
| `npm run deploy` | 编译 + 部署到 GitHub Pages |
| `./start.sh` | 一键编译启动（含环境检查） |
| `./start.sh build` | 仅编译（不启动服务器） |

## 部署到 GitHub Pages

```bash
# 1. 切换 Node.js 版本
source ~/.nvm/nvm.sh
nvm use 20

# 2. 验证版本
node -v   # 应输出 v20.x.x
npm -v    # 应输出 10.x.x

# 3. 安装依赖
npm install

# 4. 编译并发布
npm run deploy
```

`npm run deploy` 执行流程：
1. `next build` 静态编译 → 输出到 `out/`
2. 创建 `out/.nojekyll`（避免 GitHub Pages 忽略 `_next` 目录）
3. `gh-pages -d out` 将 `out/` 内容推送到 `gh-pages` 分支

> 首次部署需在 GitHub 仓库 Settings → Pages → Source 中选择 `gh-pages` 分支。

## 项目结构

```
skyeye_web/
├── app/
│   ├── layout.tsx            # 根布局（导航栏、页脚）
│   ├── page.tsx              # 主页面（所有内容区块）
│   ├── globals.css           # 全局样式（主题色、动画、组件样式）
│   └── components/
│       ├── SideNav.tsx       # 左侧目录导航（滚动高亮）
│       ├── AvatarModal.tsx   # 图片点击放大弹窗
│       └── WeChatQRModal.tsx # 微信二维码弹窗
├── public/imgs/              # 图片资源（团队头像、资质证照等）
├── next.config.ts            # Next.js 配置（basePath、静态导出）
├── start.sh                  # 一键编译启动脚本
└── package.json
```

## License

&copy; 2026 天眼投资北京有限公司. All rights reserved.
