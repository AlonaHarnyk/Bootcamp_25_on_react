export const selectUserName = (state) => state.auth.user?.name

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export const selectToken = (state) => state.auth.token

export const selectIsFetchingCurrent = (state) => state.auth.selectIsFetchingCurrent

