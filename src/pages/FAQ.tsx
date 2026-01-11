const faqs = [
  {
    question: 'Do you accept custom orders?',
    answer: 'Yes. Custom orders are accepted on a case-by-case basis. Share your request via Telegram or email, we’ll let you know what’s feasible and confirm pricing before locking the order',
  },
  {
    question: 'How do I store the desserts?',
    answer: 'Keep everything refrigerated',
  },
  {
    question: 'Delivery or pickup?',
    answer: 'Flexible weekday pickup at NUS or Pasir Ris. Delivery subject to location and quoted before dispatch',
  },
  {
    question: 'Payment methods',
    answer: 'PayNow is preferred',
  },
]

const FAQ = () => (
  <div>
    <div className="mb-8 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">FAQ</p>
      <h1 className="font-display text-4xl text-charcoal">Everything you ask before ordering</h1>
      <p className="mt-4 text-sm text-charcoal/80">
        Still unsure? Text us on{' '}
        <a
          href="https://t.me/Joshualeong"
          target="_blank"
          rel="noreferrer"
          className="text-brand-base underline decoration-brand-base underline-offset-2 hover:text-brand-dark"
        >
          Telegram
        </a>{' '}
        – we respond within a day
      </p>
    </div>
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-3xl border border-amber-100/70 bg-white/80 p-6 shadow-sm">
          <h3 className="font-display text-xl text-charcoal">{faq.question}</h3>
          <p className="mt-2 text-sm text-charcoal/80">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
)

export default FAQ
