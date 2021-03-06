import React, { useState } from "react";
import {
  HomeContentContainer,
  ContentLeft,
  ContentRight,
  RightImage,
} from "./HomeContentStyles";
import rightImage from "../../images/14.png";
import Topbar from "../Topbar/Topbar";
import HomeText from "../HomeText/HomeText";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const HomeContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HomeContentContainer>
      <ContentLeft>
        <Topbar toggle={toggle} />
        <MobileNavbar toggle={toggle} isOpen={isOpen} />
        <HomeText />
      </ContentLeft>
      <ContentRight>
        <RightImage src={rightImage} alt="right" />
      </ContentRight>
    </HomeContentContainer>
  );
};

export default HomeContent;
