import React from "react";

import './footer.scss';

import Button from '../button/Button';

import { Link } from "react-router-dom";

import bg from '../../assets/footer-bg1.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div style={{display: 'flex'}}>
                        <div className="logo" style={{flex: 1}}>
                            <img src={logo} alt="" />
                            <Link to="/">Foreign Bells</Link>
                        </div>
                        <div className="footer__social-media-icons" style={{flex: .7}}>
                            <div>
                                <a href="https://www.facebook.com/yadvinder.singh.52493499?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/90/ffffff/facebook.png" alt="facebook"/>
                                </a>
                                <a href="https://www.instagram.com/foreignbells?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/90/ffffff/instagram-new.png" alt="instagram-new"/>
                                </a>
                            </div>
                        </div>
                    </div>    
                    <div className="footer__info">
                        <div className="footer__info__item">
                            <img className="footer__icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/phone--v1.png" alt="phone--v1"/>
                            +91 70870 14394
                        </div>
                        <div className="footer__info__item">
                            <img className="footer__icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/address.png" alt="phone--v1"/>
                            Above YES Bank, Banga Road, Nawanshahr, Punjab, India (PIN: 144514)
                        </div>
                        <div className="footer__info__item">
                            <img className="footer__icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/new-post.png" alt="phone--v1"/>
                            foreignbells@gmail.com
                        </div>
                    </div>
                    
                </div>
                <div className="footer__right">
                    <p className="footer__desc">
                        Hello! Let us know how we can help and we will respond shortly.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Email" name="user_email" required />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <div>
                            <Button>Submit</Button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <hr className="footer__line" />
            <p className="footer__copywrite-text">&copy; {new Date().getFullYear()} Foreign Bells . All rights reserved.</p>
        </div>
    )
}

export default Footer;