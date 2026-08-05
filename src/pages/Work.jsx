import SectionTitle from '../components/ui/SectionTitle'
import BackButton from '../components/ui/BackButton'
import WorkCard from '../components/work/WorkCard'
import { projects } from '../data/projects'
export default function Work() { return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><BackButton /><SectionTitle eyebrow="Our work" title="Social that earns its place in culture." copy="A collection of thoughtfully built brand worlds, campaigns, and always-on social." /><div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map(project => <WorkCard key={project.id} project={project} />)}</div></div></section> }
