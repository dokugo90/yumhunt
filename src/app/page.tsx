import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RecipeCard from './components/recipeSearchCard'
import NavTabs from './components/navTabs'
import ToggleGroup from './components/toggleGroup'
import Recipes from './components/recipes'


export default function Home() {
  return (
    <>
      <main className='flex w-screen justify-center items-center flex-col gap-4'>
      <section className='flex justify-center items-center pt-10'>
      <ToggleGroup />
      </section>
      <section className='flex justify-center'>
        <RecipeCard />
      </section>
      <section className='flex justify-center items-center pt-10 w-full max-w-[700px]'>
      <Recipes />
      </section>
      {/* Tab List */}
      </main>
    </>
  )
}
