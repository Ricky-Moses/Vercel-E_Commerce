import { useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Router dom
import { useNavigate } from "react-router-dom";
// Slice
import { LoginUser } from '../../Context/Auth.js'
// Icon
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, loading, error } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(LoginUser(formData))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])

    const { email, password } = formData

    return (
        <div className="loginForm flex items-center justify-center bg-purple-200 rounded-2xl !p-1">
            <form onSubmit={handleSubmit} className="w-full md:w-5/6 lg:w-4/6 h-full lg:h-5/6 flex flex-col items-center justify-center bg-white rounded-2xl">
                <h1 className="font-bold">Login/Sign In</h1>
                <div className=" w-full h-8/12 flex flex-col items-center justify-center gap-2 lg:gap-0 !p-2">
                    <div className="w-full h-3/12 flex flex-col items-center justify-center">
                        <label htmlFor="" className="label w-4/5 lg:w-3/5 h-fit validator border rounded-lg !px-3">
                            <MdAttachEmail />
                            <input
                                type="email"
                                className="input bg-transparent focus:outline-0 outline-0 border-0"
                                name='email'
                                value={email}
                                onChange={handleChange}
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
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                                placeholder="*********" />
                        </label>
                    </div>
                    <div className="w-full flex items-center justify-evenly text-gray-400  !mb-2">
                        <p className="cursor-pointer hover:text-black">Remember Me</p>
                        <p className="cursor-pointer hover:text-black">Forget password</p>
                    </div>
                    <div className="!my-2">
                        <p
                            className="text-gray-400 cursor-pointer hover:text-black"
                            onClick={() => navigate('/register')}
                        >Create account</p>
                    </div>
                    {error ? (
                        <>
                            <button disabled>{error}</button>
                        </>
                    ) : (
                        <>
                            {loading ? (
                                <>
                                    <button className="btn w-4/6">
                                        <span className="loading loading-spinner loading-md"></span>
                                        loading...
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn w-4/6">Submit</button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </form>
        </div>
    )
}

export default LoginForm