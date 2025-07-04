import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import Footer from '../components/Footer';
import CategoryBar from "../components/CategoryBar.jsx";
import axios from '../api/axios';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(res => {
                setProducts(res.data.products || res.data); // depending on your backend format
            })
            .catch(err => {
                console.error('Failed to fetch products:', err);
            });
    }, []);

    return (
        <div>
        <Header />
        <CategoryNav/>
            <CategoryBar/>

        <div style={{ padding: '2rem' }}>
            <h2>Products List</h2>

            <table border="1" cellPadding="10" width="100%">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Reference</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
                    products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.reference}</td>
                            <td>₹{prod.price}</td>
                            <td>{prod.qty}</td>
                            <td>{prod.status === 1 ? 'Enabled' : 'Disabled'}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>
                            No products found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
            <Footer />
        </div>
    );
}

export default Products;
