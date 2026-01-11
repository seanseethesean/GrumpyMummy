const About = () => (
  <div className="space-y-10">
    <section className="max-w-5xl">
      <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">About us</p>
      <h1 className="font-display text-4xl text-charcoal">
        A tiny but mighty home baking studio
      </h1>
      <p className="mt-4 text-base leading-relaxed text-charcoal/80">
        GrumpyMummy began as weekend bakes for friends — desserts made by the founder and his mum, brought to school for friends to try. One of us baked; the other kept coming back with ideas. After a year of empty containers and repeat requests, we decided to make it official.
        <br /><br />
        Every order is handmade in small batches, clearly labeled with storage instructions, and packed with the same stern care we reserve for family.
      </p>
    </section>

    <section className="rounded-2xl bg-white/80 p-5 shadow-card md:max-w-xl">
      <h2 className="font-display text-xl text-charcoal">Hygiene & Storage</h2>
      <ul className="mt-2 space-y-1.5 text-xs text-charcoal/75">
        <li>• Studio sanitised between bakes with NSF-grade solutions</li>
      </ul>
    </section>

    <section className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-amber-100/60 bg-white/70 p-6">
        <h3 className="font-display text-xl text-charcoal">
          What makes us different ?
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-charcoal/80">
          <li>• We focus on tiny-batch precision over mass production</li>
          <li>• Pricing stays honest by baking in small runs and avoiding unnecessary markups</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-amber-100/60 bg-white/70 p-6">
        <h3 className="font-display text-xl text-charcoal">Pickup & Delivery</h3>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-charcoal/80">
          <li>• Flexible weekday pickup at NUS or Pasir Ris</li>
          <li>• Delivery subject to location and quoted before dispatch</li>
        </ul>
      </div>
    </section>
  </div>
)

export default About

