import { axiosInstance } from "@/config/axios"
import { REFUND_ORDER } from "@/enum/order";
import { TOrderUpdateDecisionPayload, TOrderUpdateStatusPayload } from "@/models/refundOrder";
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
    throw new Error();
  }
}

export const updateRefundOrderStatus = async (data: TOrderUpdateStatusPayload) => {
  try {
    const res = await axiosInstance.patch(`/refundOrders/${data?.[REFUND_ORDER.ID]}`, {
      [REFUND_ORDER.ACTIVE]: data[REFUND_ORDER.ACTIVE],
    });
    return res.data
  } catch (error) {
    throw new Error();
  }
}

export const updateRefundOrderDecision = async (data: TOrderUpdateDecisionPayload) => {
  try {
    const res = await axiosInstance.patch(`/refundOrders/${data?.[REFUND_ORDER.ID]}`, {
      [REFUND_ORDER.DECISION]: data[REFUND_ORDER.DECISION],
    });
    return res.data
  } catch (error) {
    throw new Error();
  }
}

export const getRefundOrderById = async (orderId: string) => {
  try {
    const res = await axiosInstance.get(`/refundOrders/${orderId}`);
    return res.data
  } catch (error) {
    throw new Error();
  }
}

