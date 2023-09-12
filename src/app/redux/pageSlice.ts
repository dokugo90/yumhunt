import { createSlice } from "@reduxjs/toolkit";


const pageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: ""
    },
    reducers: {
        setPage(state, action) {
            return action.payload;
        }
    }
})

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;