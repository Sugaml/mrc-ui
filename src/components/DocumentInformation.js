import { Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import { getStudentDocument } from '../action/studentfile';

export const DocumentInformation=()=> {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthenticated);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
  const documentInfo = useSelector((state) => state.CurrentDocument.currentDocument);
  console.log("token and document info:: ",token,documentInfo)
    React.useEffect(()=>{
      dispatch(getStudentDocument(token,student.ID))
    },[dispatch,token,student])

  return (
    <div>
      <Typography>Student Document Information </Typography>
    </div>
  );
}


