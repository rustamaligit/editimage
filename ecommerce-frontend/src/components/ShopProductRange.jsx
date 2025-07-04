import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import apparelImg from "../assets/apparel.png";
//import stickersImg from "../assets/stickers.png";
//import postersImg from "../assets/posters.png";
import "../styles/ShopProductRange.css";

const ShopProductRange = () => {
    return (
        <section className="shop-section py-5">
            <Container>
                <h3 className="section-title text-center mb-4">Shop Product Range</h3>

                {/* Cards Section */}
                <Row className="text-center g-4">
                    <Col xs={12} md={4}>
                        <div className="product-card bg-card position-relative p-3 rounded">
                            <Image src="/home_after_banner/home_apparel.png" fluid className="mb-3" />
                            <Button variant="light" className="shadow-sm f  w-semibold rounded-pill px-4 py-2">
                                Shop Apparel
                            </Button>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="product-card bg-card position-relative p-3 rounded">
                            <Image src="/home_after_banner/home_apparel.png"  className="mb-3" />
                            <Button variant="light" className="shadow-sm fw-semibold rounded-pill px-4 py-2">
                                Shop Stickers
                            </Button>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="product-card bg-card position-relative p-3 rounded">
                            <Image src="/home_after_banner/home_apparel.png" className="mb-3" />
                            <Button variant="light" className="shadow-sm fw-semibold rounded-pill px-4 py-2">
                                Shop Posters
                            </Button>
                        </div>
                    </Col>
                </Row>

                {/* Features Section */}
                <Row className="mt-5 text-center text-md-start">
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <i className="bi bi-image fs-3 text-primary"></i>
                        <h6 className="fw-bold mt-2">Weirdly meaningful art</h6>
                        <p className="text-muted">Millions of designs on over 70 high quality products.</p>
                    </Col>

                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <i className="bi bi-hand-thumbs-up fs-3 text-primary"></i>
                        <h6 className="fw-bold mt-2">Purchases pay artists</h6>
                        <p className="text-muted">Money goes directly into a creative person's pocket.</p>
                    </Col>

                    <Col xs={12} md={4}>
                        <i className="bi bi-leaf fs-3 text-primary"></i>
                        <h6 className="fw-bold mt-2">Socially responsible production</h6>
                        <p className="text-muted">We're investing in programs to offset all carbon emissions.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShopProductRange;
