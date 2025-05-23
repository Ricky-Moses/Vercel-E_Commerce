import { useDispatch, useSelector } from "react-redux"
import SliderComponent from "../../Components/SlideComponent"
import { useEffect, useMemo } from "react"
import { fetchAdvertisement } from "../../Context/Ad"


const ThirdPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[2] || [], [data])

    const ThirdPanelSetting = useMemo(() => ({
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: false,
        infinite: Data?.images?.length > 1,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ],
    }), [Data?.images?.length])
    return (
        <div className="row3">
            <SliderComponent
                slides={Data}
                settings={ThirdPanelSetting}
                width="100%"
                height='clamp(3rem, 18vw, 15rem)'
                slider_width="100%"
                slider_height="100%"
            />
        </div>
    )
}

export default ThirdPanel