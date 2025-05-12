import { useEffect, useState } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Router
import { useNavigate } from 'react-router-dom'
// Slice
import { RegisterUser } from '../../Context/Auth.js'

const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, loading, error } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(RegisterUser(formData))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    const { username, email, password } = formData

    return (
        <div className="register-form flex items-center justify-center bg-blue-200 rounded-2xl !p-1">
            <form onSubmit={handleSubmit} className='w-full md:w-5/6 lg:w-4/6 h-full lg:h-5/6 flex flex-col items-center justify-center bg-white rounded-2xl'>
                <h1 className="font-bold">Register/Sign Up</h1>
                <div className="w-5/6 flex flex-col gap-5">
                    <div className="flex flex-col gap-2  w-full">
                        <label htmlFor="">Name</label>
                        <div className="">
                            <input
                                className="input validator w-full bg-white border-black !mb-1"
                                type="text"
                                required
                                placeholder="User name"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                            <div className="validator-hint">Please! Enter your name 👤</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  w-full">
                        <label htmlFor="">Email</label>
                        <div className="">
                            <input
                                className="input validator w-full bg-white border-black !mb-1"
                                type="email"
                                required
                                placeholder="user@example.com"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                            <div className="validator-hint">Please! Enter your email 📧</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  w-full">
                        <label htmlFor="">Password</label>
                        <div className="">
                            <input
                                className="input validator w-full bg-white border-black !mb-1"
                                type="password"
                                required
                                placeholder="***********"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <div className="validator-hint">Please! Enter your password 🔑</div>
                        </div>
                    </div>
                    <p className="">Already a member ? <span className="toLogin font-bold cursor-pointer" onClick={() => { navigate('/login') }}>Log in</span></p>

                    {error ? (
                        <>
                            <button disabled="disabled">{error}</button>
                        </>
                    ) : (
                        <>
                            {loading ? (
                                <>
                                    <button className="btn">
                                        <span className="loading loading-spinner loading-md"></span>
                                        loading...
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn">Submit</button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </form>
        </div>
    )
}

export default RegisterForm