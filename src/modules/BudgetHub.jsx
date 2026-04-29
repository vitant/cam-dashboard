import { TrendingDown, AlertTriangle, DollarSign, Calendar } from 'lucide-react'

const budgetData = {
  total: '29.2M',
  spent: '19.5M',
  remaining: '9.7M',
  burnRate: '2.1M/нед',
  forecastWeeks: 4
}

const payments = [
  { id: 1, contractor: 'TechCorp', amount: '1.5M', status: 'pending', date: '05.05.2026' },
  { id: 2, contractor: 'DataPro', amount: '890K', status: 'approved', date: '03.05.2026' },
  { id: 3, contractor: 'CloudOps', amount: '2.1M', status: 'overdue', date: '28.04.2026' },
  { id: 4, contractor: 'SecureNet', amount: '650K', status: 'paid', date: '25.04.2026' },
]

export default function BudgetHub() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Budget Overview</h1>
      
      {/* AI Forecast Banner */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 mb-6 text-white flex items-center gap-6">
        <AlertTriangle size={40} className="opacity-80"/>
        <div>
          <div className="text-sm opacity-80 mb-1">ИИ-прогноз</div>
          <div className="text-xl font-bold">Бюджет будет исчерпан через <span className="text-[#F97316]">4 недели</span> при текущем темпе</div>
          <div className="text-sm opacity-80 mt-1">Рекомендация: снизить burn rate на 15% или утвердить дополнительное финансирование</div>
        </div>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2"><DollarSign size={14}/> Total Budget</div>
          <div className="text-2xl font-bold text-slate-800">{budgetData.total}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2"><TrendingDown size={14}/> Burn Rate</div>
          <div className="text-2xl font-bold text-slate-800">{budgetData.burnRate}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">Затрачено</div>
          <div className="text-2xl font-bold text-[#F97316]">{budgetData.spent}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">Остаток</div>
          <div className="text-2xl font-bold text-green-600">{budgetData.remaining}</div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <span className="text-sm font-medium text-slate-600">Статус оплат</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left p-3 font-medium text-slate-600">Контрагент</th>
              <th className="text-right p-3 font-medium text-slate-600">Сумма</th>
              <th className="text-center p-3 font-medium text-slate-600">Статус</th>
              <th className="text-center p-3 font-medium text-slate-600">Дата</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-medium text-slate-800">{p.contractor}</td>
                <td className="p-3 text-right text-slate-600">{p.amount}</td>
                <td className="p-3 text-center"><PaymentStatus status={p.status}/></td>
                <td className="p-3 text-center text-xs text-slate-500">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PaymentStatus({ status }) {
  const styles = {
    pending: 'bg-yellow-100 text-yellow-700',
    approved: 'bg-blue-100 text-blue-700',
    overdue: 'bg-red-100 text-red-700',
    paid: 'bg-green-100 text-green-700'
  }
  return <span className={`text-xs px-2 py-0.5 rounded-full ${styles[status]}`}>{status}</span>
}
