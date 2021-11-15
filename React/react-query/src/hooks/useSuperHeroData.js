import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHero = () => {
  return axios.get(`http://localhost:4000/superheroes`)
}

export const useSuperHeroData = () => {
  const queryInfo = useQuery('super-hero', fetchSuperHero)

  return {
    ...queryInfo,
    data: queryInfo.data?.data.map((val) => val.name.toUpperCase()),
  }
}
