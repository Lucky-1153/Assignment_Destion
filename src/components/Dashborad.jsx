import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-800 text-white shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-bold text-center">App Name</h2>
          <nav className="mt-6">
            <ul>
              <li>
                <Link to="/dashboard" className="block p-2 hover:bg-gray-200 hover:text-black rounded">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile" className="block p-2 hover:bg-gray-200 hover:text-black rounded">Profile</Link>
              </li>
              <li>
                <Link to="/settings" className="block p-2 hover:bg-gray-200 hover:text-black rounded">Settings</Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div>
            <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
              Profile
            </button>
            <button 
            onClick={() => navigate("/login")}
            className="ml-2 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300">
              Logout
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="mt-4 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard!</h2>
          <p className="text-gray-700">
            This is  dashboard 
          </p>
         
        </main>
      </div>
    </div>
  

  );
};

export default Dashboard
