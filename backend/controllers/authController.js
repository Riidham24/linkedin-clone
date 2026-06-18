import User from '../models/User.js'
import AppError from '../utils/AppError.js'
import { createSendToken } from '../utils/token.js'

export const signup = async (req, res) => {
  const { name, email, password, headline, location } = req.body

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new AppError('An account with this email already exists', 409)
  }

  const user = await User.create({
    name,
    email,
    password,
    headline: headline || '',
    location: location || '',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0a66c2&color=fff`,
  })

  createSendToken(user, 201, res)
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password', 401)
  }

  createSendToken(user, 200, res)
}
