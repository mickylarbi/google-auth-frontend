// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nestjs-passport-tiktok-jwt.onrender.com', // your NestJS backend
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
