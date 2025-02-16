import ImageWrapper from '@/components/Shared/ImageWrapper';
import { REFUND_ORDER } from '@/enum/order';
import { cn } from '@/lib/utils';
import { IRefundOrder } from '@/models/refundOrder';
import { getRefundOrderById } from '@/services/refundOrders';
import DecisionStatus from '@/ui/DecisionStatus';
import StatusIcon from '@/ui/StatusIcon';
import Link from 'next/link';
import React from 'react';

const OrderDetails = async ({ params }: { params: { refundOrderId: string } }) => {
  const { refundOrderId } = params;

  try {
    const order: IRefundOrder = await getRefundOrderById(refundOrderId);

    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Store Info Section */}
        <div className="p-5 bg-white rounded-xl shadow-md flex items-center gap-4">
          <ImageWrapper
            src={order[REFUND_ORDER.STORE_LOGO]}
            alt={order[REFUND_ORDER.STORE_NAME]}
            width={50}
            height={50}
            className="w-20 h-20 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{order[REFUND_ORDER.STORE_NAME]}</h2>
            <p className="text-gray-500 text-sm">{order[REFUND_ORDER.REASON]}</p>
          </div>
          <DecisionStatus status={order[REFUND_ORDER.DECISION]} />
        </div>

        {/* Order Summary */}
        <div className="p-5 bg-white rounded-xl shadow-md flex justify-between items-center">
          <span className="text-lg font-semibold">${order[REFUND_ORDER.AMOUNT].toFixed(2)}</span>
          <StatusIcon active={order[REFUND_ORDER.ACTIVE]} />
        </div>

        {/* Refund Items List */}
        <div className="p-5 bg-white rounded-xl shadow-md space-y-4">
          <h3 className="text-lg font-semibold">Refund Items</h3>
          {order[REFUND_ORDER.ITEMS].map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "flex justify-between items-center pb-2",
                index === order[REFUND_ORDER.ITEMS].length - 1 ? "" : "border-b"
              )}
            >
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-500">${item.price.toFixed(2)}</span>
              <span className="text-gray-700">x{item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Store URL */}
        <div className="p-5 bg-white rounded-xl shadow-md text-center">
          <Link
            href={order[REFUND_ORDER.STORE_URL]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            Visit Store
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center text-red-500">
        Failed to load order details
      </div>
    );
  }
};

export default OrderDetails;