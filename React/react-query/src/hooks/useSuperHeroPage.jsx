import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const useSuperHeroesData = (onSuccess, onError) =>
  useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
  })
