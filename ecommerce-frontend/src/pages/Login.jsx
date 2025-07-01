import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS (we'll create this)

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/login', { email, password });

            localStorage.setItem('token', response.data.token);

            navigate('/products');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Admin Login</h2>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;
