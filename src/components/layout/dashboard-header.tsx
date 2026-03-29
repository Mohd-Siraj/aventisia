type DashboardHeaderProps = {
  onMenuClick?: () => void
}

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-[#9CA3AF]">
    <path
      d="M14.583 14.583 18 18m-1.75-8.125a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BellIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-white/80">
    <path
      d="M10 3.5a3.75 3.75 0 0 0-3.75 3.75v1.963a2.5 2.5 0 0 1-.732 1.768L4.5 12h11l-1.018-1.019a2.5 2.5 0 0 1-.732-1.768V7.25A3.75 3.75 0 0 0 10 3.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.75 14.75a1.25 1.25 0 0 0 2.5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-[#C7D2FE]">
    <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

function GlobalSearchField({ className }: { className?: string }) {
  return (
    <label
      className={
        className ??
        'flex h-9 w-full max-w-md items-center gap-2 rounded-md border border-white/15 bg-[#2b2864] px-3'
      }
    >
      <SearchIcon />
      <input
        aria-label="Search"
        placeholder="Search..."
        className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-[#A5B4FC] outline-none"
      />
      <span className="hidden shrink-0 rounded bg-[#403a8f] px-1.5 py-0.5 text-[10px] text-[#D1D5FF] sm:inline">
        ⌘K
      </span>
    </label>
  )
}

function BrandBlock({ compact }: { compact?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-white">
      <img
        src="/header logo.png"
        alt="Workspace logo"
        className={compact ? 'h-8 w-auto shrink-0' : 'h-9 w-auto shrink-0 lg:h-10'}
      />
      <span className={`truncate font-semibold ${compact ? 'text-sm sm:text-base' : 'text-base'}`}>Workspace</span>
      <button
        type="button"
        className="ml-0.5 hidden shrink-0 items-center gap-1 rounded bg-[#2F2A74] px-2 py-1 text-xs text-[#E0E7FF] sm:inline-flex"
      >
        <span>Workspace 1</span>
        <ChevronDownIcon />
      </button>
    </div>
  )
}

function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2b2864]">
        <BellIcon />
      </button>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-[#1E1B4B]">GK</div>
    </div>
  )
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="w-full border-b border-[#312777] bg-[#1E1B4B]">
      {/* Small screens: hamburger row + full-width search */}
      <div className="flex flex-col gap-3 px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1">
            <button
              type="button"
              onClick={onMenuClick}
              className="inline-flex rounded-md p-2 text-white hover:bg-white/10"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
            <BrandBlock compact />
          </div>
          <HeaderActions />
        </div>
        <GlobalSearchField className="flex h-9 w-full items-center gap-2 rounded-md border border-white/15 bg-[#2b2864] px-3" />
      </div>

      <div className="hidden h-[64px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-6 lg:grid xl:px-8">
        <div className="flex min-w-0 justify-start">
          <BrandBlock />
        </div>
        <div className="flex justify-center px-2">
          <GlobalSearchField className="flex h-9 w-[min(360px,32vw)] min-w-[200px] max-w-full items-center gap-2 rounded-md border border-white/15 bg-[#2b2864] px-3" />
        </div>
        <div className="flex justify-end">
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}
