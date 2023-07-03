import React from 'react';

import './training-list.scss';

import SwiperCore, { Autoplay } from 'swiper/core';
import { SwiperSlide, Swiper } from 'swiper/react';

import bg2 from '../../assets/bg-2.jpg';
import bg3 from '../../assets/bg-3.jpg';
import bg4 from '../../assets/bg-4.jpg';
import bg5 from '../../assets/bg-5.jpg';

const TrainingList = () => {
    SwiperCore.use([Autoplay]);

    const slides = [
        {
          image: bg5,
          text: 'Spoken English',
          description: 'English is a global language and is accepted and supported everywhere including India. Speaking in English makes a person look more confident as this kind of interaction adds to our personality quite positively.'
        },
        {
          image: bg2,
          text: 'IELTS Preparation',
          description: 'Our training programs are crafted in such a way that it gives sufficient practice to the students in the techniques required for taking the IELTS Test with full confidence. Our focused training program gives the candidates enough grounding to obtain high scores in IELTS.'
        },
        {
          image: bg3,
          text: 'Interview Techniques',
          description: 'Foreign Bells also prepares its clients according to their prospective requirements of the different segments whether they wish to be ready for the corporate world or for global education (study abroad).'
        },
        {
          image: bg4,
          text: 'Personality Development',
          description: 'Personality development or personal development is the enhancement of some definite life skills which are essential to make the growth of happiness and success possible in one\'s life.'
        }
    ];

    const duplicatedSlides = [...slides, ...slides];

    

    return (
        <div className="immigration-items mb-3">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                loopedSlides={slides.length}
            >
                {duplicatedSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="immigration-item" style={{ backgroundImage: `url(${slide.image})` }}>
                          <p className='paragraph'>{slide.description}</p>
                      </div>
                      <h3 className='title'>{slide.text}</h3>
                    </SwiperSlide>
                ))} 
            </Swiper>
        </div>
    )
}

export default TrainingList;
