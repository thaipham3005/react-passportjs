import { Route, Navigate } from 'react-router-dom'


function ProtectedRoute({ user, children }) {
if (!user) {
    return <Navigate to="/unauthorized" replace />
}
    return children
    
}

export default ProtectedRoute
