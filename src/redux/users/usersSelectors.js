export const getUsers = state => state.users.items
export const getIsLoading = state => state.users.isLoading
export const getError = state => state.users.error



// import { createSelector } from "@reduxjs/toolkit"
// export const selectContacts = state => state.contacts.items
// export const selectFilter = state => state.contacts.filter
// export const selectVisibleContacts = createSelector(
//     [selectContacts, selectFilter], (items, filter) => items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
// )