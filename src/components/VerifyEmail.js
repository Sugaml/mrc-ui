import * as React from 'react';
import {  useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailAction } from '../action/reset_password';


export const VerifyEmail = () => {
  const params = useParams();
  const dispatch = useDispatch();
 dispatch(verifyEmailAction(params.id))
 const isEmailVerify = useSelector((state) => state.UserInfo.isEmailVerify);
 if (isEmailVerify) return <Navigate to="/login" />;
}
