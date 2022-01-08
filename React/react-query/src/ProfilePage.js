import React, { useEffect, useState } from 'react'

function ProfilePage() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    setTimeout(() => setPosts('hehehe'), 3000)
  }, [])

  if (posts === null) {
    return <h2>Loading</h2>
  }
  return <div>{posts}</div>
}

export { ProfilePage }
