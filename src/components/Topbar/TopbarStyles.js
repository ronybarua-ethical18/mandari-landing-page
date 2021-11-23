import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10%;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const BrandLogo = styled.img`
  width: 95px;
  height: 120px;

  @media screen and (max-width: 512px) {
    width: 60px;
    height: 85px;
  }
`;

export const Bar = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;
