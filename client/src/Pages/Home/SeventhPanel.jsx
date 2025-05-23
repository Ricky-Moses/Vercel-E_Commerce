import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import AdList from "../../Components/AdList"

const SeventhPanel = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[6] || [], [data])
    return (
        <div className="row7 flex flex-col !mt-4">
            <div className="text-center sm:text-start lg:!ps-5">
                <h1 className="text-[20px] lg:text-2xl font-bold">Hottest Brands On Offer</h1>
                <h2 className="text-[14px] sm:text-[16px] font-bold">In The Spotlight</h2>
            </div>
            <AdList
                slides={Data}
                width='100%'
                height=''
                bgColor="#ffffff"
                DPlay='grid'
                Col='repeat(auto-fit, minmax(200px, 1fr))'
                gap="10px"
                pad='20px'
            />
        </div>
    )
}

export default SeventhPanel