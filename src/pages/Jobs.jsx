import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'
import { jobs } from '../data/mockData'

const filters = ['All', 'Remote', 'Full-time', 'Internship']

export default function Jobs() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Remote' && job.location === 'Remote') ||
      job.type === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="max-w-[800px] mx-auto space-y-4">
      <div className="bg-white rounded-lg border border-linkedin-border p-4 sm:p-6">
        <h1 className="text-xl font-semibold mb-4">Jobs</h1>
        <SearchBar
          placeholder="Search jobs, companies, or locations"
          className="mb-4 [&_input]:bg-white [&_input]:border [&_input]:border-linkedin-border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-[#01754f] text-white'
                  : 'bg-gray-100 text-linkedin-muted hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-linkedin-muted px-1">
          {filteredJobs.length} result{filteredJobs.length !== 1 ? 's' : ''}
        </p>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg border border-linkedin-border p-8 text-center">
            <p className="text-linkedin-muted">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
