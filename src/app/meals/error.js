"use client"


import React from 'react'

const error = ({error}) => {
    return (
        <main className='error'>
            <h1>An error happed!</h1>
            <p>Failed to fetching Meals Data Try again later</p>
        </main>
    )
}

export default error