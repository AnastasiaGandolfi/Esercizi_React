// Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states.

import { useState } from 'react'

export default function useGithubUser() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getUser(username) {
    setLoading(true)
    setError(null)
    try {
      let res = await fetch(`https://api.github.com/users/${username}`)
      if (res.status === 200) {
        let json = await res.json()
        setData(json)
        console.log(json);
      }
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }

  }

  return {
    data,
    loading,
    error,
    getUser,
  }
}
