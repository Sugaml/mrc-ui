import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Route';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './theme';
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import AppRouter from './router/Route';
import AppRoutes from './router/Routes';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
    // <div className="App">
    //   {/* <Router /> */}
    //   <Router/>
    //   <ToastContainer
    //       position="top-center"
    //       autoClose={4000}
    //       hideProgressBar
    //       newestOnTop
    //       closeOnClick
    //       rtl={false}
    //       pauseOnVisibilityChange
    //       draggable
    //       pauseOnHover
    //     />
    // </div>
  );
}

export default App;
