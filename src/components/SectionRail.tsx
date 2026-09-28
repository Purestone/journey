import { useState } from 'react'

type SectionRailItem = {
  id: string
  label: string
}

type SectionRailProps = {
  items: SectionRailItem[]
  activeId: string
  visible: boolean
}

/** 右侧细线进度轨：滑动或鼠标移入时显示，离开且停滑后隐藏 */
export function SectionRail({ items, activeId, visible }: SectionRailProps) {
  const [hovered, setHovered] = useState(false)
  const shown = visible || hovered
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  )

  return (
    <nav
      aria-label="段落进度"
      aria-hidden={!shown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-1/2 right-0 z-30 hidden h-56 w-10 -translate-y-1/2 items-center justify-center transition-opacity duration-300 md:flex ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex h-40 w-3 flex-col items-center">
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
                  tabIndex={shown ? 0 : -1}
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
