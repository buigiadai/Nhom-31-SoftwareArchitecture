// Thông tin chung
import React from "react";
import "./index.css";

function GeneralInformation() {
  const data = {
    img: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg",
    mssv: "201115701",
    hoten: "Bùi Gia Đại",
    gioitinh: "Nam",
    trangthai: "Đang học",
    mahoso: "20NV117605761",
    ngayvaotruong: "09/10/2020",
    lophoc: "DHKTPM16A",
    coso: "Cơ sở 1 (Thành phố Hồ Chí Minh)",
    bacdaotao: "Đại học",
    loaidaotao: "Chính quy",
    khoa: "Khoa Công nghệ Thông tin",
    nganh: "Kỹ thuật phần mềm",
    chuyennganh: "Kỹ thuật phần mềm - 7480103",
    khoahoc: "2020 - 2021",
    ngaysinh: "30/06/2002",
    dantoc: "Kinh",
    tongiao: "PG",
    khuvuc: "    ",
    socmnd: "231390412",
    ngaycap: "",
    noicap: "Tỉnh Gia Lai",
    doituong: "",
    dienchinhsach: "",
    ngayvaodoan: "",
    ngayvaodang: "",
    sdt: "0382890389",
    email: "",
    diachilienlac: "",
    noisinh: "Tỉnh Gia Lai",
    hktt: "Làng GRang, Xã Ia Phìn, Huyện Chư Prông, Tỉnh Gia Lai.",
    tennganhang: "Ngân hàng Ngoại Thương Việt Nam - Vietcombank",
    tenchinhanh: "Chi nhánh Gia Lai",
    chutaikhoan: "Bùi Gia Đại",
    sotaikhoan: "1014449544",
  };
  //html
  return (
    <div className="box-df snipcss-DL1w9">
      <div className="row">
        <div className="col-md-3">
          <div className="portlet">
            <div className="portlet portlet-body light">
              <div className="profile-userpic">
                <img src={data.img} />
              </div>
              <br />
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-mssv">MSSV</span>:{" "}
                  <span className="bold">{data.mssv}</span>
                </div>
              </div>
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-hovaten">Họ tên</span>:{" "}
                  <span className="bold">{data.hoten}</span>
                </div>
              </div>
              <div className="form-group">
                <div className="control-label">
                  <span lang="thongtinsinhvien-gioitinh">Giới tính</span>:{" "}
                  <span className="bold">{data.gioitinh}</span>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="portlet">
            <div className="portlet-title">
              <div className="caption">
                <span
                  className="caption-subject  bold"
                  lang="thongtinsinhvien-thongtinhocvan"
                >
                  Thông tin học vấn
                </span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="col-md-12">
                <form className="form-horizontal">
                  <div className="form-body">
                    <div className="form-group">
                      <label className="col-md-3">
                        <span lang="thongtinsinhvien-trangthai">
                          Trạng thái:
                        </span>{" "}
                        <span className="bold">{data.trangthai}</span>
                      </label>
                      <label className="col-md-3">
                        <span lang="thongtinsinhvien-mahoso">Mã hồ sơ</span>:{" "}
                        <span className="bold">{data.mahoso}</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-ngayvaotruong">
                          Ngày vào trường
                        </span>
                        : <span className="bold">{data.ngayvaotruong}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-lophoc">Lớp học</span>:{" "}
                        <span className="bold">{data.lophoc}</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-coso">Cơ sở</span>:{" "}
                        <span className="bold">{data.coso}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-bacdaotao">
                          Bậc đào tạo
                        </span>
                        : <span className="bold">{data.bacdaotao}</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-loaidaotao">
                          Loại hình đào tạo
                        </span>
                        : <span className="bold">{data.loaidaotao}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-khoa">Khoa</span>:{" "}
                        <span className="bold">{data.khoa}</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-nganh">Ngành</span>:{" "}
                        <span className="bold">{data.nganh} </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-chuyennganh">
                          Chuyên ngành
                        </span>
                        : <span className="bold">{data.chuyennganh}</span>
                      </label>
                      <label className="col-md-6">
                        <span lang="thongtinsinhvien-khoahoc">Khóa học</span>:{" "}
                        <span className="bold">{data.khoahoc}</span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="col-md-12">
          <div className="portlet">
            <div className="portlet portlet-title light">
              <div className="caption">
                <span
                  className="caption-subject bold"
                  lang="thongtinsinhvien-thongtincanhan"
                >
                  Thông tin cá nhân
                </span>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            <div className="portlet portlet-body light">
              <div className="form-horizontal">
                <div className="form-body">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-ngaysinh">Ngày sinh</span>:{" "}
                        <span className="bold">{data.ngaysinh}</span>
                      </label>
                      <label className="col-md-2 col-xs-12">
                        <span lang="thongtinsinhvien-dantoc">Dân tộc</span>:{" "}
                        <span className="bold">{data.dantoc}</span>
                      </label>
                      <label className="col-md-3 col-xs-12">
                        <span lang="thongtinsinhvien-tongiao">Tôn giáo</span>:{" "}
                        <span className="bold">{data.tongiao}</span>
                      </label>
                      <label className="col-md-3 col-xs-12">
                        <span lang="thongtinsinhvien-khuvuc">Khu vực</span>:{" "}
                        <span className="bold">{data.khuvuc}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-12">
                        <span lang="thongtinsinhvien-socmnd">Số CCCD</span>:{" "}
                        <span className="bold">{data.socmnd}</span>
                      </label>
                      <label className="col-md-2 col-xs-12">
                        <span lang="thongtinsinhvien-ngaycap">Ngày cấp</span>:{" "}
                        <span className="bold">{data.ngaycap}</span>
                      </label>
                      <label className="col-md-6 col-xs-12">
                        <span lang="thongtinsinhvien-noicap">Nơi cấp</span>:{" "}
                        <span className="bold">{data.noicap}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-doituong">Đối tượng</span>:{" "}
                        <span className="bold">{data.doituong}</span>
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-dienchinhsach">
                          Diện chính sách
                        </span>
                        : <span className="bold">{data.dienchinhsach}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-ngayvaodoan">
                          Ngày vào Đoàn
                        </span>
                        :  <span className="bold">{data.ngayvaodoan}</span>
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-ngayvaodang">
                          Ngày vào Đảng
                        </span>
                        :  <span className="bold">{data.ngayvaodang}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-4 col-xs-6">
                        <span lang="thongtinsinhvien-sdt">Điện thoại</span>:{" "}
                        <span className="bold">{data.sdt}</span>
                      </label>
                      <label className="col-md-8 col-xs-6">
                        <span lang="thongtinsinhvien-email">Email</span>:{" "}
                        <span className="bold">{data.email}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-diachilienlac font16">
                          Địa chỉ liên hệ
                        </span>
                        :  <span className="bold">{data.diachilienlac}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-noisinh">Nơi sinh</span>:{" "}
                        <span className="bold">{data.noisinh}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 col-xs-12">
                        <span lang="thongtinsinhvien-hktt">
                          Hộ khẩu thường trú
                        </span>
                        : <span className="bold">{data.hktt}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-tennganhang">
                          Tên ngân hàng
                        </span>
                        : <span className="bold">{data.tennganhang}</span>
                      </label>
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-tenchinhanh">
                          Tên chi nhánh
                        </span>
                        : <span className="bold">{data.tenchinhanh}</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-chutaikhoan">
                          Tên chủ tài khoản
                        </span>
                        : <span className="bold">{data.chutaikhoan}</span>
                      </label>
                      <label className="col-md-6 col-xs-6">
                        <span lang="thongtinsinhvien-sotaikhoan">
                          Số tài khoản
                        </span>
                        : <span className="bold">{data.sotaikhoan}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="portlet">
            <div className="portlet portlet-title light">
              <div className="caption">
                <span
                  className="caption-subject  bold"
                  lang="thongtinsinhvien-qhgd"
                >
                  Quan hệ gia đình
                </span>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
