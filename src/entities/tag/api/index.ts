// 태그 가져오기
export const fetchTags = async () => {
  try {
    const response = await fetch("/api/posts/tags")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("태그 가져오기 오류:", error)
    throw new Error(`태그 가져오기 오류: ${error}`)
  }
}
