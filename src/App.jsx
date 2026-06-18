import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './components/layout/MainLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import HomeFeed from './pages/HomeFeed'
import Profile from './pages/Profile'
import MyNetwork from './pages/MyNetwork'
import Jobs from './pages/Jobs'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomeFeed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="network" element={<MyNetwork />} />
            <Route path="jobs" element={<Jobs />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
