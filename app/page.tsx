import AvatarModal from "./components/AvatarModal";
import WeChatQRModal from "./components/WeChatQRModal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const products = [
    {
      tag: "CORE",
      tagColor: "#b5e853",
      title: "智能交易助手",
      description: "基于领先AI Agent架构的智能交易辅助系统，24小时全时段监控市场，持续输出高质量交易建议与风控提示。",
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
      description: "顶级量化分析引擎，覆盖多维度数据分析与策略回测，系统化验证并持续优化投资策略。",
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
      description: "深度挖掘中期趋势机会，以多维模型识别关键投资方向，帮助您精准把握市场节奏。",
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
      description: "结合量化模型与AI算法，持续追求超越市场的超额收益，以多策略组合实现稳健复利回报。",
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
            让每一位交易者以更高胜率、更强纪律性参与市场
          </p>
          <p className="text-[#666] mb-8 max-w-lg mx-auto text-sm">
            以AI Agent与量化研究为核心能力，锁定中期趋势机会，系统化获取可持续Alpha
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
      <section className="mb-16">
        <h2 className="hacker-glow text-3xl mb-2">核心优势</h2>
        <p className="text-[#666] text-sm mb-8">顶级科技驱动，打造机构级投资实力</p>
        <hr className="border-0 border-b border-dashed border-[#b5e853] mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              prefix: "01",
              title: "AI Agent驱动",
              description: "领先AI智能体技术，全天候捕捉市场关键机会并快速响应"
            },
            {
              prefix: "02",
              title: "量化分析",
              description: "基于大数据的量化模型，确保科学决策并显著降低情绪噪声"
            },
            {
              prefix: "03",
              title: "Alpha收益",
              description: "聚焦中期趋势与结构性行情，追求可持续的超额收益"
            }
          ].map((item, index) => (
            <div key={index} className="hacker-card">
              <span className="text-[#b5e853] text-sm font-bold">[{item.prefix}]</span>
              <h3 className="hacker-glow text-lg mt-2 mb-2">{item.title}</h3>
              <p className="text-[#888] text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* 营收曲线 */}
        <div className="mt-8 terminal-block p-4">
          <p className="text-[#666] text-sm mb-3">$ cat revenue_curve.dat</p>
          <img src={`${basePath}/imgs/curve.jpg`} alt="营收曲线" className="w-full rounded opacity-90" />
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">关于我们</h2>
        <p className="text-[#666] text-sm mb-8">洞见天眼投资的硬核实力、使命与愿景</p>
        <hr className="border-0 border-b border-dashed border-[#b5e853] mb-8" />

        {/* 公司简介 */}
        <div className="terminal-block p-6 md:p-8 mb-8">
          <h3 className="hacker-glow text-xl mb-6">公司简介</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* 左侧文字 */}
            <div className="flex-1 space-y-4">
              <p className="text-[#eaeaea] text-sm leading-relaxed">
                <span className="text-[#b5e853] font-bold text-base">天眼投资北京有限公司</span>
                <br />
                是一家专注AI驱动与量化投资的金融科技公司。我们以机构级研究体系与工程化能力，为A股个人投资者提供专业、稳健、可持续的投资辅助服务。
              </p>
              <p className="text-[#eaeaea] text-sm leading-relaxed">
                我们相信科技能重塑投资效率与胜率。通过AI Agent与量化分析，我们帮助投资者降低情绪波动，做出更清晰、更高质量的决策。
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
        <div className="mb-8">
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
        <div className="terminal-block p-6 mb-8">
          <h3 className="hacker-glow text-xl mb-6">我们的价值观</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { code: "PROF", title: "专业", description: "以系统化研究与工程化能力，持续交付高标准服务" },
              { code: "INTG", title: "诚信", description: "透明、合规、可信赖，建立长期稳固的信任体系" },
              { code: "INNV", title: "创新", description: "持续探索AI与量化前沿，保持行业引领地位" },
              { code: "COOP", title: "共赢", description: "与用户共同成长，实现长期价值共创" }
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
        <div className="hacker-card text-center p-8">
          <h3 className="hacker-glow text-xl mb-4">我们的愿景</h3>
          <p className="text-[#eaeaea] text-base mb-6 max-w-2xl mx-auto">
            让每一位投资者都能享有机构级投研与交易能力，
            以更高胜率、更强纪律实现长期稳健增长。
          </p>
          <hr className="border-0 border-b border-dashed border-[#b5e853] w-24 mx-auto" />
        </div>

        {/* 核心团队 */}
        <div className="mt-8 mb-8">
          <h3 className="hacker-glow text-xl mb-6">核心团队</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "CEO - 陈东虎",
                img: `${basePath}/imgs/ceo.jpg`,
                title: "首席执行官",
                desc: "北京大学计算机专业毕业，深耕机器学习与量化投资十余年，AI Agent专家，构建成熟中低频量化策略体系并具备深度实战经验"
              },
              {
                name: "CFO - 阿知",
                img: `${basePath}/imgs/cfo.jpg`,
                title: "首席财务官",
                desc: "毕业于清华金融专业，具备扎实财务功底与战略视野，全面负责财务核算、审计风控、成本管控与投融资规划，为公司长期稳健发展提供核心支撑"
              },
              {
                name: "COO - 吴洪佳",
                img: `${basePath}/imgs/coo.jpg`,
                title: "首席运营官",
                desc: "毕业于芝加哥大学布斯商学院，拥有全球化资管运营经验，统筹公司运营、战略执行与业务扩张，以国际化视野推动规模化增长与价值提升。"
              }
            ].map((member, index) => (
              <div key={index} className="hacker-card text-center">
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
        <div className="mb-8">
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
        <p className="text-[#666] text-sm mb-8">机构级投资工具，强化决策、提升胜率</p>
        <hr className="border-0 border-b border-dashed border-[#b5e853] mb-8" />

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
                  <img src={`${basePath}/imgs/test.png`} alt="自研回测与打分系统" className="w-full opacity-90" />
                  <p className="text-[#666] text-xs text-center py-2 m-0">自研回测与打分系统</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="mb-16 scroll-mt-24">
        <h2 className="hacker-glow text-3xl mb-2">联系我们</h2>
        <p className="text-[#666] text-sm mb-8">欢迎与我们建立长期合作关系</p>
        <hr className="border-0 border-b border-dashed border-[#b5e853] mb-8" />

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
                  { label: "工作时间", value: "周一至周五 9:00 - 18:00 (节假日除外)" }
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
