import React from 'react';

const CmpHeader = () => {
    return (
        <header className="header-Cmp">
            <div className="header-Cmp-Top">
                <div className="header-Cmp-Top-Login-Section">
                    <ul>
                        <li>
                            <div className="hambergur-Menu">
                                <div></div>
                                <div></div>
                                <div></div>

                            </div>
                        </li>
                        <li><i className="fa fa-user"></i> login</li>
                        <li>cart</li>
                        <li className="underLine">online order</li>
                    </ul>
                </div>
                <div className="header-Cmp-Top-Logo">
                    <img src="/img/logo-swiss-1.png" alt=""/>
                </div>
                <div className="header-Cmp-Top-Navigation">
                    <ul>
                        <li className="underLine">home</li>
                        <li>pages</li>
                        <li>shop</li>
                        <li>portfolio</li>
                        <li className="menu">blog
                            <ul className="menu-DropDown">
                                <li>asd</li>
                                <li>kj</li>
                                <li>;j</li>
                                <li>;kj</li>
                                <li>p;j</li>
                            </ul>
                            <div className="line">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-Cpm-Img">
                <img src="/img/CmpHeader.jpg" alt=""/>
            </div>

        </header>
    );
};

export default CmpHeader;