import logo from '../../assets/images/Website footer.png'

const Footer = () => {
  return (
    <footer className="border-t border-amber-100/60 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-charcoal sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <img src={logo} alt="Grumpy Mummy" className="h-16 w-auto object-contain" />
        <div className="flex flex-col gap-2 text-charcoal/80 sm:text-right">
          <a href="https://www.instagram.com/grumpymummybakes?igsh=eXEwM2o0YzJ5eDFl&utm_source=qr" target="_blank" rel="noreferrer" className="transition hover:text-brand-base">
            Instagram @grumpymummybakes
          </a>
          <a href="https://www.tiktok.com/@grumpymummybake?_r=1" target="_blank" rel="noreferrer" className="transition hover:text-brand-base">
            Tiktok @grumpymummybake
          </a>
          <a href="https://t.me/grumpymummybakes"target="_blank" rel="noreferrer" className="transition hover:text-brand-base">
            Telegram channel @GrumpyMummy
          </a>
          <p>© {new Date().getFullYear()} GrumpyMummyBakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
