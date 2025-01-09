import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

const login = async (email, password) => {
//   const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log("From Service", email, password)

  try {
    const response = await axios.post(`http://184.72.200.110:3000/auth/login`, {
      email,
      password,
    });
    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error;
  }
};
export default { login };
