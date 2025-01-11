// // import{ useEffect } from 'react';

// // const PayPalButton = ({ amount }) => {
// //   useEffect(() => {
// //     if (window.paypal) {
// //       window.paypal
// //         .Buttons({

// //           createOrder: (data, actions) => {
// //             return actions.order.create({
// //               purchase_units: [
// //                 {
// //                   amount: {
// //                     value: amount,
// //                   },
// //                 },
// //               ],
// //             });
// //           },

// //           onApprove: async (data, actions) => {
// //             try {
// //               const orderDetails = await actions.order.capture();
// //               console.log('Captured order details:', orderDetails);

// //               // Send capture data to the backend API
// //               const response = await fetch(
// //                 'http://localhost:3000/api/v1/paypal/payment/capture-payment',
// //                 {
// //                   method: 'POST',
// //                   headers: {
// //                     'Content-Type': 'application/json',
// //                   },
// //                   body: JSON.stringify({ orderId: data.orderID }),
// //                 }
// //               )

// //               if (!response.ok) {
// //                 const errorText = await response.text();
// //                 throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
// //               }

// //               const captureData = await response.json();
// //               console.log('Capture Response:', captureData);

// //               if (captureData.status === 'COMPLETED') {
// //                 alert('Payment successful!');
// //               } else {
// //                 alert('Payment not completed. Please try again.');
// //               }
// //             } catch (error) {
// //               console.error('Error during payment:', error);
// //               alert('An error occurred while processing your payment.');
// //             }
// //           },

// //           onError: (err) => {
// //             console.error('PayPal Button error:', err);
// //             alert('An error occurred with PayPal. Please try again later.');
// //           },
// //         })
// //         .render('#paypal-button-container');
// //     } else {
// //       console.error('PayPal SDK not loaded.');
// //       alert('Unable to load PayPal. Please refresh the page.');
// //     }
// //   }, [amount]);

// //   return <div id="paypal-button-container"></div>;
// // };

// // export default PayPalButton;

// // import { useEffect } from 'react'

// // const PayPalButton = ({ amount }) => {
// //   useEffect(() => {
// //     if (window.paypal) {
// //       window.paypal
// //         .Buttons({
// //           // Specify funding source to show only PayPal button
// //           fundingSource: window.paypal.FUNDING.PAYPAL,

// //           createOrder: (data, actions) => {
// //             return actions.order.create({
// //               purchase_units: [
// //                 {
// //                   amount: {
// //                     value: amount,
// //                   },
// //                 },
// //               ],
// //             })
// //           },

// //           onApprove: async (data, actions) => {
// //             try {
// //               const orderDetails = await actions.order.capture()
// //               console.log('Captured order details:', orderDetails)

// //               // Send capture data to the backend API
// //               const response = await fetch(
// //                 'http://localhost:3000/api/v1/paypal/payment/capture-payment',
// //                 {
// //                   method: 'POST',
// //                   headers: {
// //                     'Content-Type': 'application/json',
// //                   },
// //                   body: JSON.stringify({ orderId: data.orderID }),
// //                 }
// //               )

// //               if (!response.ok) {
// //                 const errorText = await response.text()
// //                 throw new Error(
// //                   `HTTP error! Status: ${response.status} - ${errorText}`
// //                 )
// //               }

// //               const captureData = await response.json()
// //               console.log('Capture Response:', captureData)

// //               if (captureData.status === 'COMPLETED') {
// //                 alert('Payment successful!')
// //               } else {
// //                 alert('Payment not completed. Please try again.')
// //               }
// //             } catch (error) {
// //               console.error('Error during payment:', error)
// //               alert('An error occurred while processing your payment.')
// //             }
// //           },

// //           onError: (err) => {
// //             console.error('PayPal Button error:', err)
// //             alert('An error occurred with PayPal. Please try again later.')
// //           },
// //         })
// //         .render('#paypal-button-container')
// //     } else {
// //       console.error('PayPal SDK not loaded.')
// //       alert('Unable to load PayPal. Please refresh the page.')
// //     }
// //   }, [amount])

// //   return <div id="paypal-button-container"></div>
// // }

// // export default PayPalButton

// // import { useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // const PayPalButton = ({ amount }) => {
// //    const navigate = useNavigate()
// //   useEffect(() => {
// //     const existingButton = document.getElementById('paypal-button-container')
// //       .childNodes[0]

// //     existingButton.style.width = "500px"
// //     if (existingButton) {
// //       return 
// //     }
   

// //     if (window.paypal) {
// //       window.paypal
// //         .Buttons({
// //           fundingSource: window.paypal.FUNDING.PAYPAL,

// //           createOrder: (data, actions) => {
// //             return actions.order.create({
// //               purchase_units: [
// //                 {
// //                   amount: {
// //                     value: amount,
// //                   },
// //                 },
// //               ],
// //             })
// //           },

// //           onApprove: async (data, actions) => {
// //             try {
// //               const orderDetails = await actions.order.capture()
// //               console.log('Captured order details:', orderDetails)

// //               // Send capture data to the backend API
// //               const response = await fetch(
// //                 `${
// //                   import.meta.env.VITE_BASE_URL
// //                 }/paypal/payment/capture-payment`,
// //                 {
// //                   method: 'POST',
// //                   headers: {
// //                     'Content-Type': 'application/json',
// //                   },
// //                   body: JSON.stringify({ orderId: data.orderID }),
// //                 }
// //               )

// //               if (!response.ok) {
// //                 const errorText = await response.text()
// //                 throw new Error(
// //                   `HTTP error! Status: ${response.status} - ${errorText}`
// //                 )
// //               }

// //               const captureData = await response.json()
// //               console.log('Capture Response:', captureData)

// //               if (captureData.status === 'COMPLETED') {
// //                 // alert('Payment successful!')
// //                 navigate('/success')
               
// //               } else {
// //                 // alert('Payment not completed. Please try again.')
// //                 navigate('/cancel')
// //               }
// //             } catch (error) {
// //               console.error('Error during payment:', error)
// //               // alert('An error occurred while processing your payment.')
// //                navigate('/cancel')
// //             }
// //           },

// //           onError: (err) => {
// //             console.error('PayPal Button error:', err)
// //             // alert('An error occurred with PayPal. Please try again later.')
// //              navigate('/cancel')
// //           },
// //         })
// //         .render('#paypal-button-container')
// //     } else {
// //       console.error('PayPal SDK not loaded.')
// //       alert('Unable to load PayPal. Please refresh the page.')
// //     }
// //   }, [amount])

// //   return <div className='' id="paypal-button-container"></div>
// // }

// // export default PayPalButton


// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const PayPalButton = ({ amount }) => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     const existingButton = document.getElementById('paypal-button-container')
//       .childNodes[0]

//     if (existingButton) {
//       existingButton.style.width = '500px'
//       return
//     }

//     if (window.paypal) {
//       window.paypal
//         .Buttons({
//           fundingSource: window.paypal.FUNDING.PAYPAL,

//           style: {
//             layout: 'vertical', // or 'horizontal'
//             color: 'gold', // 'gold', 'blue', 'silver', 'black'
//             shape: 'rect', // 'rect' or 'pill'
//             label: 'paypal', // 'paypal', 'checkout', 'buynow', 'pay', 'installment'
//             height: 55, // Set height for a larger button
//           },

//           createOrder: (data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: amount,
//                   },
//                 },
//               ],
//             })
//           },

//           onApprove: async (data, actions) => {
//             try {
//               const orderDetails = await actions.order.capture()
//               console.log('Captured order details:', orderDetails)

//               // Send capture data to the backend API
//               const response = await fetch(
//                 `${
//                   import.meta.env.VITE_BASE_URL
//                 }/paypal/payment/capture-payment`,
//                 {
//                   method: 'POST',
//                   headers: {
//                     'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({ orderId: data.orderID }),
//                 }
//               )

//               if (!response.ok) {
//                 const errorText = await response.text()
//                 throw new Error(
//                   `HTTP error! Status: ${response.status} - ${errorText}`
//                 )
//               }

//               const captureData = await response.json()
//               console.log('Capture Response:', captureData)

//               if (captureData.status === 'COMPLETED') {
//                 navigate('/success')
//               } else {
//                 navigate('/cancel')
//               }
//             } catch (error) {
//               console.error('Error during payment:', error)
//               navigate('/cancel')
//             }
//           },

//           onError: (err) => {
//             console.error('PayPal Button error:', err)
//             navigate('/cancel')
//           },
//         })
//         .render('#paypal-button-container')
//     } else {
//       console.error('PayPal SDK not loaded.')
//       alert('Unable to load PayPal. Please refresh the page.')
//     }
//   }, [amount])

//   return <div className="" id="paypal-button-container"></div>
// }

// export default PayPalButton


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ amount, formData, danceClassId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("paypal-button-container");
    const existingButton = container.childNodes[0];

    // Prevent re-rendering the PayPal button
    if (existingButton) {
      existingButton.style.width = "500px";
      return;
    }

    if (window.paypal) {
      window.paypal
        .Buttons({
          fundingSource: window.paypal.FUNDING.PAYPAL,

          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
            height: 55,
          },

          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          },

          onApprove: async (data, actions) => {
            try {
              const orderDetails = await actions.order.capture();
              console.log("Captured order details:", orderDetails);

              if (!formData) {
                throw new Error("Form data is missing.");
              }

              const response = await fetch(
                `${
                  import.meta.env.VITE_BASE_URL
                }/purchase-ticket/paypal-capture`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    orderId: data.orderID,
                    fullName: formData.name,
                    email: formData.email,
                    phoneNumber: formData.phone,
                    ticketQuantity: 1,
                    amount: amount,
                    currency: "USD",
                    danceClass: danceClassId,
                  }),
                }
              );

              if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                  `HTTP error! Status: ${response.status} - ${errorText}`
                );
              }

              const captureData = await response.json();
              console.log("Capture Response:", captureData);

              if (captureData.status === "COMPLETED") {
                navigate("/success");
              } else {
                navigate("/cancel");
              }
            } catch (error) {
              console.error("Error during payment:", error);
              navigate("/cancel");
            }
          },

          onError: (err) => {
            console.error("PayPal Button error:", err);
            navigate("/cancel");
          },
        })
        .render("#paypal-button-container");
    } else {
      console.error("PayPal SDK not loaded.");
      alert("Unable to load PayPal. Please refresh the page.");
    }
  }, [amount, navigate, formData, danceClassId]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;