package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.edu.iuh.fit.models.LopTinChi;

import java.util.List;

public interface LopTinChiRepository extends JpaRepository<LopTinChi, Long> {
    @Query("select l from LopTinChi l where l.lopHocPhan.id = ?1")
    List<LopTinChi> findByLopHocPhan_Id(long id);
}