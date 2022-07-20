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
import Dashboard from '../protected/Dashboard'
import Home from '../protected/Home'

import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.provider'
import Admin from './../protected/Admin'

function AllRoutes() {
    const { authState: {user, role, permissions} } = useContext(AuthContext)

    return (
        <Routes>           
            <Route element={<PublicRoute />}>
                <Route path='/' element={<Landing />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/contact' element={<Contact />} />
            </Route>

            <Route element={<AuthRoute isAllowed={!!user}/>}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/home' element={<Home />} />
            </Route>

            <Route element={<AuthRoute isAllowed={!!user && role.includes('Admin')} />}>
                <Route path='/admin' element={<Admin />} />
            </Route>

            <Route path='/unauthorized' element={<Error503 />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes