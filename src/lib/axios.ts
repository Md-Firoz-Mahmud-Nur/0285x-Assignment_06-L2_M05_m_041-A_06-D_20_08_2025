import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://0284-assignment-05-l2-m05-m-034-a-0.vercel.app/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  function onRejected(error) {
    return Promise.reject(error);
  },
);
