package vn.edu.iuh.fit.dto;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import vn.edu.iuh.fit.enums.TrangThaiSvLHP;
import vn.edu.iuh.fit.models.LopHocPhan;
import vn.edu.iuh.fit.models.SinhVien;

import java.time.LocalDate;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SinhVien_LHPResponse {
    private SinhVien sinhVien;
    private LopHocPhan lopHocPhan;
    private TrangThaiSvLHP trangThaiSvLHP;
    private boolean isChinh;
    private int nhomTH;
    private boolean isDaNopHP;
    private LocalDate ngayNopHP;
    private LocalDate ngayDKLop;
}
