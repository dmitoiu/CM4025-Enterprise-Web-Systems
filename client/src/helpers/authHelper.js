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
    if (localStorage.getItem('authDetails'))
      return JSON.parse(localStorage.getItem('authDetails'))
    else
      return false
  },
  authenticate(jwt) {
    if (typeof window !== "undefined")
      localStorage.setItem('authDetails', JSON.stringify(jwt))
  },
  clearJWT() {
    if (typeof window !== "undefined")
      localStorage.removeItem('authDetails')
  }
}

export default auth;