import styled from "styled-components";

export const CarouselContainer = styled.div`
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 10px;
  width:100%;
`;
export const CarouselItem = styled.div`
  display: flex;
  padding: 20px;
  background: #ffffff;

  @media screen and (max-width:768px){
    display:flex;
    flex-direction:column;

  }
`;
export const TestimonialContainer = styled.div`
  text-align: left;
`;

export const Feedback = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #5e6282;
  margin-bottom: 30px;
`;
export const Name = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -20px;
  font-size: 18px;
  color: #5e6282;

`;
export const Title = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #5e6282;
`;

export const CarouselImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin-right: 20px;
  border:1px solid lightgray;
`;
