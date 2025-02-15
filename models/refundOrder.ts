import { REFUND_ORDER } from "@/enum/order";

export type TRefundItem = {
  name: string;
  id: string;
  price: number;
  quantity: number;
}

export type TRefundDecision = 'accept' | 'reject' | 'escalate' | null;

export interface IRefundOrder {
  [REFUND_ORDER.ID]: string;
  [REFUND_ORDER.REASON]: string;
  [REFUND_ORDER.STORE_NAME]: string;
  [REFUND_ORDER.STORE_LOGO]: string;
  [REFUND_ORDER.STORE_URL]: string;
  [REFUND_ORDER.AMOUNT]: number;
  [REFUND_ORDER.ACTIVE]: boolean;
  [REFUND_ORDER.DECISION]: TRefundDecision
  [REFUND_ORDER.ITEMS]: TRefundItem[];
}

export type TOrderUpdateStatusPayload = { [REFUND_ORDER.ID]: string, [REFUND_ORDER.ACTIVE]: boolean };
export type TOrderUpdateDecisionPayload = { [REFUND_ORDER.ID]: string, [REFUND_ORDER.DECISION]: TRefundDecision };