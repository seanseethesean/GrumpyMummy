import type { Unsubscribe } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { sampleMenuItems } from '../data/seedData'
import { listenToMenuItems } from '../services/menuService'
import type { MenuItem } from '../types/menu'

const fallbackMenuItems: MenuItem[] = sampleMenuItems.map((item, index) => ({
  ...item,
  id: `sample-${index}`,
}))

export const useMenuItems = () => {
  const [items, setItems] = useState<MenuItem[]>(fallbackMenuItems)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null

    unsubscribe = listenToMenuItems(
      (nextItems) => {
        setItems(nextItems.length ? nextItems : fallbackMenuItems)
        setLoading(false)
      },
      (err) => {
        console.error(err)
        setError('Unable to load our menu right now. Please try again shortly.')
        setLoading(false)
      },
    )

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

  return { items, loading, error }
}
