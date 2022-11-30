import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../AppBar";

function PrivateRoute() {
  const authValue = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {authValue ? (
        <div>
         <ResponsiveAppBar>
          <Outlet />
        </ ResponsiveAppBar>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default PrivateRoute;
