import React, { useEffect, useState } from 'react'
import { ProfilePage } from './ProfilePage'

function Suspense() {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    setTimeout(() => setUsers('hehehe'), 3000)
  }, [])

  if (!users) {
    return <h2>Loading</h2>
  }
  return (
    <>
      <h1>{users}</h1>
      <ProfilePage />
    </>
  )
}

export { Suspense }
