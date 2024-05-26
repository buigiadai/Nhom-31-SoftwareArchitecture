package vn.edu.iuh.fit.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChuongTrinhKhungResponse {
    private int kyHoc;
    private List<HocPhanResponse> hocPhanResponses;
}
