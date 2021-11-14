import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHero = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`)
}

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], fetchSuperHero)
}
