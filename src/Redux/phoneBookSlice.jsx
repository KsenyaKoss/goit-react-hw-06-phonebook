import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: ''
}


const phoneBookSlice = createSlice({
    name: "phoneBook",
    initialState,
    reducers: {
        addContact: (state, {payload}) => { state.contacts.push(payload)},
        deleteContact: (state, {payload}) => {
            const item = state.contacts.findIndex(contact=> contact.id === payload)
            state.contacts.splice(item, 1)
        },
        setFilter: (state, { payload }) => {
			state.filter = payload
		}, 
    },

})

export const  {addContact, deleteContact, setFilter} = phoneBookSlice.actions
export const contactsReducer = phoneBookSlice.reducer