import Cookies from 'js-cookie'
import { fetcher } from '../api/fetcher'

const useAuth = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    window.location.href = '/'
  }

  const isLogged = async () => {
    try {
      const { ok } = await fetcher('/auth/logged')
      console.log(ok)
      if (!ok) {
        return false
      }
      return true
    } catch (error) {
      return false
    }
  }

  return { handleLogout, isLogged }
}

export default useAuth
