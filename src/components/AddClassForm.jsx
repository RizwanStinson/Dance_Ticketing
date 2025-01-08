// import React, { useState } from 'react';
// import classService from '../services/classService';

// function AddClassForm() {
//   const [classType, setClassType] = useState('');
//   const [date, setDate] = useState('');
//   const [timeFrom, setTimeFrom] = useState('');
//   const [timeTo, setTimeTo] = useState('');
//   const [ticketPrice, setTicketPrice] = useState('');
//   const [venue, setVenue] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const classData = {
//       classType,
//       date,
//       timeFrom,
//       timeTo,
//       ticketPrice,
//       venue,
//       quantity,
//       description,
//     };
//     console.log('Class added:', classData);
//     // Call your service here to send `classData`
//      const response = await classService.postClass(classData);
//      console.log('Class added:', response);
//   };


//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classType">
//           Class Type
//         </label>
//         <select
//           id="classType"
//           value={classType}
//           onChange={(e) => setClassType(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         >
//           <option value="">Select a class type</option>
//           <option value="NYC/NJ Group">NYC/NJ Group</option>
//           <option value="Private">Private</option>
//           <option value="Online">Online</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
//           Date
//         </label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="flex mb-4">
//         <div className="w-1/2 pr-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeFrom">
//             Time From
//           </label>
//           <input
//             type="time"
//             id="timeFrom"
//             value={timeFrom}
//             onChange={(e) => setTimeFrom(e.target.value)}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="w-1/2 pl-2">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeTo">
//             Time To
//           </label>
//           <input
//             type="time"
//             id="timeTo"
//             value={timeTo}
//             onChange={(e) => setTimeTo(e.target.value)}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketPrice">
//           Ticket Price
//         </label>
//         <input
//           type="number"
//           id="ticketPrice"
//           value={ticketPrice}
//           onChange={(e) => setTicketPrice(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Price in USD"
//           required
//         />
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="venue">
//           Venue
//         </label>
//         <input
//           type="text"
//           id="venue"
//           value={venue}
//           onChange={(e) => setVenue(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Venue Name"
//           required
//         />
//       </div>
      
//       {/* Quantity */}
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
//           Quantity
//         </label>
//         <input
//           type="number"
//           id="quantity"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Available Slots"
//           required
//         />
//       </div>
      
//       {/* Description */}
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//           Description
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Class Description"
//           rows="4"
//           required
//         />
//       </div>
//       </div>
//       <div className="flex items-center justify-center">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Post Class
//         </button>
//       </div>
//     </form>
//   );
// }

// export default AddClassForm;

// import React, { useState } from 'react';
// import postClass from '../services/classService';

// function AddClassForm() {
//   const [classType, setClassType] = useState('');
//   const [classDate, setDate] = useState('');
//   const [timeFrom, setTimeFrom] = useState('');
//   const [timeTo, setTimeTo] = useState('');
//   const [ticketPrice, setTicketPrice] = useState('');
//   const [venue, setVenue] = useState('');
//   const [ticketQuantity, setQuantity] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const formatDate = (classDate) => {
//     const d = new Date(date);
//     const month = String(d.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
//     const day = String(d.getDate()).padStart(2, '0');
//     const year = d.getFullYear();
    
//     return `${month}/${day}/${year}`;
//   };

//   const formattedDate = formatDate(date);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const classData = {
//       classType,
//       classDate: formattedDate,
//       timeFrom,
//       timeTo,
//       venue,
//       description,
//       ticketPrice,
//       ticketQuantity,
      
//     };
//     console.log("submit", classData)
//     const response = await postClass(classData);
//     console.log("response", response)
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//       {/* Class Type */}
//       <div className="mb-4">
//         <label htmlFor="classType" className="block text-gray-700 text-sm font-bold mb-2">
//           Class Type
//         </label>
//         <select
//           id="classType"
//           value={classType}
//           onChange={(e) => setClassType(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         >
//           <option value="">Select a class type</option>
//           <option value="NYC/NJ Group">NYC/NJ Group</option>
//           <option value="Private">Private</option>
//           <option value="Online">Online</option>
//         </select>
//       </div>

//       {/* Other Inputs */}
//       <div className="mb-4">
//         <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
//           Date
//         </label>
//         <input
//           type="date"
//           id="date"
//           value={classDate}
//           onChange={(e) => setDate(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>

//       {/* Time Inputs */}
//       <div className="flex mb-4">
//         <div className="w-1/2 pr-2">
//           <label htmlFor="timeFrom" className="block text-gray-700 text-sm font-bold mb-2">
//             Time From
//           </label>
//           <input
//             type="time"
//             id="timeFrom"
//             value={timeFrom}
//             onChange={(e) => setTimeFrom(e.target.value)}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="w-1/2 pl-2">
//           <label htmlFor="timeTo" className="block text-gray-700 text-sm font-bold mb-2">
//             Time To
//           </label>
//           <input
//             type="time"
//             id="timeTo"
//             value={timeTo}
//             onChange={(e) => setTimeTo(e.target.value)}
//             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//       </div>

//       {/* Ticket Price */}
//       <div className="mb-4">
//         <label htmlFor="ticketPrice" className="block text-gray-700 text-sm font-bold mb-2">
//           Ticket Price
//         </label>
//         <input
//           type="number"
//           id="ticketPrice"
//           value={ticketPrice}
//           onChange={(e) => setTicketPrice(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Price in USD"
//           required
//         />
//       </div>

//       {/* Venue */}
//       <div className="mb-4">
//         <label htmlFor="venue" className="block text-gray-700 text-sm font-bold mb-2">
//           Venue
//         </label>
//         <input
//           type="text"
//           id="venue"
//           value={venue}
//           onChange={(e) => setVenue(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Venue Name"
//           required
//         />
//       </div>

//       {/* Quantity */}
//       <div className="mb-4">
//         <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
//           Quantity
//         </label>
//         <input
//           type="number"
//           id="quantity"
//           value={ticketQuantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Available Slots"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="mb-6">
//         <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
//           Description
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           placeholder="Class Description"
//           rows="4"
//           required
//         />
//       </div>

//       {/* Error Message */}
//       {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

//       {/* Submit Button */}
//       <div className="flex items-center justify-center">
//         <button
//           type="submit"
//           className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
//           disabled={loading}
//         >
//           {loading ? 'Posting...' : 'Post Class'}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default AddClassForm;


import React, { useState } from 'react';
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

  // Format date to MM/DD/YYYY
  const formatDate = (classDate) => {
    const d = new Date(classDate);
    const month = String(d.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    
    return `${month}/${day}/${year}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when form is submitted
    setError(null);    // Reset error

    try {
      const formattedDate = formatDate(classDate);  // Format the date here
      const now = new Date();
      const timeFromDate = new Date(now.toDateString() + ' ' + timeFrom); // Combine today's date with timeFrom
      const timeToDate = new Date(now.toDateString() + ' ' + timeTo);

      const classData = {
        classType,
        classDate: formattedDate,  // Use the formatted date
        timeFrom: timeFromDate.toISOString(),  // Convert to ISO string format
        timeTo: timeToDate.toISOString(),
        venue,
        description,
        ticketPrice,
        ticketQuantity,
      };

      console.log("submit", classData);
      const response = await postClass(classData);
      console.log("response", response);
      setLoading(false);  // Reset loading state after request
    } catch (error) {
      setError('Failed to post the class');  // Set error message if post fails
      setLoading(false);  // Reset loading state after error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      {/* Class Type */}
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

      {/* Date Input */}
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

      {/* Time Inputs */}
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

      {/* Ticket Price */}
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

      {/* Venue */}
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

      {/* Quantity */}
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

      {/* Description */}
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

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Class'}
        </button>
      </div>
    </form>
  );
}

export default AddClassForm;
