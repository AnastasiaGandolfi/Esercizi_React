import React, { useCallback, useState } from 'react'

// Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memoize the functions used to increment, decrement and reset the counter.

export default function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    const handleCounterIncrement = useCallback(function handleIncrement() {
        setCounter(c => c + 1)
    }, [])
    const handleCounterDecrement = useCallback(function handleDecrement() {
        setCounter(c => c - 1)
    }, [])
    const handleCounterReset = useCallback(function handleReset() {
        setCounter(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}
