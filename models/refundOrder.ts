export interface IRefundOrder {
  id: string;
  reason: string;
  store_name: string;
  store_logo: string;
  store_url: string;
  amount: number;
  active: boolean;
  decision: null | 'accept' | 'reject' | 'escalate';
  items: {
    name: string;
    id: string;
    price: number;
    quantity: number;
  }[];
}