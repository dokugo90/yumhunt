import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";
import pageSlice from "./pageSlice";

const store = configureStore({
    reducer: {
        recipes: recipeSlice,
        search: searchSlice,
        user: userSlice,
        page: pageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;