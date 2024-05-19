// Lịch theo tuần

import React from "react";
import "./index.css";
import {
  LeftOutlined,
  RightOutlined,
  ExpandAltOutlined,
  PrinterOutlined ,
  RetweetOutlined
} from "@ant-design/icons";

const Schedule: React.FC = () => (
  <div className="snipcss-O7Xnm">
    <div className="box-df">
      <div className="portlet">
        <div className="portlet-title">
          <div className="caption">
            <span
              className="caption-subject bold"
              lang="lichtheotuan-pagetitle"
            >
              Lịch học, lịch thi theo tuần
            </span>
          </div>
          <div className="actions">
            <div className="mt-radio-inline style-PoNdo" id="style-PoNdo">
              <label className="mt-radio style-E6ffC" id="style-E6ffC">
                <input
                  defaultChecked={true}
                  id="rdoLoaiLich"
                  name="rdoLoaiLich"
                  type="radio"
                  defaultValue={0}
                />
                <label lang="lichtheotuan-tatca">Tất cả</label>
                <span />
              </label>
              <label className="mt-radio style-NcwZr" id="style-NcwZr">
                <input
                  id="rdoLoaiLich"
                  name="rdoLoaiLich"
                  type="radio"
                  defaultValue={1}
                />{" "}
                <label lang="lichtheotuan-lichhoc">Lịch học</label>
                <span />
              </label>
              <label className="mt-radio style-EUVis" id="style-EUVis">
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
            <span style={{}} className="k-widget k-datepicker k-header">
              <span className="k-picker-wrap k-state-default">
                <input
                  id="dateNgayXemLich"
                  name="dateNgayXemLich"
                  type="date"
                  data-role="datepicker"
                  className="k-input style-JP7qS"
                  role="combobox"
                  aria-expanded="false"
                  aria-owns="dateNgayXemLich_dateview"
                  aria-disabled="false"
                />
              </span>
            </span>
            <a
              href="javascript:;"
              className="btn btn-action"
              id="btn_HienTai"
              lang="lichtheotuan-hientai-button"
            >
              <RetweetOutlined style={{ fontSize: "16px",   fontWeight: "bold" }}/> Hiện tại 
            </a>
            <a
              href="javascript:;"
              className="btn btn-action"
              id="btn_InLich"
              //   onclick="PrintElem()"
              lang="lichtheotuan-print-button"
            >
              <PrinterOutlined  style={{ fontSize: "16px",   fontWeight: "bold" }}/> In lịch 
            </a>
            <a
              href="javascript:;"
              className="btn btn-action"
              id="btn_TroVe"
              lang="lichtheotuan-back-button"
            >
              <LeftOutlined style={{ fontSize: "16px",   fontWeight: "bold" }} /> Trở về
            </a>
            <a
              href="javascript:;"
              className="btn btn-action"
              id="btn_Tiep"
              lang="lichtheotuan-next-button"
            >
              Tiếp <RightOutlined  style={{ fontSize: "16px",   fontWeight: "bold" }}/>
            </a>
            <a href="javascript:;" className="btn btn-action" id="full-table">
              <ExpandAltOutlined
                style={{ fontSize: "16px",   fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
        <div id="viewLichTheoTuan">
          <span
            hidden={true}
            id="warningPhongHoc"
            data-name="warningPhongHoc"
            lang="lichtheotuan-warningPhongHoc"
          >
            Phòng học chưa được khởi tạo
          </span>
          <span
            hidden={true}
            id="warningGVNotFound"
            data-name="warningGVNotFound"
            lang="lichtheotuan-warningGVNotFound"
          >
            Không tìm thấy thông tin
          </span>
          <span
            hidden={true}
            id="popupThongTinGV"
            data-name="popupThongTinGV"
            lang="lichtheotuan-popupThongTinGV"
          >
            Thông tin giảng viên
          </span>
          <span
            hidden={true}
            id="popupHoTenGV"
            data-name="popupHoTenGV"
            lang="lichtheotuan-popupHoTenGV"
          >
            Họ tên
          </span>
          <span
            hidden={true}
            id="popupSDTGV"
            data-name="popupSDTGV"
            lang="lichtheotuan-popupSDTGV"
          >
            Số điện thoại
          </span>
          <span
            hidden={true}
            id="popupEmailGV"
            data-name="popupEmailGV"
            lang="lichtheotuan-popupEmailGV"
          >
            Email
          </span>
          <div className="table-responsive">
            <table
              className="fl-table table table-bordered text-center no-footer dtr-inline"
              width="100%"
              role="grid"
            >
              <thead>
                <tr role="row">
                  <th lang="lichtheotuan-cahoc">Ca học</th>
                  <th>
                    <span lang="lichtheotuan-mon">Thứ 2</span>
                    <br />
                    22/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-tue">Thứ 3</span>
                    <br />
                    23/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-wed">Thứ 4</span>
                    <br />
                    24/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-thu">Thứ 5</span>
                    <br />
                    25/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-fri">Thứ 6</span>
                    <br />
                    26/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-sat">Thứ 7</span>
                    <br />
                    27/07/2024
                  </th>
                  <th>
                    <span lang="lichtheotuan-sun">Chủ nhật</span>
                    <br />
                    28/07/2024
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td lang="lichtheotuan-buoisang">
                    <b>Sáng</b>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <div
                      className="content color-lichhoc text-left"
                      data-bg={2052761}
                      style={{ textAlign: "left" }}
                    >
                      <b>
                        <a
                          href="javascript:"
                          target=""
                          data-toggle="tooltip"
                          data-placement="auto"
                          title=""
                          data-original-title=""
                          id="style-jUOaJ"
                          className="style-jUOaJ"
                        >
                          Lập trình WWW (Java)
                        </a>
                      </b>
                      <p>DHKTPM17A HL - 420300362101</p>
                      <p>
                        <span lang="lichtheotuan-tiet">Tiết</span>: 1 - 3<br />
                      </p>
                      <p>
                        <span lang="giang-duong">Phòng</span>:
                        <span className="font-style">A1.03 </span>
                      </p>
                      <p>
                        <span lang="lichtheotuan-gv">GV</span>:{" "}
                        <span className="font-style">Nguyễn Minh Hải </span>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div
                      className="content color-lichhoc text-left style-rrWQD"
                      data-bg={2052783}
                      id="style-rrWQD"
                    >
                      <b>
                        <a
                          href="javascript:"
                          target=""
                          data-toggle="tooltip"
                          data-placement="auto"
                          title=""
                          data-original-title=""
                          id="style-KiSEo"
                          className="style-KiSEo"
                        >
                          Lập trình WWW (Java)
                        </a>
                      </b>
                      <p>DHKTPM17A HL - 420300362101</p>
                      <p>
                        <span lang="lichtheotuan-tiet">Tiết</span>: 1 - 3<br />
                      </p>
                      <p>
                        <span lang="giang-duong">Phòng</span>:
                        <span className="font-style">H3.1.1 </span>
                      </p>
                      <p>
                        <span lang="lichtheotuan-gv">GV</span>:{" "}
                        <span className="font-style">Nguyễn Minh Hải </span>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr role="row">
                  <td lang="lichtheotuan-buoichieu">
                    <b>Chiều</b>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <div
                      className="content color-lichhoc text-left style-AF6wJ"
                      id="style-AF6wJ"
                    >
                      <b>
                        <a
                          href="javascript:"
                          target=""
                          data-toggle="tooltip"
                          data-placement="auto"
                          title=""
                          data-original-title=""
                          id="style-5MYes"
                          className="style-5MYes"
                        >
                          Lập trình WWW (Java)
                        </a>
                      </b>
                      <p>DHKTPM17A HL - 420300362101</p>
                      <p>
                        <span lang="lichtheotuan-tiet">Tiết</span>: 7 - 9<br />
                      </p>
                      <p>
                        <span lang="giang-duong">Phòng</span>:{" "}
                        <span className="font-style">A1.03</span>
                      </p>
                      <p>
                        <span lang="lichtheotuan-gv">GV</span>:{" "}
                        <span className="font-style">Nguyễn Minh Hải </span>
                      </p>
                    </div>
                  </td>
                  <td />
                </tr>
                <tr role="row">
                  <td lang="lichtheotuan-buoitoi">
                    <b>Tối</b>
                  </td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tableGC">
            <ul>
              <li>
                <span className="colorSTLichHoc" />
                <label lang="lichtheotuan-lichhoc">Lịch học lý thuyết</label>
              </li>
              <li>
                <span className="colorSTLichHoc style-b6sg3" id="style-b6sg3" />
                <label lang="lichtheotuan-lichhoconline">
                  Lịch học thực hành
                </label>
              </li>
              <li>
                <span className="colorSTLichHoc style-kqk2W" id="style-kqk2W" />
                <label lang="lichtheotuan-lichhoconline">
                  Lịch học trực tuyến
                </label>
              </li>
              <li>
                <span className="colorSTLichThi" />
                <label lang="lichtheotuan-lichthi">Lịch thi</label>
              </li>
              <li>
                <span className="colorSTTamNgung" />
                <label lang="lichtheotuan-lichtamngung">Lịch tạm ngưng</label>
              </li>
            </ul>
          </div>
          <div id="style-JtmXT" className="style-JtmXT"></div>
          <input
            id="firstDatePrevOffWeek"
            name="firstDatePrevOffWeek"
            type="hidden"
            defaultValue="15/07/2024"
          />
          <input
            id="firstDateOffWeek"
            name="firstDateOffWeek"
            type="hidden"
            defaultValue="22/07/2024"
          />
          <input
            id="firstDateNextOffWeek"
            name="firstDateNextOffWeek"
            type="hidden"
            defaultValue="29/07/2024"
          />
        </div>
        <div id="viewDsCamThi" className="style-Aq7JP"></div>
      </div>
    </div>
  </div>
);
export default Schedule;
