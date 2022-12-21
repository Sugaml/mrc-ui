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
import {KhaltiPayment} from '../KhaltiPayment';
import { Profile } from '../Profile';
import { FeeInformation } from '../FeeInformation';
import PublicRoute from './publicRouting';
import { IconUpload } from '../IconUpload';
import { ResetPassword } from '../ResetPassword';
 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/menu' element={<BictCourse />} />
        <Route  path="/upload" element={<IconUpload/>}/>
        <Route path='/logout' element={<Home/>}/>
        </Route>

        <Route element={<PrivateRoute />}>
        <Route  path='/home' element={<Home />} />
        <Route path='/menu' element={<BictCourse />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/account' element={<FeeInformation/>}/>

        <Route  path='/enroll' element={<EnrollForm />} /> 
        <Route index path='/billing' element={<KhaltiPayment />} />
        <Route path='/online' element={<CourseChoice/>}/>
        <Route index path='/courses' element={<Course />} />
        <Route path='/snack' element={<CustomizedSnackbars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



