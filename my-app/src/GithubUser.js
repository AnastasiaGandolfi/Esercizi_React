// Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.

import React, { useEffect, useState } from 'react'

export default function GithubUser({ username }) {
    const [data, setData] = useState(null)

    async function getUser(username) {
        let res = await fetch(`https://api.github.com/users/${username}`)
        if (res.status === 200) {
            let json = await res.json()
            setData(json)
            console.log(json);
        }
    }

    useEffect(() => {
        getUser(username)
    }, [username])

    return (
        <div>
            {data && data.name}
            <img src={data && data.avatar_url} />
        </div>
    )
}
