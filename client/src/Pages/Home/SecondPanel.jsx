import { useDispatch, useSelector } from "react-redux"
import SliderComponent from "../../Components/SlideComponent"
import { useEffect, useMemo } from "react"
import { fetchAdvertisement } from "../../Context/Ad"

const SecondPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)


    useEffect(() => {
        dispatch(fetchAdvertisement())

    }, [dispatch])

    const Data = useMemo(() => data[1] || [], [data]);

    const SecondPanelSetting = useMemo(() => ({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: Data?.images?.length > 1,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [

        ],
    }), [Data?.images?.length])
    console.log(SecondPanelSetting);
    return (
        <div className="row2">
            <SliderComponent
                slides={Data}
                settings={SecondPanelSetting}
                width="100%"
                height='clamp(5rem, 9vw, 9rem)'
                slider_width="100%"
                slider_height="100%"
            />
        </div>
    )
}

export default SecondPanel