import { useContext, useEffect, useRef, useState } from "react"
import { MenuContext } from "../../Hooks/useContext"
import SubList from "../../Components/Desktop/SubList"


const SubMenu = () => {

  const { data, isLoading, error } = useContext(MenuContext)
  const [activeMenu, setActiveMenu] = useState(null)
  const menuRef = useRef(null)

  const toggleMenu = (index) => {
    setActiveMenu(index)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const subMenu = data[1]?.SubMenu || []
  // console.log("Sub Menu: ", subMenu);
  return (
    <div className="" ref={menuRef}>
      {isLoading ? (
        <div className='skeleton w-full h-10'></div>
      ) : error ? (
        <div className="text-red-500">⚠️ {error}</div>
      ) : (
        <div className='sub-menu navbar justify-center gap-5 xl:gap-7 !px-1'>
          {subMenu?.map((menu, i) => (
            <div key={i}>
              <ul className='menu-link cursor-pointer'>
                <li 
                className="text-[14px] xl:text-[16px] text-neutral-500 !px-1"
                onClick={() => toggleMenu(i)}
                >
                  {menu?.label}
                  </li>
              </ul>
              {activeMenu === i && <SubList index={i} />}
            </div>
          ))}
          <a className='logo-link' href="">
            <h1 className="text-[18px] xl:text-2xl italic">Offer</h1>
          </a>
        </div>
      )}
    </div>
  )
}

export default SubMenu