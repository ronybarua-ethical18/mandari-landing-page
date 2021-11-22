import React from "react";
import {
  HomeContentContainer,
  ContentLeft,
  ContentRight,
  RightImage
} from "./HomeContentStyles";
import rightImage from "../../images/14.png";
import Topbar from "../Topbar/Topbar";
import HomeText from "../HomeText/HomeText";

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <ContentLeft>
          <Topbar />
          <HomeText />
      </ContentLeft>
      <ContentRight>
        <RightImage src={rightImage} alt="right" />
      </ContentRight>
    </HomeContentContainer>
  );
};

export default HomeContent;
