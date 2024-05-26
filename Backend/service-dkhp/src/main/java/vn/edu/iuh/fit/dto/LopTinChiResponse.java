package vn.edu.iuh.fit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LopTinChiResponse {
    private long id;
    private String lichHoc;
    private int nhom;
    private String viTri;
    private String phong;
    private String coSo;
    private String giangVien;
    private String ngayHoc;
    private int soLuong;
    private int soLuongToiDa;
}
