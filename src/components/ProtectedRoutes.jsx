import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/authHooks'

function ProtectedRoutes () {
  const { authData } = useAuth()
  return (
    authData?.token && authData?._user
      ? <Outlet />
      : <Navigate to='/auth' />
  )
}

export default ProtectedRoutes
