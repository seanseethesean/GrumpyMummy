import { seedAnnouncementsIfEmpty } from './announcementsService'
import { seedMenuItemsIfEmpty } from './menuService'

let hasSeeded = false

export const ensureSeedData = async () => {
  const seedEnabled = import.meta.env.DEV || import.meta.env.VITE_ENABLE_SEED === 'true'
  if (!seedEnabled || hasSeeded) return

  hasSeeded = true
  try {
    await Promise.all([seedMenuItemsIfEmpty(), seedAnnouncementsIfEmpty()])
  } catch (e) {
    console.error('Seeding failed (non-blocking):', e)
  }
}