import { useState } from 'react';
import { useNavigate ,Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../action/auth";
import { useFormik } from "formik";
import * as Yup from 'yup';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('invalid email address').required("required email address"),
      password: Yup.string().max(20, "must be 20 character or less").required("required password"),
    }),

    onSubmit: () => {
      const dataLoginRequest = {
        "username":formik.values.email,
        "password":formik.values.password,
      }
      console.log(dataLoginRequest)
      dispatch(auth( dataLoginRequest));
    }
  });

if (isAuthenticated) return <Navigate to="/dashbaord" />;

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true });
  // };

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextField 
        name="email"
         label="Email address"
         value={formik.values.email}
         error={formik.touched.email && formik.errors.email ? true : false}
         helperText={formik.errors.email}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password ? true : false}
          helperText={formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" >
        Login
      </LoadingButton>
      </form>
    </>
  );
}
