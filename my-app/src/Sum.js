// Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.

import React from 'react'

export default function Sum({numbers}) {
 
    const sum = numbers.reduce((a, b) => a + b)
    return (
        <div>The sum of the numbers is {sum}</div>
    )
}
