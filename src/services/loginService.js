import axios from 'axios';

const login = async (email, password) => {
  
  console.log("From Service", email, password)

  try {
    const response = await axios.post(`http://localhost:8000/api/v1/users/login`, {
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
