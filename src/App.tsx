import { useState } from 'react'
import { DashboardHeader } from './components/layout/dashboard-header'
import { PaginationFooter } from './components/layout/pagination-footer'
import { Sidebar } from './components/layout/sidebar'
import { CreateKnowledgeBaseModal } from './components/knowledge-base/create-knowledge-base-modal'
import { KnowledgeBaseGrid } from './components/knowledge-base/knowledge-base-grid'

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#9CA3AF]">
    <path
      d="M14.583 14.583 18 18m-1.75-8.125a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f6fa] text-[#1f2937] antialiased">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex min-h-0 flex-1">
        <Sidebar mobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex min-w-0 flex-1 flex-col">
          <section className="flex flex-1 flex-col px-4 pb-6 pt-6 md:px-6 lg:px-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-[22px] font-semibold text-[#111827]">Knowledge Base</h1>
              <div className="flex w-full flex-wrap items-center justify-stretch gap-3 sm:justify-end md:w-auto">
                <label className="flex h-10 w-full min-w-0 items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 sm:w-[260px]">
                  <SearchIcon />
                  <input
                    aria-label="Knowledge base search"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm text-[#374151] placeholder:text-[#9CA3AF] outline-none"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(true)}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#4F46E5] px-4 text-sm font-medium text-white transition hover:bg-[#4338CA] sm:w-auto"
                >
                  + Create New
                </button>
              </div>
            </div>

            <div className="mb-4 rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 md:px-5">
              <KnowledgeBaseGrid />
            </div>
            <PaginationFooter />
          </section>
        </main>
      </div>

      {/* Right sheet; backdrop closes it */}
      <CreateKnowledgeBaseModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}

export default App
