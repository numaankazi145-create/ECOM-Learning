import React from "react";
import { Header } from "./Outlet/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Outlet/Footer";

export function AppLayout() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-7">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
