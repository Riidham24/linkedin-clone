import { Router } from 'express'
import { createPost, getAllPosts, deletePost } from '../controllers/postController.js'
import { protect } from '../middleware/auth.js'
import { asyncHandler, validate } from '../middleware/validate.js'
import { createPostValidation } from '../middleware/validators.js'

const router = Router()

router.get('/', asyncHandler(getAllPosts))
router.post('/', protect, createPostValidation, validate, asyncHandler(createPost))
router.delete('/:id', protect, asyncHandler(deletePost))

export default router
