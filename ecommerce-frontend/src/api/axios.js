// src/api/axios.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // your Laravel API base URL
    headers: {
        'Accept': 'application/json',
    },
});

// Add token automatically to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
