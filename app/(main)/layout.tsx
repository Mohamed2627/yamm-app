import MainLayoutWrapper from '@/components/Shared/MainLayoutWrapper'
import React, { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayoutWrapper>
      {children}
    </MainLayoutWrapper>
  )
}

export default MainLayout