import type { FormEvent } from 'react'
import { useState } from 'react'
import { useMenuItems } from '../../hooks/useMenuItems'
import { createMenuItem, deleteMenuItem, updateMenuItem } from '../../services/menuService'
import { uploadImage } from '../../services/storageService'
import type { MenuCategory, MenuItem, MenuItemPayload, MenuVariant } from '../../types/menu'

const allergenOptions = ['Dairy', 'Gluten', 'Eggs', 'Nuts', 'Alcohol']
const categoryOptions: MenuCategory[] = ['Cakes', 'Signature', 'Seasonal', 'Petite Treats']

const createDefaultForm = (): MenuItemPayload => ({
  name: '',
  category: 'Cakes',
  description: '',
  allergens: [],
  variants: [{ label: '', price: 0 }],
  status: 'available',
  featured: false,
  imageUrl: '',
})

const MenuManager = () => {
  const { items } = useMenuItems()
  const [form, setForm] = useState<MenuItemPayload>(createDefaultForm())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleVariantChange = (index: number, key: keyof MenuVariant, value: string) => {
    setForm((prev) => ({
      ...prev,
      variants: prev.variants.map((variant, idx) =>
        idx === index ? { ...variant, [key]: key === 'price' ? Number(value) || 0 : value } : variant,
      ),
    }))
  }

  const addVariant = () =>
    setForm((prev) => ({
      ...prev,
      variants: [...prev.variants, { label: '', price: 0 }],
    }))

  const removeVariant = (index: number) =>
    setForm((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, idx) => idx !== index),
    }))

  const handleEdit = (item: MenuItem) => {
    const { id, createdAt, updatedAt, ...rest } = item
    setEditingId(id)
    setForm({
      ...rest,
      allergens: [...rest.allergens],
      variants: rest.variants.map((variant) => ({ ...variant })),
    })
    setStatusMessage(null)
  }

  const resetForm = () => {
    setEditingId(null)
    setForm(createDefaultForm())
    setUploadFile(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setStatusMessage(null)

    try {
      let imageUrl = form.imageUrl
      if (uploadFile) {
        imageUrl = await uploadImage(uploadFile, 'menu')
      }

      const payload = { ...form, imageUrl }

      if (editingId) {
        await updateMenuItem(editingId, payload)
        setStatusMessage('Menu item updated.')
      } else {
        await createMenuItem(payload)
        setStatusMessage('New menu item created.')
      }

      resetForm()
    } catch (error) {
      console.error(error)
      setStatusMessage('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this menu item?')) return
    try {
      await deleteMenuItem(id)
      setStatusMessage('Menu item deleted.')
    } catch (error) {
      console.error(error)
      setStatusMessage('Failed to delete menu item.')
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-display text-3xl text-charcoal">Menu Manager</h1>
        <p className="text-sm text-charcoal/70">Add, edit, or remove menu items. Changes sync instantly to the public site.</p>
      </section>

      <section className="rounded-3xl border border-charcoal/5 bg-white/90 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-charcoal">{editingId ? 'Edit menu item' : 'Create new menu item'}</h2>
          {editingId && (
            <button type="button" onClick={resetForm} className="text-sm font-semibold text-brand-base">
              Cancel edit
            </button>
          )}
        </div>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.category}
                onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value as MenuCategory }))}
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.description}
                onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Allergens</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {allergenOptions.map((allergen) => (
                  <label key={allergen} className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
                    <input
                      type="checkbox"
                      checked={form.allergens.includes(allergen)}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          allergens: event.target.checked
                            ? [...prev.allergens, allergen]
                            : prev.allergens.filter((item) => item !== allergen),
                        }))
                      }
                    />
                    {allergen}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">Variants</p>
              <div className="mt-2 space-y-3">
                {form.variants.map((variant, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Size / Servings"
                      className="w-2/3 rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                      value={variant.label}
                      onChange={(event) => handleVariantChange(index, 'label', event.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      className="w-1/3 rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                      value={variant.price}
                      onChange={(event) => handleVariantChange(index, 'price', event.target.value)}
                    />
                    {form.variants.length > 1 && (
                      <button type="button" className="text-xs text-red-500" onClick={() => removeVariant(index)}>
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" className="text-sm font-semibold text-brand-base" onClick={addVariant}>
                  + Add variant
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                  value={form.status}
                  onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value as MenuItem['status'] }))}
                >
                  <option value="available">Available</option>
                  <option value="preorder">Pre-order</option>
                  <option value="sold-out">Sold out</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold" htmlFor="featured">
                  Featured
                </label>
                <select
                  id="featured"
                  className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                  value={String(form.featured)}
                  onChange={(event) => setForm((prev) => ({ ...prev, featured: event.target.value === 'true' }))}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="image">
                Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                className="mt-1 w-full rounded-2xl border border-dashed border-charcoal/20 px-4 py-3 text-sm"
                onChange={(event) => setUploadFile(event.target.files?.[0] ?? null)}
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="imageUrl">
                Image URL (optional)
              </label>
              <input
                id="imageUrl"
                className="mt-1 w-full rounded-2xl border border-charcoal/10 px-4 py-3 text-sm"
                value={form.imageUrl ?? ''}
                onChange={(event) => setForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cream disabled:opacity-60"
            >
              {submitting ? 'Saving…' : editingId ? 'Update item' : 'Create item'}
            </button>
            {statusMessage && <p className="text-sm text-charcoal/70">{statusMessage}</p>}
          </div>
        </form>
      </section>

      <section>
        <h2 className="font-display text-2xl text-charcoal">Existing menu</h2>
        <div className="mt-4 divide-y divide-charcoal/5 rounded-3xl border border-charcoal/5">
          {items.map((item) => (
            <div key={item.id} className="grid gap-4 p-4 text-sm md:grid-cols-[2fr_1fr_auto] md:items-center">
              <div>
                <p className="font-semibold text-charcoal">{item.name}</p>
                <p className="text-charcoal/60">{item.category}</p>
              </div>
              <p className="text-charcoal/70">{item.status}</p>
              <div className="flex gap-3">
                <button type="button" className="text-xs font-semibold text-brand-base" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button type="button" className="text-xs font-semibold text-red-500" onClick={() => handleDelete(item.id)}>
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

export default MenuManager
