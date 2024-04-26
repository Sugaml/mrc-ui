import { useState } from 'react';
import * as React from 'react';
import {Grid,Box, Button, Card, CardContent, Divider,Typography} from '@mui/material';
import {FormControl,FormControlLabel, FormLabel, Radio,RadioGroup, TextField} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getStudentGeneralAction } from '../action/user';
import KhaltiCheckout from "khalti-checkout-web";
import { paymentVerifyAction } from '../action/payment';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const Payment = () => {
    const dispatch = useDispatch();

    const [paymentMode, setPaymentMode] = useState('full');
    
    const token = useSelector((state) => state.auth.isAuthenticated);
    const student = useSelector((state) => state.StudentGeneral.currentStudent);
    const loading = useSelector((state) => state.StudentGeneral.isStudentGeneral);
    const [amountPaid, setAmountPaid] = useState(student.course.fee);

    const getStudentGeneral = React.useCallback(() => dispatch(getStudentGeneralAction(token)), [dispatch, token]);

    React.useEffect(() => {
        getStudentGeneral();
    }, [getStudentGeneral]);

    const handleModeChange = (event) => {
        setPaymentMode(event.target.value);
        if (event.target.value === 'full') {
            console.log("Payment full",student.course.fee)
            setAmountPaid(student.course.fee);
        } else if (event.target.value === 'half') {
            console.log("Payment full",student.course.fee / 2)
            setAmountPaid(student.course.fee / 2);
        } else {
            setAmountPaid('');
        }
    };

    const handleAmountChange = (event) => {
        setAmountPaid(event.target.value);
    };

    let config = {
       "publicKey": "test_public_key_b048b45bdccb43ba818968273ffd49c4",
        "productIdentity": student.course.name,
        "productName": student.course.name,
        "productUrl": "https://mrc.babulal.com.np/",
        "eventHandler": {
            onSuccess(payload) {
                // hit merchant api for initiating verfication
                console.log("khalti payload :: ",payload);
                const paymentVerifyData = {
                    "sid":student.ID,
                    "token": payload.token,
                    "amount": payload.amount,
                }
                dispatch(paymentVerifyAction(paymentVerifyData))
            },
            // onError handler is optional
            onError(error) {
                // handle errors
                console.log("error in payment :: ",error);
            },
            onClose() {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI"],
        // "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const openPaymentGateway = () => {
        let checkout = new KhaltiCheckout(config);
        checkout.show({ amount: 1000 });

    }


    return (
        <div>
            {
                student ?(
                    <div>
                        {
                            student.course ? (
                                <div>
                                    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5" component="h1" gutterBottom>
                                                    Payment for {student.course.name}
                                                </Typography>
                                                <Divider sx={{ my: 3 }} />
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <Typography variant="subtitle1">Fee Amount:</Typography>
                                                        <Typography variant="h6">Rs. {amountPaid}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend">Payment Mode</FormLabel>
                                                            <RadioGroup
                                                                aria-label="payment mode"
                                                                name="paymentMode"
                                                                value={paymentMode}
                                                                onChange={handleModeChange}
                                                                sx={{ flexDirection: 'row' }}
                                                            >
                                                                <FormControlLabel
                                                                    value="full"
                                                                    control={<Radio />}
                                                                    label="Full"
                                                                />
                                                                <FormControlLabel
                                                                    value="half"
                                                                    control={<Radio />}
                                                                    label="Half"
                                                                />
                                                                <FormControlLabel
                                                                    value="partial"
                                                                    control={<Radio />}
                                                                    label="Partial"
                                                                />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                    {paymentMode === 'partial' && (
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                id="amountPaid"
                                                                name="amountPaid"
                                                                label="Amount Paid"
                                                                variant="outlined"
                                                                fullWidth
                                                                value={amountPaid}
                                                                onChange={handleAmountChange}
                                                                InputProps={{
                                                                    startAdornment: <Typography></Typography>,
                                                                }}
                                                            />
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                        <Box sx={{ mt: 3 }}>
                                            <Button variant="contained"  onClick={openPaymentGateway}>
                                                Pay Now
                                            </Button>
                                        </Box>
                                    </Box>
                                </div>
                            ) : (

                                <div>
                                    <Box sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography variant="h5" gutterBottom>
                                            Hello , {student.firstname + student.lastname}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            You are not Enroll in Our course.
                                        </Typography>
                                        <div>
                                            <p>Click <a href="localhost:3000/profile">click here</a></p>
                                        </div>
                                    </Box>
                                </div>
                        )}
                        </div>
                         ) : (
                        <div>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={loading}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                )}
                    </div>
                );
}