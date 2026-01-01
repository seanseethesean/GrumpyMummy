import type { AnnouncementPayload } from '../types/announcement'
import type { MenuItemPayload } from '../types/menu'
import tiramisuImage from '../assets/images/Tiramisu.jpg'
import rubyCheesecakeImage from '../assets/images/Cheesecake.jpg'

export const menuItems: MenuItemPayload[] = [
  {
    name: 'Ruby Cheesecake',
    category: 'Cakes',
    description:
      'Silky ruby chocolate cheesecake with a brown butter biscuit base, finished with macerated berries and edible petals.',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    variants: [
      { label: '6" (6-8 slices)', price: 85 },
      { label: '8" (10-12 slices)', price: 110 },
    ],
    status: 'available',
    featured: true,
    imageUrl: rubyCheesecakeImage,
  },
  {
    name: 'Tiramisu SLOP',
    category: 'Cakes',
    description:
      'Single-origin espresso soaked sponge layered with mascarpone cream, Valrhona cocoa, and a whisper of dark rum.',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    variants: [
      { label: '7" (8 servings)', price: 95 },
      { label: 'Dessert Cups (box of 6)', price: 60 },
    ],
    status: 'available',
    featured: true,
    imageUrl: tiramisuImage,
  },
]

export const sampleAnnouncements: AnnouncementPayload[] = [
  {
    title: 'January Slots Update',
    message: 'We are fully booked for the first two weekends of January. Limited weekday pick-ups available – drop us a WhatsApp to secure a slot.',
    startAt: new Date().toISOString(),
    endAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(),
    active: true,
  },
]
