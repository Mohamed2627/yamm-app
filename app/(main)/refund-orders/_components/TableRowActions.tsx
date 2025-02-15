"use client"
import { REFUND_ORDER } from "@/enum/order";
import { IRefundOrder, TRefundDecision } from "@/models/refundOrder";
import SwitchToggle from "@/ui/SwitchToggle";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { FaEye } from "react-icons/fa";

interface ITableRowActionsProps {
  rowDta: IRefundOrder
}

const TableRowActions = ({
  rowDta
}: ITableRowActionsProps) => {

  const router = useRouter();
  const orderId = useMemo(() => rowDta[REFUND_ORDER.ID], [rowDta]);
  const decision = useMemo(() => rowDta[REFUND_ORDER.DECISION], [rowDta]);
  const isActive = useMemo(() => rowDta[REFUND_ORDER.ACTIVE], [rowDta]);

  const handleDecisionChange = (newDecision: TRefundDecision) => {

  };

  const handleStatusToggle = () => {

  };

  const navigateToOrder = () => {
  };

  return (
    <div className="flex items-center gap-4">
      <select
        value={decision as string}
        onChange={(e) => handleDecisionChange(e.target.value as TRefundDecision)}
        className="p-2 border rounded-md bg-white text-gray-700"
      >
        <option value={undefined} disabled>Select Decision</option>
        <option value="reject">Reject</option>
        <option value="accept">Accept</option>
        <option value="escalate">Escalate</option>
      </select>

      <SwitchToggle isActive={isActive} onChange={handleStatusToggle} />
      <button onClick={navigateToOrder} className="p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">
        <FaEye size={18} />
      </button>
    </div>
  );
};

export default TableRowActions;