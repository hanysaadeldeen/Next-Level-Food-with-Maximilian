import React from 'react'

import classes from "./meals-grid.module.css"
import Mealitem from './meals-item'
const MealsGrid = ({meals}) => {
    return (
        <ul className={classes.meals}>       
        {meals.map((meal) => (
        <li key={meal.id}>
            <Mealitem {...meal} />
        </li>
        ))}
    </ul>
    )
}

export default MealsGrid