import { Router } from 'express'
import { signup, login } from '../controllers/authController.js'
import { asyncHandler, validate } from '../middleware/validate.js'
import { signupValidation, loginValidation } from '../middleware/validators.js'

const router = Router()

router.post('/signup', signupValidation, validate, asyncHandler(signup))
router.post('/login', loginValidation, validate, asyncHandler(login))

export default router
