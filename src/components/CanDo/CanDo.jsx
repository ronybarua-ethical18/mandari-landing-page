import React from "react";
import { Grid } from "@material-ui/core";
import {
  CanDoContainer,
  CanDoTitle,
  StrongTitle,
  Content,
  Title,
  Dash,
  Description,
  Overlay,
  ContentWrapper,
} from "./CanDoStyles";
const CanDo = () => {
  return (
    <CanDoContainer>
      <CanDoTitle>
        What you <StrongTitle>can do?</StrongTitle>
      </CanDoTitle>
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>TekVenn</Title>
              <Dash></Dash>
              <Description>
                Gratis kurs i grunnleggende ferdigheter innen hverdagsteknologi
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>Husk å Danse</Title>
              <Dash></Dash>
              <Description>
                Forebygg, brems og håndter demens gjennom dans
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>ODIS</Title>
              <Dash></Dash>
              <Description>
                Gratis kurs i kodig og digitale ferdigheter
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>Spilleadferd</Title>
              <Dash></Dash>
              <Description>
                Info/veiledning til ressurspersoner om spilleavhengighet/adferd
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>Digitalt <br />introprogram</Title>
              <Dash></Dash>
              <Description>
                Kurs i digitale ferdigheter for nyankomne flytninger
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
        <Grid item md={3}>
          <ContentWrapper>
            <Content>
              <Title>Vold i nære <br/>relasjoner</Title>
              <Dash></Dash>
              <Description>
                Verktøy for arbeid mot vold i minoritetsbefolkningen
              </Description>
            </Content>
            <Overlay />
          </ContentWrapper>
        </Grid>
      </Grid>
    </CanDoContainer>
  );
};

export default CanDo;
