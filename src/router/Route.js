import { BrowserRouter, Navigate, Route, Routes,useRoutes } from 'react-router-dom'; // Import necessary components
import { useSelector } from 'react-redux';
import Page404 from '../components/404Page';
import { EnrollForm } from '../components/EnrollForm';
import { Home } from '../components/Home';
import { StudentHomePage } from '../components/StudentHomePage';
import { CourseInformation } from '../components/CourseInformation';
import {BictCourse} from '../components/BictCourse'
import { Payment } from '../components/Payment';
import { PaymentHistory } from '../components/PaymentHistory';
import { ChangePasswordForm } from '../components/ChangePassword';
import { SignIn } from '../components/Signin';
import SimpleLayout from '../layouts/simple';
import DashboardLayout from '../layouts/dashboard';
import DashboardAppPage from '../pages/DashboardAppPage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import ProductsPage from '../pages/ProductsPage';
import BlogPage from '../pages/BlogPage'


export default function Router() {
  // Replace this with your actual authentication logic
  // const isAuth = true;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const routes = useRoutes([
    {
      path: '/dashboard',
      element: isAuth ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'menu', element: <BictCourse />},
        { path: 'profile', element: <StudentHomePage />},
        { path: 'course', element: <CourseInformation />},
       
        // <Route path='/payment' element={<Payment/>}/>
        // <Route path='/setting' element={<ChangePasswordForm/>}/>
        // <Route path='/payment-history' element={<PaymentHistory/>}/>

        // <Route  path='/enroll' element={<EnrollForm />} /> 
        // <Route path='/online' element={<CourseChoice/>}/>
        // <Route index path='/courses' element={<Course />} />
        // <Route path='/snack' element={<CustomizedSnackbars />} />
      ],
    },
    {
      path: 'login',
      element: isAuth ? <Navigate to="/dashboard/app" /> : <LoginPage />,
    },
    {
      path: '/',
      element: isAuth ? <Navigate to="/dashboard/app" /> : <LoginPage />,
    },
    {
      element: isAuth ? <Navigate to="/dashboard/app" /> : <SimpleLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
