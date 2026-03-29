type CreateKnowledgeBaseModalProps = {
  isOpen: boolean
  onClose: () => void
}

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
    <path
      d="M6 6L14 14M14 6L6 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DownIcon = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#9CA3AF]" fill="none">
    <path d="m5.5 7.5 4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export function CreateKnowledgeBaseModal({ isOpen, onClose }: CreateKnowledgeBaseModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close create knowledge base panel"
        className="h-full flex-1 cursor-default bg-[#111827]/45"
        onClick={onClose}
      />

      <aside className="flex h-full w-full max-w-[430px] flex-col border-l border-[#E5E7EB] bg-white shadow-[-12px_0_32px_rgba(17,24,39,0.1)]">
        <header className="border-b border-[#F1F5F9] px-6 pb-4 pt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-[#111827]">Create New Knowledge Base</h2>
            <button type="button" onClick={onClose} className="rounded p-1 text-[#9CA3AF] transition hover:text-[#4B5563]">
              <CloseIcon />
            </button>
          </div>
          <p className="text-xs text-[#6B7280]">Best for quick answers from documents, websites and text files.</p>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          <div className="space-y-2">
            <label htmlFor="kb-name" className="text-xs font-semibold text-[#4B5563]">
              Name (Cannot be edited later)*
            </label>
            <input
              id="kb-name"
              placeholder="Name"
              className="h-10 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none placeholder:text-[#9CA3AF] focus:border-[#4F46E5]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="kb-description" className="text-xs font-semibold text-[#4B5563]">
              Description
            </label>
            <textarea
              id="kb-description"
              rows={3}
              placeholder="Description"
              className="w-full resize-none rounded-md border border-[#E5E7EB] px-3 py-2 text-sm outline-none placeholder:text-[#9CA3AF] focus:border-[#4F46E5]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="kb-vector-store" className="text-xs font-semibold text-[#4B5563]">
              Vector Store*
            </label>
            <div className="relative">
              <select
                id="kb-vector-store"
                defaultValue="qdrant"
                className="h-10 w-full appearance-none rounded-md border border-[#E5E7EB] bg-white px-3 pr-10 text-sm text-[#6B7280] outline-none focus:border-[#4F46E5]"
              >
                <option value="qdrant">Qdrant</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center">
                <DownIcon />
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="kb-embedding-model" className="text-xs font-semibold text-[#4B5563]">
              LLM Embedding Model*
            </label>
            <div className="relative">
              <select
                id="kb-embedding-model"
                defaultValue="text-embedding-ada-002"
                className="h-10 w-full appearance-none rounded-md border border-[#E5E7EB] bg-white px-3 pr-10 text-sm text-[#6B7280] outline-none focus:border-[#4F46E5]"
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center">
                <DownIcon />
              </span>
            </div>
          </div>
        </div>

        <footer className="px-6 py-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-flex h-10 items-center rounded-md bg-[#4F46E5] px-4 text-sm font-medium text-white transition hover:bg-[#4338CA]"
            >
              Create
            </button>
          </div>
        </footer>
      </aside>
    </div>
  )
}
