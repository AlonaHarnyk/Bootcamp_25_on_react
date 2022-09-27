// export const getUsers = state => state.users

export const getUsers = state => {
    console.log(state)
    return state.users.users
}