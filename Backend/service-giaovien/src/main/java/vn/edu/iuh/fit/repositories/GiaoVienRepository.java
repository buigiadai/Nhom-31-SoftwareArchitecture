package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.edu.iuh.fit.models.GiaoVien;

public interface GiaoVienRepository extends JpaRepository<GiaoVien, Long> {
}