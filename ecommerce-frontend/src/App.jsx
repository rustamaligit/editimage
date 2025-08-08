import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// ✅ Adjust paths to match your folder structure
import AdminPage from "./admin/AdminPage";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateAdmin from "./admin/PrivateAdmin";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Login />} />*/}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />

                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <PrivateAdmin>
                            <AdminDashboard />
                        </PrivateAdmin>
                    }
                />



                {/* You’ll add /products route later */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
