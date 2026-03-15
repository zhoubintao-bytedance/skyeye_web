# 天眼投资官网

天眼投资北京有限公司官方网站，基于 Next.js 构建的单页应用。

## 技术栈

- **Next.js 16** (App Router, 静态导出)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **GitHub Pages** 部署

## 快速开始

```bash
# 一键启动（自动检查环境、安装依赖、编译、启动）
./start.sh

# 或手动启动
npm install
npm run dev
```

> 需要 Node.js >= 20

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 (localhost:3000) |
| `npm run build` | 静态编译 |
| `npm run deploy` | 编译并部署到 GitHub Pages |

## 部署

项目通过 GitHub Pages 部署，使用 `gh-pages` 工具将静态文件推送到 `gh-pages` 分支。

```bash
# 一键部署（编译 + 发布到 GitHub Pages）
npm run deploy
```

部署流程：
1. `next build` 静态编译，输出到 `out/` 目录
2. 创建 `.nojekyll` 文件（避免 GitHub Pages 忽略 `_next` 目录）
3. `gh-pages -d out` 将 `out/` 推送到 `gh-pages` 分支

> 确保 GitHub 仓库 Settings → Pages 中 Source 设置为 `gh-pages` 分支。

## 项目结构

```
app/
├── layout.tsx          # 根布局（导航栏、页脚）
├── page.tsx            # 主页面（所有内容区块）
├── globals.css         # 全局样式
└── components/
    ├── SideNav.tsx      # 左侧目录导航
    ├── AvatarModal.tsx  # 图片弹窗
    └── WeChatQRModal.tsx # 微信二维码弹窗
```

## License

&copy; 2026 天眼投资北京有限公司. All rights reserved.
