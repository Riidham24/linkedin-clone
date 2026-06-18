import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LinkedInLogo from '../components/LinkedInLogo'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    signup(name, email, password)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4">
        <LinkedInLogo className="w-10 h-10 text-linkedin-blue" />
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[400px]">
          <h1 className="text-3xl font-light text-linkedin-text mb-2">Join LinkedIn</h1>
          <p className="text-sm text-linkedin-muted mb-6">
            Make the most of your professional life
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 border border-linkedin-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-linkedin-blue/40 focus:border-linkedin-blue"
                placeholder="First and last name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 border border-linkedin-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-linkedin-blue/40 focus:border-linkedin-blue"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 border border-linkedin-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-linkedin-blue/40 focus:border-linkedin-blue"
                placeholder="Password (6+ characters)"
              />
            </div>
            <p className="text-xs text-linkedin-muted">
              By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and
              Cookie Policy.
            </p>
            <button
              type="submit"
              className="w-full py-3 bg-linkedin-blue text-white font-semibold rounded-full hover:bg-linkedin-blue-hover transition-colors"
            >
              Agree & Join
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-linkedin-muted">Already on LinkedIn? </span>
            <Link to="/login" className="font-semibold text-linkedin-blue hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-linkedin-muted border-t border-linkedin-border">
        LinkedIn Clone © 2026
      </footer>
    </div>
  )
}
