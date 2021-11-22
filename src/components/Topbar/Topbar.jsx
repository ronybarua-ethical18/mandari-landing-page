import React from 'react';
import {  TopbarContainer, BrandLogo, NavbarContainer, NavLink } from './TopbarStyles'
import brand from '../../images/10.png'
const Topbar = () => {
    return (
        <TopbarContainer>
            <BrandLogo src={brand} alt="brandLogo"/>
            <NavbarContainer>
                <NavLink to="/">Hvem er vi?</NavLink>
                <NavLink to="/">Kontakt</NavLink>
                <NavLink to="/">Visjon </NavLink>
                <NavLink to="/">Språk</NavLink>
            </NavbarContainer>
        </TopbarContainer>
    );
};

export default Topbar;