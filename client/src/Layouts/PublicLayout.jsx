import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PublicLayout = ({ children }) => {

    const { isAuthenticated } = useSelector(state => state.auth)

    if(isAuthenticated){
        return <Navigate to={'/'} />
    }

    return children
}

export default PublicLayout