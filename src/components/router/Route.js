import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Course } from '../course';
import { EnrollForm } from '../EnrollForm';
import { Home } from '../Home';
import { SignIn } from '../Signin';
import { SignUp } from '../Signup';
import PrivateRoute from "./PrivateRouting";
import { BictCourse } from '../BictCourse';
import { CourseChoice } from '../CourseChoice';
import {CustomizedSnackbars} from '../SnackBar'
import { ForgotPassword } from '../ForgotPassword';
import { FeeInformation } from '../FeeInformation';
import PublicRoute from './publicRouting';
import { ResetPassword } from '../ResetPassword';
import { VerifyEmail } from '../VerifyEmail';
import HomePage from '../HomePage';
import { StudentHomePage } from '../StudentHomePage';
import { CourseInformation } from '../CourseInformation';
import {Payment} from '../Payment';
import { PaymentHistory } from '../PaymentHistory';
import { Logout } from '../Logout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
        <Route path='/user/verify/:id' element={<VerifyEmail/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/menu' element={<BictCourse />} />
        <Route path='/logout' element={<Logout/>}/>
        </Route>

        <Route element={<PrivateRoute />}>
        <Route path='/menu' element={<BictCourse />} />
        <Route path='/profile' element={<StudentHomePage/>}/>
        <Route path='/course' element={<CourseInformation/>}/>
        <Route path='/account' element={<FeeInformation/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/payment-history' element={<PaymentHistory/>}/>

        <Route  path='/enroll' element={<EnrollForm />} /> 
        <Route path='/online' element={<CourseChoice/>}/>
        <Route index path='/courses' element={<Course />} />
        <Route path='/snack' element={<CustomizedSnackbars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



