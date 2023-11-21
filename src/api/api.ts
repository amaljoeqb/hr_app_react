import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "http://3.145.178.76:4000/",
  timeout: 120000,
});

// reject promise if status code not 200
API.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
