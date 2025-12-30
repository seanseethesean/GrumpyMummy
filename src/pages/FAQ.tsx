const faqs = [
  {
    question: 'What is the lead time?',
    answer: 'Standard cakes need 3-4 days notice. Custom finishes or large orders need 10-14 days.',
  },
  {
    question: 'Do you accept custom orders?',
    answer: 'Yes. Share inspiration photos and serving size on WhatsApp. We will confirm feasibility and quote before locking slots.',
  },
  {
    question: 'How do I store the desserts?',
    answer: 'Keep refrigerated. Cheesecake: 3 days. Tiramisu: 2 days. Always serve slightly chilled for best texture.',
  },
  {
    question: 'Allergy information',
    answer: 'Our kitchen works with gluten, dairy, nuts, and eggs. While we clean between batches, cross-contact is possible.',
  },
  {
    question: 'Delivery or pickup?',
    answer: 'Pickup near Farrer Park. Courier delivery available across Singapore (from $18). We package everything in insulated bags.',
  },
  {
    question: 'Payment methods',
    answer: 'PayNow is preferred. Credit card links available on request. A 50% deposit secures the baking slot.',
  },
]

const FAQ = () => (
  <div>
    <div className="mb-8 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">FAQ</p>
      <h1 className="font-display text-4xl text-charcoal">Everything you ask before ordering</h1>
      <p className="mt-4 text-sm text-charcoal/80">Still unsure? Slide into WhatsApp – we respond within a day.</p>
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
