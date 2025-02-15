import ImageWrapper from "@/components/Shared/ImageWrapper";
import TableLinksCell from "@/components/Table/TableLinksCell";
import TableTextCell from "@/components/Table/TableTextCell";
import { REFUND_ORDER } from "@/enum/order";
import { IRefundOrder } from "@/models/refundOrder";
import { ColumnDef } from "@/models/table";
import DecisionStatus from "@/ui/DecisionStatus";
import StatusIcon from "@/ui/StatusIcon";
import React from "react";
import TableRowActions from "./TableRowActions";

type TColumnDef = IRefundOrder & {
  [REFUND_ORDER.ACTIONS]: React.ReactNode
}

export const refundTableColumns: ColumnDef<TColumnDef>[] = [
  {
    header: 'Order ID',
    accessor: REFUND_ORDER.ID,
    cell: (row) => (
      <TableTextCell text={row[REFUND_ORDER.ID]} />
    ),
  },
  {
    header: 'Reason',
    accessor: REFUND_ORDER.REASON,
    cell: (row) => (
      <TableTextCell text={row[REFUND_ORDER.REASON]} />
    ),
  },
  {
    header: 'Store Name',
    accessor: REFUND_ORDER.STORE_NAME,
    cell: (row) => (
      <TableTextCell text={row[REFUND_ORDER.STORE_NAME]} />
    ),
  },
  {
    header: 'Store Logo',
    accessor: REFUND_ORDER.STORE_LOGO,
    cell: (row) => (
      <ImageWrapper
        className="w-16 h-16 rounded-full"
        width={20}
        height={20} src={row[REFUND_ORDER.STORE_LOGO]} alt={`Store Logo_${REFUND_ORDER.STORE_NAME}`} />
    ),
    cellClassName: "px-0 py-2 flex justify-center items-center"
  },
  {
    header: 'Store URL',
    accessor: REFUND_ORDER.STORE_URL,
    cell: (row) => (
      <TableLinksCell href={row[REFUND_ORDER.STORE_URL]} text={row[REFUND_ORDER.STORE_NAME]} />
    ),
  },
  {
    header: 'Amount',
    accessor: REFUND_ORDER.AMOUNT,
    cell: (row) => (
      <TableTextCell text={row[REFUND_ORDER.AMOUNT]} />
    ),
  },
  {
    header: 'Active',
    accessor: REFUND_ORDER.ACTIVE,
    cell: (row) => (
      <StatusIcon active={row[REFUND_ORDER.ACTIVE]} />
    ),
  },
  {
    header: 'Decision',
    accessor: REFUND_ORDER.DECISION,
    cell: (row) => (
      <DecisionStatus status={row[REFUND_ORDER.DECISION]} />
    ),
  },
  {
    header: 'Items',
    accessor: REFUND_ORDER.ITEMS,
    cell: (row) => (
      <TableTextCell text={row[REFUND_ORDER.ITEMS]?.length} />
    ),
  },
  {
    header: 'Actions',
    accessor: REFUND_ORDER.ACTIONS,
    cell: (row) => (
      <TableRowActions rowDta={row} />
    ),
  },
];