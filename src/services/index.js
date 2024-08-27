import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://shartnoma.kspi.uz/",
  headers: {
    // "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

const redirectToLogin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login"; // Login sahifangizning yo'nalishi
};

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post("/users/api/token/refresh/", {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;

    if (newAccessToken) {
      localStorage.setItem("token", newAccessToken);
      return newAccessToken;
    }
    return null;
  } catch (error) {
    console.error("Error refreshing token", error);
    redirectToLogin();
    return null;
  }
};

axiosInstance.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await refreshToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } else {
        redirectToLogin();
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
