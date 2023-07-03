import React, { useEffect } from 'react';
import scrollreveal from 'scrollreveal';

import './our-services.scss';

import bg from '../../assets/background_top2.jpg';
import PNP_icon from '../../assets/PNP_icon.png';

const OurServices = () => {

    useEffect(() => {
        const sr_left = scrollreveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: false,
        });

        sr_left.reveal(
            `
            .our-services__header
            `,
            {
              opacity: 0,
              interval: 300,
            }
          );

        const sr_bottom = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 700,
          reset: false,
        });
        sr_bottom.reveal(
          `.our-services,
          .our-services__card-icon,
          .our-services__card-title,
          .our-services__card-desc
          `,
          {
            opacity: 0,
            interval: 100,
          }
        );
    }, []);

    const services = [
        {
            image: "https://img.icons8.com/external-nawicon-glyph-nawicon/64/ffffff/external-mortarboard-back-to-school-nawicon-glyph-nawicon.png",
            title: "Study Permit",
            description: "Apply to study in Canada as an international student.",
        },
        {
            image: PNP_icon,
            title: "Study Permit Extension",
            description: "You can apply for a study permit extension at least 30 days before your study permit expires, if you want to keep studying in Canada.",
        },
        {
            image: "https://img.icons8.com/external-nawicon-glyph-nawicon/64/ffffff/external-tourist-travel-nawicon-glyph-nawicon.png",
            title: "Visitor Visa / Super Visa",
            description: "A visitor visa (also called a temporary resident visa) is an official document that shows that you meet the requirements needed to enter Canada.",
        },
        {
            image: "https://img.icons8.com/external-nawicon-glyph-nawicon/64/ffffff/external-contract-business-nawicon-glyph-nawicon.png",
            title: "Work / Spouse Open Work Permit",
            description: "You can apply to work in Canada as a temporary worker, business person and student.",
        },
        {
            image: "https://img.icons8.com/external-nawicon-glyph-nawicon/64/ffffff/external-exam-online-learning-nawicon-glyph-nawicon-2.png",
            title: "Express Entry",
            description: "Express Entry is an online system that we use to manage immigration applications from skilled workers.",
        },
        {
            image: "https://img.icons8.com/external-nawicon-glyph-nawicon/64/ffffff/external-worker-construction-nawicon-glyph-nawicon.png",
            title: "Provincial Nominee Program",
            description: "These programs are for workers who have the skills, education and work experience to contribute to the economy of a specific province or territory want to live in that province and want to become permanent residents of Canada.",
        }
    ]

    return (
        <>
            <div className="our-services__header" style={{ backgroundImage: `url(${bg})` }}>
                <h2>Our Services</h2>
            </div>
            <div className="our-services">
                {services.map((service, i) => {
                    return (
                        <div className="our-services__card" key={i}>
                            <div className="our-services__card-icon">
                                <img src={service.image} alt="icon"/>
                            </div>
                            <h3 className='our-services__card-title'>{service.title}</h3>
                            <p className='our-services__card-desc'>{service.description}</p>
                        </div>
                    )
                })}
                    
            </div>
        </>
    );
};

export default OurServices;
