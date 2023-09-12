import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Recipes from "./recipes"

export default function NavTabs() {
    return (
        <>
        <Tabs defaultValue="recipes" className="w-full">
  <TabsList>
    <TabsTrigger value="recipes">Recipes</TabsTrigger>
    <TabsTrigger value="recent">Your Recent Recipes</TabsTrigger>
  </TabsList>
  <TabsContent className="flex justify-center" value="recipes"><div className="flex justify-center"><Recipes /></div></TabsContent>
  <TabsContent value="recent">Change your password here.</TabsContent>
</Tabs>
        </>
    )
}