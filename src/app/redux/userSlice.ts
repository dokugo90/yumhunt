import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        recentRecipes: [],
        savedRecipes: []
    },
    reducers: {

    }
})

export default userSlice.reducer;