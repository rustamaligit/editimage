import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateAdmin({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setIsAllowed(false);
            setLoading(false);
            return;
        }

        fetch("http://127.0.0.1:8000/api/admin/me", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Not allowed");
                return res.json();
            })
            .then(() => {
                setIsAllowed(true);
                setLoading(false);
            })
            .catch(() => {
                setIsAllowed(false);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAllowed) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}

export default PrivateAdmin;
