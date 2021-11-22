import styled from "styled-components";

export const HomeContentContainer = styled.div`
  display: flex;
  height: 700px;
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", sans-serif;
`;
export const ContentLeft = styled.div`
height:inherit;
z-index:2;
background: #ffcd1a;
background: #ffcd1a;
width:72%;
-webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

`;
export const ContentRight = styled.div`
  height: inherit;
`;
export const RightImage = styled.img`
  height: inherit;
  position:absolute;
  right:0;
`;

