import React from 'react';
import Banner from '../../Banner/Banner';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;