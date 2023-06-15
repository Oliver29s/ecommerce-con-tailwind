import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState: null,
    reducers:{
        setUsers: (state,action) => action.payload
    }
})

export const { setUsers} = userSlice.actions

export default userSlice.reducer