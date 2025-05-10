import React from 'react'
import Navbar from './Menu/Navbar'
import Search from './Menu/Search'

const Menu = () => {
  return (
    <div className='menu flex items-center lg:justify-between xl:justify-around !px-2 border-b border-neutral-300'>
      <div className="navbar lg:justify-between xl:justify-around !px-2">
        <Navbar />
        <Search />
      </div>
    </div>
  )
}

export default Menu