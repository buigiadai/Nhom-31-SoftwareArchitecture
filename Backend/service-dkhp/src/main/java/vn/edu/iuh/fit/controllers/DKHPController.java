package vn.edu.iuh.fit.controllers;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dto.*;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.models.LopHocPhan;
import vn.edu.iuh.fit.models.LopTinChi;
import vn.edu.iuh.fit.models.SinhVien_LHP;
import vn.edu.iuh.fit.repositories.LopHocPhanRepository;
import vn.edu.iuh.fit.services.LopHocPhanService;
import vn.edu.iuh.fit.services.MonHocService;
import vn.edu.iuh.fit.services.SinhVienServices;
import vn.edu.iuh.fit.services.SinhVien_LHPService;
import vn.edu.iuh.fit.utils.GsonCustom;

import java.util.List;


@RestController
@RequestMapping("api/v1/dkhp")
@RequiredArgsConstructor
public class DKHPController {
    private final MonHocService monHocService;
    private final SinhVien_LHPService sinhVienLhpService;
    private final LopHocPhanService lopHocPhanService;
    private final Gson gson = GsonCustom.getGsonCustom();
    private final LopHocPhanRepository lopHocPhanRepository;

    @GetMapping("")
    public String test() {
        return "Good DKHP";
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

    @GetMapping("/lopHPChoDK")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<LopHocPhanChoDKResponse>> getHocKy(
            @RequestParam int namHoc,
            @RequestParam int ky,
            @RequestParam long maMon
    ) {
        return lopHocPhanService.getDsLopHPChoDK(namHoc, ky, maMon);
    }

    @GetMapping("/chiTietLHP")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<LopTinChiResponse>> getChiTietLHP(
            @RequestParam long maLHP
    ) {
        return lopHocPhanService.getChiTietLHP(maLHP);
    }

    @PostMapping("/dangKyHP")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<SinhVien_LHPResponse> dangKyHP(
            @RequestParam long mssv,
            @RequestParam long maLHP,
            @RequestParam int nhomTH
    ) {
        return lopHocPhanService.dangKyHP(mssv, maLHP, nhomTH);
    }

}
