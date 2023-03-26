// Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res)=>res.json())

export default function useGithubUser(username) {
  
  const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
  
  return {
    data,
    loading: !data && !error,
    error,
  }
}
