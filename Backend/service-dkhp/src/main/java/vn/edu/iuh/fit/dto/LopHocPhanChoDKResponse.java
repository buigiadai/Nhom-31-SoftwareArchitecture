package vn.edu.iuh.fit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LopHocPhanChoDKResponse {
    private String name;
    private String maLopHP;
    private String lop;
    private String trangthai;
    private String soLuong;
}
