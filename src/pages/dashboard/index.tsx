import { Outlet } from "react-router-dom";
import HamburguerMenu from "../../components/hamburguerMenu";
import HeaderDashboard from "../../components/headerDashboard";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <HamburguerMenu />
      <Outlet />
    </>
  );
}

export default Dashboard;
