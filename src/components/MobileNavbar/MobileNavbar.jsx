import React from "react";
import {
  NavigationContainer,
  Icon,
  CloseIcon,
  MobileNavWrapper,
  MobileNavMenu,
  MobileNavLink,
  BrandLogo
} from "./MobileNavStyles";
import brand from '../../images/10.png'

const MobileNavbar = ({ toggle, isOpen }) => {
  return (
    <NavigationContainer isOpen={isOpen}>
        <BrandLogo src={brand} alt="brand"/>
        <Icon onClick={toggle}>
          <CloseIcon></CloseIcon>
        </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink to="/flight" className="item">
            Hvem er vi?
          </MobileNavLink>
          <MobileNavLink to="/" className="item">
            Kontakt
          </MobileNavLink>
          <MobileNavLink to="/hotel" className="item">
            Visjon
          </MobileNavLink>
          <MobileNavLink to="/visa" className="item">
            Språk
          </MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </NavigationContainer>
  );
};

export default MobileNavbar;
