import AvatarModal from "@/app/components/AvatarModal";
import ImagePreviewModal from "@/app/components/ImagePreviewModal";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import WeChatQRModal from "@/app/components/WeChatQRModal";
import {
  agentProfiles,
  careerRoles,
  companyProfile,
  credentialItems,
  heroContent,
  homepageMetrics,
  productShowcases,
  researchPipeline,
  socialLinks,
  type TeamMember,
  teamMembers,
} from "@/app/content/homepage";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* 统一渲染区块标题，控制大标题长度和摘要宽度，减少“一眼 AI 腔”的压迫感。 */
function SectionHeader({
  eyebrow,
  title,
  summary,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p
        className={[
          "mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em]",
          inverse ? "text-[#bff230]" : "text-[#76b900]",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "m-0 text-[2rem] font-bold leading-[1.02] tracking-[-0.05em] md:text-[2.8rem]",
          inverse ? "text-white" : "text-black",
        ].join(" ")}
      >
        {title}
      </h2>
      <p
        className={[
          "mt-4 max-w-[34rem] text-[0.95rem] leading-[1.75] md:text-base",
          inverse ? "text-[#a7a7a7]" : "text-[#4d4d4d]",
        ].join(" ")}
      >
        {summary}
      </p>
    </div>
  );
}

/* 首屏指标直接引用主图里的收益和风险数据，让首屏信息链条闭合。 */
function HeroMetrics() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {homepageMetrics.map((metric) => (
        /* 收益项用绿色高亮，让用户先看到正向结果；风险项继续保持白字。 */
        <div
          key={metric.label}
          className="border border-[rgba(94,94,94,0.95)] bg-[#080808] p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)]"
        >
          <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#898989]">
            {metric.label}
          </p>
          <p
            className={[
              "mt-3 text-[2rem] font-bold leading-none tracking-[-0.04em]",
              metric.label === "累计收益" || metric.label === "年化收益"
                ? "text-[#76b900]"
                : "text-white",
            ].join(" ")}
          >
            {metric.value}
          </p>
          <p className="mt-3 text-sm leading-[1.7] text-[#a7a7a7]">{metric.detail}</p>
        </div>
      ))}
    </div>
  );
}

/* 研究系统仍然用五步展示，但语言收紧到更像流程动作，而不是概念堆砌。 */
function ResearchPipelinePanel() {
  return (
    <div className="grid gap-px overflow-hidden border border-[rgba(94,94,94,0.95)] bg-[rgba(94,94,94,0.95)] lg:grid-cols-5">
      {researchPipeline.map((item) => (
        <div key={item.id} className="bg-[#050505] p-5">
          <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
            {item.step}
          </p>
          <h3 className="mt-5 text-[1.35rem] font-bold leading-[1.08] tracking-[-0.04em] text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-[1.8] text-[#a7a7a7]">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

/* 两条正式产品线按各自证据密度展示图片，避免为了对齐而强行保留无效辅图。 */
function ProductShowcaseGrid() {
  return (
    <div className="space-y-6">
      {productShowcases.map((product, index) => {
        const copyOrderClass = index % 2 === 0 ? "xl:order-1" : "xl:order-2";
        const mediaOrderClass = index % 2 === 0 ? "xl:order-2" : "xl:order-1";

        return (
          <article
            key={product.id}
            className="grid gap-6 border border-[rgba(94,94,94,0.95)] bg-[#050505] p-6 shadow-[0_0_5px_rgba(0,0,0,0.3)] xl:grid-cols-[0.86fr_1.14fr]"
          >
            <div className={copyOrderClass}>
              <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
                {product.tag}
              </p>
              <h3 className="mt-3 text-[2rem] font-bold leading-[1.04] tracking-[-0.05em] text-white">
                {product.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-[1.85] text-[#c6c6c6]">
                {product.summary}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {product.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="border border-[rgba(94,94,94,0.95)] bg-black px-3 py-4"
                  >
                    <p className="m-0 text-sm font-bold leading-[1.55] text-white">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`grid gap-4 ${mediaOrderClass}`}>
              <div>
                <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#898989]">
                  {product.primaryLabel}
                </p>
                <ImagePreviewModal
                  src={`${basePath}${product.primaryImageSrc}`}
                  alt={product.primaryImageAlt}
                  width={product.primaryImageWidth}
                  height={product.primaryImageHeight}
                  title={product.title}
                  subtitle={product.primaryLabel}
                  buttonClassName="w-full"
                  imageClassName="w-full border border-[rgba(94,94,94,0.95)] bg-white object-cover"
                  sizes="(min-width: 1280px) 42vw, 92vw"
                />
              </div>

              {product.secondaryLabel &&
              product.secondaryImageSrc &&
              product.secondaryImageAlt &&
              product.secondaryImageWidth &&
              product.secondaryImageHeight ? (
                <div>
                  <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#898989]">
                    {product.secondaryLabel}
                  </p>
                  <ImagePreviewModal
                    src={`${basePath}${product.secondaryImageSrc}`}
                    alt={product.secondaryImageAlt}
                    width={product.secondaryImageWidth}
                    height={product.secondaryImageHeight}
                    title={product.title}
                    subtitle={product.secondaryLabel}
                    buttonClassName="w-full"
                    imageClassName="w-full border border-[rgba(94,94,94,0.95)] bg-white object-cover"
                    sizes="(min-width: 1280px) 42vw, 92vw"
                  />
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* Agent 协同卡片复用创始人区的版式骨架，保持头像、标题和说明层级一致。 */
function AgentCoordinationPanel() {
  return (
    <div className="border border-[#d7d7d7] bg-[#ededed] p-5 shadow-[0_0_5px_rgba(0,0,0,0.12)]">
      <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
        Agent员工协同
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {agentProfiles.map((agent) => (
          <article
            key={agent.name}
            className="border border-[#d7d7d7] bg-white p-5 shadow-[0_0_5px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-start gap-4">
              <AvatarModal
                src={`${basePath}${agent.imageSrc}`}
                alt={`${agent.name} 头像`}
                name={agent.name}
                title={agent.title}
                width={agent.imageWidth}
                height={agent.imageHeight}
                className={`h-20 w-20 rounded-full border border-[#d7d7d7] object-cover ${agent.imageClassName || ""}`}
              />
              <div className="pt-1">
                <p className="m-0 text-sm font-bold uppercase tracking-[0.12em] text-[#76b900]">
                  {agent.title}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-[1.85] text-[#303030]">
              <span className="font-bold text-black">{agent.name}</span>
              <span>，{agent.summary}</span>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

/* 创始人卡片抽成独立组件，方便桌面端按两行对齐时复用同一套结构。 */
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="border border-[#d7d7d7] bg-[#f3f3f3] p-5 shadow-[0_0_5px_rgba(0,0,0,0.12)]">
      <div className="flex items-start gap-3">
        <AvatarModal
          src={`${basePath}${member.imageSrc}`}
          alt={`${member.name} 头像`}
          name={member.name}
          title={member.fullTitle}
          width={member.imageWidth}
          height={member.imageHeight}
          className={`h-24 w-24 shrink-0 rounded-full object-cover ${member.imageClassName || ""}`}
        />
        <div className="min-w-0 pr-3 md:pr-4">
          <p className="m-0 inline-flex whitespace-nowrap rounded-full border border-[rgba(118,185,0,0.28)] bg-[rgba(118,185,0,0.08)] px-2 py-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#76b900]">
            {member.shortTitle}
          </p>
          <p className="mt-3 whitespace-nowrap text-[0.9rem] font-medium leading-[1.35] text-[#5f5f5f]">
            {member.fullTitle}
          </p>
          <h3 className="mt-2 whitespace-nowrap text-[1.35rem] font-bold leading-[1.12] tracking-[-0.03em] text-black">
            {member.name}
          </h3>
        </div>
      </div>
      <p className="mt-5 text-sm leading-[1.85] text-[#303030]">{member.bio}</p>
    </article>
  );
}

/* 主信任层继续由真人团队、主体信息和公司资质承担，Agent 作为团队后的辅助协同层补充说明。 */
function TrustLayerPanel() {
  const firstFounderRow = teamMembers.slice(0, 2);
  const secondFounderRow = teamMembers.slice(2);

  return (
    <div className="space-y-6">
      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr] xl:grid-rows-[auto_auto]">
        <div className="border border-[#d7d7d7] bg-[#f3f3f3] p-5 shadow-[0_0_5px_rgba(0,0,0,0.12)] xl:row-start-1">
          <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
            Institution
          </p>
          <h3 className="mt-3 text-[1.85rem] font-bold leading-[1.08] tracking-[-0.04em] text-black">
            {companyProfile.name}
          </h3>
          <p className="mt-4 text-sm leading-[1.85] text-[#303030]">
            让每一次投资，都更有把握。

            天眼用 AI Agent 与自迭代的策略，帮助个体投资者更好的完成交易。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 xl:row-start-2 xl:h-full">
          {credentialItems.map((item) => (
            <div
              key={item.title}
              className="border border-[#d7d7d7] bg-[#f9f9f9] p-3 shadow-[0_0_5px_rgba(0,0,0,0.12)]"
            >
              <AvatarModal
                src={`${basePath}${item.imageSrc}`}
                alt={item.title}
                name={item.title}
                width={item.imageWidth}
                height={item.imageHeight}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-3 text-sm font-bold text-black">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:col-start-2 xl:row-start-1 xl:h-full">
          {firstFounderRow.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:col-start-2 xl:row-start-2 xl:h-full">
          {secondFounderRow.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      <AgentCoordinationPanel />
    </div>
  );
}

/* 结尾区继续保留招聘和联系入口，但让整体语气更干净、更像正式官网。 */
function ContactPanel() {
  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
      <div>
        <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#bff230]">
          Careers
        </p>
        <h3 className="mt-3 text-[2rem] font-bold leading-[1.06] tracking-[-0.05em] text-white">
          开启新的旅程
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-[#a7a7a7]">
          和我们一起在第四次工业革命的浪潮里，踏浪前行
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {careerRoles.map((role) => (
            <div key={role.title} className="border border-[rgba(94,94,94,0.95)] bg-[#050505] p-5">
              <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#76b900]">
                {role.tag}
              </p>
              <h4 className="mt-3 text-[1.3rem] font-bold leading-[1.18] tracking-[-0.03em] text-white">
                {role.title}
              </h4>
              <p className="mt-3 text-sm leading-[1.8] text-[#a7a7a7]">{role.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[rgba(118,185,0,0.45)] bg-[#050505] p-6 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
        <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#bff230]">
          Contact
        </p>
        <h3 className="mt-3 text-[1.75rem] font-bold leading-[1.08] tracking-[-0.04em] text-white">
          联系方式
        </h3>

        <div className="mt-6 space-y-4 text-sm text-[#a7a7a7]">
          <p className="m-0">
            <span className="font-bold uppercase tracking-[0.12em] text-white">Address</span>
            <br />
            {companyProfile.address}
          </p>
          <p className="m-0">
            <span className="font-bold uppercase tracking-[0.12em] text-white">Email</span>
            <br />
            <a
              href={`mailto:${companyProfile.email}`}
              className="text-white underline decoration-[#76b900] underline-offset-[6px]"
            >
              {companyProfile.email}
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <WeChatQRModal qrSrc={`${basePath}/imgs/wx.jpg`} qrWidth={828} qrHeight={1124} />
          {socialLinks.map((platform) => (
            <a
              key={platform.label}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[rgba(94,94,94,0.95)] px-4 py-2 text-sm font-bold text-white no-underline transition-colors hover:border-[#76b900] hover:text-[#76b900]"
            >
              <ResponsiveImage
                src={`${basePath}${platform.iconSrc}`}
                alt={platform.label}
                width={platform.iconWidth}
                height={platform.iconHeight}
                sizes="20px"
                className="h-5 w-5 object-contain"
              />
              {platform.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 首页主视图按确认后的新口径输出：使命句、双产品证据，以及以团队为主叙事的信任层。 */
export default function HomepageView() {
  return (
    <main>
      <section id="hero" className="bg-black py-14 text-white md:py-20">
        <div className="mx-auto w-[92%] max-w-[1200px]">
          <div className="grid items-start gap-10 xl:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#76b900]">
                {heroContent.eyebrow}
              </p>
              <h1 className="m-0 text-[2.9rem] font-bold leading-[0.98] tracking-[-0.07em] text-white md:text-[4.2rem]">
                {heroContent.title}
              </h1>
              <p className="mt-5 max-w-lg text-[1.1rem] font-bold leading-[1.45] text-white/92">
                {heroContent.subtitle}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-[1.85] text-[#a7a7a7] md:text-base">
                {heroContent.summary}
              </p>
            </div>

            <div className="border border-[rgba(94,94,94,0.95)] bg-[#050505] p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)] md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#76b900]">
                    {heroContent.chartLabel}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-[#898989]">
                    {heroContent.chartDetail}
                  </p>
                </div>
              </div>

              <ImagePreviewModal
                src={`${basePath}${heroContent.chartSrc}`}
                alt={heroContent.chartAlt}
                width={heroContent.chartWidth}
                height={heroContent.chartHeight}
                title="TX1 回测总览"
                subtitle="首屏主图"
                buttonClassName="w-full"
                imageClassName="w-full border border-[rgba(94,94,94,0.95)] bg-white object-cover"
                sizes="(min-width: 1280px) 54vw, 92vw"
                priority
              />
            </div>
          </div>

          <div className="mt-8">
            <HeroMetrics />
          </div>
        </div>
      </section>

      <section id="research-system" className="anchor-section bg-[#020202] py-16 text-white md:py-20">
        <div className="mx-auto w-[92%] max-w-[1200px]">
          <SectionHeader
            eyebrow="Research System"
            title="先研究，再出手"
            summary="天眼 7 x 24小时扫描市场热点、板块轮到、个股异动"
            inverse
          />
          <ResearchPipelinePanel />
        </div>
      </section>

      <section id="capabilities" className="anchor-section bg-black py-16 text-white md:py-20">
        <div className="mx-auto w-[92%] max-w-[1200px]">
          <SectionHeader
            eyebrow="Products & Evidence"
            title="多条产品线"
            summary="多种自研产品，严选精品策略"
            inverse
          />
          <ProductShowcaseGrid />
        </div>
      </section>

      <section id="team-credentials" className="anchor-section bg-black py-16 text-white md:py-20">
        <div className="mx-auto w-[92%] max-w-[1200px]">
          <SectionHeader
            eyebrow="Team & Credentials"
            title="让可信度看得见"
            summary="专业可靠的团队"
            inverse
          />
          <TrustLayerPanel />
        </div>
      </section>

      <section id="contact-careers" className="anchor-section bg-[#020202] py-16 text-white md:py-20">
        <div className="mx-auto w-[92%] max-w-[1200px]">
          <SectionHeader
            eyebrow="Contact & Careers"
            title="加入我们"
            summary="加入天眼投资，与我们一起构建 AI 投资的未来"
            inverse
          />
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
