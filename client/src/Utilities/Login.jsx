import LoginForm from './Auth/LoginForm'
// Image
import LoginImg from '../asset/auth_img/login.png'

const Login = () => {
  return (
    <div className='login w-dvw h-dvh grid lg:grid-cols-2 !p-1'>
      <div className="h-11/12 flex items-center justify-center">
        <img className="w-5/12 md:w-6/12 lg:w-11/12 h-full object-contain" src={LoginImg} />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login