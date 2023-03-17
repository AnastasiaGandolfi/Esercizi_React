import React, { useEffect, useState } from 'react'

// Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

export default function ClickCounter({ initialValue = 0, incrementBy = 1, onCounterChange }) {
    const [count, setCount] = useState(initialValue)

    function handleCounterIncrement() {
        setCount(count => count + incrementBy)
    }

    useEffect(() => {
        onCounterChange(count)
    }, [count, onCounterChange])

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}