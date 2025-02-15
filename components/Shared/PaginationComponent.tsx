"use client"

import { PAGINATION_SEARCH_PARAMS } from '@/enum';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useCallback, useMemo } from 'react'


interface IPaginationComponentProps {
  totalCount: number
}

const PaginationComponent = ({ totalCount }: IPaginationComponentProps) => {

  // Hooks------------------------------------------
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const strSearchParams = useSearchParams().toString();

  const currentPage = useMemo(() => parseInt(searchParams.get(PAGINATION_SEARCH_PARAMS.PAGE) || '1', 10), [searchParams])
  const pageSize = useMemo(() => parseInt(searchParams.get(PAGINATION_SEARCH_PARAMS.PAGE_SIZE) || '10', 10), [searchParams])
  const totalPages = useMemo(() => Math.ceil(totalCount / pageSize), [totalCount, pageSize]);


  // Functions--------------------------------------
  const handleChangePage = useCallback((page: number) => {
    const newSearchParams = new URLSearchParams(strSearchParams);
    newSearchParams.set(PAGINATION_SEARCH_PARAMS.PAGE, String(page));
    router.replace(`${pathName}?${newSearchParams.toString()}`);
  }, [pathName, router, strSearchParams]);

  const handlePageSizeChange = (size: number) => {
    const newSearchParams = new URLSearchParams(strSearchParams);
    newSearchParams.set(PAGINATION_SEARCH_PARAMS.PAGE_SIZE, String(size));
    newSearchParams.set(PAGINATION_SEARCH_PARAMS.PAGE, '1');  //May be the current page is not found after updating the size
    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-4 w-full max-w-[90vw] md:w-custom-md  md:max-w-custom-md">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">
          Showing {(currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, totalCount)} of {totalCount}
        </span>
        <select
          className="border rounded-md px-2 py-1 text-sm"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          {[5, 10, 15].map((limit) => (
            <option key={limit} value={limit}>
              {limit} per page
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
        </button>
        <span className="px-4 py-1 text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default PaginationComponent