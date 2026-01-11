const About = () => (
  <div className="space-y-10">
    <section className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">About us</p>
      <h1 className="font-display text-4xl text-charcoal">Grumpy Mummy is a tiny but mighty dessert studio</h1>
      <p className="mt-4 text-base text-charcoal/80">
        Grumpy Mummy began as weekend bakes for friends — desserts made by the founder and his mum, brought to school for friends to try. One of us baked; the other kept coming back with ideas. After a year of empty containers and repeat requests, we decided to make it official.
        Every order is handmade, clearly labeled with storage instructions, and packed with the same stern care we reserve for family.
      </p>
    </section>

    <section className="grid gap-6 rounded-[32px] bg-white/80 p-8 shadow-card md:grid-cols-2">
      <div>
        <h2 className="font-display text-2xl text-charcoal">Values & Quality</h2>
        <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
          <li>• Premium dairy, single-origin chocolate, and seasonal fruit purées.</li>
          <li>• Zero artificial stabilisers. We rely on technique, not shortcuts.</li>
          <li>• Flavor-first – sweetness is used as a seasoning, not a crutch.</li>
        </ul>
      </div>
      <div>
        <h2 className="font-display text-2xl text-charcoal">Hygiene & Storage</h2>
        <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
          <li>• Studio sanitised between bakes with NSF-grade solutions.</li>
          <li>• Temperature-monitored fridge and freezer with logs.</li>
          <li>• Each order leaves with storage cards and serving tips.</li>
        </ul>
      </div>
    </section>

    <section className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-amber-100/60 bg-white/70 p-6">
        <h3 className="font-display text-xl text-charcoal">What makes us different</h3>
        <p className="mt-2 text-sm text-charcoal/80">We treat desserts like a craft, balancing texture, acidity, and salt</p>
      </div>
      <div className="rounded-3xl border border-amber-100/60 bg-white/70 p-6">
        <h3 className="font-display text-xl text-charcoal">Lead time</h3>
        <p className="mt-2 text-sm text-charcoal/80">Weekly pre-orders lock every Saturday Customs need about 10 days</p>
      </div>
      <div className="rounded-3xl border border-amber-100/60 bg-white/70 p-6">
        <h3 className="font-display text-xl text-charcoal">Pickup & Delivery</h3>
        <p className="mt-2 text-sm text-charcoal/80">Flexible weekday pickup at NUS or Pasir Ris</p>
      </div>
    </section>
  </div>
)

export default About
