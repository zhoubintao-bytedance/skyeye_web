import Link from "next/link";
import { 
  CpuIcon, 
  ChartBarIcon, 
  TargetIcon, 
  ArrowRightIcon,
  SparklesIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ClockIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8">
              <SparklesIcon className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm">AI驱动 · 量化投资</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                天眼投资
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              让个人交易者在交易市场更理性
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              基于Agent和量化的投资公司，帮助挖掘偏中期的趋势机会，赚取市场的Alpha收益
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="tech-button px-8 py-4 rounded-lg text-white font-semibold text-lg inline-flex items-center">
                了解产品
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="glass px-8 py-4 rounded-lg text-white font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center">
                关于我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <SparklesIcon className="w-8 h-8 text-cyan-400" />
              核心优势
            </h2>
            <p className="text-gray-400 text-lg">科技赋能，专业投资</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CpuIcon className="w-12 h-12 text-cyan-400" />,
                title: "AI Agent驱动",
                description: "先进的AI智能体技术，24小时不间断监控市场，捕捉投资机会"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-purple-400" />,
                title: "量化分析",
                description: "基于大数据的量化分析模型，科学决策，减少情绪干扰"
              },
              {
                icon: <TargetIcon className="w-12 h-12 text-green-400" />,
                title: "Alpha收益",
                description: "专注挖掘偏中期趋势机会，追求稳定的超额收益"
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-8 hover:bg-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品预览 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <GlobeAltIcon className="w-8 h-8 text-cyan-400" />
              我们的产品
            </h2>
            <p className="text-gray-400 text-lg">专业工具，助力投资</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CpuIcon className="w-10 h-10 text-cyan-400" />,
                title: "智能交易助手",
                description: "基于AI Agent的智能交易辅助系统，实时分析市场数据，提供专业的交易建议和风险提示。",
                features: [
                  { icon: <ClockIcon className="w-4 h-4" />, text: "实时市场监控" },
                  { icon: <LightBulbIcon className="w-4 h-4" />, text: "智能信号提醒" },
                  { icon: <ShieldCheckIcon className="w-4 h-4" />, text: "风险控制" }
                ]
              },
              {
                icon: <ChartBarIcon className="w-10 h-10 text-purple-400" />,
                title: "量化分析平台",
                description: "强大的量化分析工具，提供多维度数据分析、回测功能，帮助您验证投资策略。",
                features: [
                  { icon: <TargetIcon className="w-4 h-4" />, text: "策略回测" },
                  { icon: <ChartBarIcon className="w-4 h-4" />, text: "数据可视化" },
                  { icon: <LightBulbIcon className="w-4 h-4" />, text: "因子分析" }
                ]
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-8 hover:bg-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm inline-flex items-center gap-1">
                      {feature.icon}
                      {feature.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="tech-button inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg inline-flex items-center">
              查看全部产品
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <SparklesIcon className="w-8 h-8 text-cyan-400" />
                开始您的理性投资之旅
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                让天眼投资成为您的投资伙伴，一起在市场中成长
              </p>
              <Link href="/contact" className="tech-button inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg inline-flex items-center">
                联系我们
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}