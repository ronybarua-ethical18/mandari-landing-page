import React from "react";
import {
  AboutUSContainer,
  Title,
  RoundShape,
  SectionHeading,
  Paragraph,
  Teacher,
  OverlaySection,
  NavLink,
  RoundOverlay,
  SmallShape,
  LeftOverlay,
  RightOverlay
} from "./AboutUsStyles";
import { Grid } from "@material-ui/core";
import round from "../../images/8.png";
import teacher from "../../images/16.png";
import leftOverlay from "../../images/7.png";
import rightOverlay from "../../images/6.png";
import roundShape from "../../images/8.png";
const AboutUs = () => {
  return (
    <AboutUSContainer>
      <Grid container alignItems="center" spacing={4}>
        <Grid item md={6} sm={12}>
          <SectionHeading>
            <RoundShape src={round} alt="round" />
            <Title>Mennesker er gull verdt</Title>
          </SectionHeading>
         <RoundOverlay>
            <Paragraph>
              Mandari så dagens lys i 2014 i forbindelse med gjennomføringen av en
              flerkulturell musikkfestival på St. Hanshaugen i Oslo. Målet med
              Mandari-festivalen var å promotere afrikansk musikk og kultur og
              skape et samlingssted for mennesker med ulik kulturbakgrunn for å
              dele gleden
            </Paragraph>
            <SmallShape src={roundShape} alt="roundShape"/>
         </RoundOverlay>
          <NavLink to="/">Learn More</NavLink>
        </Grid>
        <Grid item md={6} sm={12}>
          <OverlaySection>
            <LeftOverlay src={leftOverlay} alt="leftOverlay"/>
            <RightOverlay src={rightOverlay} alt="rightOverlay" />
            <Teacher src={teacher} alt="video" />
          </OverlaySection>
        </Grid>
      </Grid>
    </AboutUSContainer>
  );
};

export default AboutUs;
