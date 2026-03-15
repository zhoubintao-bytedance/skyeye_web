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
