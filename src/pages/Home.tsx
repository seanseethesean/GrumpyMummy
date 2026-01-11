import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBanner from '../components/announcements/AnnouncementBanner'
import Spinner from '../components/common/Spinner'
import MenuItemCard from '../components/menu/MenuItemCard'
import MenuItemModal from '../components/menu/MenuItemModal'
import { useAnnouncements } from '../hooks/useAnnouncements'
import { useMenuItems } from '../hooks/useMenuItems'
import type { MenuItem } from '../types/menu'

const telegramLink = 'https://t.me/Joshualeong'
const instagramLink = 'https://www.instagram.com/grumpymummybakes?igsh=eXEwM2o0YzJ5eDFl&utm_source=qr'

const Home = () => {
  const { latestActive } = useAnnouncements()
  const { items, loading } = useMenuItems()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const bestsellersList = items.filter((item) => item.featured)
  const bestsellers = (bestsellersList.length ? bestsellersList : items).slice(0, 2)

  return (
    <div className="space-y-12">
      <section className="grain-overlay rounded-[32px] bg-white px-6 py-12 shadow-card md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Small batch baking</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-charcoal md:text-5xl">
              Comfort desserts with unapologetic flavor and a grumpy streak
            </h1>
            <p className="mt-4 text-base text-charcoal/80">
              We craft jellyheart cakes and tiramisu with obsessive technique so you can serve them confidently
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-base px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream shadow-card transition hover:bg-brand-dark"
              >
                Order on Telegram
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal transition hover:border-brand-base hover:text-brand-base"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="rounded-[28px] bg-brand-light/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-dark">How we work</p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
              <li>• Pre-orders for the following week closes every Saturday</li>
              <li>• Flexible weekday pickup (NUS or Pasir Ris)</li>
              <li>• Best-by guidance will be provided with each order</li>
              <li>• Refrigerated storage recommended for freshness</li>
            </ul>
          </div>
        </div>
      </section>

      <AnnouncementBanner announcement={latestActive} />

      <section>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50">Bestsellers</p>
            <h2 className="font-display text-3xl text-charcoal">People keep coming back for these</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-base">
            View menu →
          </Link>
        </div>
        {loading ? (
          <Spinner label="Loading menu" />
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {bestsellers.map((item) => (
              <MenuItemCard key={item.id} item={item} onSelect={(next) => setSelectedItem(next)} />
            ))}
          </div>
        )}
      </section>

      {selectedItem && <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  )
}

export default Home
