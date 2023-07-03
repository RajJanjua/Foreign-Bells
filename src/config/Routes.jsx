import React from "react";

import {Route, Routes as Path} from 'react-router-dom';

import Home from "../pages/home/Home";
import OurServices from "../pages/our-services/OurServices";
import ContactUs from "../pages/contact-us/ContactUs";

const Routes = () => {
    return ( 
        <Path>
            <Route 
                path='/'
                exact
                element={<Home/>}
            />
            <Route 
                path='/our-services'
                element={<OurServices/>}
            />
            <Route
                path='/contact-us'
                element={<ContactUs/>}
            />
        </Path>
    );
}

export default Routes;