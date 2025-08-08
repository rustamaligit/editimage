// src/admin/AdminPage.jsx
import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('adminToken');

    useEffect(() => {
        if (token) {
            // verify token by calling /api/admin/me
            api.get('/admin/me').then(() => {
                navigate('/admin/dashboard');
            }).catch(() => {
                localStorage.removeItem('adminToken');
                setLoading(false); // show login form
            });
        } else {
            setLoading(false); // show login form
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    return <AdminLoginForm />;
}
