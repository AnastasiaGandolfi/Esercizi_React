// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

import React, { useState } from 'react'

export default function useCounter() {
    const [counter, setCounter] = useState(0)
    function handleIncrement() {
        setCounter(c => c + 1)
    }
    function handleDecrement() {
        setCounter(c => c - 1)
    }
    function handleReset() {
        setCounter(0)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}
