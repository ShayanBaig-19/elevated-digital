import logo from '../../assets/images/elevate-digital-logo.webp'

export default function Footer() {
  return <footer className="border-t border-border px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><img src={logo} alt="Elevate Digital" className="h-8 w-auto" loading="lazy" decoding="async" /><p className="mt-2 text-sm text-secondary">Social marketing with a point of view.</p></div>{/* TODO: Add verified brand social URLs before rendering social links. */}<p className="text-xs uppercase tracking-[.12em] text-secondary">Social links coming soon</p><p className="text-sm text-secondary">© {new Date().getFullYear()} Elevate Digital.</p></div></footer>
}

