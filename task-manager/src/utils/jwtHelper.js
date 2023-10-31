export const isTokenExpired = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now().valueOf() / 1000
    return decodedToken.exp < currentTime
  } catch (e) {
    console.error('Failed to decode JWT', e)
    return true
  }
}
