package vn.edu.iuh.fit.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.dto.LopHocPhanChoDKResponse;
import vn.edu.iuh.fit.dto.LopHocPhanResponse;
import vn.edu.iuh.fit.dto.LopTinChiResponse;
import vn.edu.iuh.fit.dto.SinhVien_LHPResponse;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.enums.TrangThaiSvLHP;
import vn.edu.iuh.fit.models.LopHocPhan;
import vn.edu.iuh.fit.models.LopTinChi;
import vn.edu.iuh.fit.models.SinhVien;
import vn.edu.iuh.fit.models.SinhVien_LHP;
import vn.edu.iuh.fit.repositories.LopHocPhanRepository;
import vn.edu.iuh.fit.repositories.LopHocRepository;
import vn.edu.iuh.fit.repositories.LopTinChiRepository;
import vn.edu.iuh.fit.repositories.SinhVien_LHPRepository;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class LopHocPhanService {
    private final SinhVien_LHPRepository sinhVien_LHPRepository;
    private final LopTinChiRepository lopTinChiRepository;
    private final LopHocPhanRepository lopHocPhanRepository;

    public ResponseEntity<List<LopHocPhanChoDKResponse>> getDsLopHPChoDK(int namhoc, int ky, long maMon) {
        List<LopHocPhan> lopHocPhans = lopHocPhanRepository.findByNamHocAndHocKyAndMonHoc_Id(namhoc, HocKy.fromValue(ky), maMon);
        if (lopHocPhans.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(lopHocPhans.stream()
                .map(this::mapToLopHocPhanChoDKResponse)
                .toList());
    }

    private LopHocPhanChoDKResponse mapToLopHocPhanChoDKResponse(LopHocPhan lopHocPhan) {
        return new LopHocPhanChoDKResponse(
                lopHocPhan.getMonHoc().getTenMon(),
                lopHocPhan.getId() + "",
                lopHocPhan.getTenLHP(),
                lopHocPhan.getTrangThaiLHP().getValueString(),
                lopHocPhan.getSinhVienLhps().size() + "/" + lopHocPhan.getSoLuongToiDa()
        );
    }

    public ResponseEntity<List<LopTinChiResponse>> getChiTietLHP(long maLHP) {
        List<LopTinChi> lopTinChis = lopTinChiRepository.findByLopHocPhan_Id(maLHP);
        if (lopTinChis != null)
            return ResponseEntity.ok(
                    lopTinChis.stream()
                            .map(this::mapToLopTinChiResponse)
                            .toList()
            );
        return ResponseEntity.notFound().build();
    }

    private LopTinChiResponse mapToLopTinChiResponse(LopTinChi lopTinChi) {
        return new LopTinChiResponse(
                lopTinChi.getId(),
                lopTinChi.getLichHoc(),
                lopTinChi.getNhom(),
                lopTinChi.getPhong().split("\\.")[0],
                lopTinChi.getPhong().split("\\.")[1],
                "Cơ sở 1 (Thành phố Hồ Chí Minh)",
                lopTinChi.getGiaoVien().getHoTen(),
                "12/01/2023 - 17/05/2023",
                lopTinChi.getLopHocPhan().getSinhVienLhps().size(),
                lopTinChi.getSoLuongToiDa()
        );
    }


    public ResponseEntity<SinhVien_LHPResponse> dangKyHP(long mssv, long maLHP, int nhomTH) {
        SinhVien_LHP sinhVienLhp = sinhVien_LHPRepository.save(new SinhVien_LHP(
                SinhVien.builder().id(mssv).build(),
                LopHocPhan.builder().id(maLHP).build(),
                TrangThaiSvLHP.DANGHOC,
                true,
                0,
                false,
                null,
                LocalDate.now()
        ));
        System.out.println("===============");
        System.out.println(sinhVienLhp.getLopHocPhan().getId());
        if (nhomTH != 0)
            sinhVienLhp = sinhVien_LHPRepository.save(new SinhVien_LHP(
                    SinhVien.builder().id(mssv).build(),
                    LopHocPhan.builder().id(maLHP).build(),
                    TrangThaiSvLHP.DANGHOC,
                    true,
                    nhomTH,
                    false,
                    null,
                    LocalDate.now()
            ));
        if (sinhVienLhp == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(new SinhVien_LHPResponse(
                SinhVien.builder().id(mssv).build(),
                LopHocPhan.builder().id(maLHP).build(),
                sinhVienLhp.getTrangThaiSvLHP(),
                sinhVienLhp.isChinh(),
                sinhVienLhp.getNhomTH(),
                sinhVienLhp.isDaNopHP(),
                sinhVienLhp.getNgayNopHP(),
                sinhVienLhp.getNgayDKLop()
        ));
    }
}
