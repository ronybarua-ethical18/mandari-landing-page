import React from "react";
import { HomeTextContainer, Title, Dash, SubTitle, FillShape, SquareShape, RoundShape } from "./HomeTextStyles";
import fill from '../../images/13.png'
import square from '../../images/12.png'
import round from '../../images/11.png'
const HomeText = () => {
  return (
    <HomeTextContainer>
      <Title>Work the way that works for you</Title>
      <Dash></Dash>
      <SubTitle>Create, Build, Collaborate and ship products <br/> very faster </SubTitle>
      <FillShape src={fill} alt="fill"/>
      <SquareShape src={square} alt="square"/>
      <RoundShape src={round} alt="round"/>
    </HomeTextContainer>
  );
};

export default HomeText;
