// CategoryNav.jsx
import React from "react";
import "../styles/CategoryNav.css";

const CategoryNav = () => {
    const categories = [
        "Explore",
        { name: "Clothing", isNew: true },
        "Stickers",
        "Phone Cases",
        "Wall Art",
        "Home & Living",
        "Kids & Babies",
        "Accessories",
        "Stationery & Office",
        "Gifts",
    ];

    return (
        <nav className="category-nav">
            <div className="category-scroll px-3 py-2">
                {categories.map((item, index) => {
                    const name = typeof item === "string" ? item : item.name;
                    const isNew = typeof item === "object" && item.isNew;

                    return (
                        <div key={index} className="category-item position-relative">
                            {name}
                            {isNew && <span className="new-badge">New</span>}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default CategoryNav;
