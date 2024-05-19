import  axios  from 'axios';
// import axiosClient from "./axiosClient"
async function getThongTin(params: any) {
    try{
        const response = await axios.get('http://localhost:8080/api/v1/sinhvien/thongTin?mssv=1');
        console.log("objectttt", response.data);
    }catch(err){
        console.log(err);
    }
}
// getThongTin();

const StudentApi={
    // getThongTin(params:any){
    //     return axiosClient.get('/api/v1/sinhvien/thongTin',{params})
    // },
    // getHocPhanChoDangKy(params:any){
    //     return axiosClient.get('/hocPhanChoDangKy',{params})
    // }
    
    
}

export default StudentApi;