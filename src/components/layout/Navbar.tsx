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

const telegramLink = 'https://t.me/Joshualeong'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition hover:text-brand-base ${isActive ? 'text-brand-base' : 'text-charcoal'}`

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full rounded-2xl px-4 py-3 text-base font-medium transition ${
      isActive
        ? 'bg-white/70 text-brand-base'
        : 'text-charcoal hover:bg-charcoal/5'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100/60 bg-cream/95 backdrop-blur relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col text-left">
          <div className="h-16 w-16 shrink-0 md:h-[110px] md:w-[110px]">
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
            href={telegramLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-base px-5 py-2 text-sm font-semibold text-cream shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Order on Telegram
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-6 bg-charcoal" />
          <span className="mt-1 block h-0.5 w-6 bg-charcoal" />
          <span className="mt-1 block h-0.5 w-6 bg-charcoal" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="absolute left-0 right-0 top-full z-40 mt-3 border border-amber-100/60 bg-cream/95 px-4 py-4 shadow-lg">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink key={link.path} to={link.path} className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-base px-5 py-3 text-base font-semibold text-cream shadow-card"
              >
                Order on Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
