import axios from "axios";
import { getToken } from "./isAuthenticated";

const api = axios.create({
  baseURL: "https://sensorial-refri-backend.herokuapp.com/"
  //baseURL: "http://localhost:3000/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.request.use(async config => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;

