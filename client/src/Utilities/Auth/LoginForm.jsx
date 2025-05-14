import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, resetAuth } from '../../Context/Auth'; // Fixed import
import { MdAttachEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { persistor } from '../../App/Store';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isRehydrated, setIsRehydrated] = useState(false);

    // Wait for redux-persist rehydration
    useEffect(() => {
        console.log('LoginForm - Checking rehydration...');
        const unsubscribe = persistor.subscribe(() => {
            const { bootstrapped } = persistor.getState();
            console.log('LoginForm - Persistor state:', { bootstrapped });
            if (bootstrapped) {
                setIsRehydrated(true);
                unsubscribe();
            }
        });
        if (persistor.getState().bootstrapped) {
            setIsRehydrated(true);
            unsubscribe();
        }
        return () => unsubscribe();
    }, []);

    // Navigate after successful login
    useEffect(() => {
        if (isRehydrated && isAuthenticated) {
            console.log('LoginForm - User authenticated, navigating to home');
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, isRehydrated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('LoginForm - Submitting:', formData);
        dispatch(LoginUser(formData));
    };

    const clearError = () => {
        dispatch(resetAuth());
    };

    const { email, password } = formData;

    return (
        <div className="loginForm flex items-center justify-center bg-purple-200 rounded-2xl !p-1">
            <form
                onSubmit={handleSubmit}
                className="w-full md:w-5/6 lg:w-4/6 h-full lg:h-5/6 flex flex-col items-center justify-center bg-white rounded-2xl"
            >
                <h1 className="font-bold text-2xl mb-4">Login/Sign In</h1>
                <div className="w-full h-8/12 flex flex-col items-center justify-center gap-2 lg:gap-4 !p-2">
                    <div className="w-full h-3/12 flex flex-col items-center justify-center">
                        <label
                            htmlFor="email"
                            className="label w-4/5 lg:w-3/5 h-fit validator border rounded-lg !px-3 flex items-center gap-2"
                        >
                            <MdAttachEmail className="text-xl" />
                            <input
                                type="email"
                                id="email"
                                className="input bg-transparent focus:outline-0 outline-0 border-0 grow"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                                placeholder="user@example.com"
                                aria-label="Email address"
                            />
                        </label>
                    </div>
                    <div className="w-full h-3/12 flex flex-col items-center justify-center gap-1">
                        <label
                            htmlFor="password"
                            className="label w-4/5 lg:w-3/5 h-fit validator border rounded-lg !px-3 flex items-center gap-2"
                        >
                            <RiLockPasswordFill className="text-xl" />
                            <input
                                type="password"
                                id="password"
                                className="input bg-transparent focus:outline-0 outline-0 border-0 grow"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                                placeholder="*********"
                                aria-label="Password"
                            />
                        </label>
                    </div>
                    <div className="w-full flex items-center justify-evenly text-gray-400 !mb-2">
                        <p className="cursor-pointer hover:text-black">Remember Me</p>
                        <p className="cursor-pointer hover:text-black">Forgot Password?</p>
                    </div>
                    <div className="!my-2">
                        <p
                            className="text-gray-400 cursor-pointer hover:text-black"
                            onClick={() => navigate('/register')}
                        >
                            Create account
                        </p>
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm mb-2 flex items-center gap-2">
                            <span>{error}</span>
                            <button
                                type="button"
                                className="text-blue-500 hover:underline"
                                onClick={clearError}
                            >
                                Clear
                            </button>
                        </div>
                    )}
                    <div className='w-full flex items-center justify-center'>
                        {loading ? (
                            <button className="btn w-4/6" disabled>
                                <span className="loading loading-spinner loading-md"></span>
                                Loading...
                            </button>
                        ) : (
                            <button type="submit" className="btn w-4/6">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;