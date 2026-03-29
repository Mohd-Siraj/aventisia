export function PaginationFooter() {
  return (
    <footer className="mt-auto flex items-center justify-between px-1 py-3 text-sm text-[#6B7280]">
      <p className="font-medium">6 rows</p>
      <div className="flex items-center gap-3">
        <span>Rows per page</span>
        <button type="button" className="rounded border border-[#E5E7EB] bg-white px-2 py-1">
          10
        </button>
        <span>page 1 of 1</span>
        <div className="hidden items-center gap-1 sm:flex">
          <button type="button" className="h-7 w-7 rounded border border-[#E5E7EB] bg-white text-[#9CA3AF]">
            {'<<'}
          </button>
          <button type="button" className="h-7 w-7 rounded border border-[#E5E7EB] bg-white text-[#9CA3AF]">
            {'<'}
          </button>
          <button type="button" className="h-7 w-7 rounded border border-[#E5E7EB] bg-white text-[#9CA3AF]">
            {'>'}
          </button>
          <button type="button" className="h-7 w-7 rounded border border-[#E5E7EB] bg-white text-[#9CA3AF]">
            {'>>'}
          </button>
        </div>
      </div>
    </footer>
  )
}
