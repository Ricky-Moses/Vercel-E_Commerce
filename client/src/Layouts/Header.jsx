import React, { useEffect, useState } from 'react'
import Top from './Desktop/Top'
import Menu from './Desktop/Menu'
import SubMenu from './Desktop/SubMenu'
import Navbar from './Mobile/Navbar'
import Searchbar from './Mobile/Searchbar'
import Sidebar from './Mobile/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {
  const [device, setDevice] = useState(window.innerWidth < 992)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleSize = () => {
      setDevice(window.innerWidth < 992)
    }

    window.addEventListener('resize', handleSize)
    return () => window.addEventListener('resize', handleSize)
  })

  // console.log(isSidebarOpen);

  return (
    <>
      {device ? (
        <div className="mobile-header max-w-screen h-screen">
          <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />
          <Searchbar />
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div className='desktop-header max-w-screen h-screen'>
          <div className="top-header">
            <Top />
            <Menu />
          </div>
          <SubMenu />
          <Outlet />
          <Footer />
        </div >
      )}
    </>
  )
}

export default Header