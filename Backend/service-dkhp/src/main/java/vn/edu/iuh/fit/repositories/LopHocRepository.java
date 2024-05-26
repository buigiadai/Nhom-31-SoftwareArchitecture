package vn.edu.iuh.fit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.edu.iuh.fit.models.LopHoc;

import java.util.List;

public interface LopHocRepository extends JpaRepository<LopHoc, Long> {

}