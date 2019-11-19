import axios from 'axios';
import { CookieHelper } from '../../helper';
import { useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = CookieHelper.getCookie('Auth');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use((config) => {
  if (config.status == 401) {
    CookieHelper.deleteCookie('Auth');
    useHistory().push('/login')
  }
  return config;
});

export default api;