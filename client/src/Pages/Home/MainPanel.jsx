import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAdvertisement } from '../../Context/Ad';

const MainAdvertisement = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, loading, error } = useSelector((state) => state.ads)
  // console.log("Advertisement_d: ", data);

  useEffect(() => {
    dispatch(fetchAdvertisement())
  }, [dispatch])

  return (
    <div className='row1 max-w-screen'>
      {loading ? (
        <div className="skeleton w-full h-full"></div>
      ) : error ? (
        <></>
      ) : (
        <div className="w-full h-full">
          {data[0]?.images?.map((pic) => (
            <div key={pic?._id} className="w-full h-full cursor-pointer" onClick={() => navigate(`${pic?.link}`)}>
              <img className="w-full h-full object-fill" src={pic?.img} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MainAdvertisement