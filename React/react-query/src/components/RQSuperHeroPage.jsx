import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {
  const { heroId } = useParams()
  const { data, isLoading } = useSuperHeroData(heroId)
  console.log(data?.data)
  if (isLoading) {
    return <div>Loading</div>
  }
  const { name, alterEgo } = data?.data
  return (
    <div>
      {name} - {alterEgo}
    </div>
  )
}
