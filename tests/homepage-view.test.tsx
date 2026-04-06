import { render, screen } from "@testing-library/react";
import HomepageView from "@/app/components/homepage/HomepageView";

describe("homepage view", () => {
  /* 首页收敛掉博客区后，应只保留 5 段主叙事，避免内容重复。 */
  it("renders the five approved homepage sections in order", () => {
    const { container } = render(<HomepageView />);

    const sectionIds = Array.from(container.querySelectorAll("section[id]")).map(
      (element) => element.id,
    );

    expect(sectionIds).toEqual([
      "hero",
      "research-system",
      "capabilities",
      "team-credentials",
      "contact-careers",
    ]);
  });

  /* 首页首屏要保留真实回测指标，但不再重复承载博客文章列表。 */
  it("surfaces hero metrics without repeating blog entries", () => {
    render(<HomepageView />);

    expect(screen.getByText("累计收益")).toBeInTheDocument();
    const totalReturn = screen.getByText("73.4%");
    const annualReturn = screen.getByText("21.7%");

    expect(totalReturn).toBeInTheDocument();
    expect(annualReturn).toBeInTheDocument();
    expect(screen.getByText("1.4")).toBeInTheDocument();
    expect(screen.getByText("26.9%")).toBeInTheDocument();
    expect(totalReturn.className).toContain("text-[#76b900]");
    expect(annualReturn.className).toContain("text-[#76b900]");
    expect(screen.queryByText("智取Claude记")).not.toBeInTheDocument();
  });

  /* 第二轮首页需要把使命句、双产品线和 Agent 辅助层同时呈现出来。 */
  it("renders the confirmed mission, product showcases, and auxiliary agents", () => {
    render(<HomepageView />);

    expect(
      screen.getByRole("heading", { name: "让每一次投资，都更有把握" }),
    ).toBeInTheDocument();
    expect(screen.getByText("红利低波系列")).toBeInTheDocument();
    expect(screen.getByText("TX1 系列")).toBeInTheDocument();
    expect(screen.getByText("Agent员工协同")).toBeInTheDocument();
    expect(screen.getByText("Claude")).toBeInTheDocument();
    expect(screen.getByText("豆包")).toBeInTheDocument();
  });

  /* 创始人职位要拆成缩写和中文全称两层，避免浏览器把中文职位硬拆行。 */
  it("renders founder titles as separate short and full labels", () => {
    render(<HomepageView />);

    const founderName = screen.getByText("陈东虎");

    expect(screen.getByText("CEO")).toBeInTheDocument();
    expect(screen.getByText("首席执行官")).toBeInTheDocument();
    expect(screen.queryByText("CEO / 首席执行官")).not.toBeInTheDocument();
    expect(founderName.className).toContain("whitespace-nowrap");
  });
});
