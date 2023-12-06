import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Button
        onClick={() => {
          navigate('/home')
        }}
      >
        Landing Page
      </Button>
    </div>
  )
}

export default NotFound
