import React, { useEffect } from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username }) {
    const { data, loading, error, getUser } = useGithubUser(null)


    useEffect(() => {
        getUser(username)
    }, [username])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {data && data.name}
            <img src={data && data.avatar_url} alt='avatar' />
        </div>
    )
}
