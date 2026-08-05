import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/', { replace: true })
  }
  return <button type="button" onClick={goBack} className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-text transition duration-200 hover:border-primary hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white"><ArrowLeft size={16} aria-hidden="true" />Back</button>
}
