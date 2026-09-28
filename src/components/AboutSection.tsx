import type { SiteContent } from '../content/site'

type AboutSectionProps = {
  about: SiteContent['about']
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id={about.id}
      className="relative min-h-[100svh] scroll-mt-0 bg-background px-margin-mobile py-space-2xl md:px-margin"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-space-xl border-t border-rule pt-space-xl">
          <span className="text-label-sm uppercase text-muted">About</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-space-xl md:grid-cols-12">
          <div className="overflow-hidden bg-surface-container md:col-span-4">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-space-md md:col-span-7 md:col-start-6">
            <h2 id="about-title" className="text-headline-md tracking-tight text-carbon">
              {about.name}
            </h2>
            <div className="flex max-w-[40rem] flex-col gap-space-xs">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-on-surface-variant">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
