import React from "react";
import { Grid } from "@material-ui/core";
import {
  FooterContainer,
  ContactInfo,
  Title,
  Terms,
  NavLink,
  AddressBar,
  Address,
  FooterImage,
  FooterTitle
} from "./FooterStyles";
import brand from "../../images/10.png";
const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <FooterImage src={brand} alt="brand" />
        </Grid>
        <Grid item md={2}>
          <ContactInfo>
            <Title>MANDARI</Title>
            <Terms>
              <NavLink to="/">Hvem er vi?</NavLink>
              <NavLink to="/">Språk</NavLink>
              <NavLink to="/">Visjon</NavLink>
            </Terms>
          </ContactInfo>
        </Grid>
        <Grid item md={2}>
          <ContactInfo>
            <Title>KONTAKT</Title>
            <Terms>
              <NavLink to="/">Help/FAQ</NavLink>
              <NavLink to="/">Press</NavLink>
            </Terms>
          </ContactInfo>
        </Grid>
        <Grid item md={5}>
          <AddressBar>
            <Address>
              <strong>Adresse:</strong> <br />
              Hafrsfjordgata 29 A, 0268 Oslo
            </Address>
            <Address>
              <strong>Telefon</strong> <br />
              41498616 /95828903 <br />
              E-post <br />Serina.bru@mandari.no (finnes det e-post på
              kontakt@mandari.no ?)
            </Address>
          </AddressBar>
        </Grid>
      </Grid>
      <FooterTitle>All rights reserved @mandari</FooterTitle>
    </FooterContainer>
  );
};

export default Footer;
