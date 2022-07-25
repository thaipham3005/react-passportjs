import { Routes, Route, useLocation } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import AuthRoute from './AuthRoute'
import { AnimatePresence } from 'framer-motion'

// Public routes
import Landing from '../public/Landing'
import LoginPage from '../auth/LoginPage'
import RegisterPage from '../auth/RegisterPage'
import Contact from '../public/Contact'
import Error404 from '../error/Error404'
import Error503 from '../error/Error503'
// Auth routes
import Home from '../protected/Home'
import ProfilePage from './../protected/ProfilePage'
import Admin from './../protected/Admin'
import MaterialUI from './../protected/MaterialUI'
import AntdUI from './../protected/AntdUI'
import BootstrapUI from './../protected/BootstrapUI'
import ChakraUI from './../protected/ChakraUI'

import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.provider'

function AllRoutes() {
    const { authState: { isAuthenticated, user, role, permissions } } = useContext(AuthContext)

    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route element={<AuthRoute />}>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path='/' element={<Landing />} />
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>

                <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Route>

                <Route element={<ProtectedRoute isAllowed={!!user && role.includes('Admin')} />}>
                    <Route path='/admin' element={<Admin />} />
                </Route>

                <Route element={<ProtectedRoute isAllowed={!!user && permissions.includes('Bootstrap')} />}>
                    <Route path='/bootstrap' element={<BootstrapUI />} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={!!user && permissions.includes('Antd')} />}>
                    <Route path='/antd' element={<AntdUI />} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={!!user && permissions.includes('MUI')} />}>
                    <Route path='/mui' element={<MaterialUI />} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={!!user && permissions.includes('Chakra')} />}>
                    <Route path='/chakra' element={<ChakraUI />} />
                </Route>


                <Route path='/unauthorized' element={<Error503 />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AllRoutes