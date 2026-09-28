import type { Chapter } from '../content/site'

type ChapterSectionProps = {
  chapter: Chapter
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const layout = chapter.layout

  return (
    <section
      id={chapter.id}
      className={`relative w-full scroll-mt-0 ${
        layout === 'prologue'
          ? 'flex min-h-[100svh] flex-col justify-between bg-surface-lowest px-margin-mobile pb-space-xl pt-space-xl md:px-margin'
          : layout === 'monologue'
            ? 'min-h-[100svh] bg-surface-lowest px-margin-mobile py-space-2xl md:px-margin'
            : 'min-h-[100svh] bg-background px-margin-mobile py-space-2xl md:px-margin'
      }`}
      aria-labelledby={`${chapter.id}-title`}
    >
      {layout === 'prologue' ? (
        <Prologue chapter={chapter} />
      ) : layout === 'interlude' ? (
        <Interlude chapter={chapter} />
      ) : (
        <Monologue chapter={chapter} />
      )}
    </section>
  )
}

function Prologue({ chapter }: { chapter: Chapter }) {
  return (
    <div className="flex w-full flex-1 flex-col justify-between">
      <div className="relative min-h-[460px] max-h-[70vh] w-full overflow-hidden bg-surface-container aspect-[21/9]">
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/70 via-primary/20 to-transparent p-space-md md:p-space-xl">
          <span className="mb-space-xs font-mono text-[10px] uppercase tracking-widest text-outline-variant opacity-70">
            {chapter.label}
          </span>
          <h1
            id={`${chapter.id}-title`}
            className="text-display-xl max-w-4xl tracking-tight text-on-primary"
          >
            {chapter.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] pt-space-lg">
        <div className="flex flex-col gap-space-md">
          {chapter.body.map((paragraph) => (
            <p key={paragraph} className="text-body-md leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function Interlude({ chapter }: { chapter: Chapter }) {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-space-lg">
      <div className="relative min-h-[420px] max-h-[68vh] w-full overflow-hidden bg-surface-container aspect-[16/9]">
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="h-full w-full object-cover"
        />
        {chapter.imageCaption ? (
          <div className="absolute bottom-space-md left-space-md bg-surface-lowest/80 px-space-md py-space-xs backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
              {chapter.imageCaption}
            </span>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 items-start gap-space-lg pt-space-xs md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id={`${chapter.id}-title`} className="text-headline-md tracking-tight text-on-surface">
            {chapter.title}
          </h2>
        </div>
        <div className="flex flex-col gap-space-md md:col-span-8">
          {chapter.body.map((paragraph) => (
            <p key={paragraph} className="text-body-md leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function Monologue({ chapter }: { chapter: Chapter }) {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-space-lg">
      <div className="relative min-h-[440px] max-h-[68vh] w-full overflow-hidden bg-surface-container aspect-[16/9]">
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-space-md left-space-md max-w-md bg-surface-lowest/90 p-space-md backdrop-blur-md md:bottom-space-lg md:left-space-lg md:p-space-lg">
          <h3
            id={`${chapter.id}-title`}
            className="text-headline-sm mb-space-xs tracking-tight text-on-surface"
          >
            {chapter.overlayTitle ?? chapter.title}
          </h3>
          {chapter.overlayBody ? (
            <p className="text-body-sm leading-relaxed text-on-surface-variant">
              {chapter.overlayBody}
            </p>
          ) : null}
        </div>
      </div>

      {chapter.body.length > 0 ? (
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
          <div className="flex flex-col gap-space-md md:col-span-8 md:col-start-3">
            {chapter.body.map((paragraph) => (
              <p key={paragraph} className="text-body-md leading-relaxed text-on-surface-variant">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {chapter.traits ? (
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          {chapter.traits.map((trait) => (
            <div
              key={trait.label}
              className="flex flex-col gap-space-xs bg-surface-low p-space-md"
            >
              <span className="font-mono text-[10px] uppercase text-outline">{trait.label}</span>
              <p className="text-body-sm text-on-surface">{trait.text}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
