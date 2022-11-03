// src/components/authentication-button.js

import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
  return fetch("http://localhost:8080/api/me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
}
const AuthenticationButton = () => {

 
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    //see next line for first dependency of useEffect
    if(isAuthenticated){
      saveUser(user);
      //see above line for second dependency of useEffect
    }
  }, [isAuthenticated, user]) //this list (second argument, is list of dependencies for useEffect to run)

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;