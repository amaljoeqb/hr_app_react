import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "http://3.145.178.76:4000/api",
  timeout: 120000,
});

export default API;
