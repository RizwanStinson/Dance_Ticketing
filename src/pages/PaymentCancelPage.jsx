import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CancelPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Canceled</h1>
      <p style={styles.message}>
        Your payment was not successful. You will be redirected to the home page
        shortly.
      </p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    color: '#ff4d4d',
  },
  message: {
    margin: '10px 0',
    fontSize: '1.2rem',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}

export default CancelPage