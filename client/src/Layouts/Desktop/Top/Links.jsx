import React from 'react'
// Icons
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaGifts, FaMapLocationDot } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Links = () => {
    return (
        <div className="social-link">
            <ul className="flex items-center">
                <a href="">
                    <li className="border-r-2 flex items-center gap-2">
                        <BsFillPhoneVibrateFill />
                        Linkedin
                    </li>
                </a>
                <a href="">
                    <li className="border-r-2 flex items-center gap-2">
                        <FaMapLocationDot />
                        Store & Event
                    </li>
                </a>
                <a href="">
                    <li className="border-r-2 flex items-center gap-2">
                        <FaGifts />
                        Gift Card
                    </li>
                </a>
                <a href="">
                    <li className=" flex items-center gap-2">
                        <IoIosHelpCircleOutline />
                        Help
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default Links