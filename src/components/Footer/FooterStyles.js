import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const FooterContainer = styled.div`
  padding: 0px 10% 50px 10%;
`;
export const ContactInfo = styled.div`
  text-align: left;
`;

export const Title = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-top: 0;
  line-height: 124.5%;
  color: #080809;
`;

export const  ImageWrapper = styled.div`
display:flex;
justify-content:flex-start;
`

export const FooterImage = styled.img`
  width: 95px;
  height: 120px;
`;
export const FooterTitle = styled.h6`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 124.5%;
  color: #5e6282;
`;

export const Terms = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  margin: 8px 0px;
  letter-spacing: 0.02em;
  color: #5e6282;
`;
export const AddressBar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Address = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  margin-top: 0;
  margin-bottom: 20px;
  color: #000000;
`;
