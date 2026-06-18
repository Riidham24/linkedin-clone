import { useState } from 'react'
import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react'

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <article className="bg-white rounded-lg border border-linkedin-border overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-sm hover:text-linkedin-blue hover:underline cursor-pointer">
                {post.author.name}
              </h3>
              <p className="text-xs text-linkedin-muted line-clamp-1">{post.author.headline}</p>
              <p className="text-xs text-linkedin-muted">{post.timestamp} · 🌐</p>
            </div>
          </div>
          <button type="button" className="p-1 rounded-full hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5 text-linkedin-muted" />
          </button>
        </div>

        <p className="mt-3 text-sm text-linkedin-text whitespace-pre-wrap">{post.content}</p>
      </div>

      {post.image && (
        <img src={post.image} alt="" className="w-full max-h-[400px] object-cover" />
      )}

      <div className="px-4 py-2 flex items-center justify-between text-xs text-linkedin-muted border-b border-linkedin-border">
        <span>{likeCount.toLocaleString()} reactions</span>
        <span>
          {post.comments} comments · {post.reposts} reposts
        </span>
      </div>

      <div className="px-2 py-1 flex items-center justify-around">
        <button
          type="button"
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-3 rounded-md text-sm font-semibold transition-colors ${
            liked
              ? 'text-linkedin-blue'
              : 'text-linkedin-muted hover:bg-gray-100'
          }`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-linkedin-blue' : ''}`} />
          Like
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <MessageCircle className="w-5 h-5" />
          Comment
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <Repeat2 className="w-5 h-5" />
          Repost
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-linkedin-muted hover:bg-gray-100"
        >
          <Send className="w-5 h-5" />
          Send
        </button>
      </div>
    </article>
  )
}
