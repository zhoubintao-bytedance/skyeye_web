# CLAUDE.md

天眼投资官网项目的 Claude Code 开发指南。

## 项目概览

天眼投资北京有限公司官方网站，单页应用（SPA），涵盖公司介绍、核心团队、产品服务、招聘与联系方式。

- **线上地址**: https://zhoubintao-bytedance.github.io/skyeye_web/
- **技术栈**: Next.js 16 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4
- **部署方式**: 静态导出 (`output: "export"`) → GitHub Pages (`gh-pages` 分支)
- **Node.js 要求**: >= 20（通过 nvm 管理，系统默认 18 不可用）

## 常用命令

```bash
./start.sh            # 一键启动（自动 nvm use 20 + 安装依赖 + 编译 + 启动 dev server）
./start.sh build      # 仅编译

npm run dev           # 开发服务器 localhost:3000
npm run build         # 静态编译 → out/
npm run lint          # ESLint 9
npm run deploy        # 编译 + touch .nojekyll + gh-pages -d out 部署
```

> **注意**: 直接 `npm run deploy` 前需先 `source ~/.nvm/nvm.sh && nvm use 20`，否则 Next.js 16 会报版本错误。

## 项目结构

```
app/
├── layout.tsx              # 根布局：顶部导航栏(Navigation) + 页脚(Footer)
├── page.tsx                # 唯一页面，包含所有章节内容
├── globals.css             # 全局样式：主题色变量、组件样式类
└── components/
    ├── SideNav.tsx          # 左侧浮动目录导航（xl屏幕显示，IntersectionObserver 滚动高亮）
    ├── AvatarModal.tsx      # 图片点击放大弹窗
    └── WeChatQRModal.tsx    # 微信二维码弹窗
public/imgs/                 # 图片资源（已压缩，总计 ~2MB）
next.config.ts               # basePath + assetPrefix + 静态导出配置
start.sh                     # 一键编译启动脚本（含 nvm 版本检查）
```

## 页面章节与锚点 ID

页面为单页结构，各章节通过 `id` 属性定位，SideNav 和顶部导航栏均依赖这些 ID：

| 章节 | id | 说明 |
|------|----|------|
| 首页 | `home` | Hero 区域 + 标语 |
| 核心优势 | `advantages` | 三大优势卡片 + 策略净值曲线图(SVG) |
| 关于我们 | `about` | 公司简介、核心理念、价值观、愿景、团队、Agent员工、资质证照 |
| 产品服务 | `products` | 四个产品卡片 |
| 招贤纳士 | `careers` | 招聘理念 + 开放岗位列表 |
| 联系我们 | `contact` | 联系方式 + 社交媒体链接 |

关于我们内部子章节 ID：`about-intro`、`about-philosophy`、`about-values`、`about-vision`、`about-team`、`about-agents`、`about-credentials`

## 视觉风格与样式规范

### 主题：Hacker/Terminal 风格

- **背景色**: `#151515`（深灰黑）
- **主色**: `#b5e853`（亮绿，用于标题、高亮、按钮）
- **辅助色**: `#63c0f5`（蓝色，用于链接）、`#aa759f`（紫色，用于标签）
- **字体**: Monaco / monospace 等宽字体
- **边框**: 大量使用 `border-dashed`（虚线边框），呼应终端风格

### 关键 CSS 类（定义在 globals.css）

| 类名 | 用途 |
|------|------|
| `.hacker-glow` | 绿色标题 + 发光 text-shadow |
| `.hacker-card` | 深色半透明卡片，hover 变亮 + 绿色边框 |
| `.hacker-btn` | 次要按钮（低透明度绿色边框） |
| `.hacker-btn-primary` | 主要按钮（高透明度绿色边框 + 发光） |
| `.terminal-block` | 终端风格代码块（黑底 + 白色细边框） |
| `.sidenav-link` / `.sidenav-link.active` | 侧边导航链接样式 |
| `.dashed-border-b` / `.dashed-border-t` | 绿色/灰色虚线分隔线 |

### 颜色变量（:root）

```css
--background: #151515;  --foreground: #eaeaea;
--primary: #b5e853;     --secondary: #63c0f5;
--accent: #aa759f;      --border-color: #333;
```

## GitHub Pages 部署注意事项

1. **basePath**: 生产环境自动设为 `/skyeye_web`，本地开发为空。通过 `process.env.NEXT_PUBLIC_BASE_PATH` 暴露给组件
2. **图片路径**: 所有 `<img src>` 必须用 `${basePath}/imgs/xxx` 拼接前缀，否则部署后 404
3. **`.nojekyll` 文件**: 必须存在于 `out/` 目录，否则 GitHub Pages 的 Jekyll 会忽略 `_next/` 目录
4. **`images.unoptimized: true`**: 静态导出不支持 Next.js 图片优化

## 已知坑点（开发时务必注意）

1. **Hydration Mismatch**: 不要用模板字符串换行拼接 className，改用数组 `.join(" ")`
2. **Tailwind CSS 4 优先级**: 全局 CSS（无 @layer）优先级高于 Tailwind utilities（在 @layer 中），全局 `a` 样式已改为 `a:not([class])` 避免覆盖
3. **Node.js 版本**: 必须 >= 20，系统默认 18 会导致 `next build` 失败
4. **图片懒加载**: 本站内容少，`loading="lazy"` 会导致滚动时图片黑块闪烁，不要加
5. **图片已压缩**: 总大小从 4.9MB 压缩至 ~2MB，新增图片建议控制在 100KB 以内

## 组件说明

### SideNav（左侧导航）
- 仅在 `xl`（>=1280px）屏幕显示，`fixed left-6 top-1/2`
- 使用 `IntersectionObserver` 监听各 section，自动高亮当前最接近视口顶部的章节
- 使用 `.sidenav-link` CSS 类而非 Tailwind 颜色类，避免被全局 `a` 样式覆盖

### AvatarModal（图片弹窗）
- 点击缩略图 → 全屏遮罩 + 放大图片
- 可选传入 `name` 和 `title` 在弹窗底部显示

### WeChatQRModal（微信二维码）
- 点击微信按钮 → 弹出二维码弹窗
- 内嵌微信 SVG 图标

## 本地预览排查

### 问题：dev server 启动成功但浏览器访问不了

**最常见原因：IDE 端口未转发。**

本项目运行在远程开发机上，浏览器在本地。即使 dev server 显示 `Ready`，如果 IDE（TRAE / VS Code）没有将对应端口转发到本地，浏览器仍然无法访问。

**排查步骤：**
1. 先确认远端实际监听端口：`ss -tlnp | grep -E ':(3000|3001|3002|3003)\b'`
2. 再确认远端 HTTP 可达：`curl -I --max-time 5 http://127.0.0.1:<远端端口>` 返回 `200 OK` 即正常
3. 如果本地 3000 已被占用，不需要让远端也改成 3002；SSH 转发允许本地端口和远端端口不同
4. 手动 SSH 转发的正确写法是 `ssh -L <本地端口>:127.0.0.1:<远端端口> tiger@<host>`
5. 例如远端 Next dev 实际跑在 `3001`，本地想占用 `3002`，应该执行 `ssh -L 3002:127.0.0.1:3001 tiger@10.139.130.67`，然后在本地打开 `http://127.0.0.1:3002`
6. 如果 IDE 端口转发或 SSH 隧道已经指向正确远端端口，但浏览器仍打不开，再检查本地端口是否被占用
7. 如果 SSH 持续打印 `channel N: open failed: connect failed: Connection refused`，表示 SSH 已经连上，但它尝试访问的远端端口没有服务监听；优先检查 `ssh -L` 最后一个端口是否和 `next dev` 实际端口一致

**提醒用户：** 当用户反馈“访问不了”或看到 `Connection refused` 时，优先先核对远端监听端口和 SSH 转发目标端口是否一致，再考虑重启服务。

## Next.js basePath 使用规则（重要，已踩坑）

本项目生产环境 `basePath = "/skyeye_web"`（见 `next.config.ts`），开发环境为空。

### 核心规则

| 标签 | href 写法 | 原因 |
|------|-----------|------|
| `<Link href="...">` | **不加** basePath，直接写 `/blog/xxx` | Next.js 客户端路由会自动拼接 basePath |
| `<a href="...">` | **手动加** `${basePath}/blog/xxx` | 原生 a 标签不经过 Next.js 路由，不会自动加 |

### 反面教材（已修复）

```tsx
// ❌ 错误：Link 里手动加了 basePath
// 静态 HTML 看起来正确，但 JS 接管后客户端导航会双重拼接
<Link href={`${basePath}/blog/${post.slug}`}>

// ✓ 正确
<Link href={`/blog/${post.slug}`}>
```

**症状**：本地 dev 看起来正常（basePath 为空，所以不会重复），但 GitHub Pages 部署后点击链接跳到 `/skyeye_web/skyeye_web/...`。
