// Image
import { useNavigate } from 'react-router-dom'
import ErrorImg from '../asset/auth_img/error.png'

const NotFound = () => {
    const navigate = useNavigate()

    const handleTo = () =>{
        navigate('/')
    }
  return (
    <div className='error w-dvw h-dvh grid lg:grid-cols-2 border'>
        <div className=" w-full flex items-center justify-center">
            <img className="w-10/12" src={ErrorImg} />
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
            <h1 className="">404❌ Not Found!</h1>
            <p className="">Oops! You wandered off the map 🗺️</p>
            <p className="">Looks like this page took a vacation 🏖️</p>
            <button className='btn btn-soft btn-success !px-2' onClick={handleTo}>Go To Home</button>
        </div>
    </div>
  )
}

export default NotFound