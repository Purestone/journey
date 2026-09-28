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

/** 右侧细条进度轨：每段一节；首末页常显，中间页滑动/悬停显示 */
export function SectionRail({ items, activeId, visible }: SectionRailProps) {
  const [hovered, setHovered] = useState(false)
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  )
  const atEnds = activeIndex === 0 || activeIndex === items.length - 1
  const shown = visible || hovered || atEnds

  return (
    <nav
      aria-label="段落进度"
      aria-hidden={!shown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-1/2 right-0 z-30 hidden w-10 -translate-y-1/2 items-center justify-center transition-opacity duration-500 md:flex ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ol className="flex flex-col items-center gap-2">
        {items.map((item, index) => {
          const isActive = item.id === activeId
          const isPassed = index <= activeIndex
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                tabIndex={shown ? 0 : -1}
                className={`block h-6 w-[1.5px] transition-[background-color,transform,opacity] duration-300 ease-out ${
                  isActive
                    ? 'scale-y-110 bg-carbon opacity-100'
                    : isPassed
                      ? 'bg-carbon/45 opacity-80 hover:bg-carbon/70'
                      : 'bg-outline-variant/50 opacity-60 hover:bg-on-surface/50'
                }`}
              />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
