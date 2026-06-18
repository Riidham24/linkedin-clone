import { Link, useLocation } from 'react-router-dom'
import { Home, Users, Briefcase, User } from 'lucide-react'

const items = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/network', label: 'Network', icon: Users },
  { path: '/jobs', label: 'Jobs', icon: Briefcase },
  { path: '/profile', label: 'Profile', icon: User },
]

export default function MobileNav() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-linkedin-border md:hidden">
      <div className="flex items-center justify-around h-14">
        {items.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center flex-1 h-full text-xs ${
              isActive(path) ? 'text-linkedin-text' : 'text-linkedin-muted'
            }`}
          >
            <Icon className={`w-6 h-6 ${isActive(path) ? 'fill-linkedin-bg' : ''}`} />
            <span className="mt-0.5">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
