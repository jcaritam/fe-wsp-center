import axios from "axios";
// const { DEV } = import.meta.env;
// import.meta.env.BASE_URL

const baseURL = import.meta.env.VITE_BACKEND_URI;

const wspCenterApi = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json"
  }
})

wspCenterApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default wspCenterApi;