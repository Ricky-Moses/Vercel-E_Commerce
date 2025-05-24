import { MdEmail } from "react-icons/md";

const SecOne = () => {
    return (
        <div className='sec-1 flex flex-col border justify-center gap-2 text-white !p-3'>
            <div className="flex items-center gap-3">
                <MdEmail className="text-2xl" />
                <span className="">Get Special Discount On Your Index</span>
            </div>
            <form className="flex items-center gap-3">
                <input type="email" className="input bg-transparent !p-1 w-4/6" placeholder="user@email.com"/>
                <input type="submit" className="btn w-1/6" />
            </form>
        </div>
    )
}

export default SecOne