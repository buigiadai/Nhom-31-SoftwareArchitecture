import React from "react";
import ProtectedRoute from "../pages/Root";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import {
  Home,
  SignIn,
  RegisterCourse,
  Schedule,
  FrameProgram,
  GeneralReceipt,
  GeneralInformation,
  LookUpDebt,
  LearningOutcomes,
  OnlinePayments
} from "pages";
import path from "./Path";
import { useUser } from "contexts/UserProvider";
import { Spin } from "antd";

const Router = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spin />;
  const routes = [
    {
      path: `${path.ROOT}`,
      element: <ProtectedRoute />,
      // children,
      children: [
        // index dùng để vào trang đầu tiên khi truy cập trang web
        { path: `${path.ROOT}`, element: <Home />, index: true },
        { path: `${path.RegisterCourse}`, element: <RegisterCourse /> },
        { path: `${path.Schedule}`, element: <Schedule /> },
        { path: `${path.FrameProgram}`, element: <FrameProgram /> },
        { path: `${path.GeneralReceipt}`, element: <GeneralReceipt /> },
        { path: `${path.GeneralInformation}`, element: <GeneralInformation /> },
        { path: `${path.LookUpDebt}`, element: <LookUpDebt /> },
        { path: `${path.LearningOutcomes}`, element: <LearningOutcomes /> },
        { path: `${path.OnlinePayments}`, element: <OnlinePayments /> },
      ],
    },
    { path: `${path.SIGNIN}`, element: <SignIn /> },
    { path: `${path.ALL}`, element: <Navigate to={`${path.ROOT}`} /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
