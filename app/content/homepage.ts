export interface HomepageNavItem {
  id: string;
  label: string;
  href: string;
}

export interface HomepageMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ResearchStep {
  id: string;
  step: string;
  title: string;
  summary: string;
}

export interface ProductShowcase {
  id: string;
  tag: string;
  title: string;
  summary: string;
  highlights: string[];
  primaryLabel: string;
  primaryImageSrc: string;
  primaryImageAlt: string;
  primaryImageWidth: number;
  primaryImageHeight: number;
  secondaryLabel?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  secondaryImageWidth?: number;
  secondaryImageHeight?: number;
}

export interface AgentProfile {
  name: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
}

export interface TeamMember {
  name: string;
  shortTitle: string;
  fullTitle: string;
  bio: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
}

export interface CredentialItem {
  title: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

export interface CareerRole {
  tag: string;
  title: string;
  summary: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}

/* 首页导航配置统一从这里读取，避免首页、导航和页脚顺序不一致。 */
export const homepageNavItems: HomepageNavItem[] = [
  { id: "hero", label: "首页", href: "#hero" },
  { id: "research-system", label: "研究系统", href: "#research-system" },
  { id: "capabilities", label: "产品能力", href: "#capabilities" },
  { id: "team-credentials", label: "团队", href: "#team-credentials" },
  { id: "contact-careers", label: "加入我们", href: "#contact-careers" },
];

/* 首屏核心指标直接贴合 TX1 曲线，避免指标和主图各说各话。 */
export const homepageMetrics: HomepageMetric[] = [
  { label: "累计收益", value: "73.4%", detail: "" },
  { label: "年化收益", value: "21.7%", detail: "" },
  { label: "索提诺比率", value: "1.4", detail: "" },
  { label: "最大回撤", value: "26.9%", detail: "" },
];

/* 研究流程保留五步，但文案改成更短、更像系统动作的表达。 */
export const researchPipeline: ResearchStep[] = [
  {
    id: "monitoring",
    step: "01",
    title: "市场扫描",
    summary: "先看行业、风格和关键异动，缩小当天值得研究的范围。",
  },
  {
    id: "agent-analysis",
    step: "02",
    title: "Agent 协作",
    summary: "把抓取、整理、编码和初步判断拆给不同 Agent 并行处理。",
  },
  {
    id: "quant-validation",
    step: "03",
    title: "量化验证",
    summary: "用回测、打分和归因把直觉变成可以反驳的假设。",
  },
  {
    id: "risk-constraints",
    step: "04",
    title: "风险约束",
    summary: "把仓位、回撤和节奏提前写进系统，而不是事后解释。",
  },
  {
    id: "signal-delivery",
    step: "05",
    title: "产品交付",
    summary: "把研究结果沉淀到红利低波与 TX1 等正式产品线上。",
  },
];

/* 页脚保留的公司主体信息，同时把使命句写进对外描述。 */
export const companyProfile = {
  name: "天眼投资北京有限公司",
  description: "让每一次投资，都更有把握。天眼用 AI Agent 与自迭代的策略，帮助个体投资者更好的交易。",
  email: "contact@skyeye-invest.com",
  address: "北京市 海淀区 大钟寺宇宙研发中心",
};

/* 站点品牌图只在头部使用，单独导出避免把 logo 细节塞进主体信息对象。 */
export const siteBranding = {
  logoWidth: 1200,
  logoHeight: 468,
};

/* 首屏品牌主句、短说明和图表统一收口，避免再回到长句堆砌。 */
export const heroContent = {
  eyebrow: "SKYEYE RESEARCH",
  title: "让每一次投资，都更有把握",
  subtitle: "天眼: 一套自研究, 自迭代的量化交易系统",
  summary: "Agent 全天候自动挖因子，自动跑实验并回测，把情绪判断变成有据可查的决策。",
  chartLabel: "TX1 回测总览",
  chartDetail: "2023.04 ~ 2026.04，滚动评分策略回测结果、风险指标与沪深300基准对比",
  chartSrc: "/imgs/tx1-rolling-score-backtest.png",
  chartAlt: "TX1 滚动评分策略回测结果与风险收益指标总览",
  chartWidth: 2397,
  chartHeight: 1271,
};

/* 两条正式产品线各自绑定真实图表，辅图按产品需要决定是否展示。 */
export const productShowcases: ProductShowcase[] = [
  {
    id: "dividend-low-vol",
    tag: "PRODUCT 01",
    title: "红利低波系列",
    summary:
      "围绕红利、估值和价格节奏做低频评分，并用回测结果验证稳健配置场景下的收益与回撤表现。",
    highlights: ["股息估值联合打分", "回测结果可复盘", "低频配置节奏"],
    primaryLabel: "回测结果",
    primaryImageSrc: "/imgs/dividend-low-vol-backtest.png",
    primaryImageAlt: "红利低波系列回测结果图",
    primaryImageWidth: 1754,
    primaryImageHeight: 556,
  },
  {
    id: "tx1",
    tag: "PRODUCT 02",
    title: "TX1 系列",
    summary:
      "TX1 聚焦横截面选股与滚动评估，用样本外曲线约束研究判断，而不是只看单次回测。",
    highlights: ["横截面选股", "滚动打分评估", "样本外曲线复盘"],
    primaryLabel: "TX1策略收益曲线",
    primaryImageSrc: "/imgs/tx1-performance.png",
    primaryImageAlt: "TX1 系列近三年策略曲线与风险收益指标",
    primaryImageWidth: 2397,
    primaryImageHeight: 1271,
  },
];

/* 四位 Agent 保留头像，但只作为辅助能力层出现，不抢主信任叙事。 */
export const agentProfiles: AgentProfile[] = [
  {
    name: "Claude",
    title: "深度研究",
    summary: "负责长文本梳理、复杂问题拆解和代码实验辅助。",
    imageSrc: "/imgs/Claude.png",
    imageWidth: 460,
    imageHeight: 460,
  },
  {
    name: "豆包",
    title: "信息整理",
    summary: "负责中文市场信息抓取、摘要整理和初步归档。",
    imageSrc: "/imgs/doubao.png",
    imageWidth: 1190,
    imageHeight: 1200,
  },
  {
    name: "Clawbot",
    title: "执行协同",
    summary: "负责工具调用、流程推进和跨任务结果汇总。",
    imageSrc: "/imgs/clawbot.png",
    imageWidth: 600,
    imageHeight: 600,
  },
  {
    name: "小美",
    title: "对外展示",
    summary: "负责图文整理、表达收口和对外展示辅助。",
    imageSrc: "/imgs/xiaomei.jpg",
    imageWidth: 1200,
    imageHeight: 1197,
  },
];

/* 团队卡片继续承担主信任层，只压缩文字长度，不再喧宾夺主。 */
export const teamMembers: TeamMember[] = [
  {
    name: "陈东虎",
    shortTitle: "CEO",
    fullTitle: "首席执行官",
    bio: "北京大学计算机专业背景，长期从事机器学习与量化投资研究，主导天眼的研究框架与系统方向。",
    imageSrc: "/imgs/ceo.jpg",
    imageWidth: 951,
    imageHeight: 1200,
    imageClassName: "object-[50%_20%]",
  },
  {
    name: "老古董",
    shortTitle: "CTO",
    fullTitle: "首席技术官",
    bio: "卡耐基梅隆大学博士，负责量化交易平台、Agent 工具链与研究系统工程架构。",
    imageSrc: "/imgs/baba.jpg",
    imageWidth: 905,
    imageHeight: 1200,
  },
  {
    name: "吴洪佳",
    shortTitle: "COO",
    fullTitle: "首席运营官",
    bio: "芝加哥大学布斯商学院背景，负责运营协同、战略执行与业务增长节奏。",
    imageSrc: "/imgs/coo.jpg",
    imageWidth: 953,
    imageHeight: 1200,
  },
  {
    name: "阿知",
    shortTitle: "CFO",
    fullTitle: "首席财务官",
    bio: "清华大学金融背景，统筹财务核算、审计风控与长期资金规划。",
    imageSrc: "/imgs/cfo.jpg",
    imageWidth: 946,
    imageHeight: 1200,
    imageClassName: "object-[50%_20%]",
  },
];

/* 资质与公司证照继续作为对外可信度材料。 */
export const credentialItems: CredentialItem[] = [
  { title: "营业执照", imageSrc: "/imgs/company.jpg", imageWidth: 646, imageHeight: 428 },
  { title: "经营资质", imageSrc: "/imgs/zhizhao1.jpg", imageWidth: 1200, imageHeight: 765 },
  { title: "备案信息", imageSrc: "/imgs/zhizhao2.jpg", imageWidth: 1200, imageHeight: 837 },
];

/* 招聘收口继续只保留最需要的岗位线索，避免尾部变成长列表。 */
export const careerRoles: CareerRole[] = [
  {
    tag: "RESEARCH",
    title: "量化策略研究员",
    summary: "负责中低频量化策略研发、因子验证与组合回测迭代。",
  },
  {
    tag: "AGENT",
    title: "AI Agent 工程师",
    summary: "负责研究 Agent 工具链、任务编排与自动化分析系统。",
  },
  {
    tag: "FULLSTACK",
    title: "全栈开发工程师",
    summary: "负责研究产品、数据可视化与内部分析工具的前后端交付。",
  },
  {
    tag: "DATA",
    title: "数据工程师",
    summary: "负责市场数据采集、清洗与特征工程数据管线。",
  },
];

/* 对外社交入口保留现有渠道，并交给收口区统一展示。 */
export const socialLinks: SocialLink[] = [
  {
    label: "知乎",
    href: "https://www.zhihu.com/people/btty-23",
    iconSrc: "/imgs/zhihu.svg",
    iconWidth: 24,
    iconHeight: 24,
  },
];
