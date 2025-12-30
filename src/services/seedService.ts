import { seedAnnouncementsIfEmpty } from './announcementsService'
import { seedMenuItemsIfEmpty } from './menuService'

let hasSeeded = false

export const ensureSeedData = async () => {
  const seedEnabled = import.meta.env.DEV || import.meta.env.VITE_ENABLE_SEED === 'true'
  if (!seedEnabled || hasSeeded) return

  hasSeeded = true
  await Promise.all([seedMenuItemsIfEmpty(), seedAnnouncementsIfEmpty()])
}
