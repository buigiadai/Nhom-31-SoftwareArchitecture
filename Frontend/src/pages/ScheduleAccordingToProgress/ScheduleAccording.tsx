//Lịch theo tiến độ
import React from "react";
import "./index.css";
import {
  LeftOutlined,
  RightOutlined,
  PrinterOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

function ScheduleAccording() {
  //data
  const dataHK = [
    { value: "HK1 (2020-2021)" },
    { value: "HK2 (2020-2021)" },
    { value: "HK3 (2020-2021)" },
    { value: "HK1 (2021-2022)" },
  ];

  const dataHocPhan = [
    {
      stt: 1,
      maHocPhan: "4203001549",
      tenMonHoc: "Kiến trúc và Thiết kế phần mềm",
      soTinChi: 4,
      thongTinLich: [
        { thu: "7", tiet: "7 - 9", loaiLich: "Lý thuyết", phong: "X13.01" },
        { thu: "CN", tiet: "7 - 9", loaiLich: "Thực hành", phong: "H3.1.1" },
        { thu: "7", tiet: "7 - 9", loaiLich: "Lý thuyết", phong: "X11.08" },
        {
          thu: "7",
          tiet: "7 - 9",
          loaiLich: "Lý thuyết",
          phong: "Trực tuyến 173",
        },
      ],
      thoiGian: [
        { batDau: "06/01/2024", ketThuc: "06/01/2024" },
        { batDau: "14/01/2024", ketThuc: "21/04/2024" },
        { batDau: "13/01/2024", ketThuc: "04/05/2024" },
        { batDau: "27/01/2024", ketThuc: "27/01/2024" },
      ],
      maGiangVien: "TG61550245",
      tenGiangVien: "TS. Võ Văn Hải",
    },
    {
      stt: 2,
      maHocPhan: "4203003098",
      tenMonHoc: "Thực tập doanh nghiệp",
      soTinChi: 5,
      thongTinLich: [
        { thu: "CN", tiet: "15", loaiLich: "Thực hành", phong: "Thực tập" },
      ],
      thoiGian: [{ batDau: "31/12/2023", ketThuc: "31/12/2023" }],
      maGiangVien: "01036018,01120022,01120023,01220022,0199900060,06530005",
      giangVien:
        "TS. Hồ Đắc Quán,TS. Lê Nhật Duy,TS. Ngô Hữu Dũng,TS. Nguyễn Chí Kiên,TS. Nguyễn Thị Hạnh,TS. Tạ Duy Công Chiến",
    },
  ];
  //html
  return (
    <div>
      <div className="box-df snipcss-1aA5o">
        <div className="portlet">
          <div className="portlet-title">
            <div className="caption">
              <span
                className="caption-subject bold"
                lang="lichhoctiendo-pagetitle"
              >
                Lịch học, lịch thi theo tiến độ
              </span>
            </div>
            <div className="actions">
              <div className="mt-radio-inline style-tDLeD" id="style-tDLeD">
                <label className="mt-radio style-B7Wg9" id="style-B7Wg9">
                  <input
                    defaultChecked={true}
                    id="rdoLoaiLich"
                    name="rdoLoaiLich"
                    type="radio"
                    defaultValue={0}
                  />{" "}
                  <label lang="lichtheotuan-tatca">Tất cả</label>
                  <span />
                </label>
                <label className="mt-radio style-wHRza" id="style-wHRza">
                  <input
                    id="rdoLoaiLich"
                    name="rdoLoaiLich"
                    type="radio"
                    defaultValue={1}
                  />{" "}
                  <label lang="lichtheotuan-lichhoc">Lịch học</label>
                  <span />
                </label>
                <label className="mt-radio style-os2nN" id="style-os2nN">
                  <input
                    id="rdoLoaiLich"
                    name="rdoLoaiLich"
                    type="radio"
                    defaultValue={2}
                  />{" "}
                  <label lang="lichtheotuan-lichthi">Lịch thi</label>
                  <span />
                </label>
              </div>
              <select
                className="form-control-actions border-2 border-solid"
                id="IDDot"
                lang="lichhoctiendo-hocky-combobox"
                name="IDDot"
                aria-placeholder="Chọn học kỳ"
              >
                <option value="">Chọn học kỳ</option>
                {dataHK.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
              <a
                href="javascript:;"
                className="btn btn-action"
                id="btnXemLich"
                // onclick="LoadLichTheoTienDo()"
                lang="lichhoctiendo-xemlich-button"
              >
                {" "}
                Xem lịch{" "}
              </a>
            </div>
          </div>
          <div id="viewLichTheoTienDo" className="table-responsive">
            <div
              hidden={true}
              id="warningGVNotFound"
              className="warningGVNotFound"
              lang="lichtheotuan-warningGVNotFound"
            >
              Không tìm thấy thông tin
            </div>
            <div
              hidden={true}
              id="popupThongTinGV"
              className="popupThongTinGV"
              lang="lichtheotuan-popupThongTinGV"
            >
              Thông tin giảng viên
            </div>
            <div
              hidden={true}
              id="popupHoTenGV"
              className="popupHoTenGV"
              lang="lichtheotuan-popupHoTenGV"
            >
              Họ tên
            </div>
            <div
              hidden={true}
              id="popupSDTGV"
              className="popupSDTGV"
              lang="lichtheotuan-popupSDTGV"
            >
              Số điện thoại
            </div>
            <div
              hidden={true}
              id="popupEmailGV"
              className="popupEmailGV"
              lang="lichtheotuan-popupEmailGV"
            >
              Email
            </div>
            <table
              className="table-custom table table-bordered text-center no-footer dtr-inline"
              width="100%"
              role="grid"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichhoctiendo-stt"
                  >
                    STT
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichhoctiendo-malhp"
                  >
                    Mã học phần
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichoctiendo-tenmhp"
                  >
                    Tên môn học/học phần
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichhoctiendo-stc"
                  >
                    Số
                    <br />
                    tín
                    <br />
                    chỉ
                  </th>
                  <th
                    className="sorting_disabled"
                    colSpan={7}
                    lang="lichhoctiendo-thongtinlich"
                  >
                    Thông tin lịch
                  </th>
                  <th
                    className="sorting_disabled"
                    colSpan={2}
                    lang="lichhoctiendo-thoigian"
                  >
                    Thời gian
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichhoctiendo-magiangvien"
                  >
                    Mã giảng viên
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={2}
                    lang="lichhoctiendo-gv"
                  >
                    Giảng viên
                  </th>
                </tr>
                <tr role="row">
                  <th className="sorting_disabled" lang="lichhoctiendo-thu">
                    Thứ
                  </th>
                  <th
                    className="sorting_disabled"
                    colSpan={2}
                    style={{ width: "7%" }}
                    lang="lichhoctiendo-tiet"
                  >
                    Tiết
                  </th>
                  <th
                    className="sorting_disabled"
                    lang="lichhoctiendo-loailich"
                  >
                    Loại lịch
                  </th>
                  <th
                    lang="giang-duong"
                    className="sorting_disabled"
                    style={{ width: "7%" }}
                  >
                    Phòng
                  </th>
                  <th lang="lichoctiendo-nhom" className="sorting_disabled">
                    Nhóm
                  </th>
                  <th className="sorting_disabled" lang="lichhoctiendo-gio">
                    Giờ
                  </th>
                  <th className="sorting_disabled" lang="lichhoctiendo-batdau">
                    Bắt đầu
                  </th>
                  <th className="sorting_disabled" lang="lichhoctiendo-ketthuc">
                    Kết thúc
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="" role="row">
                  <td>1</td>
                  <td>4203001549</td>
                  <td className="name">Kiến trúc và Thiết kế phần mềm</td>
                  <td className="text-center">4</td>
                  <td>
                    <span>7</span>
                  </td>
                  <td colSpan={2}>
                    <span>7 - 9</span>
                  </td>
                  <td>Lý thuyết</td>
                  <td>X13.01</td>
                  <td />
                  <td />
                  <td>
                    <span>06/01/2024</span>
                  </td>
                  <td>
                    <span>06/01/2024</span>
                  </td>
                  <td className="text-center">
                    <a
                      href="javascript:;"
                      data-magiangvien="TG61550245"
                      // onclick="getThongTinGiangVien(this)"
                    >
                      TG61550245
                    </a>
                  </td>
                  <td className="text-left">
                    <a
                      href="javascript:;"
                      data-magiangvien="TG61550245"
                      // onclick="getThongTinGiangVien(this)"
                    >
                      TS. Võ Văn Hải
                    </a>
                  </td>
                </tr>

                <tr className="colorSTLichThi" role="row">
                  <td>5</td>
                  <td>4203001549</td>
                  <td className="name">Kiến trúc và Thiết kế phần mềm</td>
                  <td className="text-center">4</td>
                  <td>
                    <span>4</span>
                  </td>
                  <td colSpan={2}>
                    <span>13 - 15</span>
                  </td>
                  <td>Thi giữa kỳ</td>
                  <td>H3.1.1</td>
                  <td>2</td>
                  <td />
                  <td>
                    <span>27/03/2024</span>
                  </td>
                  <td>
                    <span>27/03/2024</span>
                  </td>
                  <td className="text-center">
                    <a
                      href="javascript:;"
                      data-magiangvien="01120016,06067006"
                      // onclick="getThongTinGiangVien(this)"
                    >
                      01120016,06067006
                    </a>
                  </td>
                  <td className="text-left">
                    <a
                      href="javascript:;"
                      data-magiangvien="01120016,06067006"
                      // onclick="getThongTinGiangVien(this)"
                    >
                      ThS.Nguyễn Thị Khánh Hòa,ThS.Nguyễn Văn Thắng
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="tableGC">
              <ul>
                <li>
                  <span className="" />
                  <label lang="lichtheotuan-lichhoc">Lịch học</label>
                </li>
                <li>
                  <span className="colorSTLichThi" />
                  <label lang="lichtheotuan-lichthi">Lịch thi</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ScheduleAccording;
