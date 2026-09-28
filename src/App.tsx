import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ChapterSection } from './components/ChapterSection'
import { LiquidGlassFilter } from './components/LiquidGlassFilter'
import { ScrollArrow } from './components/ScrollArrow'
import { SectionRail } from './components/SectionRail'
import { useScrollActivity } from './components/SiteHeader'
import { siteContent } from './content/site'

const sectionIds = [...siteContent.chapters.map((chapter) => chapter.id), siteContent.about.id]

const railItems = [
  ...siteContent.chapters.map((chapter) => ({
    id: chapter.id,
    label: `${chapter.number} ${chapter.title}`,
  })),
  {
    id: siteContent.about.id,
    label: `About ${siteContent.about.name}`,
  },
]

export default function App() {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const [atBottom, setAtBottom] = useState(false)
  const railVisible = useScrollActivity()

  useEffect(() => {
    const updateActive = () => {
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= window.innerHeight * 0.45) current = id
      }
      setActiveId(current)

      const remaining =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      setAtBottom(remaining <= 72)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <LiquidGlassFilter />
      <SectionRail items={railItems} activeId={activeId} visible={railVisible} />

      <main className="w-full bg-background">
        {siteContent.chapters.map((chapter) => (
          <ChapterSection key={chapter.id} chapter={chapter} />
        ))}
        <AboutSection about={siteContent.about} />
        <footer aria-hidden />
      </main>

      <ScrollArrow
        href="#section-01"
        direction="up"
        label="回到顶部"
        fixed
        hidden={!atBottom}
      />
    </div>
  )
}
