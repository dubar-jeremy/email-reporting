import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export default API;
