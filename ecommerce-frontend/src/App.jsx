import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Login />} />*/}
                <Route path="/" element={<h1 style={{ textAlign: 'center' }}>Welcome</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                {/* You’ll add /products route later */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
