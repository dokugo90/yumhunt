"use client"

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import RecipeContainer from "./recipeContainer";


export default function Recipes() {
    const recipes = useSelector((state: RootState) => state.recipes.recipes);

    return (
        <>
        <div className="flex flex-col gap-5 w-full">
        {
            recipes.map((item, index) => (
                <>
                <RecipeContainer url={item.spoonacularSourceUrl!} foodImage={item.image!} title={item.title!} description={item.summary!} />
                </>
            ))
        }
        </div>
        </>
    )
}