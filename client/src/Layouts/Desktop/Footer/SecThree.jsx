import { GiSurferVan } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import { PiMedalBold } from "react-icons/pi";
import { IoPricetagsSharp } from "react-icons/io5";
const SecThree = () => {
  return (
    <div className="sec-3 flex items-center justify-center">
        <div className="w-5/6 h-5/6 flex items-center justify-around">
            <div className="flex items-center gap-3">
                <div className="!p-4 bg-[#F45589] text-white text-3xl rounded-full">
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
            <div className="flex items-center gap-3">
                <div className="!p-4 bg-[#F45589] text-white text-3xl rounded-full">
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
            <div className="flex items-center gap-3">
                <div className="!p-4 bg-[#F45589] text-white text-3xl rounded-full">
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
            <div className="flex items-center gap-3">
                <div className="!p-4 bg-[#F45589] text-white text-3xl rounded-full">
                    <IoPricetagsSharp />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="border-b border-gray-300 !pb-2">
                        +1900 BRANDS
                    </span>
                    <span className="">
                        1.2 Lakh+ Products
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecThree