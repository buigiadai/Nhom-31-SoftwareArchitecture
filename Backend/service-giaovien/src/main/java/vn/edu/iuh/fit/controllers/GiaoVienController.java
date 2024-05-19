package vn.edu.iuh.fit.controllers;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.dto.ThongTinSVResponse;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.repositories.GiaoVienRepository;
import vn.edu.iuh.fit.services.MonHocService;
import vn.edu.iuh.fit.services.SinhVienServices;
import vn.edu.iuh.fit.services.SinhVien_LHPService;
import vn.edu.iuh.fit.utils.GsonCustom;


@RestController
@RequestMapping("api/v1/giaovien")
@RequiredArgsConstructor
public class GiaoVienController {
    private final Gson gson = GsonCustom.getGsonCustom();

    //    private final long mssv = 1L;
    @GetMapping("")
    public String test() {
        return "Good Giao Vien";
    }

}
