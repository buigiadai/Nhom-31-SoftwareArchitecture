//Thanh toán trực tuyến
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { QrcodeOutlined } from "@ant-design/icons";

function OnlinePayments() {
  //data
  const dataHK = [
    {
      id: 1,
      name: "HK1 (2020-2021)",
      value: 1,
    },
    {
      id: 2,
      name: "HK2 (2020-2021)",
      value: 2,
    },
    {
      id: 3,
      name: "HK3 (2020-2021)",
      value: 3,
    },
  ];

  const dataMonHoc = [
    {
      ma: "TN",
      name: "	Hoc phi tot nghiep",
      tc: 0,
      batBuoc: true,
      soTien: 1000000,
    },
    {
      ma: "420300242105",
      name: "Tieng Anh 2",
      tc: 3,
      batBuoc: true,
      soTien: 1980000,
    },
    {
      ma: "420300362101",
      name: "Lap trinh WWW (Java)",
      tc: 4,
      batBuoc: true,
      soTien: 3010000,
    },
  ];
  //select
  const [isSelect, setIsSelect] = useState<number[]>([]);

  //function
  function controllCollapse(index: number) {
    setIsSelect((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item !== index);
      } else {
        return [...prevState, index];
      }
    });
    console.log(isSelect);
  }

  function controllCollapseAll() {
    if (isSelect.length === dataMonHoc.length) {
      setIsSelect([]);
    } else {
      setIsSelect(dataMonHoc.map((_, index) => index));
    }
  }

  return (
    <div className="box-df snipcss-13YW3">
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span className="caption-subject bold">Thanh toán trực tuyến</span>
          </div>
          <div className="actions">
            <div id="style-TEmLQ" className="style-TEmLQ">
              <span lang="dot-label" id="style-SDPM5" className="style-SDPM5">
                Đợt
              </span>{" "}
              <select
                className="form-control"
                id="cboIDDotThanhToan"
                itemID="thanhtoanonline-dotthanhtoan-combobox"
                name="cboIDDotThanhToan"
                aria-placeholder="Tất cả"
              >
                <option value="">Tất cả</option>
                {dataHK.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div id="box_congnothanhtoan">
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          />
          <input
            id="txtMessLockThanhToan"
            name="txtMessLockThanhToan"
            type="hidden"
            defaultValue=""
          />
          <div className="table-responsive">
            <table
              className="table-pointer table-custom table table-bordered text-center"
              width="100%"
              role="grid"
              id="ThanhToanOl"
            >
              <thead>
                <tr role="row">
                  <td style={{ width: 40 }}>
                    <input
                      type="checkbox"
                      id="chkAll"
                      onClick={() => controllCollapseAll()}
                      defaultChecked
                    />
                  </td>
                  <th lang="thanhtoanonline-stt">STT</th>
                  <th lang="thanhtoanonline-ma">Mã</th>
                  <th lang="thanhtoanonline-noidungthu">Nội dung thu</th>
                  <th lang="thanhtoanonline-tinchi">Tín chỉ</th>
                  <th lang="thanhtoanonline-batbuoc">Bắt buộc</th>
                  <th lang="thanhtoanonline-sotien">Số tiền (VND)</th>
                </tr>
              </thead>
              <tbody>
                {dataMonHoc.map((item, index) => (
                  <tr key={index} onClick={() => controllCollapse(index)}>
                    <td className="text-center">
                      <input
                        aria-selected={
                          isSelect.includes(index) ? true : false
                        }
                        defaultChecked={isSelect.includes(index)}
                        className="chkKTT"
                        type="checkbox"
                        defaultValue="true"
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.ma}</td>
                    <td className="text-left">{item.name}</td>
                    <td>{item.tc}</td>
                    <td>
                      <div>
                        <div className="check" />
                      </div>
                    </td>
                    <td className="text-right">{item.soTien}</td>
                  </tr>
                ))}
                {/*Tổng thanh toán  */}
                <tr>
                  <td colSpan={6} className="text-right">
                    <p className="bold">
                      <span lang="thanhtoanonline-tongthanhtoan">
                        Tổng thanh toán
                      </span>
                      :
                    </p>
                  </td>
                  <td className="text-right">
                    <p className="bold">
                      <span id="balanceSum" className="total">
                        5.990.000
                      </span>
                    </p>
                  </td>
                </tr>
                {/* Ghi chú thanh toán */}
                <tr>
                  <td colSpan={7} id="style-Z5Qzb" className="style-Z5Qzb">
                    <p>
                      1.{" "}
                      <span lang="thanhtoanonline-internetbanking-warning-atm-dkonline">
                        Để thanh toán trực tuyến qua ngân hàng{" "}
                        <strong id="style-Exqew" className="style-Exqew">
                          thẻ ATM
                        </strong>{" "}
                        phải đăng ký{" "}
                        <strong id="style-xlVV2" className="style-xlVV2">
                          Thanh toán online
                        </strong>
                        .
                      </span>
                    </p>
                    <p style={{ padding: "5px 0" }}>
                      2.{" "}
                      <span lang="thanhtoanonline-internetbanking-warning-hanmucthe">
                        Vui lòng kiểm tra
                        <strong id="style-TlSPy" className="style-TlSPy">
                          {" "}
                          HẠN MỨC THẺ{" "}
                        </strong>
                        trước khi thanh toán
                      </span>
                    </p>
                    <p>
                      3.{" "}
                      <span lang="thanhtoanonline-internetbanking-huongdan-thanhtoan">
                        Xem hướng dẫn thanh toán
                      </span>{" "}
                      <a
                        target="_blank"
                        style={{ color: "deepskyblue" }}
                        href="https://ascvn.com.vn/huong-dan-thao-tac-sinh-vien-thanh-toan-hoc-phi-online.html"
                      >
                        <span lang="cm-here">tại đây</span>
                      </a>
                    </p>
                    <p>
                      {" "}
                      4.{" "}
                      <span lang="thanhtoanonline-huygiaodich">
                        Để hủy giao dịch chờ gạch nợ, vui lòng bấm
                      </span>{" "}
                      <a
                        href="/phieu-thu.html"
                        style={{ color: "deepskyblue" }}
                      >
                        <span lang="cm-here">vào đây</span>
                      </a>
                      .{" "}
                    </p>
                    <div id="style-fQ2b3" className="style-fQ2b3">
                      <p>
                        5.{" "}
                        <span lang="thanhtoanonline-internetbanking-recommend-atm-noidia">
                          Khuyến cáo thanh toán qua các loại thẻ ATM nội địa,
                          QR-Code.
                        </span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <div>
                      <div id="boxPhiDVThanhToanOnline" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7} id="style-MgUbG" className="style-MgUbG">
                    <div className="col-md-4 style-lknVQ" id="style-lknVQ">
                      <span
                        lang="thanhtoanonline-chon-nganhang"
                        id="style-NOtZ4"
                        className="style-NOtZ4"
                      >
                        Chọn ngân hàng thanh toán
                      </span>
                    </div>
                    <tr style={{ background: "#f9f9f9" }}>
                      <td colSpan={7}>
                        <div
                          className="main-list-bank style-ooPz7"
                          id="style-ooPz7"
                        >
                          <div className="content-list-bank">
                            <input
                              type="radio"
                              name="radBank"
                              className="radio-bank-cb"
                              data-isqrcode="False"
                              data-isatm="True"
                              data-manganhang="VIETCOMBANK"
                              defaultValue={2}
                              data-tgtt={1}
                              data-phidv={0}
                              data-phidvphantram="0,000"
                              data-messphidv=""
                            />
                            <div className="radio-bank-img">
                              <img
                                className="img-list-bank"
                                src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietcombank.png"
                                alt="VietcomBank"
                              />
                            </div>
                          </div>
                          <div className="content-list-bank">
                            <input
                              type="radio"
                              name="radBank"
                              className="radio-bank-cb"
                              data-isqrcode="False"
                              data-isatm="True"
                              data-manganhang="VNPAY"
                              defaultValue={999}
                              data-tgtt={1}
                              data-phidv={0}
                              data-phidvphantram="0,000"
                              data-messphidv=""
                            />
                            <div className="radio-bank-img">
                              <img
                                className="img-list-bank"
                                src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietinbank.png"
                                alt="VNPAY"
                              />
                            </div>
                          </div>
                          <div className="content-list-bank">
                            <input
                              type="radio"
                              name="radBank"
                              className="radio-bank-cb"
                              data-isqrcode="True"
                              data-isatm="False"
                              data-manganhang="VIETINBANK"
                              defaultValue={1}
                              data-tgtt={2}
                              data-phidv={0}
                              data-phidvphantram="0,000"
                              data-messphidv=""
                            />
                            <div className="radio-bank-img">
                              <img
                                className="img-list-bank"
                                src="https://mobile2.ascvn.com.vn/Logo/Banks2/vietinbank_qr.png"
                                alt="VIETINBANK"
                              />
                            </div>
                          </div>
                          <div className="content-list-bank">
                            <input
                              type="radio"
                              name="radBank"
                              className="radio-bank-cb"
                              data-isqrcode="False"
                              data-isatm="True"
                              data-manganhang="NAMABANK"
                              defaultValue={7}
                              data-tgtt={2}
                              data-phidv={0}
                              data-phidvphantram="0,000"
                              data-messphidv=""
                            />
                            <div className="radio-bank-img">
                              <img
                                className="img-list-bank"
                                src="https://mobile2.ascvn.com.vn/Logo/Banks2/namabank.png"
                                alt="NAMABANK"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <div className="col-md-8 style-U2rmD " id="style-U2rmD">
                      <div className="btn">
                        <button
                          type="button"
                          className="btn btn-success btn-qr-custom btn-bank-custom bold  hover"
                        >
                          <QrcodeOutlined /> Thanh toán QR-Code
                        </button>
                      </div>
                      <div className="btn">
                        <button className="btn-53 bold block first ">
                          <div className="original">Thanh toán</div>
                          <div className="letters">
                            <span>T</span>
                            <span>h</span>
                            <span>a</span>
                            <span>nh</span>
                            <span>&nbsp;</span>
                            <span>T</span>
                            <span>o</span>
                            <span>á</span>
                            <span>n</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="boxQRCodeThanhToan"></div>
      </div>
    </div>
  );
}

export default OnlinePayments;
