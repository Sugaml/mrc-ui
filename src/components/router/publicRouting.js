import React from "react";
import { Outlet } from "react-router-dom";
import PublicResponsiveAppBar from "../PublicAppBar";

function PublicRoute() {

  return (
    <div>
        <div>
         <PublicResponsiveAppBar>
          <Outlet />
        </ PublicResponsiveAppBar>
        </div>
    </div>
  );
}

export default PublicRoute;
