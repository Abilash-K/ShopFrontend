import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../features/admin/adminSlice';
import { AppDispatch } from '../store';

const AdminLogin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // State for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset any previous errors

    // Validation: Check if email and password are empty
    if (!email.trim() || !password.trim()) {
      setError('Email and Password are required.');
      return;
    }

    // Call the login API
    const result = await dispatch(adminLogin({ email, password }));
    if (adminLogin.fulfilled.match(result)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EE696B] to-[#523A78] flex items-center justify-center p-4">
      {/* Card Container */}
      <div style={{ backgroundColor: '#E5E7EB' }} className="p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="Admin Logo"
            className="mx-auto w-16 h-16"
          />
          <h1 className="text-3xl font-bold mt-2 text-gray-600">
            Admin Login
          </h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-sm mb-4 text-center">
            <p className='text-[#b61616]'>{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#191919] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              placeholder="admin@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-[#191919] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#6C5CE7] text-white font-semibold rounded-md hover:bg-[#5A4DC8] transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
