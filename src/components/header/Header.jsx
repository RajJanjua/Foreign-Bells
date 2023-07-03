import React, {useEffect, useRef} from 'react';

import {Link, useLocation} from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
    {
        id: 1,
        display: 'Home',
        path: '/'
    },
    {
        id: 2,
        display: 'Our Services',
        path: '/our-services'
    },
    {
        id: 3,
        display: 'Testimonials',
        path: '/testimonials'
    },
    {
        id: 4,
        display: 'Contact Us',
        path: '/contact-us'
    }
];

const Header = () => {

    const {pathname} = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Foreign Bells</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} onClick={() => window.scrollTo({ top: 0 })}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>    
        </div>
    );
}

export default Header;