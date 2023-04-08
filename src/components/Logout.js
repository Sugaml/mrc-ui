import React from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { authLogout } from '../action/auth';

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(authLogout());
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/signin" />;
}
