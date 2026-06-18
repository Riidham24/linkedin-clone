import { Image, Calendar, Newspaper } from 'lucide-react'
import { currentUser } from '../data/mockData'

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg border border-linkedin-border p-4">
      <div className="flex gap-3">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <button
          type="button"
          className="flex-1 text-left px-4 py-3 border border-linkedin-border rounded-full text-sm text-linkedin-muted hover:bg-gray-50 transition-colors"
        >
          Start a post
        </button>
      </div>
      <div className="flex items-center justify-around mt-3 pt-3 border-t border-linkedin-border">
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <Image className="w-5 h-5 text-green-600" />
          <span className="hidden sm:inline">Media</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <Calendar className="w-5 h-5 text-orange-600" />
          <span className="hidden sm:inline">Event</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <Newspaper className="w-5 h-5 text-red-600" />
          <span className="hidden sm:inline">Write article</span>
        </button>
      </div>
    </div>
  )
}
