import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface ITableLinksCellProps {
  href: string;
  text: string;
  className?: string
}

const TableLinksCell = ({ href, className, text }: ITableLinksCellProps) => {
  return (
    <Link
      className={cn(
        "text-blue-600 hover:text-blue-800 underline transition-all",
        className
      )}
      href={href ?? "#"}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </Link>
  )
}

export default TableLinksCell