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
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
        Contact
      </p>

      <h1 className="mt-2 font-display text-4xl text-charcoal">
        Let's talk dessert 
      </h1>

      <p className="mt-3 text-sm text-charcoal/80">
        Reach out for quotes, bulk orders, or last-minute cravings.
      </p>

      {/* Primary CTA: Email */}
      <div className="mt-8 rounded-[28px] bg-gradient-to-br from-brand-base/10 via-white to-brand-base/5 p-7 ring-1 ring-brand-base/15 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-charcoal/70">
              Email for custom orders
            </p>
            <p className="mt-1 text-sm text-charcoal/80">
              For bulk orders, custom cakes, and special requests.
            </p>
          </div>
          <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-charcoal/70">
            Fast reply
          </span>
        </div>

        <a
          href="mailto:grumpymummybakes@gmail.com"
          className="mt-6 flex items-center justify-between gap-4 rounded-[34px] bg-charcoal px-5 py-4 text-cream text-lg font-semibold transition hover:bg-charcoal/80 hover:shadow-[0_18px_35px_-25px_rgba(15,23,42,0.65)] cursor-pointer min-h-[56px]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-cream">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </span>
          <div className="flex flex-1 flex-col text-left text-base">
            <span className="font-semibold text-cream/95">grumpymummybakes@gmail.com</span>
            <span className="text-sm font-medium text-cream/80">Email us &rarr;</span>
          </div>
        </a>

        <ul className="mt-5 space-y-1.5 text-sm text-charcoal/80">
          <li>Replies within 24 hours</li>
          <li>Bulk & corporate orders welcome</li>
          <li>Complimentary design consultation</li>
        </ul>
      </div>

      <p className="mt-4 text-xs text-charcoal/70">
        Tell us what you're planning &mdash; we'll handle the dessert math.
      </p>

      {/* Secondary: Social links */}
      <div className="mt-8 space-y-3 text-sm">
        <p className="text-xs uppercase tracking-wide text-charcoal/60">
          Or reach us on
        </p>

        <a
          href="https://www.instagram.com/grumpymummybakes"
          target="_blank"
          rel="noreferrer"
          className="block text-brand-base hover:underline"
        >
          Instagram @grumpymummybakes
        </a>

        <a
          href="https://www.tiktok.com/@grumpymummybake"
          target="_blank"
          rel="noreferrer"
          className="block text-brand-base hover:underline"
        >
          TikTok @grumpymummybake
        </a>

        <a
          href="https://t.me/grumpymummybakes"
          target="_blank"
          rel="noreferrer"
          className="block text-brand-base hover:underline"
        >
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
