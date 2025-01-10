import axios from 'axios';

const BASE_URL = 'http://localhost:8000';


const postClass = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/dance-classes`);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching class:',
      error.response?.data || error.message || 'Unknown error occurred.'
    );
    throw error;
  }
};

export default postClass;
