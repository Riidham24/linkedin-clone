import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'
import RightSidebar from '../components/RightSidebar'
import { posts } from '../data/mockData'

export default function HomeFeed() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 space-y-2">
        <CreatePost />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <RightSidebar />
    </div>
  )
}
