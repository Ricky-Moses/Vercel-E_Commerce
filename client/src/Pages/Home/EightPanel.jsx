import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"

const EightPanel = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.ads)

  useEffect(() => {
    dispatch(fetchAdvertisement())
  }, [dispatch])

  const Data = useMemo(() => data[7] || [], [data])

  const EightPanelSetting = useMemo(() => ({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    infinite: Data?.images?.length > 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      }
    ],
  }), [Data?.images?.length])
  return (
    <div className="row8">
      <SliderComponent
        slides={Data}
        settings={EightPanelSetting}
        width="100%"
        height="clamp(5rem, 18vw, 17rem)"
        slider_width="60%"
        slider_height="60%"
        radius='0'
      />
    </div>
  )
}

export default EightPanel