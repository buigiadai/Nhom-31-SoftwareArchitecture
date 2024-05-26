package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.edu.iuh.fit.models.MonHoc_CTK;
import vn.edu.iuh.fit.pks.MonHocCTKPK;

import java.util.List;

public interface MonHoc_CTKRepository extends JpaRepository<MonHoc_CTK, MonHocCTKPK> {
    @Query("select mhctk from SinhVien sv " +
            "join LopHoc lh on lh.id = sv.lopHoc.id " +
            "join NganhHoc nh on nh.id = lh.nganhHoc.id " +
            "join KhoaHoc kh on kh.id = lh.khoaHoc.id " +
            "join ChuongTrinhKhung ctk on ctk.khoaHoc.id = kh.id " +
            "join MonHoc_CTK mhctk on mhctk.chuongTrinhKhung.id = ctk.id " +
            "where nh.id = ctk.nganhHoc.id and sv.id = ?1 " +
            "order by  mhctk.hocKi")
    List<MonHoc_CTK> findMonHoc_CTKByMssv(long mssv);
}