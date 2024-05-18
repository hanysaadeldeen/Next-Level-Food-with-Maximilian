import React from 'react'


import clases from "./page.module.css"
import Image from 'next/image'
import {getMeal} from "@/lib/meals"
import { notFound } from 'next/navigation'
const MealDetailsPage = ({params}) => {

  const meal = getMeal(params.idmeals)

  if (!meal) {
    notFound()
  } 
    meal.instructions=meal.instructions.replace(/\n/g,`<br/>`)
  
  return (
    <>
      <header className={clases.header}>
        <div className={clases.image}>
          <Image src={meal.image} alt="img" fill/>
        </div>
        <div className={clases.headerText}>
          <h1>{meal.title}</h1>
          <p className={clases.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
          <p className={clases.summary}>SUMMARY:{meal.summary }</p>
        </div>
       
      </header>
      <main>
        <p className={clases.instructions}
          dangerouslySetInnerHTML={{
          __html: meal.instructions
          
        }}>
          
        </p>
    </main>
    </>
  )
}

export default MealDetailsPage