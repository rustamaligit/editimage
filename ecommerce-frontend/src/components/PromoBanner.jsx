// PromoBanner.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./../styles/PromoBanner.css";

const PromoBanner = () => {
    return (
        <div className="promo-banner">
            <Container fluid="md" className="py-5">
                <Row className="align-items-center text-center text-md-start">
                    {/* Left Side Image */}
                    <Col md={4} className="mb-4 mb-md-0">
                        <img
                            src="/home-banner/banner_first_for_use.png"
                            alt="Stacked shirts"
                            className="img-fluid promo-image"
                        />
                    </Col>

                    {/* Text Content */}
                    <Col md={4}>
                        <h2 className="promo-title fw-bold">Boxy Fit<br />Perfection</h2>
                        <p className="promo-description">
                            Step into summer with the new Boxy Tee:<br />
                            perfectly structured, slightly cropped,<br />
                            soft to the touch.
                        </p>
                        <Button variant="light" className="promo-btn fw-bold px-4 py-2 mt-3">
                            Shop T-Shirts
                        </Button>
                    </Col>

                    {/* Right Side Image */}
                    <Col md={4} className="position-relative">
                        <img
                            src="/home-banner/second_banner_img_ussee.png"
                            alt="Hanging shirt"
                            className="img-fluid promo-image"
                        />
                        <div className="new-badge-large">NEW</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PromoBanner;
