import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10%;
`;
export const BrandLogo = styled.img`
  width: 95px;
  height: 120px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  text-decoration:none;
  margin:0 10px;
`;
