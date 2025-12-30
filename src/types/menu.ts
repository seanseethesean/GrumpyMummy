export type MenuCategory = 'Cakes' | 'Signature' | 'Seasonal' | 'Petite Treats'

export type MenuStatus = 'available' | 'preorder' | 'sold-out'

export interface MenuVariant {
  label: string
  price: number
}

export interface MenuItem {
  id: string
  name: string
  category: MenuCategory
  description: string
  allergens: string[]
  variants: MenuVariant[]
  status: MenuStatus
  featured: boolean
  imageUrl?: string
  createdAt?: string
  updatedAt?: string
}

export type MenuItemPayload = Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>
