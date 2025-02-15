import React from 'react';
import { cn } from '../../lib/utils';
import { ColumnDef } from '@/models/table';
import LoadingSpinner from '@/ui/LoadingSpinner';

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
  isLoading?: boolean;
}

const TableComponent = <T extends object>({
  data,
  columns,
  className = '',
  isLoading = false,
}: TableProps<T>) => {

  return (
    <div
      className={cn("relative flex overflow-x-auto flex-col gap-4 w-full max-w-[90vw] md:w-custom-md md:max-w-custom-md max-h-custom-max min-h-[140px]", className)}>
      <table className="divide-y divide-gray-200 w-full">
        <thead className="bg-gray-50 w-full sticky top-0 z-10">
          <tr className='w-full'>
            {columns.map((column, idx) => (
              <th
                key={idx}
                className={cn("px-6 py-3 text-nowrap text-center text-xs font-medium text-gray-500 tracking-wider", column.headerClassName)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 w-full">
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => {
                return (
                  <td
                    key={colIndex}
                    className={cn("px-6 py-4 whitespace-nowrap text-sm text-center", column.cellClassName)}
                  >
                    {column.cell(row)}
                  </td>
                );
              })}
            </tr>
          ))
          }
        </tbody>
      </table>
      <div className='w-full flex justify-center items-center'>
        {isLoading ? (

          <LoadingSpinner />
        ) :
          data?.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No data available
            </div>
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
};

export default TableComponent;