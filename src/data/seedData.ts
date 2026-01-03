import type { AnnouncementPayload } from '../types/announcement'
import type { MenuItemPayload } from '../types/menu'
import tiramisuImage from '../assets/images/Tiramisu.png'
import rubyCheesecakeImage from '../assets/images/Cheesecake.png'

export const menuItems: MenuItemPayload[] = [
  {
    name: 'Ruby Cheesecake',
    category: 'Cakes',
    description:
      'Creamy cheesecake set with a ruby jelly heart, layered on a brown-butter biscuit base and finished with macerated berries',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    variants: [
      { label: 'Mini" (2" x 2")', price: 2.99 },
      { label: 'Circle" (9")', price: 37.99 },
      { label: 'Square" (10" x 10")', price: 54.99 },
    ],
    status: 'available',
    featured: true,
    imageUrl: rubyCheesecakeImage,
  },
  {
    name: 'Tiramisu SLOP',
    category: 'Cakes',
    description:
      'Espresso-soaked sponge layered with mascarpone cream, Valrhona cocoa, and a soft whisper of dark rum',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    variants: [
      { label: 'Mini" (2" x 2")', price: 2.99 },
      { label: 'Regular (3" x 4")', price: 7.99 },
      { label: 'Super" (8" x 8")', price: 29.99 },
    ],
    status: 'available',
    featured: true,
    imageUrl: tiramisuImage,
  },
]

export const sampleAnnouncements: AnnouncementPayload[] = [
  {
    title: "Valentine's Day Special",
    message: 'A new package is available at our pop-up stores around NUS!',
    startAt: new Date().toISOString(),
    endAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(),
    active: true,
  },
]
