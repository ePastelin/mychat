import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '../../hooks/auth/useAuth'

const AuthenticateRouteLogin = (Component = null, options = {}) => {
  return (props) => {
    const router = useRouter()
    const { isLogged } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const checkAuth = async () => {
        const isLoggedIn = await isLogged()

        if (isLoggedIn) {
          router.push(options.path || '/chats')
        } else {
          setLoading(false)
        }
      }

      checkAuth()
    }, [isLogged, router, options.path])

    if (loading) {
      return <div>Loading...</div>
    }

    return <Component {...props} />
  }
}

export default AuthenticateRouteLogin
