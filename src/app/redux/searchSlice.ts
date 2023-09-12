import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        // filters: {
        //     equipment: '',
        //     diet: '',
        //     intolerances: '',
        //     includeIngredients: '',
        //     excludeIngredients: '',
        //     type: '',
        //     maxCarbs: '',
        //     minCarbs: '',
        //     maxCalories: '',
        //     minCalories: '',
        //     maxFat: '',
        //     minFat: '',
        // }
        dietString: "",
        dietObj: {
            dairy: false,
        gluten: false,
        nut: false,
        vegan: false,
        vegetarian: false
        }
    },
    reducers: {
        setDietObj(state, action) {
            state.dietObj = action.payload;
        },

        setDietString(state, action) {
            state.dietString = action.payload
        },

        appendString(state, action) {
            state.dietString += action.payload;
        }
    }
})

export const { setDietObj, setDietString, appendString } = searchSlice.actions
export default searchSlice.reducer;