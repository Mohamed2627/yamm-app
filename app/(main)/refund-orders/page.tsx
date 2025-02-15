import { STYLES } from '@/constants/styles'
import { cn } from '@/lib/utils'
import React from 'react'
import dynamic from 'next/dynamic'

// To solve build error
const TableSection = dynamic(
  () => import('./_components/TableSection'),
  { ssr: false }
)

const RefundOrders = () => {
  return (
    <div className={cn(STYLES.pageWrapper)}>
      <h1 className='font-[600] text-black text-[24px] mb-4'>Refund Orders</h1>
      <TableSection />
    </div>
  )
}

export default RefundOrders