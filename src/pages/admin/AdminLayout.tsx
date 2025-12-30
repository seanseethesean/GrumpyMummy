import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { logout } from '../../services/authService'

const adminLinks = [
  { path: '/admin/menu', label: 'Menu Manager' },
  { path: '/admin/announcements', label: 'Announcements' },
]

const AdminLayout = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } finally {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <header className="border-b border-white/5 bg-charcoal/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <p className="font-display text-2xl tracking-widest">Grumpy Mummy · Admin</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/70">{user?.email}</span>
            <button type="button" onClick={handleLogout} className="rounded-full border border-white/40 px-4 py-1 text-xs uppercase tracking-[0.3em]">
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-[220px_1fr] sm:px-6 lg:px-8">
        <nav className="rounded-3xl bg-white/5 p-4">
          <ul className="space-y-2 text-sm">
            {adminLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 font-semibold transition ${
                      isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <main className="rounded-3xl bg-white text-charcoal shadow-2xl">
          <div className="rounded-3xl p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
