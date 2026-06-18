import { Search } from 'lucide-react'

export default function SearchBar({
  placeholder = 'Search',
  className = '',
  value,
  onChange,
}) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-linkedin-muted pointer-events-none" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 bg-[#eef3f8] border-none rounded-md text-sm text-linkedin-text placeholder:text-linkedin-muted focus:outline-none focus:ring-2 focus:ring-linkedin-blue/30"
      />
    </div>
  )
}
