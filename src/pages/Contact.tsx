// import type { FormEvent } from 'react'
// import { useState } from 'react'
// import { submitEnquiry } from '../services/enquiriesService'

// const defaultForm = { name: '', contact: '', message: '' }

const Contact = () => {
//   const [form, setForm] = useState(defaultForm)
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     if (!form.name || !form.contact || !form.message) {
//       setError('Please fill in all fields before sending the enquiry.')
//       return
//     }

//     try {
//       setStatus('loading')
//       setError(null)
//       await submitEnquiry(form)
//       setStatus('success')
//       setForm(defaultForm)
//     } catch (err) {
//       console.error(err)
//       setStatus('error')
//       setError('Something went wrong. Please try again later.')
//     }
//   }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <section>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Contact</p>
        <h1 className="font-display text-4xl text-charcoal">Let's talk dessert logistics</h1>
        <p className="mt-3 text-sm text-charcoal/80">Reach out for quotes, custom briefs, or last-minute cravings.</p>
        <div className="mt-6 space-y-4 text-sm text-charcoal/80">
          <a href="https://www.instagram.com/grumpymummybakes?igsh=eXEwM2o0YzJ5eDFl&utm_source=qr" target="_blank" rel="noreferrer" className="block text-brand-base">
            Instagram @grumpymummybakes
          </a>
          <a href="https://www.tiktok.com/@grumpymummybake?_r=1" target="_blank" rel="noreferrer" className="block text-brand-base">
            Tiktok @grumpymummybake
          </a>
          <a href="https://t.me/grumpymummybakes" target="_blank" rel="noreferrer" className="block text-brand-base">
            Telegram channel @GrumpyMummy
          </a>
        </div>
      </section>

{/* For next time to link to email
      <section className="rounded-[32px] bg-white/80 p-6 shadow-card">
        <h2 className="font-display text-2xl text-charcoal">Send an enquiry</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-charcoal" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand-base focus:ring-brand-base"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-charcoal" htmlFor="contact">
              Contact (email / WhatsApp)
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              className="mt-1 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand-base focus:ring-brand-base"
              value={form.contact}
              onChange={(event) => setForm((prev) => ({ ...prev, contact: event.target.value }))}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-charcoal" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm focus:border-brand-base focus:ring-brand-base"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {status === 'success' && <p className="text-sm text-emerald-700">Enquiry sent! We will respond within one business day.</p>}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-full bg-brand-base px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-brand-dark disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </section>
    */}
    </div>
  )
}

export default Contact
