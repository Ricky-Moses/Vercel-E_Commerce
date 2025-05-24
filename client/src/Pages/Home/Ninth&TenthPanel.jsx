import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"

const NinthPanel = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.ads)

  useEffect(() => {
    dispatch(fetchAdvertisement())
  }, [dispatch])

  const DataNinth = useMemo(() => data[8] || [], [data])
  const DataTenth = useMemo(() => data[9] || [], [data])

  const NinthPanelSetting = useMemo(() => ({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: DataNinth?.images?.length > 1,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

    ],
  }), [DataNinth?.images?.length])

  const TenthPanelSetting = useMemo(() => ({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    infinite: DataTenth?.images?.length > 1,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
  }), [DataTenth?.images?.length])

  return (
    <div className='row9 flex flex-col items-center justify-center gap-3 !my-2 !p-2'>
      <SliderComponent
        slides={DataNinth}
        settings={NinthPanelSetting}
        width="100%"
        height="clamp(10rem, 20vw, 15rem)"
        slider_width="60%"
        slider_height="60%"
        radius='0'
      />
      <SliderComponent
        slides={DataTenth}
        settings={TenthPanelSetting}
        width="100%"
        height=""
        slider_width="100%"
        slider_height="100%"
        radius='0'
      />
    </div>
  )
}

export default NinthPanel