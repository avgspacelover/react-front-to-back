import React from 'react'
import { UserResults } from '../users/UserResults'
import { UserSearch } from '../users/UserSearch'

export const Home = () => {
  return (
    <div>
        <UserSearch />
        <UserResults />

    </div>
  )
}
