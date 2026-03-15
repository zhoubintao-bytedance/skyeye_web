import AvatarModal from "./components/AvatarModal";
import WeChatQRModal from "./components/WeChatQRModal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const products = [
    {
      tag: "CORE",
      tagColor: "#b5e853",
      title: "智能交易助手",
      description: "基于领先AI Agent架构的智能交易辅助系统，全天候监控市场动态，持续输出高质量交易建议与风控提示。",
      features: [
        "实时市场监控与数据分析",
        "智能交易信号推送",
        "个性化风险控制建议",
        "投资组合优化建议",
        "市场情绪分析"
      ]
    },
    {
      tag: "TOOL",
      tagColor: "#aa759f",
      title: "量化分析平台",
      description: "专业量化分析引擎，覆盖多维度数据分析与策略回测，系统化验证并持续迭代优化投资策略。",
      features: [
        "历史数据回测",
        "多因子分析",
        "策略性能评估",
        "风险收益分析",
        "可视化报告生成"
      ]
    },
    {
      tag: "FEAT",
      tagColor: "#90a959",
      title: "中期趋势挖掘",
      description: "深度挖掘中期趋势机会，以多维模型识别关键投资方向，帮助投资者精准把握市场节奏与入场时机。",
      features: [
        "行业轮动分析",
        "板块趋势识别",
        "龙头股挖掘",
        "趋势持续性评估",
        "入场时点建议"
      ]
    },
    {
      tag: "ADVN",
      tagColor: "#f4bf75",
      title: "Alpha收益策略",
      description: "融合量化模型与AI算法，持续追求超越市场基准的超额收益，以多策略组合实现长期稳健复利增长。",
      features: [
        "多因子选股模型",
        "量化择时策略",
        "风险平价配置",
        "动态仓位管理",
        "业绩归因分析"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 relative">
        {/* 背景光效 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(181,232,83,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(99,192,245,0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative text-center">
          <p className="text-[#555] text-xs tracking-[0.3em] uppercase mb-6">AI Quantitative Investment</p>
          <img
            src={`${basePath}/imgs/skyeye_logo.png`}
            alt="天眼投资 Logo"
            className="w-full max-w-[560px] mx-auto mb-6 object-contain drop-shadow-[0_0_30px_rgba(181,232,83,0.15)]"
          />
          <h1 className="text-4xl md:text-5xl font-bold hacker-glow m-0 mb-4 tracking-tight">
            天眼投资
          </h1>
          <p className="text-[#eaeaea] text-lg md:text-xl mb-2 font-light">
            让每一位投资者以更高胜率、更强纪律性参与市场
          </p>
          <p className="text-[#666] mb-8 max-w-lg mx-auto text-sm">
            以AI Agent与量化模型为核心驱动，捕捉中期趋势机会，系统化获取可持续Alpha收益
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#products" className="hacker-btn-primary no-underline">
              了解产品 &rarr;
            </a>
            <a href="#about" className="hacker-btn no-underline">
              关于我们
            </a>
          </div>
        </div>

        {/* 底部分隔线 */}
        <div className="mt-16 border-b border-dashed border-[#333]" />
      </section>

      {/* 核心优势 */}
      <section id="advantages" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">核心优势</h2>
        <p className="text-[#666] text-sm mb-8">以科技重塑投资效率，构建机构级核心竞争力</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              prefix: "01",
              title: "AI Agent驱动",
              description: "基于领先AI智能体技术，全天候监测市场动态，精准捕捉关键交易窗口"
            },
            {
              prefix: "02",
              title: "量化分析",
              description: "多维度数据建模与量化分析，以科学决策替代情绪驱动，显著提升投资纪律性"
            },
            {
              prefix: "03",
              title: "Alpha收益",
              description: "聚焦中期趋势与结构性行情，以多策略组合持续追求超越基准的超额回报"
            }
          ].map((item, index) => (
            <div key={index} className="hacker-card">
              <span className="text-[#b5e853] text-sm font-bold">[{item.prefix}]</span>
              <h3 className="hacker-glow text-lg mt-2 mb-2">{item.title}</h3>
              <p className="text-[#888] text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 策略净值曲线 */}
        <div className="mt-8 terminal-block p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[#666] text-sm m-0">$ plot strategy_performance.dat</p>
            <div className="flex gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="inline-block w-3 h-[2px] bg-[#b5e853]"></span> 天眼策略</span>
              <span className="flex items-center gap-1"><span className="inline-block w-3 h-[2px] bg-[#555]"></span> 沪深300</span>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[280px] w-full">
            {/* Y轴标签 */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[#555] text-xs w-10 pr-2 text-right">
              <span>120%</span>
              <span>90%</span>
              <span>60%</span>
              <span>30%</span>
              <span>0%</span>
            </div>
            {/* 图表区 */}
            <div className="absolute left-12 right-0 top-0 bottom-6 border-l border-b border-[#333]">
              {/* 网格线 */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="absolute w-full border-t border-dashed border-[#222]" style={{ top: `${i * 25}%` }} />
              ))}
              {/* 天眼策略曲线 */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="strategyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b5e853" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#b5e853" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* 策略填充区域 */}
                <path d="M0,380 C50,365 100,345 143,335 C155,320 165,310 170,305 C190,312 240,318 286,320 C315,340 345,358 360,365 C390,350 415,338 429,335 C460,315 520,290 571,275 C585,282 595,288 600,290 C640,255 680,220 714,200 C750,165 800,130 857,110 C900,98 960,85 1000,80 L1000,400 L0,400 Z" fill="url(#strategyGradient)" />
                {/* 策略线 - 6年累计约+100% */}
                <path d="M0,380 C50,365 100,345 143,335 C155,320 165,310 170,305 C190,312 240,318 286,320 C315,340 345,358 360,365 C390,350 415,338 429,335 C460,315 520,290 571,275 C585,282 595,288 600,290 C640,255 680,220 714,200 C750,165 800,130 857,110 C900,98 960,85 1000,80" fill="none" stroke="#b5e853" strokeWidth="3" />
                {/* 沪深300基准线 - 真实走势 */}
                <path d="M0,380 C50,355 100,310 143,290 C155,265 165,248 170,236 C190,270 240,300 286,311 C315,345 345,380 360,393 C390,392 415,390 429,389 C460,392 520,395 571,395 C585,395 630,395 670,395 C685,395 690,395 693,382 C696,372 699,368 702,365 C706,375 710,382 714,386 C740,365 775,345 800,338 C835,333 850,332 857,332 C900,333 960,335 1000,335" fill="none" stroke="#555" strokeWidth="2" strokeDasharray="6,4" />
              </svg>
              {/* 关键数据点标注 */}
              <div className="absolute text-xs" style={{ left: '88%', top: '15%' }}>
                <span className="text-[#b5e853] bg-[#1a1a1a] px-1 rounded">+112%</span>
              </div>
              <div className="absolute text-xs" style={{ left: '88%', top: '78%' }}>
                <span className="text-[#666] bg-[#1a1a1a] px-1 rounded">+15%</span>
              </div>
              {/* 沪深300 2021年2月高点标注 */}
              <div className="absolute text-xs" style={{ left: '14%', top: '72%' }}>
                <span className="text-[#555] bg-[#1a1a1a] px-1 rounded text-[10px]">5930</span>
              </div>
              {/* 924行情标注 */}
              <div className="absolute text-xs" style={{ left: '66%', top: '88%' }}>
                <span className="text-[#555] bg-[#1a1a1a] px-1 rounded text-[10px]">924行情</span>
              </div>
            </div>
            {/* X轴标签 */}
            <div className="absolute left-12 right-0 bottom-0 flex justify-between text-[#555] text-xs">
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
            </div>
          </div>
          <div className="mt-4 flex gap-6 text-xs border-t border-[#333] pt-3">
            <span className="text-[#888]">年化收益率 <span className="text-[#b5e853] font-bold">+16.2%</span></span>
            <span className="text-[#888]">最大回撤 <span className="text-[#f4bf75] font-bold">-13.8%</span></span>
            <span className="text-[#888]">夏普比率 <span className="text-[#63c0f5] font-bold">1.55</span></span>
            <span className="text-[#888]">胜率 <span className="text-[#b5e853] font-bold">71.5%</span></span>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">关于我们</h2>
        <p className="text-[#666] text-sm mb-8">深入了解天眼投资的团队实力、核心理念与发展愿景</p>

        {/* 公司简介 */}
        <div id="about-intro" className="terminal-block p-6 md:p-8 mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">公司简介</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* 左侧文字 */}
            <div className="flex-1 space-y-4">
              <p className="text-[#eaeaea] text-sm leading-relaxed">
                <span className="text-[#b5e853] font-bold text-base">天眼投资北京有限公司</span>
                <br />
                是一家专注于AI驱动量化投资的金融科技公司。我们以机构级研究体系与工程化能力，为个人投资者提供专业、稳健、可持续的智能投资服务。
              </p>
              <p className="text-[#eaeaea] text-sm leading-relaxed">
                我们相信科技能从根本上重塑投资效率与胜率。通过AI Agent与量化分析的深度融合，帮助投资者过滤情绪干扰，做出更理性、更高质量的投资决策。
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["AI驱动", "量化投资", "机构级研究", "系统化决策"].map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 border border-dashed border-[#b5e853] text-[#b5e853] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* 右侧图片 */}
            <div className="w-full md:w-[280px] flex-shrink-0">
              <AvatarModal
                src={`${basePath}/imgs/company.jpg`}
                alt="公司牌照"
                className="w-full rounded border border-dashed border-[#333] hover:border-[#b5e853] transition-colors duration-300"
              />
              <p className="text-[#666] text-xs text-center mt-2">营业执照</p>
            </div>
          </div>
        </div>

        {/* 核心理念 */}
        <div id="about-philosophy" className="mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">核心理念</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "理性投资",
                description: "以数据与算法为核心，帮助投资者克服贪婪与恐惧，实现稳定、客观、可复制的决策体系。"
              },
              {
                title: "科技赋能",
                description: "融合前沿AI技术与量化模型，为投资者提供机构级分析能力与决策支持。"
              },
              {
                title: "用户至上",
                description: "坚持以用户价值为中心，提供专业、长期、可验证的投研与服务能力。"
              }
            ].map((item, index) => (
              <div key={index} className="hacker-card">
                <h4 className="text-[#b5e853] text-base mb-2">{item.title}</h4>
                <p className="text-[#888] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 价值观 */}
        <div id="about-values" className="terminal-block p-6 mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">我们的价值观</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { code: "PROF", title: "专业", description: "以系统化研究与工程化能力，持续交付高标准的投资服务" },
              { code: "INTG", title: "诚信", description: "透明运营、合规经营、值得信赖，构建长期稳固的信任基石" },
              { code: "INNV", title: "创新", description: "持续探索AI与量化技术前沿，以创新驱动行业进化" },
              { code: "COOP", title: "共赢", description: "与用户、伙伴共同成长，实现长期可持续的价值共创" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-[#aa759f] text-sm font-bold flex-shrink-0">[{item.code}]</span>
                <div>
                  <h4 className="text-[#eaeaea] text-base mb-1">{item.title}</h4>
                  <p className="text-[#888] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 愿景 */}
        <div id="about-vision" className="hacker-card text-center p-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-4">我们的愿景</h3>
          <p className="text-[#eaeaea] text-base mb-6 max-w-2xl mx-auto">
            让每一位投资者都能享有机构级投研能力与智能交易工具，
            以更高胜率、更强纪律性，实现资产的长期稳健增值。
          </p>
        </div>

        {/* 核心团队 */}
        <div id="about-team" className="mt-8 mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">核心团队</h3>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin" style={{ scrollbarColor: '#b5e853 transparent' }}>
              {[
                {
                  name: "CEO - 陈东虎",
                  img: `${basePath}/imgs/ceo.jpg`,
                  title: "首席执行官",
                  desc: "北京大学计算机专业毕业，深耕机器学习与量化投资十余年，AI Agent专家，构建成熟中低频量化策略体系并具备深度实战经验。"
                },
                {
                  name: "CTO - 老古董",
                  img: `${basePath}/imgs/baba.jpg`,
                  title: "首席技术官",
                  desc: "卡耐基梅隆大学博士毕业，资深系统架构师，前爱尔眼科生物科技研发中心负责人，主导公司核心量化交易平台与AI Agent系统的技术研发。"
                },
                {
                  name: "COO - 吴洪佳",
                  img: `${basePath}/imgs/coo.jpg`,
                  title: "首席运营官",
                  desc: "毕业于芝加哥大学布斯商学院，拥有全球化资管运营经验，统筹公司运营、战略执行与业务扩张，以国际化视野推动规模化增长。"
                },
                {
                  name: "CFO - 阿知",
                  img: `${basePath}/imgs/cfo.jpg`,
                  title: "首席财务官",
                  desc: "毕业于清华大学金融专业，具备扎实的财务功底与战略视野，全面负责财务核算、审计风控与投融资规划，为公司长期稳健发展提供核心支撑。"
                }
              ].map((member, index) => (
                <div key={index} className="hacker-card text-center flex-shrink-0 w-[260px] snap-start">
                  <AvatarModal
                    src={member.img}
                    alt={member.title}
                    name={member.name}
                    title={member.title}
                    className={`w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-dashed border-[#b5e853] hover:border-[#63c0f5] transition-colors duration-300 ${
                      member.name.startsWith("CEO") || member.name.startsWith("CFO") ? "object-[50%_20%]" : ""
                    }`}
                  />
                  <span className="text-[#b5e853] text-xs font-bold">[{member.name}]</span>
                  <h4 className="text-[#eaeaea] text-base mt-1 mb-2">{member.title}</h4>
                  <p className="text-[#888] text-sm">{member.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#555] text-xs mt-2 text-right">← 滑动查看更多 →</p>
          </div>
        </div>

        {/* Agent员工 */}
        <div id="about-agents" className="mt-8 mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">Agent员工</h3>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin" style={{ scrollbarColor: '#b5e853 transparent' }}>
              {[
                {
                  name: "小美",
                  img: `${basePath}/imgs/xiaomei.jpg`,
                  title: "高管秘书",
                  desc: "部署于飞书开放平台的智能机器人，统筹高管日程与内外事务协调，高效落地决策指令，保障公司运营顺畅运转。"
                },
                {
                  name: "Claude",
                  img: `${basePath}/imgs/Claude.png`,
                  title: "策略研究员",
                  desc: "基于Anthropic Claude大模型，以深度推理与长文本分析见长。现负责天眼公司量化交易策略的研发与投研报告生成。"
                },
                {
                  name: "豆包",
                  img: `${basePath}/imgs/doubao.png`,
                  title: "HRBP",
                  desc: "基于字节跳动Seed大模型打造，具备智能交互与多元创作能力。现负责天眼公司的人力资源管理、人才画像分析与员工激励体系设计。"
                },
                {
                  name: "Clawbot",
                  img: `${basePath}/imgs/clawbot.png`,
                  title: "AI 数据工程师",
                  desc: "基于OpenClaw开源AI智能体框架构建的自动化数据采集Agent。现负责实时抓取全球金融市场数据，构建高质量特征工程数据管线。"
                }
              ].map((member, index) => (
                <div key={index} className="hacker-card text-center flex-shrink-0 w-[260px] snap-start">
                  <AvatarModal
                    src={member.img}
                    alt={member.title}
                    name={member.name}
                    title={member.title}
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-dashed border-[#b5e853] hover:border-[#63c0f5] transition-colors duration-300"
                  />
                  <span className="text-[#b5e853] text-xs font-bold">[{member.name}]</span>
                  <h4 className="text-[#eaeaea] text-base mt-1 mb-2">{member.title}</h4>
                  <p className="text-[#888] text-sm">{member.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#555] text-xs mt-2 text-right">← 滑动查看更多 →</p>
          </div>
        </div>

        {/* CEO合影 */}
        <div className="mb-8 terminal-block p-4">
          <p className="text-[#666] text-sm mb-3">$ cat highlights.log</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <AvatarModal src={`${basePath}/imgs/with_bft.jpg`} alt="CEO与巴菲特合影" className="w-full rounded opacity-90" />
              <p className="text-[#888] text-sm text-center mt-2">CEO 陈东虎先生与巴菲特、查理·芒格交流合影</p>
            </div>
            <div>
              <AvatarModal src={`${basePath}/imgs/with_meta_zuck.jpg`} alt="CEO与Meta创始人扎克伯格合影" className="w-full rounded opacity-90" />
              <p className="text-[#888] text-sm text-center mt-2">CEO 陈东虎先生与Meta创始人扎克伯格交流合影</p>
            </div>
          </div>
        </div>

        {/* 资质证照 */}
        <div id="about-credentials" className="mb-8 scroll-mt-24">
          <h3 className="hacker-glow text-xl mb-6">资质证照</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: `${basePath}/imgs/zhizhao1.jpg`, alt: "营业执照" },
              { src: `${basePath}/imgs/zhizhao2.jpg`, alt: "资质证书" }
            ].map((item, index) => (
              <div key={index} className="terminal-block p-0 overflow-hidden hover:border-[#b5e853] transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <AvatarModal src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品服务 */}
      <section id="products" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">产品服务</h2>
        <p className="text-[#666] text-sm mb-8">机构级智能投资工具，优化决策流程，系统化提升投资胜率</p>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="terminal-block p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 border border-dashed rounded"
                  style={{ color: product.tagColor, borderColor: product.tagColor }}
                >
                  {product.tag}
                </span>
                <h3 className="hacker-glow text-xl m-0">{product.title}</h3>
              </div>
              <p className="text-[#eaeaea] text-sm mb-4">{product.description}</p>
              <div className="space-y-1">
                {product.features.map((feature, i) => (
                  <p key={i} className="text-sm m-0">
                    <span className="text-[#b5e853]">&gt;</span>{" "}
                    <span className="text-[#888]">{feature}</span>
                  </p>
                ))}
              </div>
              {product.tag === "TOOL" && (
                <div className="mt-4 border border-dashed border-[#333] rounded overflow-hidden">
                  <img src={`${basePath}/imgs/test.png`} alt="自研回测与打分系统" loading="lazy" className="w-full opacity-90" />
                  <p className="text-[#666] text-xs text-center py-2 m-0">自研回测与打分系统</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 招贤纳士 */}
      <section id="careers" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">招贤纳士</h2>
        <p className="text-[#666] text-sm mb-8">寻找志同道合的伙伴，一起用AI与量化技术重新定义投资</p>

        <div className="hacker-card p-6 mb-6">
          <h3 className="hacker-glow text-lg mb-4">我们找什么样的人</h3>
          <div className="space-y-4 text-[#ccc] text-sm leading-relaxed">
            <p>在天眼投资，我们不以学历论英雄，不以资历定高低。我们看重的是：<span className="text-[#b5e853]">对技术的极致追求、对市场的深刻洞察、以及对不确定性的从容应对。</span></p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#b5e853] mt-1">▸</span>
                <span><span className="text-[#63c0f5] font-bold">自驱力强</span> — 不需要被安排任务，你自己就是任务的发起者。看到问题会主动解决，看到机会会主动把握。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5e853] mt-1">▸</span>
                <span><span className="text-[#63c0f5] font-bold">技术扎实</span> — 不限语言和框架，但你需要在至少一个领域有深度。我们相信T型人才：广度让你协作，深度让你不可替代。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5e853] mt-1">▸</span>
                <span><span className="text-[#63c0f5] font-bold">数据敏感</span> — 能从一串数字中嗅出趋势，能从一个异常值中追溯根因。量化投资的核心是数据，我们需要对数据有直觉的人。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5e853] mt-1">▸</span>
                <span><span className="text-[#63c0f5] font-bold">拥抱AI</span> — 你不需要是AI专家，但你需要相信AI的力量，愿意用AI工具提升自己10倍效率，并能与AI Agent协同工作。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b5e853] mt-1">▸</span>
                <span><span className="text-[#63c0f5] font-bold">长期主义</span> — 投资是一场马拉松，我们同样用长期主义看待团队建设。加入我们不是找一份工作，而是找一群值得并肩的战友。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hacker-card p-6">
          <h3 className="hacker-glow text-lg mb-4">开放岗位</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "量化策略研究员", tag: "策略", desc: "研发中低频量化交易策略，构建因子模型并持续回测优化" },
              { role: "AI Agent工程师", tag: "工程", desc: "构建智能投研Agent系统，实现市场分析与交易决策的自动化" },
              { role: "全栈开发工程师", tag: "工程", desc: "开发交易平台与数据可视化系统，打造极致用户体验" },
              { role: "数据工程师", tag: "数据", desc: "搭建实时数据管线，高效处理海量金融市场数据" },
              { role: "法务合规顾问", tag: "法务", desc: "负责基金合规审查、监管政策研究与法律风险防控，护航公司稳健运营" },
              { role: "专业投资人", tag: "投资", desc: "具备专业金融背景，善用量化模型验证投资逻辑，为客户持续创造超额收益" },
              { role: "人力资源总监", tag: "HR", desc: "搭建人才梯队与激励体系，精准识别、吸引并留住顶尖人才" },
              { role: "创业合伙人", tag: "合伙人", desc: "与创始团队并肩作战，共担风险共享收益。有热情与能力的长期同行者" },
            ].map((job, index) => (
              <div key={index} className="terminal-block p-4 hover:border-[#b5e853] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#b5e853] text-xs px-2 py-0.5 border border-[#b5e853] rounded">{job.tag}</span>
                  <span className="text-[#eaeaea] text-sm font-bold">{job.role}</span>
                </div>
                <p className="text-[#888] text-sm">{job.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#888] text-sm mt-4">简历请发送至 <span className="text-[#b5e853]">contact@skyeye-invest.com</span>，邮件标题注明应聘岗位，我们将在3个工作日内回复。</p>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">联系我们</h2>
        <p className="text-[#666] text-sm mb-8">期待与您建立长期合作，共同成长</p>

        <div className="grid grid-cols-1 gap-8">
          {/* 联系信息 */}
          <div className="space-y-6">
            <div className="terminal-block p-6">
              <h3 className="hacker-glow text-lg mb-4">联系方式</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "公司地址", value: "北京市 海淀区 大钟寺宇宙研发中心" },
                  { label: "电子邮箱", value: "contact@skyeye-invest.com" },
                  { label: "联系电话", value: "199-7858-2789" },
                  { label: "工作时间", value: "周一至周五 9:00 - 18:00" }
                ].map((item, index) => (
                  <p key={index} className="m-0">
                    <span className="text-[#aa759f]">[{item.label}]</span>{" "}
                    <span className="text-[#eaeaea]">{item.value}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="terminal-block p-6">
              <h3 className="hacker-glow text-lg mb-4">关注我们</h3>
              <div className="flex space-x-3">
                <WeChatQRModal qrSrc={`${basePath}/imgs/wx.jpg`} />
                {[
                  { name: "知乎", href: "https://www.zhihu.com/people/btty-23", icon: `${basePath}/imgs/zhihu.svg` },
                  { name: "B站", href: "https://space.bilibili.com/486801876?spm_id_from=333.33.0.0", icon: `${basePath}/imgs/bilibili.svg` },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hacker-btn no-underline text-sm flex items-center gap-2 px-3 py-2"
                    title={platform.name}
                  >
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-6 h-6"
                    />
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
