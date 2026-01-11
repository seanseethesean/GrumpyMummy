import type { MenuItem } from '../../types/menu'
import { getAllergenNote } from '../../utils/allergenNotes'
import { formatPrice } from '../../utils/format'

interface MenuItemModalProps {
  item: MenuItem | null
  onClose: () => void
}

const MenuItemModal = ({ item, onClose }: MenuItemModalProps) => {
  if (!item) return null

  const allergenNote = getAllergenNote(item.name)

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 px-4 py-8" onClick={onClose}>
      <div
        className="grain-overlay relative mx-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-card"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-charcoal shadow-[0_8px_25px_rgba(15,23,42,0.25)] transition hover:scale-105"
          aria-label="Close details"
        >
          ✕
        </button>
        <div className="grid gap-6 md:grid-cols-2">
          {item.imageUrl && (
            <img src={item.imageUrl} alt={item.name} className="h-72 w-full rounded-2xl object-cover object-bottom" />
          )}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{item.category}</p>
            <h3 className="font-display text-3xl text-charcoal">{item.name}</h3>
            <p className="mt-3 text-sm text-charcoal/80">{item.description}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Variants</p>
              <ul className="mt-2 space-y-2">
                {item.variants.map((variant) => (
                  <li key={variant.label} className="flex items-center justify-between rounded-2xl border border-amber-100/80 px-3 py-2 text-sm">
                    <span>{variant.label}</span>
                    <span className="font-semibold">{formatPrice(variant.price)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-sm text-charcoal/80">
              <p className="text-[11px] uppercase tracking-[0.25em] text-charcoal/50">Allergens & Notes</p>
              <p className="text-sm text-charcoal/80">{item.allergens.join(', ')}</p>
              {allergenNote && <p className="text-xs text-charcoal/60 leading-relaxed">{allergenNote}</p>}
              <p className="mt-2 italic text-charcoal/70">
                Storage: Keep refrigerated and consume within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemModal
