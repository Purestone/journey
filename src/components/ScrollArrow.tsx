type ScrollArrowProps = {
  href: string
  direction: 'up' | 'down'
  label: string
  fixed?: boolean
  hidden?: boolean
}

export function ScrollArrow({
  href,
  direction,
  label,
  fixed = false,
  hidden = false,
}: ScrollArrowProps) {
  const positionClass = fixed
    ? 'fixed bottom-8 right-8 z-40 md:bottom-10 md:right-10'
    : 'absolute bottom-8 right-8 z-30 md:bottom-10 md:right-10'

  return (
    <a
      href={href}
      aria-label={label}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`${positionClass} liquid-glass inline-flex h-11 w-11 items-center justify-center rounded-full text-on-surface transition-all duration-300 hover:scale-105 hover:text-carbon ${
        hidden ? 'pointer-events-none scale-95 opacity-0' : 'opacity-100'
      }`}
    >
      {direction === 'down' ? <ArrowDown /> : <ArrowUp />}
    </a>
  )
}

function ArrowDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="animate-bounce"
    >
      <path
        d="M12 5v14m0 0-5-5m5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

function ArrowUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 19V5m0 0-5 5m5-5 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
