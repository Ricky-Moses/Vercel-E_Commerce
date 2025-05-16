// Logo
// import { useEffect, useRef } from 'react'
import Logo from '../../../asset/header_img/logo.png'
// Component
import List from '../../../Components/List'
// Data
// import { useMenuContext } from '../../../Hooks/useContext'


const Navbar = () => {
  return (
    <>
      <div className="col1 flex items-center">
        <div className="">
          <a href="">
            <img className="" src={Logo} />
          </a>
        </div>
        <div className="flex items-center">
          
          <div className="">
            <List />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar