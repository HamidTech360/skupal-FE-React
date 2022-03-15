import React from 'react';
import AppHeader from '../../components/header';
import BreadCumb from '../about-us/components/breadcumbs';
import Details from './components/details';
import NewsLetter from '../about-us/components/newsletter';
import FOoter from '../../components/footer-light';

const ContactUs = () => {
    return ( 
        <div className="contact-us">
            <AppHeader/>
            <BreadCumb/>
            <Details/>
            <NewsLetter/>
            <FOoter/>
        </div>
     );
}
 
export default ContactUs;