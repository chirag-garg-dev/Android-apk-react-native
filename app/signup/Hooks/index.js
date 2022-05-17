import React, { useState, useEffect } from 'react';

export const useSignup = () => {
  const [email, setEmail] = useState(" ");


  useEffect(() => {
    
     
  });

  const onChangeemail = () => {
    debugger
    setEmail(email);
    console.log("Hello");
  }

  return {
    email, onChangeemail  
  };
};