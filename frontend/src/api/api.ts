import axios from 'axios';

const baseURL =
  import.meta.env.MODE !== 'production' ? import.meta.env.VITE_BASE_URL_DEV : import.meta.env.VITE_BASE_URL_PROD;

const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
