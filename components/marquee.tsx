const items = ['UI/UX Design', 'Mobile Apps', 'Web Apps', 'Design System', 'Prototype', 'Next.js', 'React Native', 'Figma']

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-b-[4px] border-ink bg-gold py-3">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-lg text-ink uppercase">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span className="size-3 rotate-45 border-[3px] border-ink bg-magenta" />
          </span>
        ))}
      </div>
    </div>
  )
}
