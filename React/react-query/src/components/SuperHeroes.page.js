import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:4000/superheroes')
        setData(res.data)
        setIsLoading(false)
      } catch (e) {
        setError(e.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero, idx) => {
        return <div key={idx}>{hero.name}</div>
      })}
    </>
  )
}
