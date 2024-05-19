//  Đăng nhập vào hệ thống


import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Carousel, Image, Input, Spin } from "antd";
import AuthApi from "apis/AuthApi";
import { background, logo_iuh } from "assets/images";
import { useUser } from "contexts/UserProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import path from "routes/Path";
import { parseParams } from "utils/getQueryString";
import { getSignoutUri } from "utils/getSignoutUri";
import { IdcardOutlined, LockOutlined } from "@ant-design/icons";

const onboards = [
  {
    title: "THƯ CHÚC TẾT 2024",
    sologan: "Chúc mừng năm mới 2024, chúc mọi người năm mới an khang thịnh vượng, vạn sự như ý.",
  },
  {
    title:
      "Thông báo v/v đăng ký học phần và đóng học phí học kỳ 2, năm học 2023 – 2024",
    sologan:
      "Căn cứ Quyết định số 343/QĐ-ĐHCN ngày 03 tháng 3 năm 2023 của Hiệu trưởng Trường Đại học Công nghiệp Thành phố Hồ Chí Minh về việc ban hành tiến độ đào tạo năm học 2023 - 2024, Nhà trưởng thông báo thời gian đăng ký học phần và đóng học phí học kỳ 2 năm học 2023 - 2024.",
  },
  {
    title: "IUH đón nhận chứng nhận 04 chương trình đào tạo đạt chuẩn AUN-QA",
    sologan:
      "Chiều ngày 19/11/2019, Trường Đại học Công nghiệp Thành phố Hồ Chí Minh đã long trọng tổ chức Lễ trao chứng nhận 04 chương trình đào tạo đạt chuẩn AUN - QA và Gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20/11.",
  },
];

const SignInPage = (): JSX.Element => {
  const { getUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const query: any = parseParams(window.location.search);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`${path.ROOT}`);
    }
    if (!query.code) return;
    signin(query.code);
  }, [query.code]);

  const { mutate: signin, isPending } = useMutation({
    mutationFn: AuthApi.signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      getUser();
      navigate(`${path.ROOT}`);
    },
    onError: (error: any) => {
      localStorage.removeItem("token");
      const logout_uri = getSignoutUri();
      window.location.replace(logout_uri);
      navigate(`${path.ROOT}`);
    },
  });

  const onSubmit = async () => {
    window.location.replace("/");
    // window.location.replace(process.env.REACT_APP_AWS_COGNITO_LOGIN as string);
  };
  const screenWidth = window.innerWidth;

  return (
    <Spin tip="Loading..." size="large" spinning={isPending}>
      <div
        className="flex "
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "95vh",
        }}
      >
        {/*Layout bên trái */}
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={
            screenWidth <= 768
              ? "hidden"
              : "flex flex-col items-center justify-center w-2/3 h-full"
          }
        >
          {/* <Image
            src={logo_pnj_login_right}
            alt="materials"
            preview={false}
            className="mb-5"
            width={300}
            height={300}
          />  */}
          <div className="w-2/3 h-1/5">
            <Carousel
              arrows
              autoplay={true}
              style={{
                position: "relative", // Đảm bảo carousel có position để các elements con có thể định vị tương đối
                top: "50%", // Dịch chuyển carousel xuống dưới 50% so với vị trí ban đầu
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền tối
                backdropFilter: "blur(5px)", // Hiệu ứng mờ đục
              }}
            >
              {onboards.map((onboard, index) => (
                <div key={index} className="flex flex-col gap-6 px-4 p-5">
                  <p
                    style={{
                      fontSize: "32px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "40px",
                    }}
                    className="p-4 text-center text-white para-bold-1"
                  >
                    {onboard.title}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "165%",
                      wordWrap: "break-word",
                    }}
                    className="text-center text-amber-200  whitespace-pre opacity-70 text-wrap"
                  >
                    {onboard.sologan}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/*Layout bên phải */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Màu nền mờ đục
            backdropFilter: "blur(5px)", // Hiệu ứng mờ đục
          }}
          className={
            screenWidth <= 768
              ? "flex flex-col items-center justify-center w-full h-full"
              : "flex flex-col items-center  w-1/3 h-full"
          }
        >
          <Image
            height={100}
            className="object-contain mt-5"
            src={logo_iuh}
            alt="logo"
            preview={false}
          />
          <p className="mt-5 text-3xl font-bold mb-32">
            CỔNG THÔNG TIN SINH VIÊN
          </p>
          <div className="flex flex-col items-center justify-center w-96">
            {/* Mã sinh viên*/}
            <Input
              id="studentId"
              size="large"
              placeholder="Nhập mã số sinh viên"
              className="mt-5 p-3 text-center"
              prefix={<IdcardOutlined />}
              style={{ paddingLeft: "25px" }}
            />
            {/* Mật khẩu*/}
            <Input.Password
              id="password"
              className="mt-5 p-3"
              size="large"
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined />}
              style={{ paddingLeft: "25px" }}
            />
          </div>
          <button
            className="py-3 mt-12 font-bold text-white bg-primary-50 px-32 rounded-xl text-base"
            onClick={onSubmit}
          >
            Đăng nhập
          </button>

          <div
            className="bottom-info mb-2 text-center text-white"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
            }}
          >
            <p>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HỒ CHÍ MINH</p>
            <p> Địa chỉ : Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp</p>
            <p>Điện thoại: 0283 8940 390</p>
            <p>Email: dhcn@luh.edu.vn</p>
          </div>
        </div>
      </div>
      {/* Bottom trang */}
      <div
        className="bottom-info  text-center text-white w-full"
        style={{
          backgroundColor: "#0069D9",
          bottom: "0",
          height: "5vh",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <p>Bản quyền 2024 - Khánh An_Gia Đại_Hữu Hiệp</p>
        <p>©2024 ADHVN. All rights reserved</p>
      </div>
    </Spin>
  );
};

export default SignInPage;
