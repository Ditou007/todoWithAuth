// src/api.js
import axios from 'axios'

// @ts-ignore
const API_URL = process.env.REACT_APP_API_URL

export const register = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, user)
    const token = response.data.token
    // Store the token into localStorage
    localStorage.setItem('token', token)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const login = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, user)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
