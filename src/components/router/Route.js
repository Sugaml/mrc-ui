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
import { PaymentPopup } from '../PaymentPopup';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route index path='/billing' element={<PaymentPopup />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
        <Route index path='/home' element={<Home />} />
        <Route  path='/online' element={<EnrollForm />} /> 
        <Route path='/coursechoice' element={CourseChoice}/>
        <Route index path='/courses' element={<Course />} />
        
        <Route path='/menu' element={<BictCourse />} />
        <Route path='/snack' element={<CustomizedSnackbars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



