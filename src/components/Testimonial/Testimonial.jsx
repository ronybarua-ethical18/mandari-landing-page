import React from "react";
import { Grid } from "@material-ui/core";
import {
  TestimonialContainer,
  LeftContent,
  RightContent,
  SmallTitle,
  Title,
} from "./TestimonialStyles";
import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel";
const Testimonial = () => {
  return (
    <TestimonialContainer>
      <Grid container spacing={3}>
        <Grid item md={6} sm={12} xs={12}>
          <LeftContent>
            <SmallTitle>Testimonials</SmallTitle>
            <Title>
              What Peopole Say <br /> About Us
            </Title>
          </LeftContent>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <RightContent>
            <TestimonialCarousel />
          </RightContent>
        </Grid>
      </Grid>
    </TestimonialContainer>
  );
};

export default Testimonial;
