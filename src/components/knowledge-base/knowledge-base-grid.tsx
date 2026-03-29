import { KnowledgeCard } from './knowledge-card'

const cards = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  title: 'Test',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  date: '14/07/2025',
}))

export function KnowledgeBaseGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {cards.map((card) => (
        <KnowledgeCard key={card.id} title={card.title} description={card.description} date={card.date} />
      ))}
    </div>
  )
}
