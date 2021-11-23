import styled from "styled-components";

export const CanDoContainer = styled.div`
  margin: 100px 0px;
  font-family: "Poppins", sans-serif;
  padding: 0px 10%;

  @media screen and (max-width:568px){
    margin:50px 0px;
  }
`;
export const CanDoTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #565656;
  line-height: 70.75px;
  letter-spacing: 0.02rem;
  margin-bottom: 50px;

  @media screen and (max-width:568px){
    font-weight:35px;
  }
`;
export const StrongTitle = styled.strong`
  color: #ffcd1a;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: #df6951;
  border-radius: 30px 0px 10px;
  bottom: -50px;
  left: -20px;
  z-index:1;
  display:none;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index:2;
  &:hover ${Overlay}{
     display:block; 
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px 60px 10px;
  z-index:3;
  position:relative;

  &:hover {
    background: #ffcd1a;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 36px;
    cursor:pointer;
  }
`;



export const Title = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #1e1d4c;
`;

export const Dash = styled.div`
  background: #c4c4c4;
  height: 3px;
  width: 43px;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: #5e6282;
  margin: 0;
`;
