// import axios from 'axios';

// export const postClass = async (classData) => {
//     console.log("service:", classData)
//   try {
//     const response = await axios.post(`http://184.72.200.110:3000/api/v1/classes/new`, classData);
//     console.log('Class Post:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error Response:', error.response?.data || error.message);
//     throw error;
//   }
// };

import axios from 'axios';

// Hardcoded base URL
const BASE_URL = 'http://184.72.200.110:3000';

// Service function to post a new class
const postClass = async (classData) => {
  try {
    const token = localStorage.getItem('authToken');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Service called with data:', classData);
    const response = await axios.post(`${BASE_URL}/api/v1/classes/new`, classData, { headers });
    console.log('Class posted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error posting class:',
      error.response?.data || error.message || 'Unknown error occurred.'
    );
    throw error;
  }
};

// Default export
export default postClass;
