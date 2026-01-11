import type { AnnouncementPayload } from '../types/announcement'
import type { MenuItemPayload } from '../types/menu'
import tiramisuImage from '../assets/images/Tiramisu.png'
import rubyCheesecakeImage from '../assets/images/Cheesecake.png'

export const menuItems: MenuItemPayload[] = [
  {
    name: 'Ruby Cheesecake',
    category: 'Cakes',
    description:
      'Buttery biscuit base with decadent cream cheese, fresh strawberries, and a springy sweet jelly top, a refreshing yet indulgent strawberry cheesecake dessert',
    allergens: ['Cheese', 'Gelatin (Beef)', 'Gluten'],
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
      'Decadent tiramisu layered with artisan ladyfinger biscuits soaked in rich espresso, finished with creamy mascarpone layers for an indulgent, melt-in-your-mouth dessert',
    allergens: ['Alcohol', 'Cheese', 'Gluten'],
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
