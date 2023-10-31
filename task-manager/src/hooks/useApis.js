// @ts-nocheck
import axios from 'axios'
import { useSelector } from 'react-redux'

const useApi = () => {
  const token = useSelector((state) => state.auth.token) // Assuming you have stored token in redux state under auth.token
  const API_URL = process.env.REACT_APP_API_URL

  const apiInstance = axios.create({
    baseURL: API_URL, // replace with your backend base URL
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return apiInstance
}

export default useApi
