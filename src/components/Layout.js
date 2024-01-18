import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from "react";

export default function Layout() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Header />
      <div className="bg-white dark:bg-gray-800">
        <Outlet />
      </div>
    </div>
  );
}
