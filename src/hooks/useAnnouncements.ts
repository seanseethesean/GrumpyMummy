import type { Unsubscribe } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { sampleAnnouncements } from '../data/seedData'
import { listenToAnnouncements } from '../services/announcementsService'
import type { Announcement } from '../types/announcement'

const fallbackAnnouncements: Announcement[] = sampleAnnouncements.map((announcement, index) => ({
  ...announcement,
  id: `sample-announcement-${index}`,
}))

const isAnnouncementActive = (announcement: Announcement) => {
  if (!announcement.active) return false
  const now = Date.now()
  const start = announcement.startAt ? Date.parse(announcement.startAt) : now
  const end = announcement.endAt ? Date.parse(announcement.endAt) : now
  return start <= now && now <= end
}

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(fallbackAnnouncements)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null

    unsubscribe = listenToAnnouncements(
      (records) => {
        setAnnouncements(records.length ? records : fallbackAnnouncements)
        setLoading(false)
      },
      (err) => {
        console.error(err)
        setError('Unable to load announcements right now.')
        setLoading(false)
      },
    )

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

  const latestActive = useMemo(
    () => announcements.find((announcement) => isAnnouncementActive(announcement)),
    [announcements],
  )

  return { announcements, latestActive, loading, error }
}
