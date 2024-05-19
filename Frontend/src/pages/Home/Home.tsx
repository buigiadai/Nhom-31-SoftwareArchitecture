// Trang chủ

import React from "react";
import "./index.css";
import { Layout, Card, Col, Row, Space } from "antd";
import {
  BellOutlined,
  ScheduleOutlined,
  ScheduleFilled,
} from "@ant-design/icons";
import {
  download,
  download1,
  download2,
  download3,
  download4,
  download6,
  download7,
  download8,
} from "assets/icon"; 

// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css.map";
// import "./../../external_libs/bootstrap-3.3.7/dist/css/bootstrap.min.css";

const featured = [
  {
    link: "#",
    imgsrc: download,
    alt: "Lịch theo tuần",
  },
  { link: "#", imgsrc: download1, alt: "Kết quả học tập" },
  { link: "#", imgsrc: download2, alt: "Đăng ký học phần" },
  { link: "#", imgsrc: download3, alt: "Tra cứu công nợ" },
  { link: "#", imgsrc: download4, alt: "Thanh toán trực tuyến" },
  { link: "#", imgsrc: download6, alt: "Phiếu thu tổng hợp" },
  { link: "#", imgsrc: download7, alt: "Lịch theo tiến độ" },
  { link: "#", imgsrc: download8, alt: "Nhắc nhở" },
];
const hocKyDaHoc = [
  "HK1 (2020-2021)",
  "HK2 (2020-2021)",
  "HK3 (2020-2021)",
  "HK1 (2021-2022)",
  "HK2 (2021-2022)",
  "HK3 (2021-2022)",
  "HK1 (2022-2023)",
  "HK2 (2022-2023)",
  "HK3 (2022-2023)",
  "HK1 (2023-2024)",
  "HK2 (2023-2024)",
  "HK3 (2023-2024)",
];

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 10px)",
};

const cardStyle: React.CSSProperties = {
  width: "100%",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const cardStyleRight: React.CSSProperties = {
  width: "100%",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const Home: React.FC = () => (
  <div>
    {/* Header */}
    <div
      style={{
        display: "flex",
        gap: "16px",
        height: "auto",
        marginBottom: "10px",
      }}
    >
      {/* Header left*/}
      <Layout style={{ ...layoutStyle, flex: 1 }}>
        <Card title="Thông tin sinh viên" itemID="title" style={cardStyle}>
          <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={5}>
              <div>
                <img
                  id="avatar"
                  src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                  alt="avatar"
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
              <div className="text-center" style={{ marginTop: "10px" }}>
                <a
                  href="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                  className="btn btn-primary btn-sm text-blue-600"
                  lang="db-chitiet-button"
                >
                  Xem chi tiết
                </a>
              </div>
            </Col>
            <Col className="gutter-row" span={9}>
              <Space direction="vertical">
                <Space direction="horizontal">
                  <span lang="sv-ho">MSSV: </span>
                  <span className="font-bold">20102181</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Họ và tên: </span>
                  <span className="font-bold">Trần Văn A</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Giới tính: </span>
                  <span className="font-bold">Nam</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Ngày sinh: </span>
                  <span className="font-bold">30/06/2002</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Nơi sinh: </span>
                  <span className="font-bold">Tỉnh Gia Lai</span>
                </Space>
              </Space>
            </Col>
            <Col className="gutter-row" span={10}>
              <Space direction="vertical">
                <Space direction="horizontal">
                  <span lang="sv-ho">Lớp học: </span>
                  <span className="font-bold">KTPHM16A</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Khoá học: </span>
                  <span className="font-bold">2020-2021</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Bậc đào tạo: </span>
                  <span className="font-bold">Đại học</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Loại hình thức đào tạo: </span>
                  <span className="font-bold">Chính quy</span>
                </Space>
                <Space direction="horizontal">
                  <span lang="sv-ho">Ngành: </span>
                  <span className="font-bold">Kỹ thuật phần mềm</span>
                </Space>
              </Space>
            </Col>
          </Row>
        </Card>
      </Layout>

      {/* Header right */}
      <Layout style={{ ...layoutStyle, flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
          }}
        >
          <Card
            title="Nhắc nhở mới, chưa xem"
            size="small"
            headStyle={{ borderBottom: "none" }}
            style={cardStyleRight}
          >
            <Row gutter={[16, 16]}>
              <Col className="gutter-row" span={12}>
                <div className="border-radi">
                  <p id="bigfont">0</p>
                </div>
                <div>
                  <a
                    href="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                    className="btn btn-primary btn-sm text-blue-600"
                    lang="db-chitiet-button"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </Col>
              <Col className="gutter-row text-right" span={12}>
                <div className="justify-center">
                  <BellOutlined
                    className="text-1xl justify-center items-center"
                    id="icon"
                  />
                </div>
              </Col>
            </Row>
          </Card>
          <div style={{ display: "flex", gap: "16px", flex: 1 }}>
            <Card
              title="Lịch học trong tuần"
              size="small"
              headStyle={{
                borderBottom: "none",
                color: "#fff",
                backgroundColor: "#4096ff",
              }}
              id="lichhoc"
              style={{ flex: 1 }}
            >
              <Row gutter={[16, 16]}>
                <Col className="gutter-row" span={12}>
                  <div className="border-radi">
                    <p id="bigfont">0</p>
                  </div>
                  <div>
                    <a
                      href="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                      className="btn btn-primary btn-sm text-blue-600"
                      lang="db-chitiet-button"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </Col>
                <Col className="gutter-row text-right" span={12}>
                  <div className="justify-center ">
                    <ScheduleOutlined
                      className="text-1xl justify-center items-center"
                      id="icon"
                    />
                  </div>
                </Col>
              </Row>
            </Card>
            <Card
              title="Lịch thi trong tuần"
              size="small"
              headStyle={{
                borderBottom: "none",
                color: "#fff",
                backgroundColor: "#FF7605",
              }}
              id="lichthi"
              style={{ flex: 1 }}
            >
              <Row gutter={[16, 16]}>
                <Col className="gutter-row" span={12}>
                  <div className="border-radi">
                    <p id="bigfont">0</p>
                  </div>
                  <div>
                    <a
                      href="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
                      className="btn btn-primary btn-sm text-orange-500"
                      lang="db-chitiet-button"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </Col>
                <Col className="gutter-row text-right" span={12}>
                  <div className="justify-center ">
                    <ScheduleFilled
                      className="text-1xl justify-center items-center"
                      id="icon"
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
    {/* Content */}
    <div
      className="featured"
      style={{
        display: "flex",
        gap: "16px",
        height: "auto",
        marginBottom: "15px",
      }}
    >
      {featured.map((itemFeatured, index) => (
        <div className="featured-item">
          <a
            href={itemFeatured.link}
            title={itemFeatured.alt}
            id="menusinhvien-8-title"
          >
            <div className="box-df auto-height">
              <div className="icon">
                <img src={itemFeatured.imgsrc} alt={itemFeatured.alt} />
              </div>
              <span lang="menusinhvien-8-vt">{itemFeatured.alt}</span>
            </div>
          </a>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="chart-custom flex justify-between">
      <Card className="col-md-5">
        <div className="box-df">
          <div className="portlet">
            <div className="portlet-title">
              <div className="caption">
                <span className="caption-subject bold">
                  <a href="/ket-qua-hoc-tap.html" lang="db-kqht">
                    Kết quả học tập
                  </a>
                </span>
              </div>
              <div className="actions">
                <select
                  className="form-control"
                  id="cboIDDotThongKeKQHT"
                  itemID="db-hocky-combobox"
                  name="cboIDDotThongKeKQHT"
                  aria-placeholder="Chọn học kỳ"
                >
                  <option value="">Chọn học kỳ </option>
                  {hocKyDaHoc.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="portlet-body">
              <div id="box-dashboard-thongke-ketquahoctap-theodot">
                <div className="text-center">
                  <img
                    src="https://sv.iuh.edu.vn/Content/ThemeMXH/img/tkkqht.png"
                    alt="Thống kê kết quả học tập"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="col-md-3">
        <div className="box-df">
          <div className="portlet">
            <div className="portlet-title">
              <div className="caption">
                <span className="caption-subject bold" lang="db-tiendohoctap">
                  Tiến độ học tập
                </span>
              </div>
            </div>
            <div className="portlet-body">
              <div id="chartThongTinTinChiDaHoc"></div>
              <p
                style={{
                  color: "#003f65",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                999/156
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="col-md-4">
        <div className="box-df">
          <div className="portlet">
            <div className="portlet-title">
              <div className="caption">
                <span className="caption-subject bold" lang="db-lhp">
                  Lớp học phần
                </span>
              </div>
              <div className="actions">
                <select
                  className="form-control"
                  id="cboIDDotForLHP"
                  itemID="db-hocky-combobox_1"
                  name="cboIDDotForLHP"
                  aria-placeholder="Chọn học kỳ"
                >
                  <option value="">Chọn học kỳ</option>
                  {/* Danh sách các option */}
                  {hocKyDaHoc.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="portlet-body">
              <div id="box-dashboard-lophocphan-theodot">
                <div className="panel panel-admin">
                  <div className="panel-scroll border-scroll">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Môn học/học phần</th>
                          <th className="text-center">Số tín chỉ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="80%">
                            <div>
                              <a
                                href="#"
                                className="color-active"
                                data-bg="542303"
                              >
                                420300154901
                              </a>
                            </div>
                            <div className="name">
                              Kiến trúc và Thiết kế phần mềm
                            </div>
                          </td>
                          <td width="20%">
                            <div className="text-center">4</div>
                          </td>
                        </tr>
                        <tr>
                          <td width="80%">
                            <div>
                              <a
                                href="#"
                                className="color-active"
                                data-bg="551395"
                              >
                                420300309801
                              </a>
                            </div>
                            <div className="name">Thực tập doanh nghiệp</div>
                          </td>
                          <td width="20%">
                            <div className="text-center">5</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default Home;
