import MainLayoutWrapper from '@/components/Shared/MainLayoutWrapper'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <MainLayoutWrapper>
        {children}
      </MainLayoutWrapper>
    </ReactQueryProvider>
  )
}

export default MainLayout