import { useDispatch, useSelector } from 'react-redux'

const MainAdvertisement = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.ads)
  console.log("Advertisement: ",data);
  return (
    <div className='row1 max-w-screen'>
      <div className="skeleton w-full h-full"></div>
    </div>
  )
}

export default MainAdvertisement