import { RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react'

const projects = [
  { id: 'PMO-001', name: 'Внедрение ERP для RetailCo', pm: 'Иван П.', status: 'active', budget: '12.5M', spent: '8.2M', variance: 2, lastUpdate: '28.04.2026' },
  { id: 'PMO-002', name: 'Миграция ЦОД для Bank', pm: 'Ольга М.', status: 'at-risk', budget: '8.0M', spent: '7.8M', variance: 3, lastUpdate: '25.04.2026' },
  { id: 'PMO-003', name: 'Обновление CRM для Sales', pm: 'Алексей К.', status: 'active', budget: '5.5M', spent: '3.1M', variance: 0, lastUpdate: '29.04.2026' },
  { id: 'PMO-004', name: 'Аналитика данных для Retail', pm: 'Елена В.', status: 'delayed', budget: '3.2M', spent: '1.8M', variance: 5, lastUpdate: '20.04.2026' },
]

export default function PMOSync() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">PMO Objects Sync</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-900 transition">
          <RefreshCw size={16}/> Auto-sync (ИИ)
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left p-3 font-medium text-slate-600">ID</th>
              <th className="text-left p-3 font-medium text-slate-600">Проект</th>
              <th className="text-left p-3 font-medium text-slate-600">PM</th>
              <th className="text-left p-3 font-medium text-slate-600">Статус</th>
              <th className="text-right p-3 font-medium text-slate-600">Бюджет</th>
              <th className="text-right p-3 font-medium text-slate-600">Затрачено</th>
              <th className="text-center p-3 font-medium text-slate-600">Расхождение</th>
              <th className="text-center p-3 font-medium text-slate-600">Обновление</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-mono text-xs text-slate-500">{p.id}</td>
                <td className="p-3 font-medium text-slate-800">{p.name}</td>
                <td className="p-3 text-slate-600">{p.pm}</td>
                <td className="p-3"><ProjectStatus status={p.status}/></td>
                <td className="p-3 text-right text-slate-600">{p.budget}</td>
                <td className="p-3 text-right text-slate-600">{p.spent}</td>
                <td className="p-3 text-center">
                  {p.variance > 0 && <VarianceBadge value={p.variance}/>}
                  {p.variance === 0 && <CheckCircle2 size={16} className="text-green-500 mx-auto"/>}
                </td>
                <td className="p-3 text-center text-xs text-slate-500">{p.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ProjectStatus({ status }) {
  const styles = {
    active: 'bg-green-100 text-green-700',
    'at-risk': 'bg-orange-100 text-orange-700',
    delayed: 'bg-red-100 text-red-700'
  }
  return <span className={`text-xs px-2 py-0.5 rounded-full ${styles[status]}`}>{status}</span>
}

function VarianceBadge({ value }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
      <AlertTriangle size={10}/> +{value} дней
    </span>
  )
}
