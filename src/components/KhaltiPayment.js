import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { paymentVerifyAction } from '../action/payment';
import khalti from '../../src/static/images/buttons/khalti.png'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import KhaltiCheckout from "khalti-checkout-web";


const gateways = [
    {
        url: khalti,
        title: 'Khalti',
        width: '50%',
    },
    {
        url: '/static/images/buttons/khalti.jpg',
        title: 'ESewa',
        width: '50%',
    },
];


export const KhaltiPayment = () => {
    const paymentVerifyInfo = useSelector((state) => state.PaymentVerifyInfo.isVerify);
    console.log("state loading ",paymentVerifyInfo)
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            religion: ""
        },
        validationSchema: Yup.object({
        }),
    });
    let config = {
        // replace this key with yours
      
        
        // "publicKey":"live_public_key_1a35555e5f0f45b695f94a0f357d99f0",
        "publicKey": "test_public_key_b048b45bdccb43ba818968273ffd49c4",
        "productIdentity": "123",
        "productName": "Drogon",
        "productUrl": "https://01cloud.io/",
        "eventHandler": {
            onSuccess(payload) {
                // hit merchant api for initiating verfication
                console.log(payload);
                const paymentVerifyData={
                    "token":payload.token,
                    "amount":payload.amount,
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
        "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const openPaymentGateway = () => {
        let checkout = new KhaltiCheckout(config);
        checkout.show({ amount: 300000 });
        
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Typography variant="h6" gutterBottom>
                    Select Payment Gateway
                </Typography>
                <Card sx={{ minWidth: 100, }}>
                    <CardContent sx={{ backgroundColor: 'white' }}>
                        <Typography sx={{ mb: 1.5 }} variant="h5">
                            Payment Details
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Course : BIM
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Fee Amount : 3000
                        </Typography>
                    </CardContent>
                    <div style={{ display: 'flex', }}>
                        <Button
                            type='submit'
                            onClick={openPaymentGateway}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            <Card sx={{ minWidth: 100, backgroundColor: 'blue' }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={khalti}
                                    alt="khalti"
                                />
                                <CardContent sx={{ backgroundColor: 'white' }}>
                                    <Typography variant="h6" gutterBottom>
                                        Khalti
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Button>
                    </div>
                </Card>
            </div>
        </form>
    );
}
