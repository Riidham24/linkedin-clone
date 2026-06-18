import { Router } from 'express'
import { getProfile, getMyProfile } from '../controllers/userController.js'
import { protect } from '../middleware/auth.js'
import { asyncHandler } from '../middleware/validate.js'

const router = Router()

router.get('/me', protect, asyncHandler(getMyProfile))
router.get('/profile/:userId', protect, asyncHandler(getProfile))

export default router
