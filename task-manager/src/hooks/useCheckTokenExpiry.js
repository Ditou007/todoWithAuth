// hooks/useCheckTokenExpiry.js

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isTokenExpired } from '../utils/jwtHelper'
import { logout } from '../redux/slices/authSlice'

const useCheckTokenExpiry = (setModalVisible) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    const checkTokenExpiry = () => {
      if (token && isTokenExpired(token)) {
        setModalVisible(true)
      }
    }

    checkTokenExpiry()
    const intervalId = setInterval(checkTokenExpiry, 60000)
    return () => clearInterval(intervalId)
  }, [token, dispatch, setModalVisible])
}

export default useCheckTokenExpiry
