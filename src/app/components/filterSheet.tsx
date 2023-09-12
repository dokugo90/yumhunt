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
import FilterField from "./filterField";
import FilterFieldContainer from "./filterFieldContainer";

export default function FilterSheet() {
    return (
        <>
        <Sheet>
            <SheetTrigger asChild>
        <Button variant="outline">Add Filters</Button>
      </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Filters</SheetTitle>
      <SheetDescription>
        Customize your recipes to your liking
      </SheetDescription>
    </SheetHeader>
    <section id="fieldSection" className="h-screen justify-center pr-2 pl-2" >
     <FilterFieldContainer />
      </section>
  </SheetContent>
</Sheet>
        </>
    )
}