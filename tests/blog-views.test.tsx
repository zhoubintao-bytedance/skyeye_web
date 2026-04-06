import { render, screen } from "@testing-library/react";
import BlogIndexView from "@/app/components/blog/BlogIndexView";
import BlogPostView from "@/app/components/blog/BlogPostView";
import { getPostBySlug, posts } from "@/app/blog/posts";

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
});
