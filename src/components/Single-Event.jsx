// import { Instagram, Youtube } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { useParams, useLocation } from 'react-router-dom'
// import { getEventsById } from '../lib/events'
// import { Button } from './button'
// import CheckoutModal from '../pages/CheckoutModal'

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1)
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
//   const { state } = useLocation() // Access state from location

//   const { id } = useParams()
//   const params = id.split('-')
//   const result = getEventsById(params[0], params[1])

//   const handleBuyNowClick = () => {
//     setIsCheckoutOpen(true)
//   }

//   useEffect(() => {
//     // Set dynamic amount if passed
//     if (state?.amount) {
//       setQuantity(state.amount)
//     }
//   }, [state])

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//             <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
//               <NavbarButtons />
//             </div>
//             <div className="hidden md:block w-full lg:w-auto mt-2 md:mt-0">
//               <EndButton />
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto "
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result.eventName}
//             </h1>
//             <h1 className="text-4xl">${result.basePrice * quantity}.00</h1>
//             <div className="border-b-2 border-white/20 pb-2">
//               <Description data={result} />
//             </div>
//             <Button
//               onClick={handleBuyNowClick}
//               className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base sm:text-lg"
//             >
//               Buy Now
//             </Button>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           <Description data={result} />
//         </div>
//       </div>

//       {isCheckoutOpen && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={quantity * result.basePrice}
//         />
//       )}
//     </div>
//   )
// }

// export default SingleEvent

// const Description = ({ data }) => (
//   <ul className="pl-3">
//     <li className="list-disc">
//       {data.date} - {data.time}
//     </li>
//     <li className="list-disc">{data.venue}</li>
//     <li className="list-disc">{data.eventDescription}</li>
//   </ul>
// )

// const NavbarButtons = () => (
//   <div className="flex items-center gap-x-2 sm:gap-x-4">
//     <a
//       href="https://www.youtube.com/channel/UCdoSqP8S0bonXEjKstt6mlQ"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button
//         title="Youtube"
//         className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
//       >
//         <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
//       </button>
//     </a>
//     <a
//       href="https://www.instagram.com/priyajayanthi23/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button
//         title="Instagram"
//         className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
//       >
//         <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
//       </button>
//     </a>
//   </div>
// )

// const EndButton = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="space-x-3 w-full lg:w-auto flex justify-center gap-x-3 pt-3">
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="text-xs sm:text-sm md:text-base bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80 h-[40px] md:h-[60px]"
//       >
//         SUBSCRIBE
//       </Button>
//       <a href="#class">
//         <Button
//           variant="secondary"
//           className="text-xs sm:text-sm md:text-base bg-[#0a192f] text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10 h-[40px] md:h-[60px]"
//         >
//           BUY TICKETS
//         </Button>
//       </a>
//     </div>
//   )
// }

//here is Rizwan's code

// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { getEventsById } from '../lib/events';
// import { Button } from './button';
// import CheckoutModal from '../pages/CheckoutModal';
// import { Youtube } from 'lucide-react'; // This is the correct import for the Youtube icon
// import { Instagram } from 'lucide-react'

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
//   const { state } = useLocation(); // Access state from location

//   const { id } = useParams();
//   const params = id.split('-');
//   const result = getEventsById(params[0], params[1]);

//   useEffect(() => {
//     // Set dynamic amount if passed
//     if (state?.quantity) {
//       setQuantity(state.quantity); // Set quantity from state
//     }
//   }, [state]);

//   const handleBuyNowClick = () => {
//     setIsCheckoutOpen(true);
//   };

//   const handleQuantityChange = (delta) => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = Math.max(1, prevQuantity + delta); // Ensure quantity stays between 1 and 10
//       return newQuantity;
//     });
//   };

//   const totalPrice = result.basePrice * quantity; // Calculate total price dynamically based on quantity

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//             <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
//               <NavbarButtons />
//             </div>
//             <div className="hidden md:block w-full lg:w-auto mt-2 md:mt-0">
//               <EndButton />
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto "
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result.eventName}
//             </h1>
//             <h1 className="text-4xl">${totalPrice}.00</h1>
//             <div className="border-b-2 border-white/20 pb-2">
//               <Description data={result} />
//             </div>
//             <Button
//               onClick={handleBuyNowClick}
//               className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base sm:text-lg"
//             >
//               Buy Now
//             </Button>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           <Description data={result} />
//         </div>
//       </div>

//       {isCheckoutOpen && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={totalPrice} // Pass the dynamically calculated total price
//         />
//       )}
//     </div>
//   );
// };

// export default SingleEvent;

// const Description = ({ data }) => (
//   <ul className="pl-3">
//     <li className="list-disc">
//       {data.date} - {data.time}
//     </li>
//     <li className="list-disc">{data.venue}</li>
//     <li className="list-disc">{data.eventDescription}</li>
//   </ul>
// );

// // You can add buttons to change the quantity, e.g. + and - buttons

// const NavbarButtons = () => (
//   <div className="flex items-center gap-x-2 sm:gap-x-4">
//     <a
//       href="https://www.youtube.com/channel/UCdoSqP8S0bonXEjKstt6mlQ"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button
//         title="Youtube"
//         className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
//       >
//         <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
//       </button>
//     </a>
//     <a
//       href="https://www.instagram.com/priyajayanthi23/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <button
//         title="Instagram"
//         className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
//       >
//         <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
//       </button>
//     </a>
//   </div>
// );

// const EndButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="space-x-3 w-full lg:w-auto flex justify-center gap-x-3 pt-3">
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="text-xs sm:text-sm md:text-base bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80 h-[40px] md:h-[60px]"
//       >
//         SUBSCRIBE
//       </Button>
//       <a href="#class">
//         <Button
//           variant="secondary"
//           className="text-xs sm:text-sm md:text-base bg-[#0a192f] text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10 h-[40px] md:h-[60px]"
//         >
//           BUY TICKETS
//         </Button>
//       </a>
//     </div>
//   );
// };


// import { Instagram, Youtube } from 'lucide-react'
// import  { useEffect, useState } from 'react'
// import { useParams, useLocation } from 'react-router-dom'
// import { getEventsById } from '../lib/events'
// import { Button } from './button'
// import CheckoutModal from '../pages/CheckoutModal'
// const { state } = useLocation();

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
//   const { state } = useLocation()
//   const { amount, quantity: quantityFromState } = state || {}

//   const location = useLocation()

//   const { amount, quantity: quantityFromState, basePrice, id, date, time } = state || {};

//   const { id } = useParams()
//   const params = id ? id.split('-') : []
//   const result =
//     params.length === 2 ? getEventsById(params[0], params[1]) : null

//   const handleBuyNowClick = () => {
//     setIsCheckoutOpen(true)
//   }

 
//   useEffect(() => {
//     if (quantityFromState) {
//       setQuantity(quantityFromState);
//     }
//   }, [quantityFromState]);
  
//   const totalAmount = basePrice * quantity;
  

//   const validateForm = () => {
//     const errors = {}
//     if (!formData.name.trim()) errors.name = 'Name is required'
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required'
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = 'Enter a valid email address'
//     }
//     if (!formData.phone.trim()) {
//       errors.phone = 'Phone number is required'
//     }
//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }


//   const paypalHandler = () => {
//     if (!validateForm()) return
//     setShowForm(false) // Hide the form
//     setShowPayPal(true) // Show PayPal button
//     console.log('Total amount___', totalAmount)
//   }

//   const handleStripePayment = async () => {
//     if (!validateForm()) return;
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/purchases/purchase-tickets`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             amount: totalAmount,
//             currency: 'usd',
//           }),
//         }
//       );
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       } else {
//         console.error('Payment URL not found!');
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//             <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
//               <NavbarButtons />
//             </div>
//             <div className="hidden md:block w-full lg:w-auto mt-2 md:mt-0">
//               <EndButton />
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto"
//             alt="Event"
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result?.eventName || 'Event not found'}
//             </h1>
//             <h1 className="text-4xl">
//   ${totalAmount.toFixed(2)}
// </h1>

//             <div className="border-b-2 border-white/20 pb-2">
//               {result ? (
//                 <Description data={result} />
//               ) : (
//                 <p>No description available.</p>
//               )}
//             </div>
//             {/* <Button
//               onClick={handleBuyNowClick}
//               className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base sm:text-lg"
//             >
//               Buy Now
//             </Button> */}
//           <div>
//           <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <div className="flex flex-col space-y-4 mt-6">
//               <Button
//                 onClick={paypalHandler}
//                 className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base"
//               >
//                 Pay With PayPal
//               </Button>
//               <Button
//                 variant="secondary"
//                 onClick={handleStripePayment}
//                 disabled={loading}
//                 className="border-[#64ffda] text-[#64ffda] bg-[#0a192f] hover:bg-[#64ffda]/10 h-[50px] md:h-[60px] rounded-full px-6"
//               >
//                 {loading ? 'Processing...' : 'Pay With Stripe'}
//               </Button>
//             </div>
//           </div>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           {result ? (
//             <Description data={result} />
//           ) : (
//             <p>No additional details.</p>
//           )}
//         </div>
//       </div>
//       {isCheckoutOpen && result && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={quantity * (result?.basePrice || 0)}
//         />
//       )}
//     </div>
//   )
// }

// export default SingleEvent



// import { Instagram, Youtube } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { getEventsById } from '../lib/events';
// import { Button } from './button';
// import CheckoutModal from '../pages/CheckoutModal';

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
//   const [formErrors, setFormErrors] = useState({}); // Added to handle form errors

//   const { state } = useLocation();
//   const { amount, quantity: quantityFromState, basePrice, id, date, time } = state || {};

//   const { id: paramId } = useParams();
//   const params = paramId ? paramId.split('-') : [];
//   const result = params.length === 2 ? getEventsById(params[0], params[1]) : null;

//   useEffect(() => {
//     if (quantityFromState) {
//       setQuantity(quantityFromState);
//     }
//   }, [quantityFromState]);

//   const totalAmount = basePrice * quantity;

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = 'Enter a valid email address';
//     }
//     if (!formData.phone.trim()) {
//       errors.phone = 'Phone number is required';
//     }
//     setFormErrors(errors); // Now properly defined
//     return Object.keys(errors).length === 0;
//   };

//   const paypalHandler = () => {
//     if (!validateForm()) return;
//     console.log('Total amount___', totalAmount);
//   };

//   const handleStripePayment = async () => {
//     if (!validateForm()) return;
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/purchases/purchase-tickets`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             amount: totalAmount,
//             currency: 'usd',
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       } else {
//         console.error('Payment URL not found!');
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto"
//             alt="Event"
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result?.eventName || 'Event not found'}
//             </h1>
//             <h1 className="text-4xl">${totalAmount.toFixed(2)}</h1>

//             <div className="border-b-2 border-white/20 pb-2">
//               {result ? (
//                 <Description data={result} />
//               ) : (
//                 <p>No description available.</p>
//               )}
//             </div>

//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your email"
//               />
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your phone number"
//               />

//               <div className="flex flex-col space-y-4 mt-6">
//                 <Button
//                   onClick={paypalHandler}
//                   className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6"
//                 >
//                   Pay With PayPal
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   onClick={handleStripePayment}
//                   disabled={loading}
//                   className="border-[#64ffda] text-[#64ffda] bg-[#0a192f] hover:bg-[#64ffda]/10 h-[50px] md:h-[60px] rounded-full px-6"
//                 >
//                   {loading ? 'Processing...' : 'Pay With Stripe'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           {result ? (
//             <Description data={result} />
//           ) : (
//             <p>No additional details.</p>
//           )}
//         </div>
//       </div>
//       {isCheckoutOpen && result && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={quantity * (result?.basePrice || 0)}
//         />
//       )}
//     </div>
//   );
// };

// export default SingleEvent;

import { Instagram, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams, useLocation, data } from 'react-router-dom';
import { Button } from './button';
import CheckoutModal from '../pages/CheckoutModal';

const SingleEvent = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});
  const [event, setEvent] = useState(null);

  const { state } = useLocation();
  const { quantity: quantityFromState, basePrice } = state || {};
  const { id: paramId } = useParams();

  useEffect(() => {
    if (quantityFromState) {
      setQuantity(quantityFromState);
    }
  }, [quantityFromState]);

  useEffect(() => {
    // Fetch the event data based on the event ID from the URL
    const fetchEventData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/dance-classes`);
        const data = await response.json();
        if (response.ok) {
          console.log("This is the id", data)

          // Find the event by ID from the database response
          const foundEvent = data.data.find((event) => event._id === paramId);
          setEvent(foundEvent);
        } else {
          console.error('Error fetching event data');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEventData();
  }, [paramId]);


  const totalAmount = basePrice * quantity;
console.log("Single-event_______",basePrice, quantity)
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleStripePayment = async () => {
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/purchases/purchase-tickets`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalAmount,
            currency: 'usd',
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Payment URL not found!');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="bg-[#0a192f] min-h-screen py-40">
      <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap">
            <a
              href="/"
              className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-shadow-glow">DANCE WITH</span>
                <span className="text-shadow-glow">PRIYA JAYANTHI</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <img
            src="/images/_DSC7782.jpg"
            className="h-[500px] w-[500px] object-cover mx-auto"
            alt="Event"
          />
          <div className="text-white space-y-6 mt-10">
            <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
              {event?.classDate || 'Event not found'}
            </h1>
            <h1 className="text-4xl">${totalAmount.toFixed(2)}</h1>

            <div className="border-b-2 border-white/20 pb-2">
              {event ? (
                <p>{event?.venue || 'No description available.'}</p>
              ) : (
                <p>No description available.</p>
              )}
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#ccd6f6]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="Your full name"
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#ccd6f6]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="Your email"
              />
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#ccd6f6]"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="Your phone number"
              />

              <div className="flex flex-col space-y-4 mt-6">
                <Button
                  className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6"
                >
                  Pay With PayPal
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleStripePayment}
                  disabled={loading}
                  className="border-[#64ffda] text-[#64ffda] bg-[#0a192f] hover:bg-[#64ffda]/10 h-[50px] md:h-[60px] rounded-full px-6"
                >
                  {loading ? 'Processing...' : 'Pay With Stripe'}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-20">
          <p>{event?.description || 'No additional details.'}</p>
        </div>
      </div>
      {isCheckoutOpen && event && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          totalAmount={quantity * (event?.ticketPrice || 0)}
        />
      )}
    </div>
  );
};

export default SingleEvent;



// import { Instagram, Youtube } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { getEventsById } from '../lib/events';
// import { Button } from './button';
// import CheckoutModal from '../pages/CheckoutModal';
// import ClassSections from './class-sections';

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
//   const [formErrors, setFormErrors] = useState({});

//   const { state } = useLocation();
//   const { amount, quantity: quantityFromState, basePrice, id, date, time } = state || {};

//   const { id: paramId } = useParams();
//   const params = paramId ? paramId.split('-') : [];
//   const result = params.length === 2 ? getEventsById(params[0], params[1]) : null;

//   useEffect(() => {
//     if (quantityFromState) {
//       setQuantity(quantityFromState);
//     }
//   }, [quantityFromState]);

//   const totalAmount = (basePrice || 0) * quantity;

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       errors.email = 'Enter a valid email address';
//     }
//     if (!formData.phone.trim()) {
//       errors.phone = 'Phone number is required';
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const paypalHandler = () => {
//     if (!validateForm()) return;
//     console.log('Total amount___', totalAmount);
//   };

//   const handleStripePayment = async () => {
//     if (!validateForm()) return;
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/purchases/purchase-tickets`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             amount: totalAmount,
//             currency: 'usd',
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (data.url) {
//         window.location.href = data.url;
//       } else {
//         console.error('Payment URL not found!');
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto"
//             alt="Event"
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result?.classDate && result?.time
//                 ? `${result.classDate} - ${result.time}`
//                 : 'Event not found'}
//             </h1>
//             <h1 className="text-4xl">${totalAmount.toFixed(2)}</h1>

//             <div className="border-b-2 border-white/20 pb-2">
//               {result?.venue ? <p>{result.venue}</p> : <p>Venue not available.</p>}
//             </div>

//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your full name"
//               />
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your email"
//               />
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-[#ccd6f6]"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
//                 placeholder="Your phone number"
//               />

//               <div className="flex flex-col space-y-4 mt-6">
//                 <Button
//                   onClick={paypalHandler}
//                   className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6"
//                 >
//                   Pay With PayPal
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   onClick={handleStripePayment}
//                   disabled={loading}
//                   className="border-[#64ffda] text-[#64ffda] bg-[#0a192f] hover:bg-[#64ffda]/10 h-[50px] md:h-[60px] rounded-full px-6"
//                 >
//                   {loading ? 'Processing...' : 'Pay With Stripe'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           {result?.description ? <p>{result.description}</p> : <p>No description available.</p>}
//         </div>
//       </div>
//       {isCheckoutOpen && result && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={quantity * (result?.basePrice || 0)}
//         />
//       )}
//     </div>
//   );
// };

// export default SingleEvent;




// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { getEventsById } from '../lib/events';
// import { Button } from './button';
// import CheckoutModal from '../pages/CheckoutModal';
// import { Youtube } from 'lucide-react'; // This is the correct import for the Youtube icon
// // import { Instagram, Youtube } from 'lucide-react'

// const SingleEvent = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
//   const { state } = useLocation(); // Access state from location

//   const { id } = useParams();
//   const params = id.split('-');
//   const result = getEventsById(params[0], params[1]);

//   useEffect(() => {
//     // Set dynamic amount if passed
//     if (state?.quantity) {
//       setQuantity(state.quantity); // Set quantity from state
//     }
//   }, [state]);

//   const handleBuyNowClick = () => {
//     setIsCheckoutOpen(true);
//   };

//   const handleQuantityChange = (delta) => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = Math.max(1, prevQuantity + delta); // Ensure quantity stays between 1 and 10
//       return newQuantity;
//     });
//   };

//   const totalPrice = result.basePrice * quantity; // Calculate total price dynamically based on quantity

//   return (
//     <div className="bg-[#0a192f] min-h-screen py-40">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between flex-wrap">
//             <a
//               href="/"
//               className="text-[#64ffda] text-2xl font-serif font-bold sm:text-3xl md:text-4xl"
//             >
//               <div className="flex flex-col items-center">
//                 <span className="text-shadow-glow">DANCE WITH</span>
//                 <span className="text-shadow-glow">PRIYA JAYANTHI</span>
//               </div>
//             </a>
//             <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
//               <NavbarButtons />
//             </div>
//             <div className="hidden md:block w-full lg:w-auto mt-2 md:mt-0">
//               <EndButton />
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src="/images/_DSC7782.jpg"
//             className="h-[500px] w-[500px] object-cover mx-auto "
//           />
//           <div className="text-white space-y-6 mt-10">
//             <h1 className="text-3xl font-bold text-white border-b-2 border-white/20 pb-2">
//               {result.eventName}
//             </h1>
//             <h1 className="text-4xl">${totalPrice}.00</h1>
//             <div className="border-b-2 border-white/20 pb-2">
//               <Description data={result} />
//             </div>
//             <Button
//               onClick={handleBuyNowClick}
//               className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base sm:text-lg"
//             >
//               Buy Now
//             </Button>
//           </div>
//         </div>
//         <div className="text-white mt-20">
//           <Description data={result} />
//         </div>
//       </div>

//       {isCheckoutOpen && (
//         <CheckoutModal
//           isOpen={isCheckoutOpen}
//           onClose={() => setIsCheckoutOpen(false)}
//           totalAmount={totalPrice} // Pass the dynamically calculated total price
//         />
//       )}
//     </div>
//   );
// };

// export default SingleEvent;

const Description = ({ data }) => (
  <ul className="pl-3">
    <li className="list-disc">
      {data.date} - {data.time}
    </li>
    <li className="list-disc">{data.venue}</li>
    <li className="list-disc">{data.eventDescription}</li>
  </ul>
);

// // You can add buttons to change the quantity, e.g. + and - buttons

const NavbarButtons = () => (
  <div className="flex items-center gap-x-2 sm:gap-x-4">
    <a
      href="https://www.youtube.com/channel/UCdoSqP8S0bonXEjKstt6mlQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        title="Youtube"
        className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
      >
        <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </a>
    <a
      href="https://www.instagram.com/priyajayanthi23/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        title="Instagram"
        className="bg-[#64ffda]/10 text-[#64ffda] p-2 sm:px-4 sm:py-2 rounded-full hover:bg-[#64ffda]/20 transition-colors h-[40px] md:h-[60px] w-[40px]  md:w-[60px] flex justify-center items-center"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </a>
  </div>
)

const EndButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-x-3 w-full lg:w-auto flex justify-center gap-x-3 pt-3">
      <Button
        onClick={() => setIsOpen(true)}
        className="text-xs sm:text-sm md:text-base bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80 h-[40px] md:h-[60px]"
      >
        SUBSCRIBE
      </Button>
      <a href="#class">
        <Button
          variant="secondary"
          className="text-xs sm:text-sm md:text-base bg-[#0a192f] text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda]/10 h-[40px] md:h-[60px]"
        >
          BUY TICKETS
        </Button>
      </a>
    </div>
  )
}