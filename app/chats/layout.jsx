'use client'
import { ChatProvider } from '@/context/ChatContext'

import AuthenticateRoute from '@/components/auth/AuthenticateRoute'
import { GlobalProvider } from '@/context/Global.provider'
import { DashboardProvider } from '@/components/dashboard/context/Dashboard.provider'

function Layout({ children }) {
  return (
    <GlobalProvider>
      <ChatProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </ChatProvider>
    </GlobalProvider>
  )
}

export default AuthenticateRoute(Layout, { pathAfterFailure: '/' })
