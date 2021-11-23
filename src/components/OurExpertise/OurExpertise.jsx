import React from "react";
import { Grid } from "@material-ui/core";
import {
  OurExpertiseContainer,
  LeftContent,
  Title,
  Dash,
  Paragraph,
  RightContent,
  FormalImage,
  ImageWrapper,
  VectorImage
} from "./OurExpertiseStyles";
import formal from "../../images/3.png";
import vector from "../../images/2.png";
const OurExpertise = () => {
  return (
    <OurExpertiseContainer>
      <Grid container spacing={4} direction="row"  alignItems="center">
        <Grid item md={6} sm={12} xs={12}>
          <LeftContent>
            <Title>Hvem er vi?</Title>
            <Dash />
            <Paragraph>
              Hvem er vi? Mandari så dagens lys i 2014 i forbindelse med
              gjennomføringen av en flerkulturell musikkfestival på St.
              Hanshaugen i Oslo. Målet med Mandari-festivalen var å promotere
              afrikansk musikk og kultur og skape et samlingssted for mennesker
              med ulik kulturbakgrunn for å dele gleden over musikk og
              fellesskap. Disse verdiene har fått leve videre og utviklet seg
              til det Mandari er i dag, en frivillig organisasjon med mål om å
              bidra til økt kunnskap om mangfold, holdninger, integrering og
              positiv deltakelse i lokalmiljøet. Vi jobber med å bryte ned
              barrierene minoriteter og mennesker med innvandrerbakgrunn
              opplever, og sørge for at alle blir sett,
            </Paragraph>
          </LeftContent>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <RightContent>
            <ImageWrapper>
            <VectorImage src={vector} alt="formal" />
              <FormalImage src={formal} alt="formal" />
            </ImageWrapper>
          </RightContent>
        </Grid>
      </Grid>
    </OurExpertiseContainer>
  );
};

export default OurExpertise;
