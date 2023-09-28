import * as React from 'react';
import { useState } from 'react';

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { listTransactionAction } from '../action/transactions';

export const PaymentHistory = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  
  const token = useSelector((state) => state.auth.isAuthenticated);
  const student = useSelector((state) => state.StudentGeneral.currentStudent);
  
  const payments = useSelector((state) => state.Transactions.transactions);
  const loading = useSelector((state) => state.Transactions.isTransactions);
  
  console.log("payments ",student.ID)
  console.log("payments ",payments)

  const getStudentGeneral = React.useCallback(() => dispatch(getStudentGeneralAction(token)), [dispatch, token]);
  const getPayments = React.useCallback(() => dispatch(listTransactionAction(token,student.ID)), [dispatch, token,student.ID]);
  
  React.useEffect(() => {
    getStudentGeneral()
      getPayments();
    }, [getStudentGeneral,getPayments]);
    

    return (
        <div>
            {student ? (
                <div>
                    {
                       !payments  ? (
                        <div>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>
                        ) : (
                            <div>
                                <Box sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h5" gutterBottom>
                                        Payment History
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Date</TableCell>
                                                    <TableCell>Description</TableCell>
                                                    <TableCell>Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                { payments.data.slice(startIndex, endIndex).map((payment) => (
                                                    <TableRow key={payment.id}>
                                                        <TableCell>{payment.CreatedAt}</TableCell>
                                                        <TableCell>{payment.title}</TableCell>
                                                        <TableCell>{payment.amount}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        <Pagination count={Math.ceil(payments.length / rowsPerPage)} page={page} onChange={handleChangePage} />
                                    </TableContainer>
                                </Box>
                            </div>
                        )
                    }
                </div>
            )
                : (
                    <div>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>
                )
            }
        </div>
    );
}
