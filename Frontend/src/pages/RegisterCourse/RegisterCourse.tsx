// Đăng ký học phần

import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./index.css";
import { PrinterOutlined, SettingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { keyToWin } from "assets/images";
import { useMutation } from "@tanstack/react-query";
import ReactToPrint from "react-to-print";

// import StudentApi from "apis/Student";
import axios from "axios";

function RegisterCourse() {
  const mssv = 1;
  const namHoc = 2023;
  const nameHost = "172.20.10.4";

  const linkGetHPCDK = `http://${nameHost}:8080/api/v1/dkhp/lopHPChoDK?`;

  const linkGetMonHocCDK = `http://${nameHost}:8080/api/v1/dkhp/hocPhanChoDangKy?mssv=`;

  const linkChiTietLop = `http://${nameHost}:8080/api/v1/dkhp/chiTietLHP?maLHP=`;

  //interface
  interface LopHPDaDK {
    id: string;
    maLHP: string;
    tenMonHoc: string;
    tenLopDuKien: string;
    soTC: number;
    nhom: number;
    hocPhi: number;
    hanNop: string;
    thu: number;
    trangThaiDK: string;
    ngayDangKy: string;
    trangThaiLHP: string;
  }

  interface LopHPChoDK {
    id: string;
    name: string;
    maLopHP: string;
    lop: string;
    trangthai: string;
    soLuong: string;
  }

  interface ChiTietLopHocPhan {
    id: string;
    lichHoc: string;
    nhomTH: string;
    viTri: string;
    phong: string;
    coSo: string;
    giangVien: string;
    ngayHoc: string;
    soLuong: number;
    soLuongToiDa: number;
  }

  interface MonHocChoDangKy {
    id: string;
    maHocPhan: string;
    tenMon: string;
    soTC: number;
    isBatBuoc: number;
    listTienQuyet: {
      id: string;
      nameHP: string;
      maHP: string;
      loaiHP: string;
    }[];
  }

  //Data
  const [dsMonChoDK, setDsMonChoDK] = useState<MonHocChoDangKy[]>([]);

  const [hocKy, setHocKy] = useState([
    {
      id: "1",
      name: "HK3 (2022-2023)",
    },
    {
      id: "2",
      name: "HK2 (2022-2023)",
    },
    {
      id: "3",
      name: "HK1 (2022-2023)",
    },
    {
      id: "4",
      name: "HK3 (2023-2024)",
    },
    {
      id: "5",
      name: "HK2 (2023-2024)",
    },

    {
      id: "6",
      name: "HK1 (2023-2024)",
    },
  ]);

  const [dsLopHPChoDK, setDsLopHPChoDK] = useState<LopHPChoDK[]>([]);

  const [dsLopHPDaDK, setDsLopHPDaDK] = useState<LopHPDaDK[]>([]);

  const [chiTietLHP, setchiTietLHP] = useState<ChiTietLopHocPhan[]>([]);

  const [dsLichHoc, setDsLichHoc] = useState([
    {
      id: "1",
      lichHoc: "TH - Thứ 4 (Tiết 13 -&gt; 15 )",
      nhomTH: 2,
      viTri: "H3.1.2",
      dayNha: "H (CS1)",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "ThS Nguyễn Văn Thắng",
      ngayHoc: "10/01/2024 - 17/04/2024",
    },
  ]);

  // selected
  const [monhocSelected, setMonhocelected] = useState("");
  const [malopSelected, setMalopSelected] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loaiHP, setLoaiHP] = useState(1); //Học mới + Học lại + Học cải thiện

  //dialog
  function openDialog() {
    setIsDialogOpen(true);
  }
  function closeDialog() {
    setIsDialogOpen(false);
  }

  // function
  useEffect(() => {
    getMonHocCDK(1);
    getLopHocDaDK(1);
  }, []);

  function setlectLoaiHP(loaiHP: number) {
    setLoaiHP(loaiHP);
    // alert(loaiHP);
  }

  function selectMonHocChoDangKy(maHP: string) {
    setMonhocelected(maHP); //Chọn môn học
    getLopHocCDK(2023, 1, maHP);
  }

  function selectLopHocCDK(maLopHP: string) {
    setMalopSelected(maLopHP); //Chọn lớp học
    getCTLHP(maLopHP);
  }

  function selectLichHoc() {
    // setDsLichHoc
    openDialog();
  }

  function selectNhomTH(nhomTH: any) {

    // alert(nhomTH);
  }

  //tinh tong
  const tinhTongTC = (dsLopHPDaDK: any) => {
    return dsLopHPDaDK.reduce(
      (tong: any, monHoc: any) => tong + monHoc.soTC,
      0
    );
  };

  const tinhTongHP = (dsLopHPDaDK: any) => {
    return dsLopHPDaDK.reduce(
      (tong: any, monHoc: any) => tong + monHoc.hocPhi,
      0
    );
  };
  const numberWithCommas = (number: Number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // getData API
  async function getMonHocCDK(event: any) {
    try {
      const res = await axios.get(linkGetMonHocCDK + mssv);
      console.log("res", res.data);
      setDsMonChoDK(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getLopHocCDK(nam: any, ky: any, maMon: any) {
    try {
      const res = await axios.get(linkGetHPCDK + "namHoc=" + nam + "&ky=" + ky + "&maMon=" + maMon
      // , {
      //   params : { 
      //     token: localStorage.getItem("token")
      //   }
      // }
    );
      console.log("res", res.data);
      setDsLopHPChoDK(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getCTLHP(maLopHP: any) {
    try {
      const res = await axios.get(linkChiTietLop + maLopHP);
      console.log("res", res.data);
      setchiTietLHP(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getLopHocDaDK(event: any) {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/dkhp/hocPhanDaDangKY?mssv=1&namHoc=2023&hocKy=1`
      );
      console.log("res", res.data);
      setDsLopHPDaDK(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  //In dữ liệu
  const dataPrint = useRef<HTMLTableElement>(null);

  //html
  return (
    <div className="box-df snipcss-5HOye">
      <div className="portlet">
        <div className="portlet-title">
          {/* Head */}
          <div className="caption">
            <span
              className="caption-subject bold"
              lang="dangkyhocphan-pagetitle"
            >
              Đăng ký học phần
            </span>
          </div>
          <div></div>
          <div
            hidden={true}
            id="warningChonDot"
            data-name="warningChonDot"
            lang="dangkyhocphan-warningChonDot"
          >
            Chọn đợt đăng ký học phần
          </div>
          <div
            hidden={true}
            id="warningChonHPDangKy"
            data-name="warningChonHPDangKy"
            lang="dangkyhocphan-warningChonHPDangKy"
          >
            Chọn chi tiết học phần cần đăng ký
          </div>
          <div
            hidden={true}
            id="warningChonLichCoNhom"
            data-name="warningChonLichCoNhom"
            lang="dangkyhocphan-warningChonLichCoNhom"
          >
            Học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.
          </div>
          <div
            hidden={true}
            id="warningHuyDKFail"
            data-name="warningHuyDKFail"
            lang="dangkyhocphan-warningHuyDKFail"
          >
            Hủy đăng ký không thành công
          </div>
          <div
            hidden={true}
            id="warningMHDKNotFound"
            data-name="warningMHDKNotFound"
            lang="dangkyhocphan-warningMHDKNotFound"
          >
            Không tìm thấy dữ liệu chi tiết môn học đăng ký
          </div>
        </div>
        <div className="portlet-body">
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* Học kì và loại học */}
          <div className=" ">
            <div className="form-body">
              <div className="col-md-2" />
              <div className="form-group col-md-4">
                <div>
                  <select
                    className="form-control"
                    id="cboIDDotDangKy"
                    name="cboIDDotDangKy"
                  >
                    {hocKy.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group col-md-4">
                <div>
                  <div className="mt-radio-inline">
                    <label className="mt-radio">
                      <input
                        defaultChecked={true}
                        id="rdoLoaiDangKyHocPhan"
                        name="rdoLoaiDangKyHocPhan"
                        type="radio"
                        defaultValue={1}
                        onClick={() => setlectLoaiHP(1)}
                      />{" "}
                      Học mới <span />
                    </label>
                    <label className="mt-radio">
                      <input
                        id="rdoLoaiDangKyHocPhan"
                        name="rdoLoaiDangKyHocPhan"
                        type="radio"
                        defaultValue={2}
                        onClick={() => setlectLoaiHP(2)}
                      />{" "}
                      Học lại <span />
                    </label>
                    <label className="mt-radio">
                      <input
                        id="rdoLoaiDangKyHocPhan"
                        name="rdoLoaiDangKyHocPhan"
                        type="radio"
                        defaultValue={3}
                        onClick={() => setlectLoaiHP(3)}
                      />{" "}
                      Học cải thiện <span />
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* Môn học chờ đăng ký */}
          <div className="gr-table" id="monHPChoDangKy">
            <div
              className="border-scroll style-G78RR"
              tabIndex={0}
              id="style-G78RR"
            >
              <div id="box_monhocphan_chodangky">
                <h3 className="title-table" lang="mhpchodangky-tabletitle">
                  Môn học/học phần đang chờ đăng ký
                </h3>
                <div className="table-responsive">
                  <table
                    className="table-pointer table-custom table table-bordered text-center"
                    width="100%"
                    role="grid"
                    id="dkHocPhan"
                  >
                    <thead>
                      <tr role="row">
                        <td
                          lang="dkhp-select"
                          style={{ width: 40, backgroundColor: "#0C6FBE" }}
                        />
                        <th lang="dkhp-stt">STT</th>
                        <th lang="dkhp-malhp">Mã học phần</th>
                        <th lang="dkhp-tenmh">Tên môn học/học phần</th>
                        <th lang="dkhp-tc">TC</th>
                        <th lang="dkhp-batbuoc">Bắt buộc</th>
                        <th lang="dkhp-hoctruoctienquyetsonghanh">
                          Học phần: học trước (a),
                          <br />
                          tiên quyết (b),
                          <br />
                          song hành (c)
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tbodyDK">
                      {dsMonChoDK.map((item, index) => (
                        <tr
                          key={index}
                          onClick={() => selectMonHocChoDangKy(item.maHocPhan)}
                          className={
                            monhocSelected === item.maHocPhan ? "selected" : ""
                          }
                        >
                          <td className="text-center">
                            <div>
                              <label
                                className="mt-radio style-Boplz"
                                id="style-Boplz"
                              >
                                <input
                                  id="rdoMonHocChoDangKy"
                                  name="rdoMonHocChoDangKy"
                                  type="radio"
                                  checked={monhocSelected === item.maHocPhan}
                                  value={item.id}
                                />
                                <span />
                              </label>
                            </div>
                          </td>
                          <td>{index + 1}</td>
                          <td>{item.maHocPhan}</td>
                          <td className="text-left">{item.tenMon}</td>
                          <td> {item.soTC} </td>
                          <td>
                            <div>
                              {item.isBatBuoc ? (
                                <div className="check" />
                              ) : (
                                <div className="no-check" />
                              )}
                            </div>
                          </td>
                          <td>
                            {/* {item.listTienQuyet?.length !== 0 ? (
                              <Tooltip
                                title={item.listTienQuyet.map((item) => (
                                  <p style={{ color: "white" }}>
                                    {item.maHP}
                                    {" - "} ({item.nameHP})
                                  </p>
                                ))}
                                color={"cyan"}
                                key={"cyan"}
                              >
                                {item.listTienQuyet.map((item) => (
                                  <span>
                                    {item.maHP}
                                    {""}
                                    <span className="loaiHP-red">
                                      ({item.loaiHP})
                                    </span>
                                    <br />
                                  </span>
                                ))}
                              </Tooltip>
                            ) : (
                              <span> </span>
                            )} */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>

          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* Lớp HP chờ đăng ký */}

          <div className="row snipcss-QvYdq" id="lopHPChoDangKy">
            <div className="col-md-6">
              <div className="gr-table">
                <div
                  className="border-scroll style-M3mRn"
                  tabIndex={1}
                  id="style-M3mRn"
                >
                  <div id="box_lophocphan_chodangky">
                    <h3 className="title-table" lang="lhpchodangky-tabletitle">
                      Lớp học phần chờ đăng ký
                    </h3>

                    <div className="table-responsive">
                      <table
                        id="table_lhpchodangky"
                        className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline"
                        width="100%"
                        role="grid"
                      >
                        <thead>
                          <tr role="row">
                            <th lang="sv-stt">STT</th>
                            <th lang="dkhp-thongtinlhp">
                              Thông tin lớp học phần
                            </th>
                            <th lang="dkhp-dadangky">Đã đăng ký</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dsLopHPChoDK &&
                            dsLopHPChoDK.map((item, index) => (
                              <tr
                                key={index}
                                onClick={() => selectLopHocCDK(item.maLopHP)}
                                className={
                                  malopSelected === item.maLopHP
                                    ? "selected"
                                    : ""
                                }
                              >
                                <td style={{ width: 40 }}>{index + 1}</td>
                                <td className="text-left font-medium  ">
                                  <div className="name font-bold text-lime-500">
                                    {item.name}
                                  </div>
                                  <div>
                                    <span lang="dkhp-trangthai">
                                      Trạng thái
                                    </span>
                                    :{" "}
                                    <span className="cl-red">
                                      {item.trangthai}
                                    </span>
                                    <br />
                                    <span lang="dkhp-malhp">
                                      Mã lớp học phần:{" "}
                                    </span>
                                    {item.maLopHP} - {item.lop}
                                  </div>
                                </td>
                                <td> {item.soLuong}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="gr-table">
                <div
                  className="border-scroll style-1YEOP"
                  tabIndex={2}
                  id="style-1YEOP"
                >
                  <div id="box_chitietlophocphan_chodangky">
                    <h3
                      className="title-table"
                      lang="ctlhpchodangky-tabletitle"
                    >
                      Chi tiết lớp học phần
                    </h3>

                    <table
                      id="tbChiTietDKHP"
                      className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline"
                      width="100%"
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th>
                            <p className="color-white">
                              <span
                                itemID="dkhp-trangthai"
                                className="color-black"
                              >
                                Thông tin lớp học phần
                              </span>
                            </p>
                          </th>
                          <th>
                            <div>
                              <span className="color-black">Nhóm</span>
                            </div>
                          </th>

                          <th>
                            <div>
                              <span className="color-black">Sĩ số</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {chiTietLHP.length !== 0 ? (
                          chiTietLHP.map((item, index) => (
                            <tr onClick={() => selectNhomTH(item.nhomTH)}>
                              <td>
                                <div className="ctlhp">
                                  <span itemID="dkhp-lichhoc">Lịch học: </span>
                                  <span className="ctlhp-bold">
                                    {item.lichHoc}
                                  </span>
                                  <br />
                                  <span itemID="dkhp-coso">Cơ sở: </span>
                                  <span className="ctlhp-bold">
                                    {item.coSo}
                                  </span>
                                  <br />
                                  <span itemID="dkhp-phong">Dãy nhà: </span>

                                  <span className="ctlhp-bold">
                                    {item.viTri}
                                  </span>
                                  <br />
                                  <span itemID="dkhp-phong">Phòng: </span>
                                  <span className="ctlhp-bold">
                                    {item.phong}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span itemID="dkhp-nhomth">
                                    {item.nhomTH}
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <span itemID="dkhp-sisomax">
                                    {item.soLuong} / {item.soLuongToiDa}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <td colSpan={3}>
                            <p className="bold" itemID="dkhp-chuacolichhoc">
                              Chưa có lịch học
                            </p>
                          </td>
                        )}
                      </tbody>
                    </table>
                    {chiTietLHP.length !== 0 ? (
                      <div className="flex items-center justify-center w-full">
                        <div data-tooltip="" className="button border-1">
                          <div className="button-wrapper">
                            <div className="text">Đăng ký</div>
                            <span className="icon">
                              <img src={keyToWin} alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div id="EndLopHPChoDangKy" />
          </div>

          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* ===================================================================================== */}
          {/* Lớp HP đã đăng ký trong học kỳ này */}
          <div className="gr-table" id="box_monHocPhan_DaDangKy">
            <h3
              className="title-table"
              lang="dangkyhocphan-lhpdadangkytabletitle"
            >
              Lớp HP đã đăng ký trong học kỳ này{" "}
              <a
                href="javascript:;"
                className="btn btn-action"
                id="btn_InDDK"
                // onClick={() => printData()}
                // onClick={() => {
                // printData();
                // }}
                style={{ right: 0 }}
              >
                <ReactToPrint
                  trigger={() => (
                    <a type="primary">
                      <PrinterOutlined />
                    </a>
                  )}
                  content={() => dataPrint.current}
                />
              </a>
            </h3>
            <div className="table-responsive">
              <table
                className="table-pointer table-custom table table-bordered text-center"
                width="100%"
                role="grid"
                id="dkHocPhan"
                ref={dataPrint}
              >
                <thead>
                  <tr role="row">
                    <th lang="dangkyhocphan-thaotac">Thao tác</th>
                    <th lang="dangkyhocphan-stt">STT</th>
                    <th lang="dangkyhocphan-dadangkymalhp">Mã lớp HP</th>
                    <th lang="dangkyhocphan-tenmh">Tên môn học/HP</th>
                    <th lang="dangkyhocphan-dadangkylopdukien">
                      Lớp học dự kiến
                    </th>
                    <th lang="dangkyhocphan-tc">TC</th>
                    <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                    <th lang="dangkyhocphan-hocphi">Học phí</th>
                    <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                    <th lang="dangkyhocphan-thu">Thu</th>
                    <th lang="dangkyhocphan-trangthaidangky">Trạng thái ĐK</th>
                    <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                    <th lang="dangkyhocphan-trangthailhp">TT lớp HP </th>
                  </tr>
                </thead>
                <tbody>
                  {dsLopHPDaDK.map((item, index) => (
                    <tr onClick={() => selectLichHoc()}>
                      <td>
                        <div
                          className="dropdown-thaotac"
                          // onclick="toggleDropdown(this)"
                        >
                          <SettingOutlined />
                          <div
                            className="dropdown-content-thaotac  style-3fPUk"
                            id="style-3fPUk"
                          >
                            <button
                              // onclick="XemChiTietLichHoc(this,'EHbuRMwZbLq-wqeg2E8Akg', 1);"
                              data-idlhpdk={8310760}
                              data-guid="6JkPUUEO3muNvIFDcg3NCw"
                              lang="dangkyhocphan-xem-button"
                            >
                              Xem lịch
                            </button>
                            <button
                              // onclick="HuyLopHocPhanDangKy(this,'6JkPUUEO3muNvIFDcg3NCw', '420300154901');"
                              data-idlhpdk={8310760}
                              data-guid="6JkPUUEO3muNvIFDcg3NCw"
                              lang="dangkyhocphan-huy-button"
                            >
                              Hủy đăng ký
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>{index + 1}</td>
                      <td>{item.maLHP}</td>
                      <td className="text-left">{item.tenMonHoc}</td>
                      <td>{item.tenLopDuKien}</td>
                      <td>{item.soTC}</td>
                      <td>{item.nhom}</td>
                      <td className="text-right">
                        <span> {numberWithCommas(item.hocPhi)} </span>
                      </td>
                      <td>{item.hanNop}</td>
                      <td>
                        <div>
                          {item.thu === 1 ? (
                            <div className="check" />
                          ) : (
                            <div className="no-check" />
                          )}
                        </div>
                      </td>
                      <td>{item.trangThaiDK}</td>
                      <td>{item.ngayDangKy}</td>
                      <td>{item.trangThaiDK}</td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan={1}
                      className="text-center bold"
                      style={{ fontSize: 16 }}
                    >
                      TỔNG
                    </td>
                    <td className="text-center bold" style={{ fontSize: 16 }}>
                      {dsLopHPDaDK.length}
                    </td>
                    <td className="text-center bold" style={{ fontSize: 16 }} />{" "}
                    <td className="text-center bold" style={{ fontSize: 16 }} />{" "}
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-center bold" style={{ fontSize: 16 }}>
                      {tinhTongTC(dsLopHPDaDK)}
                    </td>
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-right bold" style={{ fontSize: 16 }}>
                      {numberWithCommas(tinhTongHP(dsLopHPDaDK))}
                    </td>
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                    <td className="text-center bold" style={{ fontSize: 16 }} />
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* dialog */}
      {isDialogOpen && (
        <div className="backdrop">
          {" "}
          {/* Lớp nền xung quanh dialog */}
          <dialog
            id="dialog"
            className={`window ${isDialogOpen ? "open" : ""}`}
          >
            <button onClick={closeDialog} aria-label="close" className="x">
              ❌
            </button>
            <div className="content">
              <h3 className="title-table" itemID="ctlichhoc-tabletitle">
                Chi tiết lớp học
              </h3>
              <table
                id="tbChiTietDKHP"
                className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline"
                width="100%"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th lang="dkhp-stt">STT</th>
                    <th lang="dkhp-lichhoc">Lịch học</th>
                    <th lang="dkhp-nhom">Nhóm</th>
                    <th lang="dkhp-phong">Phòng</th>
                    <th lang="dkhp-daynha">Dãy nhà</th>
                    <th lang="dkhp-coso">Cơ sở</th>
                    <th lang="dkhp-giangvien">Giảng viên</th>
                    <th lang="dkhp-thoigian">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  {dsLichHoc.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.lichHoc}</td>
                      <td>{item.nhomTH}</td>
                      <td>{item.viTri}</td>
                      <td>{item.dayNha}</td>
                      <td>{item.coSo}</td>
                      <td>{item.giangVien}</td>
                      <td>{item.ngayHoc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default RegisterCourse;
