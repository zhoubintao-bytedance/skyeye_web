export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">关于我们</h1>
          <p className="text-xl text-gray-400">了解天眼投资的核心理念与愿景</p>
        </div>

        {/* 公司简介 */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">公司简介</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                  天眼投资北京优先公司
                </span>
                是一家专注于AI驱动和量化投资的创新型金融科技公司。我们致力于通过先进的技术手段，为广大A股个人投资者提供专业、理性的投资辅助服务。
              </p>
              <p className="text-lg">
                我们相信，科技的力量可以让投资变得更加理性、高效。通过AI Agent和量化分析，我们帮助投资者减少情绪干扰，做出更明智的投资决策。
              </p>
            </div>
          </div>
        </section>

        {/* 核心理念 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">核心理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "理性投资",
                description: "我们倡导理性投资理念，通过数据和算法帮助投资者克服贪婪与恐惧，做出客观的投资决策。"
              },
              {
                title: "科技赋能",
                description: "利用最前沿的AI技术和量化模型，为投资者提供强大的分析工具和决策支持。"
              },
              {
                title: "用户至上",
                description: "始终以用户需求为中心，提供贴心、专业的服务，助力每一位投资者成长。"
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-8 hover:bg-card-hover transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 价值观 */}
        <section className="mb-20">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8">我们的价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "专业",
                  description: "以专业的态度和专业的能力，为用户提供专业的服务"
                },
                {
                  icon: "🔒",
                  title: "诚信",
                  description: "诚实守信，透明公开，建立长期信任关系"
                },
                {
                  icon: "🚀",
                  title: "创新",
                  description: "持续探索新技术、新方法，保持行业领先"
                },
                {
                  icon: "🤝",
                  title: "共赢",
                  description: "与用户共同成长，实现互利共赢"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 愿景 */}
        <section>
          <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-6">我们的愿景</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                让每一位个人投资者都能享受到机构级的投资分析服务，
                在交易市场中更加理性、自信地实现财富增长。
              </p>
              <div className="inline-block">
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}