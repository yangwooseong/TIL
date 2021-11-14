import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const dataTransform = (data) => {
    return data.data.map((hero) => hero.name)
  }

  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      select: dataTransform,
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
      {data.map((name, idx) => {
        return <div key={name}>{name}</div>
      })}
    </>
  )
}
