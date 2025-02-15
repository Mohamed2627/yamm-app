import React from "react";

export interface ColumnDef<T> {
  header: string;  // Also,we can customize header like cell in case we will make custom filter per column or sortable column, 
  // But in the task we just need to render the name of the header.
  accessor: keyof T;
  cell: (row: T) => React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
}