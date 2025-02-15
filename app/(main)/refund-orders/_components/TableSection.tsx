"use client"

import TableComponent from '@/components/Table/TableComponent'
import React from 'react'
import { refundTableColumns } from './refundTableColumns';
import { useGetRefundOrders } from '@/hooks/useGetRefundOrders';
import PaginationComponent from '@/components/Shared/PaginationComponent';

const TableSection = () => {

  // Hooks------------------------------------------
  const { refundOrders, isLoading } = useGetRefundOrders();

  return (
    <>
      <TableComponent
        columns={refundTableColumns}
        data={refundOrders?.data}
        isLoading={isLoading}
      />
      {refundOrders?.totalCount && (
        <PaginationComponent
          totalCount={refundOrders?.totalCount as number}
        />
      )}
    </>
  )
}

export default TableSection