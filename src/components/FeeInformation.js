import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Divider } from '@mui/material';
import Title from './Title';


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Enrollment Course Fee)', 100, 1.15),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTotal =  invoiceSubtotal;

export const FeeInformation=() =>{
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.isAuthenticated);
    const student = useSelector((state) => state.StudentGeneral.currentStudent);
      React.useEffect(()=>{
        dispatch(getStudentGeneralAction(token))
      },[dispatch,token])
  return (
    <div>
      {student && student.ID && !!student.ID && student.course && student.course.ID ?(
        <div>
       <Typography variant="h6" gutterBottom sx={{ pt: 2}} >Account Section</Typography>
    <div>
    <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={6} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                </Paper>
              </Grid>
              <Grid item xs={6} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                </Paper>
              </Grid>
       </Grid>
    </div>
    <Divider/>
    <Title>Fee Summary</Title>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >
              Details
            </TableCell>
            <TableCell align="center">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={student.course.name}>
              <TableCell>{student.course.name}</TableCell>
              <TableCell align="center">{student.course.fee}</TableCell>
            </TableRow>
          

          <TableRow>
            <TableCell colSpan={1}>Subtotal</TableCell>
            <TableCell align="center">{student.course.fee}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="center">{student.course.fee}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      ):(
        <div>
          <Typography>Not Available Fee</Typography>
        </div>
      )
      }
    </div>
   
  );
}