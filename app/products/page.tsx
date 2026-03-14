export default function Products() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">产品服务</h1>
          <p className="text-xl text-gray-400">专业的投资工具，助力您的投资决策</p>
        </div>

        {/* 产品列表 */}
        <div className="space-y-12">
          {/* 产品1：智能交易助手 */}
          <section className="glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mb-4">
                  核心产品
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">智能交易助手</h2>
                <p className="text-gray-300 text-lg mb-6">
                  基于先进AI Agent技术的智能交易辅助系统，24小时不间断监控市场，
                  为您提供实时的交易建议和风险提示。
                </p>
                <div className="space-y-4">
                  {[
                    "实时市场监控与数据分析",
                    "智能交易信号推送",
                    "个性化风险控制建议",
                    "投资组合优化建议",
                    "市场情绪分析"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </section>

          {/* 产品2：量化分析平台 */}
          <section className="glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
                  专业工具
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">量化分析平台</h2>
                <p className="text-gray-300 text-lg mb-6">
                  强大的量化分析工具，提供多维度数据分析、策略回测功能，
                  帮助您验证和优化投资策略。
                </p>
                <div className="space-y-4">
                  {[
                    "历史数据回测",
                    "多因子分析",
                    "策略性能评估",
                    "风险收益分析",
                    "可视化报告生成"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 产品3：中期趋势挖掘 */}
          <section className="glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                  特色服务
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">中期趋势挖掘</h2>
                <p className="text-gray-300 text-lg mb-6">
                  专注于挖掘偏中期的市场趋势机会，通过多维度分析识别潜在的投资方向，
                  帮助您把握市场脉动。
                </p>
                <div className="space-y-4">
                  {[
                    "行业轮动分析",
                    "板块趋势识别",
                    "龙头股挖掘",
                    "趋势持续性评估",
                    "入场时点建议"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">📈</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </section>

          {/* 产品4：Alpha收益策略 */}
          <section className="glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">🎯</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm mb-4">
                  高级策略
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Alpha收益策略</h2>
                <p className="text-gray-300 text-lg mb-6">
                  基于量化模型和AI算法，追求超越市场的超额收益（Alpha），
                  通过多元化的策略组合实现稳健的投资回报。
                </p>
                <div className="space-y-4">
                  {[
                    "多因子选股模型",
                    "量化择时策略",
                    "风险平价配置",
                    "动态仓位管理",
                    "业绩归因分析"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}