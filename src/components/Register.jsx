// src/components/Register.jsx
import React from "react";
import { Link } from 'react-router-dom';
import PreLoader from "../components/PreLoader";

const Register = () => {
  return (
    <>
     <PreLoader />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeInDown">📝 Register</h1>

      <div className="flex gap-4 mb-8 animate__animated animate__fadeInUp">
        <Link
          to="/register"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition"
        >
          Sign Up
        </Link>

        <Link
          to="/login"
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 shadow-md transition"
        >
          Sign In
        </Link>
      </div>

      <form className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-4 animate__animated animate__fadeInUp">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        

        <Link
          to="/login">
            <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Daftar Sekarang
        </button>
          </Link>


      </form>
    </div>

    </>
    
    
  );
 
};

export default Register;
