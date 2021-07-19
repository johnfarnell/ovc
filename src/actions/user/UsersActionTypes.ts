import { User } from "./UserTypes"

export const USERS_LOADING = "USERS_LOADING"
export const USERS_FAIL = "USERS_FAIL"
export const USERS_SUCCESS = "USERS_SUCCESS"

type UsersSuccess = {
  type: typeof USERS_SUCCESS,
  payload: User[]
}
type UsersFail = {
  type: typeof USERS_FAIL
}
type UsersLoading = {
  type: typeof USERS_LOADING
}
export type UsersActionTypes = UsersLoading | UsersSuccess | UsersFail