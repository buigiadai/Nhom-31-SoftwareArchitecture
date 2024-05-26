package vn.edu.iuh.fit.controllers;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dto.ChuongTrinhKhungResponse;
import vn.edu.iuh.fit.dto.ThongTinSVResponse;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.services.MonHocService;
import vn.edu.iuh.fit.services.SinhVienServices;
import vn.edu.iuh.fit.services.SinhVien_LHPService;
import vn.edu.iuh.fit.utils.GsonCustom;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("api/v1/sinhvien")
@RequiredArgsConstructor
public class SinhVienController {

    private final SinhVienServices sinhVienServices;
    private final MonHocService monHocService;
    private final SinhVien_LHPService sinhVienLhpService;
    private final Gson gson = GsonCustom.getGsonCustom();
//    private final long mssv = 1L;

    @GetMapping("")
    public String test() {
        return "Good SV";
    }

    @GetMapping("/thongTin")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ThongTinSVResponse> getSinhVien(@RequestParam long mssv) {
        ThongTinSVResponse thongTinSV = sinhVienServices.getThongTin(mssv);
//        return gson.toJson(thongTinSV);
        return ResponseEntity.ok(thongTinSV);
    }

    @GetMapping("/hocPhanChoDangKy")
    @ResponseStatus(HttpStatus.OK)
    public String getHPChoDK(@RequestParam long mssv) {
        return gson.toJson(monHocService.getHPChoDK(mssv));
    }

    @GetMapping("/hocPhanDaDangKY")
    @ResponseStatus(HttpStatus.OK)
    public String getByNamHocAndHocKi(@RequestParam long mssv, @RequestParam int namHoc, @RequestParam int hocKy) {
        return gson.toJson(sinhVienLhpService.getByNamHocAndHocKi(mssv, namHoc, HocKy.fromValue(hocKy)));
    }

    @GetMapping("/chuongTrinhKhung")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<ChuongTrinhKhungResponse>> getChuongTrinhKhung(@RequestParam long mssv) {
        return ResponseEntity.ok(sinhVienLhpService.getChuongTrinhKhungByMssv(mssv));
    }



}
