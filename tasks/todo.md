# 首页改造任务

- [x] 阅读 `DESIGN.md`、现有首页与已有 spec/plan，整理现状
- [x] 输出并确认现状分析
- [x] 输出并确认功能点与信息架构
- [x] 输出并确认风险与关键设计决策
- [x] 基于确认后的 spec 实现首页改造
- [x] 搭建 Vitest 与 Testing Library 测试基础设施
- [x] 抽离首页与站点内容配置，固化导航与研究模块顺序
- [x] 重写共享 Header / Footer 与全局设计 token
- [x] 重做首页 6 个主 section 的 NVIDIA 风格布局
- [x] 统一博客列表页与文章页外观
- [x] 清理旧的 SideNav 和黑客主题遗留样式
- [x] 完成验证并记录 review

## Review

- `npm run test -- tests/homepage-content.test.ts tests/site-shell.test.tsx tests/homepage-view.test.tsx tests/blog-views.test.tsx`：通过，4 个测试文件、8 个测试全部通过
- `npm run lint`：通过，无错误；保留 7 条 `@next/next/no-img-element` 警告
- `npm run build`：通过，首页、博客列表和 `/blog/claude-code-setup-story` 静态生成成功

## 首页微调任务（第二轮）

- [x] 阅读 `DESIGN.md`、现有首页实现、现有素材与 `/home/tiger/rqalpha/skyeye` 可复用图表资产，整理现状
- [x] 输出并确认现状分析
- [x] 输出并确认功能点调整范围
- [x] 输出并确认风险与关键设计决策
- [x] 基于确认后的 Spec 调整首页视觉、文案与字体实现
- [x] 补充或替换首页所需图片素材
- [x] 完成验证并在本节末尾记录 review

## 第二轮 Review

- `npm run test`：通过，4 个测试文件、10 个测试全部通过
- `npm run lint`：通过，无错误；保留 5 条 `@next/next/no-img-element` 警告，分别来自图片预览、微信二维码、首页产品图和站点 Logo
- `npm run build`：通过；沙箱内首次构建因 Turbopack 在 CSS 处理阶段绑定端口失败，随后在沙箱外重跑成功，首页、博客列表和 `/blog/claude-code-setup-story` 静态生成成功

## 远程预览排障任务

- [x] 收集远端 3000/3001/3002 端口监听和 HTTP 响应证据，定位 `Connection refused` 根因
- [x] 更新 `CLAUDE.md` 的远程预览排查说明，补充 SSH 本地端口与远端端口可不同的示例
- [x] 更新 `README.md` 的远程预览说明，补充 `ssh -L` 正确写法
- [x] 完成 review 并记录证据

## 远程预览排障 Review

- `ss -tlnp | grep -E ':(3000|3001|3002|3003)\b'`：宿主机确认 `3000`、`3001` 在监听，`3002` 未监听
- `curl -I --max-time 5 http://127.0.0.1:3000`：返回 `HTTP/1.1 200 OK`
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，确认 Next dev 可访问
- 结论：`ssh -L 3002:127.0.0.1:3002` 将本地 `3002` 转发到远端 `3002`，但远端 `3002` 没有服务监听，所以 SSH 报 `channel N: open failed: connect failed: Connection refused`

## 首页团队区快速联调任务

- [x] 记录本轮用户反馈与布局调整目标
- [x] 将 Agent 协同内容并入“团队与背书”区，移出产品能力区
- [x] 缩小 Agent 头像并改成更紧凑的样式
- [x] 完成针对性校验并记录 review

## 首页团队区快速联调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx app/content/homepage.ts`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `app/components/homepage/HomepageView.tsx`
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，本地开发预览仍可访问
- 结构调整结果：四位 Agent 已从产品能力区移出，并作为团队区底部的辅助协同面板出现；头像尺寸已压缩到 `h-14 w-14`

## 首页团队区对齐微调任务

- [x] 确认团队区残缺感的根因是 Agent 面板仅挂在右列下方
- [x] 将 Agent 面板改为横跨团队区左右两列的整行布局
- [x] 完成针对性校验并记录 review

## 首页团队区对齐微调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 布局调整结果：团队区改为“上方左右两列 + 下方整行 Agent 协同面板”，避免 Agent 面板仅挂在右下角造成残缺感

## 首页团队区单行微调任务

- [x] 记录本轮用户关于 Agent 两行排版的反馈
- [x] 将 Agent 卡片改为桌面端单行四列
- [x] 完成针对性校验并记录 review

## 首页团队区单行微调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 布局调整结果：Agent 面板在桌面端改为单行四列，位置在 `app/components/homepage/HomepageView.tsx` 的 `lg:grid-cols-4`

## 首页产品图微调任务

- [x] 记录本轮用户关于 TX1 次级图片区块的删除反馈
- [x] 将产品展示组件改为支持可选次级图片
- [x] 删除 TX1 卡片中的“评分映射”标题和对应图片
- [x] 完成针对性校验并记录 review

## 首页产品图微调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx app/content/homepage.ts`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 调整结果：`TX1` 卡片只保留“策略曲线”主图；“评分映射”标题、对应图片以及摘要中的“评分映射”表述已移除

## 首页导航文案微调任务

- [x] 定位 `"团队与背书"` 的前端来源
- [x] 将导航文案 `"团队与背书"` 改为 `"团队"`
- [x] 完成针对性校验并记录 review

## 首页导航文案微调 Review

- `rg -n 'team-credentials|团队与背书|团队' app/content/homepage.ts`：确认导航项已变为 `label: "团队"`
- `npm run lint -- app/content/homepage.ts`：通过
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常

## 首页产品图微调任务（红利低波）

- [x] 记录本轮用户关于红利低波次级图片区块的删除反馈
- [x] 删除红利低波卡片中的“因子拆解”标题和对应图片
- [x] 完成针对性校验并记录 review

## 首页产品图微调 Review（红利低波）

- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 调整结果：红利低波卡片只保留“收益曲线”主图；“因子拆解”标题和对应图片已移除

## 首页导航文案微调任务（博客）

- [x] 定位 `"最新研究"` 的前端来源
- [x] 将导航文案 `"最新研究"` 改为 `"博客"`
- [x] 完成针对性校验并记录 review

## 首页导航文案微调 Review（博客）

- `rg -n 'research-notes|最新研究|博客' app/content/homepage.ts`：确认导航项已变为 `label: "博客"`
- `npm run lint -- app/content/homepage.ts`：通过
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常

## 首页联系区文案微调任务

- [x] 定位前端中 `"联系合作"` 的可见文案位置
- [x] 将可见文案中的 `"联系合作"` 统一改为 `"加入我们"`
- [x] 完成针对性校验并记录 review

## 首页联系区文案微调 Review

- `rg -n '联系合作|加入我们' app/content/homepage.ts app/components/homepage/HomepageView.tsx`：确认导航、首屏次按钮和联系区标题都已改为“加入我们”
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常

## Agent Team 头像微调任务

- [x] 确认头像偏小且贴在卡片左上角的原因来自当前横向 `items-start` 布局
- [x] 放大 Agent 头像并将其调整到卡片更自然的中轴位置
- [x] 恢复 Agent Team 面板的标题说明，避免头部留白
- [x] 完成针对性校验并记录 review

## Agent Team 头像微调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 调整结果：Agent 卡片改为头像居中、文字在下的布局；头像尺寸调整为 `h-[4.5rem] w-[4.5rem]`，并补回了标题与说明

## Agent Team 样式回调任务

- [x] 记录本轮用户关于 Agent 卡片需要和创始人区统一样式的反馈
- [x] 将 Agent 卡片改为与创始人卡片一致的头像左侧、文字右侧、说明在下布局
- [x] 完成针对性校验并记录 review

## Agent Team 样式回调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 调整结果：Agent 卡片已回调为与创始人区一致的骨架，采用头像左侧、右侧标题信息、下方详细介绍的布局，头像尺寸统一为 `h-20 w-20`

## Agent Team 文案层级微调任务

- [x] 记录本轮用户关于 Agent 名字层级过重和绿色标签需统一四字的反馈
- [x] 将 Agent 顶部绿色标签统一为四字描述
- [x] 将 Agent 名字从右侧大标题移到下方介绍句中
- [x] 完成针对性校验并记录 review

## Agent Team 文案层级微调 Review

- `nl -ba app/content/homepage.ts | sed -n '168,190p'`：确认四个绿色标签已统一为“深度研究 / 信息整理 / 执行协同 / 对外展示”
- `nl -ba app/components/homepage/HomepageView.tsx | sed -n '196,223p'`：确认 Agent 名字已从右侧大标题移除，并进入下方介绍句
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常

## Agent Team 头部微调任务

- [x] 记录本轮用户关于删掉长说明和收缩头部层级的反馈
- [x] 删除 Agent Team 头部说明句
- [x] 将头部统一收成绿色小字 `Agent员工协同`
- [x] 完成针对性校验并记录 review

## Agent Team 头部微调 Review

- `nl -ba app/components/homepage/HomepageView.tsx | sed -n '180,220p'`：确认头部已收成绿色小字 `Agent员工协同`，长说明与大标题都已移除
- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常

## 红利低波配图替换任务

- [x] 确认根目录存在新的 `红利低波回测.png` 图片素材
- [x] 将新图片接入 `public/imgs/` 并替换红利低波卡片配图
- [x] 将红利低波卡片相关文案改为回测语义
- [x] 完成针对性校验并记录 review

## 红利低波配图替换 Review

- `ls -l public/imgs/dividend-low-vol-backtest.png`：确认新图片已接入可公开访问目录
- `sed -n '142,154p' app/content/homepage.ts`：确认红利低波卡片已切到 `primaryImageSrc: "/imgs/dividend-low-vol-backtest.png"`，并同步改为“回测结果”文案
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，且响应头已预加载 `/imgs/dividend-low-vol-backtest.png`

## 首页主图替换任务

- [x] 确认根目录存在可替换的首页主图素材 `tx1_rolling_score_2304_2604.png`
- [x] 将首页主图接入 `public/imgs/` 并替换首屏图源
- [x] 将首屏图相关文案更新为回测总览语义

## 博客新增任务（AGENTS.md 分享）

- [x] 阅读 `DESIGN.md`、现有博客实现、`tasks/lessons.md` 与近期提交，整理现状
- [x] 输出并确认现状分析
- [x] 输出并确认功能点与范围
- [x] 输出并确认风险与关键设计决策
- [x] 基于确认后的 Spec 新增博客文章并调整所需样式
- [x] 完成验证并在本节末尾记录 review

### 实施计划

- [x] 在 `tests/blog-views.test.tsx` 先补充或改造测试，覆盖三件事：新文章在博客列表可见、通用详情页的新结构可渲染、`claude-code-setup-story` 仍保留专用诗歌排版
- [x] 在 `app/blog/posts.ts` 新增 AGENTS.md 分享文章数据，使用已发布状态 `published: true`、不设置 `featuredOnHome`
- [x] 在 `app/components/blog/BlogPostView.tsx` 重构通用详情页，保留 `PoemPost` 分支，只升级非诗歌文章的通用模板为更贴近 `DESIGN.md` 的 Hero + 分节内容版式
- [x] 仅在 `app/globals.css` 增加博客通用文章所需的增量样式，复用现有黑底、绿强调、灰边框 token，不改整站基础样式
- [x] 完成后运行 `npm run test -- tests/blog-views.test.tsx`
- [x] 完成后运行 `npm run lint -- app/blog/posts.ts app/components/blog/BlogPostView.tsx tests/blog-views.test.tsx`
- [x] 如前两项通过，再运行 `npm run build`

## 博客新增任务 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，4 个测试全部通过；已覆盖新文章可见、通用详情模板渲染、诗歌文章保留专用排版
- `npm run lint -- app/blog/posts.ts app/components/blog/BlogPostView.tsx tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：沙箱内因 Turbopack 在 CSS 处理阶段创建进程绑定端口受限失败；随后在沙箱外重跑通过，静态生成 `/blog/recommended-agents-md`

## 博客列表布局修正任务

- [x] 确认博客列表横向排布的根因并记录用户期望
- [x] 先修改 `tests/blog-views.test.tsx`，锁定“统一模板、竖向单列排列”的行为
- [x] 修改 `app/components/blog/BlogIndexView.tsx`，移除 `featured + secondary` 横向布局，改为统一卡片的垂直列表
- [x] 完成验证并在本节末尾记录 review

## 博客列表布局修正 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，4 个测试全部通过；已覆盖“无 Featured 分组、无 More Research 分组、已发布文章统一出现”
- `npm run lint -- app/components/blog/BlogIndexView.tsx tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：沙箱内仍因 Turbopack 在 CSS 处理阶段创建进程绑定端口受限失败；随后在沙箱外重跑通过，`/blog` 与两篇文章静态生成正常

## 博客细节修正任务

## 博客 AGENTS 规则框增强任务

- [x] 阅读现有博客数据、详情页模板、博客样式与任务约束，整理现状
- [x] 输出并确认现状分析
- [x] 输出并确认功能点与交互范围
- [x] 输出并确认风险与关键设计决策
- [x] 在用户确认 Spec 后实现 AGENTS 文章内的可复制规则框与样式
- [x] 完成验证并在本节末尾记录 review
- [x] 先在 `tests/blog-views.test.tsx` 补充 AGENTS 文章复制框的失败测试
- [x] 新增局部 client 复制框组件，处理复制按钮、成功反馈与可访问性
- [x] 将用户提供的 Markdown 原文接入 AGENTS 文章详情页专用模块
- [x] 按 `DESIGN.md` 调整复制框的黑底工业面板样式，并兼顾移动端滚动
- [x] 运行针对性测试、lint 与 build，并在本节末尾补 review

## 博客 AGENTS 规则框增强 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过；新增覆盖 AGENTS 文章复制框渲染、复制按钮点击和原文复制断言
- `npm run lint -- app/components/blog/AgentsMarkdownCopyPanel.tsx app/components/blog/BlogPostView.tsx app/blog/recommendedAgentsMarkdown.ts tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：通过，静态生成 `/blog/recommended-agents-md` 与既有博客页面成功

## 博客 AGENTS 规则框微调任务

- [x] 将专用黑色复制面板移动到 AGENTS 文章正文末尾
- [x] 收紧复制按钮尺寸，并将按钮可见文案改为 `copy`
- [x] 调整 AGENTS 文章正文分节标题宽度，避免桌面端标题挤成两行
- [x] 将 AGENTS 文章说明文案改得更贴近用户提供的原始规则内容
- [x] 完成验证并在本节末尾记录 review

## 博客 AGENTS 规则框微调 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过；已覆盖复制面板移动到正文后、按钮文案为 `copy`、点击复制与成功反馈
- `npm run lint -- app/components/blog/AgentsMarkdownCopyPanel.tsx app/components/blog/BlogPostView.tsx app/blog/posts.ts tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：通过，静态生成 `/blog/recommended-agents-md` 与既有博客页面成功

## 博客 AGENTS 面板收缩微调任务

- [x] 将 `copy` 按钮再缩小一档
- [x] 将 AGENTS 面板滚动区再缩短一档
- [x] 为 AGENTS 面板接入更细的专用滚动条样式
- [ ] 完成验证并在本节末尾记录 review

## 博客 AGENTS 滚动条颜色回调任务

- [x] 将 AGENTS 面板细滚动条颜色恢复为更明确的 NVIDIA 绿色
- [x] 完成验证并在本节末尾记录 review

## 博客 AGENTS 滚动条颜色回调 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过
- `npm run build`：通过，静态生成 `/blog/recommended-agents-md` 与既有博客页面成功

## 博客 AGENTS 编辑器质感增强任务

- [x] 将复制面板背景改成更贴近 NVIDIA 风格的技术纹理
- [x] 为复制面板正文增加 Markdown 编辑器式行号
- [ ] 完成验证并在本节末尾记录 review

## 博客 AGENTS 行号分隔微调任务

- [x] 拉开行号与正文内容的视觉间距
- [x] 降低行号颜色存在感
- [x] 完成验证并在本节末尾记录 review

## 博客 AGENTS 行号分隔微调 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过
- `npm run build`：通过，静态生成 `/blog/recommended-agents-md` 与既有博客页面成功

## 博客 AGENTS 行号格式微调任务

- [x] 将编辑器行号改成不补零的自然数字格式
- [x] 完成验证并在本节末尾记录 review

## 博客 AGENTS 行号格式微调 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过；已覆盖行号改为自然数字格式且不再出现 `001`
- `npm run build`：通过，静态生成 `/blog/recommended-agents-md` 与既有博客页面成功

- [x] 按用户反馈确认博客列表顺序、摘要模板、诗歌页防剧透和返回按钮的现状根因
- [x] 先修改 `tests/blog-views.test.tsx`，锁定日期倒序、统一头部模板、诗歌页不显示剧透摘要、返回按钮新文案
- [x] 修改 `app/blog/posts.ts`、`app/components/blog/BlogPostView.tsx`、`app/components/blog/BlogIndexView.tsx`，落实上述 4 项修正
- [x] 完成验证并在本节末尾记录 review

## 博客细节修正 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，4 个测试全部通过；已覆盖列表倒序、统一头部模板、诗歌页不显示剧透摘要、返回按钮新文案
- `npm run lint -- app/blog/posts.ts app/components/blog/BlogPostView.tsx tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：沙箱内仍因 Turbopack 在 CSS 处理阶段创建进程绑定端口受限失败；随后在沙箱外重跑通过，`/blog` 与两篇文章静态生成正常

## 博客列表头部与摘要修正任务

- [x] 确认 `/blog` 页仍存在剧透摘要、重复标题和多余说明句的根因
- [x] 先修改 `tests/blog-views.test.tsx`，锁定非剧透摘要、单一绿色标题和无说明句
- [x] 修改 `app/blog/posts.ts` 与 `app/components/blog/BlogIndexView.tsx`，落实列表摘要与标题修正
- [x] 完成验证并在本节末尾记录 review

## 博客列表头部与摘要修正 Review

- `npm run test -- tests/blog-views.test.tsx`：通过，4 个测试全部通过；已覆盖非剧透摘要、单一绿色标题、无说明句
- `npm run lint -- app/blog/posts.ts app/components/blog/BlogIndexView.tsx tests/blog-views.test.tsx`：通过，无错误无警告
- `npm run build`：通过，`/blog` 与两篇文章静态生成正常

## 发版前提交任务

- [x] 盘点当前工作区改动并识别不应入库的本地产物
- [x] 运行本次提交所需的验证命令并记录结果
- [x] 整理暂存区并提交本地有效改动

## 发版前提交 Review

- `npm run test`：通过，4 个测试文件、11 个测试全部通过；同时修复了 `.buildcheck/workspace/tests` 被误扫进 Vitest 的问题
- `npm run lint`：通过，无错误；保留 5 条既有 `@next/next/no-img-element` 警告，分别位于 `app/components/ImagePreviewModal.tsx`、`app/components/WeChatQRModal.tsx`、`app/components/homepage/HomepageView.tsx`、`app/components/site/SiteHeader.tsx`
- `npm run build`：沙箱内首次构建因 Turbopack 在 CSS 处理阶段绑定端口失败；随后在沙箱外重跑通过，首页、博客列表页和 `/blog/claude-code-setup-story` 静态生成成功

## 发版跟进任务

- [x] 推送本地 `main` 到远端 `origin/main`
- [x] 检查推送后的远端提交状态与自动部署入口
- [x] 持续跟进直到拿到本轮发版结果或明确阻塞

## 发版跟进 Review

- `git push origin main`：成功，远端从 `ba65e30` 更新到 `a648adb`
- `curl -I --max-time 15 https://skyeye-invest.cc`：返回 `HTTP/2 307` 跳转到 `https://www.skyeye-invest.cc/`，说明主域名入口正常
- `curl -L --max-time 15 https://skyeye-invest.cc | rg -n "让每一次投资，都更有把握|Agent员工协同|加入我们|博客"`：命中首页新版本关键文案，主站首页已更新
- `curl -L --max-time 15 https://skyeye-invest.cc/blog | rg -n "博客|Claude Code"`：命中博客列表页标题与精选文章内容，博客列表页已更新
- `curl -L --max-time 15 https://skyeye-invest.cc/blog/claude-code-setup-story | rg -n "智取Claude记|Claude Code|礼品卡|proxychains"`：命中文章详情页正文内容，博客详情页已更新
- [x] 完成针对性校验并记录 review

## 首页主图替换 Review

- `ls -l public/imgs/tx1-rolling-score-backtest.png`：确认首页新主图已接入可公开访问目录
- `sed -n '127,138p' app/content/homepage.ts`：确认首屏图标题、说明、图源和 alt 已更新为回测总览口径
- `sed -n '452,462p' app/components/homepage/HomepageView.tsx`：确认放大预览标题已改为 `TX1 回测总览`
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，且响应头已预加载 `/imgs/tx1-rolling-score-backtest.png`

## 首页指标同步修复任务

- [x] 确认首屏指标仍是旧手填值，和新主图中的回测指标不一致
- [x] 先用测试锁定首屏四个指标的新数值与收益项高亮要求
- [x] 更新首页指标数据与收益项配色
- [x] 完成针对性校验并记录 review

## 首页指标同步修复 Review

- `npm run test -- tests/homepage-content.test.ts`：通过，3 个测试全部通过
- `npm run test -- tests/homepage-view.test.tsx`：通过，3 个测试全部通过
- `curl -I --max-time 5 http://127.0.0.1:3001`：返回 `HTTP/1.1 200 OK`，开发预览正常
- 修复结果：首屏四个摘要指标已同步为主图中的回测数值，且“累计收益”“年化收益”改为绿色高亮

## 首页博客入口收敛任务

- [x] 确认首页博客区、首页导航博客项与站点头部“研究文章”按钮的重叠关系
- [x] 输出并确认现状分析
- [x] 输出并确认功能点与风险决策
- [x] 确认后收敛首页博客入口，只保留 `/blog` 作为研究文章入口
- [x] 完成针对性校验并记录 review

## 首页博客入口收敛 Review

- `npm run test -- tests/homepage-view.test.tsx tests/homepage-content.test.ts tests/blog-views.test.tsx tests/site-shell.test.tsx`：通过，4 个测试文件、10 个测试全部通过
- `npm run lint -- app/components/homepage/HomepageView.tsx app/content/homepage.ts app/components/site/SiteHeader.tsx app/components/blog/BlogIndexView.tsx tests/homepage-view.test.tsx tests/homepage-content.test.ts tests/blog-views.test.tsx tests/site-shell.test.tsx`：通过；保留 2 条既有 `@next/next/no-img-element` 警告，位置在 `HomepageView.tsx` 和 `SiteHeader.tsx`
- `curl -I --max-time 5 http://127.0.0.1:3001`：提权环境返回 `HTTP/1.1 200 OK`，确认远端开发预览存活
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'research-notes|研究文章|智取Claude记|href="/blog"|>博客<'`：首页 HTML 中已不再出现 `research-notes`、`研究文章` 和首页文章标题 `智取Claude记`，同时保留 `/blog` 入口 `博客`

## 首页首屏按钮删除任务

## 上线前 Review 任务

- [x] 盘点当前工作区未提交改动与影响范围
- [x] 审查首页重构、博客与站点公共壳子的潜在回归风险
- [x] 运行上线前校验命令并记录证据
- [x] 汇总 review 结论与发布前阻塞项

## 上线前 Review 结论

- `git status --short`：确认当前待提交内容覆盖首页、博客、站点壳子、样式、测试与素材资源，属于一次较大范围的前端重构
- `npm run lint`：通过；保留 5 条 `@next/next/no-img-element` 警告，集中在 Logo、首页社交图标、通用图片预览和微信二维码弹窗
- `npm run test`：通过，4 个测试文件、11 个测试全部通过
- `npm run build`：在原工作区会被长期运行的 `next dev --port 3001` 占用 `.next/lock`；随后在仓库内隔离目录提权重跑成功，静态导出 `/`、`/blog` 和 `/blog/claude-code-setup-story` 全部生成成功
- 阻塞项 1：`app/components/site/SiteHeader.tsx` 的 sticky 导航配合 hash section 跳转，但全站没有 `scroll-margin-top` 或等效锚点偏移，用户点击导航后对应 section 标题会被头部遮挡
- 阻塞项 2：`app/components/ImagePreviewModal.tsx` 与 `app/components/WeChatQRModal.tsx` 的弹窗缺少 `role="dialog"`、`aria-modal`、焦点管理、`Esc` 关闭和背景滚动抑制，官网核心放大图与微信入口都受影响
- 阻塞项 3：首页关键图片全部使用未声明尺寸的原生 `<img>`；除 lint 警告外，也会带来首屏性能和 CLS 风险
- 风险项 1：`app/components/blog/BlogIndexView.tsx` 与 `app/blog/posts.ts` 默认假设至少有一篇已发布文章，若已发布文章为空，`/blog` 会直接解引用崩掉
- 风险项 2：`app/components/blog/BlogPostView.tsx` 当前只为 `claude-code-setup-story` 渲染正文；后续若把第二篇文章设为 `published: true`，详情页只会有头部信息，没有正文主体
- 风险项 3：生产构建默认把 `basePath` 固定为 `/skyeye_web`；若这次不是继续发到该子路径，而是发到根域名或其他路径，静态产物中的链接和资源地址会全部指错
- 风险项 4：生产构建会警告把工作区根目录误判到 `/home/tiger`，因为父目录也有 `package-lock.json`；建议在 `next.config.ts` 显式设置 `turbopack.root`

- [x] 记录本轮快速预览阶段关于删除首屏 CTA 的需求
- [x] 删除首屏 `"查看产品实证"` 与 `"加入我们"` 两个按钮
- [x] 完成针对性校验并记录 review

## 首页首屏按钮删除 Review

- `rg -n "查看产品实证|heroContent\\.primaryCta|heroContent\\.secondaryCta" app/content/homepage.ts app/components/homepage/HomepageView.tsx`：无输出，确认首屏按钮文案与 CTA 字段、渲染都已删除
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `app/components/homepage/HomepageView.tsx:406`
- `curl -I --max-time 5 http://127.0.0.1:3001`：当前返回 `curl: (7) Failed to connect`，说明本地预览服务这次没有启动，未做浏览器侧联调

## 首页 Logo 放大任务

- [x] 确认头部 `skyeye` logo 当前尺寸偏小，定位到 `SiteHeader`
- [x] 在不改导航结构的前提下放大 logo 显示尺寸
- [x] 完成针对性校验并记录 review

## 首页 Logo 放大 Review

- `npm run lint -- app/components/site/SiteHeader.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `nl -ba app/components/site/SiteHeader.tsx | sed -n '10,24p'`：确认 logo 尺寸已从 `h-8` 调整为 `h-10 md:h-11`
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'skyeye_logo\\.png|h-10 w-auto object-contain md:h-11'`：提权环境确认预览 HTML 已反映更大的 logo 尺寸

## 首页文案微调任务

- [x] 将首屏四个指标统一收敛为一位小数
- [x] 根据用户反馈回滚本轮重写过的文字描述，仅保留数字格式调整
- [x] 完成针对性校验并记录 review

## 首页文案微调 Review

- `npm run test -- tests/homepage-content.test.ts tests/homepage-view.test.tsx`：通过，2 个测试文件、6 个测试全部通过
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx app/layout.tsx tests/homepage-content.test.ts tests/homepage-view.test.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `HomepageView.tsx`
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg '73\\.4%|21\\.7%|1\\.4|26\\.9%|使命很简单：让每一次投资，都更有把握。|开启新的旅程|让可信度看得见'`：提权环境确认预览中已保留一位小数指标，同时团队与加入我们等文字描述已回滚

## 团队区对齐微调任务

- [x] 定位左侧公司介绍与资质区和右侧创始人卡片未对齐的原因
- [x] 统一左右列的纵向节奏与卡片高度策略
- [x] 完成针对性校验并记录 review

## 团队区对齐微调 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx app/content/homepage.ts`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `HomepageView.tsx`
- `nl -ba app/components/homepage/HomepageView.tsx | sed -n '250,305p'`：确认团队区已改成桌面端共享两行的网格，左上公司介绍对应右上两位创始人，左下证照对应右下两位创始人
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'xl:grid-rows-\\[auto_auto\\]|xl:row-start-1|xl:row-start-2|经营资质|备案信息'`：提权环境确认预览已反映两行对齐结构和新的资质标题

## 团队区资质卡修正任务

- [x] 回滚导致资质卡被拉长的高度拉伸方案
- [x] 为两张资质图替换更自然的标题描述
- [x] 完成针对性校验并记录 review

## 团队区资质卡修正 Review

- `npm run lint -- app/components/homepage/HomepageView.tsx app/content/homepage.ts`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `HomepageView.tsx`
- `nl -ba app/components/homepage/HomepageView.tsx | sed -n '225,290p'`：确认已撤掉 `h-full` / `auto-rows-fr` / 拉伸式对齐，团队区恢复自然高度布局
- `nl -ba app/content/homepage.ts | sed -n '222,226p'`：确认两张资质图标题已改为 `经营资质`、`备案信息`
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg '经营资质|备案信息|class="grid gap-5 sm:grid-cols-3"|class="grid gap-5 md:grid-cols-2"'`：提权环境确认预览已反映新的资质标题和未拉伸的网格结构

## 创始人职位排版微调任务

- [x] 将创始人职位从 `CEO / 首席执行官` 整串文本改为分层展示
- [x] 保留现有卡片骨架，只调整头像右侧信息区
- [x] 完成针对性校验并记录 review

## 创始人职位排版微调 Review

- `npm run test -- tests/homepage-content.test.ts tests/homepage-view.test.tsx`：通过，2 个测试文件、7 个测试全部通过
- `npm run lint -- app/content/homepage.ts app/components/homepage/HomepageView.tsx tests/homepage-content.test.ts tests/homepage-view.test.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告，位置在 `HomepageView.tsx`
- `rg -n "member\\.title|shortTitle|fullTitle" app/components/homepage/HomepageView.tsx app/content/homepage.ts`：确认创始人职位已从单一 `title` 字符串切换为 `shortTitle + fullTitle`
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'CEO|首席执行官|rounded-full border border-\\[rgba\\(118,185,0,0\\.28\\)\\]|CEO / 首席执行官'`：提权环境确认预览里已出现 `CEO` 徽标和 `首席执行官` 全称，且不再渲染斜杠串联标题

## 创始人卡片间距微调任务

- [x] 放大创始人头像尺寸
- [x] 将头像右侧信息区向左收并增加右侧留白
- [x] 完成针对性校验并记录 review

## 创始人卡片间距微调 Review

- `npm run test -- tests/homepage-view.test.tsx`：通过，1 个测试文件、4 个测试全部通过
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg '陈东虎|whitespace-nowrap text-\\[1\\.35rem\\] font-bold'`：提权环境确认预览中创始人姓名已带单行展示类
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'h-24 w-24 shrink-0 rounded-full|min-w-0 pr-3 md:pr-4|flex items-start gap-3'`：提权环境确认创始人头像已放大，且文字区增加了右侧留白

## 联系方式入口微调任务

- [x] 删除联系方式中的 `B站` 入口
- [x] 完成针对性校验并记录 review

## 联系方式入口微调 Review

- `rg -n "B站|bilibili" app/content/homepage.ts app/components/homepage/HomepageView.tsx`：无输出，确认源码中已移除 `B站` 入口
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg 'B站|bilibili'`：无输出，确认预览页面中已不再渲染 `B站` 按钮
- `npm run lint -- app/content/homepage.ts`：通过

## 首页标题文案微调任务

- [x] 将团队区公司介绍中的标题句收敛为 `让每一次投资，都更有把握。`
- [x] 完成针对性校验并记录 review

## 首页标题文案微调 Review

- `nl -ba app/components/homepage/HomepageView.tsx | sed -n '262,278p'`：确认团队区公司介绍首句已改为 `让每一次投资，都更有把握。`
- `npm run lint -- app/components/homepage/HomepageView.tsx`：通过；保留 1 条既有 `@next/next/no-img-element` 警告
- `rg -n "天眼的愿景：" app/components/homepage/HomepageView.tsx app/content/homepage.ts app/layout.tsx`：无输出，确认源码里已无旧前缀
- `curl -s --max-time 5 http://127.0.0.1:3001 | rg -o '天眼的愿景：让每一次投资，都更有把握。'`：无输出，确认预览页里旧前缀已消失

## 首页首屏结构微调任务

- [x] 定位首屏标题、主图和指标区的当前结构与字号
- [ ] 完成首页首屏结构调整的现状分析
- [ ] 完成功能点设计并等待确认
- [ ] 完成风险与决策说明并等待确认
- [ ] 按确认方案实现首屏结构调整
- [ ] 完成针对性校验并记录 review

## Review 收敛修复任务

- [x] 核对 review 列表与当前代码，筛选本轮必要修复项
- [x] 输出并确认现状分析
- [x] 输出并确认功能点与修复范围
- [x] 输出并确认风险与关键决策
- [x] 按确认方案实现必要修复
- [x] 完成验证并记录 review

## Review 收敛修复现状分析

- 锚点遮挡问题成立：`app/components/site/SiteHeader.tsx` 的 `SiteHeader` 在 `header` 上使用 `sticky top-0`，而 `HomepageView` 里的 `research-system`、`capabilities`、`team-credentials`、`contact-careers` 各 section 仅定义 `id`，没有任何滚动偏移补偿，当前 hash 跳转会落到吸顶栏下方。
- 弹窗可访问性问题成立：`app/components/ImagePreviewModal.tsx` 的 `ImagePreviewModal` 与 `app/components/WeChatQRModal.tsx` 的 `WeChatQRModal` 都只做了点击蒙层关闭，没有 `role="dialog"`、`aria-modal`、Esc 关闭、焦点回收或背景滚动锁定。
- 关键图片性能问题成立：`app/components/site/SiteHeader.tsx` 的 `SiteHeader`、`app/components/ImagePreviewModal.tsx` 的 `ImagePreviewModal`、`app/components/WeChatQRModal.tsx` 的 `WeChatQRModal`、`app/components/homepage/HomepageView.tsx` 的 `ProductShowcaseGrid` / `AgentCoordinationPanel` / `TrustLayerPanel` / `ContactPanel` 均继续输出原生 `<img>`，没有稳定尺寸元数据；首屏主图也没有优先加载语义。
- 博客空状态问题成立：`app/components/blog/BlogIndexView.tsx` 的 `BlogIndexView` 直接解引用 `featured.slug`，而 `app/blog/posts.ts` 的 `getHomeResearchPosts` 返回签名要求必有 `featured`，当前如果已发布文章数为 0，会在列表页直接崩。
- 博客正文扩展性问题成立：`app/components/blog/BlogPostView.tsx` 的 `BlogPostView` 只有 `post.slug === "claude-code-setup-story"` 时才渲染正文；`app/blog/posts.ts` 的 `posts` 已经存在第二、第三篇草稿数据，一旦发布就只会显示头部信息。
- `basePath` 项属于条件问题：`next.config.ts` 目前在生产环境默认回退到 `"/skyeye_web"`；如果仍需兼容 GitHub Pages 子路径，这个默认值有意义，但如果未来只发根域名，它会继续带来错误链接风险。本轮是否修，取决于是否要保留 GitHub Pages 兼容。

## Review 收敛修复功能点与范围

- 推荐本轮必修 1：为首页 hash section 增加统一锚点偏移，保证 `SiteHeader` 吸顶时点击导航不会遮住各 section 标题。
- 推荐本轮必修 2：为 `ImagePreviewModal` 和 `WeChatQRModal` 补齐基础对话框行为，包括 `role="dialog"`、`aria-modal`、Esc 关闭、焦点回收和背景滚动锁定。
- 推荐本轮必修 3：将站点核心图片从原生 `<img>` 收敛到带稳定尺寸信息的方案，至少覆盖站点 Logo、首屏主图、产品证据图、头像/资质图、微信二维码和社交图标，并给首屏主图加优先加载语义。
- 推荐本轮必修 4：让 `/blog` 在 0 篇已发布文章时展示空状态而不是崩溃，`getHomeResearchPosts` 需要允许无 featured 结果，`BlogIndexView` 需要分支渲染。
- 推荐本轮必修 5：让博客详情页支持“正文按文章数据驱动渲染”，即保留 `claude-code-setup-story` 的诗歌特排，同时为其他文章提供通用正文结构，避免第二篇文章发布后只剩头图信息。
- 推荐本轮暂缓 6：`next.config.ts` 的 `basePath` 默认值先不在这轮一起改，除非确认要放弃 GitHub Pages 子路径兼容；否则容易把现有备用部署链路一起改坏。

## Review 收敛修复风险与决策

- 锚点偏移采用 CSS 统一处理，不在导航点击事件里写 JS 滚动补偿，避免破坏原生 hash 深链接和前进后退行为。
- 两个弹窗共享一套基础对话框行为，避免 `ImagePreviewModal` 与 `WeChatQRModal` 再次漂移。
- 图片性能修复只覆盖当前站点的关键可见图片，不顺手扩成整站图片体系重构，控制影响面。
- 博客列表把“无已发布文章”视为合法状态，在数据层和视图层同时兜底，不依赖调用方保证至少一篇。
- 博客详情保留 `claude-code-setup-story` 的诗歌特排，同时新增通用正文承载结构给未来文章复用。
- `next.config.ts` 的 `basePath` 默认逻辑本轮明确暂缓，不改动 GitHub Pages 备用链路。

## Review 收敛修复 Review

- `npm run test -- tests/homepage-view.test.tsx tests/modal-accessibility.test.tsx tests/blog-views.test.tsx`：通过，3 个测试文件、10 个测试全部通过，覆盖锚点类、弹窗语义/关闭行为、博客空状态和通用正文渲染
- `npm run test`：通过，5 个测试文件、15 个测试全部通过
- `npm run lint`：通过，无错误无警告
- `npm run build`：沙箱内首次构建因 Turbopack 在 CSS 处理阶段绑定端口失败；随后在沙箱外重跑通过，首页、博客列表页和 `/blog/claude-code-setup-story` 静态生成成功

## AGENTS 复制按钮排障修复任务

- [x] 复现 `recommended-agents-md` 文章复制按钮的实际故障，并定位根因
- [x] 先补一条能稳定暴露该故障的测试
- [x] 按根因修复复制按钮逻辑
- [x] 完成针对性校验并记录 review

## AGENTS 复制按钮排障修复 Review

- 根因定位：`app/blog/recommendedAgentsMarkdown.ts` 使用 `String.raw` 包裹 Markdown 模板字符串，导致源码里为模板字面量写的反引号转义 `\`` 被原样保留，复制到剪贴板后会多出反斜杠。
- `npm run test -- tests/blog-views.test.tsx`：通过，5 个测试全部通过；新增断言已覆盖面板代码行显示原始反引号，以及复制出的文本不再包含 `\`tasks/todo.md\`` 这类错误转义。
- `npm run lint -- app/blog/recommendedAgentsMarkdown.ts tests/blog-views.test.tsx`：通过，无错误无警告。
