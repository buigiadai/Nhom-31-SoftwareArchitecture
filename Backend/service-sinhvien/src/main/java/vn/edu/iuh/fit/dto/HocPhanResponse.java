package vn.edu.iuh.fit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HocPhanResponse {
    private long maHocPhan;
    private String tenMon;
    private int soTC;
    private int soChiLT;
    private int soChiTH;
    private boolean isBatBuoc;
    private List<MonHocTQResponse> hocPhanTienQuyents;

    public HocPhanResponse(long maHocPhan, String tenMon, int soTC, boolean isBatBuoc, List<MonHocTQResponse> hocPhanTienQuyents) {
        this.maHocPhan = maHocPhan;
        this.tenMon = tenMon;
        this.soTC = soTC;
        this.isBatBuoc = isBatBuoc;
        this.hocPhanTienQuyents = hocPhanTienQuyents;
    }
}
