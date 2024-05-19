import axiosClient from "./axiosClient"

const StudentApi={
    getThongTin(params:any){
        return axiosClient.get('/api/v1/sinhvien/thongTin',{params})
    },
    getHocPhanChoDangKy(params:any){
        return axiosClient.get('/hocPhanChoDangKy',{params})
    }
}

export default StudentApi;