import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { CurrentUser } from "./Context/Auth"
import Header from "./Layouts/Header"
import { Outlet } from "react-router-dom"

const RootLayouts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CurrentUser())
    }, [dispatch])
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayouts