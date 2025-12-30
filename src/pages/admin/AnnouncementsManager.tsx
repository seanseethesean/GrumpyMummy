import type { FormEvent } from 'react'
import { useState } from 'react'
import { useAnnouncements } from '../../hooks/useAnnouncements'
import {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from '../../services/announcementsService'
import type { Announcement, AnnouncementPayload } from '../../types/announcement'

const toInputDateTime = (date: Date) => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16)

const createDefaultForm = (): AnnouncementPayload => ({
  title: '',
  message: '',
  startAt: toInputDateTime(new Date()),
  endAt: toInputDateTime(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
  active: true,
})

const AnnouncementsManager = () => {
  const { announcements } = useAnnouncements()
  const [form, setForm] = useState<AnnouncementPayload>(createDefaultForm())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const resetForm = () => {
    setEditingId(null)
    setForm(createDefaultForm())
  }

  const handleEdit = (announcement: Announcement) => {
    const { id, createdAt, updatedAt, ...rest } = announcement
    setEditingId(id)
    setForm({
      ...rest,
      startAt: rest.startAt ? rest.startAt.slice(0, 16) : '',
      endAt: rest.endAt ? rest.endAt.slice(0, 16) : '',
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setStatusMessage(null)

    try {
      const payload = form
      if (editingId) {
        await updateAnnouncement(editingId, payload)
        setStatusMessage('Announcement updated.')
      } else {
        await createAnnouncement(payload)
        setStatusMessage('Announcement created.')
      }
      resetForm()
    } catch (error) {
      console.error(error)
      setStatusMessage('Unable to save announcement. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this announcement?')) return
    try {
      await deleteAnnouncement(id)
      setStatusMessage('Announcement deleted.')
    } catch (error) {
      console.error(error)
      setStatusMessage('Failed to delete announcement.')
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-display text-3xl text-charcoal">Announcements</h1>
        <p className="text-sm text-charcoal/70">Manage homepage banners and seasonal updates.</p>
      </section>

      <section className="rounded-3xl border border-charcoal/5 bg-white/90 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-charcoal">{editingId ? 'Edit announcement' : 'Create announcement'}</h2>
          {editingId && (
            <button type="button" onClick={resetForm} className="text-sm font-semibold text-brand-base">
              Cancel edit
            </button>
          )}
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.title}
                onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="startAt">
                Start date
              </label>
              <input
                id="startAt"
                type="datetime-local"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.startAt}
                onChange={(event) => setForm((prev) => ({ ...prev, startAt: event.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="endAt">
                End date
              </label>
              <input
                id="endAt"
                type="datetime-local"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.endAt}
                onChange={(event) => setForm((prev) => ({ ...prev, endAt: event.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="active">
                Active?
              </label>
              <select
                id="active"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={String(form.active)}
                onChange={(event) => setForm((prev) => ({ ...prev, active: event.target.value === 'true' }))}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream disabled:opacity-60"
          >
            {submitting ? 'Saving…' : editingId ? 'Update announcement' : 'Create announcement'}
          </button>
          {statusMessage && <p className="text-sm text-charcoal/70">{statusMessage}</p>}
        </form>
      </section>

      <section>
        <h2 className="font-display text-2xl text-charcoal">Current announcements</h2>
        <div className="mt-4 divide-y divide-charcoal/5 rounded-3xl border border-charcoal/5">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="grid gap-4 p-4 text-sm md:grid-cols-[2fr_1fr_auto] md:items-center">
              <div>
                <p className="font-semibold text-charcoal">{announcement.title}</p>
                <p className="text-charcoal/60">{announcement.message}</p>
              </div>
              <p className="text-charcoal/70">{announcement.active ? 'Active' : 'Inactive'}</p>
              <div className="flex gap-3">
                <button type="button" className="text-xs font-semibold text-brand-base" onClick={() => handleEdit(announcement)}>
                  Edit
                </button>
                <button type="button" className="text-xs font-semibold text-red-500" onClick={() => handleDelete(announcement.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AnnouncementsManager
