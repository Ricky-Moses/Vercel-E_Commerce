import React from 'react'
// Logo
import Logo from '../../../asset/header_img/logo.png'

const navLink = [
  { label: 'Categories', link: '' },
  { label: 'Brands', link: '' },
  { label: 'Luxe', link: '' },
  { label: 'Rykaa Fashion', link: '' },
  { label: 'Beauty Advice', link: '' },
]
const Navbar = () => {
  return (
    <div className="col1 flex items-center ">
      <div className="">
        <a href="">
          <img className="" src={Logo} />
        </a>
      </div>
      <div className="flex items-center">
        {navLink.map(({ label, link }) => (
          <a key={label} href={link}>
            <div className="!px-4">{label}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar