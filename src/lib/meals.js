import sql from "better-sqlite3"

const db = sql("meals.db")

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // throw new Error("some thing went wrong")
    return db.prepare('SELECT * FROM meals').all()
}


export  function getMeal(slug) {
    console.log(slug);

    // await new Promise((resolve) => setTimeout(resolve, 1000))

    return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug)
}