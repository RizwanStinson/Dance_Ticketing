import axios from 'axios';

const BASE_URL = 'http://localhost:8000';


const postClass = async (classData) => {
  try {
    const token = localStorage.getItem('authToken');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Service called with data:', classData);
    const response = await axios.post(`${BASE_URL}/api/v1/dance-classes`, classData, { headers });
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

export default postClass;
