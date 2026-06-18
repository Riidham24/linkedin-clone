import User from '../models/User.js'
import AppError from '../utils/AppError.js'

export const getProfile = async (req, res) => {
  const { userId } = req.params
  const targetId = userId === 'me' ? req.user._id : userId

  const user = await User.findById(targetId)
  if (!user) {
    throw new AppError('User not found', 404)
  }

  res.status(200).json({
    success: true,
    user: user.toPublicProfile(),
  })
}

export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user.toPublicProfile(),
  })
}
