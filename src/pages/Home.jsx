import Hero from '../components/hero/Hero'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import WorkCard from '../components/work/WorkCard'
import ProfileCard from '../components/about/ProfileCard'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import { projects } from '../data/projects'
import { profiles } from '../data/profiles'
import { testimonials } from '../data/testimonials'

export default function Home() {
  const featured = projects.filter(p => p.featured)
  return <><Hero /><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Featured Work" title="Real Brands We Have Worked With" copy="Strategic social ecosystems for brands with somewhere to go." /><div className="mt-10 grid gap-5 md:grid-cols-2">{featured.map(project => <WorkCard key={project.id} project={project} />)}</div><div className="mt-10 text-center"><Button to="/work">View all work</Button></div></div></section><section className="border-y border-border bg-background px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Meet the Team Behind Elevate Digital" title="Creative minds helping brands grow through strategy, content, and social media." /><div className="mt-10 grid gap-5 md:grid-cols-2">{profiles.map(profile => <ProfileCard key={profile.slug} profile={profile} />)}</div></div></section><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Client Reviews" title="Real feedback from the brands we've had the privilege to work with." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.slice(0, 6).map((testimonial, i) => <TestimonialCard key={i} testimonial={testimonial} />)}</div><div className="mt-10 text-center"><Button to="/testimonials">All testimonials</Button></div></div></section><section className="px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl bg-primary p-8 text-white sm:p-14"><p className="text-xs font-bold uppercase tracking-[.18em]">Ready when you are</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">Let's make your next move memorable.</h2><Button to="/contact" className="mt-7 bg-white !text-[#111827] hover:bg-accent hover:!text-white">Work with us</Button></div></section></>
}


