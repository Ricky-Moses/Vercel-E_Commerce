import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchAdvertisement } from "../Context/Ad";


const defaultSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [

    ],
};

const SliderComponent = ({
    slides,
    settings = defaultSettings,
    width = "100%",
    height = "300px",
    slider_width = "60%",
    slider_height = "60%"
}) => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const sliderSettings = { ...defaultSettings, ...settings };
    console.log(sliderSettings);
    console.log('Height: ', height);


    return (
        <div className="" style={{ width: '100dvw' }}>
            <div className="" style={{ width, height }}>
                <Slider {...sliderSettings}>
                    <div>
                        {loading ? (
                            <div className=""></div>
                        ) : error ? (
                            <div className=""></div>
                        ) : (
                            slides?.images?.map((pic, i) => (
                                <div key={i} className="" style={{ width: slider_width, height: slider_height }}>
                                    <img src={pic?.img} alt="" />
                                </div>
                            ))
                        )}
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;