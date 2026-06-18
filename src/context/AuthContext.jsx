import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('linkedin_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (email, password) => {
    const mockUser = {
      email,
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?u=alex',
    }
    setUser(mockUser)
    localStorage.setItem('linkedin_user', JSON.stringify(mockUser))
    return true
  }

  const signup = (name, email, password) => {
    const mockUser = { email, name, avatar: `https://i.pravatar.cc/150?u=${email}` }
    setUser(mockUser)
    localStorage.setItem('linkedin_user', JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('linkedin_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
