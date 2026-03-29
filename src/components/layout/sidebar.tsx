import { useEffect } from 'react'

type SidebarProps = {
  mobileOpen: boolean
  onClose: () => void
}

const sectionClassName = 'mt-6 px-4 text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]'
const itemClassName =
  'mt-1 flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#4B5563]'

type IconName =
  | 'agents'
  | 'models'
  | 'library'
  | 'published'
  | 'machines'
  | 'queues'
  | 'triggers'
  | 'jobs'
  | 'executions'
  | 'vault'
  | 'knowledge'
  | 'keystore'
  | 'tenant'
  | 'integrations'
  | 'orchestration'

const itemIconMap: Record<string, IconName> = {
  Agents: 'agents',
  'AI Models': 'models',
  Library: 'library',
  Published: 'published',
  Machines: 'machines',
  Queues: 'queues',
  Triggers: 'triggers',
  Jobs: 'jobs',
  Executions: 'executions',
  Vault: 'vault',
  'Knowledge Base': 'knowledge',
  'Key Store': 'keystore',
  Tenant: 'tenant',
  Integrations: 'integrations',
  Orchestration: 'orchestration',
}

function SidebarIcon({ name, isActive }: { name: IconName; isActive: boolean }) {
  const iconColor = isActive ? '#4F46E5' : '#6B7280'

  const iconPaths: Record<IconName, string[]> = {
    agents: ['M3 10h14', 'M10 3v14'],
    models: ['M4 14h12v2H4z', 'M6 4h8l2 8H4z'],
    library: ['M4 5h4v10H4z', 'M10 5h3v10h-3z', 'M14 5h2v10h-2z'],
    published: ['M4 8h12v8H4z', 'M7 8V6h6v2'],
    machines: ['M4 7h12v7H4z', 'M7 14v2', 'M13 14v2'],
    queues: ['M5 6h10', 'M5 10h10', 'M5 14h10'],
    triggers: ['M9 4 5 10h4l-2 6 6-8h-4l2-4z'],
    jobs: ['M4 6h12v10H4z', 'M8 6V4h4v2'],
    executions: ['M5 4h10v12H5z', 'M8 8h4', 'M8 11h4'],
    vault: ['M10 3 4 6v4c0 4 3 6 6 7 3-1 6-3 6-7V6z'],
    knowledge: ['M4 5h12v10H4z', 'M8 9h4', 'M8 12h4'],
    keystore: ['M8 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z', 'M8 10h8', 'M13 10v2'],
    tenant: ['M5 6h10', 'M6 6v8', 'M10 6v8', 'M14 6v8', 'M4 14h12'],
    integrations: ['M6 10h8', 'M10 6v8', 'M4 6h3v3H4z', 'M13 11h3v3h-3z'],
    orchestration: ['M5 5h4v4H5z', 'M11 11h4v4h-4z', 'M9 7h2v2H9z', 'M7 9h6'],
  }

  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
      {iconPaths[name].map((path) => (
        <path
          key={path}
          d={path}
          stroke={iconColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

const navGroups = [
  {
    heading: 'My Projects',
    items: ['Agents', 'AI Models', 'Library'],
  },
  {
    heading: 'Orchestrator',
    items: ['Published', 'Machines', 'Queues', 'Triggers', 'Jobs', 'Executions', 'Vault', 'Knowledge Base', 'Key Store'],
  },
  {
    heading: 'Admin',
    items: ['Tenant', 'Integrations', 'Orchestration'],
  },
]

function SidebarNav({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <nav className="h-full overflow-y-auto pb-8 pt-2">
      {navGroups.map((group) => (
        <div key={group.heading}>
          <p className={sectionClassName}>{group.heading}</p>
          <ul className="px-2">
            {group.items.map((item) => {
              const isActive = item === 'Knowledge Base'
              const rowClass = `${itemClassName} w-full text-left ${isActive ? 'bg-[#EEF2FF] text-[#4F46E5]' : 'hover:bg-[#f0f1f8]'}`
              return (
                <li key={item}>
                  {onItemClick ? (
                    <button type="button" onClick={onItemClick} className={rowClass}>
                      <SidebarIcon name={itemIconMap[item] ?? 'library'} isActive={isActive} />
                      <span>{item}</span>
                    </button>
                  ) : (
                    <div className={rowClass}>
                      <SidebarIcon name={itemIconMap[item] ?? 'library'} isActive={isActive} />
                      <span>{item}</span>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen, onClose])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <aside className="hidden w-[250px] shrink-0 border-r border-[#E5E7EB] bg-[#f8f8fc] lg:block">
        <div className="h-[calc(100vh-64px)]">
          <SidebarNav />
        </div>
      </aside>

      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 z-40 bg-[#0f172a]/50 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[min(280px,88vw)] max-w-full flex-col border-r border-[#E5E7EB] bg-[#f8f8fc] shadow-xl transition-transform duration-200 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'pointer-events-none -translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-[52px] shrink-0 items-center justify-end border-b border-[#E5E7EB] px-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-[#6B7280] hover:bg-[#f0f1f8]"
            aria-label="Close sidebar"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1">
          <SidebarNav onItemClick={onClose} />
        </div>
      </aside>
    </>
  )
}
