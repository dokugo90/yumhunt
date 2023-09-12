"use client"

import { Button } from "@/components/ui/button"


export default function NavBar() {
    return (
        <>
        <div className="p-2 bg-slate-950 flex gap-2 rounded-md">
        <Button variant="outline">Find Recipes</Button>
        <Button variant="outline">Recent Recipes</Button>
        </div>
        </>
    )
}