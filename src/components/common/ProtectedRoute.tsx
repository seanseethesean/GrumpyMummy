import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Spinner from './Spinner'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <Spinner label="Checking access" />
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

export default ProtectedRoute
