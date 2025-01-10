import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/loginService';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('Please provide correct email and password');
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
  
    try {
      const response = await loginService.login(email, password);
      console.log('Login response:', response);
  
      if (response.message === "login suucessful") {
        localStorage.setItem('authToken', response.token);
        navigate('/manage');
      } else {
        setErrorMessage('Please provide correct email and password');
        setShow(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Please provide correct email and password');
      setShow(true);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-6 text-center font-bold text-gray-700">Admin Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          {show && (
  <p className="text-red-500 text-center mt-4">{errorMessage}</p>
)}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
