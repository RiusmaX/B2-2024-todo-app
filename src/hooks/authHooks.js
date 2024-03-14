import { useCallback, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin } from '../services/Api'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      console.log(response)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  return { authData, loading, error, login }
}

const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
