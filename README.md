# 天眼投资官网

天眼投资北京有限公司官方网站。公司专注于 AI 驱动的量化投资，本站为单页应用，涵盖公司介绍、核心团队、产品服务、招聘与联系方式。

线上地址：[https://zhoubintao-bytedance.github.io/skyeye_web/](https://www.skyeye-invest.cc/)

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

## 远程开发机预览

如果开发服务器跑在远端机器，本地浏览器需要通过 IDE 端口转发或 SSH 隧道访问。

```bash
# 1. 在远端确认 Next dev 实际监听的端口
ss -tlnp | grep -E ':(3000|3001|3002|3003)\b'
curl -I --max-time 5 http://127.0.0.1:3001

# 2. 本地 3000 被占用时，可以把本地 3002 映射到远端 3001
ssh -L 3002:127.0.0.1:3001 tiger@<远端主机>
```

然后在本地打开 `http://127.0.0.1:3002`。

> 注意：`ssh -L <本地端口>:127.0.0.1:<远端端口>` 中，真正需要和 `next dev` 保持一致的是最后那个“远端端口”。如果 SSH 持续打印 `channel N: open failed: connect failed: Connection refused`，通常是因为远端目标端口没有服务监听。

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

## 开发踩坑与难点总结

### 1. React 19 Hydration Mismatch

**现象**：SideNav 组件在开发环境控制台报 `A tree hydrated but some attributes of the server rendered HTML didn't match` 错误。

**原因**：模板字符串拼接 className 时，换行和缩进会产生额外空白字符，导致服务端渲染的 HTML 与客户端生成的 className 不一致。

**解决**：用数组 `.join(" ")` 替代模板字符串拼接 className：
```tsx
// ❌ 会导致 hydration mismatch
className={`sidenav-link
  ${isActive ? "active" : ""}
`}

// ✅ 正确做法
className={["sidenav-link", isActive ? "active" : ""].filter(Boolean).join(" ")}
```

### 2. Tailwind CSS 4 样式优先级问题

**现象**：SideNav 导航链接显示蓝色，而非预期的灰色/绿色。

**原因**：Tailwind CSS 4 将样式放在 `@layer utilities` 中，而 `globals.css` 中的全局 `a { color: #63c0f5 }` 是无层级样式，CSS 规范中无层级样式优先级 > `@layer` 样式，因此全局 `a` 标签颜色覆盖了 Tailwind 类。

**解决**：
1. 将全局 `a` 选择器改为 `a:not([class])`，避免影响带自定义 class 的链接
2. 为 SideNav 链接创建专用 `.sidenav-link` CSS 类（含 `.active` 状态），使用无层级样式确保优先级

### 3. GitHub Pages 静态部署路径

**现象**：本地开发正常，部署到 GitHub Pages 后图片、CSS、JS 全部 404。

**原因**：GitHub Pages 子路径部署（`username.github.io/skyeye_web/`）需要配置 `basePath` 和 `assetPrefix`。

**解决**：在 `next.config.ts` 中配置：
```ts
basePath: "/skyeye_web"        // 路由前缀
assetPrefix: "/skyeye_web/"    // 静态资源前缀
```
同时图片路径需用 `process.env.NEXT_PUBLIC_BASE_PATH` 拼接前缀。

### 4. GitHub Pages 忽略 `_next` 目录

**现象**：部署后页面空白，浏览器报 `_next/static/...` 404。

**原因**：GitHub Pages 默认启用 Jekyll 构建，Jekyll 会忽略所有以 `_` 开头的目录。

**解决**：在 `out/` 目录中创建 `.nojekyll` 空文件，已集成到 deploy 脚本中：
```json
"deploy": "npm run build && touch out/.nojekyll && gh-pages -d out --dotfiles"
```

### 5. 图片懒加载的取舍

**现象**：给图片添加 `loading="lazy"` 后，滚动时图片显示为黑色块，体验反而变差。

**原因**：本站为单页应用，内容量较少、图片不多（~2MB），懒加载的延迟加载效果在小站上弊大于利——图片在视口出现时才开始请求，导致明显的加载闪烁。

**结论**：小型单页站点不适合无脑加 lazy loading，更有效的优化是压缩图片体积（本项目将图片从 4.9MB 压缩至 2.2MB）。

### 6. Node.js 版本兼容

**现象**：系统默认 Node.js 18，运行 `next build` 报错 `Node.js version >= 20.9.0 is required`。

**解决**：通过 nvm 管理版本。编写 `start.sh` 启动脚本，自动调用 `nvm use 20` 切换版本，并在脚本中校验版本号，不满足时给出明确提示。

## License

&copy; 2026 天眼投资北京有限公司. All rights reserved.
