import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import MailIcon from '@mui/icons-material/Mail';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { getStudentGeneralAction } from '../action/user';


export const StudentGeneral = () => {

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);

  const student = useSelector((state) => state.StudentGeneral.currentStudent);
    React.useEffect(()=>{
      dispatch(getStudentGeneralAction(token))
    },[dispatch,token])


  return (
    student && !!student.ID && <div>
    <Card sx={{ height: '300px', width:'600px'  }}>
      <CardHeader
        avatar={
          <Avatar sizes='150' alt={student.firstname} src="https://www.w3schools.com/howto/img_avatar.png" />
        }
        title={student.first_name + " " + student.lastname }
        subheader="Approved"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <MailIcon/> {student.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {student.mobile_num}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}