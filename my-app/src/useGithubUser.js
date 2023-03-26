// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useGithubUser(username) {

  const shouldFetch = username !== null && username !== undefined && username !== ''

  const { data, error, mutate } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher)

  function fetchUser() {
    mutate()
  }

  return {
    data,
    loading: shouldFetch && (!data && !error),
    error,
    fetchUser
  }
}
