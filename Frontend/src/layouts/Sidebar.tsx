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
      getItem("Ghi chú nhắn nhở", `${path.ROOT}`),
      getItem("Đề xuất cập nhật thông tin", `${path.ROOT}`),
    ]),
    getItem("Học tập", "manage-order", <ShoppingCartOutlined />, [
      getItem("Kết quả học tập", `${path.LearningOutcomes}`),
      getItem("Lịch theo tuần", `${path.Schedule}`),
      getItem("Lịch theo tiến độ", `${path.ROOT}`),
      getItem("Lịch theo lớp học danh nghĩa", `${path.ROOT}`),
    ]),
    getItem("Đăng ký học phần", "report", <WarningOutlined />, [
      getItem("Đăng ký học phần", `${path.RegisterCourse}`),
      getItem("Chương trình khung", `${path.FrameProgram}`),
    ]),
    getItem("Học phí", "report", <WarningOutlined />, [
      getItem("Tra cứu công nợ", `${path.LookUpDebt}`),
      getItem("Thanh toán trực tuyến", `${path.OnlinePayments}`),
      getItem("Phiếu thu tổng hợp", `${path.GeneralReceipt}`),
    ]),

  ];

  return (
    <Sider
      width={262}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex items-center justify-center py-5 bg-slate-600">
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
        theme="dark"
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
