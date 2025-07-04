// Header.jsx
import React from "react";
import {
    Container,
    Navbar,
    Nav,
    Form,
    FormControl,
} from "react-bootstrap";

import "./../styles/Header.css";


const Header = () => {
    return (
        <Navbar expand="lg" className="shadow-sm header-bg" sticky="top">
            <Container fluid className="px-3">
                <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
                    <img
                        src="/vite.svg"
                        alt="MyArt"
                        height="32"
                        className="d-inline-block align-top"
                    />
                    <span className="header-logo-text">MYART</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Form className="mx-lg-4 my-3 my-lg-0 flex-grow-1 search-form">
                        <div className="search-wrapper">
                            <FormControl
                                type="search"
                                placeholder="Positive affirmations with aura gradient stickers"
                                className="search-input"
                                aria-label="Search"
                            />
                            <i className="bi bi-stars search-icon"></i>
                        </div>
                    </Form>

                    <Nav className="align-items-center gap-3 text-nowrap nav-links">
                        <Nav.Link href="#">Build your art</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="#">Signup</Nav.Link>
                        <Nav.Link href="#"><i className="bi bi-heart fs-5 nav-icon"></i></Nav.Link>
                        <Nav.Link href="#"><i className="bi bi-cart fs-5 nav-icon"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
