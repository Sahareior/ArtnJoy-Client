
import { Link, Outlet } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import { FaBeer, FaBookOpen, FaBookReader, FaBookmark, FaDAndDBeyond, FaEdit, FaMoneyCheck, FaUsers } from 'react-icons/fa';


const Dashboard = () => {
  
  const { user } = useAuth();
  const [users] = useUsers();
  const userEmail = user?.email;
  const isExist =  Array.isArray(users) && users.find((data) => data.email === userEmail);
  const role = isExist?.role;
  const isInstructor = isExist?.instructor === 'yes';
  useEffect(() => {
    document.title = "Dashboard"; // Update the title here
  }, []);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button hidden sm:visible">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {role === 'admin' && (
              <div>
                <li>
                  <Link to="/dashboard/classes"><FaBookOpen></FaBookOpen> Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/users"><FaUsers></FaUsers> Manage users</Link>
                </li>
              </div>
            )}
            {isInstructor && (
              <div>
                <li>
                  <Link to="/dashboard/addclass"><FaEdit></FaEdit> Add a class</Link>
                </li>
                <li>
                  <Link to="/dashboard/myclass"><FaBookReader></FaBookReader> My Classes</Link>
                </li>
              </div>
            )}
            {role !== 'admin' && !isInstructor && (
              <div>
                <li>
                  <Link to="/dashboard/selected"><FaBookmark></FaBookmark> My Selected Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolled"><FaDAndDBeyond></FaDAndDBeyond> My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/history"><FaMoneyCheck></FaMoneyCheck> My Payments</Link>
                </li>
              </div>
            )}
            <li>
            <Link to='/'><h1>Back to the main page</h1></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
