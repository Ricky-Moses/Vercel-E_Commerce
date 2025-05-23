import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"



const HeadAd = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())


    }, [dispatch])

    // console.log('Tablet: ',tablet);

    const Data = useMemo(() => data[0] || [], [data]);
    // console.log('Images: ',images);
    // console.log('Data 1: ',data[0]);

    const headSetting = useMemo(() => ({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: Data?.images?.length > 1,
        speed: 3000,
        arrows: false,
    }
    ), [Data?.images?.length])

    return (
        <div className="row1">
            <SliderComponent
                slides={Data}
                settings={headSetting}
                width="100%"
                height='clamp(12.3rem, 21vw, 20.2rem)'
                slider_width="100%"
                slider_height="100%"
            />
        </div>
    )
}

export default HeadAd