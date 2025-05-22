import { useDispatch, useSelector } from "react-redux";
import SimpleSlider from "../../Components/SlideComponent";
import { useEffect } from "react";
import { fetchAdvertisement } from "../../Context/Ad";



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
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])
    return (
        <div className="row3">
            <SimpleSlider
                slides={data[2]}
                settings={advertiseOneSetting}
                width="90%"
                height="clamp(5rem, 15vw, 13rem)"
            />
        </div>
    )
}

export default AdvertisementTwo