import jwt from 'jsonwebtoken'
import AppError from '../utils/AppError.js'
import User from '../models/User.js'

export const protect = async (req, res, next) => {
  try {
    let token

    const authHeader = req.headers.authorization
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1]
    }

    if (!token) {
      return next(new AppError('You are not logged in. Please log in to continue.', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.id)
    if (!user) {
      return next(new AppError('The user belonging to this token no longer exists.', 401))
    }

    req.user = user
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return next(new AppError('Invalid token. Please log in again.', 401))
    }
    if (error.name === 'TokenExpiredError') {
      return next(new AppError('Your token has expired. Please log in again.', 401))
    }
    next(error)
  }
}
