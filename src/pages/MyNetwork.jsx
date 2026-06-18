import { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { networkConnections, suggestedConnections } from '../data/mockData'

export default function MyNetwork() {
  const [connections, setConnections] = useState(networkConnections)
  const [suggested, setSuggested] = useState(suggestedConnections)

  const handleConnect = (id) => {
    setSuggested((prev) => prev.filter((person) => person.id !== id))
  }

  return (
    <div className="max-w-[800px] mx-auto space-y-4">
      <div className="bg-white rounded-lg border border-linkedin-border p-4 sm:p-6">
        <h1 className="text-xl font-semibold">Manage my network</h1>
        <p className="text-sm text-linkedin-muted mt-1">
          {connections.length + suggested.length} connections and invitations
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-3 px-1">
          Invitations ({suggested.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {suggested.map((person) => (
            <ProfileCard key={person.id} person={person} onConnect={handleConnect} />
          ))}
        </div>
        {suggested.length === 0 && (
          <p className="text-sm text-linkedin-muted bg-white rounded-lg border border-linkedin-border p-6 text-center">
            No pending invitations
          </p>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3 px-1">
          Connections ({connections.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {connections.map((person) => (
            <ProfileCard key={person.id} person={person} showConnect={false} />
          ))}
        </div>
      </section>
    </div>
  )
}
