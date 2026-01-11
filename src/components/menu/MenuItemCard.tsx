import type { MenuItem } from '../../types/menu'
import { getAllergenNote } from '../../utils/allergenNotes'
import { formatPrice } from '../../utils/format'

interface MenuItemCardProps {
  item: MenuItem
  onSelect: (item: MenuItem) => void
}

const statusCopy: Record<MenuItem['status'], string> = {
  available: 'Available',
  preorder: 'Pre-order',
  'sold-out': 'Sold out',
}

const MenuItemCard = ({ item, onSelect }: MenuItemCardProps) => {
  const allergenNote = getAllergenNote(item.name)

  return (
  <button
    type="button"
    onClick={() => onSelect(item)}
    className="card-sheen flex flex-col overflow-hidden rounded-3xl border border-amber-100/80 bg-white text-left shadow-card"
  >
    {item.imageUrl && (
      <div className="relative h-72 w-full overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-bottom transition duration-500 hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
          {statusCopy[item.status]}
        </span>
      </div>
    )}
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">{item.category}</p>
        <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
      </div>
      <p className="text-sm text-charcoal/80">{item.description}</p>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Variants</p>
        <ul className="mt-1 space-y-2">
          {item.variants.slice(0, 3).map((variant) => (
            <li
              key={variant.label}
              className="w-fit rounded-full bg-brand-light/60 px-3 py-1 text-xs text-charcoal"
            >
              {variant.label} · {formatPrice(variant.price)}
            </li>
          ))}
          {item.variants.length > 3 && (
            <li className="text-xs text-charcoal/60">+{item.variants.length - 3} more</li>
          )}
        </ul>
      </div>
      <div className="mt-auto">
        <p className="text-[11px] uppercase tracking-[0.25em] text-charcoal/50">Allergens & Notes</p>
        <p className="text-sm text-charcoal/80">{item.allergens.join(', ')}</p>
        {allergenNote && <p className="text-xs text-charcoal/60 leading-relaxed">{allergenNote}</p>}
      </div>
    </div>
  </button>
  )
}

export default MenuItemCard
