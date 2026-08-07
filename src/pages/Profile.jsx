import { Link, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import BackButton from '../components/ui/BackButton'
import Seo from '../components/ui/Seo'
import { profiles } from '../data/profiles'

function Info({ title, children }) { return <section className="mt-8 border-t border-border pt-5"><h2 className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-accent">{title}</h2>{children}</section> }
export default function Profile() {
  const { slug } = useParams()
  const profile = profiles.find(person => person.slug === slug)
  if (!profile) return <section className="px-5 py-28"><Seo title="Profile not found" /><div className="mx-auto max-w-6xl text-center"><div className="text-left"><BackButton /></div><h1 className="text-4xl font-semibold">Profile not found</h1><Link className="mt-6 inline-block rounded text-accent hover:text-text" to="/about">Meet the team</Link></div></section>
  return <section className="px-5 py-16 lg:px-8"><Seo title={profile.name} description={`${profile.name}, ${profile.role} at Elevate Digital.`} /><div className="mx-auto max-w-6xl"><BackButton /><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><img src={profile.image} alt={`${profile.name}, ${profile.role}`} className="w-full rounded-3xl object-cover" decoding="async" fetchPriority="high" sizes="(min-width: 1024px) 40vw, 100vw" /><div><p className="text-xs font-bold uppercase tracking-[.2em] text-accent">{profile.role}</p><h1 className="mt-3 text-5xl font-semibold tracking-tight">{profile.name}</h1><p className="mt-7 text-lg leading-8 text-secondary">{profile.about}</p><Info title="Skills"><div className="flex flex-wrap gap-2">{profile.skills.map(skill => <span key={skill} className="rounded-full border border-border px-3 py-1 text-sm">{skill}</span>)}</div></Info><Info title="Experience"><p className="text-secondary">{profile.experience}</p></Info><Info title="Certificates"><img src={profile.certificateImage} alt={`Certificate for ${profile.name}`} className="w-full rounded-3xl" loading="lazy" decoding="async" sizes="(min-width: 1024px) 48vw, 100vw" /></Info><a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-accent focus-visible:scale-105"><ExternalLink size={16} aria-hidden="true" /> {profile.slug === 'shayan-baig' ? 'Behance' : 'LinkedIn'}</a></div></div></div></section>
}

