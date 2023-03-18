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
