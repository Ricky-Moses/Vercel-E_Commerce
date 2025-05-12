// Icon
import { HiOutlineBars4 } from "react-icons/hi2";
import { TfiGift } from "react-icons/tfi";
import { GiBeachBag } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
// Logo
import Logo from '../../asset/header_img/logo.png'

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className='nav-bar navbar justify-between !px-3'>
            <div className="col1 flex items-center gap-3">
                <div className="">
                    <HiOutlineBars4 onClick={toggleSidebar} className='icon cursor-pointer' />
                </div>
                <div className="">
                    <img className="w-full h-full" src={Logo} />
                </div>
            </div>
            <div className="col2 flex items-center gap-5">
                <div className="">
                    <TfiGift className='icon' />
                </div>
                <div className="">
                    <GiBeachBag className='icon' />
                </div>
                <div className="">
                    <IoIosPersonAdd className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar