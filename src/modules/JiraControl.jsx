import { AlertCircle, MessageSquare, Clock, CheckCircle2 } from 'lucide-react'

const tasks = [
  { id: 'CAM-1234', title: 'Подготовить КП для клиента TechCo', assignee: 'Алексей М.', status: 'overdue', days: 3, aiTip: 'Просрочено на 3 дня. ИИ рекомендует: срочно напомнить исполнителю и предложить помощь' },
  { id: 'CAM-1235', title: 'Обновить статус проекта DigitalCo', assignee: 'Мария К.', status: 'in-progress', days: 0, aiTip: 'Задача в работе. ИИ советует: запросить промежуточный отчёт' },
  { id: 'CAM-1236', title: 'Провести встречу по интеграции', assignee: 'Дмитрий В.', status: 'pending', days: -2, aiTip: 'Срок через 2 дня. ИИ рекомендует: подготовить agenda заранее' },
  { id: 'CAM-1237', title: 'Согласовать договор с поставщиком', assignee: 'Елена С.', status: 'done', days: 0, aiTip: 'Завершено. ИИ отмечает: своевременно выполнено' },
]

export default function JiraControl() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Jira Smart Control</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-orange-600 transition">
          <MessageSquare size={16}/> Сгенерировать Summary за неделю
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <span className="text-sm font-medium text-slate-600">Критичные задачи</span>
        </div>
        {tasks.map(task => (
          <div key={task.id} className="p-4 border-b border-slate-100 hover:bg-slate-50 transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-slate-500">{task.id}</span>
                  <StatusBadge status={task.status}/>
                </div>
                <h3 className="font-medium text-slate-800 mb-1">{task.title}</h3>
                <p className="text-xs text-slate-500">{task.assignee}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock size={12}/>
                <span>{task.days > 0 ? `Просрочено на ${task.days} дн.` : task.days < 0 ? `Срок через ${-task.days} дн.` : 'В срок'}</span>
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-2 border-[#2563EB]">
              <div className="flex items-start gap-2">
                <AlertCircle size={14} className="text-[#2563EB] mt-0.5"/>
                <p className="text-xs text-blue-800">{task.aiTip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    overdue: 'bg-red-100 text-red-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    pending: 'bg-yellow-100 text-yellow-700',
    done: 'bg-green-100 text-green-700'
  }
  return <span className={`text-xs px-2 py-0.5 rounded-full ${styles[status]}`}>{status}</span>
}
