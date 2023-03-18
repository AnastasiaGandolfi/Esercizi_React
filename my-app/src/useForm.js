// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

import React, { useState } from 'react'

export default function useForm() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    
    function handleChange(event) {
        setUsername(event.target.value)
        setPassword(event.target.value)
    }

  return {
    username,
    password,
    handleChange,
  }
}
