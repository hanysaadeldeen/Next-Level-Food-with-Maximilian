"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

export async function shareMeal(formatData) {
        const meal = {
            title: formatData.get("title"),
            image: formatData.get("image"),
            creator_email: formatData.get("email"),
            summary: formatData.get("summary"),
            creator: formatData.get("name"),
            instructions:formatData.get("instructions")
        }
    await saveMeal(meal)
    redirect('/meals')
}