interface SpinnerProps {
  label?: string
}

const Spinner = ({ label = 'Loading' }: SpinnerProps) => (
  <div className="flex flex-col items-center gap-2 py-10 text-charcoal/70">
    <span className="h-12 w-12 animate-spin rounded-full border-4 border-brand-light border-t-brand-base" />
    <p className="text-sm font-medium uppercase tracking-[0.3em]">{label}</p>
  </div>
)

export default Spinner
