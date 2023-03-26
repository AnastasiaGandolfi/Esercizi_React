import React from 'react'
import useGithubUser from './useGithubUser'

export default function GithubUser({ username }) {
    const { data, loading } = useGithubUser(username)

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {data && data.name}
            <img src={data && data.avatar_url} alt='avatar' />
        </div>
    )
}
