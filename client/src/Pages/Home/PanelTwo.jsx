import SimpleSlider from "../../Components/SlideComponent";

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
    { img: '', link: '', name: 'Image - 10' },
]

const advertiseOneSetting = {
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        }
    ],
};

const AdvertisementTwo = () => {
    return (
        <div className="row3">
            <SimpleSlider
                slides={advertiseMent}
                settings={advertiseOneSetting}
                width="90%"
                height="clamp(5rem, 15vw, 13rem)"
            />
        </div>
    )
}

export default AdvertisementTwo