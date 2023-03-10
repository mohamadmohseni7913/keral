import React from 'react';
import Header from "../Header/Header";
import Product from "./Prouduct/Product";
import Banner from "./Banner/Banner";
import SecondProduct from "./SecondProduct/SecondProduct";
import CommerntSlider from "./CommentSlider/CommerntSlider";
import PortFolio from "./PortFolio/PortFolio";
import InstagramGallery from "./InstagramGallery/InstagramGallery";
import Services from "./Services/Services";
import Footer from "../Footer/Footer";

const MainIndex = () => {
    return (
        <div className={"main"}>
            <Header/>
            <Product/>
            <Banner/>
            <SecondProduct/>
            <CommerntSlider/>
            <PortFolio/>
            <InstagramGallery/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default MainIndex;