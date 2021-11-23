import styled from "styled-components";

export const TestimonialContainer = styled.div`
margin-bottom:100px;
padding: 0px 15%;

@media screen and (max-width:768px){
  margin-bottom:70px;
  padding: 0px 10%;
}
`;
export const SmallTitle = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-bottom:10px;
  text-transform: uppercase;
  color: #5e6282;
`;

export const Title = styled.h2`
font-family: Volkhov;
font-style: normal;
font-weight: bold;
font-size: 50px;
margin:0;
line-height: 64px;
text-transform: capitalize;
color: #14183E;

@media screen and (max-width:600px){
  font-size: 35px;
}
`
export const LeftContent = styled.div`
text-align:left;
`
export const RightContent = styled.div``
