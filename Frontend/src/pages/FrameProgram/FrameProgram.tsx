// Chương trình khung

import React from "react";
import "./index.css";

const frameProgram: React.FC = () => (
  <div className="box-df snipcss-ZbMtW">
    <div className="portlet">
      <div className="portlet-title">
        <div className="caption">
          <span className="caption-subject bold" lang="ctk-pagetitle">
            Chương trình khung
          </span>
        </div>
        <div className="actions">
          <a
            href="javascript:;"
            className="btn btn-action"
            id="btn_InCongNo"
            // onclick="PrintElem($('#id-chuong-trinh-khung'))"
            lang="ctk-btnIn"
          >
            <i className="fa fa-print" aria-hidden="true" /> In{" "}
          </a>
          <a
            href="javascript:;"
            className="btn btn-action"
            id="OpenAccordionAll"
          >
            <span
              className="glyphicon glyphicon-collapse-down"
              aria-hidden="true"
            />
          </a>
          <a href="javascript:;" className="btn btn-action" id="full-table">
            <span
              className="glyphicon glyphicon-resize-full"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-responsive">
          <table
            className="table-custom table table-bordered text-center no-footer dtr-inline"
            width="100%"
            role="grid"
          >
            <thead>
              <tr role="row">
                <th className="sorting_disabled">STT</th>
                <th className="sorting_disabled w-1/5" lang="ctk-tenmhhp">
                  Tên môn học/Học phần
                </th>
                <th className="sorting_disabled" lang="ctk-mahp">
                  Mã Học phần
                </th>
                <th
                  className="sorting_disabled tooltip tooltipstered"
                  itemID="ctk-mhghichu-title_1"
                >
                  Học phần
                </th>
                <th className="sorting_disabled" lang="ctk-stc">
                  Số TC
                </th>
                <th className="sorting_disabled" lang="ctk-sotietlt">
                  Số tiết LT
                </th>
                <th className="sorting_disabled" lang="ctk-sotietth">
                  Số tiết TH
                </th>
                <th className="sorting_disabled" lang="ctk-nhomtuchon">
                  Nhóm <br /> tự chọn
                </th>
                <th className="sorting_disabled" lang="ctk-sotcnhombatbuoc">
                  Số TC bắt buộc <br /> của nhóm
                </th>
                <th className="sorting_disabled" lang="ctk-pass">
                  Đạt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-1"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 1
                </td>
                <td className="text-center">
                  <span className="">11</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-1 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-1 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-1 collapse ">11</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse "> Nhập môn Tin học </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203002009</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  ">
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse ">
                    {" "}
                    Chứng chỉ TOEIC 450{" "}
                    <span id="style-s7nrR" className="style-s7nrR">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203002027</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse ">
                    {" "}
                    Kỹ năng làm việc nhóm{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203003192</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse ">
                    {" "}
                    Giáo dục Quốc phòng và An ninh 1{" "}
                    <span id="style-ZKd4C" className="style-ZKd4C">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203003242</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse "> Toán cao cấp 1 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203003259</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse ">
                    {" "}
                    Giáo dục thể chất 1{" "}
                    <span id="style-ok6UU" className="style-ok6UU">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203003307</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse "> Nhập môn Lập trình </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203003848</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-1 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-1 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-1 collapse ">
                    {" "}
                    Triết học Mác - Lênin{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">4203014164</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-1 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-1 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-1 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-2"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 2
                </td>
                <td className="text-center">
                  <span className="">12</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-2 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-2 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-2 collapse ">9</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Kỹ thuật lập trình </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203000941</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_1"
                    >
                      003848<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Hệ Thống Máy tính </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203002137</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse ">
                    {" "}
                    Tiếng anh 1{" "}
                    <span id="style-3rqvo" className="style-3rqvo">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003067</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse ">
                    {" "}
                    Giáo dục thể chất 2{" "}
                    <span id="style-4PTh5" className="style-4PTh5">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003306</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse ">
                    {" "}
                    Giáo dục quốc phòng và an ninh 2{" "}
                    <span id="style-9LoXI" className="style-9LoXI">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003354</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse ">
                    {" "}
                    Kinh tế chính trị Mác - Lênin{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203014165</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      014164<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr role="row" className="row-head tr-row-2 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-2 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-2 collapse ">3</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-2 collapse  ">
                <td>
                  <div className="tr-row-2 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Toán ứng dụng </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003193</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-2 collapse  ">
                <td>
                  <div className="tr-row-2 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse ">
                    {" "}
                    Hàm phức và phép biến đổi Laplace{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003240</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-2 collapse  ">
                <td>
                  <div className="tr-row-2 collapse ">9</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Phương pháp tính </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003320</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">10</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Vật lý đại cương </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003345</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 3 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-2 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-2 collapse ">11</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-2 collapse "> Logic học </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">4203003395</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-2 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse "> 3 </div>
                </td>
                <td>
                  <div className="tr-row-2 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-3"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 3
                </td>
                <td className="text-center">
                  <span className="">19</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr
                role="row"
                className="row-head tr-row-3 collapse style-KpRKO"
                aria-expanded="false"
                id="style-KpRKO"
              >
                <td colSpan={4} className="text-left">
                  <div
                    className="tr-row-3 collapse style-h9k5q"
                    lang="ctk-hpbatbuoc"
                    aria-expanded="false"
                    id="style-h9k5q"
                  >
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span
                    className="tr-row-3 collapse style-VbseY"
                    aria-expanded="false"
                    id="style-VbseY"
                  >
                    16
                  </span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-TPlno"
                aria-expanded="false"
                id="style-TPlno"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-fOtOz"
                    aria-expanded="false"
                    id="style-fOtOz"
                  >
                    1
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-KmHGG"
                    aria-expanded="false"
                    id="style-KmHGG"
                  >
                    {" "}
                    Cấu trúc rời rạc{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-iJcOo"
                    aria-expanded="false"
                    id="style-iJcOo"
                  >
                    4203000901
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-6orVy"
                    aria-expanded="false"
                    id="style-6orVy"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-eZrso"
                    aria-expanded="false"
                    id="style-eZrso"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-GWBWf"
                    aria-expanded="false"
                    id="style-GWBWf"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-4BKBG"
                    aria-expanded="false"
                    id="style-4BKBG"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-dEoW8"
                    aria-expanded="false"
                    id="style-dEoW8"
                  ></div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-S2VlU"
                    aria-expanded="false"
                    id="style-S2VlU"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-XeLFM"
                aria-expanded="false"
                id="style-XeLFM"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-LaKOi"
                    aria-expanded="false"
                    id="style-LaKOi"
                  >
                    2
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-nSiDi"
                    aria-expanded="false"
                    id="style-nSiDi"
                  >
                    {" "}
                    Cấu trúc dữ liệu và giải thuật{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-M6p4U"
                    aria-expanded="false"
                    id="style-M6p4U"
                  >
                    4203000942
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-XdM3r"
                    aria-expanded="false"
                    id="style-XdM3r"
                  >
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_2"
                    >
                      003848<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-ws6ov"
                    aria-expanded="false"
                    id="style-ws6ov"
                  >
                    4
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-RNKk1"
                    aria-expanded="false"
                    id="style-RNKk1"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-mwiiD"
                    aria-expanded="false"
                    id="style-mwiiD"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-TBP53"
                    aria-expanded="false"
                    id="style-TBP53"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-mROla"
                    aria-expanded="false"
                    id="style-mROla"
                  ></div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-BNo1e"
                    aria-expanded="false"
                    id="style-BNo1e"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-eA3J6"
                aria-expanded="false"
                id="style-eA3J6"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-2GaNa"
                    aria-expanded="false"
                    id="style-2GaNa"
                  >
                    3
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-yOQox"
                    aria-expanded="false"
                    id="style-yOQox"
                  >
                    {" "}
                    Hệ cơ sở dữ liệu{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-VgFN5"
                    aria-expanded="false"
                    id="style-VgFN5"
                  >
                    4203001146
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-mB6qe"
                    aria-expanded="false"
                    id="style-mB6qe"
                  >
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_3"
                    >
                      002009<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oEoSi"
                    aria-expanded="false"
                    id="style-oEoSi"
                  >
                    4
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-iUHao"
                    aria-expanded="false"
                    id="style-iUHao"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-PMtts"
                    aria-expanded="false"
                    id="style-PMtts"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-pfjXj"
                    aria-expanded="false"
                    id="style-pfjXj"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oPgc9"
                    aria-expanded="false"
                    id="style-oPgc9"
                  ></div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oQ2sy"
                    aria-expanded="false"
                    id="style-oQ2sy"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                className="tr-row-3 collapse style-laHEo"
                aria-expanded="false"
                id="style-laHEo"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-pOoZD"
                    aria-expanded="false"
                    id="style-pOoZD"
                  >
                    4
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-yCQYA"
                    aria-expanded="false"
                    id="style-yCQYA"
                  >
                    {" "}
                    Tiếng Anh 2{" "}
                    <span id="style-cQp6I" className="style-cQp6I">
                      {" "}
                      *
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-9tmbs"
                    aria-expanded="false"
                    id="style-9tmbs"
                  >
                    4203002421
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-odsrp"
                    aria-expanded="false"
                    id="style-odsrp"
                  >
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_4"
                    >
                      003067<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-Q9zmV"
                    aria-expanded="false"
                    id="style-Q9zmV"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-jLgYI"
                    aria-expanded="false"
                    id="style-jLgYI"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-gBhlo"
                    aria-expanded="false"
                    id="style-gBhlo"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-BMjGv"
                    aria-expanded="false"
                    id="style-BMjGv"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-FNocB"
                    aria-expanded="false"
                    id="style-FNocB"
                  ></div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-DNKvj"
                aria-expanded="false"
                id="style-DNKvj"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-N9mxi"
                    aria-expanded="false"
                    id="style-N9mxi"
                  >
                    5
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-Pgr5b"
                    aria-expanded="false"
                    id="style-Pgr5b"
                  >
                    {" "}
                    Toán cao cấp 2{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-e7CUp"
                    aria-expanded="false"
                    id="style-e7CUp"
                  >
                    4203003288
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-aIk6o"
                    aria-expanded="false"
                    id="style-aIk6o"
                  >
                    2
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-I3Mrl"
                    aria-expanded="false"
                    id="style-I3Mrl"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-KFoeD"
                    aria-expanded="false"
                    id="style-KFoeD"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-znzaY"
                    aria-expanded="false"
                    id="style-znzaY"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-1kbhW"
                    aria-expanded="false"
                    id="style-1kbhW"
                  ></div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-WgNgJ"
                    aria-expanded="false"
                    id="style-WgNgJ"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-JMlRJ"
                aria-expanded="false"
                id="style-JMlRJ"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-yDol5"
                    aria-expanded="false"
                    id="style-yDol5"
                  >
                    6
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-wpc9m"
                    aria-expanded="false"
                    id="style-wpc9m"
                  >
                    {" "}
                    Lập trình hướng đối tượng{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-sXMR5"
                    aria-expanded="false"
                    id="style-sXMR5"
                  >
                    4203003591
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-fGCEW"
                    aria-expanded="false"
                    id="style-fGCEW"
                  >
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      003848<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-xjKRs"
                    aria-expanded="false"
                    id="style-xjKRs"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-ciYay"
                    aria-expanded="false"
                    id="style-ciYay"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-POBmK"
                    aria-expanded="false"
                    id="style-POBmK"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-8bpPG"
                    aria-expanded="false"
                    id="style-8bpPG"
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-GK74K"
                    aria-expanded="false"
                    id="style-GK74K"
                  ></div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-GmxmX"
                    aria-expanded="false"
                    id="style-GmxmX"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                role="row"
                className="row-head tr-row-3 collapse style-BGPWR"
                aria-expanded="false"
                id="style-BGPWR"
              >
                <td colSpan={4} className="text-left">
                  <div
                    className="tr-row-3 collapse style-GW5eH"
                    lang="ctk-hptuchon"
                    aria-expanded="false"
                    id="style-GW5eH"
                  >
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span
                    className="tr-row-3 collapse style-aPbTV"
                    aria-expanded="false"
                    id="style-aPbTV"
                  >
                    3
                  </span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr
                className="tr-row-3 collapse style-IRG2i"
                aria-expanded="false"
                id="style-IRG2i"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-9JC1B"
                    aria-expanded="false"
                    id="style-9JC1B"
                  >
                    7
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-Reo1h"
                    aria-expanded="false"
                    id="style-Reo1h"
                  >
                    {" "}
                    Giao tiếp kinh doanh{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-3HjTJ"
                    aria-expanded="false"
                    id="style-3HjTJ"
                  >
                    4203003196
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-p5eE7"
                    aria-expanded="false"
                    id="style-p5eE7"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-ncggF"
                    aria-expanded="false"
                    id="style-ncggF"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-whkHo"
                    aria-expanded="false"
                    id="style-whkHo"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-SYUvp"
                    aria-expanded="false"
                    id="style-SYUvp"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-hGoCN"
                    aria-expanded="false"
                    id="style-hGoCN"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 collapse style-9JbnR"
                aria-expanded="false"
                id="style-9JbnR"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-xTRtv"
                    aria-expanded="false"
                    id="style-xTRtv"
                  >
                    8
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-zInBb"
                    aria-expanded="false"
                    id="style-zInBb"
                  >
                    {" "}
                    Kỹ năng xây dựng kế hoạch{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-WnQnx"
                    aria-expanded="false"
                    id="style-WnQnx"
                  >
                    4203003197
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-hHeLQ"
                    aria-expanded="false"
                    id="style-hHeLQ"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-dgASx"
                    aria-expanded="false"
                    id="style-dgASx"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-yKni2"
                    aria-expanded="false"
                    id="style-yKni2"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-wy8Cl"
                    aria-expanded="false"
                    id="style-wy8Cl"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-Z4VJS"
                    aria-expanded="false"
                    id="style-Z4VJS"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 collapse style-j2Df1"
                aria-expanded="false"
                id="style-j2Df1"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-mbqYM"
                    aria-expanded="false"
                    id="style-mbqYM"
                  >
                    9
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-gm23W"
                    aria-expanded="false"
                    id="style-gm23W"
                  >
                    {" "}
                    Quản trị doanh nghiệp{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-hKkpv"
                    aria-expanded="false"
                    id="style-hKkpv"
                  >
                    4203003205
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-UyN9S"
                    aria-expanded="false"
                    id="style-UyN9S"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-IRgnI"
                    aria-expanded="false"
                    id="style-IRgnI"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-yiJKG"
                    aria-expanded="false"
                    id="style-yiJKG"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-J4goy"
                    aria-expanded="false"
                    id="style-J4goy"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-tWMr6"
                    aria-expanded="false"
                    id="style-tWMr6"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-wEYWX"
                aria-expanded="false"
                id="style-wEYWX"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-8Ftbl"
                    aria-expanded="false"
                    id="style-8Ftbl"
                  >
                    10
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-GgNlo"
                    aria-expanded="false"
                    id="style-GgNlo"
                  >
                    {" "}
                    Môi trường và con người{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-EbDJv"
                    aria-expanded="false"
                    id="style-EbDJv"
                  >
                    4203003206
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-UtVM8"
                    aria-expanded="false"
                    id="style-UtVM8"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-NeoJV"
                    aria-expanded="false"
                    id="style-NeoJV"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-fhSgk"
                    aria-expanded="false"
                    id="style-fhSgk"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-VVQFB"
                    aria-expanded="false"
                    id="style-VVQFB"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-BwkPC"
                    aria-expanded="false"
                    id="style-BwkPC"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-btTnG"
                    aria-expanded="false"
                    id="style-btTnG"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr
                className="tr-row-3 collapse style-s5Ifl"
                aria-expanded="false"
                id="style-s5Ifl"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-qxe2J"
                    aria-expanded="false"
                    id="style-qxe2J"
                  >
                    11
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-MoL7n"
                    aria-expanded="false"
                    id="style-MoL7n"
                  >
                    {" "}
                    Quản trị học{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-gAdg4"
                    aria-expanded="false"
                    id="style-gAdg4"
                  >
                    4203003217
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oYgOA"
                    aria-expanded="false"
                    id="style-oYgOA"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-WQlDw"
                    aria-expanded="false"
                    id="style-WQlDw"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-n3kz3"
                    aria-expanded="false"
                    id="style-n3kz3"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-9CA42"
                    aria-expanded="false"
                    id="style-9CA42"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-b1v3J"
                    aria-expanded="false"
                    id="style-b1v3J"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 collapse style-zoxCA"
                aria-expanded="false"
                id="style-zoxCA"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-izDbd"
                    aria-expanded="false"
                    id="style-izDbd"
                  >
                    12
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-B5Q86"
                    aria-expanded="false"
                    id="style-B5Q86"
                  >
                    {" "}
                    Kế toán cơ bản{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oLyxm"
                    aria-expanded="false"
                    id="style-oLyxm"
                  >
                    4203003285
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-I2Pjq"
                    aria-expanded="false"
                    id="style-I2Pjq"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-SrFol"
                    aria-expanded="false"
                    id="style-SrFol"
                  >
                    45
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-WVToO"
                    aria-expanded="false"
                    id="style-WVToO"
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-nBOAw"
                    aria-expanded="false"
                    id="style-nBOAw"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-y4poK"
                    aria-expanded="false"
                    id="style-y4poK"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-3 colorSTLichHoc collapse style-DmKfg"
                aria-expanded="false"
                id="style-DmKfg"
              >
                <td>
                  <div
                    className="tr-row-3 collapse style-5rYRe"
                    aria-expanded="false"
                    id="style-5rYRe"
                  >
                    13
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-3 collapse style-adetb"
                    aria-expanded="false"
                    id="style-adetb"
                  >
                    {" "}
                    Kỹ năng sử dụng bàn phím và thiết bị văn phòng{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-4aA8Y"
                    aria-expanded="false"
                    id="style-4aA8Y"
                  >
                    4203014193
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-3 collapse style-lKb26"
                    aria-expanded="false"
                    id="style-lKb26"
                  >
                    3
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-UDEoC"
                    aria-expanded="false"
                    id="style-UDEoC"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-oL6Yr"
                    aria-expanded="false"
                    id="style-oL6Yr"
                  >
                    30
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-VEIoX"
                    aria-expanded="false"
                    id="style-VEIoX"
                  >
                    {" "}
                    1{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-Fsr2g"
                    aria-expanded="false"
                    id="style-Fsr2g"
                  >
                    {" "}
                    3{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-3 collapse style-9knQ2"
                    aria-expanded="false"
                    id="style-9knQ2"
                  >
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-4"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 4
                </td>
                <td className="text-center">
                  <span className="">19</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-4 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-4 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-4 collapse ">12</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse "> Mạng máy tính </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203001058</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Hệ Thống và Công nghệ Web{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203002145</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Phân tích thiết kế hệ thống{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203003753</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_3"
                    >
                      001146<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Hệ quản trị cơ sở dữ liệu NoSQL MongoDB{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203014166</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_4"
                    >
                      001146<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr role="row" className="row-head tr-row-4 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-4 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-4 collapse ">7</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-4 collapse  ">
                <td>
                  <div className="tr-row-4 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Tương tác người máy{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203001076</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_5"
                    >
                      002137 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Hệ quản trị cơ sở dữ liệu{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203001207</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      001146 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 3 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-4 collapse  ">
                <td>
                  <div className="tr-row-4 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse "> Thương mại điện tử </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203003436</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-4 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-4 collapse  ">
                <td>
                  <div className="tr-row-4 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Lập trình hướng sự kiện với công nghệ .NET{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203002044</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_8"
                    >
                      003591 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-4 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-4 collapse ">9</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Lập trình hướng sự kiện với công nghệ Java{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203002070</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_9"
                    >
                      003591 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 4 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-4 collapse  ">
                <td>
                  <div className="tr-row-4 collapse ">10</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-4 collapse ">
                    {" "}
                    Lập trình GUI với Qt Framework{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4203003442</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_10"
                    >
                      003848 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-4 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-5"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 5
                </td>
                <td className="text-center">
                  <span className="">16</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-5 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-5 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-5 collapse ">13</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-5 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-5 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse "> Lý thuyết đồ thị </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203000908</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_1"
                    >
                      000901<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-5 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-5 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Phương pháp luận nghiên cứu khoa học{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003198</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-5 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Phát triển ứng dụng{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003501</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-5 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-5 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Chủ nghĩa xã hội khoa học{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203014167</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_4"
                    >
                      014164,014165<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-5 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-5 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Mô hình hóa dữ liệu NoSQL MongoDB{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203014168</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_5"
                    >
                      014166<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr role="row" className="row-head tr-row-5 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-5 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-5 collapse ">3</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse "> Hội họa </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003194</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse "> Xã hội học </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003195</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Âm nhạc – Nhạc lý và Guitar căn bản{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003203</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">9</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Tiếng Việt thực hành{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003245</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">10</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Tâm lý học đại cương{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203003325</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-5 collapse  ">
                <td>
                  <div className="tr-row-5 collapse ">11</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-5 collapse ">
                    {" "}
                    Cơ sở văn hóa Việt Nam{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">4203010665</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-5 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-5 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-6"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 6
                </td>
                <td className="text-center">
                  <span className="">18</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-6 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-6 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-6 collapse ">12</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Nhập môn an toàn thông tin{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203001004</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_1"
                    >
                      002137<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse "> Công nghệ phần mềm </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203001111</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_2"
                    >
                      003591,001146<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Những vấn đề xã hội và đạo đức nghề nghiệp{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203003347</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Thống kê máy tính và ứng dụng{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203003451</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr role="row" className="row-head tr-row-6 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-6 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-6 collapse ">6</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Lập trình phân tán với công nghệ Java{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203002146</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_5"
                    >
                      002070,014166 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-6 collapse  ">
                <td>
                  <div className="tr-row-6 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Lập trình phân tán với công nghệ .NET{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203002349</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      002044,014166 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-6 collapse  ">
                <td>
                  <div className="tr-row-6 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Lập trình mạng với Qt Framework{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203003773</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_7"
                    >
                      003442 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-6 collapse  ">
                <td>
                  <div className="tr-row-6 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse "> Kỹ thuật điện tử </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203000868</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-6 collapse  ">
                <td>
                  <div className="tr-row-6 collapse ">9</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Lập trình phân tích dữ liệu 1{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203002031</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_9"
                    >
                      000941 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-6 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-6 collapse ">10</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-6 collapse ">
                    {" "}
                    Khai thác dữ liệu và ứng dụng{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">4203003443</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_10"
                    >
                      001146 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 2 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse "> 3 </div>
                </td>
                <td>
                  <div className="tr-row-6 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-7"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 7
                </td>
                <td className="text-center">
                  <span className="">15</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-7 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-7 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-7 collapse ">11</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-7 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-7 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Lập trình thiết bị di động{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203001432</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-7 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-7 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Pháp luật đại cương{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203002422</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-7 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-7 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-7 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Đảm bảo chất lượng và Kiểm thử phần mềm{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203003592</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_3"
                    >
                      001111<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-7 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Lịch sử Đảng Cộng sản Việt Nam{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203014169</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-7 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr role="row" className="row-head tr-row-7 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-7 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-7 collapse ">4</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-7 collapse  ">
                <td>
                  <div className="tr-row-7 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Lập trình WWW (Java){" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203003621</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_5"
                    >
                      002145,002146 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-7 collapse  ">
                <td>
                  <div className="tr-row-7 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Phát triển ứng dụng Web với Qt Engine{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203003774</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      003773 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-7 collapse  ">
                <td>
                  <div className="tr-row-7 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse ">
                    {" "}
                    Lập trình WWW (.NET){" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203004147</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_7"
                    >
                      002145,002349 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-7 collapse  ">
                <td>
                  <div className="tr-row-7 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-7 collapse "> Lập trình IoTs </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">4203004323</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-7 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse ">60</div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-7 collapse "> 4 </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-8"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 8
                </td>
                <td className="text-center">
                  <span className="">15</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head tr-row-8 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-8 collapse " lang="ctk-hpbatbuoc">
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-8 collapse ">9</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-8 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-8 collapse ">1</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Tư tưởng Hồ Chí Minh{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203000664</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-8 collapse ">2</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "></div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-8 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-8 collapse ">2</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Kiến trúc và Thiết kế phần mềm{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203001549</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_2"
                    >
                      003753<span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "></div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Công nghệ mới trong phát triển ứng dụng CNTT{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203003147</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 0 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "></div>
                </td>
                <td></td>
              </tr>
              <tr role="row" className="row-head tr-row-8 collapse ">
                <td colSpan={4} className="text-left">
                  <div className="tr-row-8 collapse " lang="ctk-hptuchon">
                    Học phần tự chọn
                  </div>
                </td>
                <td className="text-center">
                  <span className="tr-row-8 collapse ">6</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">4</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Automat &amp; ngôn ngữ hình thức{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203001366</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_4"
                    >
                      000901 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">45</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">0</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-8 collapse ">5</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Nhập môn dữ liệu lớn{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203002329</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_5"
                    >
                      001146 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">6</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Lập trình phân tích dữ liệu 2{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203002330</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_6"
                    >
                      001146,003451 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">7</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse "> Tiếp thị điện tử </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203003453</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">8</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Kiến trúc hướng dịch vụ và Điện toán đám mây{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203003758</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  ">
                <td>
                  <div className="tr-row-8 collapse ">9</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse ">
                    {" "}
                    Lập trình thiết bị di động nâng cao{" "}
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203003775</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div
                      className="tooltip tooltipstered"
                      itemID="ctk-hoctruoc-title_9"
                    >
                      001432 <span className="cl-red">(a)</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td></td>
              </tr>
              <tr className="tr-row-8 collapse  colorSTLichHoc">
                <td>
                  <div className="tr-row-8 collapse ">10</div>
                </td>
                <td className="text-left">
                  <div className="tr-row-8 collapse "> Quản lý dự án CNTT </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">4203004056</div>
                </td>
                <td></td>
                <td>
                  <div className="tr-row-8 collapse ">3</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">30</div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 1 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse "> 6 </div>
                </td>
                <td>
                  <div className="tr-row-8 collapse ">
                    <div className="check" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr
                role="row"
                className="row-head row-head-hover"
                data-toggle="collapse"
                data-target=".tr-row-9"
              >
                <td colSpan={4} className="text-center">
                  <span lang="ctk-hocky">Học kỳ</span> 9
                </td>
                <td className="text-center">
                  <span className="">13</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr
                role="row"
                className="row-head tr-row-9 collapse in"
                aria-expanded="true"
                style={{}}
              >
                <td colSpan={4} className="text-left">
                  <div
                    className="tr-row-9 collapse in"
                    lang="ctk-hpbatbuoc"
                    aria-expanded="true"
                    style={{}}
                  >
                    Học phần bắt buộc
                  </div>
                </td>
                <td className="text-center">
                  <span
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    13
                  </span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr
                className="tr-row-9 colorSTLichHoc collapse in"
                aria-expanded="true"
                style={{}}
              >
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    1
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    {" "}
                    Thực tập doanh nghiệp{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    4203003098
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    5
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    150
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  ></div>
                </td>
                <td></td>
              </tr>
              <tr
                className="tr-row-9 collapse in"
                aria-expanded="true"
                style={{}}
              >
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    2
                  </div>
                </td>
                <td className="text-left">
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    {" "}
                    Khóa luận tốt nghiệp{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    4203014170
                  </div>
                </td>
                <td></td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    8
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    0
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    240
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  >
                    {" "}
                    0{" "}
                  </div>
                </td>
                <td>
                  <div
                    className="tr-row-9 collapse in"
                    aria-expanded="true"
                    style={{}}
                  ></div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={10} style={{ padding: "2px !important" }} />
              </tr>
            </tbody>
            <tbody>
              <tr role="row" className="row-head">
                <td colSpan={4} className="text-left" lang="ctk-tongtcyc">
                  Tổng TC yêu cầu
                </td>
                <td>
                  <span className="cl-red text-center">138</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head">
                <td colSpan={4} className="text-left" lang="ctk-tongtcbb">
                  Tổng TC bắt buộc
                </td>
                <td>
                  <span className="cl-red text-center">106</span>
                </td>
                <td colSpan={5} />
              </tr>
              <tr role="row" className="row-head">
                <td colSpan={4} className="text-left" lang="ctk-tongtctc">
                  Tổng TC tự chọn
                </td>
                <td>
                  <span className="cl-red text-center">32</span>
                </td>
                <td colSpan={5} />
              </tr>
            </tbody>
          </table>
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
                <span style={{ background: "#fff" }} />
                <p
                  style={{ display: "inline-block" }}
                  lang="ctk-hocphan-chuadangky"
                >
                  Môn học sinh viên chưa đăng ký học tập
                </p>
              </li>
              <li>
                <span className="check" style={{ border: "none !important" }} />
                <label lang="ctk-pass">Đạt</label>&nbsp;
              </li>
              <li>
                <span
                  className="no-check"
                  style={{ border: "none !important" }}
                />
                <label lang="ctk-fail">Không đạt</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default frameProgram;
