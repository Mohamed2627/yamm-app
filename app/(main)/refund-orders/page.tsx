import { STYLES } from '@/constants/styles'
import { cn } from '@/lib/utils'
import React from 'react'

const RefundOrders = () => {
  return (
    <div className={cn(STYLES.pageWrapper)}>
      <h1>Refund Orders</h1>
      <p>This is the Refund Orders page of the Yamm App</p>
    </div>
  )
}

export default RefundOrders