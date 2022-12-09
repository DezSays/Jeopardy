import React from 'react'
import { Link } from 'react-router-dom'

import PlayGame from '../PlayGame'

const HostDashboard = () => {
  return (
    <>
        <div>HostDashboard</div>
        <Link to="/PlayGame" element={<PlayGame />} style={{color: "red"}} className='path'>Play Game Page</Link>
    </>
  )
}

export default HostDashboard