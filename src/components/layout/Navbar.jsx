import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/elevate-digital-logo.webp'

const links = [['Home', '/'], ['Work', '/work'], ['About', '/about'], ['Testimonials', '/testimonials'], ['Contact', '/contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigationLink = ([label, path], mobile = false) => <NavLink end={path === '/'} onClick={mobile ? () => setOpen(false) : undefined} key={path} to={path} className={({ isActive }) => `${mobile ? 'block py-3' : ''} rounded text-sm ${isActive ? 'text-accent' : 'text-secondary hover:text-text focus-visible:text-text'} ${mobile ? 'hover:text-accent focus-visible:text-accent' : ''}`}>{label}</NavLink>
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur"><nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"><Link to="/" aria-label="Elevate Digital home" className="rounded"><img src={logo} alt="Elevate Digital" className="h-8 w-auto" /></Link><div className="hidden items-center gap-7 md:flex">{links.map(link => navigationLink(link))}</div><button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="rounded p-1 md:hidden">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></nav>{open && <div id="mobile-navigation" className="border-t border-border px-5 py-5 md:hidden">{links.map(link => navigationLink(link, true))}</div>}</header>
}
