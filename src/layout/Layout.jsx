import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        Mi NavBar
      </nav>
      <Outlet />
      
      <footer>
        Mi Footer
      </footer>
    </>
  )
}

export default Layout
