import * as React from 'react';
import {  useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailAction } from '../action/reset_password';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const VerifyEmail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(verifyEmailAction(params.id))
  },[params.id])
 const isEmailVerify = useSelector((state) => state.UserInfo.isEmailVerify);
 if (isEmailVerify){
  return <Navigate to="/signin" />;
 }
  return(
    <>
<Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={!isEmailVerify}
          // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
    </>
  )
}
