export interface Announcement {
  id: string
  title: string
  message: string
  startAt: string
  endAt: string
  active: boolean
  createdAt?: string
  updatedAt?: string
}

export type AnnouncementPayload = Omit<Announcement, 'id' | 'createdAt' | 'updatedAt'>
