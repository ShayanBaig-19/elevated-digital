import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, className = '', type = 'button' }) {
  const styles = `inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-accent focus-visible:scale-105 ${className}`
  const content = <>{children}<ArrowUpRight size={16} aria-hidden="true" /></>
  return to ? <Link className={styles} to={to}>{content}</Link> : <button type={type} className={styles}>{content}</button>
}
