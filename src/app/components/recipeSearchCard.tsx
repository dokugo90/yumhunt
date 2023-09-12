"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../redux/recipeSlice";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import FilterSheet from "./filterSheet";
import { RootState } from "../redux/store";


export default function RecipeCard() {
    const [search, setSearch] = useState("");
    const diet = useSelector((state: RootState) => state.search.dietString)
    const dispatch = useDispatch();
    
   async function getRecipes(query: string) {
    const options = {
        method: 'GET',
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        params: {
          query: search,
          number: 5,
          instructionsRequired: 'true',
          fillIngredients: 'true',
          addRecipeInformation: 'true',
          sortDirection: 'asc',
          ...(diet !== '' && { diet: diet }),
        },
      };

        try {
            const response = await axios.request(options);
            console.log(response.data.results)
            dispatch(setRecipes(response.data.results))
            return;
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
        <Card className="w-[270px] sm:w-[350px]">
      <CardHeader>
        <CardTitle>Search For a Recipe</CardTitle>
        <CardDescription>Get multiple recipes</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Food Name</Label>
              <Input onChange={(e) => setSearch(e.target.value)} id="name" placeholder="Food" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <FilterSheet />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <Button variant="outline" onClick={() => getRecipes(search)}>Reset</Button>
        <Button onClick={() => getRecipes(search)}>Search</Button>
      </CardFooter>
    </Card>
        </>
    )
}