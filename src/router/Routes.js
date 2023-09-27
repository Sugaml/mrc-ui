// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Course } from '../components/course';
// import { EnrollForm } from '../components/EnrollForm';
// import { Home } from '../components/Home';
// import { SignIn } from '../components/Signin';
// import { SignUp } from '../components/Signup';
// import PrivateRoute from "./PrivateRouting";
// import { BictCourse } from '../components/BictCourse';
// import { CourseChoice } from '../components/CourseChoice';
// import {CustomizedSnackbars} from '../components/SnackBar'
// import { ForgotPassword } from '../components/ForgotPassword';
// import PublicRoute from './publicRouting';
// import { ResetPassword } from '../components/ResetPassword';
// import { VerifyEmail } from '../components/VerifyEmail';
// import HomePage from '../components/HomePage';
// import { StudentHomePage } from '../components/StudentHomePage';
// import { CourseInformation } from '../components/CourseInformation';
// import {Payment} from '../components/Payment';
// import { PaymentHistory } from '../components/PaymentHistory';
// import { Logout } from '../components/Logout';
// import { ChangePasswordForm } from '../components/ChangePassword';

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
//         <Route path='/user/verify/:id' element={<VerifyEmail/>}/>
//         <Route path='/signup' element={<SignUp/>}/>
//         <Route element={<PublicRoute />}>
//         <Route path='/' element={<Home />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/signin' element={<SignIn />} />
//         <Route path='/forgot_password' element={<ForgotPassword />} />
//         <Route path='/menu' element={<BictCourse />} />
//         <Route path='/logout' element={<Logout/>}/>
//         </Route>

//         <Route element={<PrivateRoute />}>
//         <Route path='/menu' element={<BictCourse />} />
//         <Route path='/profile' element={<StudentHomePage/>}/>
//         <Route path='/course' element={<CourseInformation/>}/>
//         <Route path='/payment' element={<Payment/>}/>
//         <Route path='/setting' element={<ChangePasswordForm/>}/>
//         <Route path='/payment-history' element={<PaymentHistory/>}/>

//         <Route  path='/enroll' element={<EnrollForm />} /> 
//         <Route path='/online' element={<CourseChoice/>}/>
//         <Route index path='/courses' element={<Course />} />
//         <Route path='/snack' element={<CustomizedSnackbars />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
// export default Router