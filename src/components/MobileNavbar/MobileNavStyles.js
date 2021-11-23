import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.aside`
  position: fixed;
  z-index: 4;
  background: rgba(255, 205, 26);
  color: white;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  /* z-index:999; */
`;

export const MobileNavWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: inherit;
`;
export const MobileNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  padding: 0;
  grid-template-rows: repeat(4 80px);
  text-align: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
export const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-in-out;
  }
`;

export const SpinTitle = styled.h5`
  margin: 0 10px;
`;

export const BrandLogo = styled.img`
  width: 50px;
  height: 75px;
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
`;
