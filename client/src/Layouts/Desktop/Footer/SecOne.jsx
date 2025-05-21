import { MdMarkEmailRead } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const SecOne = () => {
    return (
        <div className="sec-1 ">
            <div className="w-5/6 h-full grid grid-cols-3 gap-2 !p-2 !mx-auto text-white">
                <span className="flex flex-col items-center justify-center gap-4">
                    <span className="flex items-center gap-2">
                        <span className="text-2xl"><MdMarkEmailRead /></span>
                        <span className="">Get Special Discount On Your Inbox</span>
                    </span>
                    <form className="flex items-center justify-center gap-2">
                        <input type="email" className='border-b' placeholder='Your Email' />
                        <input type='submit' className="border  !px-2" value='Send' />
                    </form>
                </span>
                <span className=" flex flex-col items-center justify-center gap-4">
                    <span className="flex items-center gap-2">
                        <span className="text-2xl"><IoPhonePortrait /></span>
                        <span className="">Explore More Project Of Rykaa</span>
                    </span>
                    <span className=""></span>
                </span>
                <span className=" flex flex-col items-center justify-center gap-4">
                    <span className="max-w-5/6 flex items-center gap-2">
                        <span className="text-2xl"><FaPhoneAlt /></span>
                        <span className="">For Any Help, You May Call Us At +91 938-495-6809</span>
                    </span>
                    <span className="max-w-4/6">
                        <span className="">{'(Monday - Sunday, 12AM to 12PM, In Week 24/7)'}</span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SecOne