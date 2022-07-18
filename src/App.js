import { BrowserRouter, Routes } from 'react-router-dom'
import PublicRoutes from './pages/routes/PublicRoutes'
import {AuthContext} from './context/Auth.provider'
import { useContext } from 'react'
import ProtectedRoute from './pages/routes/ProtectedRoute'
import Dashboard from './pages/protected/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const { authState: { user } } = useContext(AuthContext)

  console.log(AuthContext)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <PublicRoutes />
        <ProtectedRoute to='/dashboard' element={<Dashboard />}></ProtectedRoute>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
