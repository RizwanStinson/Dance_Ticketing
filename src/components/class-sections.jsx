// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { Minus, Plus } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export const classData = {
//   nyc: [
//     {
//       id: 2,
//       date: "January 22, 2024",
//       time: "19:00 - 20:30",
//       basePrice: 3000,
//       eventName: "NYC Yoga Flow",
//       eventDescription:
//         "A dynamic class combining movement and mindfulness, perfect for intermediate-level yoga enthusiasts.",
//       venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
//     },
//     {
//       id: 3,
//       date: "January 29, 2024",
//       time: "19:00 - 20:30",
//       basePrice: 3000,
//       eventName: "NYC Power Yoga",
//       eventDescription:
//         "An energizing class that builds strength and flexibility through challenging poses and sequences.",
//       venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
//     },
//   ],
//   private: [
//     {
//       id: 4,
//       date: "January 16, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//     {
//       id: 5,
//       date: "January 23, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//     {
//       id: 6,
//       date: "January 30, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//   ],
//   online: [
//     {
//       id: 7,
//       date: "January 17, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Yoga for Beginners",
//       eventDescription:
//         "A virtual class introducing yoga basics, perfect for those new to yoga or looking to refresh their practice.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//     {
//       id: 8,
//       date: "January 24, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Intermediate Yoga",
//       eventDescription:
//         "An engaging online session that focuses on building strength and flexibility through intermediate yoga poses.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//     {
//       id: 9,
//       date: "January 31, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Yoga Flow",
//       eventDescription:
//         "A virtual class offering a seamless flow of yoga sequences, ideal for relaxation and mindfulness.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//   ],
// };

// export function ClassSections() {
//   const [activeSection, setActiveSection] = useState("nyc");
//   const [ticketQuantities, setTicketQuantities] = useState({});

//   const updateTicketQuantity = (id, delta) => {
//     setTicketQuantities((prev) => {
//       const currentQuantity = prev[id] || 1;
//       const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
//       return { ...prev, [id]: newQuantity };
//     });
//   };

//   const getTicketQuantity = (id) => ticketQuantities[id] || 1;

//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);

//   return (
//     <section className="py-20" id="class">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-start md:items-center gap-12">
//           {/* Navigation Buttons */}
//           <div className="grid grid-cols-3  gap-4 w-full max-w-[800px]">
//             {[
//               { id: 'nyc', label: 'NYC/NJ Group' },
//               { id: 'private', label: 'Private' },
//               { id: 'online', label: 'Online' },
//             ].map((section) => (
//               <button
//                 key={section.id}
//                 className={`text-[15px] md:text-lg py-6  border-b-2 ${
//                   activeSection === section.id
//                     ? 'text-[#64ffda] border-[#64ffda]'
//                     : 'text-[#64ffda]/60 border-transparent hover:text-[#64ffda]'
//                 }`}
//                 onClick={() => setActiveSection(section.id)}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>

//           {/* Class Details */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="w-full max-w-3xl"
//             >
//               <div className="gap-4 flex flex-wrap justify-center">
//                 {classData[activeSection].map((classItem, index) => (
//                   <motion.div
//                     key={classItem.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors w-full"
//                   >
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                       {/* edit here  */}
//                       {/* Class Details */}
//                       <div className="text-center md:text-left">
//                         <h3 className="text-white text-lg font-medium">
//                           {classItem.date}
//                         </h3>
//                         <p className="text-white/60">{classItem.time}</p>
//                       </div>
//                       {/* Ticket Quantity Control */}
//                       <div className="flex items-center gap-2 bg-blue-400/20 rounded-lg p-2">
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-500 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, -1)}
//                         >
//                           <Minus className="h-4 w-4" />
//                         </button>
//                         <span className="text-white font-medium min-w-[2rem] text-center">
//                           {getTicketQuantity(classItem.id)}
//                         </span>
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, 1)}
//                         >
//                           <Plus className="h-4 w-4" />
//                         </button>
//                       </div>
//                       {/* Price and Booking Button */}
//                       <div className="flex flex-col items-end">
//                         <p className="text-blue-400 text-lg font-bold pr-5">
//                           {formatPrice(
//                             classItem.basePrice *
//                               getTicketQuantity(classItem.id)
//                           )}
//                         </p>
//                         {/* <Link to={`/class/${activeSection}-${classItem.id}`} className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md">
//                         Book Now
//                       </Link> */}
//                         <Link
//                           to={{
//                             pathname: `/class/${activeSection}-${classItem.id}`,
//                             state: {
//                               amount:
//                                 classItem.basePrice *
//                                 getTicketQuantity(classItem.id), // Pass the updated total price
//                               quantity: getTicketQuantity(classItem.id), // Pass selected quantity
//                             },
//                           }}
//                           className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
//                         >
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   )
// }

//final 

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { Minus, Plus } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";


// export const classData = {
//   nyc: [
//     {
//       id: 2,
//       date: "January 22, 2024",
//       time: "19:00 - 20:30",
//       basePrice: 3000,
//       eventName: "NYC Yoga Flow",
//       eventDescription:
//         "A dynamic class combining movement and mindfulness, perfect for intermediate-level yoga enthusiasts.",
//       venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
//     },
//     {
//       id: 3,
//       date: "January 29, 2024",
//       time: "19:00 - 20:30",
//       basePrice: 3000,
//       eventName: "NYC Power Yoga",
//       eventDescription:
//         "An energizing class that builds strength and flexibility through challenging poses and sequences.",
//       venue: "Yoga Studio NYC, 123 Main Street, New York, NY",
//     },
//   ],
//   private: [
//     {
//       id: 4,
//       date: "January 16, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//     {
//       id: 5,
//       date: "January 23, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//     {
//       id: 6,
//       date: "January 30, 2024",
//       time: "By appointment",
//       basePrice: 5000,
//       eventName: "Private Yoga Session",
//       eventDescription:
//         "A personalized yoga session tailored to your individual needs and goals, available by appointment.",
//       venue: "Client's Preferred Location",
//     },
//   ],
//   online: [
//     {
//       id: 7,
//       date: "January 17, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Yoga for Beginners",
//       eventDescription:
//         "A virtual class introducing yoga basics, perfect for those new to yoga or looking to refresh their practice.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//     {
//       id: 8,
//       date: "January 24, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Intermediate Yoga",
//       eventDescription:
//         "An engaging online session that focuses on building strength and flexibility through intermediate yoga poses.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//     {
//       id: 9,
//       date: "January 31, 2024",
//       time: "20:00 - 21:30",
//       basePrice: 2000,
//       eventName: "Online Yoga Flow",
//       eventDescription:
//         "A virtual class offering a seamless flow of yoga sequences, ideal for relaxation and mindfulness.",
//       venue: "Zoom (Link provided upon registration)",
//     },
//   ],
// };

// export function ClassSections() {
//   const [activeSection, setActiveSection] = useState("nyc");
//   const [ticketQuantities, setTicketQuantities] = useState({});

//   const updateTicketQuantity = (id, delta) => {
//     setTicketQuantities((prev) => {
//       const currentQuantity = prev[id] || 1;
//       const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
//       return { ...prev, [id]: newQuantity };
//     });
//   };

//   const getTicketQuantity = (id) => ticketQuantities[id] || 1;



//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);

//   return (
//     <section className="py-20" id="class">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-start md:items-center gap-12">
//           {/* Navigation Buttons */}
//           <div className="grid grid-cols-3  gap-4 w-full max-w-[800px]">
//             {[
//               { id: 'nyc', label: 'NYC/NJ Group' },
//               { id: 'private', label: 'Private' },
//               { id: 'online', label: 'Online' },
//             ].map((section) => (
//               <button
//                 key={section.id}
//                 className={`text-[15px] md:text-lg py-6  border-b-2 ${
//                   activeSection === section.id
//                     ? 'text-[#64ffda] border-[#64ffda]'
//                     : 'text-[#64ffda]/60 border-transparent hover:text-[#64ffda]'
//                 }`}
//                 onClick={() => setActiveSection(section.id)}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>

//           {/* Class Details */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="w-full max-w-3xl"
//             >
//               <div className="gap-4 flex flex-wrap justify-center">
//                 {classData[activeSection].map((classItem, index) => (
//                   <motion.div
//                     key={classItem.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors w-full"
//                   >
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                       {/* edit here  */}
//                       {/* Class Details */}
//                       <div className="text-center md:text-left">
//                         <h3 className="text-white text-lg font-medium">
//                           {classItem.date}
//                         </h3>
//                         <p className="text-white/60">{classItem.time}</p>
//                       </div>
//                       {/* Ticket Quantity Control */}
//                       <div className="flex items-center gap-2 bg-blue-400/20 rounded-lg p-2">
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-500 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, -1)}
//                         >
//                           <Minus className="h-4 w-4" />
//                         </button>
//                         <span className="text-white font-medium min-w-[2rem] text-center">
//                           {getTicketQuantity(classItem.id)}
//                         </span>
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, 1)}
//                         >
//                           <Plus className="h-4 w-4" />
//                         </button>
//                       </div>
//                       {/* Price and Booking Button */}
//                       <div className="flex flex-col items-end">
//                         <p className="text-blue-400 text-lg font-bold pr-5">
//                           {formatPrice(
//                             classItem.basePrice *
//                               getTicketQuantity(classItem.id)
//                           )}
//                         </p>
//                         {/* <Link to={`/class/${activeSection}-${classItem.id}`} className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md">
//                         Book Now
//                       </Link> */}
//                         <Link
//                           to={`/class/${activeSection}-${classItem.id}`}
//                           state={{
//                             amount:
//                               classItem.basePrice *
//                               getTicketQuantity(classItem.id),
//                             quantity: getTicketQuantity(classItem.id),
//                           }}
//                           className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
//                         >
//                           Book Now
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   )
// }

// import  { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Minus, Plus } from 'lucide-react';
// import { Link } from "react-router-dom";
// import allClassService from '../services/allClassService';
// import { transformClassData } from '../utils/transformClassData';

// export let classData = null;

// export function ClassSections() {
//   const [activeSection, setActiveSection] = useState("nyc");
//   const [ticketQuantities, setTicketQuantities] = useState({});
//   const [classData, setClassData] = useState(null);

//   useEffect(() => {
//     const fetchClassData = async () => {
//       try {
//         const apiResponse = await allClassService();
//         console.log("API Response:", apiResponse);
//         const transformedData = transformClassData(apiResponse.data);
//         console.log("transformedData:", transformedData);
//         setClassData(transformedData);
//         classData = transformedData; // Update the exported classData
//       } catch (error) {
//         console.error("Error fetching class data:", error);
//       }
//     };

//     fetchClassData();
//   }, []);

//   const updateTicketQuantity = (id, delta) => {
//     setTicketQuantities((prev) => {
//       const currentQuantity = prev[id] || 1;
//       const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
//       return { ...prev, [id]: newQuantity };
//     });
//   };

//   const getTicketQuantity = (id) => ticketQuantities[id] || 1;

//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);

//   return (
//     <section className="py-20" id="class">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-start md:items-center gap-12">
//           {/* Navigation Buttons */}
//           <div className="grid grid-cols-3  gap-4 w-full max-w-[800px]">
//             {[
//               { id: 'nyc', label: 'NYC/NJ Group' },
//               { id: 'private', label: 'Private' },
//               { id: 'online', label: 'Online' },
//             ].map((section) => (
//               <button
//                 key={section.id}
//                 className={`text-[15px] md:text-lg py-6  border-b-2 ${
//                   activeSection === section.id
//                     ? 'text-[#64ffda] border-[#64ffda]'
//                     : 'text-[#64ffda]/60 border-transparent hover:text-[#64ffda]'
//                 }`}
//                 onClick={() => setActiveSection(section.id)}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>

//           {/* Class Details */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="w-full max-w-3xl"
//             >
//               <div className="gap-4 flex flex-wrap justify-center">
//                 {classData && classData[activeSection].map((classItem, index) => (
//                   <motion.div
//                     key={classItem.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors w-full"
//                   >
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                       {/* Class Details */}
//                       <div className="text-center md:text-left">
//                         <h3 className="text-white text-lg font-medium">
//                           {classItem.date}
//                         </h3>
//                         <p className="text-white/60">{classItem.time}</p>
//                       </div>
//                       {/* Ticket Quantity Control */}
//                       <div className="flex items-center gap-2 bg-blue-400/20 rounded-lg p-2">
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-500 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, -1)}
//                         >
//                           <Minus className="h-4 w-4" />
//                         </button>
//                         <span className="text-white font-medium min-w-[2rem] text-center">
//                           {getTicketQuantity(classItem.id)}
//                         </span>
//                         <button
//                           className="h-8 w-8 flex items-center justify-center rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/30"
//                           onClick={() => updateTicketQuantity(classItem.id, 1)}
//                         >
//                           <Plus className="h-4 w-4" />
//                         </button>
//                       </div>
//                       {/* Price and Booking Button */}
//                       <div className="flex flex-col items-end">
//                         <p className="text-blue-400 text-lg font-bold pr-5">
//                           {formatPrice(
//                             classItem.basePrice *
//                               getTicketQuantity(classItem.id)
//                           )}
//                         </p>
//                         <Link
//   to={`/class/${classItem.id}`}
//   state={{
//     amount: classItem.basePrice * getTicketQuantity(classItem.id), // Total price
//     quantity: getTicketQuantity(classItem.id), // Number of tickets
//     basePrice: classItem.basePrice, // Base price per ticket
//     id: classItem.id, // Class ID
//     date: classItem.date, // Event date (optional)
//     time: classItem.time, // Event time (optional)
//   }}
//   className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
// >
//   Book Now
// </Link>

//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Function to get the current classData
// export const getClassData = () => classData;


import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from 'lucide-react';
import { Link } from "react-router-dom";
import allClassService from '../services/allClassService';
import { transformClassData } from '../utils/transformClassData';

export let classData = null;

export function ClassSections() {
  const [activeSection, setActiveSection] = useState(null);
  const [ticketQuantities, setTicketQuantities] = useState({});
  const [classData, setClassData] = useState(null);
  const [classTypes, setClassTypes] = useState([]);

  // useEffect(() => {
  //   const fetchClassData = async () => {
  //     try {
  //       const apiResponse = await allClassService();
  //       console.log("API Response:", apiResponse);
  //       const transformedData = transformClassData(apiResponse.data);
  //       console.log("transformedData:", transformedData);

  //       // Extract unique class types
  //       const types = Object.keys(transformedData);
  //       setClassTypes(types);

  //       // Set the default active section to the first class type
  //       setActiveSection(types[0]);

  //       setClassData(transformedData);
  //       classData = transformedData; // Update the exported classData
  //     } catch (error) {
  //       console.error("Error fetching class data:", error);
  //     }
  //   };

  //   fetchClassData();
  // }, []);
  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const apiResponse = await allClassService();
        console.log("API Response:", apiResponse);
        const transformedData = transformClassData(apiResponse.data);
        console.log("transformedData:", transformedData);
  
        // Extract unique class types
        const types = Object.keys(transformedData);
        setClassTypes(types);
  
        // Set the default active section to the first class type
        setActiveSection(types[0]);
  
        // Update the classData state
        setClassData(transformedData);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };
  
    fetchClassData();
  }, []);
  console.log("----------",classData)
  const updateTicketQuantity = (id, delta) => {
    setTicketQuantities((prev) => {
      const currentQuantity = prev[id] || 1;
      const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
      return { ...prev, [id]: newQuantity };
    });
  };

  const getTicketQuantity = (id) => ticketQuantities[id] || 1;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <section className="py-20" id="class">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start md:items-center gap-12">
          {/* Navigation Buttons */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-[800px]">
            {classTypes.map((type) => (
              <button
                key={type}
                className={`text-[15px] md:text-lg py-6 border-b-2 ${
                  activeSection === type
                    ? 'text-[#64ffda] border-[#64ffda]'
                    : 'text-[#64ffda]/60 border-transparent hover:text-[#64ffda]'
                }`}
                onClick={() => setActiveSection(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Class Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-3xl"
            >
              <div className="gap-4 flex flex-wrap justify-center">
                {classData && classData[activeSection]?.map((classItem, index) => (
                  <motion.div
                    key={classItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors w-full"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      {/* Class Details */}
                      <div className="text-center md:text-left">
                        <h3 className="text-white text-lg font-medium">
                          {classItem.date}
                        </h3>
                        <p className="text-white/60">{classItem.time}</p>
                      </div>
                      {/* Ticket Quantity Control */}
                      <div className="flex items-center gap-2 bg-blue-400/20 rounded-lg p-2">
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full text-blue-500 hover:text-blue-300 hover:bg-blue-400/30"
                          onClick={() => updateTicketQuantity(classItem.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-white font-medium min-w-[2rem] text-center">
                          {getTicketQuantity(classItem.id)}
                        </span>
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/30"
                          onClick={() => updateTicketQuantity(classItem.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      {/* Price and Booking Button */}
                      <div className="flex flex-col items-end">
                        <p className="text-blue-400 text-lg font-bold pr-5">
                          {formatPrice(
                            classItem.basePrice *
                              getTicketQuantity(classItem.id)
                          )}
                        </p>
                        <Link
                          to={`/class/${classItem.id}`}
                          state={{
                            amount: classItem.basePrice * getTicketQuantity(classItem.id),
                            quantity: getTicketQuantity(classItem.id),
                            basePrice: classItem.basePrice,
                            id: classItem._id,
                            date: classItem.date,
                            time: classItem.time,
                          }}
                          className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Function to get the current classData
export const getClassData = () => classData;


// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Minus, Plus } from 'lucide-react';
// import { Link } from "react-router-dom";
// import allClassService from '../services/allClassService';
// import { transformClassData } from '../utils/transformClassData';

//  function ClassSections() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [ticketQuantities, setTicketQuantities] = useState({});
//   const [classData, setClassData] = useState(null);  // State for class data
//   const [classTypes, setClassTypes] = useState([]);

//   useEffect(() => {
//     const fetchClassData = async () => {
//       try {
//         const apiResponse = await allClassService();
//         console.log("API Response:", apiResponse);
//         const transformedData = transformClassData(apiResponse.data);
//         console.log("transformedData:", transformedData);

//         // Extract unique class types
//         const types = Object.keys(transformedData);
//         setClassTypes(types);

//         // Set the default active section to the first class type
//         setActiveSection(types[0]);

//         setClassData(transformedData);
//       } catch (error) {
//         console.error("Error fetching class data:", error);
//       }
//     };

//     fetchClassData();
//   }, []);

//   const updateTicketQuantity = (id, delta) => {
//     setTicketQuantities((prev) => {
//       const currentQuantity = prev[id] || 1;
//       const newQuantity = Math.max(1, Math.min(10, currentQuantity + delta));
//       return { ...prev, [id]: newQuantity };
//     });
//   };

//   const getTicketQuantity = (id) => ticketQuantities[id] || 1;

//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);

//   return (
//     <section className="py-20" id="class">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-start md:items-center gap-12">
//           {/* Navigation Buttons */}
//           <div className="grid grid-cols-3 gap-4 w-full max-w-[800px]">
//             {classTypes.map((type) => (
//               <button
//                 key={type}
//                 className={`text-[15px] md:text-lg py-6 border-b-2 ${
//                   activeSection === type
//                     ? 'text-[#64ffda] border-[#64ffda]'
//                     : 'text-[#64ffda]/60 border-transparent hover:text-[#64ffda]'
//                 }`}
//                 onClick={() => setActiveSection(type)}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>

//           {/* Class Details */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="w-full max-w-3xl"
//             >
//               <div className="gap-4 flex flex-wrap justify-center">
//                 {/* Ensure classData is not null or undefined */}
//                 {classData && classData[activeSection]?.length > 0 ? (
//                   classData[activeSection].map((classItem, index) => (
//                     <motion.div
//                       key={classItem.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors w-full"
//                     >
//                       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                         {/* Class Details */}
//                         <div className="text-center md:text-left">
//                           <h3 className="text-white text-lg font-medium">
//                             {classItem.date}
//                           </h3>
//                           <p className="text-white/60">{classItem.time}</p>
//                         </div>
//                         {/* Ticket Quantity Control */}
//                         <div className="flex items-center gap-2 bg-blue-400/20 rounded-lg p-2">
//                           <button
//                             className="h-8 w-8 flex items-center justify-center rounded-full text-blue-500 hover:text-blue-300 hover:bg-blue-400/30"
//                             onClick={() => updateTicketQuantity(classItem.id, -1)}
//                           >
//                             <Minus className="h-4 w-4" />
//                           </button>
//                           <span className="text-white font-medium min-w-[2rem] text-center">
//                             {getTicketQuantity(classItem.id)}
//                           </span>
//                           <button
//                             className="h-8 w-8 flex items-center justify-center rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/30"
//                             onClick={() => updateTicketQuantity(classItem.id, 1)}
//                           >
//                             <Plus className="h-4 w-4" />
//                           </button>
//                         </div>
//                         {/* Price and Booking Button */}
//                         <div className="flex flex-col items-end">
//                           <p className="text-blue-400 text-lg font-bold pr-5">
//                             {formatPrice(
//                               classItem.basePrice *
//                                 getTicketQuantity(classItem.id)
//                             )}
//                           </p>
//                           <Link
//                             to={`/class/${classItem.id}`}
//                             state={{
//                               amount: classItem.basePrice * getTicketQuantity(classItem.id),
//                               quantity: getTicketQuantity(classItem.id),
//                               basePrice: classItem.basePrice,
//                               id: classItem.id,
//                               date: classItem.date,
//                               time: classItem.time,
//                             }}
//                             className="px-4 py-2 mt-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
//                           >
//                             Book Now
//                           </Link>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <div className="text-white">No classes available for this section.</div>
//                 )}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ClassSections;