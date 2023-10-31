// src/components/ProtectedRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isTokenExpired } from '../utils/jwtHelper'

const ProtectedRoute = ({ element }) => {
  const token = useSelector((state) => state.auth.token)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  // Check if authenticated and token is not expired
  const isAccessAllowed = isAuthenticated && token && !isTokenExpired(token)

  return isAccessAllowed ? element : <Navigate to='/login' replace />
}

export default ProtectedRoute
