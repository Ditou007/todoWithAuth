// App.js

import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BasicLayout from './components/Layout/BasicLayout'
import AppRoutes from './components/AppRoutes'
import useCheckTokenExpiry from './hooks/useCheckTokenExpiry'
import './App.css'
import TokenExpiryModal from './utils/tokenExpiryModal'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Register from './components/Register'

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  useCheckTokenExpiry(setModalVisible)

  const handleRefresh = () => {
    // Logic to refresh the token goes here
    // After refreshing, close the modal
    setModalVisible(false)
  }

  const handleClose = () => {
    // Logic to handle the modal close, if any
    setModalVisible(false)
  }

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='*'
          element={
            <BasicLayout titleProp='none'>
              <AppRoutes />
              <TokenExpiryModal
                isVisible={isModalVisible}
                onRefresh={handleRefresh}
                onClose={handleClose}
              />
            </BasicLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
