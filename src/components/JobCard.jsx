import { Briefcase, MapPin, Clock, Users } from 'lucide-react'

export default function JobCard({ job }) {
  return (
    <article className="bg-white rounded-lg border border-linkedin-border p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex gap-4">
        <img
          src={job.logo}
          alt={job.company}
          className="w-14 h-14 rounded object-contain bg-gray-50 border border-linkedin-border flex-shrink-0"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=0a66c2&color=fff`
          }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base hover:text-linkedin-blue hover:underline">
            {job.title}
          </h3>
          <p className="text-sm text-linkedin-text mt-0.5">{job.company}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-linkedin-muted">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {job.posted}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {job.applicants} applicants
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
