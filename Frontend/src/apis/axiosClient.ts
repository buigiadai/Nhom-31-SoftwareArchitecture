import axios from "axios";
// import querystring from "querystring";
import querystring from "qs";
// import * as dotenv from "dotenv";
// import 'dotenv/config'

// dotenv.config();
// require('dotenv').config()
// console.log(process.env);

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { "X-Custom-Header": "foobar" },
  paramsSerializer: (params) => {
    return querystring.stringify(params, { arrayFormat: "brackets" });
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    (config as any).headers.Authorization = token ? `Bearer ${token}` : "";
  }
  (config as any).headers["x-private-key"] =
    process.env.REACT_APP_X_PRIVATE_KEY;
  (config as any).headers["x-application-name"] =
    process.env.REACT_APP_X_APPLICATION_NAME;

  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response.data;
});

export default axiosClient;
