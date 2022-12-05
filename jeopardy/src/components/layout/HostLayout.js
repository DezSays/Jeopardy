import React from 'react'
import HostNavbar from '../navbars/HostNavbar'

const HostLayout = ({children}) => {
  return (
    <>
    <HostNavbar />
    {children}
    </>
  )
}

export default HostLayout