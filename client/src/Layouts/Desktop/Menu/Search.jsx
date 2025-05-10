import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";


const Search = () => {
  return (
    <div className="col2 flex items-center gap-5">
      <label className="input bg-neutral-200 !px-1">
        <CiSearch className='text-2xl' />
        <input type="search" className="grow" placeholder="Search" />
      </label>
      <div className="btn_div">
        <button className='btn'>Sign</button>
      </div>
      <div className="cart">
        <MdShoppingCartCheckout className='text-2xl' />
      </div>
    </div>
  )
}

export default Search