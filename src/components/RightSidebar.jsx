import { Info } from 'lucide-react'
import { trendingTopics } from '../data/mockData'

export default function RightSidebar() {
  return (
    <aside className="hidden xl:block w-[300px] flex-shrink-0 space-y-2">
      <div className="bg-white rounded-lg border border-linkedin-border p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-sm">LinkedIn News</h2>
          <Info className="w-4 h-4 text-linkedin-muted" />
        </div>
        <ul className="space-y-3">
          {trendingTopics.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                className="text-left w-full hover:bg-gray-50 -mx-2 px-2 py-1 rounded-md"
              >
                <p className="text-xs text-linkedin-muted">{index + 1} · Trending</p>
                <p className="text-sm font-semibold mt-0.5">{item.topic}</p>
                <p className="text-xs text-linkedin-muted mt-0.5">{item.posts}</p>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-3 text-sm font-semibold text-linkedin-muted hover:text-linkedin-blue"
        >
          Show more
        </button>
      </div>

      <div className="text-center text-xs text-linkedin-muted space-x-2 py-2">
        <a href="#" className="hover:text-linkedin-blue hover:underline">
          About
        </a>
        <a href="#" className="hover:text-linkedin-blue hover:underline">
          Accessibility
        </a>
        <a href="#" className="hover:text-linkedin-blue hover:underline">
          Help Center
        </a>
        <p className="mt-2">LinkedIn Clone © 2026</p>
      </div>
    </aside>
  )
}
