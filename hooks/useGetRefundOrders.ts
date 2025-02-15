"use client"

import { getPaginatedRefundOrders } from "@/services/refundOrders"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"

export const useGetRefundOrders = () => {

  const searchParams = useSearchParams().toString();

  const {
    isLoading,
    error,
    data: refundOrders,
  } = useQuery({
    queryKey: ['refundOrders', searchParams],
    queryFn: () => getPaginatedRefundOrders(searchParams),
    retry: 0,
    throwOnError: () => {
      toast.error("Failed to fetch refund orders")
      return false
    },

  })

  return { isLoading, error, refundOrders } as const
}