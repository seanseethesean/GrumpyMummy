import {
  type DocumentData,
  type QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { sampleAnnouncements } from '../data/seedData'
import type { Announcement, AnnouncementPayload } from '../types/announcement'
import { db } from './firebase'

const announcementsCollection = collection(db, 'announcements')

const normalizeTimestamp = (value: unknown): string | undefined => {
  if (!value) return undefined
  if (typeof value === 'string') return value
  if (typeof value === 'object' && 'toDate' in value) {
    return (value as { toDate: () => Date }).toDate().toISOString()
  }
  return undefined
}

const mapAnnouncement = (snapshot: QueryDocumentSnapshot<DocumentData>): Announcement => {
  const data = snapshot.data() as AnnouncementPayload & {
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

export const listenToAnnouncements = (
  onChange: (announcements: Announcement[]) => void,
  onError?: (error: Error) => void,
) => {
  const q = query(announcementsCollection, orderBy('startAt', 'desc'))
  return onSnapshot(
    q,
    (snapshot) => {
      const announcements = snapshot.docs.map((docSnap) => mapAnnouncement(docSnap))
      onChange(announcements)
    },
    (error) => onError?.(error),
  )
}

export const createAnnouncement = (payload: AnnouncementPayload) =>
  addDoc(announcementsCollection, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

export const updateAnnouncement = (id: string, payload: Partial<AnnouncementPayload>) =>
  updateDoc(doc(announcementsCollection, id), {
    ...payload,
    updatedAt: serverTimestamp(),
  })

export const deleteAnnouncement = (id: string) => deleteDoc(doc(announcementsCollection, id))

export const seedAnnouncementsIfEmpty = async () => {
  const countSnapshot = await getCountFromServer(announcementsCollection)
  if (countSnapshot.data().count > 0) return

  await Promise.all(sampleAnnouncements.map((announcement) => createAnnouncement(announcement)))
}
