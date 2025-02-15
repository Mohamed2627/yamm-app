"use client"
import React, { PropsWithChildren, useCallback, useState } from 'react'
import { FiLogOut, FiMenu } from 'react-icons/fi'
import { FaReply, FaUsers, FaShoppingCart } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { STYLES } from '@/constants/styles'
import { PAGINATION_SEARCH_PARAMS } from '@/enum'

const MainLayoutWrapper = ({ children }: PropsWithChildren) => {
  // States-----------------------------------------
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarItems = [
    { name: 'Dashboard', icon: <MdDashboard className="text-xl" />, href: "/" },
    {
      name: 'Refund Orders', icon: <FaReply className="text-xl" />, href: `/refund-orders?${new URLSearchParams({
        [PAGINATION_SEARCH_PARAMS.PAGE]: "1",
        [PAGINATION_SEARCH_PARAMS.PAGE_SIZE]: "10",
      }).toString()}`
    },
    { name: 'Clients', icon: <FaUsers className="text-xl" />, href: "/clients" },
    { name: 'Stores', icon: <FaShoppingCart className="text-xl" />, href: "/stores" },
  ]

  const onSideBarNavigationClick = useCallback(() => {
    if (isSidebarOpen) setIsSidebarOpen(false)
  }, [isSidebarOpen])


  return (
    <div className={cn("min-h-[100dvh] flex flex-row relative")}>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn("md:flex flex-col w-[220px] min-w-[220px] fixed bg-gray-900 md:sticky top-0 min-h-[100dvh] max-h-[100dvh] transition-transform duration-300 z-50", isSidebarOpen ? 'translate-x-0' : '-translate-x-full', "md:translate-x-0")}
      >
        <div className="p-4 text-white font-bold text-lg">Admin Panel</div>
        <nav className="flex-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link
              onClick={onSideBarNavigationClick}
              href={item.href}
              key={item.name}
              className="w-full flex items-center gap-3 px-6 py-3 text-white hover:bg-black transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <nav className="w-full bg-[#FFFFFF] sticky top-0 flex items-center justify-between h-14 px-4 py-3 border-b">
          <button
            className="md:hidden p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {!isSidebarOpen && <FiMenu size={24} />}
          </button>

          <div className="flex items-center justify-end gap-4 w-full">
            <div className="flex items-center gap-2">
              <span className="hidden sm:block">John Doe</span>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                JD
              </div>
            </div>
            <button
              className="p-2 hover:bg-gray-400 rounded-full transition-colors"
              title="Logout"
            >
              <FiLogOut size={20} />
            </button>
          </div>
        </nav>
        <div className={cn(STYLES.paddingX, STYLES.paddingY, "flex-1")}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayoutWrapper