import { render, screen } from "@testing-library/react";
import BlogIndexView from "@/app/components/blog/BlogIndexView";
import BlogPostView from "@/app/components/blog/BlogPostView";
import { BlogPost, getPostBySlug, posts } from "@/app/blog/posts";

describe("blog views", () => {
  /* 博客列表页要继续承载文章列表，并把对外标题统一成“博客”。 */
  it("renders published research entries in the redesigned index", () => {
    render(<BlogIndexView posts={posts} />);

    expect(screen.getByRole("heading", { name: "博客" })).toBeInTheDocument();
    expect(screen.getByText("智取Claude记")).toBeInTheDocument();
    expect(
      screen.queryByText("AI Agent 驱动的量化交易：从理论到实践"),
    ).not.toBeInTheDocument();
  });

  /* 文章详情页需要保留已有正文渲染，同时换成新的站点 chrome。 */
  it("renders the published post detail view", () => {
    const post = getPostBySlug("claude-code-setup-story");

    if (!post) {
      throw new Error("expected published post fixture");
    }

    render(<BlogPostView post={post} />);

    expect(screen.getAllByRole("heading", { name: "智取Claude记" }).length).toBeGreaterThan(0);
    expect(screen.getByText("天眼投资CEO出品")).toBeInTheDocument();
  });

  /* 当没有任何已发布文章时，列表页应该展示空状态而不是因为 featured 缺失崩溃。 */
  it("renders an empty state when no posts are published", () => {
    render(
      <BlogIndexView
        posts={posts.map((post) => ({
          ...post,
          published: false,
          featuredOnHome: false,
        }))}
      />,
    );

    expect(screen.getByRole("heading", { name: "博客" })).toBeInTheDocument();
    expect(screen.getByText("研究内容正在整理中")).toBeInTheDocument();
  });

  /* 非诗歌文章发布后也要有通用正文承载，而不是只显示头部信息。 */
  it("renders generic body content for non-poem posts", () => {
    const post: BlogPost = {
      slug: "ai-agent-quant-trading",
      title: "AI Agent 驱动的量化交易：从理论到实践",
      date: "2026-04-05",
      quote: "当我第一次让AI自己决定买卖点的时候，手心全是汗。",
      excerpt: "深入探讨如何将大语言模型与传统量化策略结合，构建具备自主决策能力的智能交易系统。",
      intro: "这篇文章从研究框架、执行链路和风控约束三个角度展开。",
      tags: ["AI Agent", "量化交易", "策略"],
      category: "TECH",
      readTime: "12 min",
      published: true,
      body: [
        {
          heading: "研究框架",
          paragraphs: ["先把市场问题拆成可验证的研究假设，再让 Agent 并行完成取数、整理和回测。"],
        },
      ],
    };

    render(<BlogPostView post={post} />);

    expect(screen.getByRole("heading", { name: "研究框架" })).toBeInTheDocument();
    expect(
      screen.getByText("先把市场问题拆成可验证的研究假设，再让 Agent 并行完成取数、整理和回测。"),
    ).toBeInTheDocument();
  });
});
