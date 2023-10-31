import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Landing Page
      </button>
    </div>
  )
}

export default NotFound
