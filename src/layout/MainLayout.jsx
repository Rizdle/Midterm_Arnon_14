import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div className="bg-blue-200 min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
