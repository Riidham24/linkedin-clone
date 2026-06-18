import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-linkedin-bg pb-14 md:pb-0">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="max-w-[1128px] mx-auto px-4 py-4">
        <div className="flex gap-6">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  )
}
