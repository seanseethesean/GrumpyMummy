const Footer = () => {
  return (
    <footer className="border-t border-amber-100/60 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-charcoal sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg tracking-wide text-brand-base">Grumpy Mummy</p>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">Small batch baking studio in SG</p>
        </div>
        <div className="flex flex-col gap-2 text-charcoal/80 sm:text-right">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-base">
            Instagram @grumpy.mummy.bakes
          </a>
          <a href="mailto:hello@grumpymummy.com" className="transition hover:text-brand-base">
            hello@grumpymummy.com
          </a>
          <p>© {new Date().getFullYear()} Grumpy Mummy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
