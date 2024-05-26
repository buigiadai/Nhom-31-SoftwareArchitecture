// Tổng hợp biên lai
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { DownloadOutlined, InfoCircleOutlined } from "@ant-design/icons";

function GeneralInformation() {
  //data
  const [data, setData] = useState([
    {
      STT: 1,
      SoPhieu: 841027,
      MaHoaDon: "00014482",
      NgayThu: "17/05/2024 01:50",
      SoTien: "4.990.000",
      DonViThu: "Ngân hàng Vietcombank",
      LoaiHDDT: "Cá nhân",
      HDDT: "Download",
      ChiTiet: "Edit",
      NhatKy: "History",
    },
    {
      STT: 2,
      SoPhieu: 252854,
      MaHoaDon: "00147858",
      NgayThu: "13/12/2023 17:28",
      SoTien: "680.500",
      DonViThu: "Ngân hàng Vietcombank",
      LoaiHDDT: "Cá nhân",
      HDDT: "",
      ChiTiet: "Edit",
      NhatKy: "History",
    },
    {
      STT: 3,
      SoPhieu: 811094,
      MaHoaDon: "00147858",
      NgayThu: "13/12/2023 17:28",
      SoTien: "6.310.000",
      DonViThu: "Ngân hàng Vietcombank",
      LoaiHDDT: "Cá nhân",
      HDDT: "Download",
      ChiTiet: "Edit",
      NhatKy: "History",
    },
    {
      STT: 4,
      SoPhieu: 750668,
      MaHoaDon: "00078582",
      NgayThu: "31/07/2023 00:31",
      SoTien: "10.170.000",
      DonViThu: "Ngân hàng Vietcombank",
      LoaiHDDT: "Cá nhân",
      HDDT: "Download",
      ChiTiet: "Edit",
      NhatKy: "History",
    },
  ]);
  const [dataDetail, setDataDetail] = useState([
    {
      STT: 1,
      Ma: "420300242105",
      NoiDungThu: "Tiếng Anh 2",
      HocKy: "2023-2024",
      SoTien: "1.980.000",
    },
    {
      STT: 2,
      Ma: "420300362101",
      NoiDungThu: "Lập trình WWW (Java)",
      HocKy: "2023-2024",
      SoTien: "3.010.000",
    },
  ]);

  //select
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  //function
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  function openDialog() {
    setIsDialogOpen(true);
  }
  //html
  return (
    <div className="box-df snipcss-4GjsR">
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span
              className="caption-subject bold"
              lang="phieuthutonghop-pagetitle "
              style={{ fontSize: "25px" }}
            >
              Phiếu thu tổng hợp
            </span>
          </div>
        </div>
        <div id="viewPhieuThuTongHop">
          <div id="viewPhieuThuTongHop">
            <div className="table-responsive">
              <table
                className="table-pointer table-custom table table-bordered text-center no-footer dtr-inline"
                width="100%"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th>STT</th>
                    <th>Số phiếu</th>
                    <th>Mã hóa đơn</th>
                    <th>Ngày thu</th>
                    <th>Số tiền</th>
                    <th>Đơn vị thu</th>
                    <th>Loại HĐĐT</th>
                    <th>HĐĐT</th>
                    <th>Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      role="row"
                      // onclick="SelectRow(this);"
                      style={{ backgroundColor: "!important" }}
                    >
                      <td>{item.STT}</td>
                      <td>{item.SoPhieu}</td>
                      <td>{item.MaHoaDon}</td>
                      <td>
                        <span>{item.NgayThu}</span>
                      </td>
                      <td className="text-right">
                        <span>{item.SoTien}</span>
                      </td>
                      <td className="text-left">{item.DonViThu}</td>
                      <td>{item.LoaiHDDT}</td>
                      <td>
                        <a
                          href="/SinhVien/DownloadHDDT?SoPhieu=841027&LoaiSoThu=1&InvoiceUrl=VNPT%5C17052024%5C00014482-20102181-2-841027.pdf&Mode=1"
                          target="_blank"
                        >
                          <DownloadOutlined />
                        </a>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          id="ChiTietPhieuThuSinhVien"
                          onClick={openDialog}
                        >
                          <InfoCircleOutlined />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id="viewChiTietPhieuThuSinhVien" />
        </div>
      </div>
      {/* dialog */}
      <div id="overlay" className={isDialogOpen ? "overlay" : " "}>
        <dialog
          id="dialog"
          className="window snipcss-jE89a style-zImbr"
          style={{ display: isDialogOpen ? "block" : "none" }}
        >
          <button onClick={closeDialog} aria-label="close" className="x">
            ❌
          </button>

          <div className="content">
            <div className="clearfix">
              <span
                className=" caption-subject font-blue-madison bold"
                style={{ float: "left" }}
              >
                Số phiếu: 841027{" "}
              </span>
            </div>
            <div className="clearfix">
              <span className=" caption-subject font-blue-madison bold">
                Mã hóa đơn: 00014482
              </span>
            </div>{" "}
            <div className="clearfix" style={{ marginBottom: 10 }}>
              <span className="  caption-subject font-blue-madison bold">
                Ngày thu: <span>17/05/2024 01:50</span>{" "}
              </span>
            </div>
            <div className="table-responsive">
              <table
                className="table-custom table table-bordered text-center no-footer dtr-inline"
                width="100%"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting_disabled">STT</th>
                    <th className="sorting_disabled">Mã</th>
                    <th className="sorting_disabled">Nội dung thu</th>
                    <th className="sorting_disabled">Học kỳ</th>
                    <th className="sorting_disabled">Số tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  {dataDetail.map((item, index) => (
                    <tr role="row">
                      <td>{item.STT}</td>
                      <td>{item.Ma}</td>
                      <td className="text-left">{item.NoiDungThu}</td>
                      <td>{item.HocKy}</td>
                      <td className="text-right">
                        <span>{item.SoTien}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
export default GeneralInformation;
