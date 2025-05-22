import { useDispatch, useSelector } from "react-redux";
import SimpleSlider from "../../Components/SlideComponent";
import { useEffect } from "react";
import { fetchAdvertisement } from "../../Context/Ad";



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

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])
    return (
        <div className="row2">
            <SimpleSlider
                slides={data[1]}
                settings={advertiseOneSetting}
                width='100%'
                height='clamp(5rem, 9vw, 8rem)'
            />
        </div>
    )
}

export default AdvertisementOne