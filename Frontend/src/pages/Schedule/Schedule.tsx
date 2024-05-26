// Lịch theo tuần

import React from "react";
import "./index.css";
import {
  LeftOutlined,
  RightOutlined,
  PrinterOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

function Schedule() {
  //data
  const dataNgayXemLich = [
    {
      id: 1,
      date: "22/07/2024",
      thu: "Thứ 2",
    },
    {
      id: 2,
      date: "23/07/2024",
      thu: "Thứ 3",
    },
    {
      id: 3,
      date: "24/07/2024",
      thu: "Thứ 4",
    },
    {
      id: 4,
      date: "25/07/2024",
      thu: "Thứ 5",
    },
    {
      id: 5,
      date: "26/07/2024",
      thu: "Thứ 6",
    },
    {
      id: 6,
      date: "27/07/2024",
      thu: "Thứ 7",
    },
    {
      id: 7,
      date: "28/07/2024",
      thu: "Chủ nhật",
    },
  ];

  //1: Lịch học lý thuyết
  //2: Lịch học thực hành
  //3: Lịch học trực tuyến
  //4: Lịch thi
  //5: Lịch tạm ngưng

  const dataSang = [
    {
      id: 1,
      name: "Thu 2",
      data: [
        {
          id: 1,
          mon: "Lập trình WWW (Java)",
          lop: "DHKTPM17A HL - 420300362101",
          tiet: "1 - 3",
          phong: "A1.03",
          gv: "Nguyễn Minh Hải",
          loai: 1,
        },
        {
          id: 2,
          mon: "Lập trình WWW (Java)",
          lop: "DHKTPM17A HL - 420300362101",
          tiet: "1 - 3",
          phong: "H3.1.1",
          gv: "Nguyễn Minh Hải",
          loai: 2,
        },
      ],
    },
    { id: 2, name: "Thu 3", data: [] },
    { id: 3, name: "Thu 4", data: [] },
    { id: 4, name: "Thu 5", data: [] },
    { id: 5, name: "Thu 6", data: [] },
    { id: 6, name: "Thu 7", data: [] },
    { id: 7, name: "Chủ nhật", data: [] },
  ];

  const dataChieu = [
    { id: 1, name: "Thu 2", data: [] },
    { id: 2, name: "Thu 3", data: [] },
    { id: 3, name: "Thu 4", data: [] },
    { id: 4, name: "Thu 5", data: [] },
    { id: 5, name: "Thu 6", data: [] },
    { id: 6, name: "Thu 7", data: [] },
    {
      id: 7,
      name: "Chủ nhật",
      data: [
        {
          id: 1,
          mon: "Lập trình WWW (Java)",
          lop: "DHKTPM17A HL - 420300362101",
          tiet: "7 - 9",
          phong: "A1.03",
          gv: "Nguyễn Minh Hải",
          loai: 3,
        },
      ],
    },
  ];

  const dataToi = [
    {
      id: 1,
      name: "Thu 2",
      data: [
        {
          id: 1,
          mon: "Lập trình WWW (Java)",
          lop: "DHKTPM17A HL - 420300362101",
          tiet: "7 - 9",
          phong: "A1.03",
          gv: "Nguyễn Minh Hải",
          loai: 4,
        },
      ],
    },
    { id: 2, name: "Thu 3", data: [] },
    { id: 3, name: "Thu 4", data: [] },
    { id: 4, name: "Thu 5", data: [] },
    { id: 5, name: "Thu 6", data: [] },
    { id: 6, name: "Thu 7", data: [] },
    { id: 7, name: "Chủ nhật", data: [] },
  ];

  //html
  return (
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
                  />
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
                itemID="lichtheotuan-hientai-button"
              >
                <RetweetOutlined
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                />{" "}
                Hiện tại
              </a>

              <a
                href="javascript:;"
                className="btn btn-action"
                id="btn_TroVe"
                itemID="lichtheotuan-back-button"
              >
                <LeftOutlined
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                />{" "}
                Lùi về
              </a>
              <a
                href="javascript:;"
                className="btn btn-action"
                id="btn_Tiep"
                itemID="lichtheotuan-next-button"
              >
                Tiến lên
                <RightOutlined
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                />
              </a>
              <a
                href="javascript:;"
                className="btn btn-action"
                id="btn_InLich"
                //onclick="PrintElem()"
                itemID="lichtheotuan-print-button"
              >
                <PrinterOutlined
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                />{" "}
                In lịch
              </a>
            </div>
          </div>
          {/* Bảng cụ thể */}
          <div id="viewLichTheoTuan">
            <div className="table-responsive">
              <table
                className="fl-table table table-bordered text-center no-footer dtr-inline"
                width="100%"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th itemID="lichtheotuan-cahoc">Ca học</th>
                    {dataNgayXemLich.map((item) => (
                      <th>
                        <span itemID="lichtheotuan-mon">{item.thu}</span>
                        <br />
                        {item.date}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr role="row">
                    <td itemID="lichtheotuan-buoisang">
                      <b>Sáng</b>
                    </td>
                    {/* Data sáng */}
                    {dataSang.map((item) => (
                      <td>
                        {item.data.map((itemData) => (
                          <div
                            className={`content color-lichhoc text-left ${
                              itemData.loai === 1
                                ? "color-lichhoc"
                                : itemData.loai === 2
                                ? "color-hocTH"
                                : itemData.loai === 3
                                ? "color-hocTT"
                                : itemData.loai === 4
                                ? "color-lichthi"
                                : "color-tamngung"
                            }`}
                            data-bg={2052761}
                          >
                            <b>{itemData.mon}</b>
                            <p>{itemData.lop}</p>
                            <p>
                              <span itemID="lichtheotuan-tiet">Tiết</span>:{" "}
                              {itemData.tiet}
                              <br />
                            </p>
                            <p>
                              <span itemID="giang-duong">Phòng</span>:{" "}
                              <span className="font-style">
                                {itemData.phong}
                              </span>
                            </p>
                            <p>
                              <span itemID="lichtheotuan-gv">GV</span>:{" "}
                              <span className="font-style">{itemData.gv}</span>
                            </p>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  <tr role="row">
                    <td itemID="lichtheotuan-buoichieu">
                      <b>Chiều</b>
                    </td>
                    {/* Data chiều */}
                    {dataChieu.map((item) => (
                      <td>
                        {item.data.map((itemData) => (
                          <div
                            className={`content color-lichhoc text-left ${
                              itemData.loai === 1
                                ? "color-lichhoc"
                                : itemData.loai === 2
                                ? "color-hocTH"
                                : itemData.loai === 3
                                ? "color-hocTT"
                                : itemData.loai === 4
                                ? "color-lichthi"
                                : "color-tamngung"
                            }`}
                          >
                            <b>{itemData.mon}</b>
                            <p>{itemData.lop}</p>
                            <p>
                              <span itemID="lichtheotuan-tiet">Tiết</span>:{" "}
                              {itemData.tiet}
                              <br />
                            </p>
                            <p>
                              <span itemID="giang-duong">Phòng</span>:{" "}
                              <span className="font-style">
                                {itemData.phong}
                              </span>
                            </p>
                            <p>
                              <span itemID="lichtheotuan-gv">GV</span>:{" "}
                              <span className="font-style">{itemData.gv}</span>
                            </p>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  <tr role="row">
                    <td itemID="lichtheotuan-buoitoi">
                      <b>Tối</b>
                    </td>
                    {/* Data tối */}
                    {dataToi &&
                      dataToi.length > 0 &&
                      dataToi.map((item) => (
                        <td>
                          {item.data &&
                            item.data.length > 0 &&
                            item.data.map((itemData) => (
                              <div
                                className={`content color-lichhoc text-left ${
                                  itemData.loai === 1
                                    ? "color-lichhoc"
                                    : itemData.loai === 2
                                    ? "color-hocTH"
                                    : itemData.loai === 3
                                    ? "color-hocTT"
                                    : itemData.loai === 4
                                    ? "color-lichthi"
                                    : "color-tamngung"
                                }`}
                              >
                                <b>{itemData.mon}</b>
                                <p>{itemData.lop}</p>
                                <p>
                                  <span itemID="lichtheotuan-tiet">Tiết</span>:{" "}
                                  {itemData.tiet}
                                  <br />
                                </p>
                                <p>
                                  <span itemID="giang-duong">Phòng</span>:{" "}
                                  <span className="font-style">
                                    {itemData.phong}
                                  </span>
                                </p>
                                <p>
                                  <span itemID="lichtheotuan-gv">GV</span>:{" "}
                                  <span className="font-style">
                                    {itemData.gv}
                                  </span>
                                </p>
                              </div>
                            ))}
                        </td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer table */}
            <div className="tableGC">
              <ul>
                <li>
                  <span className="colorSTLichHoc" />
                  <label itemID="lichtheotuan-lichhoc">
                    Lịch học lý thuyết
                  </label>
                </li>
                <li>
                  <span
                    className="colorSTLichHoc style-b6sg3"
                    id="style-b6sg3"
                  />
                  <label itemID="lichtheotuan-lichhoconline">
                    Lịch học thực hành
                  </label>
                </li>
                <li>
                  <span
                    className="colorSTLichHoc style-kqk2W"
                    id="style-kqk2W"
                  />
                  <label itemID="lichtheotuan-lichhoconline">
                    Lịch học trực tuyến
                  </label>
                </li>
                <li>
                  <span className="colorSTLichThi" />
                  <label itemID="lichtheotuan-lichthi">Lịch thi</label>
                </li>
                <li>
                  <span className="colorSTTamNgung" />
                  <label itemID="lichtheotuan-lichtamngung">
                    Lịch tạm ngưng
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
