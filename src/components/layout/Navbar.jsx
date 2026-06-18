import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Menu,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import SearchBar from '../SearchBar'
import LinkedInLogo from '../LinkedInLogo'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/network', label: 'My Network', icon: Users },
  { path: '/jobs', label: 'Jobs', icon: Briefcase },
  { path: '#', label: 'Messaging', icon: MessageSquare },
  { path: '#', label: 'Notifications', icon: Bell },
]

export default function Navbar({ onMenuClick }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-linkedin-border shadow-sm">
      <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 rounded-md hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/" className="flex-shrink-0 text-linkedin-blue">
          <LinkedInLogo className="w-8 h-8" />
        </Link>

        <SearchBar className="hidden sm:block flex-1 max-w-[280px]" />

        <nav className="hidden md:flex items-center flex-1 justify-center gap-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={label}
              to={path}
              className={`flex flex-col items-center px-3 py-1 min-w-[80px] rounded-md transition-colors ${
                isActive(path)
                  ? 'text-linkedin-text border-b-2 border-linkedin-text'
                  : 'text-linkedin-muted hover:text-linkedin-text'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-0.5 hidden lg:block">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <Link
            to="/profile"
            className="flex flex-col items-center px-2 py-1 rounded-md hover:bg-gray-100"
          >
            <img
              src={user?.avatar || 'https://i.pravatar.cc/150?u=default'}
              alt={user?.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-linkedin-muted hidden lg:block">Me</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              logout()
              navigate('/login')
            }}
            className="hidden sm:block text-xs font-semibold text-linkedin-muted hover:text-linkedin-blue px-2 py-1 rounded-md hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  )
}
