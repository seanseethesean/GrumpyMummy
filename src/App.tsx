import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import ProtectedRoute from './components/common/ProtectedRoute'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import MenuManager from './pages/admin/MenuManager'
import AnnouncementsManager from './pages/admin/AnnouncementsManager'
import { ensureSeedData } from './services/seedService'

function App() {
  useEffect(() => {
    ensureSeedData()
  }, [])

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="menu" replace />} />
        <Route path="menu" element={<MenuManager />} />
        <Route path="announcements" element={<AnnouncementsManager />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
