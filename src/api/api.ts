import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "http://3.145.178.76:4000/",
  timeout: 120000,
});

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default API;
