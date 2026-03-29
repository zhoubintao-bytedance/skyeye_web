# 部署指南

本项目支持两种部署方式：GitHub Pages（备用）和 Vercel + Cloudflare CDN（主站，国内可访问）。

---

## 一、GitHub Pages 部署

适用于海外访问，国内可能需要 VPN。

```bash
# 1. 确保 Node.js >= 20
source ~/.nvm/nvm.sh && nvm use 20

# 2. 验证版本
node -v   # >= 20.x
npm -v    # >= 10.x

# 3. 安装依赖
npm install

# 4. 编译 + 部署到 gh-pages 分支
npm run deploy
```

部署完成后访问：https://zhoubintao-bytedance.github.io/skyeye_web/

---

## 二、Vercel + Cloudflare CDN 部署

适用于国内访问，无需 VPN，通过 Cloudflare CDN 加速。

### 1. 购买域名（Cloudflare）

1. 注册 [Cloudflare](https://dash.cloudflare.com) 账号
2. 左侧菜单 **Domain Registration → Register Domains**
3. 搜索想要的域名，加入购物车并付款
4. `.com` 约 $10/年，`.cc` 约 $12/年

> 如果没有外币卡，可在阿里云/腾讯云购买域名（支持支付宝），再将 DNS 托管到 Cloudflare。

### 2. 部署到 Vercel

1. 打开 [Vercel](https://vercel.com)，用 GitHub 账号登录
2. 点击 **Add New → Project**，导入 `skyeye_web` 仓库
3. Framework Preset 选择 **Next.js**
4. 在 **Environment Variables** 中添加：
   - Key: `NEXT_PUBLIC_BASE_PATH`
   - Value: 留空（直接点 Add）
5. 点击 **Deploy**，等待构建完成

> 环境变量必须在部署前设置。如果漏了，去 Settings → Environment Variables 补上后 Redeploy。

### 3. Vercel 绑定域名

1. 进入 Vercel 项目 **Settings → Domains**
2. 输入你的域名（如 `skyeye-invest.cc`），点 **Add**
3. Vercel 会自动配置 `www` 子域名的 307 跳转

### 4. Cloudflare DNS 配置

1. 进入 Cloudflare 管理页面，选择你的域名
2. 左侧点 **DNS → Records**
3. 删除已有的默认记录（如有冲突）
4. 添加以下两条 CNAME 记录：

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | `@` | `cname.vercel-dns.com` | Proxied（橙色云朵） |
| CNAME | `www` | `cname.vercel-dns.com` | Proxied（橙色云朵） |

> **Proxy 必须开启**（橙色云朵），否则 Cloudflare CDN 不会生效，国内访问仍然很慢。

### 5. 验证

等待几分钟 DNS 生效后，访问你的域名确认：
- 页面正常加载，图片和样式无异常
- 手机上无需 VPN 即可访问

---

## 当前线上地址

| 渠道 | 地址 | 说明 |
|------|------|------|
| 主站（Vercel + CDN） | https://skyeye-invest.cc | 国内可直接访问 |
| 备站（GitHub Pages） | https://zhoubintao-bytedance.github.io/skyeye_web/ | 需要 VPN |

---

## 日常更新流程

代码推送到 `main` 分支后：

- **Vercel**：自动触发重新部署，无需手动操作
- **GitHub Pages**：需要手动执行 `npm run deploy`
