import { useState } from 'react'

export default function useGithubUser() {
    const [data, setData] = useState(null)

    async function getUser(username) {
        let res = await fetch(`https://api.github.com/users/${username}`)
        if (res.status === 200) {
            let json = await res.json()
            setData(json)
            console.log(json);
        }
    }

  return {
    data,
    getUser,
  }
}
