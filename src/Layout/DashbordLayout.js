import React, { Children, useState } from "react";
import "./dashboardlayout.css";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

const DashbordLayout = (props) => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="dashboard-container">{props.children}</div>
    </>
  );
};

export default DashbordLayout;
