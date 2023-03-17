import React from 'react'

export default function Sum({numbers = [3, 5, 6, 9, 7, 2]}) {
 
    const sum = numbers.reduce((a, b) => a + b)
    return (
        <div>The sum of the numbers is {sum}</div>
    )
}
