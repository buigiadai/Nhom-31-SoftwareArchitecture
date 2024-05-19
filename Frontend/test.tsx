import React from "react";
import "../Home/index.css";
import { Flex, Layout, Card, Col, Row, Space } from "antd";
import { StarOutlined, StarFilled, BellOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

const App: React.FC = () => (
  <Flex gap="middle" wrap>
    {/* Header  left*/}
    <Layout style={layoutStyle}>
      <Card title="Thông tin sinh viên" size="default">
        <Row gutter={16}>
          <Col className="gutter-row" span={5}>
            <div className="border-radi">
              <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg" />
            </div>
            <div className="text-center">
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
                <span className="bold">20102181</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Họ và tên: </span>
                <span className="bold">Trần Văn A</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Giới tính: </span>
                <span className="bold">Nam</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Ngày sinh: </span>
                <span className="bold">30/06/2002</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Nơi sinh: </span>
                <span className="bold">Tỉnh Gia Lai</span>
              </Space>
            </Space>
          </Col>
          <Col className="gutter-row" span={10}>
            <Space direction="vertical">
              <Space direction="horizontal">
                <span lang="sv-ho">Lớp học: </span>
                <span className="bold">KTPHM16A</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Khoá học: </span>
                <span className="bold">2020-2021</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Bậc đào tạo: </span>
                <span className="bold">Đại học</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Loại hình thức đào tạo: </span>
                <span className="bold">Chính quy</span>
              </Space>
              <Space direction="horizontal">
                <span lang="sv-ho">Ngành: </span>
                <span className="bold">Kỹ thuật phần mềm</span>
              </Space>
            </Space>
          </Col>
        </Row>
      </Card>
    </Layout>

    {/* Header  right*/}
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <p>Nhắc nhở mới, chưa xem</p>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <p>0</p>
            <a href="#">Xem chi tiết</a>
          </Col>
          <Col className="gutter-row" span={12}>
            <BellOutlined />
          </Col>
        </Row>
      </Header>
      <Footer style={footerStyle}>Chia 2</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Content style={contentStyle}>Content</Content>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>

    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Flex>
);

export default App;
