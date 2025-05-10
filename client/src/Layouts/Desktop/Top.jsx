import React from 'react'

import Advertise from './Top/Advertise'
import Links from './Top/Links'

const Top = () => {
    return (
        <div className='hidden top lg:flex items-center justify-between xl:justify-around !px-2'>
            <Advertise />
            <Links />
        </div>
    )
}

export default Top