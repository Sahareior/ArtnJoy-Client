
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Vortex } from  'react-loader-spinner'
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{user,loading} = useAuth()
    const [admin, Adminloading] = useAdmin()
    const location = useLocation()
    


    if(loading || Adminloading)
    {
      return  <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
    }
    if(user && admin[0]?.role ==='admin'){
      return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default AdminRoute;