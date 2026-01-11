import { useMemo, useState } from 'react'
import Spinner from '../components/common/Spinner'
import MenuItemCard from '../components/menu/MenuItemCard'
import MenuItemModal from '../components/menu/MenuItemModal'
import { useMenuItems } from '../hooks/useMenuItems'
import type { MenuCategory, MenuItem } from '../types/menu'

const categories: (MenuCategory | 'All')[] = ['All', 'Cakes']

const Menu = () => {
  const { items, loading } = useMenuItems()
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return items
    return items.filter((item) => item.category === selectedCategory)
  }, [items, selectedCategory])

  return (
    <div>
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Menu</p>
        <h1 className="font-display text-4xl text-charcoal">Cheesecakes and tiramisu</h1>
        <p className="mt-3 text-sm text-charcoal/80">
          Pre-orders close every Saturday for the following week’s bakes. Store desserts in the fridge.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? 'border-brand-base bg-brand-base text-cream'
                : 'border-charcoal/20 bg-white text-charcoal hover:border-brand-base'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading && <Spinner label="Loading menu" />}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} onSelect={(next) => setSelectedItem(next)} />
        ))}
      </div>

      {selectedItem && <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  )
}

export default Menu
