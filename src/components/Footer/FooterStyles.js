import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const FooterContainer = styled.div`
  padding: 100px 10% 20px 10%;
`;
export const ContactInfo = styled.div`
text-align: left;
`;

export const Title = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 124.5%;
  color: #080809;
`;
export const FooterImage = styled.img`
  margin-top: 40px;
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
  font-size: 22px;
  line-height: 26px;
  text-decoration: none;
  margin: 10px 0px;
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
  font-size: 21px;
  line-height: 124.5%;
  /* or 26px */

  color: #000000;
`;
