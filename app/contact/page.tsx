export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">联系我们</h1>
          <p className="text-xl text-gray-400">期待与您的交流</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">联系方式</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "公司地址",
                    content: "北京市"
                  },
                  {
                    icon: "📧",
                    title: "电子邮箱",
                    content: "contact@tianyan-invest.com"
                  },
                  {
                    icon: "📱",
                    title: "联系电话",
                    content: "400-xxx-xxxx"
                  },
                  {
                    icon: "⏰",
                    title: "工作时间",
                    content: "周一至周五 9:00 - 18:00"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 社交媒体 */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">关注我们</h2>
              <div className="flex space-x-4">
                {["微信", "微博", "知乎", "B站"].map((platform, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500/30 transition-colors"
                  >
                    <span className="text-lg">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">发送消息</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  电子邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="请输入您的邮箱"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="请输入您的电话"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  留言内容
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="请输入您想说的话..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full tech-button py-4 rounded-lg text-white font-semibold text-lg"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}