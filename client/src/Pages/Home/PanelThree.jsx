import SliderComponent from "../../Components/SlideComponent"

const advertiseMent = [
    { img: '', link: '', name: 'Image - 1' },
    { img: '', link: '', name: 'Image - 2' },
    { img: '', link: '', name: 'Image - 3' },
    { img: '', link: '', name: 'Image - 4' }
]

const advertiseOneSetting = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        
    ],
};

const AdvertisementThree = () => {

  return (
    <div className='row5 w-full flex flex-col items-center justify-center'>
        <div className="w-full flex items-center justify-center">
          <h1 className="font-extrabold">🪷 Offers Too Good To Skip 🪷</h1>
        </div>
        <div className="w-full h-5/6 flex items-center justify-center">
          <SliderComponent
            slides={advertiseMent}
            settings={advertiseOneSetting}
            width="90%"
            height="clamp(5rem, 30vw, 30rem)"
          />
        </div>
    </div>
  )
}

export default AdvertisementThree