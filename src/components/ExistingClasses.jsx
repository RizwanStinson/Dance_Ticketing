import { useState, useEffect } from 'react';
import axios from 'axios';


const BASE_URL = 'http://localhost:8000';

function ExistingClasses() {
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingClass, setEditingClass] = useState(null); 
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/dance-classes`);
        const groupedClasses = response.data.data.reduce((acc, classItem) => {
          if (!acc[classItem.classType]) {
            acc[classItem.classType] = [];
          }
          acc[classItem.classType].push(classItem);
          return acc;
        }, {});
        setClasses(groupedClasses);
        setLoading(false);
      } catch (err) {
        setError('Error fetching classes');
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleEdit = async (classId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/dance-classes/${classId}`);
      const classDetails = response.data.data;

      setFormData(classDetails);
      setEditingClass(classId);
    } catch (err) {
      console.error('Error fetching class details:', err);
    }
  };

  const handleDelete = async (classId) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/dance-classes/${classId}`);
      alert('Class deleted successfully');
    } catch (err) {
      console.error('Error deleting class:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/api/v1/dance-classes/${formData._id}`, formData);
      alert('Class updated successfully');
      setEditingClass(null);
      setClasses((prevClasses) => {
        const updatedClasses = { ...prevClasses };
        const classType = formData.classType;
        updatedClasses[classType] = updatedClasses[classType].map((cls) =>
          cls._id === formData._id ? response.data.data : cls
        );
        return updatedClasses;
      });
    } catch (err) {
      console.error('Error updating class:', err);
    }
  };

  if (loading) {
    return <div className='text-black'>Loading Classes ....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Existing Classes</h2>
      {Object.entries(classes).map(([classType, classList]) => (
        <div key={classType} className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-black">{classType}</h3>
          <div className="bg-white shadow-md rounded overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {classList.map((cls) => (
                  <tr key={cls._id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {new Date(cls.classDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {`${new Date(cls.timeFrom).toLocaleTimeString()} - ${new Date(cls.timeTo).toLocaleTimeString()}`}
                    </td>
                    <td className="py-3 px-6 text-left">${(cls.ticketPrice).toFixed(2)}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleEdit(cls._id)}
                        className="text-blue-500 hover:text-blue-700 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(cls._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {editingClass && (
        <div className="mt-8 bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold mb-4 text-black">Edit Class</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="classType" className="block text-gray-700 text-sm font-bold mb-2">
                Class Type
              </label>
              <select
                id="classType"
                name="classType"
                value={formData.classType || ''}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="Private">Private</option>
                <option value="NYC/NJ Group">NYC/NJ Group</option>
                <option value="Online">Online</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="classDate" className="block text-gray-700 text-sm font-bold mb-2">
                Class Date
              </label>
              <input
                type="date"
                id="classDate"
                name="classDate"
                value={formData.classDate ? new Date(formData.classDate).toISOString().split('T')[0] : ''}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="timeFrom" className="block text-gray-700 text-sm font-bold mb-2">
                Time From
              </label>
              <input
                type="time"
                id="timeFrom"
                name="timeFrom"
                value={formData.timeFrom ? new Date(formData.timeFrom).toISOString().substr(11, 5) : ''}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="timeTo" className="block text-gray-700 text-sm font-bold mb-2">
                Time To
              </label>
              <input
                type="time"
                id="timeTo"
                name="timeTo"
                value={formData.timeTo ? new Date(formData.timeTo).toISOString().substr(11, 5) : ''}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="ticketPrice" className="block text-gray-700 text-sm font-bold mb-2">
                Ticket Price
              </label>
              <input
                type="number"
                id="ticketPrice"
                name="ticketPrice"
                value={formData.ticketPrice || ''}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditingClass(null)}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ExistingClasses;
