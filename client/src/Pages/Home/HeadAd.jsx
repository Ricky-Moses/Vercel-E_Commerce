import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import SliderComponent from "../../Components/SlideComponent"

const headSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 3000,
    arrows: false,
}

const HeadAd = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)
    const [tablet, setTablet] = useState(window.innerWidth < 992)

    useEffect(() => {
        dispatch(fetchAdvertisement())

        const handleDevice = () => {
            setTablet(window.innerWidth < 992)
        }

        window.addEventListener('resize', handleDevice)

        return () => window.removeEventListener('resize', handleDevice)
    }, [dispatch])

    // console.log('Tablet: ',tablet);

    const images = useMemo(() => data[0] || [], [data]);
    // console.log('Images: ',images);
    // console.log('Data 1: ',data[0]);

    return (
        <div className="row1">
            <SliderComponent
                slides={images}
                settings={headSetting}
                width="100%"
                height={tablet ? `auto` : 'clamp(15rem, 30vw, 20.5rem)'}
                slider_width="100%"
                slider_height="100%"
            />
        </div>
    )
}

export default HeadAd