type KnowledgeCardProps = {
  title: string
  description: string
  date: string
}

const KebabIcon = () => (
  <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#9CA3AF]" fill="currentColor">
    <circle cx="10" cy="4.5" r="1.2" />
    <circle cx="10" cy="10" r="1.2" />
    <circle cx="10" cy="15.5" r="1.2" />
  </svg>
)

export function KnowledgeCard({ title, description, date }: KnowledgeCardProps) {
  return (
    <article className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h2 className="text-[22px] font-semibold leading-7 text-[#1F2937]">{title}</h2>
        <button type="button" className="rounded p-1">
          <KebabIcon />
        </button>
      </div>
      <p className="mb-7 line-clamp-3 min-h-[64px] text-sm leading-6 text-[#6B7280]">{description}</p>
      <div className="border-t border-[#EEF0F3] pt-3 text-xs font-semibold text-[#9CA3AF]">Created On: {date}</div>
    </article>
  )
}
