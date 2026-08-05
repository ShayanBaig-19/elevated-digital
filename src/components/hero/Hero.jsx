import { useReducedMotion, motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const entrance = reduceMotion ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: .7, ease: 'easeOut' } }
  const visualEntrance = reduceMotion ? {} : { initial: { opacity: 0, scale: .92 }, animate: { opacity: 1, scale: 1 }, transition: { delay: .15, duration: .7, ease: 'easeOut' } }
  return <section className="overflow-hidden px-5 py-18 sm:py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]"><motion.div {...entrance}><p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-accent">Social media, elevated</p><h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.05em] sm:text-7xl">We make brands impossible to <span className="text-accent">ignore.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-secondary">Elevate Digital partners with ambitious brands to create culture-shaping social experiences and measurable growth.</p><Button to="/contact" className="mt-8">Start a conversation</Button></motion.div><motion.div {...visualEntrance} className="relative mx-auto aspect-square w-full max-w-md rounded-[2rem] bg-gradient-to-br from-primary via-[#60A5FA] to-accent p-5"><div className="flex h-full items-end rounded-[1.5rem] border border-border bg-background/85 p-7"><p className="text-4xl font-semibold leading-none tracking-tight">Digital<br/>with<br/><span className="text-accent">dimension.</span></p></div><span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary shadow-sm">AI × culture</span></motion.div></div></section>
}



