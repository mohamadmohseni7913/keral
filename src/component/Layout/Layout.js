import React from 'react';
import CmpHeader from "../CmpHeader/CmpHeader";
import Footer from "../Footer/Footer";
import PortFolio from "../MainIndex/PortFolio/PortFolio";
import ContactUs from "../ContactUs/ContactUs";
import BlogPage from "../BlogPage/BlogPage";
import AboutUs from "../AboutUs/aboutUs";
import Gallery from "../Gallery/Gallery";
import {Route} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <CmpHeader/>
            {
                props.children
            }
            <Footer/>
        </div>
    );
};

export default Layout;