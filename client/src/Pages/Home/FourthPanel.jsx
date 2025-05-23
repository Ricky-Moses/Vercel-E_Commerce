import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"

const FourthPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[3] || [], [data])

    const FourthPanelSetting = useMemo(() => ({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: Data?.images?.length > 1,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className="row4 flex flex-col items-center sm:items-start justify-center gap-2 !p-10">
            <div className="text-center sm:text-start">
                <h1 className="text-[20px] lg:text-2xl font-bold">Explore Our Top Brands</h1>
                <h2 className="text-[14px] sm:text-[16px] font-bold">A-List To Obsesses Over</h2>
            </div>
            <SliderComponent
                slides={Data}
                settings={FourthPanelSetting}
                width="100%"
                height="clamp(10rem, 25vw, 20rem)"
                slider_width="100%"
                slider_height="100%"
                radius="50px"
            />
        </div>
    )
}

export default FourthPanel