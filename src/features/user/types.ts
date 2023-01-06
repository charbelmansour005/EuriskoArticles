export type User = {
  accessToken: string | null
}

export type InitialUserState = {
  // type User = for when we recieve the token, null = for the initial state
  user: User | null
}
