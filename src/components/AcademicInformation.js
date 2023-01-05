import React from "react";
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { getEducationAction } from "../action/studenteducation";

export const AcademicInformation = () => {
  const columns = [
    { field: 'ID', headerName: 'SN', width: 30  },
    { field: 'institute_name', headerName: 'Institute Name ',width: 400 },
    { field: 'institute_address', headerName: 'Address',width: 200},
    { field: 'level', headerName: 'Level', width: 100 },
    { field: 'grade', headerName: 'Grade', width: 80 },
    { field: 'gpa', headerName: 'GPA', width: 60 },
    { field: 'completed_year', headerName: 'Year', width: 80 },
    { field: 'remarks', headerName: 'Remarks', width: 80 },
  ];


  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isAuthenticated);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
  const currentEducation = useSelector((state) => state.StudentEducationInfo.currentEducation);
  console.log("student edu data:: ",currentEducation)

  React.useEffect(() => {
    dispatch(getEducationAction(token,student.ID))
  }, [dispatch, token,student])

  return (
    <div>
      {currentEducation && currentEducation ? (
        <div style={{ height: 400, width: 1100 }}>
          <DataGrid
            rows={currentEducation}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      )
        : (
          <div>
          <Typography>Student Academic not found</Typography>
          </div>
        )}
    </div>
  );
}