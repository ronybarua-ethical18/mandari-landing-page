import React, { useState } from 'react';
import HomeContent from '../../components/HomeContent/HomeContent';
import CanDo from '../../components/CanDo/CanDo';
import AboutUs from '../../components/AboutUs/AboutUs';
import { HomeContainer } from './HomeStyles'
import OurExpertise from '../../components/OurExpertise/OurExpertise';
import Testimonial from '../../components/Testimonial/Testimonial';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <HomeContainer>
            <HomeContent toggle={toggle} isOpen={isOpen} />
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