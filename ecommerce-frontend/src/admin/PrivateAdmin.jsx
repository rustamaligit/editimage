import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function PrivateAdmin({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setIsAllowed(false);
            setLoading(false);
            return;
        }

        axios.get("http://127.0.0.1:8000/api/admin/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                if (res.data.is_admin) {
                    setIsAllowed(true);
                } else {
                    setIsAllowed(false);
                }
            })
            .catch(() => {
                setIsAllowed(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    if (!isAllowed) return <Navigate to="/" replace />;

    return children;
}
