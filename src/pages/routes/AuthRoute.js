import { Outlet, useLocation } from 'react-router-dom'

function AuthRoute() {
    const location = useLocation()
    return <Outlet  location={location}/>
}

export default AuthRoute