import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { getStudentGeneralAction } from '../action/user';


export const StudentGeneral = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  console.log("token :: ",token)

  const student = useSelector((state) => state.StudentGeneral.currentStudent);
    React.useEffect(()=>{
      dispatch(getStudentGeneralAction(token))
    },[dispatch,token])


  return (
    student && !!student.ID && <div>
    <Card sx={{ maxWidth: 1200 }}>
      <CardHeader
        avatar={
          <Avatar sizes='150' alt={student.first_name} src="https://www.w3schools.com/howto/img_avatar.png" />
        }
        title={student.first_name + " " + student.last_name }
        subheader="Approved"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {student.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {student.mobile_num}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}