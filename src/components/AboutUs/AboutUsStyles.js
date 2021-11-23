import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const AboutUSContainer = styled.div`
  margin-bottom: 100px;
  padding: 0 10% 100px 10%;
  text-align: left;
`;
export const Title = styled.h2`
  font-family: Volkhov;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  margin-left: 10px;
  line-height: 64px;
  text-transform: capitalize;
  color: #ebbe2b;

  @media screen and (max-width: 648px) {
    font-size: 30px;
  }
  @media screen and (max-width: 512px) {
    font-size: 20px;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 648px) {
    flex-wrap: wrap;
  }
`;

export const Paragraph = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 49px;
  text-align: left;
  margin: 0;
  z-index:3;
  color: #5e6282;
`;

export const RoundShape = styled.img``;

export const Teacher = styled.img`
  width: 100%;
  z-index:2;
`;

export const OverlaySection = styled.div`
  position: relative;
  display: flex;
  top:30px;
  align-items: center;
`;

export const LeftOverlay = styled.img`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 100px;
  height: 100px;
  z-index:1;
`;
export const RightOverlay = styled.img`
  position: absolute;
  bottom: -15px;
  right: -15px;
  width:150px;
  height:150px;
`;
export const RoundOverlay =styled.div`
position:relative;
`
export const SmallShape = styled.img`
position:absolute;
bottom: 30%;
right: 5%;
width:30px;
height:30px;
z-index:1;
`

export const NavLink = styled(Link)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 180%;
  text-decoration-line: underline;
  color: #696984;
  margin-bottom:50px;
`;
