import type { FormEvent } from 'react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { loginWithEmail } from '../../services/authService'

const AdminLogin = () => {
  const { isAdmin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (isAdmin) {
    return <Navigate to="/admin/menu" replace />
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const trimmedEmail = email.trim()
      await loginWithEmail(trimmedEmail, password)
      const redirectPath = (location.state as { from?: string } | null)?.from || '/admin/menu'
      navigate(redirectPath, { replace: true })
    } catch (err) {
      console.error(err)
      setError('Unable to sign in. Please double-check your credentials or contact the owner.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-md px-4 py-20">
        <div className="rounded-[32px] bg-white/90 p-8 shadow-card">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Admin</p>
          <h1 className="font-display text-3xl text-charcoal">Welcome back</h1>
          <p className="mt-2 text-sm text-charcoal/70">Only whitelisted email accounts can log in.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold text-charcoal" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand-base focus:ring-brand-base"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-charcoal" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand-base focus:ring-brand-base"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-brand-base disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
