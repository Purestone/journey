import { useEffect, useRef, useState } from 'react'

type SiteHeaderProps = {
  siteName: string
  activeId: string
  visible: boolean
  onOpenIndex: () => void
}

export function SiteHeader({
  siteName,
  activeId,
  visible,
  onOpenIndex,
}: SiteHeaderProps) {
  const onAbout = activeId === 'about'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-margin-mobile pt-2 transition-transform duration-300 ease-out md:px-margin ${
        visible ? 'translate-y-0' : 'pointer-events-none -translate-y-[120%]'
      }`}
      aria-hidden={!visible}
    >
      <div className="liquid-glass mx-auto flex h-9 max-w-[420px] items-center justify-center rounded-full px-space-md md:h-10 md:max-w-[480px]">
        <nav
          className="flex items-center gap-space-md md:gap-space-lg"
          aria-label="主导航"
        >
          <a
            href="#section-01"
            tabIndex={visible ? 0 : -1}
            className={`text-label-md uppercase tracking-wider transition-colors ${
              !onAbout
                ? 'font-bold text-carbon'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {siteName}
          </a>
          <a
            href="#about"
            tabIndex={visible ? 0 : -1}
            className={`text-label-md uppercase tracking-wider transition-colors ${
              onAbout
                ? 'font-bold text-carbon'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            About
          </a>
          <button
            type="button"
            tabIndex={visible ? 0 : -1}
            onClick={onOpenIndex}
            className="text-label-md uppercase tracking-wider text-on-surface-variant transition-colors hover:text-on-surface"
          >
            Index
          </button>
        </nav>
      </div>
    </header>
  )
}

/**
 * 下滑隐藏、上滑显示（常见滚动方向导航模式）。
 * 接近顶部时始终显示；打开 Index 时强制显示。
 */
export function useScrollDirectionHeader(forceVisible = false) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    if (forceVisible) {
      setVisible(true)
      return
    }

    lastY.current = window.scrollY

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current

        if (y <= 24) {
          setVisible(true)
        } else if (delta > 6) {
          setVisible(false)
        } else if (delta < -6) {
          setVisible(true)
        }

        lastY.current = y
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceVisible])

  return visible
}

/** 滑动时显示，停滑一段时间后隐藏 */
export function useScrollActivity(idleMs = 900) {
  const [active, setActive] = useState(false)
  const idleTimer = useRef<number | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const hideAfterIdle = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(() => {
        setActive(false)
      }, idleMs)
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(() => {
        setActive(true)
        hideAfterIdle()
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
    }
  }, [idleMs])

  return active
}
