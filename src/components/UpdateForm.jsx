// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function UpdateForm() {
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle newsletter submission logic here
//     console.log('Sending newsletter:', { subject, body });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-black">
//       <h2 className="text-2xl font-bold mb-4">Send Newsletter</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
//           Subject
//         </label>
//         <input
//           type="text"
//           id="subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
//           Body
//         </label>
//         <ReactQuill
//           theme="snow"
//           value={body}
//           onChange={setBody}
//           className="bg-white"
//           modules={{
//             toolbar: [
//               [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//               [{size: []}],
//               ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//               [{'list': 'ordered'}, {'list': 'bullet'}, 
//                {'indent': '-1'}, {'indent': '+1'}],
//               ['link', 'image'],
//               ['clean']
//             ],
//           }}
//         />
//       </div>
//       <div className="flex items-center justify-center">
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Send Newsletter
//         </button>
//       </div>
//     </form>
//   );
// }

// export default UpdateForm;

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function UpdateForm() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [groupType, setGroupType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Date options for the dropdown
  const dateOptions = [
    "2025-01-10", "2025-01-15", "2025-01-20", "2025-01-25", "2025-01-30"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log('Sending update:', { subject, body, groupType, selectedDate });
  };

  const handleGroupTypeChange = (e) => {
    setGroupType(e.target.value);
    validateForm(e.target.value, selectedDate);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    validateForm(groupType, e.target.value);
  };

  const validateForm = (group, date) => {
    if (group && date) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-black">
      <h2 className="text-2xl font-bold mb-4">Send Newsletter</h2>
      
      {/* Dropdown for group type */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupType">
          Group Type
        </label>
        <select
          id="groupType"
          value={groupType}
          onChange={handleGroupTypeChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a group</option>
          <option value="nyc">NYC Group</option>
          <option value="private">Private</option>
          <option value="online">Online</option>
        </select>
      </div>

      {/* Dropdown for selecting dates */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <select
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a date</option>
          {dateOptions.map((date, index) => (
            <option key={index} value={date}>{date}</option>
          ))}
        </select>
      </div>

      {/* Subject input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* ReactQuill editor for the body */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Body
        </label>
        <ReactQuill
          theme="snow"
          value={body}
          onChange={setBody}
          className="bg-white"
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          }}
        />
      </div>

      {/* Submit button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}
        >
          Send Update
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
