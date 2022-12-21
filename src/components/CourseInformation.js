import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';

export const CourseInformation = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
    React.useEffect(()=>{
      dispatch(getStudentGeneralAction(token))
    },[dispatch,token])
  return (
   student && student.ID && !!student.ID && student.course && student.course.ID && <div>
      <Typography variant="h6" gutterBottom sx={{ pt: 2}} >Course Inforamtion</Typography>
      <Typography>Course :: {student.course.name} </Typography>
      <Typography>Duration :: {student.course.duration} </Typography>
      <Typography>Fee :: {student.course.fee}/{student.course.course_type}</Typography>
    </div>
  );
}