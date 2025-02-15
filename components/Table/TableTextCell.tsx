import { cn } from '@/lib/utils'
import React from 'react'

interface ITableTextCellProps {
  text: string | number | null,
  className?: string
}

const TableTextCell = ({ text, className }: ITableTextCellProps) => {
  return (
    <p className={cn("text-black text-[12px] sm:text-[14px]", className)}>
      {text}
    </p>
  )
}

export default TableTextCell