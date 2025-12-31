import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'

const links = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
]

const whatsappLink = 'https://wa.me/0000000000'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition hover:text-brand-base ${isActive ? 'text-brand-base' : 'text-charcoal'}`

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col text-left">
            <div className="h-[110px] w-[110px] md:h-[140px] md:w-[140px] shrink-0">
                <img src={logo} alt="Grumpy Mummy Logo" className="h-full w-full object-contain" />
            </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-base px-5 py-2 text-sm font-semibold text-cream shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Order on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-charcoal" />
          <span className="mt-1 block h-0.5 w-6 bg-charcoal" />
          <span className="mt-1 block h-0.5 w-6 bg-charcoal" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-amber-100/60 bg-cream md:hidden">
          <div className="space-y-2 px-4 py-4">
            {links.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-base px-5 py-2 text-sm font-semibold text-cream"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
