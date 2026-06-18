import jwt from 'jsonwebtoken'

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  })

export const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)

  res.status(statusCode).json({
    success: true,
    token,
    user: user.toPublicProfile(),
  })
}

export default signToken
