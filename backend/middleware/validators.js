import { body } from 'express-validator'

export const signupValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('headline').optional().trim().isLength({ max: 220 }),
  body('location').optional().trim().isLength({ max: 100 }),
]

export const loginValidation = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
]

export const createPostValidation = [
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Post content is required')
    .isLength({ max: 3000 })
    .withMessage('Post content cannot exceed 3000 characters'),
  body('image').optional().trim().isURL().withMessage('Image must be a valid URL'),
]
