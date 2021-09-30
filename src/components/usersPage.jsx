import React from 'react'
import UserPage from './userPage'
import Users from './users'
import { useParams } from 'react-router-dom'

const UsersPage = () => {
  const params = useParams()
  const { userId } = params
  return (
    <>
      {userId ? <UserPage id={userId}/> : <Users />}
    </>
  )
}

export default UsersPage
