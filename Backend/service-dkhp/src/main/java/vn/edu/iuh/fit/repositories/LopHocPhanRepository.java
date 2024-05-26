package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.edu.iuh.fit.enums.HocKy;
import vn.edu.iuh.fit.models.LopHocPhan;

import java.util.List;

public interface LopHocPhanRepository extends JpaRepository<LopHocPhan, Long> {
    @Query("select l from LopHocPhan l where l.namHoc = ?1 and l.hocKy = ?2 and l.monHoc.id = ?3")
    List<LopHocPhan> findByNamHocAndHocKyAndMonHoc_Id(int namHoc, HocKy hocKy, long id);
}