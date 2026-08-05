export default function SectionTitle({ eyebrow, title, copy, align = 'left' }) {
  return <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>}
    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    {copy && <p className="mt-5 text-base leading-7 text-secondary">{copy}</p>}
  </div>
}

