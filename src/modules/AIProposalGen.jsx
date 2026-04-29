import { useState } from 'react'
import { Send, FileText, Download, Plus, Sparkles } from 'lucide-react'

const mockProposal = {
  title: 'Initiative Proposal: Оптимизация логистических процессов',
  client: 'ООО "ТрансЛогистик"',
  date: '29.04.2026',
  sections: [
    { title: 'Проблема', text: 'Высокие издержки на фоне неэффективных маршрутов доставки' },
    { title: 'Предложение', text: 'Внедрение ИИ-системы маршрутизации и прогнозирования спроса' },
    { title: 'Budget', text: '4.5M руб. / 6 месяцев' },
    { title: 'Ожидаемый ROI', text: '+23% к эффективности к Q4 2026' }
  ]
}

export default function AIProposalGen() {
  const [input, setInput] = useState('')
  const [generated, setGenerated] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-6 h-[calc(100vh-120px)]">
      {/* Input Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center gap-2">
          <Sparkles className="text-[#F97316]"/>
          <h2 className="font-semibold text-slate-800">Генератор ИП</h2>
        </div>
        <div className="p-4 flex-1">
          <textarea 
            className="w-full h-48 p-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите вводные по клиенту: название компании, проблемы, цели, бюджет..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <div className="flex gap-2 mt-3">
            <button className="flex-1 bg-[#1E3A8A] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900 transition">
              <Send size={16}/> Генерировать
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Очистить</button>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="text-slate-600"/>
            <h2 className="font-semibold text-slate-800">Предпросмотр документа</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[#F97316] text-white rounded-lg text-sm hover:bg-orange-600">
              <Plus size={14}/> Добавить в Jira
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-slate-300 rounded-lg text-sm hover:bg-slate-50">
              <Download size={14}/> PDF
            </button>
          </div>
        </div>
        <div className="p-6 flex-1 overflow-auto">
          {generated ? (
            <div className="prose">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{mockProposal.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{mockProposal.client} · {mockProposal.date}</p>
              {mockProposal.sections.map((s, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold text-slate-700 text-sm mb-1">{s.title}</h4>
                  <p className="text-slate-600 text-sm">{s.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <FileText size={48} className="mb-4 opacity-30"/>
              <p>Документ появится здесь после генерации</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
