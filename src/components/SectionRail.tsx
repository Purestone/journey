type SectionRailItem = {
  id: string
  label: string
}

type SectionRailProps = {
  items: SectionRailItem[]
  activeId: string
  visible: boolean
}

/** 右侧细线进度轨：滑动时显示，停滑后隐藏 */
export function SectionRail({ items, activeId, visible }: SectionRailProps) {
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  )

  return (
    <nav
      aria-label="段落进度"
      aria-hidden={!visible}
      className={`pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 transition-opacity duration-300 md:right-6 md:block ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`relative flex h-40 w-3 flex-col items-center ${
          visible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-outline-variant/50" />
        <div
          className="absolute left-1/2 w-px -translate-x-1/2 bg-carbon transition-[height] duration-300 ease-out"
          style={{
            top: 0,
            height: `${((activeIndex + 1) / items.length) * 100}%`,
          }}
        />
        <ol className="relative z-10 flex h-full w-full flex-col justify-between">
          {items.map((item) => {
            const isActive = item.id === activeId
            return (
              <li key={item.id} className="flex justify-center">
                <a
                  href={`#${item.id}`}
                  aria-label={item.label}
                  aria-current={isActive ? 'true' : undefined}
                  tabIndex={visible ? 0 : -1}
                  className={`block h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'scale-125 bg-carbon'
                      : 'bg-outline-variant/80 hover:bg-on-surface'
                  }`}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
