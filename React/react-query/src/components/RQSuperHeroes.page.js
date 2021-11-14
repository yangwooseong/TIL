import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data)
    console.log(count + 1)
    setCount(count + 1)
    count + 1 > 2 && setRefetch(false)
  }

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error)
    setRefetch(false)
  }

  const [refetch, setRefetch] = useState(true)
  const [count, setCount] = useState(0)

  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      refetchInterval: refetch ? 2000 : 0,
    },
  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  console.log(data)

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero, idx) => {
        return <div key={idx}>{hero.name}</div>
      })}
    </>
  )
}
