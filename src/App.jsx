import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, Sparkles, CheckSquare, FolderKanban, Wallet, 
  ChevronRight, Menu, X, AlertCircle, TrendingUp
} from 'lucide-react'
import AIProposalGen from './modules/AIProposalGen'
import JiraControl from './modules/JiraControl'
import PMOSync from './modules/PMOSync'
import BudgetHub from './modules/BudgetHub'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'ai-proposal', label: 'AI Proposal Gen', icon: Sparkles },
  { id: 'jira', label: 'Jira Assistant', icon: CheckSquare },
  { id: 'pmo', label: 'PMO Automator', icon: FolderKanban },
  { id: 'budget', label: 'Budget Hub', icon: Wallet },
]

const mockMetrics = {
  activeProjects: 12,
  overdueTasks: 5,
  budgetUsed: 67,
  aiSuggestions: 8
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <motion.aside 
        animate={{ width: sidebarOpen ? 260 : 72 }}
        className="bg-[#1E3A8A] text-white flex flex-col"
      >
        <div className="p-4 border-b border-blue-800 flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">CAM Dashboard</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-blue-800 rounded">
            {sidebarOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        <nav className="flex-1 py-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-800 transition-colors ${activeTab === item.id ? 'bg-blue-800 border-l-4 border-[#F97316]' : ''}`}
            >
              <item.icon size={20}/>
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'dashboard' && <Dashboard metrics={mockMetrics}/>}
            {activeTab === 'ai-proposal' && <AIProposalGen/>}
            {activeTab === 'jira' && <JiraControl/>}
            {activeTab === 'pmo' && <PMOSync/>}
            {activeTab === 'budget' && <BudgetHub/>}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function Dashboard({ metrics }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Общий вид</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard icon={FolderKanban} label="Активные проекты" value={metrics.activeProjects} color="blue"/>
        <MetricCard icon={AlertCircle} label="Просроченные задачи" value={metrics.overdueTasks} color="red"/>
        <MetricCard icon={Wallet} label="Бюджет использован" value={metrics.budgetUsed + '%'} color="orange"/>
        <MetricCard icon={Sparkles} label="ИИ-подсказки" value={metrics.aiSuggestions} color="green"/>
      </div>
    </div>
  )
}

function MetricCard({ icon: Icon, label, value, color }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    red: 'bg-red-100 text-red-700', 
    orange: 'bg-orange-100 text-orange-700',
    green: 'bg-green-100 text-green-700'
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
      <div className={`w-10 h-10 rounded-lg ${colors[color]} flex items-center justify-center mb-3`}>
        <Icon size={20}/>
      </div>
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  )
}
