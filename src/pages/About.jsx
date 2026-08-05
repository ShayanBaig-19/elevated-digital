import SectionTitle from '../components/ui/SectionTitle'
import BackButton from '../components/ui/BackButton'
import ProfileCard from '../components/about/ProfileCard'
import { profiles } from '../data/profiles'
export default function About() { return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><BackButton /><SectionTitle eyebrow="About us" title="Small by design. Serious by nature." copy="We combine strategic thinking, exceptional creative, and intelligent technology to make brands matter online." /><div className="mt-12 grid gap-5 md:grid-cols-2">{profiles.map(profile => <ProfileCard key={profile.slug} profile={profile} />)}</div></div></section> }
