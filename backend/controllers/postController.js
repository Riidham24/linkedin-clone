import Post from '../models/Post.js'
import AppError from '../utils/AppError.js'

const formatPost = (post) => {
  const author = post.author

  return {
    id: post._id,
    author: {
      id: author._id,
      name: author.name,
      headline: author.headline,
      avatar: author.avatar,
    },
    content: post.content,
    image: post.image,
    likes: post.likes,
    comments: post.comments,
    reposts: post.reposts,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  }
}

export const createPost = async (req, res) => {
  const { content, image } = req.body

  const post = await Post.create({
    author: req.user._id,
    content,
    image: image || '',
  })

  await post.populate('author', 'name headline avatar')

  res.status(201).json({
    success: true,
    post: formatPost(post),
  })
}

export const getAllPosts = async (req, res) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1)
  const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 50)
  const skip = (page - 1) * limit

  const [posts, total] = await Promise.all([
    Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author', 'name headline avatar'),
    Post.countDocuments(),
  ])

  res.status(200).json({
    success: true,
    count: posts.length,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    posts: posts.map(formatPost),
  })
}

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (!post) {
    throw new AppError('Post not found', 404)
  }

  if (post.author.toString() !== req.user._id.toString()) {
    throw new AppError('You are not authorized to delete this post', 403)
  }

  await post.deleteOne()

  res.status(200).json({
    success: true,
    message: 'Post deleted successfully',
  })
}
