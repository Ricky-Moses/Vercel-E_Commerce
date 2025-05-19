import SliderComponent from "../../Components/SlideComponent";

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' },
    { img: '', link: '', name: 'Image - 5' },
    { img: '', link: '', name: 'Image - 6' },
    { img: '', link: '', name: 'Image - 7' },
    { img: '', link: '', name: 'Image - 8' },
    { img: '', link: '', name: 'Image - 9' },
    { img: '', link: '', name: 'Image - 10' }
]

const advertiseOneSetting = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ],
};

const AdvertisementTen = () => {
    return (
        <div className='row12'>
            <div className="w-full flex items-center justify-center">
                <h1 className="font-extrabold">✨ Sensorial Saving, Incoming ✨</h1>
            </div>
            <div className="w-full h-5/6 flex items-center justify-center">
                <SliderComponent
                    slides={advertiseMent}
                    settings={advertiseOneSetting}
                    width="100%"
                    height="clamp(5rem, 30vw, 20rem)"
                />
            </div>
        </div>
    )
}

export default AdvertisementTen