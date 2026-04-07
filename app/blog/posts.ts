export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  quote: string;
  excerpt: string;
  intro?: string;
  tags: string[];
  category: string;
  readTime: string;
  published: boolean;
  featuredOnHome?: boolean;
  body?: BlogPostSection[];
}

export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const categoryColors: Record<string, string> = {
  STORY: "#f4bf75",
  TECH: "#b5e853",
  RESEARCH: "#63c0f5",
};

export const posts: BlogPost[] = [
  {
    slug: "claude-code-setup-story",
    title: "智取Claude记",
    date: "2026-03-28",
    quote: "记录一次艰难的配置Claude Code Pro订阅的历程。",
    excerpt: "一篇记录 Claude Code Pro 订阅配置、支付处理和代理链路打通过程的技术纪实。",
    intro: "说实话，作为一个在国内写代码的人，想用上 Claude Code Pro 真的没那么容易。从注册美区账号到搞定礼品卡充值，再到折腾 VPN、SSH 隧道、proxychains……中间踩了无数的坑。但好在最后跑通了，而且整个过程还挺有成就感的。下面这首七言叙事诗，就是我把这段经历写成了诗，算是给自己一个交代吧。",
    tags: ["AI", "Claude", "诗词", "技术"],
    category: "STORY",
    readTime: "5 min",
    published: true,
    featuredOnHome: true,
  },
  {
    slug: "ai-agent-quant-trading",
    title: "AI Agent 驱动的量化交易：从理论到实践",
    date: "2026-04-05",
    quote: "当我第一次让AI自己决定买卖点的时候，手心全是汗。",
    excerpt: "深入探讨如何将大语言模型与传统量化策略结合，构建具备自主决策能力的智能交易系统。",
    tags: ["AI Agent", "量化交易", "策略"],
    category: "TECH",
    readTime: "12 min",
    published: false,
    body: [
      {
        heading: "研究框架",
        paragraphs: [
          "先把市场问题拆成可验证的研究假设，再让 Agent 并行完成取数、整理和回测。",
          "研究流程的目标不是让模型直接替你下注，而是让每一步判断都能被复盘和质疑。",
        ],
      },
      {
        heading: "执行链路",
        paragraphs: [
          "从市场扫描到候选信号生成，再到回测与风控约束，整条链路需要统一的任务编排和结果归档。",
        ],
        bullets: ["市场异动抓取", "实验任务拆分", "回测结果回写", "策略结论沉淀"],
      },
    ],
  },
  {
    slug: "recommended-agents-md",
    title: "推荐一份好用的 AGENTS.md",
    date: "2026-04-07",
    quote: "AI 不是不聪明，是不知道该在哪停。这套东西解决的就是这个问题。",
    excerpt: "分享一份适合搭配 Codex 使用的 AGENTS.md。核心不是堆规则，而是用渐进式 Spec 把不同复杂度的任务切到合适流程里。",
    intro: "这份 AGENTS.md 我自己用下来很顺手，尤其适合刚开始和 Codex 配合的新手伙伴。它把什么时候直接做、什么时候先写 Spec、什么时候要走完整评审讲得很清楚，用起来不容易失控。",
    tags: ["Codex", "AGENTS.md", "Spec", "工作流"],
    category: "TECH",
    readTime: "4 min",
    published: true,
    body: [
      {
        heading: "为什么推荐",
        paragraphs: [
          "这份 AGENTS.md 最好的地方，不是规则堆得多，而是很多话都写得很直接，拿来就能用。",
          "它把语言、注意事项、代码规范和任务管理放在同一个约束体系里，尤其适合刚开始和 Codex 配合的新手伙伴。",
        ],
        bullets: ["默认中文交流", "默认不自动生成说明文档", "函数和关键逻辑都要求中文注释"],
      },
      {
        heading: "渐进式 Spec",
        paragraphs: [
          "它最核心的一段就是渐进式 Spec：不同复杂度的需求，走不同深度的流程，偶然复杂度应该尽可能压缩。",
        ],
        bullets: [
          "简单（改字段、修 bug）：直接执行，无需 Spec",
          "中等（3+ 步骤，有架构决策）：写轻量 Spec，HARD-GATE 后再编码",
          "复杂（跨模块、多系统）：完整 Propose → Apply → Review",
        ],
      },
      {
        heading: "Spec 三铁律",
        paragraphs: [
          "这套约束最有力量的地方，是把 Spec 放在代码之前，也把执行中的偏差重新拉回到文档真相上。",
        ],
        bullets: [
          "No Spec, No Code",
          "Spec is Truth，代码和 Spec 冲突，错的是代码",
          "Reverse Sync，执行中发现偏差，先改 Spec 再改代码",
        ],
      },
      {
        heading: "不只是 Spec",
        paragraphs: [
          "这份规则真正完整的地方，在于它不只讲 Spec，还把调研、规划、执行、验证和复盘都串起来了。",
        ],
        bullets: [
          "Plan Node Default：中等及以上复杂度任务默认进入 plan mode",
          "Subagent Strategy：Research、探索和并行分析尽量交给 subagent",
          "执行自由度曲线：调研、设计、规划、执行、验收各阶段自由度不同",
          "Verification 铁律：未经验证，不得标记为完成",
          "Task Management：先写计划、追踪进度、记录 review",
          "Core Principles：Simplicity First、Minimal Impact、意图分离",
        ],
      },
    ],
  },
  {
    slug: "mid-term-trend-hunting",
    title: "中期趋势捕捉方法论：多因子模型实战",
    date: "2026-04-12",
    quote: "回过头看，那些让你最难受的回撤，恰恰是策略最该坚持的时候。",
    excerpt: "复盘天眼策略在2024-2025年行情中的表现，拆解趋势识别与仓位管理的核心逻辑。",
    tags: ["量化", "趋势", "因子模型"],
    category: "RESEARCH",
    readTime: "15 min",
    published: false,
    body: [
      {
        heading: "趋势识别",
        paragraphs: [
          "中期趋势的核心不是预测拐点，而是识别趋势仍然成立时的持仓窗口。",
        ],
      },
      {
        heading: "仓位管理",
        paragraphs: [
          "把回撤容忍度、因子拥挤度和波动状态一起纳入仓位分配，才能避免只会解释历史而不能指导执行。",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/* 统一筛选并按日期倒序排列已发布文章，避免各处各自维护排序逻辑。 */
export function getPublishedPosts(allPosts: BlogPost[] = posts): BlogPost[] {
  return allPosts
    .filter((post) => post.published)
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());
}

/* 首页研究区固定返回一篇主文章与最多两篇辅助文章。 */
export function getHomeResearchPosts(allPosts: BlogPost[] = posts): {
  featured: BlogPost | null;
  secondary: BlogPost[];
} {
  const publishedPosts = getPublishedPosts(allPosts);
  const featuredPost =
    publishedPosts.find((post) => post.featuredOnHome) ?? publishedPosts[0] ?? null;

  return {
    featured: featuredPost,
    secondary: featuredPost
      ? publishedPosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2)
      : [],
  };
}
