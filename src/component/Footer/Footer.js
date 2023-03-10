import React from 'react';
import {Facebook, Instagram, Telegram, Twitter, YouTube} from "@material-ui/icons";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-Section">
                <img src="/img/logo-swiss-1.png" alt=""/>

            </div>
            <div class="footer-Section">
                <h2>useFull links</h2>
                <ul>
                    <li>about us</li>
                    <li>history</li>
                    <li>our location</li>
                    <li>todays menu</li>
                    <li>menu</li>
                    <li>blog</li>
                </ul>
            </div>
            <div class="footer-Section">
                <h2>favourites</h2>
                <ul>
                    <li>orange pralines</li>
                    <li>amaretti Oreo</li>
                    <li>choco musso</li>
                    <li>american cake</li>

                </ul>

            </div>
            <div class="footer-Section Newsletter">
                <h2>Newsletter</h2>
                <p>
                    Subscribe to get special offers, free gifts and once-in-a-lifetime deals.


                </p>
                <div>
                    <input type="text" placeholder="enter your Email"/>
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="social-Media">
                    <i class="fab fa-telegram"><Telegram/></i>
                    <i class="fab fa-instagram"><Instagram/></i>
                    <i class="fab fa-twitter"><Twitter/></i>
                    <i class="fab fa-facebook"><Facebook/></i>
                    <i class="fab fa-facebook"><YouTube/></i>

                </div>

            </div>





    </footer>


);
};

export default Footer;