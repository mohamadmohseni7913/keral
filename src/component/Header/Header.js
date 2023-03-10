import React from 'react';

import Carousel from 'react-material-ui-carousel'



const Header = () => {
    const images = [
        {
            original: '/img/h1-rev-img3.jpg',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
        },
    ];
    return (
        <header className="header">
            <div className="header-Top">
                <div className="header-Top-Login-Section">
                    <ul>
                        <li>online</li>
                        <li>login</li>
                        <li>cart</li>
                        <li>menu</li>
                    </ul>
                </div>
                <div className="header-Top-Logo">
                    <img src="/img/logo-swiss-1.png" alt=""/>
                </div>
                <div className="header-Top-Navigation">
                    <ul>
                        <li>home</li>
                        <li>pages</li>
                        <li>shop</li>
                        <li>portfolio</li>
                        <li>blog</li>
                    </ul>
                </div>
            </div>

            <div className="header-Slider">
                <Carousel timeout={1000}  autoPlay={true} interval={1000} >
                    {
                        images.map( (slider) => <img src={slider.original}  />)
                    }

                </Carousel>

            </div>
        </header>
    );
};

export default Header;