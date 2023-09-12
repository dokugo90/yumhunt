"use client"
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";
import FilterField, { FilterSwitch } from "./filterField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "@/components/ui/button";
import { appendString, setDietObj } from "../redux/searchSlice";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


export default function FilterFieldContainer() {
    const [filters, setFilters] = useState();
    // const [diet, setDiet] = useState(dietObj)
    // const [dietString, setDietString] = useState("")
    const dietString = useSelector((state: RootState) => state.search.dietString)
    const dietObj = useSelector((state: RootState) => state.search.dietObj)
    const dispatch = useDispatch();

    const handleChange = (checked: boolean, id: string) => {
        dispatch(setDietObj({ ...dietObj, [id]: checked }))
        
      };

    useEffect(() => {
        
        const entries = Object.entries(dietObj)

        entries.forEach(([key, value]) => {
            if (value == true) {
                dispatch(appendString(`${key},`))
            }
        })
        //dispatch(setDietString(dietString))
    }, [dietObj])




    return (
        <div className="flex flex-col gap-5 pt-4 pb-4">
            <section className="flex flex-col gap-2">
            <h1 className="font-extrabold text-black">Dietary Requirements</h1>
            <FilterSwitch value={dietObj.dairy} onChange={(e) => handleChange(e, "dairy")} id="dairy" label="Dairy Free" />
            <FilterSwitch value={dietObj.gluten} onChange={(e) => handleChange(e, "gluten")} id="gluten" label="Gluten Free" />
            <FilterSwitch value={dietObj.nut} onChange={(e) => handleChange(e, "nut")} id="nut" label="Nut Free" />
            <FilterSwitch value={dietObj.vegan} onChange={(e) => handleChange(e, "vegan")} id="vegan" label="Vegan" />
            <FilterSwitch value={dietObj.vegetarian} onChange={(e) => handleChange(e, "vegetarian")} id="Vegetarian" label="Vegetarian" />
            </section>
        </div>
    )
}



        {/* <FilterField onChange={handleChange} value={filters.equipment} type="text" placeholder="Pan, Blender, Bowl" htmlFor="equipment" id="equipment" label="Equipment" />
        <FilterField onChange={handleChange} value={filters.diet} type="text" placeholder="Vegetarian" htmlFor="diet" id="diet" label="Diet" />
        <FilterField onChange={handleChange} value={filters.intolerances} type="text" placeholder="Gluten" htmlFor="intolerances" id="intolerances" label="Intolerances" />
        <FilterField onChange={handleChange} value={filters.includeIngredients} type="text" placeholder="Tomato, Cheese" htmlFor="includeIngredients" id="includeIngredients" label="Include Ingredients" />
        <FilterField onChange={handleChange} value={filters.excludeIngredients} type="text" placeholder="Eggs" htmlFor="excludeIngredients" id="excludeIngredients" label="Exclude Ingredients" />
        <FilterField onChange={handleChange} value={filters.type} type="text" placeholder="Main Course" htmlFor="type" id="type" label="Type of recipe" />
        <FilterField onChange={handleChange} value={filters.maxCarbs} type="number" placeholder="100" htmlFor="maxCarbs" id="maxCarbs" label="Max Carbs" />
        <FilterField onChange={handleChange} value={filters.minCarbs} type="number" placeholder="10" htmlFor="minCarbs" id="minCarbs" label="Min Carbs" />
        <FilterField onChange={handleChange} value={filters.maxCalories} type="number" placeholder="100" htmlFor="maxCalories" id="maxCalories" label="Max Calories" />
        <FilterField onChange={handleChange} value={filters.minCalories} type="number" placeholder="10" htmlFor="minCalories" id="minCalories" label="Min Calories" />
        <FilterField onChange={handleChange} value={filters.maxFat} type="number" placeholder="100" htmlFor="maxFat" id="maxFat" label="Max Fat" />
        <FilterField onChange={handleChange} value={filters.minFat} type="number" placeholder="10" htmlFor="minFat" id="minFat" label="Min Fat" /> */}