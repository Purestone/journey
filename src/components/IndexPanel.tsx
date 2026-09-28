import type { Chapter } from '../content/site'

type IndexPanelProps = {
  open: boolean
  chapters: Chapter[]
  onClose: () => void
}

export function IndexPanel({ open, chapters, onClose }: IndexPanelProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="章节目录">
      <button
        type="button"
        className="absolute inset-0 bg-carbon/30 backdrop-blur-[2px]"
        aria-label="关闭目录"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 top-16 border-b border-rule bg-surface/95 backdrop-blur-[16px]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-space-lg px-margin-mobile py-space-xl md:px-margin">
          <div className="flex items-center justify-between gap-space-md">
            <h2 className="text-label-md uppercase tracking-wider text-muted">Index</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-label-md uppercase tracking-wider text-on-surface transition-colors hover:text-primary"
            >
              Close
            </button>
          </div>
          <ol className="grid grid-cols-1 gap-space-md md:grid-cols-3">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={onClose}
                  className="group flex flex-col gap-space-xs border-t border-rule pt-space-md transition-colors hover:border-carbon"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                    {chapter.number} / {chapter.label}
                  </span>
                  <span className="text-headline-sm text-on-surface group-hover:text-carbon">
                    {chapter.title}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#about"
                onClick={onClose}
                className="group flex flex-col gap-space-xs border-t border-rule pt-space-md transition-colors hover:border-carbon"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                  End / Profile
                </span>
                <span className="text-headline-sm text-on-surface group-hover:text-carbon">
                  About
                </span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
