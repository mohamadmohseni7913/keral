import React from 'react';
import MainIndex from "./MainIndex/MainIndex";
import Layout from "./Layout/Layout";
import {Route} from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import CmpHeader from "./CmpHeader/CmpHeader";
import Footer from "./Footer/Footer";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/aboutUs";

const App = () => {
    return (
        <div >
            <Route path={"/index"} component={MainIndex} />
            {/*<Route path={"/layout/*"} component={Layout} />*/}
            <Layout >

                <Route path={"/layout/gallery"} component={Gallery} />
                <Route path={"/layout/contactus"} component={ContactUs} />
                <Route path={"/layout/Aboutus"} component={AboutUs} />



            </Layout>

            {/*<MainIndex/>*/}
            {/*<Layout/>*/}

        </div>
    );
};

export default App;