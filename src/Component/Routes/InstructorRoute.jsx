import { Vortex } from  'react-loader-spinner'
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const{user,loading} = useAuth()
    const [admin, Adminloading] = useAdmin()

    


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
    if(user && admin[0]?.instructor==='yes'){
      return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;