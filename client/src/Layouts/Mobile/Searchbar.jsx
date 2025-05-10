import React from 'react'
// Icon
import { CiSearch } from 'react-icons/ci'

const Searchbar = () => {
    return (
        <div className='search-bar h-15 !px-5'>
            <label className="input w-full bg-neutral-200 rounded-4xl !px-2">
                <CiSearch className='icon text-2xl' />
                <input type="search" className="grow" placeholder="Explore Our Beauty Collection" />
            </label>
        </div>
    )
}

export default Searchbar