import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const Layout = () => {
  return (
    <body className='bg-gradient-to-b from-blue-simp from-0% via-[#486EDF] via-30% to-[#89C4FF] to-100%'>
      <Navbar />
      <Outlet />
      
      <footer>
        Mi Footer
      </footer>
    </body>
  )
}

export default Layout
