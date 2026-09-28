import { useEffect, useRef, useState } from 'react'

type SiteHeaderProps = {
  siteName: string
  visible: boolean
}

/** 顶栏仅作标识：两端灰色字，暂无跳转/目录功能 */
export function SiteHeader({ siteName, visible }: SiteHeaderProps) {
  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 px-margin-mobile pt-2 transition-transform duration-300 ease-out md:px-margin ${
        visible ? 'translate-y-0' : '-translate-y-[120%]'
      }`}
      aria-hidden={!visible}
    >
      <div className="liquid-glass mx-auto flex h-9 max-w-[420px] items-center justify-between rounded-full px-space-md md:h-10 md:max-w-[480px]">
        <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
          {siteName}
        </span>
        <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
          About
        </span>
      </div>
    </header>
  )
}

/**
 * 下滑隐藏、上滑显示（常见滚动方向导航模式）。
 * 接近顶部时始终显示。
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
