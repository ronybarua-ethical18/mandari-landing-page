import styled from "styled-components";

export const NewsLetterContainer = styled.div`
  background: #ffcd1a;
  padding: 100px 10%;
  margin-bottom:100px;
  text-align: center;

  @media screen and  (max-width:568px){
    margin-bottom:50px;
  }
`;

export  const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const Title = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-bottom:20px;
  font-size: 33px;
  line-height: 54px;
  text-align: center;
  color: #050505;

  @media screen and (max-width:512px){
    font-size:30px;
    line-height: 46px;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;;
  margin-bottom:10px;
`;
export const Input = styled.input`
  background: #ffffff;
  border-radius: 10px;
  outline: none;
  color: #000;
  border: none;
  padding: 12px 20px;
  margin-right:10px;
`;

export const Button = styled.button`
border:none;
outline:none;
color:white;
cursor:pointer;
padding:12px 20px;
background: #000;
border-radius: 10px;
`
