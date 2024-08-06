"use client"

import AuthenticateRoute from '@/components/auth/AuthenticateRoute'

function Layout({ children }) {
  return <>{children}</>
}

export default AuthenticateRoute(Layout, { pathAfterFailure: '/' }) 
