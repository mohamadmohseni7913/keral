import React from 'react';

const SingleProduct = () => {
    return (
        <div>
            <div className="single-Product">
                <div className="single-Product-Image">
                    <div className="single-Product-Image-Mini">
                        <img src="img/product3.jpg" alt=""/>
                        <img src="img/product3.jpg" alt=""/>
                        <img src="img/product3.jpg" alt=""/>
                    </div>
                    <div className="single-Product-Image-Main">
                        <img src="img/product2.jpg" alt=""/>

                    </div>

                </div>
                <div className="single-Product-Explain">
                    <p className="single-Product-Explain-Header">MIMOSA</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda mollitia doloremque
                        facilis autem esse fugit debitis, quis placeat maiores sed cupiditate eos eveniet culpa,
                        expedita, labore sapiente hic veritatis!
                    </p>
                    <div className="single-Product-Explain-Category">
                        <span>category:</span>
                        <a href="#"> chocolate</a>
                        <a href="#"> chocolate</a>
                        <a href="#"> chocolate</a>

                    </div>
                    <div className="single-Product-Explain-Tag">
                        <span>tags:</span>
                        <a>#choco</a>
                        <a>#choco</a>
                        <a>#choco</a>
                        <a>#choco</a>

                    </div>

                </div>
                <div className="single-Product-Description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus quas adipisci porro at
                        doloribus accusantium debitis veritatis consequuntur iste incidunt dolorem mollitia aut
                        obcaecati officiis perspiciatis, ipsa cumque suscipit!
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;