import React from "react";
import Slider from "react-slick";


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

    const sliderSettings = { ...defaultSettings, ...settings };
    const bol = false

    return (
        <div className="" style={{ width: '100vw', display, alignItems, justifyContent }}>
            <div className="" style={{ width, height }}>
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-full "
                        >
                            {bol ? (
                                <img
                                    src={slide.img}
                                    alt={slide.name}
                                    className=" w-full h-full object-contain"
                                />
                            ) : (
                                <div className="skeleton w-full h-full"></div>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;