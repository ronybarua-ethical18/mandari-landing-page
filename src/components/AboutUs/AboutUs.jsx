import React from "react";
import {
  AboutUSContainer,
  Title,
  RoundShape,
  SectionHeading,
  Paragraph,
  Teacher,
  VideoSection,
  NavLink,
} from "./AboutUsStyles";
import { Grid } from "@material-ui/core";
import round from "../../images/8.png";
import teacher from "../../images/16.png";
const AboutUs = () => {
  return (
    <AboutUSContainer>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={6}>
          <SectionHeading>
            <RoundShape src={round} alt="round" />
            <Title>Mennesker er gull verdt</Title>
          </SectionHeading>
          <Paragraph>
            Mandari så dagens lys i 2014 i forbindelse med gjennomføringen av en
            flerkulturell musikkfestival på St. Hanshaugen i Oslo. Målet med
            Mandari-festivalen var å promotere afrikansk musikk og kultur og
            skape et samlingssted for mennesker med ulik kulturbakgrunn for å
            dele gleden
          </Paragraph>
          <NavLink to="/">Learn More</NavLink>
        </Grid>
        <Grid item md={6}>
          <VideoSection>
            <Teacher src={teacher} alt="video" />
          </VideoSection>
        </Grid>
      </Grid>
    </AboutUSContainer>
  );
};

export default AboutUs;
