import styled from "styled-components";

export const OurExpertiseContainer = styled.div`
  margin-bottom: 100px;
  padding: 100px 10%;
  background: #fafaff;

  @media screen and (max-width: 568px) {
    padding: 50px 10%;
    margin-bottom: 50px;
  }
`;

export const LeftContent = styled.div`
  text-align: left;
`;
export const Title = styled.h2`
  font-family: Volkhov;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 64px;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: #14183e;

  @media screen and (max-width: 512px) {
    font-size: 40px;
  }
`;

export const Dash = styled.div`
  width: 70px;
  border: 4px solid #fed369;
  border-radius: 25px;
`;
export const Paragraph = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 40px;
  color: #5e6282;
`;

export const RightContent = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const FormalImage = styled.img`
  width: 100%;
`;

export const VectorImage = styled.img`
  position: absolute;
  top: 25px;
  right: 0;
  width: 90px;
  height: 90px;

  @media screen and (max-width: 640px) {
    width: 50px;
    height: 50px;
  }
`;
