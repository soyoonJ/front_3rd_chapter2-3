import { createContext, PropsWithChildren, useContext, useMemo } from "react"
import { Post } from "../../../entities/post/model/types"
import { User } from "../../../entities/user/model/types"
import { usePosts } from "./usePosts"

interface PostContextType {
  posts: Post[]
  setPosts: (posts: Post[]) => void
  showAddDialog: boolean
  setShowAddDialog: (show: boolean) => void
  selectedPost: Post | null
  setSelectedPost: (post: Post | null) => void
  showEditDialog: boolean
  setShowEditDialog: (show: boolean) => void

  total: number
  deletePost: (postId: number) => void
  getPostsByTag: (tag: string, limit: number, skip: number) => void
  getSearchedPosts: (searchQuery: string) => void
  getPosts: (limit: number, skip: number, users: User[]) => void

  showPostDetailDialog: boolean
  setShowPostDetailDialog: (show: boolean) => void
  openPostDetail: (post: Post) => void
}

const PostContext = createContext<PostContextType | null>(null)

export const PostContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const postHookValues = usePosts()
  const value = useMemo(() => ({ ...postHookValues }), [postHookValues])

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export const usePostsContext = () => {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error("usePostContext must be used within a PostContextProvider")
  }

  return context
}