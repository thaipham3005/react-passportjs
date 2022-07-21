import { Routes, Route } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import PublicRoute from './PublicRoute'

// Public routes
import Landing from '../public/Landing'
import LoginPage from '../auth/LoginPage'
import RegisterPage from '../auth/RegisterPage'
import Contact from '../public/Contact'
import Error404 from '../error/Error404'
import Error503 from '../error/Error503'
// Auth routes
import Home from '../protected/Home'
import Admin from './../protected/Admin'
import MaterialUI from './../protected/MaterialUI'
import AntdUI from './../protected/AntdUI'
import BootstrapUI from './../protected/BootstrapUI'
import ChakraUI from './../protected/ChakraUI'


import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.provider'


function AllRoutes() {
    const { authState: {isAuthenticated, user, role, permissions} } = useContext(AuthContext)

    return (
        <Routes>           
            <Route element={<PublicRoute />}>
                <Route path='/' element={<Landing />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/contact' element={<Contact />} />
                
            </Route>

            <Route element={<AuthRoute isAllowed={isAuthenticated}/>}>
                <Route path='/home' element={<Home />} />
            </Route>

            <Route element={<AuthRoute isAllowed={!!user && role.includes('Admin')} />}>
                <Route path='/admin' element={<Admin />} />
            </Route>

            <Route element={<AuthRoute isAllowed={!!user && permissions.includes('Bootstrap')} />}>
                <Route path='/bootstrap' element={<BootstrapUI />} />
            </Route>
            <Route element={<AuthRoute isAllowed={!!user && permissions.includes('Antd')} />}>
                <Route path='/antd' element={<AntdUI />} />
            </Route>
            <Route element={<AuthRoute isAllowed={!!user && permissions.includes('MUI')} />}>
                <Route path='/mui' element={<MaterialUI />} />
            </Route>
            <Route element={<AuthRoute isAllowed={!!user && permissions.includes('Chakra')} />}>
                <Route path='/chakra' element={<ChakraUI />} />
            </Route>


            <Route path='/unauthorized' element={<Error503 />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes