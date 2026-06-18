import { UserPlus } from 'lucide-react'

export default function ProfileCard({ person, showConnect = true, onConnect }) {
  return (
    <div className="bg-white rounded-lg border border-linkedin-border overflow-hidden text-center">
      <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300" />
      <div className="px-4 pb-4 -mt-10">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-20 h-20 rounded-full border-2 border-white object-cover mx-auto"
        />
        <h3 className="mt-2 font-semibold text-sm hover:text-linkedin-blue hover:underline cursor-pointer line-clamp-1">
          {person.name}
        </h3>
        <p className="text-xs text-linkedin-muted mt-1 line-clamp-2 min-h-[32px]">
          {person.headline}
        </p>
        {person.mutualConnections !== undefined && (
          <p className="text-xs text-linkedin-muted mt-2">
            {person.mutualConnections} mutual connections
          </p>
        )}
        {showConnect && (
          <button
            type="button"
            onClick={() => onConnect?.(person.id)}
            className="mt-3 w-full flex items-center justify-center gap-2 py-1.5 px-4 border border-linkedin-muted rounded-full text-sm font-semibold text-linkedin-muted hover:border-linkedin-blue hover:text-linkedin-blue hover:bg-blue-50 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Connect
          </button>
        )}
      </div>
    </div>
  )
}
