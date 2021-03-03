import React from 'react';

const logIn = async (data) => {
  let response = await fetch("http://127.0.0.1:5000/api/users/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
  });
  return await response.json();
};

const register = () => {

};

const logOut = () => {

};


export default {logIn, register, logOut};