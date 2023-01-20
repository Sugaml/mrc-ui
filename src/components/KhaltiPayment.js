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
                        <Card  sx={{ height: '400px', width:'500px' }} >
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
                            <Button 
                            type='submit'
                            onClick={openPaymentGateway}
                            sx={{ boxShadow: 2, mt: 3, ml: 1,padding:'5px'  }}
                            >
                             <Typography variant="h6"> Pay with </Typography>
                               <img width={80} alt={"Khalti"} src='data:image/png;base64,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'></img>
                             </Button>
                        
                            
                           
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
