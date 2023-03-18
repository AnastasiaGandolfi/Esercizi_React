import React, { useEffect } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username }) {
    const { data, getUser } = useGithubUser(null)


    useEffect(() => {
        getUser(username)
    }, [username])

    return (
        <div>
            {data && data.name}
            <img src={data && data.avatar_url} alt='avatar' />
        </div>
    )
}
