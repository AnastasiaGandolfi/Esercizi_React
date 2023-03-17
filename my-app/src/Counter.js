// Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.

import { useEffect, useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div> Counter: {count} </div>
    )
}
