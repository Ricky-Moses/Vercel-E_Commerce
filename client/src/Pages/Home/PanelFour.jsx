import SliderComponent from "../../Components/SlideComponent";

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' },
    { img: '', link: '', name: 'Image - 6' }
]

const advertiseOneSetting = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
    ],
};

const AdvertisementFour = () => {
    return (
        <div className='row6 flex flex-col items-center justify-center'>
            <div className="w-full flex items-center justify-center">
                <h1 className="font-extrabold">🌟 Glow Up For Less 🌟</h1>
            </div>
            <div className="w-full h-5/6 flex items-center justify-center">
                <SliderComponent
                    slides={advertiseMent}
                    settings={advertiseOneSetting}
                    width="90%"
                    height="clamp(8rem, 20vw, 18rem)"
                />
            </div>
        </div>
    )
}

export default AdvertisementFour