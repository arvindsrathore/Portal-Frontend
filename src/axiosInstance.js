import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5500/',
  // baseURL: 'https://portal-backend-r9wq.onrender.com/',
  timeout: 1000*10
});

export default instance;
