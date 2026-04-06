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
    excerpt: "大厂精英键盘响，欲驭Opus写华章。一首七言叙事诗，记录从零到一打通Claude Code的全过程 —— VPN、美区账号、礼品卡、SSH隧道、proxychains，八步飞渡天堑。",
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
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/* 统一筛选已发布文章，避免首页与博客页各自维护过滤逻辑。 */
export function getPublishedPosts(allPosts: BlogPost[] = posts): BlogPost[] {
  return allPosts.filter((post) => post.published);
}

/* 首页研究区固定返回一篇主文章与最多两篇辅助文章。 */
export function getHomeResearchPosts(allPosts: BlogPost[] = posts): {
  featured: BlogPost;
  secondary: BlogPost[];
} {
  const publishedPosts = getPublishedPosts(allPosts);
  const featuredPost = publishedPosts.find((post) => post.featuredOnHome) ?? publishedPosts[0];

  return {
    featured: featuredPost,
    secondary: publishedPosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 2),
  };
}
