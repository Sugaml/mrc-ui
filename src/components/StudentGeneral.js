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
  // const [items, setItems] = useState([]);
    React.useEffect(()=>{
      if (!student){
      dispatch(getStudentGeneralAction(token))
      }
    },[dispatch,token,student])
  console.log(student.data)
  return (
    <div>
      <Typography>Student General Inforamtion</Typography>
      <Avatar sizes='150' alt={student.data.first_name} src="/static/images/avatar/2.jpg" />
      <Typography>Student Name :: {student.data.first_name} {student.data.last_name}</Typography>
      <Typography>Gender :: {student.data.gender} </Typography>
      <Typography>Date of Birth:: {student.data.dob} </Typography>
      <Typography>Email :: {student.data.email} </Typography>
      <Typography>Mobile Number :: {student.data.mobile_num} </Typography>
    </div>
  );
}