import { MapPin, Pencil, Building2, GraduationCap } from 'lucide-react'
import { currentUser } from '../data/mockData'

export default function Profile() {
  return (
    <div className="max-w-[800px] mx-auto space-y-2">
      <div className="bg-white rounded-lg border border-linkedin-border overflow-hidden">
        <div className="relative">
          <img
            src={currentUser.banner}
            alt=""
            className="w-full h-32 sm:h-48 object-cover"
          />
          <button
            type="button"
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white"
            aria-label="Edit banner"
          >
            <Pencil className="w-4 h-4 text-linkedin-muted" />
          </button>
        </div>

        <div className="px-6 pb-6 relative">
          <button
            type="button"
            className="absolute right-6 top-0 px-4 py-1.5 border border-linkedin-blue text-linkedin-blue font-semibold rounded-full text-sm hover:bg-blue-50"
          >
            Edit profile
          </button>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-20">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover"
            />
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold">{currentUser.name}</h1>
            <p className="text-base text-linkedin-text mt-1">{currentUser.headline}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-linkedin-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {currentUser.location}
              </span>
              <span className="text-linkedin-blue font-semibold hover:underline cursor-pointer">
                {currentUser.connections} connections
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-linkedin-border p-6">
        <h2 className="text-lg font-semibold mb-3">About</h2>
        <p className="text-sm text-linkedin-text leading-relaxed">{currentUser.about}</p>
      </div>

      <div className="bg-white rounded-lg border border-linkedin-border p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Experience
        </h2>
        <div className="space-y-6">
          {currentUser.experience.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-linkedin-muted" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{exp.title}</h3>
                <p className="text-sm text-linkedin-text">{exp.company}</p>
                <p className="text-xs text-linkedin-muted mt-1">
                  {exp.duration} · {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-linkedin-border p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Education
        </h2>
        <div className="space-y-6">
          {currentUser.education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-linkedin-muted" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{edu.school}</h3>
                <p className="text-sm text-linkedin-text">{edu.degree}</p>
                <p className="text-xs text-linkedin-muted mt-1">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
