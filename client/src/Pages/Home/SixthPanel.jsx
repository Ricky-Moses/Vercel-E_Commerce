import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"

const SixthPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[5] || [], [data])

    const SixthPanelSetting = useMemo(() => ({
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ],
    }), [Data?.images?.length])
    return (
        <div className="row6 flex flex-col gap-2">
            <div className="text-center sm:text-start lg:!ps-5">
                <h1 className="text-[20px] lg:text-2xl font-bold">Lingerie & Accessories</h1>
                <h2 className="text-[14px] sm:text-[16px] font-bold">Handpicked Styles For You</h2>
            </div>
            <SliderComponent
                slides={Data}
                settings={SixthPanelSetting}
                width="95%"
                height="clamp(5rem, 12vw, 10rem)"
                slider_width="100%"
                slider_height="100%"
                radius="1%"
            />
        </div>
    )
}

export default SixthPanel