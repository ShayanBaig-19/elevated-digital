import { useEffect } from 'react'

const siteName = 'Elevate Digital'
const defaultDescription = 'Culture-shaping social experiences and measurable growth for ambitious brands.'

export default function Seo({ title, description = defaultDescription }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteName}` : `${siteName} | Social Media Marketing`
    document.title = pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [title, description])
  return null
}

