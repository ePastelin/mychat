"use client"
import {ChatProvider} from '@/context/ChatContext'

import AuthenticateRoute from '@/components/auth/AuthenticateRoute'

function Layout({ children }) {
  return <ChatProvider>
    {children}
  </ChatProvider> 
}

export default AuthenticateRoute(Layout, { pathAfterFailure: '/' }) 
