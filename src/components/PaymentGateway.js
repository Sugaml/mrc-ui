import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import khalti from '../../src/static/images/buttons/khalti.png'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import KhaltiCheckout from "khalti-checkout-web";


export const PaymentGateway = () => {
    const studentInfo = useSelector((state) => state.StudentInfo.student);
    console.log("state loading ", studentInfo)
    const dispatch = useDispatch();
    let config = {
        // replace this key with yours
        "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
        "productIdentity": "1234567890",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess (payload) {
                // hit merchant api for initiating verfication
                console.log(payload);
            },
            // onError handler is optional
            onError (error) {
                // handle errors
                console.log(error);
            },
            onClose () {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const paymentGateway = () => {
        let checkout = new KhaltiCheckout(config);
        checkout.show({amount:1000});
     }

    return (
        <form >
            <div>
                <Typography variant="h6" gutterBottom>
                    Select Payment Gateway
                </Typography>
                <Card sx={{ minWidth: 100, }}>
                    <CardContent sx={{ backgroundColor: 'white' }}>
                    <Typography  sx={{ mb: 1.5 }} variant="h5">
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
                        {gateways.map((gateway) => (
                            <Button
                                type='submit'
                                onClick={paymentGateway()}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                <Card sx={{ minWidth: 100, backgroundColor: 'blue' }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={khalti}
                                        alt={gateway.title}
                                    />
                                    <CardContent sx={{ backgroundColor: 'white' }}>
                                        <Typography variant="h6" gutterBottom>
                                            {gateway.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        ))}
                    </div>
                </Card>
            </div>
        </form>
    );
}
