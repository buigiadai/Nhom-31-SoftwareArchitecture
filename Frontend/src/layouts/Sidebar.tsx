import { Button, Layout, Menu, MenuProps, Space } from "antd";
import { logo_iuh } from "assets/images";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import path from "routes/Path";
import { icons } from "utils/icons";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
) => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const {
  PieChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  WarningOutlined,
  ProductOutlined,
  PercentageOutlined,
  DropboxOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
  RiseOutlined,
  FundViewOutlined,
} = icons;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const items: MenuItem[] = [
    getItem("Trang chủ", `${path.ROOT}`, <PieChartOutlined />),
    getItem("Thông tin chung", "category", <ProductOutlined />, [
      getItem("Thông tin sinh viên", `${path.GeneralInformation}`),
      // getItem("Thông tin cá nhân", `${path.PersonalInformation}`),
    ]),
    getItem("Học tập", "manage-order", <FundViewOutlined />, [
      getItem("Kết quả học tập", `${path.LearningOutcomes}`),
      getItem("Lịch theo tuần", `${path.Schedule}`),
      getItem("Lịch theo tiến độ", `${path.ScheduleAccording}`),
      // getItem("Lịch theo lớp học danh nghĩa", `${path.ROOT}`),
    ]),
    getItem("Đăng ký học phần", "report", <RiseOutlined />, [
      getItem("Đăng ký học phần", `${path.RegisterCourse}`),
      getItem("Chương trình khung", `${path.FrameProgram}`),
    ]),
    getItem("Học phí", "report", <MoneyCollectOutlined />, [
      getItem("Thanh toán trực tuyến", `${path.OnlinePayments}`),
      getItem("Phiếu thu tổng hợp", `${path.GeneralReceipt}`),
    ]),
  ];

  return (
    <Sider
      width={262}
      collapsible
      style={{ backgroundColor: "#E7ECF0" }}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex items-center justify-center py-5 bg-white border-b-error-50">
        <img
          src={logo_iuh}
          width={200}
          height={200}
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate(`${path.ROOT}`)}
        />
      </div>
      <Menu
        theme="light"
        defaultOpenKeys={location.state?.key ? [location.state.key] : []}
        selectedKeys={[location.pathname]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        onSelect={(e) => {
          navigate(e.keyPath[0], {
            state: { key: e.keyPath.length > 1 ? e.keyPath[1] : undefined },
          });
        }}
      />
    </Sider>
  );
};

export default Sidebar;
