import React from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import PromoBanner from "../components/PromoBanner";
import ShopProductRange from "../components/ShopProductRange";
import Footer from '../components/Footer';
// import other sections later

const Home = () => {
    return (
        <div>
            <Header />
            <CategoryNav />
            <PromoBanner />
            <ShopProductRange />
            <Footer />
            {/* Add other sections here next */}
            <div className="text-center py-20">

            </div>
        </div>
    );
};

export default Home;
