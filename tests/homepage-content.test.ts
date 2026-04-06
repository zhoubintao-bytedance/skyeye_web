import { describe, expect, it } from "vitest";
import {
  agentProfiles,
  homepageMetrics,
  homepageNavItems,
  heroContent,
  productShowcases,
  researchPipeline,
  teamMembers,
} from "@/app/content/homepage";
import {
  getHomeResearchPosts,
  getPublishedPosts,
  posts,
} from "@/app/blog/posts";

describe("homepage content model", () => {
  /* 验证首页导航、指标和研究流程顺序，避免后续改版打乱叙事结构。 */
  it("keeps the homepage narrative order stable", () => {
    expect(homepageNavItems.map((item) => item.id)).toEqual([
      "hero",
      "research-system",
      "capabilities",
      "team-credentials",
      "contact-careers",
    ]);

    expect(homepageMetrics.map((item) => item.value)).toEqual([
      "73.4%",
      "21.7%",
      "1.4",
      "26.9%",
    ]);

    expect(researchPipeline.map((item) => item.id)).toEqual([
      "monitoring",
      "agent-analysis",
      "quant-validation",
      "risk-constraints",
      "signal-delivery",
    ]);
  });

  /* 确保首页研究区有固定 featured 文章和最多两篇辅助文章。 */
  it("promotes the intended featured research post", () => {
    const { featured, secondary } = getHomeResearchPosts(posts);
    const publishedPosts = getPublishedPosts(posts);

    expect(featured.slug).toBe("claude-code-setup-story");
    expect(secondary).toHaveLength(Math.min(publishedPosts.length - 1, 2));
  });

  /* 第二轮首页微调需要锁定使命句、双产品证据区和 Agent 辅助层。 */
  it("captures the confirmed mission and product evidence model", () => {
    expect(heroContent.title).toBe("让每一次投资，都更有把握");
    expect(productShowcases.map((item) => item.id)).toEqual([
      "dividend-low-vol",
      "tx1",
    ]);
    expect(productShowcases.every((item) => Boolean(item.primaryImageSrc))).toBe(true);
    expect(agentProfiles).toHaveLength(4);
    expect(teamMembers[0]?.shortTitle).toBe("CEO");
    expect(teamMembers[0]?.fullTitle).toBe("首席执行官");
  });
});
