import sql from "better-sqlite3"


import slugify  from "slugify"
import xss from "xss"
const db = sql("meals.db")

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // throw new Error("some thing went wrong")
    return db.prepare('SELECT * FROM meals').all()
}


export  function getMeal(slug) {
    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
}


export default function SaveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)
    
    const extention = meal.image.split(`.`).pop()
    const fileName=`${meal.slug}.${extention}`
}

