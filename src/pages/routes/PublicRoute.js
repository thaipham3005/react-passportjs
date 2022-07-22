import { Outlet } from 'react-router-dom'

import Footer from '../../components/Footer';
import Socials from '../../components/Socials'

function PublicRoute() {

    return (
        <>
            <Outlet />
            <Socials />
            <Footer />
        </>)
}

export default PublicRoute