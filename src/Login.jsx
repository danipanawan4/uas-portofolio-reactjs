// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PreLoader from "./components/PreLoader";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
  
      localStorage.setItem('isLoggedIn', true);
      navigate('/')};
    

  return (
    <>
    <PreLoader />

    <div className="text-dark min-h-screen flex items-center justify-center bg-zinc-500 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center text-indigo-600">Silahkan Login</h2>
        <div><h2>.</h2></div>
        <div></div>
        <input
          type="email"
          placeholder="Email..."
          className="mt -10 text-black w-full p-2 rounded-md bg-zinc-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          className="text-black w-full p-2 rounded-md bg-zinc-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div></div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
    </>
  );
}


export default Login;
