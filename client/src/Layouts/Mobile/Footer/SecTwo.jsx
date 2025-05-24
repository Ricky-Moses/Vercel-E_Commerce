import React from 'react'
import { GiSurferVan } from 'react-icons/gi'
import { PiMedalBold } from 'react-icons/pi'
import { SiTicktick } from 'react-icons/si'

const SecTwo = () => {
    return (
        <div className='sec-2 w-full flex items-center justify-center gap-3 '>
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-3">
                <div className=" bg-[#6fe6fc] text-white text-2xl md:text-3xl rounded-full !p-3 md:!p-4">
                    <GiSurferVan />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="border-b border-gray-300 !pb-2">
                        FREE SHIPPING
                    </span>
                    <span className="">
                        On Order Above ₹40
                    </span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-3">
                <div className=" bg-[#6fe6fc] text-white text-2xl md:text-3xl rounded-full !p-3 md:!p-4">
                    <SiTicktick />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="border-b border-gray-300 !pb-2">
                        EASY RETURNS
                    </span>
                    <span className="">
                        15 Days Return Policy
                    </span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-3">
                <div className=" bg-[#6fe6fc] text-white text-2xl md:text-3xl rounded-full !p-3 md:!p-4">
                    <PiMedalBold />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="border-b border-gray-300 !pb-2">
                        100% AUTHENTIC
                    </span>
                    <span className="">
                        Products Sourced Directly
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SecTwo