
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{user,loading} = useAuth()
    const [admin, Adminloading] = useAdmin()
    const location = useLocation()
    


    if(loading || Adminloading)
    {
      return  <p>Loading.........</p>
    }
    if(user && admin[0]?.role ==='admin'){
      return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default AdminRoute;