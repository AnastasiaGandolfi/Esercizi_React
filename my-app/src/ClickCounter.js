import React, { useState } from 'react'

export default function ClickCounter({initialValue = 0, incrementBy = 1}) {
    const [count, setCount] = useState(initialValue)

    function handleCounterIncrement() {
        setCount(count => count + incrementBy)
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}