### Grumpy Mummy · V1 Web App

Modern marketing site + admin dashboard for a boutique baking studio. Built with Vite, React Router, Tailwind CSS, and Firebase (Auth, Firestore, Storage).

#### Tech Stack

- React 19 + TypeScript + Vite
- React Router 7 for public/admin routing
- Tailwind CSS 3 + @tailwindcss/forms for theming and forms
- Firebase Auth (email/password), Firestore, and Storage

#### Getting Started

1. `npm install`
2. Duplicate `.env.example` → `.env` and add Firebase credentials
3. `npm run dev` to start the local server (http://localhost:5173)

#### Firebase Setup

- Enable Email/Password auth in Firebase Console
- Create collections with the following shapes:
  - `menu_items`: { name, category, description, allergens[], variants[], status, featured, imageUrl, createdAt, updatedAt }
  - `announcements`: { title, message, startAt, endAt, active, createdAt, updatedAt }
  - `enquiries`: { name, contact, message, createdAt }
  - `admins`: doc id = auth.uid for each allowed admin (document body can be `{ role: 'owner' }`)
- Security rules (conceptual):
  - `menu_items` & `announcements`: read public, write admins only
  - `enquiries`: anyone can create, only admins can read/write
  - `admins`: read/write admins only

#### Directory Highlights

```
src/
├─ components/         # Navbar, Footer, ProtectedRoute, menu cards, banner
├─ contexts/           # AuthProvider with allowlist check
├─ hooks/              # Firestore listeners for menu + announcements
├─ pages/              # Public (Home/Menu/About/FAQ/Contact) & admin views
├─ services/           # Firebase config, CRUD services, storage uploads, seed
├─ types/              # Shared TypeScript types for data models
└─ data/seedData.ts    # Sample menu + announcement entries
```

#### Admin UX

- `/admin/login`: Firebase email/password authentication (allowlist enforced via `admins` collection)
- `/admin/menu`: CRUD with variants, allergens, featured toggle, and Storage image uploads
- `/admin/announcements`: Schedule homepage banners with start/end dates and active toggle

#### Public UX Highlights

- Mobile-first layout with sticky nav + WhatsApp CTA
- Announcement banner pulls the most recent active document
- Menu cards + modal details for Ruby Cheesecake & Tiramisu samples
- Contact form saves enquiries to Firestore and surfaces error/success states

Set `VITE_ENABLE_SEED=true` (default in `.env.example`) to auto-seed the Firestore collections with the demo menu + announcement when running locally.
