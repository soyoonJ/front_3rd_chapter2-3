import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPostApi } from "../../../entities/post/api"
import { NewPost, Post, PostsDTO } from "../../../entities/post/model/types"
import { usePostParamsStore } from "../model/postParamsStore"
import { usePostQueryStore } from "../model/postQueryStore"

export const useMutationPostAdd = () => {
  const queryClient = useQueryClient()
  const { selectedTag, searchQuery, skip, limit } = usePostParamsStore()
  const { activeQuery } = usePostQueryStore()

  return useMutation({
    mutationFn: (newPost: NewPost) => createPostApi(newPost),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ["posts", { tag: selectedTag, searchQuery, limit, skip, activeQuery }],
        (data: PostsDTO) => {
          const updatedPosts = {
            ...data,
            posts: [
              ...data.posts,
              { ...response, reactions: { likes: 0, dislikes: 0 }, tags: ["tranquility"], view: 0 },
            ] as Post[],
          }
          return updatedPosts
        },
      )
    },
  })
}
