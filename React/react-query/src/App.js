import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import './App.css'
import { HomePage } from './components/Homepage'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroPage } from './components/RQSuperHeroPage'
import { useEffect, useRef, useState } from 'react'
import { ProfilePage } from './ProfilePage'

const queryClient = new QueryClient()

function App() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setUsers('haha')
    }, 3000)
  }, [])

  if (!users) return <h1>Loading</h1>
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Router>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to='/'>Home</Link>
    //           </li>
    //           <li>
    //             <Link to='/super-heroes'>Traditional Super Heroes</Link>
    //           </li>
    //           <li>
    //             <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <Switch>
    //         <Route path='/rq-super-heroes/:heroId'>
    //           <RQSuperHeroPage />
    //         </Route>
    //         <Route path='/super-heroes'>
    //           <SuperHeroesPage />
    //         </Route>
    //         <Route path='/rq-super-heroes'>
    //           <RQSuperHeroesPage />
    //         </Route>
    //         <Route path='/'>
    //           <HomePage />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    //   <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    // </QueryClientProvider>
    <>
      <h2>{users}</h2>
      <ProfilePage />
    </>
  )
}

export default App

/*
child component를 rendering하고 나서 useEffect를 실행한다.
child component rendering 하는게 3초가 걸리면 3초 이후에 useEffect 실행 -> fetch 하는데 3초..

서로 독립적인 데이터이기 때문에 병렬 처리가 가능한데도 이렇게 하면 직렬 처리가 됨 (워터폴 현상)
이거를 막으려면 데이터 fetching 을 부모 컴포넌트에서 promise all 처리
promise all 처리하게 되면 promise가 전부 끝날때까지 기다려야하는 디메리트가 있음
*/
