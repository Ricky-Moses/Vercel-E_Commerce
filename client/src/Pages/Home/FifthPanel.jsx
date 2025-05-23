import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import { useEffect, useMemo } from "react"
import SliderComponent from "../../Components/SlideComponent"


const FifthPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[4] || [], [data])

    const FifthPanelSetting = useMemo(() => ({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: Data?.images?.length > 1,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    }), [Data?.images?.length])
    return (
        <div className="row5 !my-1">
            <SliderComponent
                slides={Data}
                settings={FifthPanelSetting}
                width="100%"
                height="clamp(20rem, 35vw, 35rem)"
                slider_width="100%"
                slider_height="100%"
                radius='10px'
            />
        </div>
    )
}

export default FifthPanel