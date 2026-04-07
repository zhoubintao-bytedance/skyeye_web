import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BlogIndexView from "@/app/components/blog/BlogIndexView";
import BlogPostView from "@/app/components/blog/BlogPostView";
import { getPostBySlug, posts } from "@/app/blog/posts";
import { vi } from "vitest";

describe("blog views", () => {
  /* 博客列表页里的多篇文章应使用统一模板，按竖向单列排列。 */
  it("renders published research entries as a unified vertical list", () => {
    render(<BlogIndexView posts={posts} />);

    expect(screen.getByRole("heading", { name: "博客" })).toHaveClass("bg-[#76b900]", "text-black");
    expect(screen.getByText("智取Claude记")).toBeInTheDocument();
    expect(screen.getByText("推荐一份好用的 AGENTS.md")).toBeInTheDocument();
    expect(
      screen.getByText("一篇记录 Claude Code Pro 订阅配置、支付处理和代理链路打通过程的技术纪实。"),
    ).toBeInTheDocument();
    expect(screen.queryByText(/大厂精英键盘响/)).not.toBeInTheDocument();
    expect(
      screen.queryByText("集中查看 Skyeye 的研究文章、产品进展和技术记录。"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Featured")).not.toBeInTheDocument();
    expect(screen.queryByText("More Research")).not.toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 2 }).map((item) => item.textContent)).toEqual([
      "推荐一份好用的 AGENTS.md",
      "智取Claude记",
    ]);
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
    expect(screen.getByRole("link", { name: "博客列表" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "返回首页" })).toBeInTheDocument();
    expect(
      screen.queryByText(
        "大厂精英键盘响，欲驭Opus写华章。一首七言叙事诗，记录从零到一打通Claude Code的全过程 —— VPN、美区账号、礼品卡、SSH隧道、proxychains，八步飞渡天堑。",
      ),
    ).not.toBeInTheDocument();
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
  it("renders the upgraded generic detail template for the published agents article", () => {
    const post = getPostBySlug("recommended-agents-md");

    if (!post) {
      throw new Error("expected published agents post fixture");
    }

    render(<BlogPostView post={post} />);

    expect(screen.getByRole("heading", { name: "推荐一份好用的 AGENTS.md" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "渐进式 Spec" })).toBeInTheDocument();
    expect(screen.getByText(/AI 不是不聪明，是不知道该在哪停/)).toBeInTheDocument();
    expect(screen.queryByText("核心摘要")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "博客列表" })).toBeInTheDocument();
  });

  /* AGENTS 文章需要提供可一键复制的 Markdown 面板，方便用户直接粘贴使用。 */
  it("renders a copyable markdown panel for the published agents article", async () => {
    const post = getPostBySlug("recommended-agents-md");

    if (!post) {
      throw new Error("expected published agents post fixture");
    }

    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(globalThis.navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<BlogPostView post={post} />);

    const panelHint = screen.getByText("一键复制后可直接粘贴到本地规则文件。");
    const finalSectionHeading = screen.getByRole("heading", { name: "不只是 Spec" });

    expect(
      finalSectionHeading.compareDocumentPosition(panelHint) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("001")).not.toBeInTheDocument();
    expect(screen.getByText(/# 语言/)).toBeInTheDocument();
    expect(
      screen.getByText("1. **先写计划**：将计划写入 `tasks/todo.md`，使用可勾选的任务项"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "copy AGENTS.md 文本" })).toHaveTextContent("copy");

    fireEvent.click(screen.getByRole("button", { name: "copy AGENTS.md 文本" }));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledTimes(1);
    });
    expect(writeText.mock.calls[0][0]).toContain("# Workflow Orchestration");
    expect(writeText.mock.calls[0][0]).toContain("和我对话的语言默认中文");
    expect(writeText.mock.calls[0][0]).toContain("将计划写入 `tasks/todo.md`");
    expect(writeText.mock.calls[0][0]).not.toContain("\\`tasks/todo.md\\`");
    expect(await screen.findByRole("button", { name: "copied AGENTS.md 文本" })).toBeInTheDocument();
  });
});
