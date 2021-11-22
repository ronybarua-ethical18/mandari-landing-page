import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const AboutUSContainer = styled.div`
  margin-bottom: 100px;
  padding: 0 10%;
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
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 49px;
  text-align: left;
  margin: 0;
  color: #5e6282;
`;

export const RoundShape = styled.img``;

export const Teacher = styled.img`
  width: 100%;
`;

export const VideoSection = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(Link)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 180%;
  text-decoration-line: underline;
  color: #696984;
`;
