import React, { useEffect } from 'react';
import scrollreveal from 'scrollreveal';

import './contact-us.scss';

import Button, {OutlineButton} from '../../components/button/Button';

import bg from '../../assets/background_top2.jpg';

const ContactUs = () => {
    const cordinates = {
        lat: 31.129258,
        long: 76.116675
    }

    useEffect(() => {
        const sr_left = scrollreveal({
            origin: "left",
            distance: "80px",
            duration: 500,
            reset: false,
        });

        sr_left.reveal(`.contact-us__header, .title`,{ opacity: 0, interval: 300, });

        const sr_right = scrollreveal({
            origin: "right",
            distance: "80px",
            duration: 500,
            reset: false,
        });

        sr_right.reveal(` `,{ opacity: 0, interval: 300, });

        const sr_bottom = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 500,
          reset: false,
        });

        sr_bottom.reveal(`.input, .textarea, .form-btn, .maps, .whatsapp`, { opacity: 0, interval: 300, });

    }, []);

    return (
        <>
            <div className="contact-us__header" style={{ backgroundImage: `url(${bg})` }}>
                <h2>Contact Us</h2>
            </div>
            <div className="contact-us container mb-3">
                <div className="contact-us__left">
                    <div className="title">
                        <h2>Got Immigration or Visa Problems?<br/>Lets Start a Conversation Today !</h2>
                    </div>
                    <form>
                        <input className='input' type="text" placeholder="Name" name="user_name" />
                        <input className='input' type="email" placeholder="Email" name="user_email" required/>
                        <input className='input' type="text" placeholder='Subject' name="user_subject" />
                        <input className='input' type="tel" placeholder='Contact No.' name="user_contact" required/>
                        <textarea className='textarea' rows="5" placeholder="Message" name="message"/>
                        <div className='form-btn'>
                            <Button>Send</Button>
                        </div>
                    </form>
                    <div className='whatsapp'>
                        <h3>Or</h3>
                        <div className="whatsapp__btn">
                            <OutlineButton>
                                <a href="https://wa.me/917087014394" className="whatsapp__btn-content" target='__blank'>
                                    <img src="https://img.icons8.com/color/30/whatsapp--v1.png" alt="whatsapp"  />
                                    Message us on Whats-App
                                </a>
                            </OutlineButton>
                        </div>
                    </div>
                </div>
                <div className="contact-us__right">
                    <iframe className='maps' title="Google Maps" src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1707.6483475972807!2d${cordinates.long}!3d${cordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA3JzQ1LjMiTiA3NsKwMDcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1686758470882!5m2!1sen!2sin`} allowfullscreen="" loading="eager" aria-hidden="false" tabIndex="0" ></iframe>                
                </div>
            </div>
        </>
    )
}

export default ContactUs;