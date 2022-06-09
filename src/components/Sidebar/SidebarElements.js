import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  height: 100%;
  width: 230px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #242025;
  overflow-x: hidden;
  padding-top: 20px;
  
  a {
    color: #dca69c;
  }
`;

export const SidebarLinks = styled.div`
  padding: 6px 8px 6px 26px;
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  transition: all 300ms ease;

  &:hover {
    color: rgb(255, 255, 255);
    transition: all 300ms ease;
  }
`;
