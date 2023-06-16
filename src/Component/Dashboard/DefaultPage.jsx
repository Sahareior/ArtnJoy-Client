import React from 'react';
import useUsers from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';

const DefaultPage = () => {
    const{user} = useAuth()
    const [users] = useUsers()
  
    const email = user?.email 
    const isExists = users.find(data => data.email == email)

    const admin = isExists?.role === 'admin'
    const instructor = isExists?.instructor === 'yes'


  return (
    <div className="flex items-center w-full justify-center h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center">
        {admin && <h1 className="text-4xl font-bold text-white mb-6">Welcome Home Boss</h1>}
        {instructor && <h1 className="text-4xl font-bold text-white mb-6">Welcome Home Insructor </h1>}
        {
            !admin && !instructor && <h1 className="text-4xl font-bold text-white mb-6">Welcome to the Dashboard</h1>
        }
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default DefaultPage;
