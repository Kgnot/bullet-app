import "./Dashboard.css";
import { lazy } from "react";
const DashboardTop = lazy(() => import("../../Components/DashboardComponents/DashboardTop/DashboardTop.tsx"));
const DashboardBot = lazy(() => import( "../../Components/DashboardComponents/DashboardBot/DashboardBot.tsx"));


const Dashboard = () => {
  return (
    <section className="Dashboard">
      <DashboardTop/>
      <DashboardBot/>
    </section>
  );
};

export default Dashboard;
