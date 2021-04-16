import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyCooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Contact></Contact>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;