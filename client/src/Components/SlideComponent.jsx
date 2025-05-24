import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchAdvertisement } from "../Context/Ad";
import { MdOutlineError } from "react-icons/md";


const defaultSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

    ],
};

const SliderComponent = ({
    slides,
    settings = defaultSettings,
    width = "100%",
    height = "300px",
    slider_width = "60%",
    slider_height = "60%",
    radius = '0'
}) => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.ads)
    const [tablet, setTablet] = useState(window.innerWidth < 768)

    useEffect(() => {
        dispatch(fetchAdvertisement())
        const handleDevice = () => {
            setTablet(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleDevice)
        return () => window.removeEventListener('resize', handleDevice)
    }, [dispatch])

    const sliderSettings = {
        ...defaultSettings,
        ...settings,
    };
    // console.log(sliderSettings);
    // console.log('Height: ', height);
    return (
        <div className="" style={{ width: '100dvw' }}>
            <div className="" style={{ width, height: tablet ? 'fit-content' : height }}>
                <Slider {...sliderSettings}>
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
                        slides?.images?.map((pic, i) => (
                            <div key={i} className="outline-0 cursor-pointer" style={{ width: slider_width, height: slider_height,  }}>
                                {pic?.img && (<img src={pic?.img} alt={pic?.img} style={{borderRadius: radius}} />)}
                                {pic?.description && (<span className="line-clamp-2 text-black text-[14px]">{pic?.description}</span>)}
                                {pic?.price && (<div className="flex items-center gap-2">
                                    {pic?.price && (<span className="">{pic?.price}</span>)}
                                    {pic?.mrp && (<span className="text-[13px] line-through">{pic?.mrp}</span>)}
                                    {pic?.discount && (<span className="text-blue-400">{pic?.discount}</span>)}
                                </div>)}
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;