import { motion } from 'framer-motion';
import { 
  Wallet, 
  PieChart, 
  TrendingUp, 
  Download, 
  ShieldCheck, 
  Smartphone,
  Check,
  CreditCard,
  ArrowUpCircle,
  ArrowDownCircle,
  Monitor,
  Tablet,
  Laptop,
  Mail
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <FeatureBudget />
      <FeatureExpense />
      <FeatureAnalytics />
      <FeatureData />
      <FeatureSavings />
      <FeatureAnimations />
      <FeatureCrossPlatform />
      <FeatureInterface />
      <About />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <img src="logo.svg" alt="Logo" className="h-9 w-9" />
            <span className="font-bold text-xl tracking-tight text-gray-900">青荷记账</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-500">
            <a href="#budget" className="hover:text-gray-900 transition-colors">预算</a>
            <a href="#expense" className="hover:text-gray-900 transition-colors">记账</a>
            <a href="#analytics" className="hover:text-gray-900 transition-colors">分析</a>
            <a href="#platform" className="hover:text-gray-900 transition-colors">多端</a>
          </div>
          <a href="qinghe-budget-1.1.0-20251205.apk" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
            下载 App
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            记账，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">从未如此优雅。</span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            青荷记账，你的私人财务管家。
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="qinghe-budget-1.1.0-20251205.apk" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text白 px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-500/30 hover:-translate-y-1"
            >
              <Download className="w-6 h-6" /> 免费下载
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-24 relative mx-auto max-w-5xl"
        >
          <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-gray-900/5">
            <div className="bg-white rounded-[2rem] overflow-hidden aspect-[16/10] relative shadow-inner flex flex-col">
              <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-medium text-gray-400">Dashboard</div>
              </div>
              <div className="flex-1 p-8 bg-gray-50/50 grid grid-cols-12 gap-6">
                <div className="col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4">
                   <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                     <Wallet className="w-5 h-5" />
                   </div>
                   {[1,2,3,4].map(i => (
                     <div key={i} className={`h-2 w-full rounded-full ${i===1 ? 'bg-gray-200' : 'bg-gray-100'}`} />
                   ))}
                </div>
                <div className="col-span-9 space-y-6">
                   <div className="grid grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20">
                        <div className="text-blue-100 text-sm mb-1">本月预算</div>
                        <div className="text-2xl font-bold">¥3,000</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <div className="text-gray-400 text-sm mb-1">已支出</div>
                        <div className="text-2xl font-bold text-gray-900">¥1,240</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <div className="text-gray-400 text-sm mb-1">剩余</div>
                        <div className="text-2xl font-bold text-green-600">¥1,760</div>
                      </div>
                   </div>
                   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="font-bold text-gray-900">最近支出</div>
                        <div className="text-sm text-blue-500">查看全部</div>
                      </div>
                      <div className="space-y-4">
                        {[
                          { icon: '🍔', name: '麦当劳', time: '12:30', amount: '-35.00' },
                          { icon: '🚇', name: '地铁充值', time: '09:15', amount: '-50.00' },
                          { icon: '☕', name: '星巴克', time: '08:45', amount: '-28.00' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg">{item.icon}</div>
                              <div>
                                <div className="font-medium text-gray-900">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.time}</div>
                              </div>
                            </div>
                            <div className="font-bold text-gray-900">{item.amount}</div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 1. 预算计划：能够自定义每个月的预算，花钱更称心如意
function FeatureBudget() {
  return (
    <section id="budget" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-3xl mb-10">
              <Wallet className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight leading-tight">
              预算计划
            </h2>
            <p className="text-xl sm:text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-10 sm:mb-12">
              能够自定义每个月的预算，<br/>
              <span className="text-blue-600">花钱更称心如意。</span>
            </p>
            <ul className="space-y-6">
              {['自定义月度限额', '实时监控剩余', '超支智能提醒'].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-gray-700 font-medium text-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-violet-100 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
            <motion.div 
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-10 aspect-[4/5] flex flex-col relative overflow-hidden border border-gray-100 z-10"
            >
               <div className="flex justify-between items-end mb-12">
                 <div>
                   <div className="text-base text-gray-400 font-medium mb-2">本月总预算</div>
                   <div className="text-5xl font-bold text-gray-900 tracking-tight">¥3,000.00</div>
                 </div>
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">65%</div>
               </div>
               <div className="space-y-10">
                 {[
                   { label: '餐饮美食', used: 1240, total: 2000, color: 'bg-blue-500', percent: '62%' },
                   { label: '交通出行', used: 350, total: 500, color: 'bg-violet-500', percent: '70%' },
                   { label: '购物消费', used: 150, total: 500, color: 'bg-emerald-500', percent: '30%' }
                 ].map((item, i) => (
                   <div key={i}>
                     <div className="flex justify-between text-lg mb-4 font-medium">
                       <span className="flex items-center gap-3">
                         <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                         {item.label}
                       </span>
                       <span className="text-gray-500">¥{item.used} <span className="text-gray-300">/</span> ¥{item.total}</span>
                     </div>
                     <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.percent }}
                        transition={{ duration: 1, delay: 0.2 * i }}
                        className={`h-full ${item.color} rounded-full`} 
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. 记账，简易快捷的记账，流畅的动效，顺心的体验
function FeatureExpense() {
  return (
    <section id="expense" className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
           <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full blur-3xl opacity-50 hidden sm:block" />
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-[90vw] w-[320px] sm:w-[340px] bg-white rounded-[2.5rem] border-[6px] sm:rounded-[3rem] sm:border-[8px] border-gray-900 shadow-2xl overflow-hidden relative z-10 h-[640px] sm:h-[680px] flex flex-col"
                >
                   {/* Status Bar */}
                   <div className="h-10 bg-white flex items-center justify-between px-6">
                      <div className="text-xs font-bold">9:41</div>
                      <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-black rounded-sm"/>
                        <div className="w-4 h-2.5 bg-black rounded-sm"/>
                      </div>
                   </div>

                   {/* App Header */}
                   <div className="px-6 pt-2 pb-4 text-center relative">
                      <h3 className="text-xl font-bold text-gray-900">快速记账</h3>
                      <p className="text-xs text-gray-400 mt-1">记录每一笔收支</p>
                   </div>

                   {/* Toggle */}
                   <div className="px-6 mb-6">
                      <div className="bg-gray-100 rounded-xl p-1 flex">
                        <div className="flex-1 bg-red-500 text-white rounded-lg py-2 text-center text-sm font-bold shadow-sm flex items-center justify-center gap-1">
                           <ArrowUpCircle className="w-4 h-4" /> 支出
                        </div>
                        <div className="flex-1 text-gray-500 py-2 text-center text-sm font-medium flex items-center justify-center gap-1">
                           <ArrowDownCircle className="w-4 h-4" /> 收入
                        </div>
                      </div>
                   </div>

                   {/* Amount Input */}
                   <div className="px-6 mb-6">
                      <div className="text-sm text-gray-500 mb-2 font-medium">支出金额</div>
                      <div className="border-2 border-red-100 rounded-xl px-4 py-3 flex items-center bg-red-50/30">
                         <span className="text-2xl font-bold text-red-500 mr-2">¥</span>
                         <span className="text-3xl font-bold text-gray-900">48.00</span>
                         <div className="ml-auto w-0.5 h-8 bg-red-500 animate-pulse"></div>
                      </div>
                   </div>

                   {/* Categories */}
                   <div className="px-6 mb-6 flex-1">
                      <div className="text-sm text-gray-500 mb-3 font-medium">分类</div>
                      <div className="grid grid-cols-4 gap-3">
                         {['🍔', '🚗', '🎮', '👗', '🏠', '📱', '💊', '📚', '✈️', '🎁', '⚽', '🐶'].map((emoji, i) => (
                           <div key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 ${i===0 ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-gray-50 border border-transparent text-gray-600'}`}>
                             <div className="text-2xl">{emoji}</div>
                             <div className="text-[10px] font-medium">餐饮</div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Save Button */}
                   <div className="p-6 pt-0 mt-auto">
                      <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 flex items-center justify-center gap-2">
                         <Check className="w-5 h-5" /> 保存记录
                      </button>
                   </div>
                </motion.div>
              </div>
           </div>
           
           <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-3xl mb-10">
                <CreditCard className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight">
                记账
              </h2>
              <p className="text-xl sm:text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-8 sm:mb-10">
                <span className="text-emerald-600">简易快捷的记账，</span><br/>
                流畅的动效，顺心的体验。
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                只需几秒钟，即可完成一笔记录。
                每一次点击都伴随着舒适的反馈，记账不再是负担。
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}

// 3. 数据可视化，每一条数据都是有可视化，让冷冰冰的数字不再陌生
function FeatureAnalytics() {
  return (
    <section id="analytics" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-3xl mb-10">
              <PieChart className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight">
              数据可视化
            </h2>
            <p className="text-xl sm:text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed">
              每一条数据都是有可视化，<br/>
              <span className="text-orange-600">让冷冰冰的数字不再陌生。</span>
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: '支出构成', icon: '📊', desc: '清晰的饼图展示，一目了然的类别占比', color: 'bg-blue-50', text: 'text-blue-600' },
              { title: '趋势分析', icon: '📈', desc: '智能折线图，洞察每月消费变化趋势', color: 'bg-green-50', text: 'text-green-600' },
              { title: '年度账单', icon: '📅', desc: '自动生成年度回顾，记录你的每一分努力', color: 'bg-purple-50', text: 'text-purple-600' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 sm:w-24 sm:h-24 ${item.color} rounded-3xl flex items-center justify-center text-3xl sm:text-5xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}

// 4. 全面支持导出和导入用户数据，不被会员所限制，导出的json数据，方便ai处理
function FeatureData() {
  return (
    <section id="data" className="py-20 sm:py-32 bg白">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-3xl mb-10">
              <ShieldCheck className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight leading-tight">
              数据自由
            </h2>
            <p className="text-xl sm:text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-8 sm:mb-12">
              全面支持导出和导入用户数据，<br/>
              <span className="text-indigo-600">不被会员所限制。</span>
            </p>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
               导出的 JSON 数据格式标准清晰，方便 AI 处理或迁移到其他平台。
               你的数据，完全属于你。
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
               <div className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium">JSON 导出</div>
               <div className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium">数据导入</div>
               <div className="px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium">AI 友好</div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl font-mono text-sm sm:text-base text-gray-300 relative group transform rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="absolute top-6 right-6 flex gap-3">
               <div className="w-4 h-4 rounded-full bg-red-500" />
               <div className="w-4 h-4 rounded-full bg-yellow-500" />
               <div className="w-4 h-4 rounded-full bg-green-500" />
             </div>
            <div className="space-y-4 mt-6">
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">userData</span> = {'{'}</p>
              <p className="pl-8"><span className="text-blue-400">exportDate</span>: <span className="text-green-400">"2024-03-21"</span>,</p>
              <p className="pl-8"><span className="text-blue-400">totalAssets</span>: <span className="text-orange-400">15800.00</span>,</p>
              <p className="pl-8"><span className="text-blue-400">transactions</span>: [</p>
              <p className="pl-12">{'{'} <span className="text-blue-400">type</span>: <span className="text-green-400">"expense"</span>, <span className="text-blue-400">amount</span>: <span className="text-orange-400">48.00</span> {'}'},</p>
              <p className="pl-12">{'{'} <span className="text-blue-400">type</span>: <span className="text-green-400">"income"</span>, <span className="text-blue-400">amount</span>: <span className="text-orange-400">5000.00</span> {'}'}</p>
              <p className="pl-8">],</p>
              <p className="pl-8"><span className="text-gray-500">// Ready for AI Analysis</span></p>
              <p>{'}'};</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. 存钱，想要存钱？一样满足！
function FeatureSavings() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full blur-3xl opacity-50 hidden sm:block" />
               <div className="relative z-10 grid gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-emerald-900/5 border border-emerald-100"
                  >
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl">🏝️</div>
                        <div className="text-emerald-600 font-mono font-bold">80%</div>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">马尔代夫之旅</h3>
                     <div className="h-3 bg-emerald-50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between text-sm">
                        <span className="text-gray-400">已存 ¥16,000</span>
                        <span className="text-emerald-600 font-medium">目标 ¥20,000</span>
                     </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-blue-900/5 border border-blue-100 sm:ml-12"
                  >
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">💻</div>
                        <div className="text-blue-600 font-mono font-bold">45%</div>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">新款 MacBook</h3>
                     <div className="h-3 bg-blue-50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '45%' }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-blue-500 rounded-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between text-sm">
                        <span className="text-gray-400">已存 ¥6,750</span>
                        <span className="text-blue-600 font-medium">目标 ¥15,000</span>
                     </div>
                  </motion.div>
               </div>
            </div>

            <div className="order-1 md:order-2">
               <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-3xl mb-10">
                 <TrendingUp className="w-8 h-8 text-emerald-600" />
               </div>
               <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 tracking-tight">
                 存钱目标
               </h2>
               <p className="text-xl sm:text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-8 sm:mb-10">
                 想要存钱？<br/>
                 <span className="text-emerald-600">一样满足！</span>
               </p>
               <p className="text-xl text-gray-400 leading-relaxed">
                  设定你的存钱目标，看着进度条一点点填满。
                  无需复杂的操作，让储蓄成为一种习惯，
                  让梦想触手可及。
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}

// 6. 精美的动画，流畅的动效，记账不再是工作，而是一种享受
function FeatureAnimations() {
  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-10 md:gap-20 items中心">
           <div className="order-2 md:order-1 relative h-[420px] sm:h-[600px] flex items-center justify-center">
               {/* Animated Elements */}
               <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-full blur-3xl opacity-50 hidden sm:block" />
               
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] border border-violet-100 rounded-full hidden sm:block"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] border border-fuchsia-100 rounded-full hidden sm:block"
               />

               <motion.div 
                 animate={{ y: [-20, 20, -20], x: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/4 left-1/4 bg-white p-6 rounded-3xl shadow-xl shadow-violet-200/50 z-20"
               >
                 <PieChart className="w-12 h-12 text-violet-500" />
               </motion.div>

               <motion.div 
                 animate={{ y: [20, -20, 20], x: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-1/3 right-1/4 bg-white p-6 rounded-3xl shadow-xl shadow-fuchsia-200/50 z-20"
               >
                 <TrendingUp className="w-12 h-12 text-fuchsia-500" />
               </motion.div>

               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 rounded-[3rem] shadow-2xl shadow-violet-500/30 z-30"
               >
                 <Smartphone className="w-20 h-20 text-white" />
               </motion.div>

               {/* Floating Particles */}
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-3 h-3 bg-violet-400 rounded-full opacity-50"
                   animate={{
                     y: [Math.random() * -100, Math.random() * 100],
                     x: [Math.random() * -100, Math.random() * 100],
                     opacity: [0, 1, 0]
                   }}
                   transition={{
                     duration: 3 + Math.random() * 2,
                     repeat: Infinity,
                     repeatType: "reverse",
                     delay: Math.random() * 2
                   }}
                   style={{
                     top: `${50 + (Math.random() - 0.5) * 60}%`,
                     left: `${50 + (Math.random() - 0.5) * 60}%`
                   }}
                 />
               ))}
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center p-4 bg-violet-100 rounded-3xl mb-10">
                <Smartphone className="w-8 h-8 text-violet-600" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
                精美的动画
              </h2>
              <p className="text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-10">
                流畅的动效，<br/>
                <span className="text-violet-600">记账不再是工作，<br/>而是一种享受。</span>
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                 我们精心打磨了每一个交互细节。
                 从按钮的点击反馈，到页面的切换转场，
                 丝滑般的体验，让你爱上记账。
              </p>
            </div>
         </div>
      </div>
    </section>
  );
}

// Multi-platform Support
function FeatureCrossPlatform() {
  return (
    <section id="platform" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-3xl mb-10">
           <Monitor className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
           多端适配
        </h2>
        <p className="text-3xl md:text-4xl text-gray-500 font-medium leading-relaxed mb-20">
           手机、平板、电脑，<br/>
           <span className="text-blue-600">哪都能记账。</span>
        </p>

        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 rounded-full blur-3xl opacity-50 -z-10" />
           <div className="flex flex-row md:flex-row justify-start md:justify-center items-end gap-6 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 -mx-2">
              {/* Desktop */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200 w-full md:w-auto snap-center min-w-[280px]"
              >
                 <div className="bg-gray-900 rounded-2xl aspect-[16/10] w-full md:w-[500px] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                    <Laptop className="w-32 h-32 text-gray-700 group-hover:text-blue-500 transition-colors duration-500 relative z-10" />
                    <div className="absolute bottom-4 text-gray-500 font-mono text-sm">Desktop / Web</div>
                 </div>
              </motion.div>

              {/* Tablet */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200 w-full md:w-auto md:-ml-12 z-10 snap-center min-w-[220px]"
              >
                 <div className="bg-gray-900 rounded-2xl aspect-[3/4] w-full md:w-[240px] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                    <Tablet className="w-20 h-20 text-gray-700 group-hover:text-blue-500 transition-colors duration-500 relative z-10" />
                    <div className="absolute bottom-4 text-gray-500 font-mono text-sm">Tablet</div>
                 </div>
              </motion.div>

              {/* Mobile */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200 w-full md:w-auto md:-ml-12 z-20 snap-center min-w-[160px]"
              >
                 <div className="bg-gray-900 rounded-2xl aspect-[9/19.5] w-full md:w-[140px] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                    <Smartphone className="w-12 h-12 text-gray-700 group-hover:text-blue-500 transition-colors duration-500 relative z-10" />
                    <div className="absolute bottom-4 text-gray-500 font-mono text-xs">Mobile</div>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}

// 7. 简洁的界面，更少的选择，但是更好用
function FeatureInterface() {
  return (
    <section className="py-32 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-gray-900 tracking-tight">
          简洁的界面，<br/>
          <span className="text-gray-400">更少的选择，但是更好用。</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
           <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">✨</div>
              <h3 className="text-2xl font-bold mb-3">极简主义</h3>
              <p className="text-gray-500">摒弃一切干扰，只保留最核心的功能。</p>
           </div>
           <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">⚡</div>
              <h3 className="text-2xl font-bold mb-3">高效操作</h3>
              <p className="text-gray-500">减少点击次数，提升记账效率。</p>
           </div>
           <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">🎯</div>
              <h3 className="text-2xl font-bold mb-3">专注核心</h3>
              <p className="text-gray-500">专注于记账本身，不被繁杂功能打扰。</p>
           </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3">
           <img src="logo.svg" alt="Logo" className="h-10 w-10 opacity-80" />
           <span className="font-bold text-xl text-gray-900">青荷记账</span>
        </div>
        <div className="flex gap-8 text-gray-500 font-medium">
           <a href="#about" className="hover:text-gray-900">关于我们</a>
           <a href="#privacy" className="hover:text-gray-900">隐私政策</a>
           <a href="#contact" className="hover:text-gray-900">联系方式</a>
        </div>
        <div className="text-gray-400 text-sm">
          © 2025 青荷记账. 保留所有权利。
        </div>
      </div>
    </footer>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-3xl mb-8">
            <Smartphone className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-900">关于我们</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            青荷记账是一款专注于个人财务管理的轻量应用。我们追求简洁优雅的体验，帮助你轻松记录每一笔收支，掌控每月预算。
          </p>
          <ul className="mt-8 space-y-4 text-gray-700 text-lg">
            <li>离线本地存储，无需登录</li>
            <li>导入/导出数据，备份自由</li>
            <li>细致的动效与贴心交互</li>
          </ul>
        </div>
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100">
          <div className="text-gray-500 text-lg leading-relaxed">
            我们相信，记账应该是轻松而愉悦的事情。青荷记账不做复杂的社交与冗余功能，只把你最在意的预算、支出和分析做到极致。
          </div>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-3xl mb-8">
          <ShieldCheck className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-5xl font-bold mb-6 text-gray-900">隐私政策</h2>
        <div className="text-xl text-gray-600 leading-relaxed space-y-6">
          <p>青荷记账是本地应用，数据仅保存在你的设备中，我们不会收集、上传或分析你的任何个人信息。</p>
          <ul className="space-y-3">
            <li>清除浏览器缓存或卸载应用可能导致数据丢失，请自行备份。</li>
            <li>导入/导出功能由你自主触发，我们不做远程同步。</li>
            <li>如果你通过邮件反馈问题，我们仅用于沟通，不做其他用途。</li>
          </ul>
          <p>这是一份轻松版本的隐私说明，核心就是：你的数据只属于你。</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-3xl mb-8">
            <Mail className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-900">联系方式</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            有任何问题或建议，欢迎联系我：
          </p>
          <a href="mailto:quentincrane@163.com" className="inline-flex items-center mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white text-lg font-semibold hover:bg-emerald-700 transition-all">
            <Mail className="w-5 h-5 mr-2" /> quentincrane@163.com
          </a>
          <p className="text-sm text-gray-500 mt-4">点击按钮将打开你的邮件客户端。</p>
        </div>
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100">
          <div className="text-gray-500 text-lg leading-relaxed">
            如果你在应用设置页发现“反馈与建议”入口，也可以直接通过该入口进行反馈。
          </div>
        </div>
      </div>
    </section>
  );
}
