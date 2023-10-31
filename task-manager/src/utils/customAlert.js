import React, { useState, useEffect } from 'react'

function CustomAlert({ message, type }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer)
  }, [])

  const styles = {
    container: {
      padding: '10px 20px',
      margin: '10px 0',
      borderRadius: '4px',
      backgroundColor: type === 'error' ? 'red' : 'green',
      color: 'white',
      display: isVisible ? 'block' : 'none',
    },
  }

  return <div style={styles.container}>{message}</div>
}

export default CustomAlert
