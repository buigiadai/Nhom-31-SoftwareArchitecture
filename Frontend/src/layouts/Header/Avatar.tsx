import React, { useEffect } from "react";
import { Dropdown, type MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import path from "routes/Path";
import { icons } from "utils/icons";
import { getSignoutUri } from "utils/getSignoutUri";
import { useUser } from "contexts/UserProvider";

const { LogoutOutlined, UserOutlined } = icons;

const Avatar = () => {
  // const navigate = useNavigate();
  const { user, signOut } = useUser();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={`${path.ROOT}`}>Tài khoản</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <a onClick={signOut}>Đăng xuất</a>,
      icon: <LogoutOutlined />,
    },
  ];
  useEffect(() => {
    // console.log(user);
  }, [user]);
  return (
    <Dropdown
      className="cursor-pointer"
      menu={{ items }}
      placement="bottomLeft"
      arrow
    >
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-12 "
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt=""
        />
        <div className="text-main font-bold ml-2">{user?.fullName}</div>
      </div>
    </Dropdown>
  );
};

export default Avatar;
