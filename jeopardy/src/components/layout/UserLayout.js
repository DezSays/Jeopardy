import React from 'react'
import UserNavbar from '../navbars/UserNavbar'

const UserLayout = ({children}) => {
  return (
    <>
    <UserNavbar />
    {children}
    </>
  )
}

export default UserLayout