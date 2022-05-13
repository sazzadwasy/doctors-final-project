import React from 'react';
import Banner from '../../Banner/Banner';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Footer from '../../Shared/Footer/Footer';
import ContactUs from '../Contact/ContactUs';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;