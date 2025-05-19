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
        }
    ],
};

const AdvertisementEleven = () => {
    return (
        <div className="row14 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-extrabold">New At Rykaa</h1>
                <h1 className="font-extrabold">Exclusive Beauty Launches, You'll Want To Own</h1>
            </div>
            <div className="w-full flex items-center justify-center">
                <SliderComponent
                    slides={advertiseMent}
                    settings={advertiseOneSetting}
                    width="90%"
                    height="clamp(5rem, 30vw, 20rem)"
                />
            </div>
            <div className="flex items-center justify-center w-5/6 h-17 !p-2">
                <div className="border w-full h-5/6 flex items-center justify-between rounded-2xl !px-3">
                    <h2 className="font-extrabold text-white">View All</h2>
                    <h2 className="">{'>'}</h2>
                </div>
            </div>
        </div>
    )
}

export default AdvertisementEleven