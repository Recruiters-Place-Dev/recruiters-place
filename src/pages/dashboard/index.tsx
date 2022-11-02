import React from "react";
import { Outlet } from "react-router-dom";
import HeaderDashboard from "../../components/headerDashboard";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <Outlet />
    </>
  );
}

export default Dashboard;
