import styled from "styled-components";

export const HomeContentContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", sans-serif;

  @media screen and (max-width:992px){
    height:100vh;
  }
`;
export const ContentLeft = styled.div`
  height: inherit;
  z-index: 2;
  background: #ffcd1a;
  width: 72%;
  -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

  @media screen and (max-width: 992px) {
    width: 100%;
    background: rgba(255, 205, 26, 0.9);
    -webkit-clip-path: none;
    clip-path: none;
  }
`;
export const ContentRight = styled.div`
  height: inherit;
`;
export const RightImage = styled.img`
  height: inherit;
  position: absolute;
  right: 0;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
