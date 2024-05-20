"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import error from "@/app/meals/error"


function IsInvalidInput(text) {
    return !text||text.trim("")===""
}

export async function shareMeal(prevState,formatData) {
        const meal = {
            title: formatData.get("title"),
            image: formatData.get("image"),
            creator_email: formatData.get("email"),
            summary: formatData.get("summary"),
            creator: formatData.get("name"),
            instructions:formatData.get("instructions")
    }
    
    if (IsInvalidInput(meal.title) || IsInvalidInput(meal.summary) ||
        IsInvalidInput(meal.creator_email) ||
        IsInvalidInput(meal.instructions) ||
        IsInvalidInput(meal.creator) ||
        !meal.creator_email.includes("@") ||
        !meal.image || meal.image.size===0
        ) {
        
        return {
            message: "invalid input"
        }
            
        }
    await saveMeal(meal)
    redirect('/meals')
}