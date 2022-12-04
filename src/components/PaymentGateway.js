import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { studentInfoAction } from '../action/studentinfo';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import khalti from '../../src/static/images/buttons/khalti.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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


export const PaymentGateway = ({
    activeStep,
    setActiveStep,
    handleBack,
    handleNext,
    steps }) => {
    const handleNextAddress = () => {
        setActiveStep(activeStep + 1);
    };
    const studentInfo = useSelector((state) => state.StudentInfo.student);
    console.log("state loading ", studentInfo)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            religion: ""
        },
        validationSchema: Yup.object({
        }),

        onSubmit: (handleNext) => {
            const studetInfoData = {
                "first_name": formik.values.firstName,
            }
            console.log(studetInfoData)
            handleNextAddress();
            dispatch(studentInfoAction(studetInfoData))
        }
    });
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
        checkout.show({amount: 1000});
     }

    return (
        <form onSubmit={formik.handleSubmit}>
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
