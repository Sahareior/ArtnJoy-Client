
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Nav = () => {
    const {logout,user} = useAuth()

    return (
        <div  className="navbar fixed text-white max-w-screen-2xl z-10  bg-opacity-30 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className=" normal-case text-xl"><img className='w-24' src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/crest.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
        
            <li><Link to='/dashboard'>DashBoard</Link></li>
            <li><Link to='/class'>Classes</Link></li>
            <li><Link to='/ins'>Instructors</Link></li>
          </ul>
        </div>
        <div className="navbar-end text-black gap-7">
          {/* <a className=""><FaInstagram /></a>
          <a className=""><FaYoutube /></a>
          <a className=""><FaFacebook /></a> */}
              <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
       
       {
        user?  <li onClick={logout}><a>Logout</a></li> :  <li><Link to='/login'>Login</Link></li>
       }
      </ul>
    </div>
        </div>
      </div>
    );
};

export default Nav;

