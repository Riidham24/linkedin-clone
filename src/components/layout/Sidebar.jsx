import { Link, useLocation } from 'react-router-dom'
import { Home, Users, Briefcase, User, X } from 'lucide-react'
import { currentUser } from '../../data/mockData'

const sidebarLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/network', label: 'My Network', icon: Users },
  { path: '/jobs', label: 'Jobs', icon: Briefcase },
  { path: '/profile', label: 'Profile', icon: User },
]

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed lg:sticky top-[52px] left-0 z-40 h-[calc(100vh-52px)] w-64 lg:w-auto lg:min-w-[225px] bg-white lg:bg-transparent border-r lg:border-r-0 border-linkedin-border transform transition-transform duration-200 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-linkedin-border">
          <span className="font-semibold">Menu</span>
          <button type="button" onClick={onClose} className="p-1 rounded-md hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-2 lg:p-0">
          <div className="bg-white rounded-lg border border-linkedin-border overflow-hidden mb-2">
            <div className="h-14 bg-gradient-to-r from-linkedin-blue to-[#004182]" />
            <div className="px-4 pb-4 -mt-8">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-16 h-16 rounded-full border-2 border-white object-cover"
              />
              <Link
                to="/profile"
                onClick={onClose}
                className="block mt-2 font-semibold text-sm hover:text-linkedin-blue hover:underline"
              >
                {currentUser.name}
              </Link>
              <p className="text-xs text-linkedin-muted mt-1 line-clamp-2">{currentUser.headline}</p>
            </div>
            <div className="border-t border-linkedin-border px-4 py-3">
              <div className="flex justify-between text-xs">
                <span className="text-linkedin-muted">Connections</span>
                <span className="font-semibold text-linkedin-blue">{currentUser.connections}</span>
              </div>
            </div>
          </div>

          <nav className="bg-white rounded-lg border border-linkedin-border overflow-hidden lg:hidden">
            {sidebarLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium border-b border-linkedin-border last:border-b-0 ${
                  isActive(path)
                    ? 'text-linkedin-blue bg-blue-50'
                    : 'text-linkedin-text hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
