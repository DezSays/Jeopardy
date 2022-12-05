import React from 'react'
import GenericNavbar from '../navbars/GenericNavbar'

const GenericLayout = ({children}) => {
  return (
    <>
    <GenericNavbar />
    {children}
    </>
  )
}

export default GenericLayout