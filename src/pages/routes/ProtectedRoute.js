import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer';
import Socials from '../../components/Socials'

function ProtectedRoute({ isAllowed, redirectPath = '/unauthorized', children }) {
    const location = useLocation()
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }
    return children ? children :
        <>
            <Outlet />
            <Socials />
            <Footer />
        </>
}

export default ProtectedRoute
