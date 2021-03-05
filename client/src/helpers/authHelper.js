import React from 'react';

const auth = {
  isAuthenticated() {
    if (typeof window == "undefined")
      return false
    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
  },
  authenticate(jwt) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('authDetails', JSON.stringify(jwt))
  },
  clearJWT() {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('authDetails')
  }
}

export default auth;