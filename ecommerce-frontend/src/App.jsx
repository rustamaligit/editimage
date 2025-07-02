import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Home from "./pages/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Login />} />*/}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                {/* You’ll add /products route later */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
