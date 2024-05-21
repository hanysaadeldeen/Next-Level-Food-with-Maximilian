import Link from 'next/link'
import React from 'react'

import clases from "./page.module.css"
import MealsGrid from '@/components/meals/meals-grid'
import {getMeals} from '@/lib/meals'

import {Suspense} from "react"
async function Meals(){
  const meals=await getMeals()
  
  return  <MealsGrid meals={meals}/>
}

export const metadata = {
  title: "All-meals",
  description: "this is for learn next with maximilain",
};


const MealsPage = async () => {


  return (
    <>
      <header className={clases.header}>
        <h1>
          Delicious meals, create {''}
          <span  className={clases.highlight}>by you</span>
        </h1>
        <p>
          Choose Your favorite recipes and cook it yourself. It is easy and fun!
        </p>
        <p className={clases.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe 
          </Link>
        </p>
      </header>
      <main className={clases.main} >   
        <Suspense fallback={ <div className={clases.loading}>Fetching Meals....</div>}>
          <Meals />
        </Suspense>
        
      </main>
    </>
  )
}

export default MealsPage