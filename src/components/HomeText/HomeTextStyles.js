import styled from "styled-components";

export const HomeTextContainer = styled.div`
  padding: 50px 25% 50px 10%;
  text-align: left;
  position: relative;
  @media screen and (max-width: 992px) {
    padding: 30px 10%;
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0.02rem;
  color: #000;
  margin: 0;
  line-height: 126.9%;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 512px) {
    font-size: 40px;
  }
`;
export const Dash = styled.div`
  width: 65px;
  border: 6px solid #000;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
`;
export const SubTitle = styled.h3`
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 0.02rem;
  color: black;
  line-height: 126.9%;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 568px) {
    font-size: 20px;
  }
`;

export const FillShape = styled.img`
  position: absolute;
  top: 0;
  left: 45%;
  z-index: -1;
`;
export const SquareShape = styled.img`
  position: absolute;
  top: 5%;
  right: 20%;
  z-index: -1;
`;
export const RoundShape = styled.img`
  position: absolute;
  top: 50%;
  left: 60%;
  z-index: -1;
`;
