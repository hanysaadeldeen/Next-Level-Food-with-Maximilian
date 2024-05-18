

import React from 'react'

import classes from "./loading.module.css"

const loading = () => {
  return (
    <div className={classes.loading}>Fetching Meals....</div>
  )
}

export default loading