import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import '../css/landingPage.css'
import { useSelector } from 'react-redux'
import { isTokenExpired } from '../utils/jwtHelper'

const LandingPage = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  // Check if authenticated and token is not expired
  const isAccessAllowed = isAuthenticated && token && !isTokenExpired(token)
  return (
    <>
      {isAccessAllowed ? (
        <>
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
        </>
      ) : (
        navigate('/login')
      )}
    </>
  )
}

export default LandingPage
