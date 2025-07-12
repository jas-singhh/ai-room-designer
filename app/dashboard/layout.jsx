"use client";
import React from "react";
import Header from "./_components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=" mx-auto py-10 container px-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
