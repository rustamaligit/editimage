import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import "../styles/FeaturedProducts.css";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/feature-products')
            .then((response) => {
                const data = response.data;
                console.log(data);

                // Adjust based on your API structure
                const productList = Array.isArray(data) ? data : data.products || data.data || [];

                setProducts(productList);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" variant="primary" />
                <p>Loading products...</p>
            </div>
        );
    }

    return (
        <Container className="featured-products-container">
            <h2 className="featured-title">Featured products</h2>
            <Row xs={1} sm={2} md={3} lg={5} className="g-4">
                {Array.isArray(products) && products.map((product, idx) => (
                    <Col key={idx}>
                        <Card className="product-card h-100">
                            <Card.Img variant="top" src="https://placehold.co/500" alt={product.title} />
                            <Card.Body className="d-flex flex-column">
                                <div className="flex-grow-1">
                                    <Card.Title className="product-title">{product.name}</Card.Title>
                                    <Card.Text className="product-description">
                                        {product.description}
                                    </Card.Text>
                                </div>
                                <Card.Text className="product-price mt-2">
                                    <strong>{product.price}</strong>
                                    {product.originalPrice && (
                                        <>
                                            <span className="product-original-price ms-2">{product.originalPrice}</span>
                                            <span className="product-discount ms-1">(25% off)</span>
                                        </>
                                    )}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    );
};

export default FeaturedProducts;
