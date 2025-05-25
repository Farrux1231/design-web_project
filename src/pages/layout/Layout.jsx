import Content from '@/components/content/Content'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { useStateValue } from '@/context'
import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Layout = () => {
  const [state, dispatch] = useStateValue()
  
  
  return (
    <>
      {state.changePage ? (
        <>
          <main className="min-h-[80vh]">
            <Outlet />
          </main>
          <Navbar />
          <Content/>
          <Footer />
          <div className="w-full h-[20px]"></div>
        </>
      ) : (
        <>
          <Navbar />
          <main className="min-h-[80vh]">
            <Outlet />
          </main>
          <Footer />
          <div className="w-full h-[20px]"></div>
        </>
      )}
    </>
    
  )
}

export default Layout