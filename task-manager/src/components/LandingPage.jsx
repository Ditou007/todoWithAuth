import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import '../css/landingPage.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='landing-page'>
      <div className='content'>
        <h1>Landing Page</h1>
        <div className='button-group'>
          <Button
            type='primary'
            size='large'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            type='default'
            size='large'
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
