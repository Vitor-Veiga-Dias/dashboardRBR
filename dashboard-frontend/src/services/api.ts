import axios from 'axios';
const { API_URL } = process.env;

const api = axios.create({
  baseURL: 'http://localhost:7100',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
