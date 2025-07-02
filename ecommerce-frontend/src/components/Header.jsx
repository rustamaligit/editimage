import React from 'react';
import "./../styles/Header.css";
import logo from "../assets/react.svg";
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="main-header">
            <div className="top-header">
                <div className="logo">
                    <img src="{logo}" alt="Logo" />
                    {/*<span>REDBUBBLE</span>*/}
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Dragons breathing fire phone cases" />
                    <FaSearch className="search-icon" />
                </div>

                <div className="top-links">
                    <a href="/">Sell your art</a>
                    <a href="/">Login</a>
                    <a href="/">Signup</a>
                    <FaHeart className="icon" />
                    <FaShoppingCart className="icon" />
                </div>
            </div>

            <div className="bottom-nav">
                <a href="/">Explore</a>
                <a href="/">Clothing <span className="new-badge">New</span></a>
                <a href="/">Stickers</a>
                <a href="/">Phone Cases</a>
                <a href="/">Wall Art</a>
                <a href="/">Home & Living</a>
                <a href="/">Kids & Babies</a>
                <a href="/">Accessories</a>
                <a href="/">Stationery & Office</a>
                <a href="/">Gifts</a>
            </div>
        </header>
    );
};

export default Header;
