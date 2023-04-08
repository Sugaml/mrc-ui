import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';

export const Logout=()=> {
    const navigate = useNavigate();
  const handleLogout = () => {
   
    // remove user data from localStorage
    localStorage.removeItem('auth');

    // redirect to login page
 navigate('/signin');
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
}
