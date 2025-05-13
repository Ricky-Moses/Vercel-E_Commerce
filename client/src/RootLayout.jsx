import { Outlet } from "react-router-dom"
import Header from "./Layouts/Header"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { LoadUser } from "./Context/Auth"


const RootLayout = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoadUser())
    }, [dispatch])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout