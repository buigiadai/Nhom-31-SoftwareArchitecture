/* eslint-disable react-hooks/rules-of-hooks */
// Chương trình khung
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { PrinterOutlined, SlidersOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import ReactToPrint from "react-to-print";
import axios from "axios";

function frameProgram() {
  // const
  const mssv = "20115701";
  const nameHost = "172.20.10.4";

  const link = `http://${nameHost}:8080/api/v1/sinhvien/chuongTrinhKhung?mssv=`;

  // interface
  interface HocPhanTienQuyen {
    maMon: number;
    tenMon: string;
    loaiTQ: string;
  }

  interface HocPhanResponse {
    maHocPhan: number;
    tenMon: string;
    soTC: number;
    soChiLT: number;
    soChiTH: number;
    hocPhanTienQuyents: HocPhanTienQuyen[];
    batBuoc: boolean;
  }

  interface ChuongTrinhKhung {
    kyHoc: string;
    hocPhanResponses: HocPhanResponse[];
    soTC: number;
    soTCBB: number;
    soTCTC: number;
  }

  //data
  const [dataChuongTrinhKhung, setDataChuongTrinhKhung] = useState<
    ChuongTrinhKhung[]
  >([]);

  // Ý tưởng là tạo ra mảng lưu các index(học kì) sẽ hiển thị.
  // Muốn ẩn học kì nào thì mình xoá học kì đó
  // Muốn hiển thị học kì nào thì mình add index học kì đó
  const [isDisplay, setIsDisplay] = useState<number[]>([]);

  // async function
  async function getMonHocCDK(mssv: any) {
    try {
      const res = await axios.get(link + mssv);
      console.log("res", res.data);
      const newData = res.data.map((item: any) => {
        const soTCBB = item.hocPhanResponses.reduce(
          (tong: any, ki: any) => (ki.batBuoc ? tong + ki.soTC : tong),
          0
        );

        const soTCTC = item.hocPhanResponses.reduce(
          (tong: any, ki: any) => (!ki.batBuoc ? tong + ki.soTC : tong),
          0
        );

        const soTC = item.hocPhanResponses.reduce(
          (tong: any, ki: any) => tong + ki.soTC,
          0
        );
        return { ...item, soTCBB, soTCTC, soTC };
      });

      setDataChuongTrinhKhung(newData);
    } catch (err) {
      console.log(err);
    }
  }

  // function
  useEffect(() => {
    getMonHocCDK(mssv);
    // alert("data :" + convertData(dataChuongTrinhKhung[0].hocPhanBatBuoc));
  }, []);

  function randomTrueFalse() {
    return Math.random() < 0.5;
  }

  function controllCollapse(index: number) {
    setIsDisplay((prevState) => {
      if (prevState.includes(index)) {
        return prevState.filter((item) => item !== index);
      } else {
        return [...prevState, index];
      }
    });
    console.log(isDisplay);
  }

  function controllCollapseAll() {
    if (isDisplay.length === dataChuongTrinhKhung.length) {
      setIsDisplay([]);
    } else {
      setIsDisplay(dataChuongTrinhKhung.map((_, index) => index));
    }
  }

  // tinhTong
  const tinhTongTCYC = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTC, 0);
  };

  const tinhTongTCBB = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTCBB, 0);
  };

  const tinhTongTCTC = (ds: any) => {
    return ds.reduce((tong: any, ki: any) => tong + ki.soTCTC, 0);
  };

  //In dữ liệu
  const dataPrint = useRef<HTMLTableElement>(null);

  //html
  return (
    <div>
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span className="caption-subject bold" lang="ctk-pagetitle">
              Chương trình khung
            </span>
          </div>
          <div className="actions">
            <ReactToPrint
              trigger={() => (
                <a className="btn btn-action" itemID="ctk-btnIn">
                  <PrinterOutlined /> In
                </a>
              )}
              content={() => dataPrint.current}
            />

            <a className="btn btn-action" onClick={controllCollapseAll}>
              <SlidersOutlined />
            </a>
          </div>
        </div>
        <div className="portlet-body">
          <div className="table-responsive">
            <table
              className="table-custom table table-bordered text-center no-footer dtr-inline"
              width="100%"
              role="grid"
              ref={dataPrint}
            >
              <thead>
                <tr role="row">
                  <th>STT</th>
                  <th style={{ width: "450px" }}> Tên môn học/Học phần </th>
                  <th>Mã Học phần</th>
                  <th style={{ width: "250px" }}>
                    <Tooltip title="Học phần: học trước (a), tiên quyết (b), song hành (c)">
                      <p style={{ color: "#1da1f3" }}>Học phần</p>
                    </Tooltip>
                  </th>
                  <th>Số TC</th>
                  <th>Số tiết LT</th>
                  <th>Số tiết TH</th>
                  <th>
                    Nhóm <br /> tự chọn
                  </th>
                  <th>
                    Số TC bắt buộc <br /> của nhóm
                  </th>
                  <th>Đạt</th>
                </tr>
              </thead>
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* tbody */}
              {dataChuongTrinhKhung.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr
                      role="row"
                      className="row-head "
                      data-target=".tr-row-1"
                      style={{ backgroundColor: "#5C8EBE" }}
                      onClick={() => controllCollapse(index)}
                    >
                      <td
                        colSpan={4}
                        className="text-center"
                        style={{
                          fontSize: "16 px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Học kỳ {index + 1}
                      </td>
                      <td
                        className="text-center"
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {item.soTC}
                      </td>
                      <td colSpan={5} />
                    </tr>
                    {/* Bắt buộc */}
                    <tr
                      role="row"
                      className={`row-head tr-row-1 ${
                        isDisplay.includes(index) ? " " : "collapse"
                      }`}
                    >
                      <td colSpan={4} className="text-left bold">
                        <div
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? " " : "collapse"
                          }`}
                          lang="ctk-hpbatbuoc"
                        >
                          Học phần bắt buộc
                        </div>
                      </td>
                      <td className="text-center">
                        <span
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? " " : "collapse"
                          }`}
                        >
                          {item.soTCBB}
                        </span>
                      </td>
                      <td colSpan={5} />
                    </tr>
                    {/* Học phần bắt buộc */}
                    {item.hocPhanResponses &&
                      item.hocPhanResponses.map((monHoc, index1) => {
                        return monHoc.batBuoc ? (
                          <tr
                            key={index}
                            role="row"
                            className={`tr-row-1  ${
                              isDisplay.includes(index) ? " " : "collapse "
                            }`}
                            style={
                              // monHoc.pass
                              randomTrueFalse()
                                ? {
                                    background: "#DDE3E9",
                                    border: "solid",
                                    borderColor: "white",
                                    borderWidth: "3px",
                                  }
                                : {
                                    background: "#FDF7C8",
                                    border: "solid",
                                    borderColor: "white",
                                    borderWidth: "3px",
                                  }
                            }
                          >
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {index1 + 1}
                              </div>
                            </td>
                            <td className="text-left">
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.tenMon}
                                {
                                  // monHoc.tinhTTTL
                                  false ? (
                                    <span style={{ color: "red" }}>*</span>
                                  ) : (
                                    ""
                                  )
                                }
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.maHocPhan}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.hocPhanTienQuyents &&
                                  monHoc.hocPhanTienQuyents.map((tq) => (
                                    <Tooltip title={tq.tenMon}>
                                      {tq.maMon}
                                      <span style={{ color: "red" }}>
                                        {" "}
                                        ({tq.loaiTQ}){" "}
                                      </span>
                                      <br></br>
                                    </Tooltip>
                                  ))}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soTC}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soChiLT}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {monHoc.soChiTH}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {/* {monHoc.nhomTuChon} */}0
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                {/* {monHoc.soTCNhom}
                                 */}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1  ${
                                  isDisplay.includes(index) ? " " : "collapse"
                                }`}
                              >
                                <div
                                  className={
                                    // monHoc.pass
                                    randomTrueFalse() ? "check" : "no-check"
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          ""
                        );
                      })}

                    {/* Học phần tự chọn */}

                    <tr
                      role="row"
                      className={`row-head tr-row-1 ${
                        isDisplay.includes(index) ? "" : "collapse"
                      }`}
                    >
                      <td colSpan={4} className="text-left bold">
                        <div
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? "" : "collapse"
                          }`}
                          lang="ctk-hpbatbuoc"
                        >
                          Học phần tự chọn
                        </div>
                      </td>
                      <td className="text-center">
                        <span
                          className={`tr-row-1 ${
                            isDisplay.includes(index) ? "" : "collapse"
                          }`}
                        >
                          {item.soTCTC}
                        </span>
                      </td>
                      <td colSpan={5} />
                    </tr>
                    {item.hocPhanResponses &&
                      item.hocPhanResponses.map((monHoc, subIndex) =>
                        !monHoc.batBuoc ? (
                          <tr
                            key={subIndex}
                            role="row"
                            className={`tr-row-1 ${
                              isDisplay.includes(index) ? "" : "collapse"
                            }`}
                            style={
                              // monHoc.pass
                              randomTrueFalse()
                                ? {
                                    background: "#DDE3E9",
                                    border: "solid",
                                    borderColor: "white",
                                    borderWidth: "3px",
                                  }
                                : {
                                    background: "#FDF7C8",
                                    border: "solid",
                                    borderColor: "white",
                                    borderWidth: "3px",
                                  }
                            }
                          >
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {subIndex + 1}
                              </div>
                            </td>

                            <td className="text-left">
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.tenMon}
                                {
                                  // monHoc.tinhTTTL
                                  randomTrueFalse() ? (
                                    <span style={{ color: "red" }}>*</span>
                                  ) : (
                                    ""
                                  )
                                }
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.maHocPhan}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.hocPhanTienQuyents &&
                                  monHoc.hocPhanTienQuyents.map((tq) => (
                                    <Tooltip title={tq.tenMon}>
                                      {tq.maMon}
                                      <span style={{ color: "red" }}>
                                        {" "}
                                        ({tq.loaiTQ}){" "}
                                      </span>
                                      <br></br>
                                    </Tooltip>
                                  ))}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.soTC}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.soChiLT}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {monHoc.soChiTH}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {/* {monHoc.nhomTuChon} */}0
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                {/* {monHoc.soTCNhom} */}
                              </div>
                            </td>
                            <td>
                              <div
                                className={`tr-row-1 ${
                                  isDisplay.includes(index) ? "" : "collapse"
                                }`}
                              >
                                <div
                                  className={
                                    // monHoc.pass
                                    randomTrueFalse() ? "check" : "no-check"
                                  }
                                />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          ""
                        )
                      )}

                    <tr>
                      <td style={{ backgroundColor: "white" }} colSpan={10} />
                    </tr>
                  </tbody>
                );
              })}

              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              {/* ===================================================================================================================== */}
              <tbody>
                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtcyc">
                    Tổng TC yêu cầu
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCYC(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>

                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtcbb">
                    Tổng TC bắt buộc
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCBB(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>
                <tr role="row" className="row-head">
                  <td colSpan={4} className="text-left" lang="ctk-tongtctc">
                    Tổng TC tự chọn
                  </td>
                  <td>
                    <span className="cl-red text-center">
                      {tinhTongTCTC(dataChuongTrinhKhung)}
                    </span>
                  </td>
                  <td colSpan={5} />
                </tr>
              </tbody>
            </table>
            {/* ===================================================================================================================== */}
            {/* ===================================================================================================================== */}
            {/* ===================================================================================================================== */}
            <div className="tableGC table-custom">
              <p style={{ margin: "20px 0" }} lang="ctk-warningGhiChu">
                <i>
                  Ghi chú: Những môn học/Học phần có dấu{" "}
                  <span id="style-HeF38" className="style-HeF38">
                    *
                  </span>{" "}
                  không được tính vào Trung bình chung tích lũy
                </i>
              </p>
              <ul>
                <li>
                  <span className="colorSTLichHoc" />
                  <p style={{ display: "inline-block" }} lang="ctk-mondanghoc">
                    Môn học/Học phần đã (hoặc đang) học
                  </p>
                </li>
                <li>
                  <span style={{ background: "#FDF7C8" }} />
                  <p
                    style={{ display: "inline-block" }}
                    lang="ctk-hocphan-chuadangky"
                  >
                    Môn học sinh viên chưa đăng ký học tập
                  </p>
                </li>
                <li>
                  <span className="check no-border" />
                  <label lang="ctk-pass">Đạt</label>&nbsp;
                </li>
                <li>
                  <span className="no-check" />
                  <label lang="ctk-fail">Không đạt</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default frameProgram;
