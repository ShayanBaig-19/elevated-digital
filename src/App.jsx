import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Seo from './components/ui/Seo'

const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Profile = lazy(() => import('./pages/Profile'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const pageContent = {
  home: { title: '', description: 'Elevate Digital is a social media marketing agency creating culture-shaping content and measurable growth.' },
  work: { title: 'Work', description: 'Explore all the real brands we have worked with.' },
  about: { title: 'About', description: 'Meet the strategic and creative team behind Elevate Digital.' },
  testimonials: { title: 'Testimonials', description: 'Hear from brands that have partnered with Elevate Digital.' },
  contact: { title: 'Contact', description: 'Start a conversation with Elevate Digital about your next social media project.' },
}
function Page({ children, seo = pageContent.home }) { return <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25, ease: 'easeOut' }} className="min-h-screen"><Seo {...seo} /><Navbar />{children}<Footer /></motion.main> }
function LoadingPage() { return <div className="min-h-screen" aria-live="polite" aria-label="Loading page" /> }
export default function App() { const location = useLocation(); return <AnimatePresence mode="wait"><Suspense fallback={<LoadingPage />}><Routes location={location} key={location.pathname}><Route path="/" element={<Page><Home /></Page>} /><Route path="/work" element={<Page seo={pageContent.work}><Work /></Page>} /><Route path="/about" element={<Page seo={pageContent.about}><About /></Page>} /><Route path="/about/:slug" element={<Page seo={pageContent.about}><Profile /></Page>} /><Route path="/testimonials" element={<Page seo={pageContent.testimonials}><Testimonials /></Page>} /><Route path="/contact" element={<Page seo={pageContent.contact}><Contact /></Page>} /><Route path="*" element={<Page><Home /></Page>} /></Routes></Suspense></AnimatePresence> }

