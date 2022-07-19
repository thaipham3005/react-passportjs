import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Landing from '../public/Landing'
import LoginPage from '../auth/LoginPage'
import RegisterPage from '../auth/RegisterPage'
import Contact from '../public/Contact'
import Error404 from '../error/Error404'
import Error503 from '../error/Error503'
import Dashboard from '../protected/Dashboard'
import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.provider'


function AllRoutes() {
    const { authState: { user } } = useContext(AuthContext)
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/landing' element={<Landing />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/unauthorized' element={<Error503 />} />

            <Route path='/dashboard' element={
                <ProtectedRoute user={user}>
                    <Dashboard />
                </ProtectedRoute>
            } />

            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes