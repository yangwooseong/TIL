import { Link } from 'react-router-dom'
import { useSuperHeroesData } from '../hooks/useSuperHeroPage'

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('success')
  }

  const onError = () => {
    console.log('error')
  }

  const { isLoading, isError, error, data } = useSuperHeroesData(
    onSuccess,
    onError,
  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((data, idx) => {
        return (
          <div key={idx}>
            <Link to={`/rq-super-heroes/${idx + 1}`}>{data.name} </Link>
          </div>
        )
      })}
    </>
  )
}
