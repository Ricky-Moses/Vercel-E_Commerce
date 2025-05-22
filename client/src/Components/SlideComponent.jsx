import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchAdvertisement } from "../Context/Ad";


const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [

    ],
};

const SliderComponent = ({
    slides,
    settings = defaultSettings,
    width = "100%",
    height = "300px",
    display = "flex",
    alignItems = "center",
    justifyContent = "center",
}) => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const sliderSettings = { ...defaultSettings, ...settings };


    return (
        <div className="" style={{ width: '100dvw', display, alignItems, justifyContent }}>
            <div className="" style={{ width, height }}>
                <Slider {...sliderSettings}>
                    {loading ? (
                        <div className="skeleton w-full h-full"></div>
                    ) : error ? (
                        <div className="skeleton w-full h-full bg-base-300"></div>
                    ) : (
                        slides?.images?.map((pic) => (
                            <div key={pic?._id} className="max-w-full h-full outline-0">
                                <img className="w-full h-full object-contain" src={pic?.img} />
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;