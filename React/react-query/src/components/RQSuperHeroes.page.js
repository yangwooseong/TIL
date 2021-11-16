import axios from 'axios'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const { data, refetch, isLoading, error, isError } = useSuperHeroData()
  const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
      onSuccess: (data) => {
        queryClient.setQueryData('super-hero', (oldQueryData) => {
          console.log(oldQueryData, data)
          return {
            oldQueryData,
            data: [...oldQueryData.data, data.data],
          }
        })
        // queryClient.invalidateQueries('super-hero')
      },
    })
  }

  const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero)
  }

  const { mutate } = useAddSuperHeroData()
  const handleClick = (name, alterEgo) => {
    mutate({ name, alterEgo })
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        {data.map((data, idx) => {
          return (
            <div key={idx}>
              <Link to={`/rq-super-heroes/${idx + 1}`}>{data} </Link>
            </div>
          )
        })}
      </div>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={(e) => handleClick(name, alterEgo)}>submit</button>
      </div>
      <button onClick={refetch}>refetch</button>
    </>
  )
}
