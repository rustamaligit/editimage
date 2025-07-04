// src/components/CategoryBar.jsx
import React, { useRef } from "react";
import "../styles/CategoryBar.css";

const categories = [
    "Anime",
    "Clothing",
    "Stickers",
    "Phone Cases",
    "Wall Art",
    "Home & Living",
    "Kids & Babies",
    "Accessories",
    "Stationery & Office",
    "Gifts",
];

const CategoryBar = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="category-bar-container">
            <button className="scroll-button left" onClick={scrollLeft}>
                &#8592;
            </button>

            <div className="category-bar" ref={scrollRef}>
                {categories.map((category, idx) => (
                    <div key={idx} className="category-item">
                        {category}
                    </div>
                ))}
            </div>

            <button className="scroll-button right" onClick={scrollRight}>
                &#8594;
            </button>
        </div>
    );
};

export default CategoryBar;
