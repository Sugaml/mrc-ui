import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { paymentVerifyAction } from '../action/payment';
import khalti from '../../src/static/images/buttons/khalti.ico'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import KhaltiCheckout from "khalti-checkout-web";
import { getStudentGeneralAction } from '../action/user';

export const KhaltiPayment = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.isAuthenticated);
    const student = useSelector((state) => state.StudentGeneral.currentStudent);
    React.useEffect(() => {
        dispatch(getStudentGeneralAction(token))
    }, [dispatch, token])


    let config = {
        // "publicKey":"live_public_key_1a35555e5f0f45b695f94a0f357d99f0",
        "publicKey": "test_public_key_b048b45bdccb43ba818968273ffd49c4",
        "productIdentity": "123",
        "productName": "Drogon",
        "productUrl": "https://01cloud.io/",
        "eventHandler": {
            onSuccess(payload) {
                // hit merchant api for initiating verfication
                console.log(payload);
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
                console.log(error);
            },
            onClose() {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI"],
        //"paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const openPaymentGateway = () => {
        let checkout = new KhaltiCheckout(config);
        checkout.show({ amount: 1000 });

    }

    return (
        <div>
            {
                student && student.ID && student.course ? (
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Fee Information
                        </Typography>
                        <Card >
                            <CardContent sx={{ backgroundColor: 'white' }}>
                                <Typography sx={{ mb: 1.5 }} variant="h5">
                                    Fee Details
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Course Name : {student.course.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Fee Amount : {student.course.fee}
                                </Typography>
                            </CardContent>
                            <div style={{ display: 'flex', }}>
                                <Button
                                    type='submit'
                                    onClick={openPaymentGateway}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    <Card sx={{ minWidth: 100, background: 'blue' }}>
                                        <CardMedia
                                         sx={{ mt: '4px' }}
                                            component="img"
                                            height="100"
                                            width="100"
                                            image={khalti}
                                            alt="Pay With khalti"
                                        />
                                        <CardContent sx={{ backgroundColor: 'white' }}>
                                            <Typography  sx={{ color: 'blue' }} variant="h6" gutterBottom>
                                                Pay With Khalti
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Button>
                            </div>
                        </Card>
                    </div>
                ) : (
                    <div>
                </div>
                )
            }
        </div>
    );
}
