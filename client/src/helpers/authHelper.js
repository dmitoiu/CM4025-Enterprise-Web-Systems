import React from 'react';

/**
 * Authentication helper functions
 * Reference: Lab 6 Part 1 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3853318
 * Reference: Lab 6 Part 2 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3868900
 * @type {{clearJWT(): void, authenticate(*=): void, isAuthenticated(): (boolean|any)}}
 */
const auth = {
  isAuthenticated() {
    if (typeof window == "undefined")
      return false
    if (sessionStorage.getItem('authDetails'))
      return JSON.parse(sessionStorage.getItem('authDetails'))
    else
      return false
  },
  authenticate(state) {
    if (typeof window !== "undefined")
      sessionStorage.setItem('authDetails', JSON.stringify(state))
  },
  clearJWT() {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('authDetails')
  }
}

export default auth;