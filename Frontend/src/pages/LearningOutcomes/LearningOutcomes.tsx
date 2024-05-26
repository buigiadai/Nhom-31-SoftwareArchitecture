// Kết quả học tập
import React, { useEffect, useState, useRef } from "react";
import "./index.css";

function LearningOutcomes() {
  //data
  const data = [
    {
      id: 1,
      name: "Hk1 (2020-2021)",
      data: [
        {
          id: 1,
          code: "4203003242129",
          subject: "Giáo dục Quốc phòng và An ninh 1",
          tinChi: 4,
          thuongKi1: "",
          thuongKi2: "",
          thuongKi3: "",
          thuongKi4: "",
          thuongKi5: "",
          thuongKi6: "",
          thuongKi7: "",
          thuongKi8: "",
          thuongKi9: "",
          thucHanh1: "",
          thucHanh2: "",
          thucHanh3: "",
          thucHanh4: "",
          thucHanh5: "",
          cuoiKy: "",
          tongKet: "",
          diemTinChi: "",
          diemChu: "",
          xepLoai: "",
          ghiChu: "",
          diemTBQuaTrinh: "",
          dat: true,
        },
      
      ],
    },
  ];
  //function

  //html
  return (
    <div className="">
      <div className="box-df snipcss-Pirxi">
        <div className="portlet">
          <div className="portlet-title">
            <div className="caption">
              <span className="caption-subject bold">Kết quả học tập </span>
            </div>
          </div>
          <div className="portlet-body">
            <div className="table-wrapper" style={{ overflowX: "auto" }}>
              <table
                id="xemDiem_aaa"
                className="table-custom table table-bordered text-center dataTable no-footer"
                width="100%"
              >
                <thead>
                  <tr>
                    <th
                      rowSpan={3}
                      style={{ width: "100px !important" }}
                      lang="kqht-stt"
                      className="sorting_disabled"
                    >
                      <div>STT</div>
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-malhp"
                      className="sorting_disabled style-vdsFQ"
                      id="style-vdsFQ"
                    >
                      <div>Mã lớp học phần</div>
                    </th>
                    <th
                      rowSpan={3}
                      style={{ width: "200px !important" }}
                      lang="kqht-tenlhp"
                      className="sorting_disabled"
                    >
                      <div>Tên môn học/học phần</div>
                    </th>
                    <th
                      rowSpan={3}
                      style={{ width: "100px !important" }}
                      lang="kqht-stc"
                      className="sorting_disabled"
                    >
                      <div>Số tín chỉ</div>
                    </th>
                    <th colSpan={2} lang="kqht-qucd-row_1_2">
                      {" "}
                      Giữa kỳ{" "}
                    </th>
                    <th colSpan={9} lang="kqht-qucd-row_1_3">
                      {" "}
                      Thường xuyên{" "}
                    </th>
                    <th colSpan={5} lang="kqht-qucd-row_1_5">
                      {" "}
                      Thực hành{" "}
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-row_1_8"
                      className="sorting_disabled"
                    >
                      {" "}
                      Cuối kỳ{" "}
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-row_1_10"
                      className="sorting_disabled"
                    >
                      {" "}
                      Điểm tổng kết{" "}
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-diemtinchi"
                      className="sorting_disabled"
                    >
                      Thang điểm 4
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-diemchu"
                      className="sorting_disabled"
                    >
                      Điểm chữ
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-xeploai"
                      className="sorting_disabled"
                    >
                      Xếp loại
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-ghichu"
                      className="sorting_disabled"
                    >
                      Ghi chú
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-diemtbquatrinh"
                      className="sorting_disabled"
                    >
                      TBQT
                    </th>
                    <th
                      rowSpan={3}
                      lang="kqht-qucd-isdat"
                      className="sorting_disabled"
                    >
                      Đạt
                    </th>
                  </tr>

                  <tr>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemchuyencan1"
                      className="sorting_disabled"
                    >
                      1
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemchuyencane"
                      className="sorting_disabled"
                    >
                      Chuyên cần
                    </th>
                    <th colSpan={9} lang="kqht-qucd-row_2_3_2">
                      LT Hệ số 1
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemthuchanh1"
                      className="sorting_disabled"
                    >
                      1
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemthuchanh2"
                      className="sorting_disabled"
                    >
                      2
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemthuchanh3"
                      className="sorting_disabled"
                    >
                      3
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemthuchanh4"
                      className="sorting_disabled"
                    >
                      4
                    </th>
                    <th
                      rowSpan={2}
                      lang="kqht-qucd-diemthuchanh5"
                      className="sorting_disabled"
                    >
                      5
                    </th>
                  </tr>
                  <tr>
                    <th
                      lang="kqht-qucd-diemheso11"
                      className="sorting_disabled"
                    >
                      1
                    </th>
                    <th
                      lang="kqht-qucd-diemheso12"
                      className="sorting_disabled"
                    >
                      2
                    </th>
                    <th
                      lang="kqht-qucd-diemheso13"
                      className="sorting_disabled"
                    >
                      3
                    </th>
                    <th
                      lang="kqht-qucd-diemheso14"
                      className="sorting_disabled"
                    >
                      4
                    </th>
                    <th
                      lang="kqht-qucd-diemheso15"
                      className="sorting_disabled"
                    >
                      5
                    </th>
                    <th
                      lang="kqht-qucd-diemthuongky6"
                      className="sorting_disabled"
                    >
                      6
                    </th>
                    <th
                      lang="kqht-qucd-diemthuongky7"
                      className="sorting_disabled"
                    >
                      7
                    </th>
                    <th
                      lang="kqht-qucd-diemthuongky8"
                      className="sorting_disabled"
                    >
                      8
                    </th>
                    <th
                      lang="kqht-qucd-diemthuongky9"
                      className="sorting_disabled"
                    >
                      9
                    </th>
                  </tr>
                </thead>
                {/* ================================================================================================================================== */}
                {/* ================================================================================================================================== */}
                {/* ================================================================================================================================== */}
                {/* data */}
                <tbody>
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr role="row">
                        <td colSpan={28} className="text-left row-head">
                          {item.name}
                        </td>
                      </tr>
                      {item.data.map((item1) => (
                        <tr role="row" key={item1.id}>
                          <td style={{ width: "100px !important" }}>
                            <div>{item1.id}</div>
                          </td>
                          <td style={{ width: "200px !important" }}>
                            <div title="">{item1.code}</div>
                          </td>
                          <td
                            style={{ width: "200px !important" }}
                            className="text-left"
                          >
                            <div id="style-WaoeK" className="style-WaoeK">
                              {item1.subject}
                            </div>
                          </td>
                          <td style={{ width: "100px !important" }}>
                            <div style={{ display: "inline-table" }}>
                              {item1.tinChi}
                            </div>
                          </td>
                          <td title="DiemChuyenCan1">{item1.thuongKi1}</td>
                          <td title="DiemChuyenCanE"></td>
                          <td title="DiemHeSo11">{item1.thuongKi2}</td>
                          <td title="DiemHeSo12">{item1.thuongKi3}</td>
                          <td title="DiemHeSo13">{item1.thuongKi4}</td>
                          <td title="DiemHeSo14">{item1.thuongKi5}</td>
                          <td title="DiemHeSo15">{item1.thuongKi6}</td>
                          <td title="DiemThuongKy6">{item1.thuongKi7}</td>
                          <td title="DiemThuongKy7">{item1.thuongKi8}</td>
                          <td title="DiemThuongKy8">{item1.thuongKi9}</td>
                          <td title="DiemThuongKy9">{item1.thucHanh1}</td>
                          <td title="DiemThucHanh1">{item1.thucHanh2}</td>
                          <td title="DiemThucHanh2">{item1.thucHanh3}</td>
                          <td title="DiemThucHanh3">{item1.thucHanh4}</td>
                          <td title="DiemThucHanh4">{item1.thucHanh5}</td>
                          <td title="DiemThucHanh5">{item1.cuoiKy}</td>
                          <td title="DiemThi">{item1.tongKet}</td>
                          <td title="DiemTongKet">{item1.diemTinChi}</td>
                          <td title="DiemTinChi">{item1.diemChu}</td>
                          <td title="DiemChu">{item1.xepLoai}</td>
                          <td title="XepLoai">{item1.ghiChu}</td>
                          <td title="GhiChu">{item1.diemTBQuaTrinh}</td>
                          <td title="TBQT">{item1.diemTBQuaTrinh}</td>
                          <td>
                            <div>
                              {item1.dat ? (
                                <div className="check"></div>
                              ) : (
                                <div className="no-check"></div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* ================================================================================================================================== */}
                      {/* ================================================================================================================================== */}
                      {/* ================================================================================================================================== */}
                      {/* Đánh Giá */}
                      <tr>
                        <td colSpan={3}>
                          <span>Điểm trung bình học kỳ hệ 10:</span>
                          <span style={{}}> 7,70</span>
                        </td>
                        <td colSpan={8}>
                          <span>Điểm trung bình học kỳ hệ 4:</span>
                          <span style={{}}> 3,15</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <span>Điểm trung bình tích lũy:</span>
                          <span style={{}}> 7,70</span>
                        </td>
                        <td colSpan={8}>
                          <span>Điểm trung bình tích lũy (hệ 4):</span>
                          <span style={{}}> 3,15</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <span>Tổng số tín chỉ đã đăng ký:</span>
                          <span style={{}}> 11</span>
                        </td>
                        <td colSpan={8}>
                          <span>Tổng số tín chỉ tích lũy:</span>
                          <span style={{}}> 11</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <span>Tổng số tín chỉ đạt:</span>
                          <span style={{}}> 11</span>
                        </td>
                        <td colSpan={8}>
                          <span>Tổng số tín chỉ nợ tính đến hiện tại:</span>
                          <span style={{}}> 0</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <span>Xếp loại học lực tích lũy:</span>
                          <span style={{}}> Khá</span>
                        </td>
                        <td colSpan={8}>
                          <span>Xếp loại học lực học kỳ:</span>
                          <span style={{}}> Khá</span>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LearningOutcomes;
