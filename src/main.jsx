import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx';
import './index.css';
import Home from './Component/Routes/Home.jsx';
import Instructor from './Component/Pages/Instructor.jsx';
import Main from './Component/Routes/Main.jsx';
import Classes from './Component/Pages/Classes.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import SelectedClasses from './Component/Dashboard/Student/SelectedClasses.jsx';
import EnrolledClasses from './Component/Dashboard/Student/EnrolledClasses.jsx';
import MyProvider from './Component/Provider/MyProvider.jsx';
import Reg from './Component/Authentications/Reg.jsx';
import Login from './Component/Authentications/Login.jsx';
import ManageClasses from './Component/Dashboard/Admin/ManageClasses.jsx';
import ManageUsers from './Component/Dashboard/Admin/ManageUsers.jsx';
import AddClass from './Component/Dashboard/Instructor/AddClass.jsx';
import Myclass from './Component/Dashboard/Instructor/Myclass.jsx';
import Feedback from './Component/Dashboard/Admin/Feedback.jsx';
import AdminRoute from './Component/Routes/AdminRoute.jsx';
import InstructorRoute from './Component/Routes/InstructorRoute.jsx';
import Checkout from './Component/Dashboard/Payments/Checkout.jsx';
import Update from './Component/Dashboard/Instructor/Update.jsx';
import PrivateRoute from './Component/Routes/PrivateRoute.jsx';
import PaymentHistory from './Component/Dashboard/Student/PaymentHistory.jsx';
import ErrorPage from './Component/Routes/ErrorPage.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'ins',
        element: <Instructor></Instructor>,
      },
      {
        path: 'class',
        element: <Classes></Classes>,
      },
      {
        path: 'reg',
        element: <Reg></Reg>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selected',
        element: <PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>,
      },
      {
        path: 'enrolled',
        element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>,
      },
      {
        path:'history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'classes',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
      },
      {
        path: 'users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
      {
        path:'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path:'myclass',
        element:<InstructorRoute><Myclass></Myclass></InstructorRoute>
      },
      {
        path:'feedback',
        element:<Feedback></Feedback>
      },
      {
        path:'update',
        element:<Update></Update>
      }
    ],
  },
  {
    path:'checkout',
    element:<Checkout></Checkout>
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <div className='w-[1240px] mx-auto'>
    <QueryClientProvider client={queryClient}>
      <MyProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </MyProvider>
    </QueryClientProvider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
