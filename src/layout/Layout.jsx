import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5'>
        <div className='flex items-end -mb-12'>
          <img src="/src/assets/images/simpsons-children.png" alt="Bart, Lisa y Maggie" className='w-full sticky bottom-0' />
        </div>
        <div className='grid col-span-3 ml-8'>
          <Outlet />
        </div>
        <div>
          <img src="/src/assets/images/curious-bart.png" alt="Bart asomado" className='w-full sticky top-[10vh]'/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
