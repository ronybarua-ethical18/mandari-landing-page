import React from 'react';
import HomeContent from '../../components/HomeContent/HomeContent';
import CanDo from '../../components/CanDo/CanDo';
import AboutUs from '../../components/AboutUs/AboutUs';
import { HomeContainer } from './HomeStyles'
import OurExpertise from '../../components/OurExpertise/OurExpertise';
import Testimonial from '../../components/Testimonial/Testimonial';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    return (
        <HomeContainer>
            <HomeContent/>
            <CanDo />
            <AboutUs />
            <OurExpertise />
            <Testimonial />
            <NewsLetter />
            <Footer />
        </HomeContainer>
    );
};

export default Home;