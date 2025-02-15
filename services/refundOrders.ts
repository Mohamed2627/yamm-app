import { axiosInstance } from "@/config/axios"
import { delay } from "@/utils";

export const getPaginatedRefundOrders = async (searchParams: string) => {
  try {
    await delay()
    const res = await axiosInstance.get(`/refundOrders?${searchParams}`);
    return {
      data: res.data,
      totalCount: parseInt(res.headers["x-total-count"]),
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error();
  }
}

