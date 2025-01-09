import { useState } from 'react'
import { Button } from '../components/button'
import PayPalButton from './PayPalButton'

const Checkout = ({ totalAmount }) => {
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState(totalAmount)
  const [showPayPal, setShowPayPal] = useState(false)
  const [showForm, setShowForm] = useState(true) // State to toggle form visibility
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const paypalHandler = () => {
    if (!validateForm()) return
    setShowForm(false) // Hide the form
    setShowPayPal(true) // Show PayPal button
    console.log('Total amount___', totalAmount)
  }

  const handleStripePayment = async () => {
    if (!validateForm()) return
    try {
      setLoading(true)
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
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Payment URL not found!')
      }
    } catch (error) {
      console.error('Error processing payment:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="bg-[#0a192f] w-full">
      <div className="w-full flex flex-col items-center bg-[#112240] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#64ffda] text-center mb-6">
          Checkout
        </h2>
        {showForm ? (
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          >
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
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="Your full name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
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
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="you@example.com"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#ccd6f6]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 p-3 block w-full rounded-md border-[#64ffda]/50 bg-[#0a192f] text-[#64ffda] shadow-sm focus:ring-[#64ffda] focus:border-[#64ffda]"
                placeholder="123-456-7890"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
              )}
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              <Button
                onClick={paypalHandler}
                className="bg-gradient-to-r from-[#64ffda] to-[#31bdcf] text-[#0a192f] hover:shadow-lg hover:scale-105 transform transition-all duration-300 h-[50px] md:h-[60px] rounded-full px-6 text-base"
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
          </form>
        ) : (
          showPayPal && <PayPalButton amount={amount} />
        )}
      </div>
    </div>
  )
}

export default Checkout
