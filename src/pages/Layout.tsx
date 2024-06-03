import React from 'react'
import Sidebar from '../component/orginisms/Sidebar'
import Dashboard from '../component/orginisms/Dashboard'

const Layout = () => {
  return (
    <div className='flex flex-row'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Layout