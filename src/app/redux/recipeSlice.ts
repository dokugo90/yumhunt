import { createSlice } from "@reduxjs/toolkit";
import { IRecipes } from "../types/interfaces";


const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipes: <IRecipes[]>[],
    },
    reducers: {
        setRecipes(state, action) {
            state.recipes = action.payload;
        },
    }
})

export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;