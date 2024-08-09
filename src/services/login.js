import axiosInstance from "./index";

const API_ENDPOINTS = {
  login: "users/api/token/",
  refresh: "users/api/token/refresh/",
};

const login = (credentials) => {
  return axiosInstance.post(API_ENDPOINTS.login, credentials);
};

const refreshPost = (refreshToken) => {
  return axiosInstance.post(API_ENDPOINTS.refresh, { refresh: refreshToken });
};

const APILogin = { login, refreshPost };

export default APILogin;
