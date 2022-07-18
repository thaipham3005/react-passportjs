import { Route } from 'react-router-dom'

import Landing from '../public/Landing'
import Contact from '../public/Contact'
import LoginPage from '../auth/LoginPage'
import RegisterPage from '../auth/RegisterPage'
import Error404 from './../error/Error404'
import Error503 from './../error/Error503'

function PublicRoutes() {
    return (
        <Route>
            <Route to='/auth/login' element={<LoginPage/>} />
            <Route to='/auth/register' element={<RegisterPage/>} />
            <Route to='/landing' element={<Landing />} />
            <Route to='/contact' element={<Contact />} />
            <Route to='/Error503' element={Error503} />
            <Route to='*' element={Error404} />
        </Route>
    )
}

export default PublicRoutes