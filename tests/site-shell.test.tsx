import { render, screen } from "@testing-library/react";
import SiteFooter from "@/app/components/site/SiteFooter";
import SiteHeader from "@/app/components/site/SiteHeader";

describe("site shell", () => {
  /* 站点导航需要体现收敛后的首页结构，并把博客入口统一到 /blog。 */
  it("renders the research-first navigation", () => {
    render(<SiteHeader />);

    ["首页", "研究系统", "产品能力", "团队", "加入我们", "博客"].forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });

    expect(screen.queryByRole("link", { name: "研究文章" })).not.toBeInTheDocument();
  });

  /* 页脚需要保留公司主体与联系信息，确保重构时不丢掉可信度材料。 */
  it("renders the institutional footer contact details", () => {
    render(<SiteFooter />);

    expect(screen.getByText("天眼投资北京有限公司")).toBeInTheDocument();
    expect(screen.getByText("contact@skyeye-invest.com")).toBeInTheDocument();
  });
});
