// Logo
import { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../../../asset/header_img/logo.png'
// Component
import List from '../../../Components/Desktop/List'
// Data
import { MenuContext } from '../../../Hooks/useContext'


const Navbar = () => {

  const { data, isLoading, error } = useContext(MenuContext)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const menuRef = useRef(null)

  const toggleMenu = (i) => {
    if([0, 1, 4].includes(i)) return setHoveredMenu(null)
    setHoveredMenu(i)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setHoveredMenu(null)
      }

    }
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const menus = data[0]?.MainMenu || []
  // console.log(menus);
  return (
    <>
      <div className="col1 w-full flex items-center justify-center gap-3" ref={menuRef}>
        <div className="">
          <a href="">
            <img className="" src={Logo} />
          </a>
        </div>
        {isLoading ? (
          // Show loading skeleton
          <div className='skeleton w-4/6 h-10'></div>
        ) : error ? (
          // Show error message
          <div className="text-red-500">⚠️ {error}</div>
        ) : (
          // Show real menu
          <div className="flex items-center gap-10">
            {menus.map((nav, i) => (
              <div key={i} className="menus cursor-pointer">
                <div onClick={() => toggleMenu(i)}>{nav.label}</div>
                <div>{hoveredMenu === i && <List index={i} />}</div>
              </div>
            ))}
          </div>
        )}
      </div >
    </>
  )
}

export default Navbar