import AppError from '../utils/AppError.js'

export const errorHandler = (err, req, res, _next) => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Internal server error'

  if (err.code === 11000) {
    statusCode = 409
    const field = Object.keys(err.keyValue || {})[0] || 'field'
    message = `A record with this ${field} already exists`
  }

  if (err.name === 'CastError') {
    statusCode = 400
    message = `Invalid ${err.path}: ${err.value}`
  }

  if (err.name === 'ValidationError') {
    statusCode = 400
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join('. ')
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error(err)
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  })
}

export const notFound = (req, res, next) => {
  next(new AppError(`Route not found: ${req.originalUrl}`, 404))
}
