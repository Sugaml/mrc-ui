import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';

export const StudentGeneral = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ",token)
  const student = useSelector((state) => state.StudentGeneral.studentGeneral);
    React.useEffect(()=>{
      dispatch(getStudentGeneralAction(token))
    },[dispatch,token])
  console.log(student)
  return (
    <div>
      <Typography>Student General Inforamtion</Typography>
      <Avatar sizes='150' alt={student.first_name} src="/static/images/avatar/2.jpg" />
      <Typography>Student Name :: {student.first_name} {student.last_name}</Typography>
      <Typography>Gender :: {student.gender} </Typography>
      <Typography>Date of Birth:: {student.dob} </Typography>
      <Typography>Email :: {student.email} </Typography>
      <Typography>Mobile Number :: {student.mobile_num} </Typography>
    </div>
  );
}