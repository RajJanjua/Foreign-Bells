import React, { useEffect } from 'react';
import scrollreveal from 'scrollreveal';

import './home.scss';

import Button from '../../components/button/Button';
import TrainingList from '../../components/training-list/TrainingList';
import WhyChooseUs from '../../components/why-choose-us/WhyChooseUs';

import background from '../../assets/background_img.jpg';
import canadaImage from '../../assets/Home_item.jpg';

const Home = () => {
    const handleMailToClick = () => {
        const mailtoUrl = 'mailto:foreignbells@gmail.com';
        window.location.href = mailtoUrl;
    };

    useEffect(() => {
        const sr_left = scrollreveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: false,
        });

        sr_left.reveal(`.immigration-items, .why-choose-us__left, .Home-item__content__image`,{ opacity: 0, interval: 300, });

        const sr_right = scrollreveal({
            origin: "right",
            distance: "80px",
            duration: 1000,
            reset: false,
        });

        sr_right.reveal(` `,{ opacity: 0, interval: 300, });

        const sr_bottom = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 700,
          reset: false,
        });

        sr_bottom.reveal(`.section__header, .section__paragraph, .why-choose-us__title, .why-choose-us__sub, .why-choose-us__desc, .why-choose-us__flag, .title, .overview, .btns`, { opacity: 0, interval: 200, });

    }, []);

    return (
        <>
            {/* Home item */}
            <div className="Home-item" style={{backgroundImage: `url(${background})`}}>
                <div className="Home-item__content container">
                    <div className="Home-item__content__image">
                        <img src={canadaImage} alt="item" />
                    </div>
                    <div className="Home-item__content__info">
                        <h1 className='title'>Foreign Bells</h1>
                        <h4 className='overview'>IELTS & Immigration Services</h4>
                        <div className="btns">
                            <Button onClick={handleMailToClick}>Contact Now</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Immigration Training */}
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2" style={{flex: 1}}>
                        <h2>Get The Immigration Training You Deserve</h2>
                    </div>
                    <div className="section__paragraph mb-2" style={{flex: 1}}>
                        <p>English has commonly spoken language with everyone who have been staying very far away from us but obviously, needs to communicate with one compulsory language "English".</p>
                    </div> 
                </div>
                <TrainingList />
            </div>

            {/* Why Choose Us */}
            <WhyChooseUs />
        </>
    )
}

export default Home;