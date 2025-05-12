import React from 'react'
// Image Register
import register from '../asset/auth_img/register.png'
import RegisterForm from './Auth/RegisterForm'

const Register = () => {
    return (
        <div className='register w-dvw h-dvh grid lg:grid-cols-2 !p-1 border'>
            <div className="h-11/12 flex items-center justify-center">
                <img className="w-5/12 md:w-6/12 lg:w-11/12 h-full object-contain" src={register} />
            </div>
            <RegisterForm />
        </div>
    )
}

export default Register