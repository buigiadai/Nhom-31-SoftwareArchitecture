import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import path from "routes/Path";
import Sidebar from "layouts/Sidebar";
import MainHeader from "layouts/Header/MainHeader";

const Root = () => {
  const isToken = localStorage.getItem("token");
  // const isToken = true;

  const { Content } = Layout;

  if (isToken) {
    return <Navigate to={`${path.SIGNIN}`} />;
  }
 
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <MainHeader />
        <div className="pb-5 px-5 bg-sub h-full">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Root;
