// import { useDispatch, useSelector } from 'react-redux'
// Icon
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const LoginForm = () => {
    return (
        <div className="loginForm flex items-center justify-center bg-purple-200 rounded-2xl !p-1">
            <form className="w-full md:w-5/6 lg:w-4/6 h-full lg:h-5/6 flex flex-col items-center justify-center bg-white rounded-2xl">
                <h1 className="font-bold">Login/Sign In</h1>
                <div className=" w-full h-8/12 flex flex-col items-center justify-center gap-2 lg:gap-0 !p-2">
                    <div className="w-full h-3/12 flex flex-col items-center justify-center">
                        <label htmlFor="" className="label w-4/5 lg:w-3/5 h-fit validator border rounded-lg !px-3">
                            <MdAttachEmail />
                            <input 
                            type="email" 
                            className="input bg-transparent focus:outline-0 outline-0 border-0"
                            required
                            placeholder="user@example.com" />
                        </label>
                    </div>
                    <div className="w-full h-3/12 flex flex-col items-center justify-center gap-1">
                        <label htmlFor="" className="label w-4/5 lg:w-3/5 h-fit validator border rounded-lg !px-3">
                            <RiLockPasswordFill />
                            <input 
                            type="password" 
                            className="input bg-transparent focus:outline-0 outline-0 border-0" 
                            required
                            placeholder="*********" />
                        </label>
                    </div>
                    <div className="w-full flex items-center justify-evenly text-gray-400 !mb-2">
                        <p className="">Remember Me</p>
                        <p className="">Forget password</p>
                    </div>
                    <button className="w-4/6 btn btn-ghost btn-success">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm