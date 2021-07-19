export const USER_POSTS_LOADING = "USER_POSTS_LOADING"
export const USER_POSTS_FAIL = "USER_POSTS_FAIL"
export const USER_POSTS_SUCCESS = "USER_POSTS_SUCCESS"

export type Post = {
  userId: string,
  id: string
  title: string,
  body: string,
}
type UserPostsSuccess = {
  type: typeof USER_POSTS_SUCCESS,
  payload: Post[]
}
type UserPostsFail = {
  type: typeof USER_POSTS_FAIL
}
type UserPostsLoading = {
  type: typeof USER_POSTS_LOADING
}

export type UserPostsActionTypes = UserPostsLoading | UserPostsSuccess | UserPostsFail