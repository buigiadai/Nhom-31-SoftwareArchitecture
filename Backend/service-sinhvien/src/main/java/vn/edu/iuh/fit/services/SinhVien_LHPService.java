package vn.edu.iuh.fit.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.dto.ChuongTrinhKhungResponse;
import vn.edu.iuh.fit.dto.HocPhanResponse;
import vn.edu.iuh.fit.dto.LopHocPhanResponse;
import vn.edu.iuh.fit.dto.MonHocTQResponse;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.models.MonHoc_CTK;
import vn.edu.iuh.fit.models.SinhVien_LHP;
import vn.edu.iuh.fit.repositories.MonHoc_CTKRepository;
import vn.edu.iuh.fit.repositories.SinhVien_LHPRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class SinhVien_LHPService {
    private final MonHoc_CTKRepository monHoc_CTKRepository;
    private final SinhVien_LHPRepository sinhVienLhpRepository;

    public List<LopHocPhanResponse> getByNamHocAndHocKi(long mssv, int namHoc, HocKy hocKy) {
        List<SinhVien_LHP> sinhVienLhps = sinhVienLhpRepository.findBySinhVien_IdAndLopHocPhan_NamHocAndLopHocPhan_HocKy(mssv, namHoc, hocKy);
        return sinhVienLhps.stream().map(this::mapToLopHocPhanResponse).toList();
    }

    private LopHocPhanResponse mapToLopHocPhanResponse(SinhVien_LHP sinhVienLhp) {
        return new LopHocPhanResponse(
                sinhVienLhp.getLopHocPhan().getId(),
                sinhVienLhp.getLopHocPhan().getMonHoc().getTenMon(),
                sinhVienLhp.getLopHocPhan().getTenLHP(),
                sinhVienLhp.getLopHocPhan().getMonHoc().getSoTC(),
                sinhVienLhp.getNhomTH(),
                sinhVienLhp.getLopHocPhan().getHocPhi(),
                sinhVienLhp.getNgayNopHP(),
                sinhVienLhp.getNgayDKLop(),
                sinhVienLhp.getLopHocPhan().getTrangThaiLHP().name()
        );
    }

    public List<ChuongTrinhKhungResponse> getChuongTrinhKhungByMssv(long mssv) {
        List<MonHoc_CTK> monHocCtks = monHoc_CTKRepository.findMonHoc_CTKByMssv(mssv);
        Map<Integer, List<HocPhanResponse>> map = new HashMap<>();
        for (MonHoc_CTK monHocCtk : monHocCtks) {
            if (!map.containsKey(monHocCtk.getHocKi())) {
                map.put(monHocCtk.getHocKi(), new ArrayList<>());
            }
            map.get(monHocCtk.getHocKi()).add(mapToHocPhanResponse(monHocCtk));
        }

        List<ChuongTrinhKhungResponse> result = new ArrayList<>();
        for (Map.Entry<Integer, List<HocPhanResponse>> entry : map.entrySet()) {
            result.add(new ChuongTrinhKhungResponse(entry.getKey(), entry.getValue()));
        }
        return result;
    }

    private HocPhanResponse mapToHocPhanResponse(MonHoc_CTK monHocCtk) {
        return new HocPhanResponse(
                monHocCtk.getMonHoc().getId(),
                monHocCtk.getMonHoc().getTenMon(),
                monHocCtk.getMonHoc().getSoChiLT() + monHocCtk.getMonHoc().getSoChiTH(),
                monHocCtk.getMonHoc().getSoChiLT(),
                monHocCtk.getMonHoc().getSoChiTH(),
                monHocCtk.isBatBuoc(),
                monHocCtk.getMonHoc().getMonHocTienQuyets().stream().map(
                        x -> new MonHocTQResponse(
                                x.getMonHocTienQuyet().getId(),
                                x.getMonHocTienQuyet().getTenMon(),
                                x.getLoaiTienQuyet().getValueString())
                ).toList());
    }
}
