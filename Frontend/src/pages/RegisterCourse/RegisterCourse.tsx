// Đăng ký học phần

import React, { useEffect, useState } from "react";
import "./index.css"; 
import { PrinterOutlined, SettingOutlined } from "@ant-design/icons";
import {   Tooltip } from "antd";
import { keyToWin } from "assets/images";
import { useMutation } from "@tanstack/react-query";
import StudentApi from "apis/Student";
import axios from "axios";

function RegisterCourse() {
  //Data
  const [dsMonChoDK, setDsMonChoDK] = useState([
    {
      id: "1",
      maHP: "4203003193",
      name: "Toán ứng dụng",
      tc: 3,
      batbuoc: 0,
      listTienQuyet: [
        { id: "1", nameHP: "Hệ thống máy tính", maHP: "002137", loaiHP: "a" },
      ],
    },
    {
      id: "2",
      maHP: "4203003240",
      name: "Hàm phức và phép biến đổi Laplace",
      tc: 3,
      batbuoc: 1,
      listTienQuyet: [
        { id: "1", nameHP: "Hệ thống máy tính", maHP: "002137", loaiHP: "a" },
      ],
    },
    {
      id: "3",
      maHP: "4203003320",
      name: "Phương pháp tính",
      tc: 3,
      batbuoc: 1,
      listTienQuyet: [
        { id: "1", nameHP: "Hệ thống máy tính", maHP: "002137", loaiHP: "a" },
        { id: "2", nameHP: "Hệ cơ sở dữ liệu", maHP: "001146", loaiHP: "b" },
      ],
    },
  ]);

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

  const [dsLopHPChoDK, setDsLopHPChoDK] = useState([
    {
      id: "1",
      name: "Lập trình hướng sự kiện với công nghệ .NET",
      maLopHP: "420300204401",
      lop: "DHKTPM18B",
      trangthai: "Đã khoá",
      soLuong: "0 / 80",
    },
    {
      id: "2",
      name: "Lập trình hướng sự kiện với công nghệ .NET",
      maLopHP: "420300204403",
      lop: "DHKTPM18B",
      trangthai: "Đã khoá",
      soLuong: "0 / 80",
    },
    {
      id: "3",
      name: "Lập trình hướng sự kiện với công nghệ .NET",
      maLopHP: "420300204407",
      lop: "DHKTPM18B",
      trangthai: "Đang lên kế hoạch",
      soLuong: "0 / 80",
    },
  ]);

  const [dsLopHPDaDK, setDsLopHPDaDK] = useState([
    {
      id: "1",
      maLopHP: "420300154901",
      tenMon: "Kiến trúc và Thiết kế phần mềm",
      lopHoc: "DHKTPM16A",
      tc: 4,
      nhomTH: 1,
      hocPhi: 3010000,
      hanNop: "15/12/2023",
      thu: 1,
      trangThaiDK: "Đăng ký mới",
      ngayDK: "27/10/2023",
      trangThaiLHP: "Đã khóa",
    },
    {
      id: "2",
      maLopHP: "420300309801",
      tenMon: "Thực tập doanh nghiệp",
      lopHoc: "DHCNTT15A HL",
      tc: 5,
      nhomTH: "",
      hocPhi: 3300000,
      hanNop: "15/12/2023",
      thu: 0,
      trangThaiDK: "Đăng ký mới",
      ngayDK: "30/11/2023",
      trangThaiLHP: "Đã khóa",
    },
  ]);

  const [chiTietLHP, setchiTietLHP] = useState([
    {
      id: "1",
      lichHoc: "LT - Thứ 6 (Tiết 1 -> 3 )",
      nhomTH: "",
      viTri: "V8.03",
      phong: "V (CS1)",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "ThS Hà Thị Ánh",
      ngayHoc: "12/01/2024 - 17/05/2024",
      soLuong: 80,
      soLuongToiDa: 80,
    },
    {
      id: "2",
      lichHoc: "LT - Thứ 7 (Tiết 13 -> 15 )",
      nhomTH: "3",
      viTri: "Trực tuyến",
      phong: "Trực tuyến (MS Teams)",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "ThS Hà Thị Ánh",
      ngayHoc: "23/03/2024 - 23/03/2024",
      soLuong: 34,
      soLuongToiDa: 80,
    },
    {
      id: "3",
      lichHoc: "TH - Thứ 7 (Tiết 16 -> 16 )",
      nhomTH: "",
      viTri: "Ngoài trường",
      phong: "Khóa luận",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "Giảng viên tạm CNTT 2",
      ngayHoc: "30/12/2023 - 30/12/2023",
      soLuong: 12,
      soLuongToiDa: 80,
    },
  ]);

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
    {
      id: "3",
      lichHoc: "LT - Thứ 7 (Tiết 7 -&gt; 9 )",
      nhomTH: "",
      viTri: "X11.08",
      dayNha: "X (CS1)",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "TS Võ Văn Hải",
      ngayHoc: "13/01/2024 - 04/05/2024",
    },
    {
      id: "4",
      lichHoc: "LT - Thứ 7 (Tiết 7 -&gt; 9 )",
      nhomTH: "",
      viTri: "X13.01",
      dayNha: "X (CS1)",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "TS Võ Văn Hải",
      ngayHoc: "06/01/2024 - 06/01/2024",
    },
    {
      id: "5",
      lichHoc: "LT - Thứ 7 (Tiết 7 -&gt; 9 )",
      nhomTH: "",
      viTri: "Trực tuyến 173",
      dayNha: "Trực tuyến",
      coSo: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
      giangVien: "TS Võ Văn Hải",
      ngayHoc: "27/01/2024 - 27/01/2024",
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

  // const {data:studentInfo,mutate: getThongTin} = useMutation({
  //   mutationFn: ()=>StudentApi.getThongTin({mssv:1}),
  //   onSuccess:(data)=>{
  //     console.log(data);
  //   },
  //   onError:(error)=>{
  //     console.log(error);
  //   }
  // })

  async function getThongTin(params: any) {
    try{
        const response = await axios.get('http://localhost:8080/api/v1/sinhvien/thongTin?mssv=1');
        console.log("objectttt", response);
    }catch(err){
        console.log(err);
    }
}

  useEffect(()=>{
    getThongTin({mssv:1})},[])

  // function
  function setlectLoaiHP(loaiHP: number) {
    setLoaiHP(loaiHP);
    alert(loaiHP);
  }
  function selectMonHocChoDangKy(maHP: string) {
    setMonhocelected(maHP); //Chọn môn học
  }
  function selectLopHocCDK(maHP: string) {
    setMalopSelected(maHP); //Chọn lớp học
    setchiTietLHP([]);
  }

  function selectLichHoc() {
    // setDsLichHoc
    openDialog();
  }

  //tinh tong
  const tinhTongTC = (dsLopHPDaDK: any) => {
    return dsLopHPDaDK.reduce((tong: any, monHoc: any) => tong + monHoc.tc, 0);
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
            học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.
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
                          học phần: học trước (a),
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
                          onClick={() => selectMonHocChoDangKy(item.maHP)}
                          className={
                            monhocSelected === item.maHP ? "selected" : ""
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
                                  checked={monhocSelected === item.maHP}
                                  value={item.id}
                                />
                                <span />
                              </label>
                            </div>
                          </td>
                          <td>{item.id}</td>
                          <td>{item.maHP}</td>
                          <td className="text-left">{item.name}</td>
                          <td> {item.tc} </td>
                          <td>
                            <div>
                              {item.batbuoc === 1 ? (
                                <div className="check" />
                              ) : (
                                <div className="no-check" />
                              )}
                            </div>
                          </td>
                          <td>
                            {item.listTienQuyet.length !== 0 ? (
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
                            )}
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
                    <div className="text-right style-8KMSB" id="style-8KMSB">
                      <label>
                        <input
                          id="checkLichTrung"
                          name="checkLichTrung"
                          type="checkbox"
                          defaultValue="true"
                        />
                        <input
                          name="checkLichTrung"
                          type="hidden"
                          defaultValue="false"
                        />
                        <b>
                          <span
                            className="text-uppercase style-Jg35F"
                            lang="lhpchodangky-lhpkhongtrunglich"
                            id="style-Jg35F"
                          >
                            HIỂN THỊ LỚP học phần KHÔNG TRÙNG LỊCH
                          </span>
                        </b>
                      </label>
                    </div>
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
                          {dsLopHPChoDK.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => selectLopHocCDK(item.maLopHP)}
                              className={
                                malopSelected === item.maLopHP ? "selected" : ""
                              }
                            >
                              <td style={{ width: 40 }}>{index + 1}</td>
                              <td className="text-left font-medium  ">
                                <div className="name font-bold text-lime-500">
                                  {item.name}
                                </div>
                                <div>
                                  <span lang="dkhp-trangthai">Trạng thái</span>:{" "}
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
                    <div className="text-right" style={{ marginBottom: 5 }}>
                      <button
                        // onclick="XemLichTrung(this)"
                        className="btn btn--m block first style-4kJ3X"
                        id="dkhp-xemlichtrungButton"
                      >
                        Xem lịch trùng
                      </button>
                    </div>
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
                                className="color-white"
                              >
                                Thông tin lớp học phần
                              </span>
                            </p>
                          </th>
                          <th>
                            <div>
                              <span className="color-white">Nhóm</span>
                            </div>
                          </th>

                          <th>
                            <div>
                              <span className="color-white">
                                <span
                                  itemID="dkhp-sisomax"
                                  className="color-white"
                                >
                                  Sĩ số
                                </span>
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {chiTietLHP.length !== 0 ? (
                          chiTietLHP.map((item, index) => (
                            <tr>
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
                                    {" "}
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
                        <div data-tooltip="-999 $" className="button border-1">
                          <div className="button-wrapper">
                            <div className="text">Đăng ký</div>
                            <span className="icon">
                              {/* https://i.pinimg.com/originals/a2/3c/6f/a23c6fafa41d474975f9539d4a742e67.png */}
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
              {" "}
              Lớp HP đã đăng ký trong học kỳ này{" "}
              <a
                href="javascript:;"
                className="btn btn-action"
                id="btn_InDDK"
                // onclick="PrintElem($('#id-hoc-phan-da-dk'))"
                style={{ right: 0 }}
              >
                <PrinterOutlined />
              </a>
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
                      <td>{item.maLopHP}</td>
                      <td className="text-left">{item.tenMon}</td>
                      <td>{item.lopHoc}</td>
                      <td>{item.tc}</td>
                      <td>{item.nhomTH}</td>
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
                      <td>{item.ngayDK}</td>
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
