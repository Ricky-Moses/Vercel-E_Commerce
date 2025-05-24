import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../Context/Ad"

const AdList = ({
  slides,
  width,
  height,
  bgColor = "#ffffff",
  DPlay = 'grid',
  Col = '',
  gap = '5px',
  pad = '20px'
}) => {

  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.ads)

  useEffect(() => {
    dispatch(fetchAdvertisement())
  }, [dispatch])

  return (
    <div className="ad-list" style={{ width, height, backgroundColor: bgColor, display: DPlay, gridTemplateColumns: Col, gap: gap, padding: pad }}>
      {loading ? (
        <div className="skeleton w-full h-full">
          <span className="loading loading-dots loading-sm"></span>
          <span className="text-[20px]">Loading</span>
        </div>
      ) : error ? (
        <div role="alert" className="alert alert-error !flex !p-3">
          <MdOutlineError className="lg:text-2xl" />
          <span className="lg:text-2xl">Error Occurred! Fetching the data failed.</span>
        </div>
      ) : (
        <>
          {slides?.images?.map((pic, idx) => (
            <div key={idx} className="flex flex-col">
              {pic?.img && (<img className="w-full h-full object-contain" src={pic?.img} alt={pic?.img} />)}
              {pic?.offer && (<h1 className="font-bold">{pic?.offer}</h1>)}
              {pic?.description && (<h1 className="line-clamp-2">{pic?.description}</h1>)}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default AdList