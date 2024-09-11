import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-blue-simp from-0% via-[#486EDF] via-30% to-[#89C4FF] to-100% min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <div className='grid grid-cols-5'>
          <div className='flex items-end -mb-12'>
            <img src="/src/assets/images/simpsons-children.png" alt="Bart, Lisa y Maggie" className='w-full sticky bottom-0' />
          </div>
          <main className='grid col-span-3 ml-8'>
            <Outlet />
          </main>
          <div>
            <img src="/src/assets/images/curious-bart.png" alt="Bart asomado" className='w-full sticky top-[10vh]'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
