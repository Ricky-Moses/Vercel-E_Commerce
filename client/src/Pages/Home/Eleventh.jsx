import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdvertisement } from "../../Context/Ad"
import GridList from '../../Components/GridList'

const Eleventh = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.ads)

    useEffect(() => {
        dispatch(fetchAdvertisement())
    }, [dispatch])

    const Data = useMemo(() => data[10] || [], [data])

    return (
        <div className="row10 flex flex-col !mt-4">
            <div className="text-center sm:text-start lg:!ps-5">
                <h1 className="text-[20px] lg:text-2xl font-bold">Stellar Selection</h1>
                <h2 className="text-[14px] sm:text-[16px] font-bold">Brands you absolute can't miss</h2>
            </div>
            <GridList
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

export default Eleventh