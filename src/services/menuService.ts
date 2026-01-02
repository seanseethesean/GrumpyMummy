import {
  type DocumentData,
  type QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  limit,
  doc,
  getCountFromServer,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { menuItems } from '../data/seedData'
import type { MenuItem, MenuItemPayload } from '../types/menu'
import { db } from './firebase'

const menuCollection = collection(db, 'menu_items')

const normalizeTimestamp = (value: unknown): string | undefined => {
  if (!value) return undefined
  if (typeof value === 'string') return value
  if (typeof value === 'object' && 'toDate' in value && typeof (value as { toDate: () => Date }).toDate === 'function') {
    return (value as { toDate: () => Date }).toDate().toISOString()
  }
  return undefined
}

const mapMenuItem = (snapshot: QueryDocumentSnapshot<DocumentData>): MenuItem => {
  const data = snapshot.data() as MenuItemPayload & {
    createdAt?: unknown
    updatedAt?: unknown
  }

  return {
    id: snapshot.id,
    ...data,
    createdAt: normalizeTimestamp(data.createdAt),
    updatedAt: normalizeTimestamp(data.updatedAt),
  }
}

export const listenToMenuItems = (
  onChange: (items: MenuItem[]) => void,
  onError?: (error: Error) => void,
) => {
  const q = query(menuCollection, orderBy('featured', 'desc'), orderBy('name', 'asc'))
  return onSnapshot(
    q,
    (snapshot) => {
      const items = snapshot.docs.map((docSnap) => mapMenuItem(docSnap))
      onChange(items)
    },
    (error) => onError?.(error),
  )
}

export const createMenuItem = (payload: MenuItemPayload) =>
  addDoc(menuCollection, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

export const updateMenuItem = (id: string, payload: Partial<MenuItemPayload>) =>
  updateDoc(doc(menuCollection, id), {
    ...payload,
    updatedAt: serverTimestamp(),
  })

export const deleteMenuItem = (id: string) => deleteDoc(doc(menuCollection, id))

export const seedMenuItemsIfEmpty = async () => {
  const snap = await getDocs(query(menuCollection, limit(1)))
  if (!snap.empty) return

  await Promise.all(menuItems.map((item) => createMenuItem(item)))
}
