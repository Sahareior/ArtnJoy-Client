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

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
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
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: 'enrolled',
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: 'classes',
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: 'users',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path:'addclass',
        element: <AddClass></AddClass>
      },
      {
        path:'myclass',
        element:<Myclass></Myclass>
      }
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MyProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </MyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
