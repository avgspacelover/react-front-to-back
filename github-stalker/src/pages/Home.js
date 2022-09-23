import React from 'react'
import { UserResults } from '../components/users/UserResults'
import { UserSearch } from '../components/users/UserSearch'

export const Home = () => {
  return (
    <div>
        <UserSearch />
        <UserResults />

    </div>
  )
}
