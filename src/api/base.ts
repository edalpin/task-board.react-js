import axios, { InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:3000';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  }
);
