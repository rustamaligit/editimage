import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaTumblr, FaPinterest } from 'react-icons/fa';
// import appStore from './assets/app-store.png'; // Add your actual image paths
// import googlePlay from './assets/google-play.png';
// import redbubbleLogo from './assets/redbubble-logo.png';
import "./../styles/Footer.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0b0024', color: 'white', paddingTop: '3rem' }}>
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <h6 className="fw-bold">Shop</h6>
                        <ul className="list-unstyled">
                            <li>Gift Guides</li>
                            <li>Fan Art</li>
                            <li>New Works</li>
                            <li>Blog</li>
                            <li>Student Discount</li>
                            <li>Login</li>
                            <li>Signup</li>
                            <li>Bulk orders</li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6}>
                        <h6 className="fw-bold">About</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Social Responsibility</li>
                            <li>Investor Center</li>
                            <li>Partner Program</li>
                            <li>Affiliates</li>
                            <li>Sell your art</li>
                            <li>Jobs</li>
                            <li>Artist Blog</li>
                            <li>Create a Dashery store</li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6}>
                        <h6 className="fw-bold">Help</h6>
                        <ul className="list-unstyled">
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Help Center</li>
                            <li>Guidelines</li>
                            <li>Product Safety</li>
                            <li>Copyright</li>
                            <li>Contact Us</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </Col>

                    <Col md={3} sm={6}>
                        <h6 className="fw-bold">Social</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><FaInstagram /> Instagram</li>
                            <li><FaFacebook /> Facebook</li>
                            <li><FaTwitter /> Twitter</li>
                            <li><FaTumblr /> Tumblr</li>
                            <li><FaPinterest /> Pinterest</li>
                        </ul>
                    </Col>
                </Row>

                <hr style={{ borderColor: '#322d3f', marginTop: '2rem' }} />

                <Row className="align-items-center justify-content-between py-3">
                    <Col md={4} className="d-flex align-items-center gap-2">
                        <img src="/vite.svg" alt="Redbubble Logo" style={{ height: 24 }} />
                        <span className="fw-bold">Myart</span>
                    </Col>

                    <Col md={4} className="text-md-end text-center mt-3 mt-md-0">
                        <a href="#" className="text-white me-3">User Agreement</a>
                        <a href="#" className="text-white me-3">Privacy Policy</a>
                        <a href="#" className="text-white">Cookie Policy</a>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col className="d-flex justify-content-center gap-3 mt-3">
                        <img src="/vite.svg" alt="App Store" style={{ height: 40 }} />
                        <img src="/vite.svg" alt="Google Play" style={{ height: 40 }} />
                    </Col>
                </Row>

                <Row className="text-center mt-3 pb-3">
                    <Col>
                        <small>© Myart. All Rights Reserved</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
