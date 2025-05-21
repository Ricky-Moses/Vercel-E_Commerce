import SimpleSlider from "../../Components/SlideComponent";

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' }
]

const advertiseOneSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        
    ],
};

const AdvertisementOne = () => {
    return (
        <div className="row2">
            <SimpleSlider
                slides={advertiseMent}
                settings={advertiseOneSetting}
                width='100%'
                height='clamp(5rem, 9vw, 8rem)'
            />
        </div>
    )
}

export default AdvertisementOne