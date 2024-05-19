"use server"

export default async function ShareMeal(formatData) {
        const meal = {
            title: formatData.get("title"),
            image: formatData.get("image"),
            creator_email: formatData.get("email"),
            summary: formatData.get("summary"),
            creator: formatData.get("name"),
            instructions:formatData.get("instructions")
        }
        console.log(meal)
    }
