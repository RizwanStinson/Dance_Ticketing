import { useState } from 'react';
import postClass from '../services/classService';

function AddClassForm() {
  const [classType, setClassType] = useState('');
  const [classDate, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [venue, setVenue] = useState('');
  const [ticketQuantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');


  const formatDate = (classDate) => {
    const d = new Date(classDate);
    const month = String(d.getMonth() + 1).padStart(2, '0'); 
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    
    return `${month}/${day}/${year}`;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);    

    try {
      const formattedDate = formatDate(classDate);  
      const now = new Date();
      const timeFromDate = new Date(now.toDateString() + ' ' + timeFrom); 
      const timeToDate = new Date(now.toDateString() + ' ' + timeTo);

      const classData = {
        classType,
        classDate: formattedDate,  
        timeFrom: timeFromDate.toISOString(),  
        timeTo: timeToDate.toISOString(),
        venue,
        description,
        ticketPrice,
        ticketQuantity,
      };

      console.log("submit", classData);
      const response = await postClass(classData);
      console.log("response", response);
      if (response.message === "dance class created successfully") {
        setSuccessMessage('Class created successfully');
      }
    
      setLoading(false);  
    } catch (error) {
      setError(error);  
      setLoading(false);  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      
      <div className="mb-4">
        <label htmlFor="classType" className="block text-gray-700 text-sm font-bold mb-2">
          Class Type
        </label>
        <select
          id="classType"
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a class type</option>
          <option value="NYC/NJ Group">NYC/NJ Group</option>
          <option value="Private">Private</option>
          <option value="Online">Online</option>
        </select>
      </div>


      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={classDate}
          onChange={(e) => setDate(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

  
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="timeFrom" className="block text-gray-700 text-sm font-bold mb-2">
            Time From
          </label>
          <input
            type="time"
            id="timeFrom"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="timeTo" className="block text-gray-700 text-sm font-bold mb-2">
            Time To
          </label>
          <input
            type="time"
            id="timeTo"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>

    
      <div className="mb-4">
        <label htmlFor="ticketPrice" className="block text-gray-700 text-sm font-bold mb-2">
          Ticket Price
        </label>
        <input
          type="number"
          id="ticketPrice"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Price in USD"
          required
        />
      </div>

    
      <div className="mb-4">
        <label htmlFor="venue" className="block text-gray-700 text-sm font-bold mb-2">
          Venue
        </label>
        <input
          type="text"
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Venue Name"
          required
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={ticketQuantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Available Slots"
          required
        />
      </div>

  
      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Class Description"
          rows="4"
          required
        />
      </div>

     
      {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

  
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Class'}
        </button>
      </div>
      {successMessage && (
  <p className="text-green-500 text-center mt-4">{successMessage}</p>
)}

    </form>
  );
}

export default AddClassForm;
