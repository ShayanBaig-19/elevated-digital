import SectionTitle from '../components/ui/SectionTitle'
import BackButton from '../components/ui/BackButton'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import { testimonials } from '../data/testimonials'
export default function Testimonials() { return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><BackButton /><SectionTitle eyebrow="Testimonials" title="Good work travels fast." copy="A few words from the people and brands we have been proud to build with." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((testimonial, i) => <TestimonialCard key={i} testimonial={testimonial} />)}</div></div></section> }
