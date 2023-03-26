// Modify the useGithubUser hook so that, if the username is null, no request is made.

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useGithubUser(username) {

  const shouldFetch = username !== null && username !== undefined && username !== ''

  const { data, error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher)

  return {
    data,
    loading: shouldFetch && (!data && !error),
    error,
  }
}
