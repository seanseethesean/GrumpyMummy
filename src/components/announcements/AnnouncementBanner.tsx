import type { Announcement } from '../../types/announcement'

interface AnnouncementBannerProps {
  announcement?: Announcement
}

const AnnouncementBanner = ({ announcement }: AnnouncementBannerProps) => {
  const hasAnnouncement = Boolean(announcement)
  return (
    <section className="mb-10 rounded-2xl bg-brand-light/70 p-4 text-charcoal shadow-card">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-dark">Announcements</p>
      <h3 className="mt-1 font-display text-xl text-brand-dark">
        {hasAnnouncement ? announcement?.title : 'We bake in small batches each week'}
      </h3>
      <p className="mt-2 text-sm text-charcoal/80">
        {hasAnnouncement
          ? announcement?.message
          : 'Drop us a note for the latest bake schedule, lead times, and special collaborations.'}
      </p>
    </section>
  )
}

export default AnnouncementBanner
