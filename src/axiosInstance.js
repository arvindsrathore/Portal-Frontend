import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portal-backend-2.vercel.app/',
});

export default instance;
