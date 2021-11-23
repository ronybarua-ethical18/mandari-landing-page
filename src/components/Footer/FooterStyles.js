import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const FooterContainer = styled.div`
  padding: 0px 10% 50px 10%;

  @media screen and (max-width:568px){
    padding: 0px 6% 20px 6%;
  }
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
  margin-bottom:10px;
  line-height: 124.5%;
  color: #080809;

  @media screen and (max-width:568px){
    font-size:16px;
    line-height:120%;
  }
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
  margin-bottom:10px;
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

  @media screen and (max-width:568px){
    margin:5px 0px;
    font-size:14px;
    line-height:24px;
  }
`;
export const AddressBar = styled.div`
  text-align: left;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  white-space: wrap;
`;
export const Address = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  margin-top: 0;
  margin-bottom: 20px;
  color: #000000;
  
  @media screen and (max-width:568px){
    font-size:14px;
    
  }
`;

export const InfoTitle = styled.h6`
font-weight:bold;
font-size:16px;
margin:0;
`
