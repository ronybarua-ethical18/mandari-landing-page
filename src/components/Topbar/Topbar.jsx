import React from "react";
import {
  TopbarContainer,
  BrandLogo,
  NavbarContainer,
  NavLink,
  Bar,
} from "./TopbarStyles";
import brand from "../../images/10.png";
const Topbar = ({ toggle }) => {
  return (
    <>
      <TopbarContainer>
        <BrandLogo src={brand} alt="brandLogo" />
        <Bar onClick={toggle} />
        <NavbarContainer>
          <NavLink to="/">Hvem er vi?</NavLink>
          <NavLink to="/">Kontakt</NavLink>
          <NavLink to="/">Visjon </NavLink>
          <NavLink to="/">Språk</NavLink>
        </NavbarContainer>
      </TopbarContainer>
    </>
  );
};

export default Topbar;
